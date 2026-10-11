/**
 * Ananth Aahara — Home Screen.
 * Four sections: Header, Hero, Category Filters, Scrollable Menu List.
 */
import React, { useState, useMemo } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import MenuCategory from '../components/MenuCategory';
import MenuItem from '../components/MenuItem';
import MENU_ITEMS, { CATEGORIES } from '../data/menuData';

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');

  const filteredItems = useMemo(() => {
    let items = MENU_ITEMS;
    if (selectedCategory !== 'All') {
      items = items.filter((i) => i.category === selectedCategory);
    }
    if (searchText.trim()) {
      const q = searchText.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [selectedCategory, searchText]);

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  const ListHeader = () => (
    <>
      <HeroSection searchText={searchText} onSearchChange={setSearchText} />
      <MenuCategory
        categories={CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
    </>
  );

  return (
    <View style={styles.container}>
      <Header onProfilePress={handleProfilePress} />
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItem item={item} />}
        ListHeaderComponent={ListHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundCream,
  },
  list: {
    paddingBottom: 24,
  },
});
