import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SkillBar = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      setTimeout(() => setIsVisible(true), index * 200);
    }
  }, [inView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group space-y-3 p-4 glass rounded-2xl hover:glass-strong transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-2">
        <div className={`p-3 bg-gradient-to-r ${skill.color} rounded-2xl`}>
          <skill.icon className="text-white text-lg" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-white font-semibold text-lg group-hover:text-indigo-300 transition-colors">{skill.name}</span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="text-indigo-400 font-bold text-sm px-3 py-1 glass rounded-full"
            >
              {skill.level}%
            </motion.span>
          </div>
          <p className="text-gray-400 text-sm">{skill.description}</p>
        </div>
      </div>
      
      <div className="relative">
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
            initial={{ width: 0 }}
            animate={{ width: isVisible ? `${skill.level}%` : 0 }}
            transition={{ duration: 2, ease: "easeOut", delay: index * 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            <div className="absolute right-0 top-0 w-1 h-full bg-white/50 rounded-full" />
          </motion.div>
        </div>
        
        {/* Skill level indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? -8 : -10 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
          className="absolute top-0 bg-white text-slate-800 text-xs px-2 py-1 rounded-md font-bold shadow-lg"
          style={{ left: `${skill.level}%`, transform: 'translateX(-50%)' }}
        >
          {skill.level}%
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-white" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBar;
