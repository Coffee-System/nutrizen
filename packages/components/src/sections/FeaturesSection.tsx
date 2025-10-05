<<<<<<< HEAD
import React from 'react';
import { Button, Card, Badge } from '@nutrizen/ui';
import { CONTENT, NAVIGATION } from '@nutrizen/constants';

export function FeaturesSection() {
  return (
    <section className="py-32 max-lg:py-24 max-md:py-16 g7">
      <div className="container">
        <div className="text-center mb-20">
          <div className="caption text-center mb-5">What We Offer</div>
          <h2 className="text-4xl font-bold text-p4 mb-7 max-md:text-3xl">
            {CONTENT.FEATURES.TITLE}
          </h2>
        </div>

        {/* Main Features */}
        {CONTENT.FEATURES.MAIN_FEATURES.map((feature, index) => (
          <div
            key={feature.id}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={index % 2 === 1 ? 'order-2 lg:order-1' : ''}>
              <div className="caption mb-6">{feature.caption}</div>
              <h3 className="text-3xl font-bold text-p4 mb-6">
                {feature.title}
              </h3>
              <p className="text-lg text-p5 mb-8 leading-relaxed">
                {feature.description}
              </p>
              <Button variant="primary" size="lg">
                {feature.cta}
              </Button>
            </div>
            <div
              className={`relative ${index % 2 === 1 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}`}
            >
              <Card
                variant="elevated"
                className="w-full h-96 flex items-center justify-center"
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center`}
                >
                  <span className="text-6xl">{feature.icon}</span>
                </div>
              </Card>
            </div>
          </div>
        ))}

        {/* Feature Highlights */}
        <div className="mt-20 pt-16 border-t border-s3/20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONTENT.FEATURES.HIGHLIGHTS.map((highlight) => (
              <Card
                key={highlight.id}
                variant="bordered"
                className="text-center p-6 hover:border-s4 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-s2 rounded-2xl flex items-center justify-center border-2 border-s3 hover:border-s4 transition-colors">
                  <span className="text-2xl">{highlight.icon}</span>
                </div>
                <h4 className="text-sm font-semibold text-p4 uppercase tracking-wider">
                  {highlight.title}
                </h4>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
=======
export function FeaturesSection() { return null; }
>>>>>>> parent of 842df42 (Add tokens package and improve monorepo tooling)
