import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import avatarImg from "@assets/msmelok_AvatarWithHighLook.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={`fixed top-0 left-0 w-full bg-slate-800/95 backdrop-blur-sm z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold font-inter">
          <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary shadow-md cursor-pointer">
            <img 
              src={avatarImg} 
              alt="Muhammad Meluk" 
              className="h-full w-full object-cover"
            />
          </div>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">Home</a>
          <a href="#about" className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">About</a>
          <a href="#services" className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">Services</a>
          <a href="#portfolio" className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">Portfolio</a>
          <a href="#education" className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">Education</a>
          <a href="#contact" className="font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="#contact" 
            className="hidden md:flex items-center px-6 py-2.5 bg-primary text-white rounded-md hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <i className="fas fa-envelope-open-text mr-2"></i>
            Hire Me
          </a>
          
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2.5 rounded-md border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-colors" 
            aria-label="Toggle menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-slate-800/95 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-3">
          <a 
            href="#home" 
            onClick={closeMenu} 
            className="py-3 px-4 hover:bg-slate-700 rounded-md transition-colors flex items-center border-l-2 border-transparent hover:border-primary"
          >
            <i className="fas fa-home w-6"></i>
            <span>Home</span>
          </a>
          <a 
            href="#about" 
            onClick={closeMenu} 
            className="py-3 px-4 hover:bg-slate-700 rounded-md transition-colors flex items-center border-l-2 border-transparent hover:border-primary"
          >
            <i className="fas fa-user w-6"></i>
            <span>About</span>
          </a>
          <a 
            href="#services" 
            onClick={closeMenu} 
            className="py-3 px-4 hover:bg-slate-700 rounded-md transition-colors flex items-center border-l-2 border-transparent hover:border-primary"
          >
            <i className="fas fa-cogs w-6"></i>
            <span>Services</span>
          </a>
          <a 
            href="#portfolio" 
            onClick={closeMenu} 
            className="py-3 px-4 hover:bg-slate-700 rounded-md transition-colors flex items-center border-l-2 border-transparent hover:border-primary"
          >
            <i className="fas fa-laptop-code w-6"></i>
            <span>Portfolio</span>
          </a>
          <a 
            href="#education" 
            onClick={closeMenu} 
            className="py-3 px-4 hover:bg-slate-700 rounded-md transition-colors flex items-center border-l-2 border-transparent hover:border-primary"
          >
            <i className="fas fa-graduation-cap w-6"></i>
            <span>Education</span>
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu} 
            className="py-3 px-4 hover:bg-slate-700 rounded-md transition-colors flex items-center border-l-2 border-transparent hover:border-primary"
          >
            <i className="fas fa-envelope w-6"></i>
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
}
