'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from '@/lib/i18n';

export const SwissGrid = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslations();

  return (
    // Outer Wrapper with elegant mesh gradient background
    <div
      className="h-screen w-full flex justify-center items-start py-12 px-4 md:px-8 overflow-hidden bg-background"
      style={{
        background: 'radial-gradient(at 0% 0%, rgba(234, 179, 8, 0.32) 0px, transparent 55%), radial-gradient(at 100% 100%, rgba(99, 102, 241, 0.16) 0px, transparent 50%), #ffffff',
      }}
    >
      {/* The Main Container: Soft borders, soft shadow, rounded corners */}
      <div className="w-full max-w-[86rem] max-h-full rounded-2xl border border-border bg-card/80 glass shadow-pb-lg flex flex-col overflow-hidden relative">

        {/* Futuristic Scanning Light Beam along the top border */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-scan z-40 pointer-events-none opacity-80" />

        {/* Top-Right Yellow Glow Orb (Pronounced) */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[32rem] h-[32rem] bg-primary/35 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Bottom-Left Indigo Glow Orb (Creative Brand Accent) */}
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 bg-pb-indigo/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Header Section with soft, premium gradient tint */}
        <div className="border-b border-border p-8 md:p-12 shrink-0 bg-gradient-to-r from-yellow-500/[0.04] to-transparent relative z-30 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <h1 className="font-display text-4xl md:text-6xl text-foreground tracking-tight leading-tight">
              {t('nav.dashboard')}{' '}
              <span className="block mt-3 text-lg md:text-2xl text-yellow-500 font-sans font-semibold uppercase tracking-wider" style={{ textShadow: '0 0 10px rgba(234, 179, 8, 0.15)' }}>
                Resumtize ATS Resume Checker
              </span>
            </h1>
            <p className="mt-4 text-sm font-sans text-primary uppercase tracking-wide max-w-md font-semibold">
              {t('dashboard.selectModule')}
            </p>
          </div>
          <div className="shrink-0 flex items-center">
            <Image
              src="/pb-logo-dark.svg"
              alt="Resumtize Logo"
              width={180}
              height={56}
              className="h-10 md:h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(250,204,21,0.15)]"
              style={{ width: 'auto', height: 'auto' }}
              priority
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="@container flex-1 overflow-y-auto overflow-x-hidden relative z-10">
          <div className="p-[1.5px]">
            <div className="grid grid-cols-1 @2xl:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-5 bg-border/50 gap-[1px] border-b border-border">
              {children}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-surface/50 glass flex justify-between items-center font-sans text-xs text-muted-foreground border-t border-border shrink-0 relative z-30">
          <a
            href="https://github.com/srbhr/Resume-Matcher"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group/footer transition-all duration-300 hover:scale-[1.02]"
          >
            <Image 
              src="/logo.svg" 
              alt="Resumtize Logo" 
              width={24} 
              height={24} 
              className="w-6 h-6 transition-transform duration-300 group-hover/footer:rotate-12" 
            />
            <span className="uppercase font-semibold tracking-wider text-yellow-500 font-sans transition-colors duration-300 group-hover/footer:text-yellow-600" style={{ textShadow: '0 0 10px rgba(234, 179, 8, 0.2)' }}>
              Resumtize by Mughees
            </span>
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/srbhr/Resume-Matcher"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white border border-primary/50 px-6 py-2 rounded-lg font-medium tracking-wide shadow-pb-sm hover:scale-[1.02] hover:shadow-pb-glow transition-all min-w-[140px] text-center text-xs flex items-center justify-center gap-1.5"
            >
              <span>GitHub Repo</span>
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M14 3h7v7h-2V6.41l-9 9L8.59 14l9-9H14V3zm-9 2h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z" />
              </svg>
            </a>
            <Link
              href="/settings"
              className="bg-secondary/50 text-foreground border border-border px-6 py-2 rounded-lg font-medium tracking-wide shadow-pb-sm hover:scale-[1.02] hover:bg-secondary hover:shadow-pb-glow transition-all min-w-[140px] text-center"
            >
              {t('nav.settings')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
