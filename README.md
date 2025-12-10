# AncientWisdom Landing Page

A modern, high-end landing page featuring a full-screen video background with glassmorphism UI elements.

## Features

- **Full-Screen Video Background**: Auto-playing, looped, muted video (`BaziMeetBotany.mp4`)
- **Glassmorphism Cards**: Compact 120x120px interaction cards with blur effects
- **Dynamic Marquee**: Scrolling quote at the bottom of the screen
- **External Login Links**: Guest card links to external authentication

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Vanilla CSS (No Tailwind)
- **Language**: TypeScript

## Changelog

### v0.1.4

- Switched to smaller video file: AncientWisdomMeetBotany.mp4 (1.8MB vs 4.6MB)
- Improved mobile loading performance

### v0.1.3

- Added gradient background behind video (soft blue/purple tones)
- Added side hero text: "Ancient Wisdom" (left) and "Thrive Every Day" (right)
- Added poster image fallback for mobile devices

### v0.1.2

- Disabled Hero text marquee
- Zoomed out video (object-fit: contain) to show full figure

### v0.1.1

- **Guest Login Link**: Clicking "Click Here" on the Guest card now redirects to `https://muyaguestlogin.zeabur.app/index.html`

### v0.1.0

- Initial release
- Full-screen video background
- Glassmorphism Guest/Member cards (120x120px)
- Bottom marquee with scrolling text
- Responsive layout

## Deploy

Deployed via GitHub: [albertvkhew/AncientWisdom](https://github.com/albertvkhew/AncientWisdom)
