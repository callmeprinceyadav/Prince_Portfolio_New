import React, { useState, useEffect, useRef } from "react";
import Resume from "../assets/resume.pdf";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaDownload, FaCode, FaRocket } from "react-icons/fa";
import logo from "../assets/Profile.jpg"

const lines = [
  "Hi, I'm Prince Yadav",
  "A Passionate Web Developer, I build clean, responsive, and high-performance web applications.",
];

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            x: [null, Math.random() * window.innerWidth],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const TypingText = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }
    }, delay + currentIndex * 50);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayedText}
      {currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="ml-1 text-purple-400"
        >
          |
        </motion.span>
      )}
    </span>
  );
};

export default function Hero() {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondLine(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <section
      id="home"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen pt-20 px-6 max-w-7xl mx-auto overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <FloatingParticles />
      
      {/* Enhanced background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-16 z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 text-center lg:text-left space-y-8"
        >
          {/* Main heading with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              style={{ fontFamily: 'JetBrains Mono' }}
            >
              <span className="gradient-text block">
                <TypingText text="Hi, I'm" delay={300} />
              </span>
              <span className="gradient-text-2 block mt-2">
                <TypingText text="Prince Yadav" delay={600} />
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: showSecondLine ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <p className="text-xl md:text-2xl text-purple-300 font-medium">
                <TypingText text="Full Stack Developer" delay={1500} />
              </p>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                <TypingText 
                  text="I build clean, responsive, and high-performance web applications with modern technologies." 
                  delay={4500} 
                />
              </p>
            </motion.div>
          </motion.div>

          {/* Enhanced buttons with modern styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start lg:justify-start justify-center"
          >
            <motion.a
              href={Resume}
              download="Prince_Yadav_Resume.pdf"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center gap-3 group"
            >
              <FaDownload className="group-hover:animate-bounce-gentle transition-transform" />
              <span>Download Resume</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center gap-3 group"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              <FaCode className="text-indigo-400 group-hover:text-white transition-colors" />
              <span>View My Work</span>
              <FaRocket className="text-purple-400 group-hover:text-white transition-colors group-hover:translate-x-1" />
            </motion.button>
          </motion.div>

          {/* Enhanced social links with modern styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex justify-center lg:justify-start gap-4"
          >
            {[
              { icon: BsLinkedin, href: "https://www.linkedin.com/in/callmeprinceyadav/", color: "hover:text-blue-400 hover:shadow-blue-500/25", bgColor: "hover:bg-blue-500/10", label: "LinkedIn" },
              { icon: BsGithub, href: "https://github.com/callmeprinceyadav", color: "hover:text-white hover:shadow-gray-500/25", bgColor: "hover:bg-gray-500/10", label: "GitHub" },
              { icon: BsInstagram, href: "https://www.instagram.com/callmeprinceyadav", color: "hover:text-pink-400 hover:shadow-pink-500/25", bgColor: "hover:bg-pink-500/10", label: "Instagram" }
            ].map(({ icon: Icon, href, color, bgColor, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3, rotateY: 15 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative p-4 glass-card rounded-2xl text-2xl text-gray-400 ${color} ${bgColor} transition-all duration-300 hover:shadow-xl border hover:border-white/20`}
                aria-label={label}
              >
                <Icon className="relative z-10" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity blur-sm" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced profile image with modern 3D effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ rotateX, rotateY }}
          className="relative flex-shrink-0 perspective-1000"
        >
          <div className="relative">
            {/* Enhanced animated rings with modern colors */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-60 blur-md"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 opacity-40 blur-md"
            />
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 opacity-30 blur-sm"
            />
            
            {/* Modern profile image container */}
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl animate-float group"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Image with enhanced effects */}
              <img
                src={logo}
                alt="Prince Yadav"
                className="w-full h-full object-cover filter brightness-105 contrast-110 group-hover:brightness-110 group-hover:contrast-105 transition-all duration-500"
              />
              
              {/* Enhanced overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 group-hover:from-indigo-500/15 group-hover:to-purple-500/15 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/5 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Modern shine effect */}
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-all duration-1000 ease-out" />
              
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            
            {/* Floating elements around profile */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                x: [-5, 5, -5],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl glass-card backdrop-blur-sm"
            >
              <div className="w-full h-full flex items-center justify-center">
                <FaCode className="text-indigo-400 text-2xl" />
              </div>
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                x: [5, -5, 5],
                rotate: [0, -5, 5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl glass-card backdrop-blur-sm"
            >
              <div className="w-full h-full flex items-center justify-center">
                <FaRocket className="text-purple-400 text-xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
