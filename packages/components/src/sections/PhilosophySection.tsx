import React from 'react';
import { Card, Badge } from '@nutrizen/ui';
import { CONTENT } from '@nutrizen/constants';

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 max-lg:py-24 max-md:py-16">
      <div className="container">
        <div className="text-center mb-20">
          <div className="caption text-center mb-5">Our Pillars</div>
          <h2 className="text-4xl font-bold text-p4 mb-7 max-md:text-3xl">
            {CONTENT.PHILOSOPHY.TITLE}
          </h2>
          <p className="text-lg text-p5 max-w-2xl mx-auto">
            {CONTENT.PHILOSOPHY.SUBTITLE}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONTENT.PHILOSOPHY.PILLARS.map((pillar) => (
            <Card
              key={pillar.id}
              variant="elevated"
              className="text-center p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${pillar.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <span className="text-s1 text-2xl">{pillar.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-p4 mb-3">
                {pillar.title}
              </h3>
              <p className="text-p5 leading-relaxed">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
