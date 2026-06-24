'use client';

import { motion } from 'framer-motion';
import MagneticButton from '../MagneticButton';

export default function Hero() {
  const headlineWords = "Because Safety Should Feel Like Home.".split(" ");

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-raksha-primary blur-[120px] mix-blend-multiply opacity-50 animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-raksha-teal blur-[150px] mix-blend-multiply opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-raksha-light blur-[100px] mix-blend-multiply opacity-60 animate-blob animation-delay-4000" />
      </div>

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] z-0 opacity-50 mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <div className="container relative z-10 px-8 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-raksha-text-high leading-[1.1] mb-6 flex flex-wrap gap-x-4 gap-y-2">
            {headlineWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-raksha-text-mid mb-10 leading-relaxed max-w-xl"
          >
            Raksha combines emergency protection, live safety intelligence, family connection, and community-powered trust into one beautiful experience built for every woman in India.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap items-center gap-6"
          >
            <MagneticButton>
              <button className="bg-raksha-primary text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-raksha-dark transition-all hover:scale-105 shadow-xl shadow-raksha-primary/25">
                Get Early Access
              </button>
            </MagneticButton>
            <MagneticButton>
              <button className="text-raksha-text-high border border-raksha-inset px-8 py-4 rounded-full text-base font-semibold hover:bg-raksha-surface transition-all flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-raksha-primary animate-pulse" />
                Watch Demo
              </button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Column: Stylized Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative perspective-[1000px] w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[600px] bg-raksha-surface rounded-[3rem] border-[8px] border-raksha-elevated shadow-2xl overflow-hidden transform-gpu hover:rotate-y-[-10deg] hover:rotate-x-[5deg] transition-transform duration-700 ease-out">
            {/* Phone Screen Mockup */}
            <div className="absolute inset-0 bg-raksha-background flex flex-col pt-12 px-6">
              <div className="flex justify-between items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-raksha-light flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-raksha-primary opacity-20 animate-ping absolute" />
                  <div className="w-4 h-4 rounded-full bg-raksha-primary" />
                </div>
                <div className="px-4 py-1.5 rounded-full bg-raksha-inset text-xs font-medium text-raksha-text-mid">
                  Live Journey
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-24 bg-raksha-surface rounded-2xl p-4 shadow-sm border border-raksha-inset/50 flex flex-col justify-center">
                  <div className="h-4 w-1/2 bg-raksha-elevated rounded-md mb-2" />
                  <div className="h-3 w-3/4 bg-raksha-light rounded-md" />
                </div>
                <div className="h-24 bg-raksha-surface rounded-2xl p-4 shadow-sm border border-raksha-inset/50 flex flex-col justify-center">
                  <div className="h-4 w-1/3 bg-raksha-teal/20 rounded-md mb-2" />
                  <div className="h-3 w-1/2 bg-raksha-light rounded-md" />
                </div>
              </div>

              {/* SOS Button Area */}
              <div className="mt-auto mb-8 flex justify-center">
                <div className="w-24 h-24 rounded-full bg-raksha-alert/10 flex items-center justify-center animate-pulse">
                  <div className="w-16 h-16 rounded-full bg-raksha-alert flex items-center justify-center shadow-lg shadow-raksha-alert/30 text-white font-bold tracking-widest text-sm">
                    SOS
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-raksha-elevated rounded-b-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
