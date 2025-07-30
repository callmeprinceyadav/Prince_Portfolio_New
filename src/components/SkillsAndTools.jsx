// src/components/SkillsAndTools.jsx
import React from "react";

const skills = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Github", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
];

const tools = [
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Netlify", img: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
  { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Babel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg" },
  { name: "JSON Server", img: "https://raw.githubusercontent.com/typicode/json-server/master/favicon.png" },
];

export default function SkillsAndTools() {
  return (
    <section className="py-20 bg-gray-900 text-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">Skills & Tools</h2>

        <div className="flex flex-col lg:flex-row justify-center gap-20">
          {/* Skills */}
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-6 text-center text-gray-200">Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-items-center">
              {skills.map(({ name, img }) => (
                <div
                  key={name}
                  className="flex flex-col items-center p-5 rounded-lg shadow-lg hover:shadow-cyan-500 transition-shadow duration-300 cursor-default"
                  style={{ maxWidth: "120px" }}
                >
                  <img src={img} alt={name} className="w-16 h-16 object-contain mb-3 drop-shadow-lg" />
                  <p className="text-lg text-center">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="flex-1">
            <h3 className="text-3xl font-semibold mb-6 text-center text-gray-200">Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 justify-items-center">
              {tools.map(({ name, img }) => (
                <div
                  key={name}
                  className="flex flex-col items-center p-5 rounded-lg shadow-lg hover:shadow-cyan-500 transition-shadow duration-300 cursor-default"
                  style={{ maxWidth: "120px" }}
                >
                  <img src={img} alt={name} className="w-16 h-16 object-contain mb-3 drop-shadow-lg" />
                  <p className="text-lg text-center">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
