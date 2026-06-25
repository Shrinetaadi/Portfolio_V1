# Aditya Singh Shrinet — Portfolio

Dark, animated portfolio site for [shrinetaadi.in](https://shrinetaadi.in).

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion + GSAP + Lenis
- React Three Fiber (hero background)
- Resend (contact form email)

## Getting Started

```bash
cd portfolio
npm install
cp .env.local.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com) |
| `CONTACT_EMAIL` | Inbox for form submissions (`shrinetaadi@gmail.com`) |
| `RESEND_FROM_EMAIL` | Verified sender address |

## Deploy to Vercel

1. Push this repo to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add the environment variables above
4. Add custom domains: `shrinetaadi.in` and `www.shrinetaadi.in`

## Hostinger DNS

For domain `shrinetaadi.in` (currently on Hostinger):

| Type | Name | Value |
|------|------|-------|
| A | `@` | `76.76.21.21` |
| CNAME | `www` | `cname.vercel-dns.com` |

Remove the Hostinger parking page after Vercel verifies the domain.

## Resend Setup

1. Create a Resend account and generate an API key
2. For production, verify `shrinetaadi.in` and add the DNS records Resend provides
3. Set `RESEND_FROM_EMAIL` to your verified address (e.g. `Portfolio <hello@shrinetaadi.in>`)
4. Until verified, use `onboarding@resend.dev` for testing (delivers only to your Resend account email)

## Content

All portfolio content lives in `lib/content.ts`, sourced from `Resume.pdf` and LinkedIn certifications. Update that file to change copy, projects, or skills.

Resume PDF is served from `public/resume.pdf`.
