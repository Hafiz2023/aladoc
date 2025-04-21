"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-gray-100 flex flex-col items-center justify-center p-4 sm:p-8"
    >
      {/* Main Content Card */}
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-4xl border border-gray-200"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Column - Text Content (50%) */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 bg-[#00a79d] p-8 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Download the Mujhw App
              </h1>
              <p className="text-white/90 text-lg">
                Download Mujhw app today and avail exclusive benefits
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    className="bg-[#4285F4] hover:bg-[#3367D6] h-14 px-6 w-full sm:w-auto"
                    asChild
                  >
                    <a
                      href="https://play.google.com/store"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <div className="text-left">
                        <div className="text-xs font-normal tracking-wide">
                          GET IT ON
                        </div>
                        <div className="text-xl font-bold">Google Play</div>
                      </div>
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="h-14 px-6 border-white/30 bg-white/10 hover:bg-white/20 w-full sm:w-auto bg-black"
                    asChild
                  >
                    <a
                      href="https://www.apple.com/app-store/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <div className="text-left ">
                        <div className="text-xs font-normal tracking-wide text-white">
                          Download on the
                        </div>
                        <div className="text-xl font-bold text-white ">
                          App Store
                        </div>
                      </div>
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Image (50%) with Hover Effects */}
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 relative overflow-hidden"
          >
            <motion.div
              className="w-full h-full min-h-[300px] lg:min-h-[400px]"
              variants={imageVariants}
              whileHover="hover"
            >
              <Image
                src="/Partnerships/download-app-mob_compressed.webp"
                alt="Mujhw App Preview"
                fill
                priority
                quality={100}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Note */}
        {/* <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="p-4 text-sm text-gray-500 text-center bg-gray-50 border-t border-gray-200"
        >
          Available on iOS and Android platforms
        </motion.p> */}
      </motion.div>
    </div>
  );
}
