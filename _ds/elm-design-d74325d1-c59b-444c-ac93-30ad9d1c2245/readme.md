# Elm Design System

Elm (elm.sa) is a Saudi digital solutions company focused on digital transformation, innovation, and trusted government and enterprise solutions. Vision: to be the leading digital enabler for government entities and the business sector in Saudi Arabia and the wider region. Mission: to nurture people's ability to dream together and make their aspirations of prosperity and progress a reality — innovating to empower communities and streamline life. The brand concept rests on three pillars: Imagination, Technology, and Human Inspiration, expressed visually through an isometric geometric grid derived from the logo mark.

## Sources
- `uploads/elm logo-01 (1).svg` — primary logomark (uncolored master outline; fill classes were empty in the source file, colored per the `.st5`/decoupled usage seen elsewhere in guideline — treated as Oxford Blue on light backgrounds)
- `uploads/Elm_Brand_Guideline_V2_compressed 1.pdf` — 168-page official brand guidelines (2024), the primary source for color, type, logo, iconography, illustration, and grid rules. Full extracted text saved to `scraps/brand_guideline_text.txt` for reference.
- `uploads/Allicon (3).pptx` — a PowerPoint icon showcase confirming "elm Light"/"elm" font family naming and icon grouping.
- `uploads/Graphic elements PNG (1)/` and `uploads/Graphic elements SVG/` — 22 isometric line-art shapes (the brand's geometric motif), copied to `assets/illustrations/`.
- `uploads/icons (2)/` — 133 line icons, copied to `assets/icons/`.
- `uploads/elm Font/` — the "Elm" typeface family (Extralight/Light/Regular/Medium/Bold TTFs), copied to `assets/fonts/`.
- Not attached / not accessible this run: `Elm Presentation AR (12).pptx` and `elm Covers Library (2).pptx` (mentioned in the brief but not present in uploads) — deck templates below are built from the brand guideline's visual system instead of these actual decks. If you have them, attach and I'll align the slide templates precisely.

## Content fundamentals
- Tone: professional, aspirational, nation-scale ("our nation's ambition and growth"), but plain — short declarative sentences, no jargon, no emoji.
- First-person plural voice ("we dream, we imagine, we empathize, we inspire, we transform") paired with second-person mission framing ("nurture people's ability to dream together").
- Headlines are short verb-forward phrases in sentence case ("We pave the way for meaningful growth", "Meaningful growth"). Body copy is calm, plain sentence case, no exclamation marks.
- Bilingual by design: Arabic and English coexist; Latin text is left-aligned, Arabic is right-aligned, each to the same layout grid — never centered as a workaround.
- The guideline explicitly leaves "Tone and Personality" as "Depends on the company policy to be determined later" — so no fixed adjective list is prescribed beyond the mission/vision language above; default to measured, confident, non-hyperbolic executive tone.
- No emoji anywhere in source materials.

## Visual foundations
- **Color**: primary palette is Oxford Blue `#051D49` (dominant, corporate weight), True Blue `#0071CE`, Vivid Cerulean `#00A1E0`, Grape `#763CBC`, Bright Lavender `#CC8BDB`, Portland Orange `#FF5D36`, Atomic Tangerine `#FFA168`. The guideline shows color proportion diagrams weighting Oxford Blue heaviest, with one or two accent hues per composition — never using all seven at once. A separate, wider chart/graph-only palette exists (`--color-chart-*` tokens) and must never be used outside data visualization. Icon/line-art strokes use a near-black navy ink `#131A42` distinct from Oxford Blue.
- **Type**: single typeface family "Elm" (Extralight/Light/Regular/Medium/Bold) for both Latin and Arabic. Headlines/titles use Bold, subheadlines Medium, intro/body Regular–Light, captions Medium. Medium+ weights are reserved for larger sizes ("too bold for small body text"); body text stays Light/Regular. Sentence case throughout, no ALL CAPS headlines.
- **Layout**: grid-driven block alignment — Latin blocks left-aligned, Arabic right-aligned, spacing between blocks set by the grid (guideline shows a 1x/2x baseline spacing example). RTL and LTR layouts must mirror, not just re-align text.
- **Iconography**: stroke-only line icons (no fill), ~3–3.5px stroke weight at a roughly 130×125 viewbox, rounded miter joins, single ink color (`#131A42`/near-navy). Never mix filled and stroked icon styles.
- **Illustration / motif**: the entire brand system is built on an isometric grid of parallelogram/hexagon shapes extruded from the logo's own geometry ("a theme concept derived from the original logo's geometric shape"). These shapes appear as thin colored line-art (see `assets/illustrations/`), never as solid-filled decorative blobs, and can be tiled/expanded across a layout from left, right or top perspectives — but must stay on the same isometric grid (the guideline explicitly shows "misusage" examples of shapes breaking grid alignment).
- **Photography**: people-and-culture photography with a duotone treatment (guideline calls out Photoshop duotone effects) — cool, Oxford-Blue-tinted duotone over black-and-white source photography, not full color.
- **Charts/graphs**: intentionally use a *separate* muted palette (never brand colors) for maximum legibility and to avoid implying brand meaning in data.
- **Motion**: not specified in the guideline (a static print-first system). This design system applies a restrained standard: short (120–200ms) ease-standard fades/transitions only — no bounce, no dramatic motion — consistent with the brand's measured tone.
- **Corner radii / shadows / cards**: not explicitly specified for digital UI in the guideline (it is print/brand-forward, not a UI kit). This design system defines small, restrained tokens (4–12px radii, soft low-opacity navy shadows) to extend the brand into digital surfaces conservatively — flag if you'd like these tuned once real product UI is available.

## Iconography
- Source icon set: 133 stroke-only SVG line icons in `assets/icons/` (from `icons (2)/`), single-color `#131A42` stroke, no fill — this is the brand's actual icon system, not a substitute.
- Geometric isometric shapes (not icons, but a recurring brand motif) are in `assets/illustrations/svg/` and `/png/` — 22 line-art assets in accent colors (orange, blue, purple) tracing the logo's parallelogram geometry.
- No icon font, no emoji, no unicode-glyph icons used anywhere in source material.

## Index
- `styles.css` — root stylesheet, imports `tokens/*.css` (colors, typography, spacing, fonts/@font-face).
- `tokens/` — colors.css, typography.css, spacing.css, fonts.css.
- `assets/` — `logo.svg`, `fonts/` (Elm TTFs), `icons/` (133 line icons), `illustrations/svg` + `/png` (22 isometric motif shapes).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand, Iconography groups in the Design System tab).
- `components/` — standard set (the guideline defines brand foundations, not a UI kit, so this is an intentional addition sized to typical enterprise/executive product needs):
  - `forms/`: Button, IconButton, Input, Select, Checkbox, Radio, Switch
  - `feedback/`: Badge, Tag, Tooltip, Toast, Dialog
  - `layout/`: Card
  - `navigation/`: Tabs
- `templates/elm-deck/` — a slide-deck starting template (title, section, content, quote, comparison, closing) styled from the brand guideline's grid/color/type system.
- `SKILL.md` — portable skill file for use in Claude Code or other agents.

## Caveats / asks
- Two decks referenced in the brief (`Elm Presentation AR (12).pptx`, `elm Covers Library (2).pptx`) were not present in uploads — please attach them if you'd like slide templates matched to your actual deck library instead of derived from the guideline.
- The logo SVG (`assets/logo.svg`) ships with empty CSS-class fills (`.st0`–`.st6` with no color rules) — I've applied Oxford Blue/brand colors via an external stylesheet wrapper where used; if you have a pre-colored master logo file, send it over for pixel-exact colors.
- UI-specific tokens (radii, shadows, motion) aren't in the print-focused brand guideline — I extended conservatively; flag anything that should be tuned once real product screens exist.
