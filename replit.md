# Project Overview

This is a skill assessment and job opportunity platform being migrated to a modern Next.js TypeScript application with Tailwind CSS and shadcn components.

## Architecture
- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Backend**: Express.js server (API routes)
- **Database**: PostgreSQL with Drizzle ORM
- **Component Library**: shadcn/ui with Radix UI primitives
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with custom design tokens

## Recent Changes
- **Next.js Migration in Progress**: Created Next.js 14 app structure with TypeScript
- **Component Architecture**: Implemented reusable component system with:
  - Feature-based components (skill-wallet, assessments, jobs)
  - Reusable UI components (Button, Card, Avatar, Badge, etc.)
  - Layout components (Sidebar, Navigation, HeaderActions)
  - Custom hooks for state management (useSidebar, useToast)
- **Responsive Design**: Collapsible sidebar with smooth animations
- **TypeScript Integration**: Full type safety with proper interfaces and types
- **shadcn Components**: Complete UI component library implementation

## User Preferences
- Prefers modern Next.js TypeScript project structure
- Wants good practices: hooks, sub-components, reusable components
- Prefers collapsible sidebar on the right side
- Wants shadcn components where necessary

## Component Structure
```
src/
├── app/                    # Next.js app router
├── components/
│   ├── ui/                # shadcn UI components
│   ├── layout/            # Layout components
│   ├── features/          # Feature-specific components
│   └── pages/             # Page components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── providers/             # Context providers
```

## Current Status
- **Next.js Structure**: Complete app structure created
- **Component Library**: All major shadcn components implemented
- **Feature Components**: Dashboard, skill wallet, jobs, and assessments components created
- **TypeScript**: Full type safety with interfaces and proper typing
- **Pending**: Package.json script updates for Next.js workflow