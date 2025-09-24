'use client';

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { BRAND, NAVIGATION } from '@nutrizen/constants';
import { Button, Logo } from '@nutrizen/ui';

// Header baseado no snippet fornecido pelo usuário, adaptado ao design system existente
// Removemos dependência de "react-scroll" usando IntersectionObserver para o estado ativo.

type ActiveId = string | null;

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<ActiveId>(null);

  // Lista de seções derivada dos links existentes
  const sectionIds = useMemo(
    () => NAVIGATION.LINKS.map((l) => l.href.replace('#', '')),
    []
  );

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Observa seções para ativar link atual
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  const scrollTo = useCallback((idOrHash: string) => {
    const id = idOrHash.startsWith('#') ? idOrHash.substring(1) : idOrHash;
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 100; // compensa altura aproximada do header
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }, []);

  const handleDiscordClick = () => {
    window.open(NAVIGATION.EXTERNAL.DISCORD, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  interface NavLinkProps {
    href: string;
    label: string;
  }
  const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
    const id = href.startsWith('#') ? href.slice(1) : href;
    const isActive = activeId === id;
    return (
      <button
        onClick={() => {
          scrollTo(href);
          setIsOpen(false);
        }}
        className={[
          'relative uppercase font-medium tracking-wide transition-colors duration-500 cursor-pointer max-lg:my-4 max-lg:text-xl',
          isActive ? 'text-p1' : 'text-p4 hover:text-p1',
        ].join(' ')}
      >
        {label}
        <span
          className={[
            'absolute left-1/2 -bottom-2 h-1 w-1 -translate-x-1/2 rounded-full bg-p1 transition-opacity duration-300',
            isActive ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />
      </button>
    );
  };

  return (
    <header
      className={[
        'fixed top-0 left-0 z-50 w-full select-none transition-all duration-300',
        // Barra agora sempre com cor sólida. Mantemos leve ajuste de padding ao rolar.
        hasScrolled ? 'py-2 bg-s1 shadow-[0_4px_18px_-4px_rgba(0,0,0,0.55)]' : 'py-4 bg-s1 shadow-[0_6px_22px_-6px_rgba(0,0,0,0.65)]',
      ].join(' ')}
    >
      <div className="container flex items-center gap-6 max-lg:px-5">
        {/* Logo / Brand sempre visível (desktop + mobile) */}
        <button
          onClick={() => scrollTo(sectionIds[0] || 'top')}
          className="flex items-center gap-3 group shrink-0"
          aria-label="Go to top"
        >
          <Logo
            src="/logo-icon.png"
            alt={BRAND.NAME}
            width={hasScrolled ? 44 : 52}
            height={hasScrolled ? 44 : 52}
            className="transition-all duration-300 drop-shadow"
          />
          <span className="font-bold tracking-wide text-p4 text-xl lg:text-2xl group-hover:text-p1 transition-colors">
            {BRAND.NAME}
          </span>
        </button>

        {/* Área de navegação (desktop e overlay mobile) */}
        <div
          className={[
            'flex-1 lg:static lg:w-auto',
            'max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-screen max-lg:bg-s2 max-lg:overflow-y-auto',
            'max-lg:transition-opacity max-lg:duration-300',
            isOpen
              ? 'max-lg:opacity-100'
              : 'max-lg:opacity-0 max-lg:pointer-events-none',
          ].join(' ')}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-md:p-4">
            <nav className="max-lg:relative max-lg:z-10 max-lg:my-auto">
              <ul className="flex items-center gap-8 max-lg:flex-col max-lg:items-start max-lg:gap-0 max-lg:px-4">
                {NAVIGATION.LINKS.map(link => (
                  <li key={link.href} className="list-none">
                    <NavLink href={link.href} label={link.label} />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Decorativo Mobile (placeholder) */}
            <div className="lg:hidden pointer-events-none absolute top-1/2 left-0 w-[600px] h-[300px] -translate-x-1/3 -translate-y-1/2 rotate-90 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-p1/30 to-p2/30 blur-3xl rounded-full" />
            </div>
          </div>
        </div>

        {/* Ações (Discord) */}
        <div className="hidden lg:flex justify-end">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleDiscordClick}
            leftIcon={<span>💬</span>}
          >
            Discord
          </Button>
        </div>

        {/* Botão Mobile (menu) */}
        <button
          aria-label="Toggle menu"
          className="lg:hidden ml-auto z-10 size-10 border-2 border-s3/60 rounded-full flex justify-center items-center bg-s2 hover:border-s4 transition-colors"
          onClick={() => setIsOpen(o => !o)}
        >
          <span className="text-p4 text-xl select-none">{isOpen ? '✖' : '☰'}</span>
        </button>
      </div>
    </header>
  );
}
