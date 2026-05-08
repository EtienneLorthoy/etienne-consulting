# Etienne Lorthoy — Personal Brand Site

Personal brand website for Etienne Lorthoy. Single-file static HTML site; no build system, no framework, no npm. Everything lives in `index.html`.

## Project layout

```
index.html                          — the entire website (HTML + CSS + JS)
Etienne_Lorthoy_Professional_Snapshot.md  — source-of-truth for bio content
```

## Architecture

`index.html` is intentionally monolithic. CSS is in a `<style>` block in `<head>`. JavaScript is inline `<script>` blocks at the bottom of `<body>`. No external JS dependencies; Google Fonts is the only external resource.

Do not split into separate CSS/JS files unless explicitly requested. Keeping a single deployable file is a deliberate choice for portability.

## Design system

All visual tokens are CSS custom properties on `:root`. Change colors or spacing by editing tokens, not by touching individual rules.

| Token | Value | Role |
|---|---|---|
| `--bg` | `#080e0b` | Page background |
| `--bg-card` | `#0e1712` | Card surfaces |
| `--bg-raised` | `#141f18` | Slightly elevated surfaces |
| `--green` | `#00e57a` | Primary accent, CTAs, labels |
| `--green-dim` | `#00b85f` | Muted green (timeline dots, badges) |
| `--cyan` | `#00d4c8` | Secondary accent (keywords, skill chips) |
| `--text` | `#d6ffe8` | Body text |
| `--text-mute` | `#6b9278` | Secondary / metadata text |
| `--border` | `#1a2e20` | Default borders |
| `--border-hi` | `#284033` | Hover / highlighted borders |
| `--mono` | JetBrains Mono, Fira Code | Monospace font (labels, code blocks) |
| `--sans` | Inter, system-ui | Body font |

## Page sections (in order)

| Section id | Description |
|---|---|
| nav (fixed) | Logo + nav links; highlights active section on scroll via IntersectionObserver |
| `#hero` | Full-viewport; animated circuit-board canvas, name, tagline, CTA buttons |
| `#about` | Bio paragraphs + four highlight cards |
| quote-strip (div) | Centered pull quote from peer recommendations |
| `#hardchip` | Hard Chip game intro (two-column) + full tech stack breakdown |
| `#engineering` | Career timeline + education card + skills chips + resume link |
| `#connect` | Eight link cards to all public channels |
| footer | Logo, nav links, location note |

## CSS class conventions

- `.container` — max-width 1100px, horizontal padding via `--gutter`
- `.section` — vertical padding; sections separated by `border-top`
- `.label` — monospace section label in green (e.g. `// about`)
- `.btn` / `.btn-primary` / `.btn-ghost` — button variants
- `.eng-card` — dark card with hover border
- `.hc-stack-layer` — tech stack category card in the Hard Chip section
- `.hc-stack-chips` — flex row of tech tags inside a stack layer
- `.skill-chip` — cyan-tinted chip in the Engineering skills grid
- `.link-card` — clickable card in the Connect section
- `.tl-entry` — timeline entry (Engineering section)

## Content source

`Etienne_Lorthoy_Professional_Snapshot.md` is the canonical reference for all biographical content, career history, public URLs, and positioning language. When updating copy, check that file first.

Key facts:
- Name: Etienne Lorthoy
- Location: Montreal, Quebec, Canada
- Primary identity: Full-Stack and Performance Developer + Solo Indie Developer (Hard Chip)
- Freelance site: etiennelorthoy.com
- GitHub: github.com/EtienneLorthoy
- LinkedIn: linkedin.com/in/etienne-lorthoy
- Steam (Hard Chip): store.steampowered.com/app/2844290/Hard_Chip/
- itch.io: elort.itch.io/hardchip
- Game site: hardchip.io

## Hard Chip tech stack (from the game's CLAUDE.md)

The tech stack section in `#hardchip` reflects the actual game codebase:

| Layer | Key technologies |
|---|---|
| Game & Rendering | MonoGame / XNA, .NET 8.0, HLSL shaders, BEPU Physics (modified source), MGCB content pipeline |
| UI & Input | ImGui via Hexa.NET, ImPlot, GumUI, SDL2 |
| Platform & Media | Facepunch.Steamworks, FFmpeg via Sdcb, Mixpanel, Obfuscar (release obfuscation) |
| Backend Services | Community Stages API, Leaderboards Worker, Validation Worker, Validation API, Data Functions, MongoDB |
| Infrastructure | Docker linux-x64, Compose staging/prod, private registry, Steam depots, Netlify |
| Build & Perf | MSBuild custom configs, PowerShell scripts, unsafe code (intentional), tiered JIT disabled (intentional) |

Note: BEPU Physics is built from modified source — not the NuGet package. Unsafe code and disabled tiered compilation are deliberate performance settings, not oversights.

## Circuit canvas animation

The `#hero` background is drawn by a `requestAnimationFrame` loop on a `<canvas id="circuit-canvas">`. It generates a grid of nodes with slight random offsets, then draws L-shaped (Manhattan-routed) traces between random node pairs. A pulsing dot travels along each trace. The canvas resizes on window resize and rebuilds the node grid. Source is in the first `<script>` block at the bottom of `<body>`.

## IntersectionObserver nav highlight

The second `<script>` block at the bottom uses `IntersectionObserver` with `rootMargin: '-40% 0px -55% 0px'` to highlight the active nav link as the user scrolls. It sets `style.color` directly on `<a>` elements.

## Coding conventions

- No em dashes (`—`). Use `&mdash;` in HTML or ` -- ` in plain text.
- Expand acronyms on first use within any new content block. Examples already in the file: HLSL (High Level Shader Language), NAND (Not-AND), ALU (Arithmetic Logic Unit), CPU (Central Processing Unit), IP (Intellectual Property).
- C# .NET and HLSL are the primary technology identifiers for Etienne. Use these precisely.
- Keep the monolithic single-file structure unless told otherwise.
- Prefer editing tokens or adding new CSS classes over inline styles.

## Agent usage notes

- Default technology assumptions for any code task: **C# and .NET**. Do not suggest Java, Python, or other stacks unless explicitly requested.
- Architecture references should assume familiarity with microservices, DDD, and Azure-native patterns.
- Game development context: indie, solo dev, C# with MonoGame. Do not assume Unity or Unreal without explicit confirmation.
- Current primary project: Hard Chip (CMOS transistor-level circuit puzzle game on Steam). Resume predates this project; treat resume as historical background, not current work scope.
- The 2022 resume PDF is a historical baseline. Skills and tools have expanded since. Do not treat it as a ceiling.
- Contact: contact@etiennelorthoy.com
