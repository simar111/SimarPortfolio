import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Code, Cpu, Globe, Server, Sparkles } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      icon: Briefcase,
      title: 'Professional Journey',
      description: 'Freelance Web Developer | Game Development Intern',
      duration: '2022 - Present',
      highlights: [
        'Built 15+ responsive websites for international clients',
        'Developed 3 interactive games using Unity and WebGL',
        'Optimized web performance achieving 95+ Lighthouse scores'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech in Computer Science',
      duration: '2021 - 2025',
      highlights: [
        'Specialization in Full Stack Development',
        'Published research on Web3 architectures',
        'Dean\'s List for academic excellence'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      title: 'Achievements',
      description: 'Projects & Recognitions',
      duration: 'Ongoing',
      highlights: [
        'Hackathon 2023 Winner - Best Web Solution',
        'Open Source Contributor to 5+ projects',
        'Speaker at DevConf 2024'
      ],
      color: 'from-amber-500 to-amber-600'
    },
  ];

  return (
    <section id="about" className="relative py-28 bg-gray-950 text-white overflow-hidden">
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
            <Sparkles size={16} className="text-amber-400" />
            <span className="text-sm font-medium tracking-widest text-blue-400">
              PROFESSIONAL PROFILE
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block"
            >
              About Me
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <h3 className="text-3xl md:text-4xl font-bold leading-snug">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Digital Experiences</span> That Make An Impact
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a passionate full-stack developer and game enthusiast currently completing my B.Tech in Computer Science. 
                With expertise across web development and game development pipelines, I create immersive digital 
                experiences that blend cutting-edge technology with intuitive design.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                My approach combines technical precision with creative problem-solving, ensuring solutions are not just 
                functional but delightful to use. I specialize in building performant, accessible applications while 
                pushing the boundaries of interactive experiences.
              </p>

              <p className="text-gray-300 leading-relaxed text-lg">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or speaking at developer conferences about emerging web standards.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-900/50 to-blue-900/10 rounded-xl p-6 border border-gray-800 mt-8"
            >
              <h4 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
                Current Focus
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Developing next-gen web applications with React, Next.js and WebAssembly</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </div>
                  <p className="text-gray-300">Exploring immersive 3D web experiences with Three.js and WebGL</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <path d="M3.27 6.96 12 12.01l8.73-5.05"></path>
                      <path d="M12 22.08V12"></path>
                    </svg>
                  </div>
                  <p className="text-gray-300">Contributing to open-source projects in the Web3 ecosystem</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2
            }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {experiences.map((experience, index) => (
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
                <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 flex items-start gap-6 h-full border border-gray-800 group-hover:border-blue-500/30 transition-all duration-300">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    <div className={`relative p-4 bg-gradient-to-br ${experience.color} rounded-xl shadow-lg flex-shrink-0`}>
                      <experience.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-4">
                      <h4 className="text-xl font-bold text-gray-100 mb-1">{experience.title}</h4>
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-300 flex-shrink-0"
                      >
                        {experience.duration}
                      </motion.span>
                    </div>
                    <p className="text-blue-300 font-medium mb-3">{experience.description}</p>
                    <ul className="space-y-3">
                      {experience.highlights.map((highlight, i) => (
                        <motion.li 
                          key={i}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
                          viewport={{ once: true }}
                          className="flex items-start gap-3"
                        >
                          <div className={`w-2 h-2 mt-2.5 rounded-full flex-shrink-0 bg-gradient-to-br ${experience.color}`}></div>
                          <p className="text-gray-300 text-sm leading-snug">{highlight}</p>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-900/80 to-purple-900/20 rounded-xl p-6 border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-gray-100 mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="22"></line>
                </svg>
                Development Philosophy
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-100 mb-1">User-First Approach</h5>
                    <p className="text-gray-300 text-sm">Designing intuitive interfaces with accessibility as a priority, not an afterthought</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400">
                      <circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-100 mb-1">Clean Architecture</h5>
                    <p className="text-gray-300 text-sm">Modular, maintainable codebases with comprehensive documentation</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20 flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-100 mb-1">Continuous Innovation</h5>
                    <p className="text-gray-300 text-sm">Staying ahead of technology curves while respecting proven fundamentals</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;