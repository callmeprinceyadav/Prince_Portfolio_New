import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {name: "Home", href: "#home", icon: "🏠"},
  {name: "About", href: "#about", icon: "👨‍💻"},
  {name: "Skills", href: "#skills", icon: "⚡"},
  {name: "Projects", href: "#projects", icon: "🚀"},
  {name: "Contact", href: "#contact", icon: "📧"},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-strong border-b border-white/10 py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 lg:px-8">
        {/* Enhanced Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <span className="font-bold text-2xl gradient-text tracking-wider">
            Prince Yadav
          </span>
          <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.href}
                href={link.href}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  isActive 
                    ? 'glass text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:glass'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm">{link.icon}</span>
                  {link.name}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl -z-10"
                  />
                )}
              </motion.a>
            );
          })}
        </div>

        {/* Enhanced Mobile Menu Button */}
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden relative p-3 glass rounded-2xl" 
          onClick={() => setOpen(!open)} 
          aria-label="Menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <motion.div 
              animate={{
                rotate: open ? 45 : 0,
                y: open ? 2 : -2
              }}
              className="w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded transition-all duration-300"
            />
            <motion.div 
              animate={{
                opacity: open ? 0 : 1
              }}
              className="w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded transition-all duration-300 mt-1.5"
            />
            <motion.div 
              animate={{
                rotate: open ? -45 : 0,
                y: open ? -2 : 2
              }}
              className="w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded transition-all duration-300 mt-1.5"
            />
          </div>
        </motion.button>
      </div>
      
      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden md:hidden glass-strong border-t border-white/10 mt-4"
          >
            <div className="p-6 space-y-2">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 p-4 rounded-2xl font-medium transition-all duration-300 ${
                      isActive 
                        ? 'glass text-white shadow-lg' 
                        : 'text-gray-300 hover:text-white hover:glass'
                    }`}
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-lg">{link.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeMobileTab"
                        className="ml-auto w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                      />
                    )}
                  </motion.a>
                );
              })}
              
              {/* Mobile menu decoration */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-4 mt-4 border-t border-white/10"
              >
                <div className="text-center text-sm text-gray-400">
                  <span className="gradient-text font-medium">Made with ❤️ by Prince</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
