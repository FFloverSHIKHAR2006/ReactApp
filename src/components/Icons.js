/**
 * Ananth Aahara — Lightweight, zero-dependency vector icons.
 * Built using React Native View primitives for 100% cross-platform
 * reliability (iOS, Android, Web) without requiring native SVG compilation.
 * No emojis are used anywhere in accordance with design requirements.
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * Ananth Aahara Logo Mark
 * Stylized Indian Thali / Serving Plate with a spice-leaf / flame motif.
 */
export function LogoMark({ size = 36, color = '#FC8019' }) {
  const scale = size / 36;
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      accessibilityRole="image"
      accessibilityLabel="Ananth Aahara Logo"
    >
      {/* Outer serving plate */}
      <View
        style={{
          width: 34 * scale,
          height: 34 * scale,
          borderRadius: 17 * scale,
          borderWidth: 2.2 * scale,
          borderColor: color,
          backgroundColor: '#FFF8F0',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Inner plate rim */}
        <View
          style={{
            width: 24 * scale,
            height: 24 * scale,
            borderRadius: 12 * scale,
            borderWidth: 1.2 * scale,
            borderColor: color,
            opacity: 0.45,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        {/* Central leaf / flame crest */}
        <View
          style={{
            position: 'absolute',
            width: 12 * scale,
            height: 16 * scale,
            backgroundColor: color,
            borderTopLeftRadius: 10 * scale,
            borderBottomRightRadius: 10 * scale,
            borderTopRightRadius: 2 * scale,
            borderBottomLeftRadius: 2 * scale,
            transform: [{ rotate: '-15deg' }],
          }}
        />
        {/* Leaf inner vein */}
        <View
          style={{
            position: 'absolute',
            width: 1.5 * scale,
            height: 12 * scale,
            backgroundColor: '#FFFFFF',
            opacity: 0.8,
          }}
        />
      </View>
    </View>
  );
}

/**
 * Gender-Neutral Profile Icon
 * Clean silhouette with circular head and rounded shoulder base.
 */
export function ProfileIcon({ size = 28, color = '#74675F' }) {
  const scale = size / 28;
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
      accessibilityRole="image"
      accessibilityLabel="Profile Icon"
    >
      {/* Head */}
      <View
        style={{
          width: 10 * scale,
          height: 10 * scale,
          borderRadius: 5 * scale,
          borderWidth: 1.8 * scale,
          borderColor: color,
          marginBottom: 2 * scale,
        }}
      />
      {/* Shoulder arc */}
      <View
        style={{
          width: 18 * scale,
          height: 9 * scale,
          borderTopLeftRadius: 9 * scale,
          borderTopRightRadius: 9 * scale,
          borderWidth: 1.8 * scale,
          borderColor: color,
          borderBottomWidth: 0,
        }}
      />
    </View>
  );
}

/**
 * Search Icon
 * Magnifying glass: circular lens with an angled handle.
 */
export function SearchIcon({ size = 20, color = '#74675F' }) {
  const scale = size / 20;
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
      accessibilityRole="image"
      accessibilityLabel="Search Icon"
    >
      {/* Lens */}
      <View
        style={{
          width: 12 * scale,
          height: 12 * scale,
          borderRadius: 6 * scale,
          borderWidth: 1.8 * scale,
          borderColor: color,
          position: 'absolute',
          top: 2 * scale,
          left: 2 * scale,
        }}
      />
      {/* Handle */}
      <View
        style={{
          position: 'absolute',
          width: 6 * scale,
          height: 2 * scale,
          backgroundColor: color,
          borderRadius: 1 * scale,
          bottom: 3.5 * scale,
          right: 2 * scale,
          transform: [{ rotate: '45deg' }],
        }}
      />
    </View>
  );
}

/**
 * Back Navigation Arrow / Chevron
 * Crisp '<' shape.
 */
export function BackIcon({ size = 24, color = '#30251F' }) {
  const scale = size / 24;
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      accessibilityRole="button"
      accessibilityLabel="Back"
    >
      <View
        style={{
          width: 10 * scale,
          height: 10 * scale,
          borderLeftWidth: 2.2 * scale,
          borderBottomWidth: 2.2 * scale,
          borderColor: color,
          transform: [{ rotate: '45deg' }],
          marginLeft: 4 * scale,
        }}
      />
    </View>
  );
}

/**
 * Checkbox Icon
 * Compact rectangular box with a clean checkmark tick when active.
 */
export function CheckboxIcon({ checked = false, size = 22, color = '#FC8019' }) {
  const scale = size / 22;
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: 5 * scale,
        borderWidth: checked ? 0 : 1.8 * scale,
        borderColor: checked ? color : '#E8DCD0',
        backgroundColor: checked ? color : '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      {checked && (
        <View
          style={{
            width: 6 * scale,
            height: 11 * scale,
            borderBottomWidth: 2.2 * scale,
            borderRightWidth: 2.2 * scale,
            borderColor: '#FFFFFF',
            transform: [{ rotate: '45deg' }],
            marginTop: -2 * scale,
          }}
        />
      )}
    </View>
  );
}

/**
 * Camera Icon (for Profile Avatar)
 */
export function CameraIcon({ size = 20, color = '#FFFFFF' }) {
  const scale = size / 20;
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      {/* Top flash notch */}
      <View
        style={{
          width: 6 * scale,
          height: 2.5 * scale,
          backgroundColor: color,
          borderTopLeftRadius: 1 * scale,
          borderTopRightRadius: 1 * scale,
          position: 'absolute',
          top: 1 * scale,
          left: 5 * scale,
        }}
      />
      {/* Body */}
      <View
        style={{
          width: 16 * scale,
          height: 12 * scale,
          borderRadius: 2.5 * scale,
          borderWidth: 1.6 * scale,
          borderColor: color,
          position: 'absolute',
          bottom: 2 * scale,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Center lens */}
        <View
          style={{
            width: 6 * scale,
            height: 6 * scale,
            borderRadius: 3 * scale,
            borderWidth: 1.4 * scale,
            borderColor: color,
          }}
        />
      </View>
    </View>
  );
}

/**
 * Close / Cancel Icon
 */
export function CloseIcon({ size = 20, color = '#74675F' }) {
  const scale = size / 20;
  return (
    <View
      style={{
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <View
        style={{
          width: 14 * scale,
          height: 2 * scale,
          backgroundColor: color,
          position: 'absolute',
          transform: [{ rotate: '45deg' }],
        }}
      />
      <View
        style={{
          width: 14 * scale,
          height: 2 * scale,
          backgroundColor: color,
          position: 'absolute',
          transform: [{ rotate: '-45deg' }],
        }}
      />
    </View>
  );
}
