import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaCode, FaGraduationCap, FaRocket, FaBrain, FaHeart, FaReact, FaNodeJs, FaDatabase, FaLightbulb } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";

const skills = [
  { 
    name: "Frontend Development", 
    level: 95, 
    color: "from-indigo-500 to-cyan-500",
    icon: FaReact,
    description: "React, JavaScript, TypeScript, Tailwind CSS"
  },
  { 
    name: "Backend Development", 
    level: 88, 
    color: "from-emerald-500 to-green-500",
    icon: FaNodeJs,
    description: "Node.js, Express.js, RESTful APIs, Authentication"
  },
  { 
    name: "Database Management", 
    level: 85, 
    color: "from-purple-500 to-pink-500",
    icon: FaDatabase,
    description: "MongoDB, SQL, Database Design, Data Modeling"
  },
  { 
    name: "Problem Solving", 
    level: 92, 
    color: "from-orange-500 to-red-500",
    icon: FaLightbulb,
    description: "Algorithm Design, Code Optimization, Debugging"
  },
];

const journey = [
  {
    year: "2023-2025",
    title: "Full Stack Development Training",
    description: "Intensive training at Prepleaf by Masai, mastering modern web technologies and best practices.",
    icon: FaGraduationCap,
    color: "text-blue-400"
  },
  {
    year: "2024-2025",
    title: "Real-World Projects",
    description: "Built production-ready applications including Myntra Clone, BlueFly, and ScorEazy platform.",
    icon: FaRocket,
    color: "text-green-400"
  },
  {
    year: "Present",
    title: "Exploring AI & Innovation",
    description: "Passionate about integrating Generative AI and exploring cutting-edge technologies.",
    icon: FaBrain,
    color: "text-purple-400"
  }
];

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

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-2xl mb-6"
          >
            <FaHeart className="text-pink-400" />
            <span className="text-gray-300 font-medium">Get to know me</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold gradient-text mb-4"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            About Me
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6"
          >
            Passionate full-stack developer crafting innovative digital experiences with modern technologies.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl">
                  <FaCode className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Prince Yadav</h3>
                  <p className="text-purple-300">Full Stack Developer</p>
                </div>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed mb-6"
              >
                I'm a passionate full-stack web developer skilled in JavaScript, React, Node.js, MongoDB, and SQL. 
                I specialize in building responsive, user-friendly applications with clean code and scalable architecture.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg leading-relaxed mb-8"
              >
                Trained at Prepleaf by Masai, I've completed real-world projects like Myntra Clone and BlueFly. 
                I'm quick to adapt, passionate about learning, and excited by new technologies like Generative AI.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-purple-300"
              >
                <FaHeart className="text-pink-400" />
                <span className="font-medium">Let's build something amazing together!</span>
              </motion.div>
            </div>

            {/* Skills section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold gradient-text-2 mb-6">My Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Journey timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <MdTimeline className="text-3xl text-purple-400" />
              <h3 className="text-2xl font-bold gradient-text-3">My Journey</h3>
            </div>
            
            <div className="space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start gap-4 group"
                >
                  {/* Timeline line */}
                  {index < journey.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent" />
                  )}
                  
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`flex-shrink-0 p-3 bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl border-2 border-gray-600 group-hover:border-purple-500 transition-all duration-300`}
                  >
                    <item.icon className={`text-xl ${item.color}`} />
                  </motion.div>
                  
                  <div className="space-y-2 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="text-sm text-purple-300 font-semibold">{item.year}</div>
                    <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
