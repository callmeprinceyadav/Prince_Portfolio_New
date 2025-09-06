import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar, FaCode, FaRocket, FaShoppingCart, FaPlane, FaBrain } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import BlueFly from "../assets/blue.png";
import Myntra from "../assets/myntaclone.png"
import Travel from "../assets/Travel.png"
import ScorEazy from "../assets/ScorEazy.png"

const projects = [
  {
    id: 1,
    name: "Myntra Clone",
    description: "A comprehensive e-commerce platform with advanced features including secure authentication, intelligent product filtering, responsive design, and seamless shopping experience.",
    fullDescription: "Built with React and Node.js, this full-stack application includes user authentication, product management, cart functionality, and payment integration.",
    stack: ["React", "JavaScript", "HTML5", "CSS3", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    link: "https://myntra-frontend-henna.vercel.app/",
    github: "https://github.com/callmeprinceyadav",
    image: Myntra,
    category: "E-commerce",
    icon: FaShoppingCart,
    color: "from-pink-500 to-rose-500",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 2,
    name: "BlueFly Fashion",
    description: "An elegant fashion e-commerce platform with smooth animations, intuitive product browsing, secure authentication, and premium shopping experience.",
    fullDescription: "A modern e-commerce solution focusing on user experience with smooth transitions, advanced search, and responsive design.",
    stack: ["React", "JavaScript", "Express.js", "MongoDB", "Node.js"],
    link: "https://bluefly-check.netlify.app",
    github: "https://github.com/callmeprinceyadav",
    image: BlueFly,
    category: "E-commerce",
    icon: FaShoppingCart,
    color: "from-blue-500 to-indigo-500",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: 3,
    name: "Travel Booking Platform",
    description: "A comprehensive travel booking solution that enables users to discover, compare, and book tours with an intuitive interface and seamless user experience.",
    fullDescription: "Full-featured travel platform with booking management, tour comparisons, user reviews, and integrated payment processing.",
    stack: ["React", "JavaScript", "Express.js", "MongoDB", "Node.js"],
    link: "https://travel-masai.netlify.app/",
    github: "https://github.com/callmeprinceyadav",
    image: Travel,
    category: "Travel",
    icon: FaPlane,
    color: "from-emerald-500 to-teal-500",
    featured: false,
    status: "Completed",
    year: "2024"
  },
  {
    id: 4,
    name: "ScorEazy Learning",
    description: "An innovative AI-powered educational platform that combines educational psychology with personalized, engaging lessons designed specifically for young learners.",
    fullDescription: "Revolutionary learning platform using AI to create personalized educational experiences with gamification and progress tracking.",
    stack: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    link: "https://scoreazy-assign.netlify.app/",
    github: "https://github.com/callmeprinceyadav",
    image: ScorEazy,
    category: "Education",
    icon: FaBrain,
    color: "from-purple-500 to-pink-500",
    featured: false,
    status: "Completed",
    year: "2024"
  }
];

// Project Card Component
const ProjectCard = ({ project, index }) => {
  const IconComponent = project.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Featured Badge */}
      {project.featured && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.2 + 0.3 }}
          className="absolute -top-2 -right-2 z-10"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <FaStar className="text-xs" />
            Featured
          </div>
        </motion.div>
      )}
      
      {/* Main Card */}
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="glass-card rounded-3xl overflow-hidden card-hover group-hover:shadow-2xl transition-all duration-500"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden h-64">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <div className={`glass px-3 py-2 rounded-2xl flex items-center gap-2`}>
              <IconComponent className="text-white text-sm" />
              <span className="text-white text-sm font-medium">{project.category}</span>
            </div>
          </div>
          
          {/* Year badge */}
          <div className="absolute top-4 right-4">
            <div className="glass px-3 py-2 rounded-2xl">
              <span className="text-white text-sm font-medium">{project.year}</span>
            </div>
          </div>
          
          {/* Hover actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass-strong p-4 rounded-2xl text-white hover:text-indigo-300 transition-colors"
            >
              <FaExternalLinkAlt className="text-xl" />
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="glass-strong p-4 rounded-2xl text-white hover:text-purple-300 transition-colors"
            >
              <FaGithub className="text-xl" />
            </motion.a>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {project.name}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`}></span>
                <span>{project.status}</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
          
          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
              <FaCode className="text-indigo-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, techIndex) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`px-3 py-2 bg-gradient-to-r ${project.color} bg-opacity-10 border border-white/10 rounded-xl text-xs font-medium text-white backdrop-blur-sm`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 btn-primary flex items-center justify-center gap-2 text-sm py-3 px-4"
            >
              <BiGlobe className="text-sm" />
              <span>Live Demo</span>
            </motion.a>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary flex items-center justify-center gap-2 text-sm py-3 px-4"
            >
              <FaGithub className="text-sm" />
              <span>Code</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  
  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
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
            <span className="text-gray-300 font-medium">Featured Work</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold gradient-text mb-4"
            style={{ fontFamily: 'JetBrains Mono' }}
          >
            My Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of innovative web applications built with modern technologies, 
            demonstrating full-stack development expertise and creative problem-solving.
          </motion.p>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mt-6"
          />
        </motion.div>
        
        {/* Featured Projects */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <FaStar className="text-yellow-400" />
            Featured Projects
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
        
        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
          >
            <FaCode className="text-indigo-400" />
            Other Projects
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
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
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Collaborating?</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to work on innovative projects and bring creative ideas to life.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Let's Work Together</span>
              <FaRocket className="text-sm" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
