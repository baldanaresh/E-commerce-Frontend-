export const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation."
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=60",
    category: "Accessories",
    description: "Elegant minimalist watch with leather strap."
  },
  {
    id: 3,
    name: "Smart Fitness Tracker",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "Advanced fitness tracker with heart rate monitoring."
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop&q=60",
    category: "Accessories",
    description: "Premium designer sunglasses with UV protection."
  },
  {
    id: 5,
    name: "Leather Backpack",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&auto=format&fit=crop&q=60",
    category: "Bags",
    description: "Handcrafted leather backpack with laptop compartment."
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1606220838315-056192d5e927?w=800&auto=format&fit=crop&q=60",
    category: "Electronics",
    description: "True wireless earbuds with premium sound quality."
  }
];

export const categories = [...new Set(products.map(product => product.category))];