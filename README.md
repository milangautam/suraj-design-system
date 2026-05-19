# Suraj Design System

> **Work in progress** — foundations are complete, components are being built.

Suraj (सूरज, Hindi for *sun*) is a multi-color design system built for scale. It provides a shared token foundation, component library, and documentation that multiple products can build on top of.

---

## Stack

| Layer | Tool |
|---|---|
| Components | React |
| Styling | Tailwind CSS v3 |
| Documentation | Storybook 10 |
| Fonts | Satoshi · Geist · Geist Mono |

---

## What's done

- [x] Color primitives — 7 scales (Solar, Pulse, Glow, Sage, Bloom, Error, Zinc), 11 steps each
- [x] Semantic color tokens — 31 tokens with Light and Dark mode values
- [x] Typography — 12 text styles across Satoshi, Geist, and Geist Mono
- [x] Spacing scale — 14 tokens on a 4px grid (2–128px)
- [x] Border radius — 8 tokens (none → full)
- [x] Shadows — 6 elevation styles (sm → 2xl + inner)
- [x] Tailwind config — all tokens wired up
- [x] Storybook — configured with light/dark mode switching

## What's next

- [ ] Button component
- [ ] Input component
- [ ] Badge / Tag
- [ ] Card
- [ ] More components...

---

## Getting started

```bash
npm install
npm run storybook
```

---

Built by [Milan Gautam](https://github.com/milangautam)
