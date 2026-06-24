'use client';

import LogoLoop from '../ui/LogoLoop';

const testimonials = [
  {
    quote: "Raksha gave me the peace of mind to let my daughter study in another city. The live journey updates are a blessing.",
    author: "Sunita M.",
    role: "Parent"
  },
  {
    quote: "As a working professional who often travels late, the 112 Auto Calling feature makes me feel so much safer.",
    author: "Priya K.",
    role: "Working Professional"
  },
  {
    quote: "I use the Ghar Se check-in every morning. My family knows I reached college safely without me having to call them.",
    author: "Ananya R.",
    role: "Student"
  },
  {
    quote: "The community verified safe zones actually help me plan my evening routes better. It's built by women, for women.",
    author: "Meera D.",
    role: "Software Engineer"
  },
  {
    quote: "Nothing compares to the SOS features here. It's not just an app, it's a lifeline when you need it most.",
    author: "Kavita S.",
    role: "Doctor"
  }
];

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <div className="w-[350px] md:w-[450px] min-h-[250px] bg-raksha-surface/80 backdrop-blur-md border border-raksha-inset p-8 rounded-[2.5rem] shadow-xl flex flex-col gap-4 transform transition-all hover:scale-[1.02] hover:shadow-2xl hover:border-raksha-primary/30 group">
    <div className="text-5xl text-raksha-primary opacity-20 font-serif leading-none group-hover:opacity-40 transition-opacity">"</div>
    <p className="text-raksha-text-high text-lg font-medium leading-relaxed -mt-6 flex-1">
      {quote}
    </p>
    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-raksha-inset/50">
      <div className="w-12 h-12 rounded-full bg-raksha-primary/10 flex items-center justify-center text-raksha-primary font-bold text-lg">
        {author[0]}
      </div>
      <div>
        <h4 className="font-semibold text-raksha-text-high">{author}</h4>
        <p className="text-sm text-raksha-text-mid">{role}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const logoItems = testimonials.map((t, i) => ({
    node: <TestimonialCard key={i} {...t} />,
    title: t.author
  }));

  return (
    <section className="py-32 bg-raksha-background overflow-hidden relative" id="testimonials">
      <div className="container mx-auto px-8 mb-20 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-raksha-text-high mb-6 tracking-tight">
          Trusted by women across India
        </h2>
        <p className="text-lg md:text-xl text-raksha-text-mid max-w-2xl mx-auto">
          Hear from students, working professionals, and parents who use Raksha to stay connected and safe every single day.
        </p>
      </div>

      <div className="relative w-full z-10">
        <LogoLoop
          logos={logoItems}
          speed={60}
          direction="left"
          gap={32}
          pauseOnHover={true}
          hoverSpeed={0}
          fadeOut={true}
          fadeOutColor="var(--color-raksha-background)"
          ariaLabel="User Testimonials Marquee 1"
        />
      </div>
      
      <div className="relative w-full mt-8 z-10">
        <LogoLoop
          logos={logoItems.slice().reverse()}
          speed={45}
          direction="right"
          gap={32}
          pauseOnHover={true}
          hoverSpeed={0}
          fadeOut={true}
          fadeOutColor="var(--color-raksha-background)"
          ariaLabel="User Testimonials Marquee 2"
        />
      </div>

      {/* Decorative background blurs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-raksha-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-raksha-teal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
