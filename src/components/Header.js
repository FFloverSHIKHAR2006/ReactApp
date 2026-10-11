/**
 * Ananth Aahara — Header component.
 * Logo + wordmark on the left, profile icon on the right.
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import { LogoMark, ProfileIcon } from './Icons';

export default function Header({ onProfilePress }) {
  return (
    <View style={styles.container}>
      <View style={styles.brand}>
        <LogoMark size={36} color={Colors.primaryOrange} />
        <Text style={styles.wordmark}>Ananth Aahara</Text>
      </View>
      <TouchableOpacity
        onPress={onProfilePress}
        style={styles.profileBtn}
        accessibilityLabel="Open profile"
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <View style={styles.profileCircle}>
          <ProfileIcon size={22} color={Colors.secondaryText} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  wordmark: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primaryText,
    letterSpacing: 0.3,
  },
  profileBtn: {
    padding: 2,
  },
  profileCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: Colors.backgroundCream,
    borderWidth: 1.5,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
