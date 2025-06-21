import { motion } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "CEO, TechSolutions Inc.",
      content: "Working with Simar was an absolute pleasure. Their technical expertise and attention to detail resulted in a web application that exceeded our expectations. The project was delivered ahead of schedule with flawless execution.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Product Manager, Digital Innovations",
      content: "Simar's problem-solving skills are exceptional. They took our complex requirements and turned them into an elegant solution. Their communication throughout the project was outstanding.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO, Startup Ventures",
      content: "We hired Simar for a critical project with tight deadlines. Not only did they deliver exceptional quality code, but they also provided valuable insights that improved our overall architecture.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Director of Engineering, WebServices Co.",
      content: "Simar is one of the most talented developers I've worked with. Their ability to quickly understand complex systems and implement efficient solutions is truly impressive.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    },
    {
      id: 5,
      name: "David Kim",
      role: "Founder, AppWorks",
      content: "The mobile application Simar developed for us received glowing reviews from our users. Their clean code and thoughtful architecture made future updates a breeze.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/81.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 0.5
      } 
    }
  };

  const testimonialVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setCurrentIndex(prev => {
      const newIndex = prev + newDirection;
      if (newIndex < 0) return testimonials.length - 1;
      if (newIndex >= testimonials.length) return 0;
      return newIndex;
    });
  };

  return (
    <section id="testimonials" className="relative py-28 bg-gray-950 overflow-hidden">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10"
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%'
            }}
            animate={{
              y: [0, (Math.random() * 80) - 40],
              x: [0, (Math.random() * 60) - 30],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_70%)]"
          animate={{
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-3xl -top-40 -left-40"
          animate={{
            x: [-100, 0, -100],
            y: [-100, 0, -100]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 10
          }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700"
          >
            <span className="text-sm font-medium tracking-widest text-blue-400">
              CLIENT TESTIMONIALS
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 mb-6"
          >
            What Clients Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto font-light"
          >
            Don't just take my word for it. Here's what industry professionals say about working with me.
          </motion.p>
          
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full shadow-lg shadow-amber-500/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative h-[400px] md:h-[450px] w-full max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              custom={index - currentIndex}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className={`absolute inset-0 bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800/50 p-8 flex flex-col ${index === currentIndex ? 'z-10' : 'z-0'}`}
            >
              <div className="flex-1 flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400/30 shadow-lg mb-4"
                  >
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white text-center">{testimonial.name}</h3>
                  <p className="text-amber-300 text-sm text-center">{testimonial.role}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < testimonial.rating ? "fill-amber-400 text-amber-400" : "text-gray-600"} 
                      />
                    ))}
                  </div>
                </div>

                <div className="flex-1 relative">
                  <Quote className="absolute -top-2 -left-2 text-gray-700 w-12 h-12" />
                  <p className="text-gray-300 text-lg leading-relaxed pl-8 pt-4">
                    {testimonial.content}
                  </p>
                  <Quote className="absolute -bottom-2 -right-2 text-gray-700 w-12 h-12 transform rotate-180" />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Navigation Arrows */}
          <motion.button
            onClick={() => paginate(-1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/80 backdrop-blur rounded-full border border-gray-700 shadow-lg hover:bg-amber-500/20 hover:border-amber-400/30 transition-all"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={() => paginate(1)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-gray-800/80 backdrop-blur rounded-full border border-gray-700 shadow-lg hover:bg-amber-500/20 hover:border-amber-400/30 transition-all"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Dots Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-2 mt-8"
        >
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-amber-400 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;