/**
 * Ananth Aahara — Hero section for the Home screen.
 * Orange-tinted panel with heading, subheading, description, hero image, and search.
 */
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Colors from '../constants/colors';
import { SearchIcon } from './Icons';

export default function HeroSection({ searchText, onSearchChange }) {
  const { width } = useWindowDimensions();
  const isWide = width > 400;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={[styles.textBlock, isWide && { flex: 1 }]}>
          <Text style={styles.heading}>Ananth Aahara</Text>
          <Text style={styles.subheading}>Authentic Indian Flavours</Text>
          <Text style={styles.description}>
            Discover the taste of India with freshly prepared meals, traditional
            recipes, and flavours made to feel like home.
          </Text>
        </View>
        {isWide && (
          <Image
            source={require('../../assets/images/hero-food.jpg')}
            style={styles.heroImage}
            resizeMode="cover"
          />
        )}
      </View>

      {!isWide && (
        <Image
          source={require('../../assets/images/hero-food.jpg')}
          style={styles.heroImageSmall}
          resizeMode="cover"
        />
      )}

      {/* Search bar */}
      <View style={styles.searchWrapper}>
        <SearchIcon size={18} color={Colors.secondaryText} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search dishes..."
          placeholderTextColor={Colors.secondaryText}
          value={searchText}
          onChangeText={onSearchChange}
          returnKeyType="search"
          autoCorrect={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryOrange,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  textBlock: {
    marginRight: 12,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.white,
    marginBottom: 2,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF3E0',
    marginBottom: 8,
  },
  description: {
    fontSize: 13,
    lineHeight: 19,
    color: '#FFF8F0',
    marginBottom: 14,
  },
  heroImage: {
    width: 130,
    height: 130,
    borderRadius: 12,
  },
  heroImageSmall: {
    width: '100%',
    height: 140,
    borderRadius: 10,
    marginBottom: 14,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 42,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
    color: Colors.primaryText,
    height: 42,
  },
});
