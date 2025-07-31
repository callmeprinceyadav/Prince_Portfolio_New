import React, { useState, useEffect } from "react";
import Resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import logo from "../assets/Profile.jpg"

const lines = [
  "Hi, I'm Prince Yadav",
  "A Passionate Web Developer, I build clean, responsive, and high-performance web applications.",
];

export default function Hero() {
  const [displayed, setDisplayed] = useState(["", ""]);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    if (activeLine < lines.length) {
      let char = 0;
      const writer = setInterval(() => {
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[activeLine] = lines[activeLine].slice(0, char + 1);
          return copy;
        });
        char++;
        if (char === lines[activeLine].length) {
          clearInterval(writer);
          setTimeout(() => setActiveLine((val) => val + 1), 500);
        }
      }, 32);
      return () => clearInterval(writer);
    } else {
      setTimeout(() => {
        setDisplayed(["", ""]);
        setActiveLine(0);
      }, 2000);
    }
  }, [activeLine]);

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-center h-screen min-h-[600px] pt-24 px-6 max-w-6xl mx-auto gap-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex-1 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-3 min-h-[95px]">
          {displayed[0]}
        </h1>
        <p className="max-w-xl mx-auto md:mx-0 mt-3 mb-6 text-lg text-gray-300 min-h-[60px]">
          {displayed[1]}
        </p>

        
        <a
          href={Resume}
          download="Prince_Yadav_Resume.pdf"
          className="inline-block px-8 py-3 rounded bg-cyan-500 hover:bg-cyan-600 font-semibold text-gray-900 transition focus:outline-none mt-3"
        >
          Download Resume
        </a>

        
        <div className="flex justify-center md:justify-start gap-6 mt-6 text-3xl text-gray-300">
          <a
            href="https://www.linkedin.com/in/callmeprinceyadav/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800 animate-bounce"
            aria-label="LinkedIn"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/callmeprinceyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 animate-bounce"
            aria-label="GitHub"
          >
            <BsGithub />
          </a>

          <a
            href="https://www.instagram.com/callmeprinceyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700 animate-bounce"
            aria-label="Instagram"
          >
            <BsInstagram />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="flex-shrink-0"
      >
        <img
          src= {logo}
          alt="Prince Yadav"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full shadow-2xl object-cover border-4 border-cyan-400"
        />
      </motion.div>
    </section>
  );
}
