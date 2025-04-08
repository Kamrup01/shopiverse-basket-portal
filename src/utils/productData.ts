
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  inventory: number;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Desk Lamp",
    category: "Lighting",
    price: 458.89,
    description: "A sleek, adjustable desk lamp with wireless charging base and touch controls.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    inventory: 23,
    featured: true
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 249.99,
    description: "Premium mesh office chair with lumbar support and adjustable armrests.",
    image: "https://woodbine.co.in/wp-content/uploads/2024/04/Senior-Executive-WOODBINE-Delhi-Ergonomic-Swivel-Office-Chair-Wooden-Leather-DI-1201.webp",
    rating: 4.7,
    inventory: 19
  },
  {
    id: 3,
    name: "Wireless Earbuds Pro",
    category: "Electronics",
    price: 129.99,
    description: "Advanced noise-cancelling earbuds with spatial audio and 24-hour battery life.",
    image: "https://m.media-amazon.com/images/I/51qMK4q-NVL.jpg",
    rating: 4.9,
    inventory: 42,
    featured: true
  },
  {
    id: 4,
    name: "Smart Water Bottle",
    category: "Accessories",
    price: 1256.99,
    description: "Temperature-tracking water bottle that reminds you to stay hydrated.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.3,
    inventory: 31
  },
  {
    id: 5,
    name: "Minimalist Wallet",
    category: "Accessories",
    price: 590.99,
    description: "Slim RFID-blocking wallet made from premium recycled leather.",
    image: "https://m.media-amazon.com/images/I/91ZrSC0-7SL._AC_UY1100_.jpg",
    rating: 4.6,
    inventory: 27
  },
  {
    id: 6,
    name: "Ceramic Coffee Set",
    category: "Kitchen",
    price: 799.89,
    description: "Handcrafted 6-piece ceramic coffee set in natural earth tones.",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    inventory: 18,
    featured: true
  },
  {
    id: 7,
    name: "Smart Home Hub",
    category: "Electronics",
    price: 1599.99,
    description: "Voice-controlled home automation hub with premium speaker.",
    image: "https://5.imimg.com/data5/SELLER/Default/2020/12/JZ/TN/QI/43384880/echo-plus-2nd-gen-premium-sound-with-built-in-smart-home-hub-500x500.jpg",
    rating: 4.5,
    inventory: 22
  },
  {
    id: 8,
    name: "Wool Throw Blanket",
    category: "Home Decor",
    price: 695.99,
    description: "Soft, sustainable wool blanket woven with a subtle geometric pattern.",
    image: "https://m.media-amazon.com/images/I/81BKQgRDYHL.jpg",
    rating: 4.9,
    inventory: 12
  }
];

export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};
