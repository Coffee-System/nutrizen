// Design tokens centralizados do NutriZen
// Estes tokens podem evoluir para JSON consumível por pipelines de design.

export const colors = {
  p1: '#2EF2FF',
  p2: '#3C52D9',
  p3: '#C8EA80',
  p4: '#EAEDFF',
  p5: '#C4CBF5',
  s1: '#080D27',
  s2: '#0C1838',
  s3: '#334679',
  s4: '#1959AD',
  s5: '#263466',
  black: '#000000',
  black100: '#05091D',
} as const;

export const radii = {
  none: '0',
  sm: '4px',
  md: '8px',
  lg: '14px',
  xl: '20px',
  pill: '40px',
  full: '9999px',
} as const;

export const shadows = {
  300: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  400: '0px 8px 16px rgba(17, 17, 26, 0.1), 0px 16px 24px rgba(17, 17, 26, 0.1), 0px 24px 56px rgba(17, 17, 26, 0.1)',
  500: '0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)',
} as const;

export const spacing = {
  22: '88px',
  100: '100px',
  330: '330px',
  388: '388px',
  400: '400px',
  440: '440px',
  512: '512px',
  640: '640px',
  960: '960px',
  1230: '1230px',
} as const;

export const tokens = { colors, radii, shadows, spacing };

// Tailwind preset programático
export const tailwindPreset = {
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      boxShadow: { ...shadows },
      spacing: { ...spacing },
      borderRadius: {
        14: radii.lg,
        20: radii.xl,
        40: radii.pill,
      },
    },
  },
};
