# NutriZen Local Development Guide 👨‍💻

Hello, contributor! We're thrilled to have you here. This guide will help you set up your development environment and run NutriZen on your local machine.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- **Node.js:** Version 18.x or higher. This includes **npm** (version 7+). [Download here](https://nodejs.org/)
- **Git:** Essential for version control. [Download here](https://git-scm.com/)

## 1. Project Setup

Follow these steps to get the code ready to run.

### a. Fork and Clone

First, [Fork](https://github.com/Coffee-System/nutrizen/fork) the repository to your own GitHub account.

Next, clone **your fork** to your local machine (remember to replace `<YOUR-USERNAME>` with your GitHub username):

```bash
git clone [https://github.com/](https://github.com/)<YOUR-USERNAME>/nutrizen.git
cd nutrizen
```

### b. Install Dependencies

Now, install all project dependencies using `npm`:

```bash
npm install
```

## 2. Environment Variables Setup

For the application to connect correctly to external services (like the database), you need to configure your environment variables.

### a. Configure Supabase

NutriZen uses [Supabase](https://supabase.com/) for its database and authentication. You will need to create a free project for local development.

1.  Create a free account at [Supabase](https://app.supabase.com/).
2.  Create a new project (e.g., "nutrizen-dev").
3.  After the project is created, go to **Project Settings > API**.
4.  There you will find your **Project URL** and your **`anon (public)` API key**.

### b. Create the `.env.local` File

In the root of the web application (`/apps/web`), create a file named `.env.local`. **This file should not be committed to GitHub.**

Copy the contents of the example file (`.env.example`) into your new file and fill it with your Supabase keys:

```env
# File: /apps/web/.env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL="YOUR_SUPABASE_PROJECT_URL_HERE"
NEXT_PUBLIC_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY_HERE"

# Other project environment variables will go here in the future...
```

**Important:** You will also need to create the database tables in your Supabase project. We will provide the SQL script for this soon.

## 3. Running the Application

With everything set up, you are ready to run the development server.

From the root of the monorepo, execute the following command:

```bash
# To run the web application (Next.js)
npm run dev --workspace=web
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the NutriZen application running!

## Found a Problem?

If something didn't work as expected, please [open an Issue](https://github.com/Coffee-System/nutrizen/issues) and tell us what happened. We're here to help!

Thank you for contributing!
