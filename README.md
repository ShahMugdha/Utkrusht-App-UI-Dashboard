# Utkrusht - Skill Assessment Platform

A modern skill assessment and job opportunity platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query
- **Database**: PostgreSQL with Drizzle ORM
- **Code Quality**: ESLint, Prettier, Husky git hooks

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # shadcn UI components
│   ├── layout/           # Layout components
│   ├── features/         # Feature-specific components
│   └── pages/            # Page components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── providers/            # Context providers
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## 📝 Code Quality

This project uses several tools to maintain code quality:

- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **Husky**: Git hooks for pre-commit checks
- **lint-staged**: Run linters on staged files
- **Commitlint**: Conventional commit message format

### Git Workflow

All commits must follow [Conventional Commits](https://www.conventionalcommits.org/) format:

```
type(scope): description

feat: add user authentication
fix: resolve sidebar animation bug
docs: update README installation steps
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Skill Wallet**: Interactive skill tracking and certification display
- **Job Matching**: AI-powered job recommendations
- **Assessment System**: Skills evaluation and benchmarking
- **Dark Mode**: Theme switching with next-themes
- **Type Safety**: Full TypeScript coverage

## 🔧 Configuration

### TypeScript

TypeScript configuration is optimized for Next.js with strict mode enabled and proper path mapping for clean imports.

### Tailwind CSS

Custom design system with CSS variables for theming and consistent spacing/typography scales.

### ESLint & Prettier

Configured for TypeScript, React, and Next.js best practices with automatic formatting on save.

## 📦 Deployment

This project is configured for deployment on Replit with automatic builds and optimizations.

## 🤝 Contributing

1. Follow the established code style and conventions
2. Write meaningful commit messages using Conventional Commits
3. Ensure all tests pass and no TypeScript errors
4. Update documentation as needed