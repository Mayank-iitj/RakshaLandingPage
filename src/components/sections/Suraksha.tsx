'use client';

import FlowingMenu from '../ui/FlowingMenu';

const surakshaModules = [
  { link: '#', text: 'Self Defense Basics', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Legal Rights & Recourse', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'De-escalation Tactics', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop' },
  { link: '#', text: 'Emergency First Aid', image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=800&auto=format&fit=crop' }
];

export default function Suraksha() {
  return (
    <section className="bg-raksha-text-high text-white relative z-10" id="suraksha">
      <div className="container mx-auto px-8 pt-32 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-raksha-teal/20 text-raksha-teal text-sm font-bold tracking-widest uppercase mb-8">
          Learning Center
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Master Your Suraksha
        </h2>
        <p className="text-lg md:text-xl text-raksha-inset max-w-2xl mx-auto">
          Empower yourself with daily interactive lessons, progress tracking, and expert coaching. Gain the skills you need to walk with absolute confidence.
        </p>
      </div>

      <div style={{ height: '70vh', position: 'relative' }} className="border-t border-b border-white/10">
        <FlowingMenu 
          items={surakshaModules} 
          bgColor="transparent"
          textColor="rgba(255, 255, 255, 0.5)"
          marqueeBgColor="var(--color-raksha-primary)"
          marqueeTextColor="#ffffff"
          borderColor="rgba(255, 255, 255, 0.1)"
          speed={20}
        />
      </div>
    </section>
  );
}
