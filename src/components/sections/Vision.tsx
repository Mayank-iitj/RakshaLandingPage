'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RotatingText from '../ui/RotatingText';

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="min-h-[80vh] bg-raksha-text-high text-white flex items-center justify-center relative overflow-hidden py-32" id="vision">
      {/* Cinematic animated background */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ scale, opacity }} className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-raksha-primary)_0%,transparent_70%)] opacity-20 mix-blend-screen blur-[100px]" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-raksha-primary/50 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-raksha-primary/50 to-transparent" />
      </div>

      <div className="container relative z-10 px-8 mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight flex flex-col items-center justify-center gap-6">
          <span className="opacity-70 text-2xl md:text-4xl tracking-widest uppercase font-medium">We are not building a safety app.</span>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
            <span className="text-white">We Are Building</span>
            <RotatingText
              texts={['Peace Of Mind.', 'Trust.', 'Connection.', 'A Movement.']}
              mainClassName="text-raksha-primary px-2 py-2 overflow-hidden drop-shadow-2xl"
              staggerFrom="first"
              initial={{ y: "100%", filter: 'blur(10px)', opacity: 0 }}
              animate={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
              exit={{ y: "-120%", filter: 'blur(10px)', opacity: 0 }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-2"
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              rotationInterval={3000}
              splitBy="characters"
            />
          </div>
        </h2>
      </div>
    </section>
  );
}
