

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Quirex",
    description: "It makes your energy save and make for buy and sell your dreams in terms of property ,once you create an registration and login to take all properties.|!",
    image: "/images/quirex.png",
    github: "https://github.com/Kushal1088/Quirex",
    live: "https://quirex-yifl.vercel.app/",
  },
  {
    title: "TicketGenius",
    description: "AI-powered ticketing system using MERN, Gemini, and Inngest for smart triage.",
    image: "/images/shortner.jpeg",
    github: "https://github.com/Kushal1088/SHORTNER",
    // live: "https://ticket-genius-hosting.vercel.app",
  },
  // {
  //   title: "StudyNotion",
  //   description: "Full-stack EdTech platform with authentication and course modules.",
  //   image: "/images/studynotion.png",
  //   github: "https://github.com/anurag7276/Studynotion-Hosting.git",
  //   live: "https://studynotion-hosting-rho.vercel.app",
  // },
  // {
  //   title: "Portfolio",
  //   description: "Professional developer portfolio with animations and responsive design.",
  //   image: "/images/portfolio.png",
  //   github: "https://github.com/anurag7276/Anurag-portfolio.git",
  //   live: "https://anurag-portfolio-seven-ochre.vercel.app",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 animated-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="w-20 h-[2px] bg-cyan-400 mx-auto mb-4"></div>
        <p className="text-gray-300">
          Crafting impactful digital experiences through full-stack development and intelligent AI innovations — here are some of my standout creations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover project-image-card"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn"
                >
                  Live
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
