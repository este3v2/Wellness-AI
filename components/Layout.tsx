import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from './ui/Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-stone-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
          <div className="p-1.5 bg-teal-700 rounded-lg text-white">
            <Leaf size={20} />
          </div>
          <span className="text-xl font-semibold tracking-tight text-stone-800">Wellness AI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium text-stone-600 hover:text-teal-700 transition-colors">
            How it works
          </button>
          <button onClick={() => scrollToSection('outcomes')} className="text-sm font-medium text-stone-600 hover:text-teal-700 transition-colors">
            Outcomes
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-stone-600 hover:text-teal-700 transition-colors">
            FAQ
          </button>
          <Button 
            variant="primary" 
            size="sm" 
            onClick={() => scrollToSection('book-call')}
          >
            Book a Fit Call
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-stone-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-stone-100 p-6 shadow-lg md:hidden flex flex-col gap-4">
          <button onClick={() => scrollToSection('how-it-works')} className="text-left py-2 font-medium text-stone-600">
            How it works
          </button>
          <button onClick={() => scrollToSection('outcomes')} className="text-left py-2 font-medium text-stone-600">
            Outcomes
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-left py-2 font-medium text-stone-600">
            FAQ
          </button>
          <Button 
            variant="primary" 
            fullWidth 
            onClick={() => scrollToSection('book-call')}
          >
            Book a Fit Call
          </Button>
        </div>
      )}
    </header>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-stone-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
           <div className="p-1.5 bg-stone-200 rounded-lg text-stone-500">
            <Leaf size={16} />
          </div>
          <span className="text-lg font-semibold text-stone-400">Wellness AI</span>
        </div>
        <div className="flex gap-6 text-sm text-stone-500">
          <a href="#" className="hover:text-stone-800 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-stone-800 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-stone-800 transition-colors">LinkedIn</a>
        </div>
        <div className="text-sm text-stone-400">
          © {new Date().getFullYear()} Wellness AI Factory.
        </div>
      </div>
    </footer>
  );
};