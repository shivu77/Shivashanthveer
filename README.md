# Portfolio Website

A premium portfolio website built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Features

- 🎨 Modern, minimal, premium UI with glassmorphism effects
- 🌓 Light/Dark theme toggle (system-aware)
- 📱 Fully responsive design
- ⚡ Smooth animations with Framer Motion
- 📝 MDX support for project case studies
- 🎯 Scroll spy navigation
- 🖱️ Custom cursor with magnetic hover effects
- 📧 Contact form with Resend integration

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: MDX
- **Forms**: React Hook Form + Zod
- **Email**: Resend

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── skills/            # Skills page
│   ├── projects/          # Projects pages
│   ├── contact/           # Contact page
│   └── api/               # API routes
├── components/            # React components
│   ├── sections/          # Section components
│   └── ui/                # shadcn/ui components
├── content/               # MDX content
│   └── projects/          # Project MDX files
└── lib/                   # Utility functions
```

## Customization

### Quick Start
See `QUICK_START.md` for a quick checklist of what to change.

### Detailed Guide
See `CUSTOMIZATION_GUIDE.md` for comprehensive customization instructions.

### Key Customization Points:
1. **Profile Photo**: Add `public/profile-photo.jpg`
2. **Resume**: Add `public/Shivashanthveer_N_Resume.pdf`
3. **Personal Info**: Update name, title, description in components
4. **Social Links**: Update GitHub, LinkedIn, Email in contact section
5. **Skills**: Update skills in skills section
6. **Projects**: Edit or create project files in `content/projects/`
7. **Email**: Set up Resend API key in `.env.local`

## Deployment

The project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables (RESEND_API_KEY, CONTACT_EMAIL)
4. Deploy!

## License

MIT

