// Navigation Types
export interface NavigationLink {
  href: string;
  label: string;
}

export interface ExternalLinks {
  DISCORD: string;
  GITHUB: string;
}

// Content Types
export interface HeroContent {
  TITLE: string;
  SUBTITLE: string;
  CTA: string;
}

export interface Pillar {
  id: string;
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

export interface PhilosophyContent {
  TITLE: string;
  SUBTITLE: string;
  PILLARS: Pillar[];
}

export interface Feature {
  id: string;
  caption: string;
  title: string;
  description: string;
  cta: string;
  icon: string;
  gradient: string;
}

export interface FeatureHighlight {
  id: string;
  icon: string;
  title: string;
}

export interface FeaturesContent {
  TITLE: string;
  MAIN_FEATURES: Feature[];
  HIGHLIGHTS: FeatureHighlight[];
}

export interface CommunityOption {
  id: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
  variant: 'primary' | 'secondary';
  href: string;
  gradient: string;
}

export interface CommunityButton {
  text: string;
  variant: 'primary' | 'secondary';
  href?: string;
}

export interface CommunityCTA {
  title: string;
  description: string;
  buttons: CommunityButton[];
}

export interface CommunityContent {
  TITLE: string;
  SUBTITLE: string;
  OPTIONS: CommunityOption[];
  CTA: CommunityCTA;
}

export interface FooterLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  icon: string;
  label: string;
}

export interface FooterContent {
  COPYRIGHT: string;
  LINKS: FooterLink[];
  SOCIAL: SocialLink[];
}

// Component Props Types
export interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Button variant from UI package
export type ButtonVariant = 'primary' | 'secondary';
