import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLink {
  name: string;
  href: string;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks: SocialLink[] = [
    { icon: Github, href: 'https://github.com/simar111/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/simar-narula-0a5b25360/', label: 'LinkedIn' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
            >
              Portfolio
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href.substring(1))}
                className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-105 relative group"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            ))}
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon size={20} className="hover:stroke-[1.5px]" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 mx-4 bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-black/95 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-gray-800/50"
            >
              <div className="p-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="text-gray-300 hover:text-white text-left py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 relative group"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 transition-all duration-300 group-hover:w-full rounded-lg"></span>
                  </motion.button>
                ))}
                
                {/* Mobile Social Links */}
                <div className="flex items-center justify-center gap-6 pt-4 mt-2 border-t border-gray-800/50">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white p-2 rounded-lg bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={label}
                    >
                      <Icon size={22} className="hover:stroke-[1.5px]" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;