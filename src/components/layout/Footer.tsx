import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-gold/20 pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
        <div>
          <h3 className="text-gold text-2xl mb-6 tracking-widest uppercase">Apart Hotel Amelia</h3>
          <p className="text-slate-400 leading-relaxed italic">
            Experience the pinnacle of luxury and comfort in the heart of Buea. Your exclusive escape awaits.
          </p>
        </div>
        
        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Find Us</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center space-x-3">
              <MapPin className="text-gold w-4 h-4" />
              <span>Buea, Cameroon</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-gold w-4 h-4" />
              <a href="https://wa.me/652422909" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">+237 652422909</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-gold w-4 h-4" />
              <a href="mailto:chidaluwisdomorima@gmail.com" className="hover:text-gold transition-colors">chidaluwisdomorima@gmail.com</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-semibold mb-6">Follow Us</h4>
          <div className="flex space-x-6 text-slate-400">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gold transition-colors duration-300">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto border-t border-slate-800 pt-10 text-center text-slate-500 text-xs uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} Apart Hotel Amelia. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
