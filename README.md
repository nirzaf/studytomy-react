# STUDYTOMY

## Table of Contents
- [About STUDYTOMY](#about-studytomy)
- [Build Pipeline](#build-pipeline)
- [Features](#features)
- [Contact Information](#contact-information)

## Build Pipeline

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)](https://github.com)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)

### Deployment Pipeline

Our application uses **Vercel** for continuous deployment with the following automated pipeline:

#### 🚀 **Production Deployment**
```bash
# Automatic deployment on main branch
git push origin main
```

#### 🔧 **Build Process**
1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Type Checking**
   ```bash
   npm run type-check
   ```

3. **Build Application**
   ```bash
   npm run build
   ```

4. **Deploy to Vercel**
   - Automatic deployment on push to `main`
   - Preview deployments for pull requests
   - Environment variables configured in Vercel dashboard

#### 📊 **Build Configuration**

**Vercel Settings:**
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x

**Environment Variables:**
```bash
# Production
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_GTM_ID=your_gtm_id
```

#### 🔄 **Deployment Workflow**

```mermaid
graph LR
    A[Code Push] --> B[Vercel Build]
    B --> C[Type Check]
    C --> D[Build Assets]
    D --> E[Deploy]
    E --> F[Live Site]
    
    G[Pull Request] --> H[Preview Build]
    H --> I[Preview URL]
```

#### 📈 **Performance Optimizations**
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Vite's built-in optimizations
- **Preloading**: Background component preloading
- **Caching**: Intelligent browser caching strategies
- **Compression**: Gzip compression enabled

#### 🛠️ **Local Development**
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

#### 🔍 **Build Monitoring**
- **Build Time**: ~4-5 seconds
- **Bundle Size**: Optimized with code splitting
- **Lighthouse Score**: 90+ performance
- **Core Web Vitals**: Optimized

---

## About STUDYTOMY
STUDYTOMY is an innovative online tutoring platform designed to provide high-quality, personalized education to students around the world. Our mission is to make learning accessible, engaging, and effective for all students, regardless of their location or background.

### Objectives
- **Accessibility**: Ensure that every student has access to quality education, no matter where they are.
- **Personalization**: Tailor learning experiences to meet the unique needs and goals of each student.
- **Engagement**: Create an interactive and engaging learning environment that motivates students to achieve their best.
- **Excellence**: Maintain high standards of teaching and learning through continuous improvement and innovation.

## Features
- **Expert Tutors**: Our tutors are highly qualified professionals with extensive teaching experience and subject expertise.
- **1-on-1 Online Tutoring**: Personalized one-on-one sessions that cater to the individual needs of each student.
- **Flexible Scheduling**: Convenient scheduling options that allow students to book sessions at times that work best for them.
- **Comprehensive Study Materials**: Access to a wide range of study materials, including past papers, practice tests, and revision resources.
- **Secure Platform**: A safe and secure online environment that protects the privacy and data of our students.
- **Global Reach**: Connect with tutors and students from around the world, breaking geographical barriers.

## Contact Information
- **Phone**: +61 461 367 702
- **Email**: info@studytomy.com
- **Location**: Melbourne, Australia
