/**
 * Ananth Aahara — Category filter buttons.
 * Rectangular buttons; selected = orange, unselected = cream with border.
 */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Colors from '../constants/colors';

export default function MenuCategory({ categories, selected, onSelect }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>ORDER YOUR FAVOURITES</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {categories.map((cat) => {
          const isActive = cat === selected;
          return (
            <TouchableOpacity
              key={cat}
              onPress={() => onSelect(cat)}
              style={[styles.btn, isActive && styles.btnActive]}
              activeOpacity={0.7}
            >
              <Text style={[styles.btnText, isActive && styles.btnTextActive]}>
                {cat}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
    backgroundColor: Colors.backgroundCream,
  },
  heading: {
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: Colors.primaryText,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    paddingBottom: 4,
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  btnActive: {
    backgroundColor: Colors.primaryOrange,
    borderColor: Colors.primaryOrange,
  },
  btnText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.secondaryText,
  },
  btnTextActive: {
    color: Colors.white,
  },
});
