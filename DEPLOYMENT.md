# Deployment Guide - Reak Studios Website

## Overview
This guide covers deploying the Reak Studios website to Vercel or Netlify with Supabase PostgreSQL database.

## Prerequisites
- Supabase account with a PostgreSQL database
- Vercel or Netlify account
- Your Supabase DATABASE_URL

## Database Setup

### 1. Supabase Configuration
Your DATABASE_URL should be in this format:
```
postgresql://postgres:[PASSWORD]@db.[PROJECT_ID].supabase.co:5432/postgres
```

### 2. Environment Variables Required
```
DATABASE_URL=your_supabase_connection_string
SESSION_SECRET=your_secure_session_secret_32_chars_minimum
NODE_ENV=production
```

## Vercel Deployment

### 1. Connect Repository
- Fork or clone this repository to your GitHub account
- Connect your GitHub repository to Vercel

### 2. Configure Environment Variables
In your Vercel project settings, add:
- `DATABASE_URL`: Your Supabase connection string
- `SESSION_SECRET`: A secure random string (minimum 32 characters)

### 3. Deploy
- Vercel will automatically build and deploy
- The build process includes:
  - Frontend build (React/Vite)
  - Backend build (Express server)
  - Database migration (automatic)
  - Admin user creation (automatic)

### 4. Post-Deployment
After successful deployment:
- Visit `/admin/login` to access the admin panel
- Default credentials: `admin` / `admin123`
- **Important**: Change the admin password immediately

## Netlify Deployment

### 1. Connect Repository
- Connect your repository to Netlify

### 2. Build Settings
- Build command: `npm run build`
- Publish directory: `dist`

### 3. Environment Variables
Add the same environment variables as Vercel

### 4. Functions Configuration
- Netlify will automatically handle the serverless functions
- API routes will be available at `/.netlify/functions/api/`

## Database Migration
The deployment process automatically:
1. Runs database migrations
2. Creates necessary tables
3. Sets up an admin user

## Admin Panel Features
- Contact form submissions management
- Status tracking (pending, in-progress, completed, cancelled)
- Submission details viewing
- Delete submissions
- Secure authentication

## Manual Database Setup (if needed)
If automatic migration fails, manually run:
```sql
-- Create users table
CREATE TABLE "users" (
  "id" serial PRIMARY KEY NOT NULL,
  "username" text NOT NULL UNIQUE,
  "password" text NOT NULL,
  "role" text DEFAULT 'user' NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

-- Create contact_submissions table
CREATE TABLE "contact_submissions" (
  "id" serial PRIMARY KEY NOT NULL,
  "name" text NOT NULL,
  "email" text NOT NULL,
  "service_type" text NOT NULL,
  "preferred_date" text,
  "project_details" text,
  "status" text DEFAULT 'pending' NOT NULL,
  "created_at" timestamp DEFAULT now() NOT NULL
);

-- Create admin user (replace with secure password)
INSERT INTO "users" ("username", "password", "role") 
VALUES ('admin', '$2b$10$example_hashed_password', 'admin');
```

## Security Notes
- Change default admin credentials immediately
- Use strong passwords
- Keep SESSION_SECRET secure and random
- Database connection uses SSL in production

## Troubleshooting
- Check environment variables are set correctly
- Ensure Supabase database is accessible
- Verify build logs for any errors
- Check function logs for runtime issues

## Support
For deployment issues, check:
1. Build logs in your deployment platform
2. Function logs for runtime errors
3. Database connection logs
4. Environment variable configuration