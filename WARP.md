# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

VipPhotoStudio is a luxury photography studio website built as a modern full-stack TypeScript application. The project showcases premium photography services (Boudoir, Maternity, Family, Bestie) with sophisticated UI components, 3D WebGL effects, and mobile-optimized performance.

## Architecture

### Tech Stack
- **Frontend**: React 18 + Vite + TypeScript
- **UI Framework**: Tailwind CSS + shadcn/ui components (Radix UI)
- **Routing**: Wouter (lightweight client-side routing)
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **3D Graphics**: Three.js for WebGL hero animations
- **State Management**: TanStack React Query
- **Build System**: Vite + esbuild for production

### Project Structure
```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components (UI + business logic)
│   │   ├── pages/        # Route-level page components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions and configurations
│   │   └── contexts/     # React Context providers
├── server/                # Backend Express.js API
│   ├── index.ts          # Main server entry point
│   ├── routes.ts         # API route definitions
│   ├── storage.ts        # Data layer abstraction
│   └── vite.ts          # Vite development server integration
├── shared/               # Shared TypeScript types and schemas
│   └── schema.ts        # Database schema + Zod validation
└── migrations/          # Database migration files
```

### Key Architectural Patterns

**Mobile-First Performance Optimization**
- Conditional WebGL rendering (desktop only)
- Mobile-optimized hero components (`MobileHero` vs `WebGLHero`)
- Performance hooks (`use-mobile-performance.tsx`, `use-mobile-lcp.tsx`)
- Lazy loading and image optimization strategies

**Component Architecture**
- shadcn/ui based design system with premium styling
- Separation of concerns: presentational vs container components
- Mobile-responsive components with conditional rendering
- Performance-optimized image and video handling

**Data Layer**
- Drizzle ORM with PostgreSQL for production
- In-memory storage (`MemStorage`) for development/testing  
- Shared schema validation using Zod
- Type-safe database operations

**Development vs Production**
- Vite dev server with HMR for development
- Static file serving for production builds
- Environment-specific configurations
- Optimized bundle splitting for mobile performance

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Development server (starts both frontend and backend)
npm run dev

# Production build
npm run build

# Production server
npm start

# Type checking
npm run check

# Database operations
npm run db:push        # Push schema changes to database
```

### Development Workflow
1. **Local Development**: `npm run dev` runs Express server with Vite middleware
2. **Database Setup**: Ensure `DATABASE_URL` environment variable is set
3. **Type Safety**: Run `npm run check` before committing changes
4. **Production Build**: `npm run build` creates optimized client + server bundles

## Key Components & Features

### Performance-Critical Components
- **WebGLHero**: Three.js-powered hero section with video/image slider
- **MobileHero**: Lightweight alternative for mobile devices
- **OptimizedHero**: Performance-focused hero component
- **MobileOptimizedImage**: Custom image component with loading strategies

### Mobile Performance Strategy
The project implements aggressive mobile optimization:
- WebGL effects disabled on mobile (`window.innerWidth <= 768`)
- Reduced motion respect (`prefers-reduced-motion`)
- Optimized bundle splitting in `vite.config.ts`
- Mobile-specific hooks for performance monitoring

### Database Schema
Currently minimal user schema in `shared/schema.ts`:
```typescript
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});
```

### Build Configuration
- **Vite**: Handles frontend bundling with manual chunk splitting
- **esbuild**: Compiles server code for production
- **Tailwind**: Custom theme with luxury design tokens
- **TypeScript**: Strict mode enabled with path aliases (`@/*`, `@shared/*`)

## Environment Setup

### Required Environment Variables
```bash
DATABASE_URL=postgresql://...  # PostgreSQL connection string
NODE_ENV=development|production
PORT=5000                     # Server port (default: 5000)
```

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`  
- `@assets/*` → `./attached_assets/*`

## Notable Implementation Details

### WebGL Integration
- Three.js effects conditionally loaded for desktop users only
- Custom `webgl-utils.ts` for canvas initialization
- Fallback to static images on mobile for performance

### Form Handling & Validation
- React Hook Form integration with Zod schemas
- Premium styling with shadcn/ui components
- Mobile-optimized form interactions

### Routing Strategy
- Client-side routing with Wouter (lighter than React Router)
- Server-side fallback to `index.html` for SPA behavior
- Scroll-to-top on route changes

### Deployment Architecture
- Single-port deployment (API + client on same port)
- Static asset serving in production
- Vercel-ready configuration (`vercel.json`)

## Development Guidelines

### Component Development
- Use shadcn/ui components as base layer
- Implement mobile-first responsive design
- Consider performance impact of animations/effects
- Follow established naming patterns (`PascalCase` for components)

### Performance Considerations
- Always test mobile performance impact
- Use conditional rendering for expensive operations
- Implement proper loading states and error boundaries
- Optimize images and media assets

### Database Changes
- Update `shared/schema.ts` for schema changes
- Run `npm run db:push` to apply changes
- Update TypeScript interfaces accordingly

### Styling Approach
- Tailwind-first with custom design tokens
- Premium/luxury aesthetic maintained throughout
- Dark mode support via CSS custom properties
- Responsive breakpoints: mobile-first approach
