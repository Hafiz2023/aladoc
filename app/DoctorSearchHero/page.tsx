"use client";
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LocateFixed, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const stats = [
  { label: '25K+ doctors', color: 'text-green-400' },
  { label: '100+ Specialties', color: 'text-blue-300' },
  { label: '50+ Cities Covered', color: 'text-pink-300' },

];




function StatsRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stats.length);
    }, 2500); // Rotate every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentStat = stats[index];

  return (
    <motion.div
      key={currentStat.label}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className={`mt-4 bg-amber-900/80 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white`}
    >
      <span className={`${currentStat.color} text-lg`}>✔</span>
      {currentStat.label}
    </motion.div>
  );
}

export default function DoctorSearchHero() {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#6a3162] to-[#141689] text-white rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Find and Book the <br />
            <span className="text-yellow-400">Best Doctors</span> near you
          </h1>

          {/* 🔄 Animated stats */}
          <StatsRotator />

          {/* 🔍 Search form */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input 
                placeholder="Lahore" 
                className="rounded-lg px-4 py-3 w-full bg-white/90 text-gray-800" 
              />
              <Button 
                variant="outline" 
                className="text-blue-800 bg-white hover:bg-gray-100 rounded-lg px-4 py-3 flex items-center gap-2"
              >
                <LocateFixed className="h-4 w-4" /> Detect
              </Button>
            </div>

            <div className="relative flex">
              <Input 
                placeholder="Doctors, Hospital, Conditions" 
                className="rounded-lg px-4 py-3 w-full bg-white/90 text-gray-800 pr-12" 
              />
              <Button 
                className="absolute right-0 top-0 h-full bg-yellow-400 text-black font-semibold px-6 rounded-r-lg hover:bg-yellow-300 transition rounded-l-none"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="w-full lg:w-1/2 flex justify-center relative"
        >
          <div className="relative w-full max-w-md aspect-square">
            <Image
              src="/Saadia-zulfiqar-cheema.webp" // Make sure the image exists in /public
              alt="Professional Doctor"
              fill
              className="object-contain rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
