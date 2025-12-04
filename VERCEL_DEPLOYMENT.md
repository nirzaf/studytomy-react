# Vercel Deployment Environment Variables Guide

## 🚀 Required Environment Variables for Vercel Deployment

After migrating from React to Next.js, you need to configure the following environment variables in your Vercel project to ensure successful deployment.

---

## ✅ **Essential Variables**

### 1. **Supabase Configuration** (REQUIRED)

These are **critical** for your application to function properly:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

**Where to find these values:**
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Navigate to **Settings** → **API**
4. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 📊 **Analytics Variables** (Currently Hardcoded)

Your application currently has these analytics IDs hardcoded in the source code:

- **Google Tag Manager**: `GTM-PWTGRCTV` (in `src/lib/gtm.ts`)
- **Google Analytics**: `G-EQC6PQ0E9Q` (in `src/lib/gtm.ts`)
- **Microsoft Clarity**: `igippdunx8` (in `src/lib/analytics.ts`)

**These are optional** and will work as-is. However, if you want to make them configurable via environment variables (recommended for better flexibility), you would need to:

1. Add these variables to Vercel:
```bash
NEXT_PUBLIC_GTM_ID=GTM-PWTGRCTV
NEXT_PUBLIC_GA_ID=G-EQC6PQ0E9Q
NEXT_PUBLIC_CLARITY_ID=igippdunx8
```

2. Update the source code to use `process.env.NEXT_PUBLIC_GTM_ID` instead of hardcoded values.

---

## 🔧 **How to Set Environment Variables in Vercel**

### Method 1: Via Vercel Dashboard (Recommended)

1. Go to your project on [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project → **Settings** → **Environment Variables**
3. Add each variable:
   - **Key**: Variable name (e.g., `NEXT_PUBLIC_SUPABASE_URL`)
   - **Value**: Your actual value
   - **Environment**: Select **Production**, **Preview**, and **Development** (or as needed)
4. Click **Save**
5. **Redeploy** your application for changes to take effect

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Set environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL production
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production

# Pull environment variables to local
vercel env pull
```

---

## 📋 **Complete Checklist for Vercel Deployment**

- [ ] **Set `NEXT_PUBLIC_SUPABASE_URL`** in Vercel environment variables
- [ ] **Set `NEXT_PUBLIC_SUPABASE_ANON_KEY`** in Vercel environment variables
- [ ] Verify **Build Command**: `bun run build` or `npm run build`
- [ ] Verify **Output Directory**: `.next` (default for Next.js)
- [ ] Verify **Install Command**: `bun install` or `npm install`
- [ ] Verify **Framework Preset**: Next.js (should auto-detect)
- [ ] Verify **Node.js Version**: 18.x or higher (or Bun runtime)
- [ ] **Redeploy** after setting environment variables

---

## ⚠️ **Important Notes**

### 1. **Environment Variable Naming Convention**
- Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser
- These are the only environment variables that work in client-side code
- **Never** put sensitive keys (like service role keys) in `NEXT_PUBLIC_` variables

### 2. **Migration from Vite to Next.js**
Your README.md still references old Vite environment variables:
```bash
# OLD (Vite) - DO NOT USE
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
VITE_GTM_ID=...
```

These should be updated to:
```bash
# NEW (Next.js) - USE THESE
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
NEXT_PUBLIC_GTM_ID=... (if you make it configurable)
```

### 3. **Build Configuration**
Update your Vercel project settings:
- **Framework Preset**: Next.js (not Vite)
- **Build Command**: `bun run build` or `npm run build`
- **Output Directory**: `.next` (not `dist`)
- **Install Command**: `bun install` or `npm install`

### 4. **Deployment Verification**
After deployment, check:
1. Vercel build logs for any errors
2. Browser console for missing environment variable warnings
3. Supabase connection is working (check network tab)
4. Analytics scripts are loading correctly

---

## 🐛 **Troubleshooting**

### Issue: "Supabase environment variables are not configured"
**Solution**: Ensure you've set both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel and redeployed.

### Issue: Build fails with "command not found: bun"
**Solution**: Either:
- Install Bun in Vercel settings, OR
- Change build commands to use `npm` instead of `bun`

### Issue: Environment variables not updating
**Solution**: 
1. Clear Vercel build cache
2. Trigger a new deployment (not just redeploy)
3. Ensure variables are set for the correct environment (Production/Preview)

---

## 📝 **Quick Setup Script**

If you have Vercel CLI installed, run this script:

```bash
# Set production environment variables
vercel env add NEXT_PUBLIC_SUPABASE_URL production
# Paste your Supabase URL when prompted

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
# Paste your Supabase anon key when prompted

# Trigger a new deployment
vercel --prod
```

---

## 🔗 **Useful Links**

- [Vercel Environment Variables Documentation](https://vercel.com/docs/concepts/projects/environment-variables)
- [Next.js Environment Variables Guide](https://nextjs.org/docs/basic-features/environment-variables)
- [Supabase API Settings](https://app.supabase.com/project/_/settings/api)
- [Your Vercel Dashboard](https://vercel.com/dashboard)

---

## ✨ **Summary**

**Minimum Required Variables:**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

**Optional (if you want to make analytics configurable):**
```bash
NEXT_PUBLIC_GTM_ID=GTM-PWTGRCTV
NEXT_PUBLIC_GA_ID=G-EQC6PQ0E9Q
NEXT_PUBLIC_CLARITY_ID=igippdunx8
```

**After setting these in Vercel, your deployment should work without issues!** 🎉
