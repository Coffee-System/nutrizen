# Guia de Desenvolvimento Frontend do NutriZen 💻

Este guia contém exemplos e padrões para o desenvolvimento de interfaces e componentes no NutriZen. O objetivo é manter nosso código consistente, legível e de alta qualidade.

## Estrutura de Pastas

* **Aplicações:** Ficam em `/apps`. A nossa aplicação web principal está em `/apps/web`.
* **Componentes de UI Compartilhados:** Componentes reutilizáveis (Botões, Inputs, Cards) devem ser criados em `/packages/ui`.

## Padrão de Componente de UI

Componentes de UI devem ser genéricos, bem tipados com TypeScript e estilizados com Tailwind CSS.

**Exemplo: `/packages/ui/src/Button.tsx`**
```tsx
// /packages/ui/src/Button.tsx

import React from 'react';

// 1. As props são tipadas com TypeScript para garantir segurança e autocompletar.
// Usamos `extends` para herdar todos os atributos de um botão HTML padrão.
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary'; // Variantes de estilo
}

// 2. O componente é exportado como uma função nomeada.
export function Button({ children, variant = 'primary', ...props }: ButtonProps): JSX.Element {
  // 3. Classes de estilo base são definidas para manter a consistência.
  const baseClasses = 'px-4 py-2 font-bold rounded-lg shadow-md transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50';

  // 4. Classes específicas de variantes são gerenciadas com um objeto.
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  };

  // 5. As classes são combinadas e aplicadas ao elemento.
  return (
    <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
      {children}
    </button>
  );
}
```

## Padrão de Página

As páginas são Server Components por padrão no Next.js App Router. Elas devem ser usadas para buscar dados e compor a UI com os componentes de `/packages/ui`.

**Exemplo: `/apps/web/app/page.tsx`**
```tsx
// /apps/web/app/page.tsx

// 1. Importe componentes compartilhados do nosso pacote de UI.
import { Button } from '@nutrizen/ui'; 

// 2. A página é um Server Component assíncrono por padrão.
export default function HomePage() {
  // A busca de dados (data fetching) seria feita aqui em páginas mais complexas.

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Bem-vindo ao NutriZen 🌱
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sua jornada de saúde, construída pela comunidade.
        </p>
      </div>

      <div className="mt-8 flex gap-4">
        {/* 3. Use os componentes com suas variantes e props. */}
        {/* Adicione `use client` no topo do arquivo se precisar de interatividade (onClick, useState, etc) */}
        <Button variant="primary">
          Junte-se à Comunidade
        </Button>
        <Button variant="secondary">
          Ver no GitHub
        </Button>
      </div>
    </main>
  );
}
```
