import Hero from "@/components/sections/Hero";
import WhyRaksha from "@/components/sections/WhyRaksha";
import EmotionalStory from "@/components/sections/EmotionalStory";
import Testimonials from "@/components/sections/Testimonials";
import Suraksha from "@/components/sections/Suraksha";
import HowItWorks from "@/components/sections/HowItWorks";
import Vision from "@/components/sections/Vision";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <Hero />
      <WhyRaksha />
      <EmotionalStory />
      <Suraksha />
      <Testimonials />
      <HowItWorks />
      <Vision />
    </main>
  );
}
