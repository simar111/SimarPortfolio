import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Tilt } from "react-tilt";

const Projects = () => {
  const projects = [
    {
      title: "Eye Hospital Management System",
      description:
        "A Java-based hospital management system built in NetBeans to manage appointments, patients, and medical records efficiently.",
      image:
        "/Eye.png",
      technologies: ["Java", "NetBeans", "MySQL", "Swing UI"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      title: "Car Service Website",
      description:
        "A full-fledged MERN stack website for booking car services with an advanced admin panel and user dashboard.",
      image:"./car.png",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
    {
      title: "Expense Tracker",
      description:
        "A MERN stack expense tracker website with authentication, budget planning, and insightful charts.",
      image:
        "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=80",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
      githubUrl: "https://github.com",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-extrabold mb-4 tracking-wide">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              options={{ max: 15, scale: 1.05, speed: 400 }}
              className="relative bg-gray-800/40 backdrop-blur-xl rounded-xl shadow-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:ring-2 hover:ring-blue-500/40"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700/60 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-700/40 rounded-full hover:bg-blue-500 transition-all duration-300"
                    >
                      <Github size={22} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-700/40 rounded-full hover:bg-purple-500 transition-all duration-300"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
