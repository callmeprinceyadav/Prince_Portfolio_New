import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar, FaCode } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

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
                  key={tech + techIndex}
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

export default ProjectCard;
