# NutriZen Frontend Development Guide 💻

This guide contains examples and standards for developing interfaces and components in NutriZen. The goal is to keep our code consistent, readable, and high-quality.

## Folder Structure

- **Applications:** Are located in `/apps`. Our main web application is in `/apps/web`.
- **Shared UI Components:** Reusable components (Buttons, Inputs, Cards) should be created in `/packages/ui`.

## UI Component Standard

UI components should be generic, well-typed with TypeScript, and styled with Tailwind CSS.

**Example: `/packages/ui/src/Button.tsx`**

```tsx
// /packages/ui/src/Button.tsx

import React from 'react';

// 1. Props are typed with TypeScript to ensure safety and autocomplete.
// We use `extends` to inherit all standard HTML button attributes.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; // Style variants
}

// 2. The component is exported as a named function.
export function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps): JSX.Element {
  // 3. Base style classes are defined to maintain consistency.
  const baseClasses =
    'px-4 py-2 font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50';

  // 4. Specific variant classes are managed with an object.
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary:
      'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  };

  // 5. The classes are combined and applied to the element.
  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
}
```

## Page Standard

Pages are Server Components by default in the Next.js App Router. They should be used to fetch data and compose the UI with components from `/packages/ui`.

**Example: `/apps/web/app/page.tsx`**

```tsx
// /apps/web/app/page.tsx

// 1. Import shared components from our UI package.
import { Button } from '@nutrizen/ui';

// 2. The page is an async Server Component by default.
export default function HomePage() {
  // Data fetching would be done here in more complex pages.

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to NutriZen 🌱
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Your health journey, built by the community.
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        {/* 3. Use the components with their variants and props. */}
        {/* Add `use client` at the top of the file if you need interactivity (onClick, useState, etc.) */}
        <Button variant="primary">Join the Community</Button>
        <Button variant="secondary">View on GitHub</Button>
      </div>
    </main>
  );
}
```
