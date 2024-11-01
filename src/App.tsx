import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { ShoppingBag } from 'lucide-react';

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16">
          <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-900">
                  Featured Products
                </h1>
                <button
                  onClick={() => setShowCart(!showCart)}
                  className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {showCart ? 'View Products' : 'View Cart'}
                </button>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {showCart ? <Cart /> : <ProductGrid />}
          </main>
        </div>
      </div>
    </CartProvider>
  );
}

export default App;