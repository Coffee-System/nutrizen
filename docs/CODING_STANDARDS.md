# NutriZen Coding Standards 🧮

To keep our code clean, readable, and easy to maintain, we follow a set of standards and conventions. We ask that all code contributions adhere to these guidelines.

## Tooling (The Source of Truth)

We use **ESLint** for static code analysis and **Prettier** for automatic formatting. The configurations for these two projects are the source of truth for our code style.

**We strongly recommend that you configure your code editor to use the project's Prettier and ESLint settings on file save.**

## Naming Conventions

- **Components (React):** Use `PascalCase`. Ex: `UserProfileCard.tsx`.
- **Files and Folders:** Use `kebab-case` for file and folder names, except for components. Ex: `user-profile`.
- **Variables and Functions:** Use `camelCase`. Ex: `const userProfile = getUserProfile();`.
- **Types and Interfaces (TypeScript):** Use `PascalCase`. Ex: `interface UserProfile { ... }`.

## Commit Style

We follow the [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) standard. This helps us maintain a readable commit history and automate the generation of changelogs.

**Format:** `<type>(<optional scope>): <description>`

- **Examples:**
  - `feat: add Google login`
  - `fix(auth): correct redirect bug after logout`
  - `docs: update local setup guide`

## General Code Guidelines

- **TypeScript:**
  - Use explicit types for component props, parameters, and function returns.
  - Prefer interfaces (`interface`) to define the shape of objects and types (`type`) for unions and more complex types.
- **React:**
  - Prefer functional components with Hooks.
  - Keep components small and focused on a single responsibility.
