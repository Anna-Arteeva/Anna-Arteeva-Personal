
import { useState } from "react";
import { Menu, X } from "lucide-react";

const FTHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/10 backdrop-filter backdrop-blur-lg border-b border-white/20 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              The Impact
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-ft-salmon transition-colors text-sm font-medium">
              Wellness
            </a>
            <a href="#" className="text-white hover:text-ft-salmon transition-colors text-sm font-medium">
              Design
            </a>
            <a href="#" className="text-white hover:text-ft-salmon transition-colors text-sm font-medium">
              Psychology
            </a>
            <a href="#" className="text-white hover:text-ft-salmon transition-colors text-sm font-medium">
              Community
            </a>
            <a href="#" className="text-white hover:text-ft-salmon transition-colors text-sm font-medium">
              Research
            </a>
            <a href="#" className="text-white hover:text-ft-salmon transition-colors text-sm font-medium">
              Lifestyle
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-ft-salmon transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-lg">
              <a href="#" className="block px-3 py-2 text-white hover:text-ft-salmon transition-colors">
                Wellness
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-ft-salmon transition-colors">
                Design
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-ft-salmon transition-colors">
                Psychology
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-ft-salmon transition-colors">
                Community
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-ft-salmon transition-colors">
                Research
              </a>
              <a href="#" className="block px-3 py-2 text-white hover:text-ft-salmon transition-colors">
                Lifestyle
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default FTHeader;
