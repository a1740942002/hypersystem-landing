# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
bun dev          # Start dev server on localhost:3000
bun run build    # Production build
bun start        # Start production server
```

## Tech Stack

- **Next.js 15** with App Router
- **React 19** with TypeScript
- **next-intl** for i18n with SSG support
- **Framer Motion** for animations
- **Tailwind CSS v4** (installed via PostCSS)
- **Lucide React** for icons

## Architecture

### URL Structure (Multi-language)
```
/zh-TW           → 首頁 (Traditional Chinese, default)
/zh-TW/player    → 玩家系統
/zh-TW/club      → 協會系統
/zh-TW/pricing   → 方案定價
/en              → Landing (English)
/en/player       → Player System
/ja, /zh-CN      → Other languages
```

### Directory Structure
```
app/
├── [locale]/
│   ├── layout.tsx      # Locale layout with providers
│   ├── page.tsx        # Landing page
│   ├── player/page.tsx # Player system
│   ├── club/page.tsx   # Club system
│   └── pricing/page.tsx
├── layout.tsx          # Root layout
└── globals.css         # Global styles

components/
├── layout/             # Navbar, Footer, ModalProvider
├── landing/            # HeroSection, ProductPreview, Calculator, ContactSection
├── player/             # PlayerSystem
├── club/               # ClubSystem
└── pricing/            # PricingPage

i18n/
├── routing.ts          # Locale configuration
├── request.ts          # Server-side locale handling
└── navigation.ts       # Type-safe Link, useRouter

messages/
├── zh-TW.json          # Traditional Chinese
├── zh-CN.json          # Simplified Chinese
├── en.json             # English
└── ja.json             # Japanese
```

### Key Patterns

**Translation Usage:**
```tsx
// In client components
import { useTranslations } from 'next-intl';
const t = useTranslations('hero');
// Usage: t('title'), t('desc')

// In server components
import { getTranslations } from 'next-intl/server';
const t = await getTranslations({ locale, namespace: 'seo' });
```

**Navigation:**
```tsx
import { Link, useRouter, usePathname } from '@/i18n/navigation';
// Link automatically handles locale prefix
<Link href="/club">...</Link>

// Language switching
router.replace(pathname, { locale: 'en' });
```

**Modal System:**
```tsx
import { useModal } from '@/components/layout/ModalProvider';
const { openModal, openSubscription, closeModal } = useModal();
```

### Configuration Files
- `next.config.ts` - Next.js config with next-intl plugin
- `middleware.ts` - Locale detection and routing
- `i18n/routing.ts` - Supported locales: `['zh-TW', 'zh-CN', 'en', 'ja']`
- `lib/constants.ts` - Brand URLs, colors
- `types/index.ts` - TypeScript interfaces

### Styling
- Tailwind CSS with custom theme in `app/globals.css`
- Brand colors: `#7DF90B` (green), `#050817` (dark)
- Path alias: `@/*` maps to project root
