import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {name: "Home", href: "#home"},
  {name: "About", href: "#about"},
  {name: "Projects", href: "#projects"},
  {name: "Contact", href: "#contact"},
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-950/80 z-50 border-b border-gray-800 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <span className="font-bold text-lg text-cyan-400 tracking-widest">Prince Yadav</span>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-100 hover:text-cyan-400 transition">{link.name}</a>
          ))}
        </div>
        <button className="md:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="w-7 h-1 rounded bg-cyan-400"/>
          <div className="w-7 h-1 rounded bg-cyan-400"/>
          <div className="w-7 h-1 rounded bg-cyan-400"/>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden md:hidden bg-gray-950 border-t border-gray-800"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={()=>setOpen(false)} className="text-lg text-cyan-400">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
