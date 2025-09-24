# Useful Scripts for CI/CD and Development

## Available scripts in package.json:

### Development
- `npm run dev` - Start development server
- `npm run build` - Build project for production

### Code Quality
- `npm run lint` - Run ESLint 
- `npm run lint:fix` - Run ESLint and fix issues automatically
- `npm run lint:check` - Run ESLint with zero warnings allowed (ideal for CI)
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run check` - Run lint:check + format:check (perfect for CI/CD)

## Recommended CI/CD Setup

### GitHub Actions (.github/workflows/ci.yml):
```yaml
name: CI
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run check  # Run lint + format check
      - run: npm run build  # Verify build works
```

### Pre-commit hooks (using husky):
```bash
npm install --save-dev husky
npx husky install
npx husky add .husky/pre-commit "npm run check"
```

## Configured Quality Rules:

### ESLint
- ✅ Optimized Next.js/React configuration
- ✅ Rules for better code readability
- ✅ Unused variables detection
- ✅ Enforces proper const/let usage
- ✅ Detects forgotten console.log (warning)
- ✅ Prohibits debugger in production

### Prettier
- ✅ Consistent formatting
- ✅ Integrated with ESLint (no conflicts)