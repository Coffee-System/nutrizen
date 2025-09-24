// Navigation Constants
export const NAVIGATION = {
  LINKS: [
    { href: '#philosophy', label: 'Philosophy' },
    { href: '#features', label: 'Features' },
    { href: '#community', label: 'Community' },
  ],
  EXTERNAL: {
    DISCORD: 'https://discord.gg/fHB8xHYBvX',
    GITHUB: 'https://github.com/Coffee-System/nutrizen',
  },
} as const;

// Brand Constants
export const BRAND = {
  NAME: 'NutriZen',
  TAGLINE: 'The app that will save your diet!',
  COMPANY: 'Coffee System',
  LOGO_TEXT: 'N',
} as const;

// Content Constants
export const CONTENT = {
  HERO: {
    TITLE: 'NutriZen',
    SUBTITLE:
      "A free application with all the necessary features to help you in your process, whether it's weight loss or muscle gain 💪.",
    CTA: 'Download Now',
  },
  PHILOSOPHY: {
    TITLE: 'Built on Strong Values',
    SUBTITLE:
      "NutriZen is more than just an app - it's a commitment to transparency, accessibility, and community-driven innovation.",
    PILLARS: [
      {
        id: 'open-source',
        icon: '🌟',
        title: 'Open Source',
        description:
          'Completely open source, transparent and built by the community',
        gradient: 'from-p1 to-p2',
      },
      {
        id: 'free',
        icon: '💸',
        title: '100% Free',
        description:
          'No hidden costs, no premium features. Always free for everyone',
        gradient: 'from-p3 to-p2',
      },
      {
        id: 'ad-free',
        icon: '🚫',
        title: 'Ad-Free',
        description: 'Focus on your health without distractions. No ads, ever',
        gradient: 'from-p2 to-p1',
      },
      {
        id: 'community',
        icon: '🤝',
        title: 'Community',
        description:
          'Built by users, for users. Your voice shapes our direction',
        gradient: 'from-p1 to-p3',
      },
    ],
  },
  FEATURES: {
    TITLE: 'Everything You Need for Success',
    MAIN_FEATURES: [
      {
        id: 'easy-to-use',
        caption: 'Easy to Use',
        title: 'Perfect for those seeking practicality!',
        description:
          'With constant updates, NutriZen is always evolving to improve the user experience, innovating the way to diet.',
        cta: 'Watch Demo',
        icon: '📱',
        gradient: 'from-p1/10 to-p2/10',
      },
      {
        id: 'open-source-community',
        caption: 'Open Source Community',
        title: 'Come be part of the community',
        description:
          'NutriZen was developed with the collaboration of countless people to offer the best possible experience to users. Come join us and make your contribution.',
        cta: 'View Documentation',
        icon: '🌐',
        gradient: 'from-p3/10 to-p1/10',
      },
    ],
    HIGHLIGHTS: [
      { id: 'ai', icon: '🤖', title: 'AI Integration' },
      { id: 'achievements', icon: '🏆', title: 'Daily Achievements' },
      { id: 'experience', icon: '✨', title: 'Magical Diet Experience' },
      { id: 'tracking', icon: '📊', title: 'Progress Tracking' },
    ],
  },
  COMMUNITY: {
    TITLE: 'Be Part of Something Amazing',
    SUBTITLE:
      'NutriZen is built by passionate developers and health enthusiasts. Join our community and help shape the future of nutrition technology.',
    OPTIONS: [
      {
        id: 'discord',
        icon: '💬',
        title: 'Discord Community',
        description:
          'Connect with other users, get support, share your journey, and stay updated with the latest news and features.',
        cta: 'Join Discord',
        variant: 'primary' as const,
        href: 'https://discord.gg/fHB8xHYBvX',
        gradient: 'from-p1 to-p2',
      },
      {
        id: 'github',
        icon: '🚀',
        title: 'Contribute on GitHub',
        description:
          'Help us build the best nutrition app ever. Contribute code, report issues, suggest features, or improve documentation.',
        cta: 'View on GitHub',
        variant: 'secondary' as const,
        href: 'https://github.com/Coffee-System/nutrizen',
        gradient: 'from-p3 to-p1',
      },
    ],
    CTA: {
      title: 'Ready to Transform Your Diet?',
      description:
        'Join thousands of users who are already improving their health with NutriZen.',
      buttons: [
        { text: 'Download App', variant: 'primary' as const },
        {
          text: 'Join Community',
          variant: 'secondary' as const,
          href: 'https://discord.gg/fHB8xHYBvX',
        },
      ],
    },
  },
  FOOTER: {
    COPYRIGHT: 'Copyright © 2024 Coffee System',
    LINKS: [
      { href: '/privacy', label: 'Privacy Policy' },
      { href: '/terms', label: 'Terms of Service' },
    ],
    SOCIAL: [
      { href: 'https://discord.gg/fHB8xHYBvX', icon: '💬', label: 'Discord' },
      {
        href: 'https://github.com/Coffee-System/nutrizen',
        icon: '🚀',
        label: 'GitHub',
      },
    ],
  },
} as const;

// Export all constants - centralized in index.ts
