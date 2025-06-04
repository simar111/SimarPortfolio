import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Tool, Globe, GitBranch, Layers, Gamepad2 } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Terminal,
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 'Intermediate' },
        { name: 'C++', level: 'Intermediate' },
        { name: 'Java', level: 'Intermediate' },
      ],
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Express', level: 'Intermediate' },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
      ],
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      skills: [
        { name: 'Unity', level: 'Beginner' },
      ],
    },
    {
      icon: GitBranch,
      title: 'Version Control & Tools',
      skills: [
        { name: 'GitHub', level: 'Advanced' },
        { name: 'NetBeans', level: 'Intermediate' },
      ],
    },
    {
      icon: Layers,
      title: 'UI & Frameworks',
      skills: [
        { name: 'Tailwind CSS', level: 'Advanced' },
        { name: 'React Bootstrap', level: 'Advanced' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-3"></div>
          <p className="text-gray-400 mt-4">Mastering the art of coding, designing, and developing scalable applications.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/60 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-gray-700 hover:bg-gray-800 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gray-700/60 rounded-full text-sm text-white flex items-center gap-2"
                  >
                    <span className="text-blue-400 font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-xs">({skill.level})</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
