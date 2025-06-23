import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="font-display text-2xl font-bold text-studio-blue">ReakStudios</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-white hover:text-studio-blue transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-studio-blue transition-colors duration-300"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="text-white hover:text-studio-blue transition-colors duration-300"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-studio-blue transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-studio-blue transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-studio-blue"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden studio-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => scrollToSection("hero")}
              className="block px-3 py-2 text-white hover:text-studio-blue w-full text-left"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="block px-3 py-2 text-white hover:text-studio-blue w-full text-left"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="block px-3 py-2 text-white hover:text-studio-blue w-full text-left"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="block px-3 py-2 text-white hover:text-studio-blue w-full text-left"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="block px-3 py-2 text-white hover:text-studio-blue w-full text-left"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
