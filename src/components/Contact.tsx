import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Linkedin, Github } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactDetails = [
    { icon: Mail, label: 'Email', value: 'simarnarula1477@gmail.com', href: 'mailto:simarnarula1477@gmail.com' },
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      value: 'Chat Now', 
      href: 'https://wa.me/919541570111?text=Hello%20Simar,%20I%20would%20like%20to%20connect!'
    },
    { icon: MapPin, label: 'Location', value: 'Sirsa, Haryana' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/simar-narula-0a5b25360/', label: 'LinkedIn', handle: '/simarnarula' },
    { icon: Github, href: 'https://github.com/simar111/', label: 'GitHub', handle: '/simar111' },
    { icon: Instagram, href: 'https://www.instagram.com/simarxnarula?igsh=cXE2dnhsYmF6b3Q=', label: 'Instagram', handle: '@simarxnarula' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.15),transparent_60%)] animate-pulse" />
        <div className="absolute w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl -top-40 -left-40 animate-slow-bounce" />
        <div className="absolute w-80 h-80 bg-purple-600/10 rounded-full blur-3xl -bottom-40 -right-40 animate-slow-bounce delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-200 text-lg max-w-2xl mx-auto font-light">
            I’m here to collaborate, discuss opportunities, or answer any questions. Let’s make something great together!
          </p>
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mt-4 rounded-full shadow-lg shadow-indigo-500/20"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-10">
            <div className="bg-gray-800/90 backdrop-blur-2xl p-8 rounded-xl shadow-2xl border border-gray-700/40 transition-all duration-500 hover:shadow-indigo-600/30 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-200 tracking-wide">Contact Details</h3>
              <div className="space-y-6">
                {contactDetails.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-indigo-600/20 rounded-full group-hover:bg-indigo-600/30 transition-colors duration-300">
                      <item.icon size={24} className="text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label === 'WhatsApp' ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="text-white font-semibold hover:text-indigo-200 transition-colors duration-300 tracking-wide"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white font-semibold tracking-wide">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Handles */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/90 backdrop-blur-2xl p-8 rounded-xl shadow-2xl border border-gray-700/40 transition-all duration-500 hover:shadow-indigo-600/30 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-6 text-indigo-200 tracking-wide">Connect Online</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03, boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center gap-4 p-4 bg-gray-900/70 rounded-lg border border-gray-700/60 hover:bg-indigo-600/10 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-indigo-600/20 rounded-full group-hover:bg-indigo-600/30 transition-colors duration-300">
                      <link.icon size={24} className="text-indigo-300 group-hover:text-indigo-200 transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{link.label}</p>
                      <p className="text-white font-semibold group-hover:text-indigo-200 transition-colors tracking-wide">{link.handle}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-300 text-sm font-light">
                  Stay updated with my latest projects and insights on these platforms.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scoped Styles */}
      <style>
        {`
          @keyframes slow-bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .animate-slow-bounce {
            animation: slow-bounce 7s ease-in-out infinite;
          }
          .delay-1000 {
            animation-delay: 1s;
          }
        `}
      </style>
    </section>
  );
};

export default Contact;