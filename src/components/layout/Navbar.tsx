import React from 'react';
import { Button } from '../common/Button';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-gold/20 px-8 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-luxury tracking-[0.2em] text-gold uppercase">
          Amelia
        </div>
        
        <div className="hidden md:flex space-x-12 uppercase tracking-widest text-xs font-semibold text-slate-300">
          <a href="#rooms" className="hover:text-gold transition-colors duration-300">Rooms</a>
          <a href="#location" className="hover:text-gold transition-colors duration-300">Location</a>
          <a href="#contact" className="hover:text-gold transition-colors duration-300">Contact</a>
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center border-r border-gold/20 pr-6 mr-6 space-x-3 text-[10px] tracking-widest font-bold">
            <button className="text-gold">EN</button>
            <span className="text-slate-700">|</span>
            <button className="text-slate-500 hover:text-gold transition-colors">FR</button>
          </div>
          <Button className="!py-2 !px-6 text-xs">
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};
