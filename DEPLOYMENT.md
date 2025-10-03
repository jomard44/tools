# Deployment Guide

## Adding Google AdSense

1. **Create a Google AdSense Account**
   - Visit [Google AdSense](https://www.google.com/adsense)
   - Sign up and verify your account
   - Submit your site for review

2. **Add AdSense Code to the Project**
   - Once approved, get your AdSense code from Google AdSense dashboard
   - Add the following script to the `<head>` section of `index.html`:
   ```html
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
        crossorigin="anonymous"></script>
   ```
   Replace `YOUR_PUBLISHER_ID` with your actual AdSense publisher ID.

3. **Using the AdPlaceholder Component**
   - The project already includes an `AdPlaceholder` component in `src/components/layout/AdPlaceholder.jsx`
   - To display ads, update the component with your ad unit code:
   ```jsx
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot="YOUR_AD_SLOT_ID"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
   <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
   </script>
   ```

4. **Ad Placement**
   - Ads are currently placed in the header and footer areas
   - Additional ad units can be added by using the `<AdPlaceholder />` component
   - Follow Google AdSense policies for ad placement and density

5. **Testing**
   - Use Google AdSense's Preview tool to verify ad placements
   - Ensure ads are responsive across different screen sizes
   - Check that ads don't interfere with site functionality

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