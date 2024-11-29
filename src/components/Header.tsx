import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-black bg-opacity-90 text-white fixed w-full top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://klexou.eu/Image%20&%20Logo/klexoulogo.png" 
            alt="Klexou Logo" 
            className="h-8 w-auto"
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm hover:text-gray-300">Accueil</Link>
          <Link to="/catalogue" className="text-sm hover:text-gray-300">Catalogue</Link>
        </div>
        <button className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </nav>
    </header>
  );
}