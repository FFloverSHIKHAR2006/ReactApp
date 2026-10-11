/**
 * Ananth Aahara — Profile Screen.
 * Back + logo header, avatar, personal info fields, notification prefs,
 * Log out / Discard / Save buttons.
 */
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import Colors from '../constants/colors';
import { LogoMark, BackIcon, ProfileIcon, CheckboxIcon } from '../components/Icons';
import {
  getProfile,
  saveProfile,
  clearProfile,
  clearOnboarding,
} from '../utils/storage';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_PROFILE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  notifications: {
    orderUpdates: true,
    accountSecurity: true,
    specialOffers: true,
    newsletter: false,
  },
};

export default function ProfileScreen({ navigation }) {
  const [profile, setProfile] = useState(DEFAULT_PROFILE);
  const [saved, setSaved] = useState(DEFAULT_PROFILE);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState('');

  // Load saved profile on mount.
  useEffect(() => {
    (async () => {
      const p = await getProfile();
      if (p) {
        const merged = {
          ...DEFAULT_PROFILE,
          ...p,
          notifications: { ...DEFAULT_PROFILE.notifications, ...(p.notifications || {}) },
        };
        setProfile(merged);
        setSaved(merged);
      }
    })();
  }, []);

  const setField = (key, value) => {
    setProfile((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    setFeedback('');
  };

  const toggleNotification = (key) => {
    setProfile((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key],
      },
    }));
    setFeedback('');
  };

  const validate = () => {
    const e = {};
    if (!profile.firstName.trim()) e.firstName = 'First name is required.';
    if (!profile.email.trim()) e.email = 'Email is required.';
    else if (!EMAIL_RE.test(profile.email)) e.email = 'Enter a valid email.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSave = async () => {
    if (!validate()) return;
    await saveProfile(profile);
    setSaved(profile);
    setFeedback('Profile saved successfully.');
    setTimeout(() => setFeedback(''), 3000);
  };

  const handleDiscard = () => {
    setProfile(saved);
    setErrors({});
    setFeedback('Changes discarded.');
    setTimeout(() => setFeedback(''), 3000);
  };

  const handleLogout = () => {
    Alert.alert('Log out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log out',
        style: 'destructive',
        onPress: async () => {
          await clearProfile();
          await clearOnboarding();
          navigation.reset({ index: 0, routes: [{ name: 'Onboarding' }] });
        },
      },
    ]);
  };

  const initials = (
    (profile.firstName ? profile.firstName[0] : '') +
    (profile.lastName ? profile.lastName[0] : '')
  ).toUpperCase();

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          style={styles.backBtn}
        >
          <BackIcon size={24} color={Colors.primaryText} />
        </TouchableOpacity>
        <View style={styles.headerBrand}>
          <LogoMark size={30} color={Colors.primaryOrange} />
          <Text style={styles.headerTitle}>Ananth Aahara</Text>
        </View>
        <View style={{ width: 32 }} />
      </View>

      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* Avatar */}
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            {initials ? (
              <Text style={styles.avatarText}>{initials}</Text>
            ) : (
              <ProfileIcon size={36} color={Colors.secondaryText} />
            )}
          </View>
          <View style={styles.avatarActions}>
            <TouchableOpacity style={styles.avatarBtn}>
              <Text style={styles.avatarBtnText}>Change</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.avatarBtnOutline}>
              <Text style={styles.avatarBtnOutlineText}>Remove</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Personal information */}
        <Text style={styles.sectionTitle}>Personal information</Text>

        <Text style={styles.label}>First name</Text>
        <TextInput
          style={[styles.input, errors.firstName && styles.inputError]}
          value={profile.firstName}
          onChangeText={(t) => setField('firstName', t)}
          placeholder="First name"
          placeholderTextColor={Colors.secondaryText}
          autoCapitalize="words"
        />
        {errors.firstName ? (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        ) : null}

        <Text style={styles.label}>Last name</Text>
        <TextInput
          style={styles.input}
          value={profile.lastName}
          onChangeText={(t) => setField('lastName', t)}
          placeholder="Last name"
          placeholderTextColor={Colors.secondaryText}
          autoCapitalize="words"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          value={profile.email}
          onChangeText={(t) => setField('email', t)}
          placeholder="Email"
          placeholderTextColor={Colors.secondaryText}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}

        <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          value={profile.phone}
          onChangeText={(t) => setField('phone', t)}
          placeholder="Phone number"
          placeholderTextColor={Colors.secondaryText}
          keyboardType="phone-pad"
        />

        {/* Email notifications */}
        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>
          Email notifications
        </Text>

        {[
          { key: 'orderUpdates', label: 'Order updates' },
          { key: 'accountSecurity', label: 'Account and security updates' },
          { key: 'specialOffers', label: 'Special offers' },
          { key: 'newsletter', label: 'Newsletter' },
        ].map(({ key, label }) => (
          <TouchableOpacity
            key={key}
            style={styles.checkRow}
            onPress={() => toggleNotification(key)}
            activeOpacity={0.7}
          >
            <CheckboxIcon
              checked={profile.notifications[key]}
              size={22}
              color={Colors.primaryOrange}
            />
            <Text style={styles.checkLabel}>{label}</Text>
          </TouchableOpacity>
        ))}

        {/* Feedback message */}
        {feedback ? (
          <View style={styles.feedbackBox}>
            <Text style={styles.feedbackText}>{feedback}</Text>
          </View>
        ) : null}

        {/* Log out */}
        <TouchableOpacity
          style={styles.logoutBtn}
          onPress={handleLogout}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutBtnText}>Log out</Text>
        </TouchableOpacity>

        {/* Discard / Save row */}
        <View style={styles.actionRow}>
          <TouchableOpacity
            style={styles.discardBtn}
            onPress={handleDiscard}
            activeOpacity={0.7}
          >
            <Text style={styles.discardBtnText}>Discard changes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveBtn}
            onPress={handleSave}
            activeOpacity={0.8}
          >
            <Text style={styles.saveBtnText}>Save changes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: Colors.backgroundCream },
  scroll: { paddingHorizontal: 20, paddingBottom: 40 },

  /* Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  backBtn: { padding: 4 },
  headerBrand: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  headerTitle: { fontSize: 18, fontWeight: '700', color: Colors.primaryText },

  /* Avatar */
  avatarSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primaryOrange,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.white,
  },
  avatarActions: { flexDirection: 'row', gap: 10 },
  avatarBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: Colors.primaryOrange,
    borderRadius: 8,
  },
  avatarBtnText: { fontSize: 13, fontWeight: '600', color: Colors.white },
  avatarBtnOutline: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
  },
  avatarBtnOutlineText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.secondaryText,
  },

  /* Section / form */
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primaryText,
    marginBottom: 14,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.secondaryText,
    marginBottom: 4,
    marginTop: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: 15,
    color: Colors.primaryText,
    backgroundColor: Colors.white,
  },
  inputError: { borderColor: Colors.ctaCoral },
  errorText: { fontSize: 12, color: Colors.ctaCoral, marginTop: 3 },

  /* Checkboxes */
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 10,
  },
  checkLabel: { fontSize: 14, color: Colors.primaryText },

  /* Feedback */
  feedbackBox: {
    marginTop: 14,
    backgroundColor: '#E8F5E9',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  feedbackText: { fontSize: 13, color: '#2E7D32', fontWeight: '600' },

  /* Buttons */
  logoutBtn: {
    marginTop: 20,
    backgroundColor: Colors.ctaCoral,
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBtnText: { fontSize: 15, fontWeight: '700', color: Colors.white },

  actionRow: {
    flexDirection: 'row',
    marginTop: 14,
    gap: 12,
  },
  discardBtn: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: Colors.primaryOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  discardBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primaryOrange,
  },
  saveBtn: {
    flex: 1,
    height: 48,
    borderRadius: 8,
    backgroundColor: Colors.primaryOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveBtnText: { fontSize: 14, fontWeight: '700', color: Colors.white },
});
