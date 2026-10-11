/**
 * Ananth Aahara — Onboarding Screen.
 * First-launch: logo, hero panel, name + email form, validation, local save.
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import Colors from '../constants/colors';
import { LogoMark } from '../components/Icons';
import { setOnboardingComplete, saveProfile } from '../utils/storage';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function OnboardingScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!firstName.trim()) e.firstName = 'Name is required.';
    if (!email.trim()) e.email = 'Email is required.';
    else if (!EMAIL_RE.test(email)) e.email = 'Enter a valid email address.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleContinue = async () => {
    if (!validate()) return;
    await saveProfile({
      firstName: firstName.trim(),
      lastName: '',
      email: email.trim(),
      phone: '',
      notifications: {
        orderUpdates: true,
        accountSecurity: true,
        specialOffers: true,
        newsletter: false,
      },
    });
    await setOnboardingComplete();
    navigation.reset({ index: 0, routes: [{ name: 'Home' }] });
  };

  const isValid = firstName.trim().length > 0 && EMAIL_RE.test(email);

  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        style={styles.flex}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo row */}
        <View style={styles.logoRow}>
          <LogoMark size={42} color={Colors.primaryOrange} />
          <Text style={styles.logoText}>Ananth Aahara</Text>
        </View>

        {/* Hero panel */}
        <View style={styles.heroPanel}>
          <View style={styles.heroTextBlock}>
            <Text style={styles.heroTitle}>Ananth Aahara</Text>
            <Text style={styles.heroSubtitle}>Authentic Indian Flavours</Text>
            <Text style={styles.heroDesc}>
              Welcome! Freshly prepared meals, traditional recipes, and flavours
              made to feel like home await you.
            </Text>
          </View>
          <Image
            source={require('../../assets/images/hero-food.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Form */}
        <View style={styles.form}>
          <Text style={styles.label}>First Name *</Text>
          <TextInput
            style={[styles.input, errors.firstName && styles.inputError]}
            value={firstName}
            onChangeText={(t) => {
              setFirstName(t);
              if (errors.firstName) setErrors((e) => ({ ...e, firstName: undefined }));
            }}
            placeholder="Enter your name"
            placeholderTextColor={Colors.secondaryText}
            autoCapitalize="words"
          />
          {errors.firstName ? (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          ) : null}

          <Text style={[styles.label, { marginTop: 14 }]}>Email *</Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            value={email}
            onChangeText={(t) => {
              setEmail(t);
              if (errors.email) setErrors((e) => ({ ...e, email: undefined }));
            }}
            placeholder="Enter your email"
            placeholderTextColor={Colors.secondaryText}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}

          <TouchableOpacity
            style={[styles.continueBtn, !isValid && styles.continueBtnDisabled]}
            onPress={handleContinue}
            activeOpacity={0.8}
            disabled={!isValid}
          >
            <Text style={styles.continueBtnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: Colors.backgroundCream },
  scroll: { paddingBottom: 40 },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    gap: 8,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  logoText: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primaryText,
  },
  heroPanel: {
    backgroundColor: Colors.primaryOrange,
    paddingHorizontal: 16,
    paddingVertical: 22,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  heroTextBlock: { flex: 1, marginRight: 12 },
  heroTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: Colors.white,
    marginBottom: 2,
  },
  heroSubtitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FFF3E0',
    marginBottom: 8,
  },
  heroDesc: {
    fontSize: 13,
    lineHeight: 18,
    color: '#FFF8F0',
  },
  heroImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.secondaryText,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
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
  inputError: {
    borderColor: Colors.ctaCoral,
  },
  errorText: {
    fontSize: 12,
    color: Colors.ctaCoral,
    marginTop: 4,
  },
  continueBtn: {
    marginTop: 24,
    backgroundColor: Colors.ctaCoral,
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtnDisabled: {
    opacity: 0.5,
  },
  continueBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.white,
  },
});
