'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from '@/lib/i18n';

export default function Hero() {
  const { t } = useTranslations();

  const buttonClass =
    'group relative flex items-center justify-center border border-primary/30 bg-surface px-8 py-3 font-sans text-sm font-semibold tracking-wide text-foreground transition-all duration-300 ease-out hover:bg-primary hover:text-white hover:scale-[1.02] hover:shadow-pb-glow rounded-lg';

  return (
    <section
      className="relative h-screen w-full p-4 md:p-12 lg:p-24 overflow-hidden"
      style={{
        background: 'radial-gradient(at 0% 0%, rgba(234, 179, 8, 0.32) 0px, transparent 55%), radial-gradient(at 100% 100%, rgba(99, 102, 241, 0.16) 0px, transparent 50%), #ffffff',
      }}
    >
      {/* Subtle brand glow effects */}
      <div className="absolute inset-0 z-0 flex items-center justify-between opacity-50 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/35 blur-[120px] -ml-32 -mt-32" />
        <div className="w-[600px] h-[600px] rounded-full bg-pb-indigo/18 blur-[120px] -mr-32 -mb-32" />
      </div>

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center border border-border bg-white/65 glass rounded-2xl shadow-pb-xl px-4 py-16">
        <div className="mb-6 flex justify-center">
          <Image
            src="/logo.svg"
            alt="Resumtize Logo"
            width={64}
            height={64}
            className="w-16 h-16 drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]"
          />
        </div>

        <h1 className="mb-4 text-center font-display text-5xl font-bold leading-tight tracking-tight text-yellow-400 md:text-7xl lg:text-8xl" style={{ textShadow: '0 0 25px rgba(250, 204, 21, 0.4)' }}>
          {t('home.brandLine1')}{t('home.brandLine2')}
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl text-muted-foreground font-sans font-light tracking-normal">
            RESUME OPTIMIZER
          </span>
        </h1>

        <p className="mb-12 text-center font-sans text-lg md:text-xl text-primary font-medium tracking-wide">
          AI-Powered Resume Optimization Engine
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <a
            href="https://github.com/srbhr/Resume-Matcher"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            Built by Mughees
          </a>
          <a
            href="https://github.com/srbhr/Resume-Matcher"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass}
          >
            {t('home.docs')}
          </a>
          <Link
            href="/dashboard"
            className={cn(buttonClass, 'bg-primary text-white border-primary/50 shadow-pb-glow')}
          >
            {t('home.launchApp')}
          </Link>
        </div>
      </div>
    </section>
  );
}

// Inline helper for cn inside the component
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
