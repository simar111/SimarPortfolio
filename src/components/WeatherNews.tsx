import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import { ExternalLink, Clock, Calendar, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

const WeatherNews = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          "https://newsapi.org/v2/everything?q=weather&apiKey=009e4b71f1244220ae3cc8b35707124a"
        );
        setNews(res.data.articles.slice(0, 10));
        setError(null);
      } catch (error) {
        setError("Failed to fetch news. Please try again later.");
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
      aria-label="Previous slide"
    >
      <ChevronLeft className="w-6 h-6 text-white" />
    </button>
  );

  const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
      aria-label="Next slide"
    >
      <ChevronRight className="w-6 h-6 text-white" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
    customPaging: (i: number) => (
      <div
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          i === currentSlide ? "bg-blue-500 w-4" : "bg-white/50"
        }`}
      />
    ),
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-8 bg-red-500/10 rounded-lg backdrop-blur-sm">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-8 md:px-8 lg:px-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Weather News & Updates
          </span>
        </h2>
      </div>

      <div className="relative px-6">
        <AnimatePresence>
          <Slider {...settings}>
            {news.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-3 py-2"
              >
                <motion.article
                  whileHover={{ y: -5 }}
                  className="overflow-hidden rounded-xl bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg border border-white/10 h-full"
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.urlToImage || "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=800&q=80"}
                        alt={article.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                      {article.source.name}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-white/80 text-sm mb-4 line-clamp-2">
                      {article.description}
                    </p>

                    <div className="flex items-center gap-4 text-white/60 text-xs mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(article.publishedAt), "MMM dd, yyyy")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {format(new Date(article.publishedAt), "HH:mm")}
                      </div>
                    </div>

                    <motion.a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read More
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.article>
              </motion.div>
            ))}
          </Slider>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default WeatherNews;