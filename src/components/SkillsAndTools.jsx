import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaTools, FaStar, FaRocket } from "react-icons/fa";

const skills = [
  { 
    name: "HTML5", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    level: "Expert",
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "CSS3", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    level: "Expert",
    color: "from-blue-500 to-cyan-500"
  },
  { 
    name: "JavaScript", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    level: "Advanced",
    color: "from-yellow-500 to-orange-500"
  },
  { 
    name: "React", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    level: "Advanced",
    color: "from-cyan-500 to-blue-500"
  },
  { 
    name: "Node.js", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    level: "Intermediate",
    color: "from-green-500 to-emerald-500"
  },
  { 
    name: "MongoDB", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    level: "Intermediate",
    color: "from-green-600 to-green-500"
  },
  { 
    name: "Express.js", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    level: "Intermediate",
    color: "from-gray-600 to-gray-500"
  },
  { 
    name: "Tailwind CSS", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    level: "Advanced",
    color: "from-teal-500 to-cyan-500"
  }
];

const tools = [
  { 
    name: "VS Code", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    description: "Primary code editor",
    color: "from-blue-600 to-blue-500"
  },
  { 
    name: "Git", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    description: "Version control",
    color: "from-orange-600 to-red-500"
  },
  { 
    name: "GitHub", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    description: "Code repository",
    color: "from-gray-600 to-gray-500"
  },
  { 
    name: "Netlify", 
    img: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    description: "Deployment platform",
    color: "from-teal-500 to-cyan-500"
  },
  { 
    name: "Postman", 
    img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    description: "API testing",
    color: "from-orange-500 to-red-500"
  },
  { 
    name: "Figma", 
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    description: "UI/UX design",
    color: "from-purple-500 to-pink-500"
  }
];

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className="group glass-card p-6 rounded-3xl hover:glass-strong transition-all duration-300 card-hover"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className={`p-4 bg-gradient-to-r ${skill.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
          <img 
            src={skill.img} 
            alt={skill.name} 
            className="w-12 h-12 object-contain filter brightness-0 invert" 
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
            {skill.name}
          </h3>
          <div className="flex items-center justify-center gap-1">
            <span className={`text-xs px-2 py-1 bg-gradient-to-r ${skill.color} bg-opacity-20 border border-white/10 rounded-full text-white font-medium`}>
              {skill.level}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ToolCard = ({ tool, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        rotateY: 5,
        transition: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      className="group glass-card p-6 rounded-3xl hover:glass-strong transition-all duration-300 card-hover"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className={`p-4 bg-gradient-to-r ${tool.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
          <img 
            src={tool.img} 
            alt={tool.name} 
            className="w-12 h-12 object-contain filter brightness-0 invert" 
          />
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors mb-1">
            {tool.name}
          </h3>
          <p className="text-gray-400 text-xs">{tool.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SkillsAndTools() {
  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
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
            <FaRocket className="text-indigo-400" />
            <span className="text-gray-300 font-medium">My Arsenal</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold gradient-text mb-4"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            Skills & Tools
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6"
          >
            The technologies and tools I use to bring ideas to life and create exceptional digital experiences.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="space-y-20">
          {/* Skills Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <FaCode className="text-3xl text-indigo-400" />
              <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Tools Section */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-12"
            >
              <FaTools className="text-3xl text-purple-400" />
              <h3 className="text-3xl font-bold text-white">Development Tools</h3>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <ToolCard key={tool.name} tool={tool} index={index} />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block mb-4"
            >
              <FaStar className="text-5xl text-yellow-400" />
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 mb-6">
              Technology never stops evolving, and neither do I. I'm constantly exploring new tools and frameworks to stay at the cutting edge.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
