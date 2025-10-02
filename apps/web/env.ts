import { z } from 'zod';

// Schema de validação para variáveis de ambiente públicas do frontend
const publicSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_API_BASE: z.string().url().optional(),
  NEXT_PUBLIC_ENABLE_EXPERIMENTAL_UI: z
    .enum(['true', 'false'])
    .default('false'),
  NEXT_PUBLIC_ANALYTICS_WRITE_KEY: z.string().optional(),
  NEXT_PUBLIC_SENTRY_DSN: z.string().url().optional(),
});

// Wrapper de parsing seguro
export const ENV = (() => {
  const parsed = publicSchema.safeParse({
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE,
    NEXT_PUBLIC_ENABLE_EXPERIMENTAL_UI:
      process.env.NEXT_PUBLIC_ENABLE_EXPERIMENTAL_UI,
    NEXT_PUBLIC_ANALYTICS_WRITE_KEY:
      process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  });

  if (!parsed.success) {
    console.warn('[env] Variáveis públicas inválidas:', parsed.error.format());
  }
  return parsed.success ? parsed.data : ({} as z.infer<typeof publicSchema>);
})();
