# VIP Photo Studio - Team Setup & Deployment Guide

## 🚀 Quick Start for New Team Members

This guide will help you set up, edit, and deploy the VIP Photo Studio website from scratch.

## 📋 Prerequisites

Before you begin, ensure you have these installed on your machine:

### Required Software
- **Node.js** (version 22.x or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **Vercel CLI** - Install with: `npm install -g vercel`

### Required Accounts
- **Vercel Account** - [Sign up here](https://vercel.com/)
- **GitHub Account** (if using GitHub for version control)

## 🛠️ Initial Setup

### Step 1: Clone/Download the Project
```bash
# If using Git (recommended)
git clone [repository-url]
cd VipPhotoStudio

# OR if you received the folder directly
# Extract the zip file and navigate to the folder
cd VipPhotoStudio
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables
Create a `.env` file in the root directory (if needed):
```bash
# Copy any existing .env.example file
cp .env.example .env

# Edit the .env file with your values
# (Check with the team lead for required environment variables)
```

### Step 4: Test Local Development
```bash
# Start the development server
npm run dev

# The site should open at http://localhost:5173
# Check that everything loads correctly
```

## 🎨 Making Edits

### Project Structure
```
VipPhotoStudio/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── MobileHero.tsx    # Mobile hero section
│   │   │   ├── WebGLHero.tsx     # Desktop hero section
│   │   │   └── ...
│   │   ├── pages/          # Page components
│   │   │   └── home.tsx    # Home page
│   │   └── ...
├── server/                 # Backend Express server
├── api/                    # Vercel API functions
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies and scripts
```

### Common Edit Locations
- **Mobile Hero**: `client/src/components/MobileHero.tsx`
- **Desktop Hero**: `client/src/components/WebGLHero.tsx`
- **Home Page**: `client/src/pages/home.tsx`
- **Styling**: `client/src/index.css`
- **API Routes**: `api/index.js`

### Development Workflow
1. **Make your changes** in the appropriate files
2. **Test locally**: `npm run dev`
3. **Check mobile view** using browser dev tools
4. **Build test**: `npm run build` (optional)
5. **Deploy**: `vercel --prod`

## 🚀 Deployment Process

### Method 1: Using Vercel CLI (Recommended)

#### First Time Setup
```bash
# Login to Vercel
vercel login

# Link to existing project (if project exists)
vercel link

# OR create new project
vercel
```

#### Deploy Changes
```bash
# Deploy to production
vercel --prod

# Deploy to preview (for testing)
vercel
```

### Method 2: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository (if using Git)
3. Or drag and drop the project folder
4. Configure build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`

## 🔧 Build Configuration

The project is already configured for Vercel deployment with these settings:

### vercel.json
```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "functions": {
    "api/index.js": {
      "runtime": "@vercel/node@4.0.0",
      "maxDuration": 30
    }
  }
}
```

### package.json Scripts
```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=api",
    "start": "cross-env NODE_ENV=production node api/index.js",
    "vercel-build": "npm run build"
  }
}
```

## 📱 Mobile Development Tips

### Testing Mobile View
1. **Browser Dev Tools**: Press F12 → Toggle device toolbar
2. **Responsive Design**: Test different screen sizes
3. **Touch Interactions**: Test on actual mobile devices

### Mobile-Specific Files
- `MobileHero.tsx` - Mobile hero section
- `use-mobile.tsx` - Mobile detection hook
- `use-mobile-performance.tsx` - Mobile performance optimizations

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Vercel Deployment Issues
```bash
# Check Vercel status
vercel --version

# Re-login if needed
vercel logout
vercel login
```

#### Local Development Issues
```bash
# Check if port is available
npm run dev

# If port 5173 is busy, Vite will suggest another port
```

### Getting Help
- Check the console for error messages
- Verify all dependencies are installed
- Ensure Node.js version is 22.x or higher
- Contact the team lead for project-specific issues

## 📝 Important Notes

### Before Making Changes
1. **Backup**: Always backup your work
2. **Test Locally**: Always test changes locally first
3. **Mobile Check**: Test on mobile devices/simulators
4. **Performance**: Keep images optimized for web

### Deployment Checklist
- [ ] Changes tested locally
- [ ] Mobile view tested
- [ ] No console errors
- [ ] Images load properly
- [ ] All functionality works
- [ ] Ready to deploy with `vercel --prod`

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel CLI Docs**: https://vercel.com/docs/cli
- **React Docs**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **Vite Docs**: https://vitejs.dev/

## 📞 Support

If you encounter any issues:
1. Check this guide first
2. Look at the console for error messages
3. Test locally before deploying
4. Contact the team lead for assistance

---

**Happy coding! 🎉**

*Last updated: $(date)*
