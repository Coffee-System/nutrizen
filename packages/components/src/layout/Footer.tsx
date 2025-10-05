'use client';

import React from 'react';
import { CONTENT, BRAND } from '@nutrizen/constants';

export function Footer() {
  const handleExternalLink = (href: string) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="py-10 border-t border-s3/20">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-p5 text-sm">{CONTENT.FOOTER.COPYRIGHT}</span>
          </div>
          
          <div className="flex items-center space-x-8 mb-4 md:mb-0">
            {CONTENT.FOOTER.LINKS.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-p5 hover:text-p1 transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {CONTENT.FOOTER.SOCIAL.map((social) => (
              <button
                key={social.href}
                onClick={() => handleExternalLink(social.href)}
                className="w-10 h-10 bg-s2 border border-s3/30 rounded-full flex items-center justify-center hover:border-s4 transition-colors"
                aria-label={social.label}
              >
                <span className="text-p1">{social.icon}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}