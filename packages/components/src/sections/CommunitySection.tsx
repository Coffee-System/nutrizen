'use client';

import React from 'react';
import { Button, Card } from '@nutrizen/ui';
import { CONTENT } from '@nutrizen/constants';

export function CommunitySection() {
  const handleExternalLink = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="community" className="py-32 max-lg:py-24 max-md:py-16">
      <div className="container">
        <div className="text-center mb-20">
          <div className="caption text-center mb-5">Join Us</div>
          <h2 className="text-4xl font-bold text-p4 mb-7 max-md:text-3xl">
            {CONTENT.COMMUNITY.TITLE}
          </h2>
          <p className="text-lg text-p5 max-w-2xl mx-auto">
            {CONTENT.COMMUNITY.SUBTITLE}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {CONTENT.COMMUNITY.OPTIONS.map((option) => (
            <Card
              key={option.id}
              variant="elevated"
              className="p-8 text-center hover:scale-105 transition-transform duration-300 group"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-s1 text-2xl">{option.icon}</span>
              </div>
              <h3 className="text-2xl font-bold text-p4 mb-4">
                {option.title}
              </h3>
              <p className="text-p5 mb-6 leading-relaxed">
                {option.description}
              </p>
              <Button
                variant={option.variant}
                size="lg"
                onClick={() => handleExternalLink(option.href)}
                className="w-full"
              >
                {option.cta}
              </Button>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Card variant="elevated" className="inline-block p-12 max-w-2xl">
            <h3 className="text-3xl font-bold text-p4 mb-6">
              {CONTENT.COMMUNITY.CTA.title}
            </h3>
            <p className="text-lg text-p5 mb-8">
              {CONTENT.COMMUNITY.CTA.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {CONTENT.COMMUNITY.CTA.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant}
                  size="lg"
                  onClick={
                    'href' in button && button.href
                      ? () => handleExternalLink(button.href)
                      : undefined
                  }
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
