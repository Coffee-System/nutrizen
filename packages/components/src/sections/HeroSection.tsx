'use client';

import React from 'react';
import { Button, Logo } from '@nutrizen/ui';
import { CONTENT, BRAND } from '@nutrizen/constants';

export function HeroSection() {
  const handleDownload = () => {
    // Por enquanto, rola para a seção de comunidade
    const communitySection = document.getElementById('community');
    communitySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-40 max-lg:pt-16 max-lg:pb-36 max-md:pt-12 max-md:pb-32">
      <div className="container">
        <div className="relative max-w-512 max-lg:max-w-388">
          <img
            src="/logo-icon.png"
            alt="NutriZen Icon"
            className="h-20 w-25 object-contain"
          />
          <h1 className="mb-6 text-6xl font-bold text-p4 uppercase max-lg:mb-7 max-lg:text-5xl max-md:mb-4 max-md:text-4xl leading-tight">
            {CONTENT.HERO.TITLE}
          </h1>
          <p className="max-w-440 mb-14 text-lg leading-relaxed max-md:mb-10 text-p5">
            {CONTENT.HERO.SUBTITLE}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleDownload}
              leftIcon={<span>📱</span>}
            >
              {CONTENT.HERO.CTA}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                window.open(
                  'https://github.com/Coffee-System/nutrizen',
                  '_blank'
                )
              }
              leftIcon={<span>🚀</span>}
            >
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Animated background gradient */}
        <div className="absolute -top-32 left-[calc(50%-340px)] w-1230 pointer-events-none max-lg:left-[calc(50%-280px)] max-lg:w-[1160px] max-md:bottom-[-590px] max-md:left-[calc(50%-390px)] max-md:top-auto">
          <div className="w-full h-96 bg-gradient-to-br from-p1/20 to-p2/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-p3/10 to-p1/10 rounded-full blur-2xl animate-bounce max-md:hidden"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-p2/10 to-p3/10 rounded-full blur-xl animate-pulse max-md:hidden"></div>
      </div>
    </section>
  );
}
