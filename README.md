# 🚀 Utkarsh Thakur — Portfolio Website

My personal portfolio website showcasing my projects, skills, and experience as a Fullstack Web Developer. Built with Next.js, Three.js, GSAP, and Framer Motion — featuring interactive 3D animations, smooth transitions, and a space-themed UI.

![Portfolio Preview](/public/assets/nav-link-previews/landing.png)

## 🔗 Live Demo

> Coming soon — will be deployed on Vercel.

## 🔥 Features

- **Interactive 3D Keyboard** — Custom Spline model where each keycap represents a skill, with hover-triggered titles and descriptions
- **Smooth Animations** — GSAP scroll-based animations, Framer Motion page transitions, and element reveal effects
- **Space Theme** — Particle effects on a dark cosmic background
- **Easter Eggs** — Open the dev console and type my name 🧙‍♂️, press `N` for a surprise 🐱
- **Contact Form** — Server-side email delivery via Resend API
- **Responsive Design** — Fully optimized across mobile, tablet, and desktop
- **SEO Optimized** — Structured JSON-LD data, OG tags, Twitter cards, and sitemap

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI, SCSS Modules |
| **Animations** | GSAP, Framer Motion, Spline (3D) |
| **Backend** | Next.js API Routes, Resend (email) |
| **Other** | Socket.io (remote cursors), Lenis (smooth scroll), Zod |

## 📁 Project Structure

```
src/
├── app/                  # Next.js app router pages
│   ├── about/            # About me page
│   ├── achievements/     # Experience & education
│   ├── contact/          # Contact form
│   ├── craft/            # Freelance services
│   ├── projects/         # Projects listing
│   └── api/send/         # Email API route
├── components/
│   ├── header/           # Navbar with animated menu + previews
│   ├── footer/           # Footer navigation
│   ├── preloader/        # Loading animation
│   ├── sections/         # Homepage sections (hero, skills, projects, contact)
│   └── ui/               # Reusable UI components (Shadcn)
└── data/
    ├── config.ts          # Site-wide config (name, links, SEO)
    ├── projects.tsx       # Project data
    └── constants.ts       # Skills data
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/utkarshthakur303/portfolio_website-1.git
    ```

2. Navigate to the project directory:

    ```bash
    cd portfolio_website-1
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
```

> The contact form requires a [Resend](https://resend.com) API key to send emails. Without it, the form will show a fallback error with a direct email link.

## 🚀 Deployment

This site is designed for deployment on **Vercel**:

1. Push your code to GitHub
2. Connect the repo to [Vercel](https://vercel.com)
3. Add `RESEND_API_KEY` in **Settings → Environment Variables**
4. Deploy — Vercel handles the rest

## 👤 About Me

- **Name**: Utkarsh Thakur
- **Role**: Fullstack Web Developer
- **Education**: B.Tech CSE, Bennett University (2023–2027)
- **Email**: utkarshthakur3107@gmail.com
- **GitHub**: [@utkarshthakur303](https://github.com/utkarshthakur303)
- **LinkedIn**: [utkarsh-bhadauriya](https://www.linkedin.com/in/utkarsh-bhadauriya-535125293/)
- **Instagram**: [@utkarshthakur303](https://www.instagram.com/utkarshthakur303)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
# portfolio_website-1
