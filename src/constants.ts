import { MenuCategory, MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Pizza
  {
    id: 'p1',
    name: 'Urgent 2k Pizza',
    description: 'Our signature budget-friendly delight for quick cravings.',
    price: '₦2,000',
    category: MenuCategory.PIZZA,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Pepperoni Supreme',
    description: 'Double cheese, double pepperoni, maximum satisfaction.',
    price: '₦5,500',
    category: MenuCategory.PIZZA,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p3',
    name: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, red onions, and smoky BBQ sauce.',
    price: '₦6,000',
    category: MenuCategory.PIZZA,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600',
    isPopular: true
  },
  // Shawarma
  {
    id: 's1',
    name: 'Double Chicken Shawarma',
    description: 'Two wraps of juicy grilled chicken with veggies and cream sauce.',
    price: '₦3,500',
    category: MenuCategory.SHAWARMA,
    image: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 's2',
    name: 'Mixed Grill Shawarma',
    description: 'Beef and chicken blend for the ultimate wrap experience.',
    price: '₦4,000',
    category: MenuCategory.SHAWARMA,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&q=80&w=600'
  },
  // Rice
  {
    id: 'r1',
    name: 'Special Dino Jollof',
    description: 'Smoky party jollof served with chicken or beef.',
    price: '₦2,500',
    category: MenuCategory.RICE,
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&q=80&w=600',
    isPopular: true
  },
  {
    id: 'r2',
    name: 'Seafood Fried Rice',
    description: 'Wok-tossed rice with fresh prawns and seasonal veggies.',
    price: '₦3,500',
    category: MenuCategory.RICE,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=600'
  },
  // Waffles
  {
    id: 'w1',
    name: 'Nutella Waffles',
    description: 'Fluffy waffles drizzled with Nutella and strawberries.',
    price: '₦3,000',
    category: MenuCategory.WAFFLES,
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&q=80&w=600'
  },
  // Parfait
  {
    id: 'pf1',
    name: 'Greek Yogurt Parfait',
    description: 'Creamy yogurt layered with granola, honey, and fresh fruits.',
    price: '₦2,500',
    category: MenuCategory.PARFAIT,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=600'
  }
];

export const CONTACT_INFO = {
  address: 'Shop 1, Owoblow Shopping Complex, Adetunji Estate Junction, Ring Road, Osogbo, Osun State',
  whatsapp: '+2348028363952', // Placeholder for actual number
  whatsappUrl: 'https://wa.me/2348028363952',
  instagram: '@dinopizza_osogbo',
  facebook: 'Dino Pizza Osogbo',
  hours: 'Mon - Sun: 9:00 AM - 10:00 PM'
};

