/**
 * Ananth Aahara — Single menu item row.
 * Name, description, ₹ price on the left; food image on the right.
 */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

export default function MenuItem({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    backgroundColor: Colors.backgroundCream,
  },
  info: {
    flex: 1,
    marginRight: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primaryText,
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    lineHeight: 18,
    color: Colors.secondaryText,
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.primaryOrange,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});
