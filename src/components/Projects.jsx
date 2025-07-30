import { motion } from "framer-motion";
import BlueFly from "../assets/blue.png";
import Myntra from "../assets/myntaclone.png"


const projects = [
  {
    name: "Myntra",
    description: "A full-featured e-commerce web app with secure login, product filtering, and responsive UI.",
    stack: ["React", "JavaScript" , "HTML5", "CSS3", "Node.js", "Express.js", "MongoDB", "RESTful APIs"],
    link: "https://myntra-frontend-henna.vercel.app/",
    image: Myntra
  },
  {
    name: "BLuefly",
    description: "A sleek e-commerce interface with smooth product browsing, user auth, and animated cart experience.",
    stack: ["React", "Javascript", "Express Js", "MogoDb"],
    link: "bluefly-check.netlify.app",
    image: BlueFly
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-cyan-400 mb-10"
      >
        Projects
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={project.name}
            className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800 flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.name} className="object-cover h-56 w-full"/>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2 text-gray-100">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map(tech => (
                  <span key={tech} className="bg-cyan-900 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="mt-auto text-cyan-400 font-semibold hover:underline">View Project</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
