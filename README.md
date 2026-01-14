# Assignment – Next.js Landing Page (Option A)

## Overview

This project is a **pixel-perfect landing page implementation** built using **Next.js (App Router)** based on the provided Figma design (Option A).

The goal of this assignment is to demonstrate:
- Accurate translation of design to code
- Proper usage of modern Next.js features
- Clean architecture with Server Components and Server Actions
- Functional backend integration using Airtable
- High performance and full responsiveness

---

## 🚀 Live Demo

- **Live URL:** https://vivek-simplilearn.vercel.app/

---

## 🛠️ Tech Stack

- **Framework:** Next.js (latest version) – App Router
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Backend Integration:** Airtable
- **Form Handling:** Server Actions (no API routes)
- **Deployment:** Vercel / Netlify
- **AI Tooling:** ChatGPT / v0.dev (used for iteration and scaffolding)

---

## 📁 Project Structure

```text
assignment-sim/
│
├── app/
│   ├── actions/
│   │   └── rsvp.ts              # Server Action (Airtable submission)
│   │
│   ├── favicon.ico
│   ├── globals.css              # Global styles + Tailwind
│   ├── layout.tsx               # Root layout (Server Component)
│   └── page.tsx                 # Single-page entry point
│
├── components/
│   └── sections/
│       ├── Hero.tsx             # Hero section
│       ├── Overview.tsx         # Overview + RSVP entry
│       ├── Agenda.tsx           # Agenda section
│       ├── Speakers.tsx         # Speakers section
│       └── Rsvpform.tsx         # Reusable RSVP form
│
├── public/
│   └── background/              # Images & SVG assets
│
├── css/
│   └── satoshi.css              # Font definitions
│
├── fonts/                       # Local font files
│
├── .env.local                   # Environment variables (local only)
├── next.config.ts
├── tailwind.config.js
├── postcss.config.mjs
├── tsconfig.json
└── package.json
