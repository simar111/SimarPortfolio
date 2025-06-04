
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4"
            >
              Portfolio
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Creating beautiful and functional web experiences with modern
              technologies.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                whileHover={{ y: -2, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Sirsa,Haryana</li>
              <li className="text-gray-400">+91 9541570111</li>
              <li className="text-gray-400">simarnarula1477@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Simar Narula. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

