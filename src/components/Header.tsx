import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed 0 left-0 right-0 z-50 mb-4 p-6">
      <div className="container-padding max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center">
              <img src="/src/assets/logo.png" alt="logo" width={135} height={135}/>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#portfolio" className="text-hero-foreground hover:text-hero-accent transition-colors">
              PORTFOLIO
            </a>
            <a href="#about" className="text-hero-foreground hover:text-hero-accent transition-colors">
              ABOUT
            </a>
            <a href="#contact" className="text-hero-foreground hover:text-hero-accent transition-colors">
              CONTACT
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-hero-foreground hover:text-hero-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-hero-foreground/10 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#portfolio" 
                className="text-hero-foreground hover:text-hero-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                PORTFOLIO
              </a>
              <a 
                href="#about" 
                className="text-hero-foreground hover:text-hero-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </a>
              <a 
                href="#contact" 
                className="text-hero-foreground hover:text-hero-accent transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};