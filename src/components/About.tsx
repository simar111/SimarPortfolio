import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Work Experience',
      description: 'Freelance Web Developer | Internship in Game Development',
      duration: 'Ongoing',
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Pursuing B.Tech in Computer Science',
      duration: '2021 - Present',
    },
    {
      icon: Award,
      title: 'Projects & Achievements',
      description: 'Developed multiple web applications & games',
      duration: 'Freelance & Personal Projects',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-extrabold">About Me</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-semibold leading-snug">
              Crafting seamless web experiences & exploring game development
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm currently pursuing my B.Tech in Computer Science while refining my expertise in web and game development.
              With hands-on experience in freelance projects and personal applications, I constantly push my boundaries to
              innovate and create impactful digital experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My focus is on building interactive, responsive, and scalable applications while embracing emerging
              technologies to enhance user engagement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl flex items-center gap-6 shadow-lg hover:shadow-2xl hover:bg-gray-700/50 transition-all duration-300"
              >
                <div className="p-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl shadow-md">
                  <experience.icon size={32} className="text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-1">{experience.title}</h4>
                  <p className="text-gray-300 mb-1">{experience.description}</p>
                  <p className="text-gray-400 text-sm">{experience.duration}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;