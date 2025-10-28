# NutriZen Backend Development Guide 🧩

This guide contains examples and standards for API development in NutriZen. We use the Next.js App Router to create our endpoints.

## API Structure

API routes are located within `/apps/web/app/api`. Each route is a folder containing a `route.ts` file.

- **Example:** The `GET /api/hello` route is implemented by the file `/apps/web/app/api/hello/route.ts`.

## Public API Route Standard

A public route can be accessed by any client without authentication.

**Example: `/apps/web/app/api/hello/route.ts`**

```ts
// /apps/web/app/api/hello/route.ts

import { NextResponse } from 'next/server';

// 1. Export an async function named after the HTTP method (GET, POST, etc.).
export async function GET(request: Request) {
  // 2. The endpoint logic goes here.
  const data = {
    message: 'Hello from the NutriZen backend!',
    timestamp: new Date().toISOString(),
  };

  // 3. Use NextResponse.json() to return a JSON response with the correct status code.
  return NextResponse.json(data);
}
```

## Protected API Route Standard

A protected route requires the user to be authenticated. It must verify the user's session before executing its logic.

**Example: `/apps/web/app/api/profile/route.ts`**

```ts
// /apps/web/app/api/profile/route.ts

import { NextResponse } from 'next/server';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  // 1. Create a Supabase client specific to Route Handlers.
  const supabase = createRouteHandlerClient({ cookies });

  try {
    // 2. Attempt to get the user's session from the request cookies.
    const {
      data: { session },
    } = await supabase.auth.getSession();

    // 3. If there is no session, return a 401 Unauthorized error.
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 4. If a session exists, execute the protected logic.
    // Example: fetch the user's profile data from the database.
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
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
```
