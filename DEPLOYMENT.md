# Deployment Guide

## Adding Google AdSense

Your Google AdSense account is already set up with:
- Publisher ID: ca-pub-9587370950538764
- Ad Unit ID (Horizontal): 5695311938

If you need to add more ad units:
1. Go to [Google AdSense](https://www.google.com/adsense)
2. Create new ad units in your dashboard
3. Update the AdPlaceholder component with new ad unit IDs

Current ad implementation:
```jsx
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9587370950538764"
     data-ad-slot="5695311938"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
```

## Deploying on Vercel

1. **Prepare Your Repository**
   - Push your code to a GitHub repository
   - Ensure all dependencies are listed in `package.json`
   - Your `vite.config.js` is already configured for production

2. **Connect to Vercel**
   - Visit [Vercel](https://vercel.com)
   - Sign up or log in with your GitHub account
   - Click "New Project"
   - Select your repository

3. **Configure Project**
   - Framework Preset: Select "Vite"
   - Build Settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

4. **Environment Variables (if needed)**
   - Add any required environment variables in Vercel's project settings
   - For development, add them to a `.env` file (already in .gitignore)

5. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site
   - You'll get a production URL like `your-project.vercel.app`

6. **Custom Domain (Optional)**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Follow Vercel's DNS configuration instructions

7. **Continuous Deployment**
   - Vercel automatically deploys when you push to your main branch
   - Configure branch deployments in Project Settings > Git

8. **Monitoring**
   - Use Vercel's Analytics (if enabled)
   - Check deployment logs and performance metrics
   - Monitor build times and optimization opportunities

## Post-Deployment Checklist

1. **Performance**
   - Run Lighthouse tests
   - Check Core Web Vitals
   - Verify ad loading doesn't impact performance

2. **SEO**
   - Verify meta tags are properly set
   - Check robots.txt configuration
   - Submit sitemap to search engines

3. **Monitoring**
   - Set up error tracking (e.g., Sentry)
   - Monitor ad performance in AdSense dashboard
   - Check Vercel analytics regularly

4. **Updates**
   - Keep dependencies updated
   - Monitor Google AdSense policy changes
   - Regularly check Vercel deployment logs

## Troubleshooting

### Google AdSense
- If ads aren't showing, check browser console for errors
- Verify your AdSense account is fully approved
- Ensure ad code is properly implemented
- Check if ad blockers are interfering with testing

### Vercel
- Check build logs for deployment failures
- Verify environment variables are correctly set
- Review Vercel's status page for service issues
- Check project compatibility with Vercel's requirements