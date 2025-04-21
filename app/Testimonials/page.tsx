"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, SetStateAction } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote: "The platform revolutionized how I connect with patients. Seamless video consultations and easy scheduling.",
    author: "Dr. Zainab Tariq",
    specialization: "Cardiologist",
    image: "/Saadia-zulfiqar-cheema.webp",
    experience: "15 years",
    hospital: "Aga Khan Hospital"
  },
  {
    id: 2,
    rating: 5,
    quote: "My patient reach has increased by 300% since joining. The dashboard analytics are incredibly helpful.",
    author: "Dr. Moin Umar",
    specialization: "Neurologist",
    image: "/Saadia-zulfiqar-cheema.webp",
    experience: "12 years",
    hospital: "Shaukat Khanum"
  },
  {
    id: 3,
    rating: 5,
    quote: "Perfect for follow-up consultations. Saves my patients hours of travel time.",
    author: "Dr. Riffat Afzaal",
    specialization: "Pediatrician",
    image: "/Saadia-zulfiqar-cheema.webp",
    experience: "18 years",
    hospital: "Liaquat National"
  },
  {
    id: 4,
    rating: 4,
    quote: "The prescription module is excellent. Integration with pharmacy partners is a game-changer.",
    author: "Dr. Ayesha Khan",
    specialization: "Dermatologist",
    image: "/Saadia-zulfiqar-cheema.webp",
    experience: "9 years",
    hospital: "SIUT"
  },
  {
    id: 5,
    rating: 5,
    quote: "Reduced my no-show rate by 60% with automated reminders. Patient feedback system is robust.",
    author: "Dr. Ali Raza",
    specialization: "Orthopedic Surgeon",
    image: "/Saadia-zulfiqar-cheema.webp",
    experience: "14 years",
    hospital: "Civil Hospital"
  },
  {
    id: 6,
    rating: 5,
    quote: "Telemedicine features are top-notch. The EMR integration saves me hours each week.",
    author: "Dr. Hira Sheikh",
    specialization: "Gynecologist",
    image: "/Saadia-zulfiqar-cheema.webp",
    experience: "11 years",
    hospital: "Jinnah Hospital"
  },
  {
    id: 7,
    rating: 5,
    quote: "Best platform for specialist referrals. The secure messaging system is excellent.",
    author: "Dr. Saad Mehmood",
    specialization: "Oncologist",
    image: "/Saadia-zulfiqar-cheema.webp",
    experience: "16 years",
    hospital: "Combined Military"
  },
  {
    id: 8,
    rating: 4,
    quote: "Patient management tools are intuitive. The mobile app makes me accessible anywhere.",
    author: "Dr. Fatima Noor",
    specialization: "Psychiatrist",
    image: "/Saadia-zulfiqar-cheema.webp",
    experience: "8 years",
    hospital: "PNS Shifa"
  },
  {
    id: 9,
    rating: 5,
    quote: "Revenue increased by 40% since joining. The platform handles everything from billing to follow-ups.",
    author: "Dr. Usman Ghani",
    specialization: "ENT Specialist",
    image: "/Saadia-zulfiqar-cheema.webp",
    experience: "13 years",
    hospital: "Holy Family"
  }
];

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

export default function DoctorTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      
      if (width < breakpoints.sm) {
        setCardsToShow(1);
      } else if (width < breakpoints.md) {
        setCardsToShow(2);
      } else if (width < breakpoints.lg) {
        setCardsToShow(3);
      } else if (width < breakpoints.xl) {
        setCardsToShow(4);
      } else {
        setCardsToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / cardsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if ('touches' in e) {
      setDragStartX(e.touches[0].clientX);
    } else {
      setDragStartX(e.clientX);
    }
  };

  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    
    const dragEndX = 'changedTouches' in e ? e.changedTouches[0].clientX : e.clientX;
    const dragDistance = dragEndX - dragStartX;

    if (dragDistance > 50) {
      prevSlide();
    } else if (dragDistance < -50) {
      nextSlide();
    }
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * cardsToShow,
    (currentIndex + 1) * cardsToShow
  );

  // Handle cases where we're at the end and don't have enough cards
  if (visibleTestimonials.length < cardsToShow && currentIndex > 0) {
    const needed = cardsToShow - visibleTestimonials.length;
    visibleTestimonials.unshift(...testimonials.slice(-needed));
  }

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Trusted by Leading Medical Professionals
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Join thousands of doctors who transformed their practice with our platform
          </p>
        </motion.div>

        <div 
          className="relative overflow-hidden"
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onMouseLeave={() => setIsDragging(false)}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          {/* Carousel Track */}
          <div className="relative h-full">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: windowWidth > breakpoints.md ? 0 : (currentIndex > 0 ? -50 : 50) }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: windowWidth > breakpoints.md ? 0 : (currentIndex > 0 ? 50 : -50) }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`grid gap-6 ${cardsToShow === 1 ? 'grid-cols-1' : 
                           cardsToShow === 2 ? 'grid-cols-2' : 
                           cardsToShow === 3 ? 'grid-cols-3' : 
                           cardsToShow === 4 ? 'grid-cols-4' : 'grid-cols-5'}`}
              >
                {visibleTestimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.id}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col h-full"
                  >
                    {/* Doctor Image */}
                    <div className="relative h-48 w-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                        priority={currentIndex === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center mb-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <h3 className="text-xl font-bold text-white">{testimonial.author}</h3>
                        <p className="text-blue-200">{testimonial.specialization}</p>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="p-6 flex-grow flex flex-col">
                      <blockquote className="text-gray-600 italic mb-4 flex-grow">
                        {testimonial.quote}
                      </blockquote>
                      
                      <div className="border-t border-gray-100 pt-4">
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Experience: <strong className="text-gray-700">{testimonial.experience}</strong></span>
                          <span>Hospital: <strong className="text-gray-700">{testimonial.hospital}</strong></span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          {windowWidth > breakpoints.sm && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-6 w-6 text-blue-600" strokeWidth={2} />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentIndex >= totalSlides - 1}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg z-10 transition-all hover:scale-110 disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-6 w-6 text-blue-600" strokeWidth={2} />
              </button>
            </>
          )}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex items-center space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-3'} h-3`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}