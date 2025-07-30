import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-cyan-400 mb-8"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-3xl text-gray-300 text-lg leading-relaxed"
      >
        
       I'm Prince Yadav, a full-stack web developer skilled in JavaScript, React, Node.js, MongoDB, and SQL. I build responsive, user-friendly applications with clean code and scalable architecture. Trained at Prepleaf by Masai, I’ve completed real-world projects like Myntra Clone and BlueFly. I'm quick to adapt, passionate about learning, and excited by new technologies like Generative AI. Let's build something great!
      </motion.p>
    </section>
  );
}
