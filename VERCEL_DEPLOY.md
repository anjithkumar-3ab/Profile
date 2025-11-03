# Vercel Deployment Guide

## Deploy to Vercel

This project is configured for easy deployment to Vercel.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/anjithkumar-3ab/Profile)

### Manual Deployment Steps

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

### Environment Variables

Make sure to set these environment variables in Vercel Dashboard:

- `TELEGRAM_BOT_TOKEN` - Your Telegram Bot Token (optional)
- `TELEGRAM_CHAT_ID` - Your Telegram Chat ID (optional)
- `EMAIL_USER` - Your email for nodemailer
- `EMAIL_PASS` - Your email password/app password

### Build Settings in Vercel

- **Framework Preset**: Other
- **Build Command**: `npm run vercel-build`
- **Output Directory**: `client/build`
- **Install Command**: `npm install && cd client && npm install`

### Important Notes

1. The `vercel.json` file is already configured
2. API routes will be available at `/api/*`
3. Client will be served from root `/`
4. Make sure to push all changes to GitHub before deploying

### Deploy from GitHub

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure environment variables
5. Click "Deploy"

### Local Testing

Before deploying, test locally:

```bash
npm run build
npm start
```

Visit `http://localhost:5000` to test the production build.
