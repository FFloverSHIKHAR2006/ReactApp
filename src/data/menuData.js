/**
 * Ananth Aahara — Menu data.
 * Single source of truth for all dishes shown on the Home screen.
 */
const MENU_ITEMS = [
  {
    id: '1',
    name: 'Paneer Tikka',
    description:
      'Marinated paneer cubes grilled with aromatic Indian spices and peppers.',
    price: 220,
    category: 'Starters',
    image: require('../../assets/images/paneer-tikka.jpg'),
  },
  {
    id: '2',
    name: 'Veg Samosa',
    description:
      'Crispy pastry filled with spiced potatoes and green peas.',
    price: 60,
    category: 'Starters',
    image: require('../../assets/images/veg-samosa.jpg'),
  },
  {
    id: '3',
    name: 'Masala Dosa',
    description:
      'Golden, crispy dosa filled with seasoned potato masala, served with sambar and chutneys.',
    price: 140,
    category: 'Main Course',
    image: require('../../assets/images/masala-dosa.jpg'),
  },
  {
    id: '4',
    name: 'Paneer Butter Masala',
    description:
      'Soft paneer cooked in a creamy tomato gravy with warming Indian spices.',
    price: 240,
    category: 'Main Course',
    image: require('../../assets/images/paneer-butter-masala.jpg'),
  },
  {
    id: '5',
    name: 'Veg Biryani',
    description:
      'Fragrant basmati rice layered with vegetables, herbs, and aromatic spices.',
    price: 190,
    category: 'Main Course',
    image: require('../../assets/images/veg-biryani.jpg'),
  },
  {
    id: '6',
    name: 'Gulab Jamun',
    description:
      'Soft milk-solid dumplings soaked in fragrant sugar syrup.',
    price: 80,
    category: 'Desserts',
    image: require('../../assets/images/gulab-jamun.jpg'),
  },
  {
    id: '7',
    name: 'Masala Chai',
    description:
      'Freshly brewed Indian tea infused with ginger and warming spices.',
    price: 35,
    category: 'Drinks',
    image: require('../../assets/images/masala-chai.jpg'),
  },
  {
    id: '8',
    name: 'Sweet Lassi',
    description:
      'A refreshing yogurt-based drink with a touch of sweetness.',
    price: 70,
    category: 'Drinks',
    image: require('../../assets/images/sweet-lassi.jpg'),
  },
];

export const CATEGORIES = ['All', 'Starters', 'Main Course', 'Desserts', 'Drinks'];

export default MENU_ITEMS;
