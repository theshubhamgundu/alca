import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="sticky top-0 bg-[#FDFCF8]/90 backdrop-blur-sm text-[#1a1a1a] border-b border-[#E5E5E5] px-6 py-4 md:px-12 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-medium tracking-tight">
          ALCA
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm uppercase tracking-widest hover:text-[#8B7355]">Home</Link>
          <Link to="/products" className="text-sm uppercase tracking-widest hover:text-[#8B7355]">Catalog</Link>
          <Link to="/cart" className="relative text-sm uppercase tracking-widest hover:text-[#8B7355]">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 text-[10px] w-4 h-4 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

