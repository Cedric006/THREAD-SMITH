
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: 'Men' | 'Women' | 'Unisex';
  subCategory: 'Trending' | 'New Arrivals' | 'Sale' | 'Essentials';
  rating: number;
  reviewsCount: number;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  description: string;
  materials: string[];
  care: string[];
  inStock: number;
  isWishlisted?: boolean;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface User {
  name: string;
  email: string;
  orders: Order[];
  addresses: Address[];
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Delivered' | 'Processing' | 'Shipped';
  items: CartItem[];
}

export interface Address {
  id: string;
  type: 'Home' | 'Work';
  street: string;
  city: string;
  state: string;
  zip: string;
}
