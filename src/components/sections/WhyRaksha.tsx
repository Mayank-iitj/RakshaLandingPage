'use client';

import { motion } from 'framer-motion';
import { Shield, Map, Lock, HeartHandshake } from 'lucide-react';
import PixelCard from '../ui/PixelCard';

export default function WhyRaksha() {
  return (
    <section className="py-32 bg-raksha-background relative z-10" id="why-raksha">
      <div className="container mx-auto px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-raksha-text-high mb-6 tracking-tight">
            Why Raksha?
          </h2>
          <p className="text-lg text-raksha-text-mid max-w-2xl mx-auto">
            We reimagined safety from the ground up, prioritizing privacy, reliability, and intuition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {/* Card 1: Built by Women */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="md:col-span-2 bg-raksha-surface rounded-[2rem] p-8 border border-raksha-inset shadow-lg hover:shadow-raksha-primary/20 hover:border-raksha-primary/50 transition-all flex flex-col overflow-hidden relative group cursor-default"
          >
            <div className="absolute right-[-10%] top-[-10%] w-64 h-64 bg-raksha-light rounded-full blur-[80px] group-hover:bg-raksha-primary/20 transition-colors" />
            <div className="w-14 h-14 bg-raksha-primary/10 rounded-2xl flex items-center justify-center text-raksha-primary mb-auto relative z-10">
              <HeartHandshake size={32} />
            </div>
            <div className="relative z-10 mt-8">
              <h3 className="text-2xl md:text-3xl font-bold text-raksha-text-high mb-2">Built by Women, For Women.</h3>
              <p className="text-raksha-text-mid max-w-md text-lg">Designed with empathy and real-world understanding of the safety challenges women face daily.</p>
            </div>
          </motion.div>

          {/* Card 2: 112 Integration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, rotate: 1 }}
            className="bg-raksha-alert-light rounded-[2rem] p-8 border border-raksha-alert/20 shadow-lg hover:shadow-raksha-alert/20 transition-all flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-default"
          >
            <div className="w-24 h-24 bg-raksha-alert text-white rounded-full flex items-center justify-center font-bold text-4xl shadow-xl shadow-raksha-alert/40 mb-6 group-hover:scale-110 transition-transform">
              112
            </div>
            <h3 className="text-xl font-bold text-raksha-alert mb-2">National Integration</h3>
            <p className="text-sm text-raksha-alert/80 font-medium">Direct connection to emergency services when you need it most.</p>
          </motion.div>

          {/* Card 3: Real-time Journey */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="bg-raksha-teal/10 rounded-[2rem] p-8 border border-raksha-teal/20 shadow-lg hover:shadow-raksha-teal/20 transition-all flex flex-col overflow-hidden relative group cursor-default"
          >
             <div className="w-14 h-14 bg-raksha-teal/20 rounded-2xl flex items-center justify-center text-raksha-teal mb-auto">
              <Map size={32} />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-bold text-raksha-teal mb-2">Real-time Live Journey</h3>
              <p className="text-sm text-raksha-teal/80 font-medium">Share your live route seamlessly with chosen Guardians.</p>
            </div>
          </motion.div>

          {/* Card 4: No Creepy Tracking (PixelCard) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 relative group cursor-default"
          >
            <PixelCard 
              variant="default"
              colors="#67AC5C,#4E8D44,#1A1A1A"
              gap={10}
              speed={40}
              className="w-full h-full bg-raksha-dark rounded-[2rem] border-raksha-primary/20 shadow-lg"
            >
              <div className="absolute inset-0 p-8 flex flex-col overflow-hidden text-white z-20 pointer-events-none">
                <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-raksha-primary/20 to-transparent z-[-1]" />
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-auto relative z-10 backdrop-blur-sm">
                  <Lock size={32} />
                </div>
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">No creepy tracking. Ever.</h3>
                  <p className="text-white/70 max-w-lg text-lg">We believe in protection, not surveillance. You decide who sees your location and when. Your data is encrypted and private.</p>
                </div>
              </div>
            </PixelCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
