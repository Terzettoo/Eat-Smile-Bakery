'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Cake, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Cake className={`h-10 w-10 transition-all duration-300 ${
                isScrolled ? 'text-red-600' : 'text-white drop-shadow-lg'
              } group-hover:scale-110`} />
              <div className="absolute -inset-1 bg-red-600/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-display font-bold transition-colors duration-300 ${
                isScrolled ? 'text-red-800' : 'text-white drop-shadow-lg'
              }`}>
                Eat Smile
              </span>
              <span className={`text-sm font-medium -mt-1 transition-colors duration-300 ${
                isScrolled ? 'text-red-600' : 'text-red-100'
              }`}>
                BAKERY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' 
                  : 'text-white hover:text-red-200 hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/hours-location" 
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' 
                  : 'text-white hover:text-red-200 hover:bg-white/10'
              }`}
            >
              Hours & Location
            </Link>
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+17185552311" 
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' 
                    : 'text-white hover:text-red-200 hover:bg-white/10'
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="hidden lg:inline">(718) 555-2311</span>
              </a>
              <Link href="/online-orders">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 btn-hover-lift shadow-lg">
                  Order Online
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600 hover:bg-red-50' 
                  : 'text-white hover:text-red-200 hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-red-100">
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/hours-location" 
                className="block px-4 py-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Hours & Location
              </Link>
              <a 
                href="tel:+17185552311" 
                className="flex items-center space-x-2 px-4 py-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium transition-all duration-300"
              >
                <Phone className="h-4 w-4" />
                <span>(718) 555-2311</span>
              </a>
              <Link 
                href="/online-orders"
                onClick={() => setIsOpen(false)}
              >
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-all duration-300 btn-hover-lift">
                  Order Online
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}