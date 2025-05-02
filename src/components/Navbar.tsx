
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  
  return <nav className="bg-white py-4 sticky top-0 z-50 shadow-sm">
      <div className="container-padding flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 text-2xl font-bold text-massage-primary">
          <img 
            src="/public/lovable-uploads/6c3a95d0-17e4-4088-8f23-c2455090662a.png" 
            alt="Cornelis Oosthuizen Massage Therapy Logo" 
            className="h-10 w-auto"
          />
          <span className="hidden sm:inline">Cornelis Oosthuizen Massage Therapy</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-massage-dark hover:text-massage-primary transition-colors">
            Services
          </a>
          <a href="#prices" className="text-massage-dark hover:text-massage-primary transition-colors">
            Prices
          </a>
          <a href="#testimonials" className="text-massage-dark hover:text-massage-primary transition-colors">
            Testimonials
          </a>
          <a href="#about" className="text-massage-dark hover:text-massage-primary transition-colors">
            About
          </a>
          <Button asChild className="bg-massage-primary hover:bg-massage-primary/90">
            <a href="#contact">Contact Us</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-massage-dark" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && <div className="md:hidden bg-white py-4 px-4">
          <div className="flex flex-col gap-4">
            <a href="#services" className="text-massage-dark hover:text-massage-primary transition-colors py-2 border-b" onClick={toggleMenu}>
              Services
            </a>
            <a href="#prices" className="text-massage-dark hover:text-massage-primary transition-colors py-2 border-b" onClick={toggleMenu}>
              Prices
            </a>
            <a href="#testimonials" className="text-massage-dark hover:text-massage-primary transition-colors py-2 border-b" onClick={toggleMenu}>
              Testimonials
            </a>
            <a href="#about" className="text-massage-dark hover:text-massage-primary transition-colors py-2 border-b" onClick={toggleMenu}>
              About
            </a>
            <Button asChild className="bg-massage-primary hover:bg-massage-primary/90 mt-2" onClick={toggleMenu}>
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;
