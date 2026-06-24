'use client';

import { usePathname } from 'next/navigation';
import PillNav from './ui/PillNav';
import { Shield } from 'lucide-react';

const shieldLogo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'/%3E%3C/svg%3E";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Brand Logo - Top Left */}
      <div className="fixed top-8 left-8 z-[100] flex items-center gap-3">
        <div className="w-12 h-12 bg-raksha-surface/80 backdrop-blur-md border border-raksha-inset rounded-2xl flex items-center justify-center text-raksha-primary shadow-xl hover:shadow-raksha-primary/20 transition-all cursor-pointer">
          <Shield size={24} strokeWidth={2.5} />
        </div>
        <span className="text-2xl font-bold tracking-tight text-raksha-text-high hidden md:block drop-shadow-sm cursor-pointer">
          Raksha
        </span>
      </div>

      <PillNav
        logo={shieldLogo}
        logoAlt="Raksha Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Why Raksha', href: '#why-raksha' },
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Testimonials', href: '#testimonials' }
        ]}
        activeHref={pathname}
        className="shadow-2xl shadow-raksha-primary/20 backdrop-blur-md"
        ease="power3.easeOut"
        baseColor="var(--color-raksha-primary)"
        pillColor="var(--color-raksha-surface)"
        hoveredPillTextColor="var(--color-raksha-surface)"
        pillTextColor="var(--color-raksha-text-high)"
        initialLoadAnimation={true}
        onMobileMenuClick={() => {}}
      />
    </>
  );
}
