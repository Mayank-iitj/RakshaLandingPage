'use client';

import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';
import { Users, UserPlus, ShieldCheck, HeartPulse } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Create Your Circle',
    description: 'Start by creating your private family circle on Raksha. This is your safe space where only trusted members reside.',
    icon: Users,
    color: 'bg-raksha-light text-raksha-primary',
    border: 'border-raksha-primary/30'
  },
  {
    step: 2,
    title: 'Add Guardians',
    description: 'Invite parents, siblings, or close friends to be your trusted Guardians. They form your immediate safety network.',
    icon: UserPlus,
    color: 'bg-raksha-warning-light text-raksha-warning',
    border: 'border-raksha-warning/30'
  },
  {
    step: 3,
    title: 'Enable Protection',
    description: 'Turn on Live Journey or SOS features when you step out. Guardians are instantly notified of your location and status.',
    icon: ShieldCheck,
    color: 'bg-raksha-alert-light text-raksha-alert',
    border: 'border-raksha-alert/30'
  },
  {
    step: 4,
    title: 'Stay Connected',
    description: 'Use Ghar Se check-ins, mood updates, and voice notes to keep everyone in the loop effortlessly without intrusive calls.',
    icon: HeartPulse,
    color: 'bg-raksha-teal/10 text-raksha-teal',
    border: 'border-raksha-teal/30'
  }
];

export default function HowItWorks() {
  return (
    <section className="bg-raksha-surface relative z-10" id="how-it-works">
      <div className="container mx-auto px-8 pt-32 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raksha-text-high mb-6 tracking-tight">
          How Raksha Works
        </h2>
        <p className="text-lg md:text-xl text-raksha-text-mid max-w-2xl mx-auto">
          Four simple steps to absolute peace of mind for you and your loved ones.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
        <ScrollStack
          itemDistance={60}
          itemScale={0.04}
          itemStackDistance={40}
          stackPosition="bottom"
          baseScale={1}
          useWindowScroll={true}
          onStackComplete={() => {}}
        >
          {steps.map((step, index) => (
            <ScrollStackItem key={index} itemClassName={`bg-raksha-background border ${step.border}`}>
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 h-full">
                <div className={`w-28 h-28 md:w-36 md:h-36 shrink-0 rounded-[2.5rem] flex items-center justify-center ${step.color} shadow-inner`}>
                  <step.icon size={56} strokeWidth={1.5} />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="text-sm font-bold tracking-widest uppercase text-raksha-text-low mb-2">Step {step.step}</div>
                  <h3 className="text-3xl md:text-4xl font-bold text-raksha-text-high mb-4">{step.title}</h3>
                  <p className="text-lg text-raksha-text-mid leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
