<div align="center">

<br />

<h1>⚓ TuneShip</h1>

<p><strong>Migrate your playlists between Spotify and YouTube Music — instantly, securely, and for free.</strong></p>

<p>
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License" />
</p>

</div>

---

## Overview

**TuneShip** is a web application that lets you migrate music playlists between **Spotify** and **YouTube Music** without losing a single track. Paste your song list, authorize your account via OAuth 2.0, and TuneShip handles the rest — matching tracks with a fuzzy algorithm and creating the playlist automatically on the destination platform.

No sign-up required. No data stored. Just your music, where you want it.

> This repository contains the **frontend** application. The backend API (FastAPI + Celery) lives in a separate repository.

---

## Features

- **Cross-platform migration** — Spotify → YouTube Music and YouTube Music → Spotify
- **Fuzzy track matching** — finds your songs even when titles differ slightly between platforms
- **Manual input** — paste songs as `Artist - Title`, one per line
- **Interactive demo** — try the flow on the landing page before logging in
- **Real-time progress** — background processing with live status updates
- **Secure by design** — OAuth 2.0 only; your credentials are never stored
- **Responsive UI** — fully optimized for desktop and mobile

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + shadcn/ui |
| State Management | [Zustand](https://zustand-demo.pmnd.rs) |
| Forms | React Hook Form + Zod |
| Data Fetching | TanStack Query v5 |
| Testing | Vitest + React Testing Library + Playwright |
| Icons | Lucide React + React Icons |

---

## Getting Started

### Prerequisites

- Node.js 20+
- The [TuneShip API](https://github.com/GabrielMTTA/tuneship-api) running locally or via URL

### Installation

```bash
# Clone the repository
git clone https://github.com/GabrielMTTA/tuneship-web.git
cd tuneship-web

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
```

### Environment Variables

```env
# URL of the TuneShip backend API
NEXT_PUBLIC_API_URL=http://localhost:8000

# Spotify OAuth (redirect URI registered in Spotify Developer Dashboard)
NEXT_PUBLIC_SPOTIFY_REDIRECT_URI=http://localhost:3000/auth/callback

# Google OAuth (redirect URI registered in Google Cloud Console)
NEXT_PUBLIC_GOOGLE_REDIRECT_URI=http://localhost:3000/auth/callback
```

### Running Locally

```bash
npm run dev      # Development server with hot reload
npm run build    # Production build
npm run start    # Start production server
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

---

## Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx                # Landing page
│   ├── login/page.tsx          # Platform selection & OAuth
│   ├── dashboard/page.tsx      # Migration dashboard
│   └── auth/callback/page.tsx  # OAuth callback handler
├── components/
│   ├── landing/                # Landing page components
│   │   ├── demo-widget.tsx     # Interactive demo input
│   │   └── flow-steps.tsx      # Animated "how it works" section
│   ├── layout/                 # Header & footer
│   └── ui/                     # Shared UI primitives
├── lib/
│   ├── api.ts                  # API client functions
│   └── utils.ts                # Utility helpers
└── store/                      # Zustand auth store
```

---

## Migration Flow

```
1. Paste songs        →   2. Authorize account   →   3. Playlist created
   Artist - Title            Spotify or YTM              automatically
   one per line              OAuth 2.0 secure
```

The frontend sends the track list and the user's access token to the backend. A Celery worker processes each track asynchronously — searching the destination platform and creating the final playlist. Progress is reported in real time.

---

## Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run ESLint
npm run test       # Run unit tests (Vitest)
npm run test:e2e   # Run end-to-end tests (Playwright)
```

---

## Contributing

Contributions are welcome. Please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes following [Conventional Commits](https://www.conventionalcommits.org)
4. Push and open a pull request

---

## License

Distributed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ♪ by the TuneShip team</sub>
</div>
