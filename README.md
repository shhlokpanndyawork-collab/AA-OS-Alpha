# AA-OS — Command Nexus

**Abyssborn Architect Operating System** | Founder Headquarters PWA

---

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## Build & Deploy

```bash
npm run build       # production build → dist/
npm run preview     # preview production build locally
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.

## First-Time Setup

1. **Settings → AI Provider** — Add your Groq API key (free at console.groq.com/keys)
2. **Settings → Profile** — Set your founder name
3. **Settings → Ventures** — Paste deployed dashboard URLs for Hangar Bay
4. **Command Nexus** → Click "DAILY BRIEF" to get VIC's first briefing

## Structure

```
src/
├── pages/
│   ├── CommandNexus.jsx    # Main orbital HQ
│   ├── MissionControl.jsx  # Mission tracker
│   ├── HangarBay.jsx       # Venture launcher (iframe)
│   ├── VICInterface.jsx    # AI chat + voice
│   ├── Archives.jsx        # Codex, debriefs, timeline
│   └── Settings.jsx        # AI keys, venture URLs, profile
├── components/ui/
│   ├── Sidebar.jsx         # Navigation
│   └── UIKit.jsx           # Shared components
├── store/
│   └── useStore.js         # Zustand state (persisted to localStorage)
└── utils/
    └── aiService.js        # Groq/OpenAI/Gemini/Claude API calls
```

## Features

- **Command Nexus** — 3D orbital system with venture planets + live telemetry
- **VIC** — AI chat with voice input (SpeechRecognition) + voice output (SpeechSynthesis)
- **Mission Control** — CRUD mission tracker with priority + progress
- **Hangar Bay** — Configure venture URLs; loads dashboards in iframe
- **Archives** — Founder Codex, daily debriefs, memory timeline
- **Settings** — Switch AI providers, store API keys locally, configure venture health
- **PWA** — Installable on desktop and mobile, works offline

## AI Providers Supported

| Provider | Free Tier | Speed | Notes |
|----------|-----------|-------|-------|
| Groq     | ✓ Yes     | ⚡ Ultra fast | Default, recommended |
| OpenAI   | Limited   | Fast  | GPT-4o |
| Gemini   | ✓ Yes     | Fast  | Google AI Studio |
| Claude   | No        | Fast  | Anthropic API |

## Notes

- All data stored in **localStorage** — no backend, no cloud sync
- API keys never leave your browser (sent directly to provider APIs)
- Venture URLs in Hangar Bay load in an iframe — ensure your dashboards allow embedding
