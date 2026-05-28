# Nikhil J — Portfolio Build Plan

## Color Theme: Warm Beige / Cream

| Token | Hex | Where Used |
|---|---|---|
| bg-primary | `#FAF7F2` | Main page background |
| bg-secondary | `#F2EBE0` | Alternating sections |
| bg-card | `#FFFFFF` | Cards |
| accent-gold | `#C4943A` | Buttons, highlights, links |
| accent-brown | `#8B7355` | Sub-headings |
| text-primary | `#1C1410` | Body text |
| text-secondary | `#5C4A32` | Muted text |
| border | `#E8DDD0` | Card borders |

---

## Tech Stack

- **Framework:** Next.js 14 + TypeScript
- **Styling:** Tailwind CSS (custom colors above)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **GitHub widget:** react-github-calendar
- **Fonts:** Space Grotesk (headings) + Inter (body)

---

## File Structure

```
Nikhil J Portfolio/
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── postcss.config.mjs
├── public/
│   └── images/
│       ├── profile.png            ← dummy profile avatar
│       ├── haystek.png            ← dummy company logo
│       ├── avijo.png              ← dummy company logo
│       ├── microsoft.png          ← dummy company logo
│       ├── project-lumybot.png    ← dummy project image
│       ├── project-telegram.png
│       ├── project-voiceai.png
│       ├── project-visualaid.png
│       └── project-rosedisease.png
└── src/
    ├── app/
    │   ├── layout.tsx      → root layout + meta tags + fonts
    │   ├── page.tsx        → assembles all sections
    │   └── globals.css     → CSS variables, base styles
    ├── components/
    │   ├── Navbar.tsx      → fixed top nav, smooth scroll, mobile menu
    │   ├── Hero.tsx        → name, typewriter roles, CTA, particles
    │   ├── About.tsx       → summary + animated stat counters
    │   ├── Experience.tsx  → vertical animated timeline
    │   ├── Projects.tsx    → 6 project cards with hover effect
    │   ├── Skills.tsx      → categorized animated skill pills
    │   ├── Education.tsx   → GITAM card
    │   ├── Awards.tsx      → SIH 2025 + BioMed Bharat cards
    │   ├── Contact.tsx     → email, phone, LinkedIn, GitHub + calendar
    │   └── Footer.tsx
    └── lib/
        └── utils.ts        → cn() helper
```

---

## All 10 Sections — Content from Resume

### 1. Navbar
- Logo: `NJ` in gold
- Links: About · Experience · Projects · Skills · Education · Awards · Contact
- Mobile hamburger menu

### 2. Hero
- Name: **NIKHIL J**
- Typewriter cycles: `AI & ML Engineer` → `RAG & LLM Builder` → `Multi-Agent Systems Dev` → `Voice AI Creator`
- Bio line: "Final-year B.Tech AI & ML · Building production-grade AI for real business problems"
- Buttons: **View My Work** + **Download Resume**
- Stats row: `3 Internships · 5+ Projects · 2 Awards · National Finalist SIH 2025`
- Right side: profile image with gold ring
- Background: animated floating warm orbs

### 3. About
- Full resume summary paragraph
- 4 animated count-up cards: `3` Companies · `5+` Projects · `2` Hackathon Wins · `1` National Finalist

### 4. Experience (Timeline)
1. **Haystek Technology** · AI/ML Intern · Present · Hyderabad
   - Webchat LumyBot — FastAPI + Hybrid RAG (BM25 + Semantic + Vector)
   - ERP LumyBot — Multi-Agent AI, RAG, conversational memory
   - Retrieval latency + LLM orchestration optimization
2. **Avijo** · AI/ML Intern · Aug–Oct 2025 · Remote
   - Healthcare chatbot: BioBERT + RAG + LangChain
   - EasyOCR for medical record parsing
3. **Microsoft (Edunet Foundation)** · Summer Intern · May–Jun 2025 · Remote
   - Job salary/role predictor: XGBoost + Random Forest

### 5. Projects (6 Cards)
1. **Webchat LumyBot** — FastAPI · Hybrid RAG · BM25 · Vector
2. **ERP LumyBot** — Multi-Agent · LangChain · Memory · Routing
3. **Telegram Job Bot** — N8N · Automation · Real-time (Live community)
4. **AI Outbound Calling Agent** — Vapi · ElevenLabs · OmniDimension · STT/TTS (call: +91 80487 99687)
5. **VisualAid** — OpenCV · Image Captioning · Text-to-Audio (accessibility)
6. **Rose Crop Disease Detection** — VGG16 · Deep Learning · Web UI

### 6. Skills
| Category | Skills |
|---|---|
| Languages | Python · Java · SQL |
| AI / ML | LangChain · Hybrid RAG · LLM Orchestration · Multi-Agent · NLP · Deep Learning · OpenCV · Scikit-Learn · BioBERT |
| Voice & Automation | N8N · Vapi · ElevenLabs · OmniDimension · EasyOCR |
| Backend | FastAPI · Flask · Node.js · REST APIs · Postman |
| DevOps / MLOps | Git · Docker · Azure · Vercel · CVAT |
| Web & Data | Next.js · Tailwind CSS · HTML/CSS · Vector Databases · SQL |

### 7. Education
- **GITAM Deemed University** — B.Tech, CS (AI & ML) · Aug 2022 – Aug 2026 · Bengaluru
- Coursework: DSA · OS · DBMS · Design & Analysis of Algorithms

### 8. Awards
1. **Smart India Hackathon 2025** — National Finalist · Top 5 Teams · KIET Delhi NCR · Dec 2025
   - NIA data analysis solution for digital device datasets
2. **BioMed Bharat 2024** — Runner-Up · Team Lead · AMTZ AP · Mar 2024
   - TRL-3 IM injection pain-reduction shield prototype

### 9. Contact
- Email: nikhiljram4@gmail.com
- Phone: +91 84311 25025
- LinkedIn: nikhil-j-ram
- GitHub: nikhilj4
- Live GitHub contribution calendar widget

### 10. Footer
- "Designed & Built by Nikhil J · 2026"

---

## Animations Used (Framer Motion)

| Section | Animation |
|---|---|
| Hero heading | Fade up on mount |
| Typewriter | Character-by-character typing |
| Hero orbs | Slow CSS float keyframes |
| Section titles | Slide up on `whileInView` |
| Timeline items | Stagger reveal on scroll |
| Project cards | Fade + scale, hover lift + shadow |
| Skill pills | Stagger fade per category |
| Award cards | Reveal on scroll |
| Stat counters | Count-up on `useInView` |

---

## Build Steps (Sequential)

| Step | Action |
|---|---|
| 1 | `npx create-next-app@latest . --typescript --tailwind --app --src-dir` |
| 2 | Install: `framer-motion lucide-react react-github-calendar clsx tailwind-merge` |
| 3 | Set up `globals.css` with CSS variables + font imports |
| 4 | Configure `tailwind.config.ts` with custom colors + fonts |
| 5 | Create dummy placeholder images in `public/images/` |
| 6 | Build `layout.tsx` with metadata |
| 7 | Build components: Navbar → Hero → About → Experience → Projects → Skills → Education → Awards → Contact → Footer |
| 8 | Assemble in `page.tsx` |
| 9 | `npm run dev` — verify each section |
| 10 | `npm run build` — confirm zero TypeScript errors |

---

## Verification Checklist

- [ ] Dev server starts without errors
- [ ] All 9 sections render with correct content
- [ ] Typewriter cycles through 4 roles correctly
- [ ] Stat counters animate on scroll
- [ ] Timeline stagger reveals on scroll
- [ ] Project cards hover lift works
- [ ] Mobile responsive (hamburger + stacked layout)
- [ ] All dummy images load
- [ ] Resume content 100% matches PDF
- [ ] `npm run build` passes with no errors
