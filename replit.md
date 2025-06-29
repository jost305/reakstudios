# ReakStudios Website

## Overview

This project is a modern, responsive recording studio website built with React and Node.js. It features a professional dark theme design for "ReakStudios" with parallax hero effects, sliding banners, and enhanced UI sections. The application uses a full-stack architecture with a React frontend and Express.js backend, designed for both Replit development and Vercel deployment with PostgreSQL database integration.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom studio theme (dark design with cyan/blue accents)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for development and building
- **Typography**: Custom font setup with Orbitron and Inter from Google Fonts

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Supabase PostgreSQL (serverless PostgreSQL)
- **Session Management**: Prepared for connect-pg-simple sessions
- **Development**: tsx for TypeScript execution in development

### UI/UX Design
- **Theme**: Professional dark studio theme with cyan primary color
- **Layout**: Single-page application with smooth scrolling sections
- **Components**: Navigation, Hero, Services, Portfolio, About, Testimonials, Contact, Footer
- **Responsive**: Mobile-first design with responsive breakpoints

## Key Components

### Database Schema
- **Users Table**: User authentication with roles (id, username, password, role, createdAt)
- **Contact Submissions Table**: Stores contact form submissions with status tracking (id, name, email, serviceType, preferredDate, projectDetails, status, createdAt)
- **Schema Validation**: Zod schemas for type-safe data validation
- **Migrations**: Database migrations in `./migrations` directory for version control

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `POST /api/admin/login` - Admin authentication
- `POST /api/admin/logout` - Admin logout
- `GET /api/admin/submissions` - Retrieve contact submissions (admin only)
- `PATCH /api/admin/submissions/:id/status` - Update submission status (admin only)
- `DELETE /api/admin/submissions/:id` - Delete submission (admin only)

### Frontend Features
- **Parallax Hero Section**: Sliding background images with smooth scrolling effects and auto-advancing slides
- **Enhanced Services Section**: Interactive cards with gradients, hover effects, and background patterns
- **Portfolio Section**: Featured tracks with audio player simulation and project showcases
- **About Section**: Team member profiles, studio statistics, and enhanced visual design
- **Testimonials**: Client testimonials with star ratings
- **Contact Form**: Service booking form with validation and submission
- **Navigation**: Smooth scrolling navigation with glass effect and mobile responsiveness
- **Admin Dashboard**: Comprehensive admin interface for managing contact submissions
- **Admin Authentication**: Secure login system with session management
- **Status Management**: Track submission progress (pending, in-progress, completed, cancelled)

### Storage System
- **Database**: PostgreSQL with Drizzle ORM for data persistence
- **Interface**: Abstract storage interface for consistent data operations
- **Implementation**: DatabaseStorage class for all CRUD operations

## Data Flow

1. **Client Request**: User interacts with React frontend
2. **API Communication**: Frontend makes HTTP requests to Express backend
3. **Data Validation**: Zod schemas validate incoming data
4. **Database Operations**: Drizzle ORM handles PostgreSQL queries
5. **Response**: JSON responses sent back to frontend
6. **State Updates**: React Query manages server state and UI updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm & drizzle-kit**: Modern TypeScript ORM
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router

### UI Dependencies
- **@radix-ui/***: Comprehensive UI component primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Modern icon library

### Development Dependencies
- **tsx**: TypeScript execution for Node.js
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-***: Replit-specific development tools

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with Replit modules
- **Database**: PostgreSQL 16 module
- **Port Configuration**: Internal port 5000, external port 80
- **Hot Reload**: Vite development server with HMR

### Production Build
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles server code to `dist/index.js`
- **Static Files**: Express serves built frontend assets
- **Environment**: Production environment variables for database

### Replit Configuration
- **Deployment Target**: Autoscale deployment
- **Build Command**: `npm run build`
- **Start Command**: `npm run start`
- **Database**: Provisioned PostgreSQL with connection via DATABASE_URL

### Database Management
- **Migrations**: Drizzle migrations in `./migrations` directory
- **Schema Push**: `npm run db:push` for development schema updates
- **Connection**: Environment-based DATABASE_URL configuration

## Deployment Strategy

### Vercel Deployment
- **Configuration**: Added vercel.json with optimized build settings
- **Build Process**: Automated build with npm run build command
- **API Routes**: Configured for serverless function deployment
- **Static Assets**: Optimized serving of frontend assets
- **Environment**: Production environment variables support

### Development Environment
- **Runtime**: Node.js 20 with Replit modules
- **Database**: PostgreSQL 16 module (development)
- **Port Configuration**: Internal port 5000, external port 80
- **Hot Reload**: Vite development server with HMR

## Changelog

Recent Changes:
- June 23, 2025: Created comprehensive admin dashboard with authentication, submission management, and status tracking
- June 23, 2025: Added database migrations system with role-based user authentication
- June 23, 2025: Implemented secure admin routes with session management and bcrypt password hashing
- June 23, 2025: Created deployment configurations for both Vercel and Netlify with environment setup
- June 23, 2025: Integrated Supabase PostgreSQL database with proper connection handling and error management
- June 23, 2025: Added PostgreSQL database integration, replaced MemStorage with DatabaseStorage
- June 23, 2025: Transformed to ReakStudios with parallax hero, sliding banners, enhanced UI sections
- June 23, 2025: Added Vercel deployment configuration and README
- June 23, 2025: Implemented responsive design improvements and better visual effects
- June 23, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.