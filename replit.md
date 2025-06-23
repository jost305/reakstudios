# Recording Studio Website

## Overview

This project is a modern, responsive recording studio website built with React and Node.js. It features a professional dark theme design for "RECOND" studio, showcasing services, portfolio, team information, and a contact form. The application uses a full-stack architecture with a React frontend and Express.js backend, designed for deployment on Replit with PostgreSQL database integration.

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
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Prepared for connect-pg-simple sessions
- **Development**: tsx for TypeScript execution in development

### UI/UX Design
- **Theme**: Professional dark studio theme with cyan primary color
- **Layout**: Single-page application with smooth scrolling sections
- **Components**: Navigation, Hero, Services, Portfolio, About, Testimonials, Contact, Footer
- **Responsive**: Mobile-first design with responsive breakpoints

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Stores contact form submissions with service details
- **Schema Validation**: Zod schemas for type-safe data validation

### API Endpoints
- `POST /api/contact` - Submit contact form with validation
- `GET /api/contact` - Retrieve contact submissions (admin functionality)

### Frontend Features
- **Landing Page**: Hero section with call-to-action buttons
- **Services Section**: Recording, mixing, mastering, production, podcast, sound design
- **Portfolio Section**: Featured tracks with audio player simulation
- **About Section**: Team member profiles and studio statistics
- **Testimonials**: Client testimonials with star ratings
- **Contact Form**: Service booking form with validation and submission

### Storage System
- **Development**: In-memory storage implementation for development/testing
- **Production**: PostgreSQL with Drizzle ORM for data persistence
- **Interface**: Abstract storage interface for easy swapping between implementations

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

## Changelog

Changelog:
- June 23, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.