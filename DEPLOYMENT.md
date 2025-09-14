# Vercel Deployment Guide

This project has been configured for deployment to Vercel. Here's how to deploy:

## Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Supabase Database**: Set up a PostgreSQL database on Supabase
3. **Environment Variables**: Configure the required environment variables

## Environment Variables

Set these environment variables in your Vercel project settings:

```
DATABASE_URL=your_supabase_connection_string
NODE_ENV=production
```

## Deployment Steps

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

### Option 2: Deploy via GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push to main branch

## Database Setup

1. Create a new project on Supabase
2. Get your database connection string
3. Run the database migrations:
   ```bash
   npm run db:push
   ```

## Project Structure

- **Frontend**: Built with Vite and React, served as static files
- **Backend**: Express.js server running as Vercel serverless functions
- **Database**: Supabase PostgreSQL with Drizzle ORM
- **API Routes**: All API calls are routed to `/api/*` and handled by the serverless function

## Build Process

The build process:
1. Builds the React frontend with Vite
2. Bundles the Express server with esbuild
3. Outputs static files to `dist/public/`
4. Outputs the serverless function to `api/index.js`

## Configuration Files

- `vercel.json`: Vercel deployment configuration
- `.vercelignore`: Files to exclude from deployment
- `package.json`: Updated with Vercel-specific scripts

## Troubleshooting

- Ensure all environment variables are set in Vercel
- Check that your Supabase database is accessible
- Verify the build process completes successfully
- Check Vercel function logs for any runtime errors

## Local Development

To run locally:
```bash
npm run dev
```

This will start both the frontend and backend in development mode.
