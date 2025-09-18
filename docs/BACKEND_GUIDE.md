# Guia de Desenvolvimento Backend do NutriZen 🧩

Este guia contém exemplos e padrões para o desenvolvimento de APIs no NutriZen. Usamos o App Router do Next.js para criar nossos endpoints.

## Estrutura de API

As rotas de API ficam dentro de `/apps/web/app/api`. Cada rota é uma pasta que contém um arquivo `route.ts`.

* **Exemplo:** A rota `GET /api/hello` é implementada pelo arquivo `/apps/web/app/api/hello/route.ts`.

## Padrão de Rota de API Pública

Uma rota pública pode ser acessada por qualquer cliente sem necessidade de autenticação.

**Exemplo: `/apps/web/app/api/hello/route.ts`**
```ts
// /apps/web/app/api/hello/route.ts

import { NextResponse } from 'next/server';

// 1. Exporte uma função assíncrona nomeada com o método HTTP (GET, POST, etc.).
export async function GET(request: Request) {
  // 2. A lógica do endpoint fica aqui.
  const data = {
    message: 'Olá do backend do NutriZen!',
    timestamp: new Date().toISOString(),
  };

  // 3. Use NextResponse.json() para retornar uma resposta JSON com o status code correto.
  return NextResponse.json(data);
}
```

## Padrão de Rota de API Protegida

Uma rota protegida requer que o usuário esteja autenticado. Ela deve verificar a sessão do usuário antes de executar sua lógica.

**Exemplo: `/apps/web/app/api/profile/route.ts`**
```ts
// /apps/web/app/api/profile/route.ts

import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  // 1. Crie um cliente Supabase específico para Route Handlers.
  const supabase = createRouteHandlerClient({ cookies });

  try {
    // 2. Tente obter a sessão do usuário a partir dos cookies da requisição.
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    // 3. Se não houver sessão, retorne um erro 401 (Não Autorizado).
    if (!session) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }

    // 4. Se houver sessão, execute a lógica protegida.
    // Exemplo: buscar dados do perfil do usuário no banco de dados.
    const { data: userProfile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    if (profileError) {
      throw profileError;
    }

    return NextResponse.json(userProfile);

  } catch (error) {
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}
```
