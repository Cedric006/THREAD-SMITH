
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Essential Heavyweight Tee',
    price: 35,
    oldPrice: 45,
    category: 'Men',
    subCategory: 'New Arrivals',
    rating: 4.8,
    reviewsCount: 124,
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#FFFFFF' },
      { name: 'Cream', hex: '#F5F5DC' }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'A premium heavyweight t-shirt crafted from 100% organic cotton. Features a relaxed fit and drop shoulder design for a modern silhouette.',
    materials: ['100% Organic Cotton', 'Pre-shrunk fabric', 'Weight: 300 GSM'],
    care: ['Machine wash cold', 'Tumble dry low', 'Do not bleach'],
    inStock: 15
  },
  {
    id: '2',
    name: 'Vintage Studio Graphic Tee',
    price: 42,
    category: 'Unisex',
    subCategory: 'Trending',
    rating: 4.5,
    reviewsCount: 89,
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Wash Grey', hex: '#4A4A4A' },
      { name: 'Sand', hex: '#C2B280' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description: 'Inspired by 90s street culture, this graphic tee brings a vintage vibe to your modern wardrobe. Soft-touch print and aged fabric look.',
    materials: ['80% Cotton', '20% Polyester', 'Distressed finish'],
    care: ['Iron inside out', 'Wash with similar colors'],
    inStock: 8
  },
  {
    id: '3',
    name: 'Ribbed Cropped Fit Tee',
    price: 28,
    category: 'Women',
    subCategory: 'Essentials',
    rating: 4.9,
    reviewsCount: 210,
    images: [
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1503341455253-b2e72fbb0bd2?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Rose', hex: '#E0B0FF' },
      { name: 'Black', hex: '#000000' },
      { name: 'Sage', hex: '#B2AC88' }
    ],
    sizes: ['XXS', 'XS', 'S', 'M', 'L'],
    description: 'The perfect layering piece. This ribbed cropped tee offers a flattering fit with maximum comfort for daily wear.',
    materials: ['95% Cotton', '5% Elastane'],
    care: ['Machine wash cold', 'Dry flat'],
    inStock: 25
  },
  {
    id: '4',
    name: 'Pro-Athletic Sport Tee',
    price: 38,
    oldPrice: 48,
    category: 'Men',
    subCategory: 'Sale',
    rating: 4.7,
    reviewsCount: 56,
    images: [
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527719327859-c6ce80353573?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Electric Blue', hex: '#0000FF' },
      { name: 'Midnight', hex: '#191970' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Designed for high-intensity training. Moisture-wicking technology keeps you dry while the four-way stretch allows full range of motion.',
    materials: ['Recycled Polyester Blend', 'Anti-microbial finish'],
    care: ['Quick dry', 'No softeners'],
    inStock: 12
  },
  {
    id: '5',
    name: 'Artisan Pocket Detail Tee',
    price: 45,
    category: 'Unisex',
    subCategory: 'Trending',
    rating: 4.6,
    reviewsCount: 42,
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1571945153237-4929e783ee4a?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Off White', hex: '#FAF9F6' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Featuring a unique embroidered pocket with abstract motifs. A conversation starter for any casual outing.',
    materials: ['Supima Cotton', 'Embroidered details'],
    care: ['Gentle cycle only', 'Hand wash recommended'],
    inStock: 5
  },
  {
    id: '6',
    name: 'Luxe Linen Summer Tee',
    price: 55,
    category: 'Women',
    subCategory: 'New Arrivals',
    rating: 4.9,
    reviewsCount: 33,
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1603251578711-3290ae1a0187?q=80&w=800&auto=format&fit=crop'
    ],
    colors: [
      { name: 'Oatmeal', hex: '#D6CEC3' },
      { name: 'Terracotta', hex: '#E2725B' }
    ],
    sizes: ['S', 'M', 'L'],
    description: 'Stay cool during heatwaves with our linen-cotton blend. Breathable, lightweight, and effortlessly chic.',
    materials: ['50% Linen', '50% Cotton'],
    care: ['Iron while damp', 'Do not tumble dry'],
    inStock: 10
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Fashion Blogger",
    comment: "The quality of the fabric is unmatched. I've washed my heavyweight tee dozens of times and it still looks brand new.",
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  {
    id: 2,
    name: "Sarah Miller",
    role: "Regular Customer",
    comment: "Finally found a brand that gets the oversized fit right! Fast shipping and the packaging was beautiful.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 3,
    name: "David Chen",
    role: "Designer",
    comment: "THREAD-SMITH is my go-to for minimalist essentials. Clean lines and great attention to detail.",
    avatar: "https://i.pravatar.cc/150?u=david"
  }
];
