# 📝 Customization Guide

This guide shows you exactly where to place your photo and what information to change throughout the portfolio.

## 🖼️ 1. PROFILE PHOTO

### Where to Place:
- **Location**: `public/profile-photo.jpg`
- **File Name**: `profile-photo.jpg` (or update the filename in code)
- **Recommended Size**: 800x800px or larger
- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: Square (1:1) works best

### What Happens:
- The photo will automatically appear in the hero section
- It will be displayed as a circular profile picture
- Responsive sizing: 256px (mobile), 320px (tablet), 384px (desktop)

---

## 📄 2. RESUME FILE

### Where to Place:
- **Location**: `public/Shivashanthveer_N_Resume.pdf`
- **File Name**: Update to your name or keep as is
- **Format**: PDF

### If You Change the Filename:
Update the file path in: `components/sections/hero-section.tsx` (line ~138)

---

## 🔧 3. FILES TO CUSTOMIZE

### A. Personal Information

#### 📍 File: `app/layout.tsx`
**Line 11-13**: Update page title and description
```typescript
export const metadata: Metadata = {
  title: "YOUR NAME - YOUR TITLE",  // Change this
  description: "YOUR TITLE - YOUR DESCRIPTION",  // Change this
}
```

#### 📍 File: `components/navbar.tsx`
**Line 77**: Update name in navbar
```typescript
<Link href="/" className="text-xl font-bold">
  YOUR NAME  // Change this
</Link>
```

#### 📍 File: `components/sections/hero-section.tsx`
**Line 97**: Update your name
```typescript
Shivashanthveer N  // Change to your name
```

**Line 106**: Update your title/tagline
```typescript
AI/ML Engineer | Researcher | Developer  // Change to your title
```

**Line 115-116**: Update your description
```typescript
I build practical AI that ships — from legal chatbots to intrusion
detection and voice automation.  // Change to your description
```

**Line 59**: Update photo alt text (optional)
```typescript
alt="Shivashanthveer N"  // Change to your name
```

#### 📍 File: `components/sections/about-section.tsx`
**Line 31**: Update your name
```typescript
I'm <strong>Shivashanthveer N</strong>  // Change to your name
```

**Line 31-35**: Update your about text
```typescript
I'm <strong>YOUR NAME</strong>, an AI/ML engineer
passionate about building real-world intelligent systems. I
work on LLM-based assistants, RAG pipelines, security
detection models, and voice automation. I care about clarity,
reproducibility, and solutions that scale.
```

**Line 38-39**: Update your interests/hobbies
```typescript
Outside engineering, I enjoy football (Bengaluru FC), learning
multiple languages, and exploring generative AI research.
```

### B. Social Media Links

#### 📍 File: `components/sections/contact-section.tsx`
**Line 76-88**: Update social media links
```typescript
const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/YOUR_USERNAME",  // Change this
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/YOUR_USERNAME",  // Change this
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:YOUR_EMAIL@example.com",  // Change this
  },
]
```

### C. Skills Section

#### 📍 File: `components/sections/skills-section.tsx`
**Lines 14-67**: Update skills and categories
- Modify the `skillCategories` array to match your skills
- Update category titles, icons, and skill lists
- Add or remove categories as needed

### D. Projects

#### 📍 Files: `content/projects/*.mdx`
Update or create project files in the `content/projects/` folder:
- `legal-chatbot-rag.mdx`
- `ids-cnn-lstm.mdx`
- `voice-assistant.mdx`
- `nvidia-api-chatbot.mdx`

**For each project file, update:**
- `title`: Project name
- `slug`: URL-friendly version (e.g., `my-awesome-project`)
- `summary`: Brief description
- `tech`: Array of technologies used
- `highlights`: Key features/achievements
- Content: Full project description

### E. Email Configuration

#### 📍 File: `app/api/contact/route.ts`
**Line 23**: Update email sender (requires Resend domain setup)
```typescript
from: "Portfolio Contact <onboarding@resend.dev>",  // Change to your verified domain
```

**Line 24**: Update recipient email (or use environment variable)
```typescript
to: process.env.CONTACT_EMAIL || "your-email@example.com",  // Change default email
```

---

## 🔐 4. ENVIRONMENT VARIABLES

### Create `.env.local` file in root directory:

```env
# Resend API Key (for contact form)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx

# Your email address (where contact form messages will be sent)
CONTACT_EMAIL=your-email@example.com
```

### How to Get Resend API Key:
1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add it to `.env.local`
4. Verify your domain (for production use)

---

## 📋 5. CHECKLIST

Use this checklist to ensure you've customized everything:

### Personal Information
- [ ] Updated name in `app/layout.tsx`
- [ ] Updated name in `components/navbar.tsx`
- [ ] Updated name in `components/sections/hero-section.tsx`
- [ ] Updated name in `components/sections/about-section.tsx`
- [ ] Updated title/tagline in hero section
- [ ] Updated description in hero section
- [ ] Updated About section content
- [ ] Updated interests/hobbies

### Files & Assets
- [ ] Added profile photo to `public/profile-photo.jpg`
- [ ] Added resume PDF to `public/Shivashanthveer_N_Resume.pdf`
- [ ] Updated resume filename if changed

### Social Media
- [ ] Updated GitHub link
- [ ] Updated LinkedIn link
- [ ] Updated email address

### Skills & Projects
- [ ] Updated skills in `components/sections/skills-section.tsx`
- [ ] Updated project files in `content/projects/`
- [ ] Added/removed projects as needed

### Email & Configuration
- [ ] Created `.env.local` file
- [ ] Added `RESEND_API_KEY`
- [ ] Added `CONTACT_EMAIL`
- [ ] Updated email sender in `app/api/contact/route.ts`

### Testing
- [ ] Tested profile photo display
- [ ] Tested resume download
- [ ] Tested contact form
- [ ] Tested all social media links
- [ ] Tested navigation
- [ ] Tested dark/light theme toggle

---

## 🚀 6. QUICK REFERENCE

### Main Files to Edit:
1. `app/layout.tsx` - Page metadata
2. `components/navbar.tsx` - Navbar name
3. `components/sections/hero-section.tsx` - Hero section content
4. `components/sections/about-section.tsx` - About section content
5. `components/sections/skills-section.tsx` - Skills
6. `components/sections/contact-section.tsx` - Social links
7. `content/projects/*.mdx` - Project details
8. `app/api/contact/route.ts` - Email configuration
9. `.env.local` - Environment variables

### Public Folder Files:
- `public/profile-photo.jpg` - Your profile photo
- `public/Shivashanthveer_N_Resume.pdf` - Your resume

---

## 💡 TIPS

1. **Photo Tips:**
   - Use a high-quality, professional photo
   - Square photos work best (1:1 ratio)
   - Good lighting and clear background
   - At least 800x800px resolution

2. **Resume Tips:**
   - Keep filename simple (no spaces, use underscores)
   - PDF format is recommended
   - Make sure it's the latest version

3. **Content Tips:**
   - Keep descriptions concise and engaging
   - Use action verbs in project descriptions
   - Highlight your unique skills and achievements
   - Update regularly as you complete new projects

4. **Email Tips:**
   - Resend requires domain verification for production
   - For development, you can use the default domain
   - Test the contact form before deploying

---

## 🆘 NEED HELP?

If you need help with any customization:
1. Check the file location in this guide
2. Look for comments in the code
3. Refer to the Next.js documentation
4. Check the README.md for setup instructions

Happy customizing! 🎉

