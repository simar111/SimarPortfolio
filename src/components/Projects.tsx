import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { Tilt } from "react-tilt";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = useMemo(
    () => [
            {
        title: "Play Plates (E-Commerce Website)",
        description:
          "PlayPlates is a full-featured MERN stack e-commerce platform for toys & crockery, featuring a modern responsive UI, secure Razorpay payment integration, and a complete admin dashboard for product, order, and category management. Built with React.js, Node.js, Express, MongoDB, Tailwind CSS, and optimized with ImageKit for fast image delivery, it delivers a smooth, user-friendly shopping experience across all devices.",
        image:
          "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=80",
        technologies: ["MongoDB", "Express", "React", "Node.js", "Image Kit ","Razorpay"],
        githubUrl: "https://github.com/harshit14012006/playplatesuserdashboard",
        liveUrl: "https://playplatesuserdashboard.vercel.app/",
      },
      {
        title: "Car Service Website",
        description:
          "A full-fledged MERN stack website for booking car services with an advanced admin panel and user dashboard.",
        image: "/car.png",
        technologies: ["MongoDB", "Express", "React", "Node.js"],
        githubUrl: "https://github.com/SoftechInfowayss/carservice",
        liveUrl: "https://softechhhcarservice.netlify.app/",
      },
      {
        title: "Expense Tracker",
        description:
          "A MERN stack expense tracker website with authentication, budget planning, and insightful charts.",
        image:
          "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=800&q=80",
        technologies: ["MongoDB", "Express", "React", "Node.js", "Chart.js"],
        githubUrl: "https://github.com/SoftechInfowayss/Expensemanager",
        liveUrl: "https://stexpenseease.netlify.app",
      },
    ],
    []
  );

  const closeOnBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Title */}
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
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onClick={() => {
                console.log("Clicked:", project.title); // Debug
                setSelectedProject(project);
              }}
              className="cursor-pointer"
            >
              <Tilt
                options={{ max: 15, scale: 1.05, speed: 400 }}
                className="relative bg-gray-800/40 backdrop-blur-xl rounded-xl shadow-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:ring-2 hover:ring-blue-500/40"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/60 rounded-full text-sm text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center px-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeOnBackdrop}
            >
              <motion.div
                className="bg-gray-800 rounded-lg shadow-xl max-w-xl w-full overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-56 object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-3 right-3 p-2 bg-black/60 rounded-full hover:bg-red-500 transition"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-700/60 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-700/40 rounded-full hover:bg-blue-500 transition-all"
                    >
                      <Github size={22} />
                    </motion.a>
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-700/40 rounded-full hover:bg-purple-500 transition-all"
                    >
                      <ExternalLink size={22} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
