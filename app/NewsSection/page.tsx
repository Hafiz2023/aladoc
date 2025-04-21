"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const newsItems = [
  {
    id: 1,
    source: 'SAMAA',
    logo: '/news/samaa-logo.png',
    title: 'Yango passengers, partner drivers will have opportunity to subscribe to oladoc\'s healthcare services.',
    link: '#'
  },
  {
    id: 2,
    source: 'p@pakistani',
    logo: '/news/pakistani-logo.png',
    title: 'Mobilink Bank partners with oladoc, bringing premium healthcare to customers\' doorstep.',
    link: '#'
  },
  {
    id: 3,
    source: 'THE NATION',
    logo: '/news/nation-logo.png',
    title: 'SIMOSA has partnered with oladoc to provide healthcare content to SIMOSA users.',
    link: '#'
  },
  {
    id: 4,
    source: 'Jubilee',
    logo: '/news/jubilee-logo.png',
    title: 'Jubilee partners with oladoc to enhance healthcare life experience through app.',
    link: '#'
  }
];

export default function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? newsItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-900"
        >
          As seen in news
        </motion.h2>

        <div className="relative overflow-hidden">
          {/* Carousel */}
          <div className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {newsItems.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all h-full">
                  <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="relative h-10 w-24 mr-4">
                        <Image 
                          src={item.logo} 
                          alt={item.source}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <span className="text-sm text-gray-500">{item.source}</span>
                    </div>
                    <p className="text-lg text-gray-800 mb-6 flex-grow">{item.title}</p>
                    <a href={item.link} className="text-blue-600 font-medium hover:underline inline-flex items-center">
                      READ MORE <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition ml-2"
            aria-label="Previous news"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition mr-2"
            aria-label="Next news"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}