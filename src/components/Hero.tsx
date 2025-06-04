import  { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const roles = ["Web Developer", "Game Developer", "Tech Enthusiast"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentRole((prev) => {
          const index = roles.indexOf(prev);
          return roles[(index + 1) % roles.length];
        });
        setFade(true);
      }, 500);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Particle background animation
  const particleVariants = {
    animate: {
      y: [0, -12, 0],
      opacity: [0.4, 1, 0.4],
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
    },
  };

  // Scroll indicator animation
  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      opacity: [1, 0.5, 1],
      transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-[#020817] to-[#0a1a3d] text-white overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-indigo-500/20 rounded-full"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            variants={particleVariants}
            animate="animate"
          />
        ))}
        <div className="absolute inset-0 bg-opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-6 sm:gap-8 relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 max-w-xl text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight break-words"
          >
            Hey, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Simar
              <br />
              Narula
            </span>
          </motion.h1>

          {/* Animated Role Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: fade ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 font-medium tracking-wide"
          >
            {currentRole}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Crafting high-performance, immersive digital experiences with cutting-edge tech.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-sm sm:text-base text-indigo-300 italic mb-8"
          >
            "Turning ideas into interactive realities, one pixel at a time."
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full max-w-md mx-auto lg:mx-0"
          >
            <a
              href="#contact"
              className="w-48 sm:w-52 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              Contact Me <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center lg:justify-start gap-4 mt-8"
          >
            {[
              { href: "https://github.com/simar111/", icon: <Github size={24} />, label: "GitHub" },
              { href: "https://www.linkedin.com/in/simar-narula-0a5b25360/", icon: <Linkedin size={24} />, label: "LinkedIn" },
              { href: "mailto:simarnarula1477@gmail.com", icon: <Mail size={24} />, label: "Email" },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gray-800/80 backdrop-blur-sm rounded-full hover:bg-indigo-500/30 transition-colors shadow-md"
                aria-label={`Visit my ${link.label}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Profile Image with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
          className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-indigo-500 shadow-2xl"
        >
          <img
            src="./profile.jpg"
            alt="Simar Narula"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/25 to-purple-500/25 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            whileHover={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        variants={scrollIndicatorVariants}
        animate="animate"
      >
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown size={28} className="text-indigo-400" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;