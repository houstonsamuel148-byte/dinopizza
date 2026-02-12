import React from 'react';
import { MenuItem } from '../types';
import { PlusCircle, ShoppingCart } from 'lucide-react';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.isPopular && (
          <div className="absolute top-4 left-4 bg-pizzaOrange text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
            Best Seller
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-charcoal">{item.name}</h3>
          <span className="text-pizzaRed font-black whitespace-nowrap">{item.price}</span>
        </div>
        <p className="text-gray-500 text-sm mb-6 flex-grow">{item.description}</p>
        <button className="flex items-center justify-center space-x-2 w-full py-3 bg-gray-50 hover:bg-pizzaRed hover:text-white text-charcoal rounded-2xl font-bold transition-all border border-gray-100 group">
          <ShoppingCart size={18} />
          <span>Add to WhatsApp Order</span>
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
