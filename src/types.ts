export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: MenuCategory;
  image: string;
  isPopular?: boolean;
}

export enum MenuCategory {
  PIZZA = 'Pizza',
  SHAWARMA = 'Shawarma',
  RICE = 'Rice Meals',
  WAFFLES = 'Waffles & Pancakes',
  PARFAIT = 'Parfaits & Desserts'
}

export type Page = 'home' | 'about' | 'menu' | 'order' | 'contact';
