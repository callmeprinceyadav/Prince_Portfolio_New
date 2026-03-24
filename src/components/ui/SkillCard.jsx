import { motion } from "framer-motion";

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

export default SkillCard;
