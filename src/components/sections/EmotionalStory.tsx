'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function EmotionalStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const textOpacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const textOpacity2 = useTransform(scrollYProgress, [0.3, 0.4, 0.6], [0, 1, 0]);
  const textOpacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.9], [0, 1, 1]);

  const phoneImageY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} id="how-it-works" className="h-[300vh] relative bg-raksha-surface z-10">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
          {/* Left: Sticky Narrative */}
          <div className="relative h-[200px] flex items-center">
            <motion.div style={{ opacity: textOpacity1, filter: useTransform(textOpacity1, v => `blur(${(1-v)*10}px)`) }} className="absolute inset-0 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-raksha-text-high tracking-tight">
                A daughter in Bengaluru. <br/>
                A mother in Ahmedabad.
              </h2>
            </motion.div>
            <motion.div style={{ opacity: textOpacity2, filter: useTransform(textOpacity2, v => `blur(${(1-v)*10}px)`) }} className="absolute inset-0 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-raksha-text-high tracking-tight">
                One worries.<br/>
                One pretends not to.
              </h2>
            </motion.div>
            <motion.div style={{ opacity: textOpacity3, filter: useTransform(textOpacity3, v => `blur(${(1-v)*10}px)`) }} className="absolute inset-0 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-raksha-primary tracking-tight">
                Raksha exists for both.
              </h2>
            </motion.div>
          </div>

          {/* Right: Phone Visuals */}
          <div className="relative h-[600px] w-full flex justify-center items-center overflow-hidden rounded-[2.5rem] bg-raksha-background border border-raksha-inset shadow-2xl">
            {/* Background cinematic glow */}
            <motion.div style={{ opacity: textOpacity3 }} className="absolute inset-0 bg-raksha-primary/5 transition-opacity duration-500" />

            <motion.div style={{ y: phoneImageY }} className="absolute flex flex-col gap-12 w-[280px]">
               {/* Walk Card */}
               <div className="bg-raksha-surface p-6 rounded-2xl shadow-xl border border-raksha-inset transform rotate-[-2deg]">
                 <div className="w-12 h-12 bg-raksha-slate/10 rounded-full mb-4 flex items-center justify-center text-xl">🌙</div>
                 <h3 className="font-semibold mb-1 text-raksha-text-high">Night Walk Home</h3>
                 <p className="text-sm text-raksha-text-mid">Location shared automatically.</p>
               </div>
               
               {/* Missed Call Card */}
               <div className="bg-raksha-surface p-6 rounded-2xl shadow-xl border border-raksha-alert/20 relative overflow-hidden transform rotate-[3deg]">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-raksha-alert/10 rounded-bl-full" />
                 <div className="w-12 h-12 bg-raksha-alert/10 rounded-full mb-4 flex items-center justify-center text-raksha-alert font-bold">!</div>
                 <h3 className="font-semibold mb-1 text-raksha-text-high">3 Missed Calls</h3>
                 <p className="text-sm text-raksha-text-mid">Auto-SMS sent to Mom.</p>
               </div>

               {/* Safe Check-in Card */}
               <div className="bg-raksha-surface p-6 rounded-2xl shadow-xl border-2 border-raksha-primary/30 transform rotate-[-1deg]">
                 <div className="w-12 h-12 bg-raksha-primary/20 rounded-full mb-4 flex items-center justify-center text-raksha-primary font-bold">✓</div>
                 <h3 className="font-semibold mb-1 text-raksha-text-high">Reached Home</h3>
                 <p className="text-sm text-raksha-text-mid">Check-in received.</p>
               </div>
            </motion.div>

            {/* Gradient Mask for fade out at edges */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-raksha-background via-transparent to-raksha-background" />
          </div>
        </div>
      </div>
    </section>
  );
}
