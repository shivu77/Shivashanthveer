# 🚀 Quick Start - What to Change

## 1. Add Your Photo
📁 **Place your photo here:**
```
public/profile-photo.jpg
```
- Format: JPG, PNG, or WebP
- Size: 800x800px or larger (square recommended)
- The photo will automatically appear on the home page

## 2. Add Your Resume
📁 **Place your resume here:**
```
public/Shivashanthveer_N_Resume.pdf
```
- Or rename it and update the link in `components/sections/hero-section.tsx` (line 138)

## 3. Update Your Information

### Essential Changes:

| File | What to Change | Line |
|------|---------------|------|
| `app/layout.tsx` | Page title & description | 11-13 |
| `components/navbar.tsx` | Your name in navbar | 77 |
| `components/sections/hero-section.tsx` | Name, title, description | 97, 106, 115-116 |
| `components/sections/about-section.tsx` | About text & interests | 31-39 |
| `components/sections/contact-section.tsx` | GitHub, LinkedIn, Email links | 76-88 |
| `components/sections/skills-section.tsx` | Your skills | 14-67 |
| `content/projects/*.mdx` | Your projects | All files |

## 4. Set Up Email (Contact Form)

Create `.env.local` in the root directory:
```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your-email@example.com
```

Get your API key from: https://resend.com

## 5. Update Projects

Edit files in `content/projects/`:
- `legal-chatbot-rag.mdx`
- `ids-cnn-lstm.mdx`
- `voice-assistant.mdx`
- `nvidia-api-chatbot.mdx`

Or create new project files with the same format.

---

## ✅ Quick Checklist

- [ ] Added `public/profile-photo.jpg`
- [ ] Added `public/Shivashanthveer_N_Resume.pdf`
- [ ] Updated name everywhere
- [ ] Updated social media links
- [ ] Updated skills
- [ ] Updated projects
- [ ] Created `.env.local` with email config
- [ ] Tested the website

---

For detailed instructions, see `CUSTOMIZATION_GUIDE.md`

