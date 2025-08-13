import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: "Ayan Arora",
    role: "Student, New Zealand",
    content:
      "Simar completed my assignments and projects with outstanding quality and delivered everything on time. Their work helped me achieve top grades and exceed expectations.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 2,
    name: "Anshul",
    role: "Founder, A+ Academy",
    content:
      "Simar developed our A+ Academy website with exceptional design, functionality, and speed. The end result was beyond what we had envisioned.",
    rating: 5,
    image: "/Anshul.jpg",
  },
];

  const changeSlide = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const index = prev + newDirection;
      if (index < 0) return testimonials.length - 1;
      if (index >= testimonials.length) return 0;
      return index;
    });
  };

  // Auto-play every 6s
  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.5, ease: "easeIn" },
    }),
  };

  return (
    <section className="relative py-28 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center mb-14">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 text-blue-400 text-sm tracking-wider"
        >
          CLIENT TESTIMONIALS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500 my-4"
        >
          What Clients Say
        </motion.h2>

        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Industry leaders share their experiences working with me.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence custom={direction}>
          <motion.div
            key={testimonials[currentIndex].id}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) > 50 && velocity.x !== 0;
              if (swipe) changeSlide(velocity.x < 0 ? 1 : -1);
            }}
            className="bg-gray-900/80 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-8 shadow-2xl relative"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 rounded-full border-2 border-amber-400/40 shadow-lg"
                />
                <h3 className="text-xl font-bold text-white mt-4">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-amber-300 text-sm">
                  {testimonials[currentIndex].role}
                </p>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < testimonials[currentIndex].rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex-1 relative">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <Quote className="absolute -top-4 -left-4 text-gray-700 w-10 h-10" />
                  <p className="text-gray-300 text-lg leading-relaxed pl-8">
                    {testimonials[currentIndex].content}
                  </p>
                  <Quote className="absolute -bottom-4 -right-4 text-gray-700 w-10 h-10 transform rotate-180" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <motion.button
          onClick={() => changeSlide(-1)}
          whileHover={{ scale: 1.1 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/70 border border-gray-700 p-3 rounded-full hover:bg-amber-500/20 transition"
        >
          <ChevronLeft className="text-white" />
        </motion.button>
        <motion.button
          onClick={() => changeSlide(1)}
          whileHover={{ scale: 1.1 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/70 border border-gray-700 p-3 rounded-full hover:bg-amber-500/20 transition"
        >
          <ChevronRight className="text-white" />
        </motion.button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex
                ? "bg-amber-400 w-6 shadow-lg shadow-amber-400/50"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
