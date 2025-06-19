import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Terminal, Globe, GitBranch, Layers, Gamepad2, Cpu, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Terminal,
      title: 'Programming Languages',
      skills: [
        { name: 'C', level: 75 },
        { name: 'C++', level: 70 },
        { name: 'Java', level: 65 },
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      skills: [
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'React', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'Express', level: 70 },
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Database Systems',
      skills: [
        { name: 'MySQL', level: 70 },
        { name: 'MongoDB', level: 65 },
      ],
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      skills: [
        { name: 'Unity', level: 60 },
        { name: 'C#', level: 55 },
      ],
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: GitBranch,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'GitHub', level: 80 },
        { name: 'Docker', level: 50 },
      ],
      color: 'from-violet-500 to-indigo-500'
    },
    {
      icon: Layers,
      title: 'UI Frameworks',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'React Bootstrap', level: 85 },
        { name: 'Framer Motion', level: 75 },
      ],
      color: 'from-rose-500 to-red-500'
    },
  ];

  const proficiencyLabels = {
    95: 'Expert',
    85: 'Advanced',
    75: 'Proficient',
    65: 'Intermediate',
    55: 'Beginner'
  };

  return (
    <section id="skills" className="relative py-28 bg-gray-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(100,100,255,0.05)_0,_transparent_70%)]"></div>
        <motion.div 
          initial={{ x: -100, y: -100 }}
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 100, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-purple-900/10 blur-3xl rounded-full"
        ></motion.div>
        <motion.div 
          initial={{ x: 100, y: 100 }}
          animate={{ 
            x: [0, -100, 0], 
            y: [0, -100, 0],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/10 blur-3xl rounded-full"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1],
            delay: 0.1
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700"
          >
            <span className="text-sm font-medium tracking-widest text-blue-400">
              TECHNICAL MASTERY
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              Skills & Expertise
            </motion.span>
          </h2>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="w-40 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full origin-left"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 group-hover:opacity-30 transition-opacity duration-500 via-transparent from-transparent to-transparent group-hover:via-blue-500/10"></div>
              <div className="absolute inset-0.5 rounded-[11px] bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-blue-500/30 via-transparent to-purple-500/30"></div>
              
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 h-full border border-gray-800 group-hover:border-blue-500/30 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`relative p-3 bg-gradient-to-br ${category.color} rounded-xl shadow-lg flex-shrink-0`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <category.icon size={24} className="text-white relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100">{category.title}</h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-xs text-gray-400">
                          {proficiencyLabels[Math.round(skill.level / 10) * 10] || 'Intermediate'}
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.3 + (skillIndex * 0.1) }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-gray-900/80 to-blue-900/20 rounded-xl p-8 border border-gray-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
                Development Approach
              </h4>
              <p className="text-gray-300">
                Focused on clean architecture, performance optimization, and maintainable code with comprehensive documentation.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5 3.87 4 4 0 0 1-1-3.87 4 4 0 0 1 .5-2 4 4 0 0 1 .66-1.34 4 4 0 0 1 .84-1.15s.34-.1.5-.1a4 4 0 0 1 3.83 4.17 4 4 0 0 1-1.17 3.17 4 4 0 0 1-3.17 1.17 4 4 0 0 1-2.83-1.17 4 4 0 0 1-1.17-3.17 4 4 0 0 1 4-4c.16 0 .33 0 .5.1a4 4 0 0 1 1.15.84 4 4 0 0 1 1.34.66 4 4 0 0 1 2 .5 4 4 0 0 1 3.87 1 4 4 0 0 1 3.87 5Z"></path>
                </svg>
                Learning Curve
              </h4>
              <p className="text-gray-300">
                Continuously expanding skillset with focus on emerging technologies while strengthening core fundamentals.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-3.87V11a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v.13a4 4 0 0 1-5 3.87 10 10 0 0 0 12-10Z"></path>
                </svg>
                Specializations
              </h4>
              <p className="text-gray-300">
                Web development with React ecosystem, interactive UI animations, and progressive web applications.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;