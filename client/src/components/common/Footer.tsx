import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-[#fdfcf8] py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <Link to="/" className="text-xl font-serif font-medium">ALCA</Link>
          <p className="text-sm text-gray-400">Premium services & bespoke creations.</p>
        </div>

        {/* Links */}
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-widest text-gray-500">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white">Catalog</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-widest text-gray-500">Policies</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-sm uppercase tracking-widest text-gray-500">Contact</h4>
          <p className="text-sm text-gray-300">contact@alca.in</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#333] text-center text-xs text-gray-500">
        © 2026 ALCA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
