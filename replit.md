# VIP Photoshoots - Luxury Photography Studio

## Overview

VIP Photoshoots is a luxury photography studio web application built as a full-stack solution showcasing premium photography services. The application features a modern, dark-themed design with WebGL animations and serves as a marketing platform for boudoir, maternity, family, and bestie photography sessions. Built with React and Express, it demonstrates a sophisticated user interface with interactive galleries, studio location information, and a professional service presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing, supporting Home, About, Gallery, and Locations pages
- **UI Framework**: Shadcn/ui components built on Radix UI primitives for accessible, customizable interface elements
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Animations**: WebGL-based hero animations using Three.js for immersive visual experiences
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework for RESTful API endpoints
- **Language**: TypeScript with ES modules for modern JavaScript features and type safety
- **Storage Interface**: Abstracted storage pattern with in-memory implementation for user management
- **Development Setup**: Development server with hot module replacement and error overlay
- **Middleware**: Request logging, JSON parsing, and static file serving capabilities

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM for type-safe database operations
- **Connection**: Neon Database serverless PostgreSQL for scalable cloud database hosting
- **Schema Management**: Drizzle migrations with shared schema definitions between client and server
- **Validation**: Zod schemas integrated with Drizzle for runtime type validation
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed session management

### Authentication and Authorization
- **User Management**: Basic user model with username/password authentication structure
- **Session Handling**: Express sessions with PostgreSQL storage backend
- **Security**: Structured for credential-based authentication with secure session management

## External Dependencies

### Database and ORM
- **Neon Database**: Serverless PostgreSQL database hosting with connection pooling
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect support
- **Drizzle Kit**: Database migration and schema management utilities

### UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI components including dialogs, dropdowns, navigation menus, and form controls
- **Tailwind CSS**: Utility-first CSS framework with custom design system integration
- **Shadcn/ui**: Pre-built component library combining Radix UI with Tailwind CSS styling
- **Class Variance Authority**: Type-safe variant API for component styling patterns

### Frontend Functionality
- **TanStack Query**: Powerful data fetching and caching library for React applications
- **React Hook Form**: Performant forms library with validation support
- **Wouter**: Minimalist routing library optimized for modern React applications
- **Three.js**: WebGL library for 3D graphics and particle animations
- **Date-fns**: Modern date utility library for formatting and manipulation

### Development Tools
- **Vite**: Next-generation frontend build tool with fast hot module replacement
- **Replit Integration**: Development environment plugins for runtime error handling and cartographer integration
- **ESBuild**: Fast JavaScript bundler for production server builds
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins

### Form and Validation
- **Hookform Resolvers**: Integration adapters for various validation libraries
- **Embla Carousel**: Touch-friendly carousel component for image galleries
- **CMDK**: Command palette interface for enhanced user interactions