# ppt-artisan — Complete Skill Architecture

> A production-grade Claude Code skill for creating stunning, presentation-quality PowerPoint decks programmatically via `python-pptx`.

---

## 1. Skill Directory Structure

```
~/.claude/skills/ppt-artisan/
├── SKILL.md                          # Core skill file (progressive disclosure)
├── README.md                         # Human-readable overview
├── resources/
│   ├── design_system.md              # Color, typography, spacing reference
│   ├── slide_type_catalog.md         # Every slide type with layout specs
│   └── prompt_library.md             # Optimized Claude prompts per slide type
├── scripts/
│   ├── __init__.py                   # Package init
│   ├── core.py                       # Presentation, Slide, Shape wrappers
│   ├── design_system.py              # Color palettes, typography, spacing grid
│   ├── slide_factory.py              # Slide type builders (title, content, chart, etc.)
│   ├── chart_engine.py               # Chart creation + styling (bar, line, pie, combo)
│   ├── brand_extractor.py            # Extract brand DNA from any .pptx or image
│   ├── effects.py                    # Shadows, glows, gradients via XML injection
│   ├── template_engine.py            # Apply/load professional templates
│   ├── layout_engine.py             # Grid system, alignment, whitespace management
│   ├── validator.py                  # Design critique + quality scoring
│   ├── exporter.py                   # Save, optimize, export to PDF
│   └── utils.py                      # Shared helpers (color math, unit conversion)
├── templates/
│   ├── consulting_default.pptx       # McKinsey-style clean consulting deck
│   ├── startup_pitch.pptx            # Modern startup pitch template
│   ├── corporate_report.pptx         # Enterprise quarterly report
│   ├── creative_portfolio.pptx       # Design-forward portfolio
│   ├── academic_research.pptx        # Research/thesis presentation
│   └── minimal_dark.pptx             # Dark-mode minimal template
├── palettes/
│   ├── neutrals.json                 # Grays, whites, blacks
│   ├── corporate.json                # Blue-heavy corporate palettes
│   ├── startup.json                  # Vibrant tech palettes
│   ├── creative.json                 # Bold experimental palettes
│   └── academic.json                 # Muted scholarly palettes
├── examples/
│   ├── quick_start.py                # 10-slide deck from one sentence
│   ├── brand_deck.py                 # Brand DNA extraction + deck
│   ├── data_dashboard.py             # CSV → chart dashboard
│   └── custom_effects.py             # Shadows, gradients, glows
└── tests/
    ├── test_core.py
    ├── test_slide_factory.py
    ├── test_chart_engine.py
    ├── test_brand_extractor.py
    └── test_validator.py
```

---

## 2. SKILL.md — Complete Skill File

```yaml
---
name: "PPT Artisan"
description: "Create stunning, presentation-quality PowerPoint decks programmatically using python-pptx. Use when the user wants to generate .pptx files, build slide decks, create presentations, design pitch decks, quarterly reports, data dashboards, or any visual presentation. Triggers on keywords: pptx, powerpoint, presentation, slides, deck, pitch deck, slide deck, quarterly report, data dashboard, brand deck, KPI dashboard, timeline slide, team slide, comparison slide."
---

# PPT Artisan — Programmatic Presentation Design

You are a presentation design expert who creates stunning, consulting-grade PowerPoint decks using python-pptx. You combine rigorous design principles (60-30-10 color rule, rule of thirds, visual hierarchy, whitespace as design element) with programmatic precision to produce decks that look like they were designed by a top-tier agency.

## Level 1 — Overview

### What This Skill Does

Generates complete, production-ready .pptx files with:
- **10+ slide types**: Title, content, section divider, comparison, timeline, data/chart, team, quote, image-heavy, KPI dashboard
- **Design system**: Consistent colors, typography (Inter/Poppins/Montserrat), spacing grid, shadow/effect presets
- **Brand DNA extraction**: Auto-extract colors/fonts from any .pptx or image file
- **Data-to-stunning charts**: Transform CSV/JSON into beautiful bar, line, pie, combo, waterfall charts
- **AI design critique**: Auto-evaluate and improve slide design with scoring
- **Template engine**: Apply pro design templates with one command

### Why This Skill Is Irresistible

1. **One-line deck generation** — "Create a 10-slide startup pitch deck about AI-powered healthcare" → full deck in 30 seconds
2. **Brand DNA** — Feed it any .pptx, it extracts your brand colors, fonts, spacing → applies to new deck
3. **Data-to-stunning** — Drop a CSV, get a KPI dashboard with trend arrows, sparklines, conditional formatting
4. **Template wizard** — Pick "consulting", "startup", "corporate" → pro layout applied automatically
5. **AI design critique** — Scores your deck on visual hierarchy, color harmony, whitespace, alignment → suggests fixes

### Core Library

`python-pptx` — the de facto Python library for programmatic PowerPoint creation. All coordinates in EMUs (English Metric Units) or Inches/Pt helpers.

**Key limitations to know:**
- No animations/transitions (by design — this skill focuses on static content quality)
- Shadow/glow effects require XML injection (handled by `effects.py`)
- Theme color inheritance is imperfect — we use explicit RGB for brand-exact colors
- Charts are native PowerPoint charts (editable by user after generation)

## Level 2 — Quick Start

### Prerequisites

```bash
pip install python-pptx lxml Pillow
```

### Generate a Deck in 30 Seconds

```python
from ppt_artisan.core import Presentation
from ppt_artisan.slide_factory import SlideFactory

# One-liner: full 10-slide deck
prs = Presentation()

# Add slides using the factory
factory = SlideFactory(prs)

# Title slide
factory.add_title_slide(
    title="AI-Powered Healthcare",
    subtitle="Revolutionizing Patient Outcomes Through Machine Learning",
    author="Nikhil Sai Kilani",
    date="August 2026"
)

# Content slide
factory.add_content_slide(
    title="The Problem",
    bullets=[
        "Medical errors are the 3rd leading cause of death in the US",
        "Diagnostic delays cost $46B annually",
        "Radiologist burnout leads to 30% error rates in high-volume settings"
    ],
    layout="left-accent"  # Professional left-bar accent layout
)

# Chart slide
factory.add_chart_slide(
    title="Market Growth",
    chart_type="bar",
    data={"2024": 12.5, "2025": 18.2, "2026": 27.8, "2027": 41.3},
    y_label="Revenue ($B)",
    color_scheme="brand_primary"
)

# Save
prs.save("ai_healthcare_pitch.pptx")
```

### Apply a Template

```python
from ppt_artisan.template_engine import TemplateEngine

engine = TemplateEngine()
prs = engine.from_template("consulting_default")
factory = SlideFactory(prs)
# ... add slides ...
prs.save("quarterly_report.pptx")
```

### Extract Brand DNA

```python
from ppt_artisan.brand_extractor import BrandExtractor

extractor = BrandExtractor()
brand = extractor.from_pptx("existing_company_deck.pptx")
# brand.colors → {"primary": "#1A365D", "secondary": "#E53E3E", ...}
# brand.fonts → {"heading": "Montserrat", "body": "Inter", ...}

# Apply to new deck
engine = TemplateEngine(brand=brand)
```

## Level 3 — Detailed Slide Type Guide

### 3.1 Title Slide

**Purpose:** First impression. Sets tone and professionalism.

**Layout Pattern:**
```
┌─────────────────────────────────────┐
│                                     │
│         [SUBTITLE / TAGLINE]        │  ← Small caps, muted color
│                                     │
│     ═══════════════════════════     │  ← Accent line (optional)
│                                     │
│          MAIN TITLE                 │  ← 40-44pt, bold, dark
│          ─────────────              │  ← Underline accent
│                                     │
│        Supporting text              │  ← 18-20pt, regular
│                                     │
│                                     │
│  Author Name    │    Date           │  ← Bottom bar
└─────────────────────────────────────┘
```

**Code Pattern:**
```python
factory.add_title_slide(
    title="Main Title Here",
    subtitle="Supporting tagline or description",
    author="Author Name",
    date="August 2026",
    style="modern"  # Options: modern, minimal, bold, corporate
)
```

**Design Rules:**
- Title: 40-44pt, Montserrat Bold or Inter Bold, dark (#1A1A2E or brand primary)
- Subtitle: 18-22pt, Inter Regular, muted (#6B7280)
- Accent line: 2pt weight, brand secondary color, 2 inches wide
- Bottom bar: Full width, brand primary, 0.4 inches tall
- Whitespace: Minimum 1.5 inches top margin

### 3.2 Content Slide

**Purpose:** Core information delivery. One idea per slide.

**Layout Patterns:**

**Pattern A — Left Accent Bar:**
```
┌─────────────────────────────────────┐
│ ▌ SLIDE TITLE                       │  ← Left accent bar + title
│                                     │
│   • First key point that is clear   │  ← 20pt Inter, 6 words/bullet
│     and concise for the audience    │
│                                     │
│   • Second point follows same       │
│     formatting and length rules     │
│                                     │
│   • Third point is the maximum      │
│     recommended per slide           │
│                                     │
│                                     │
│ ──────────────────────────────────  │  ← Thin bottom rule
│ Page 5                    Company   │  ← Footer
└─────────────────────────────────────┘
```

**Pattern B — Two Column:**
```
┌─────────────────────────────────────┐
│ SLIDE TITLE                         │
│ ────────────────────                │
│                                     │
│ ┌─────────────┐ ┌─────────────┐    │
│ │  Left col   │ │  Right col  │    │
│ │  • Point 1  │ │  • Point 1  │    │
│ │  • Point 2  │ │  • Point 2  │    │
│ │  • Point 3  │ │  • Point 3  │    │
│ └─────────────┘ └─────────────┘    │
│                                     │
│ Key takeaway or insight here        │  ← Bold takeaway box
└─────────────────────────────────────┘
```

**Code Pattern:**
```python
factory.add_content_slide(
    title="The Problem",
    bullets=["Point 1", "Point 2", "Point 3"],
    layout="left-accent",  # left-accent, two-column, centered, card
    key_takeaway="This is the critical insight",  # Optional bottom box
    page_number=5
)
```

**Design Rules:**
- One idea per slide. Maximum 6 bullets. Maximum 6 words per bullet.
- Title: 32-36pt, bold, top-left aligned
- Bullets: 20pt Inter Regular, left-aligned (never center body text)
- Bullet color: Dark gray (#374151) for body, brand primary for accent
- Minimum 0.5 inches between bullet groups
- Left margin: 0.75 inches minimum

### 3.3 Section Divider Slide

**Purpose:** Break the deck into logical sections. Visual reset.

**Layout Pattern:**
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│                                     │
│      SECTION 01                     │  ← Small label, muted
│      ════════════════════════       │  ← Accent line
│                                     │
│      Market Analysis                │  ← Large section title
│                                     │
│      Brief context or transition    │  ← 18pt subtitle
│                                     │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

**Code Pattern:**
```python
factory.add_section_slide(
    number="01",
    title="Market Analysis",
    subtitle="Understanding the competitive landscape",
    accent_color="brand_secondary"  # Override accent if needed
)
```

**Design Rules:**
- Section number: 16pt, uppercase, letter-spaced, muted color
- Title: 44-48pt, bold, centered or left-aligned
- Background: Brand primary or dark variant
- Text color: White on dark backgrounds
- No bullets, no data — pure visual break

### 3.4 Comparison Slide

**Purpose:** Side-by-side comparison of 2-4 options.

**Layout Pattern:**
```
┌─────────────────────────────────────┐
│ COMPARISON TITLE                    │
│ ─────────────────────               │
│                                     │
│ ┌──────────┐ ┌──────────┐ ┌──────┐ │
│ │  OPTION  │ │  OPTION  │ │ OPT  │ │
│ │    A     │ │    B     │ │  C   │ │
│ │          │ │          │ │      │ │
│ │ ✓ Free   │ │ ✓ Cheap  │ │ ✓ Pro│ │
│ │ ✗ Slow   │ │ ✗ Basic  │ │ ✗ $$$│ │
│ │ ✗ Limit  │ │ ✗ No API │ │ ✗ Com│ │
│ └──────────┘ └──────────┘ └──────┘ │
│                                     │
│ Recommended: Option B               │  ← Highlighted recommendation
└─────────────────────────────────────┘
```

**Code Pattern:**
```python
factory.add_comparison_slide(
    title="Platform Selection",
    options=[
        {"name": "Free Tier", "pros": ["Free", "Easy setup"], "cons": ["Slow", "Limited"]},
        {"name": "Pro Plan", "pros": ["Fast", "Full API"], "cons": ["$99/mo"]},
        {"name": "Enterprise", "pros": ["Custom", "Support"], "cons": ["$500+/mo"]}
    ],
    recommended="Pro Plan",
    layout="three-column"  # two-column, three-column, four-column
)
```

**Design Rules:**
- Column widths: Equal distribution with gutters (0.3 inches)
- Header row: Brand primary background, white text, bold
- Pro items: Green (#059669) with ✓
- Cons items: Red (#DC2626) with ✗
- Recommended: Highlighted with accent border or background tint
- Max 4 options per slide

### 3.5 Timeline Slide

**Purpose:** Show progression, milestones, or historical sequence.

**Layout Pattern:**
```
┌─────────────────────────────────────┐
│ TIMELINE TITLE                      │
│                                     │
│  ●────────●────────●────────●─────  │  ← Horizontal timeline
│  Q1 2025  Q2 2025  Q3 2025  Q4     │
│  Launch   Scale    Expand   IPO     │
│  MVP      to 1K    to 5    Ready   │
│           users    markets          │
└─────────────────────────────────────┘
```

**Code Pattern:**
```python
factory.add_timeline_slide(
    title="Product Roadmap",
    milestones=[
        {"date": "Q1 2025", "label": "MVP Launch", "detail": "Core features shipped"},
        {"date": "Q2 2025", "label": "Scale", "detail": "1K active users"},
        {"date": "Q3 2025", "label": "Expand", "detail": "5 new markets"},
        {"date": "Q4 2025", "label": "IPO Ready", "detail": "Series C closed"}
    ],
    orientation="horizontal",  # horizontal, vertical
    style="minimal"  # minimal, detailed, milestone-markers
)
```

**Design Rules:**
- Timeline line: 2pt, brand primary
- Milestone dots: 12pt circles, brand secondary
- Date labels: 14pt, uppercase, muted
- Event labels: 18pt, bold, dark
- Detail text: 14pt, regular, light gray
- Maximum 6 milestones per horizontal timeline

### 3.6 Data/Chart Slide

**Purpose:** Visualize data with native PowerPoint charts.

**Chart Type Selection Guide:**
| Data Type | Chart Type | Use Case |
|-----------|------------|----------|
| Comparison | Bar/Column | Revenue by product, market share |
| Trend over time | Line | Growth trajectory, quarterly trends |
| Parts of whole | Pie/Doughnut | Market composition, budget allocation |
| Distribution | Scatter | Correlation analysis |
| Composition + trend | Combo | Revenue (bar) + growth rate (line) |
| Composition | Stacked bar | Category breakdown over time |
| Hierarchy | Treemap | Portfolio allocation |
| Process | Waterfall | Financial build-up/bridge |

**Code Pattern:**
```python
factory.add_chart_slide(
    title="Revenue Growth Trajectory",
    chart_type="bar",
    data={
        "2023": [12.5, 18.2, 24.1, 31.7],
        "2024": [19.8, 27.3, 36.5, 48.2],
        "2025": [28.1, 39.6, 52.8, 71.4]
    },
    categories=["Q1", "Q2", "Q3", "Q4"],
    y_label="Revenue ($M)",
    colors=["#1A365D", "#2B6CB0", "#63B3ED"],
    show_data_labels=True,
    trend_line=True  # Optional trend overlay
)
```

**Advanced Chart Patterns:**
```python
# Waterfall chart (financial bridge)
factory.add_waterfall_chart(
    title="EBITDA Bridge",
    items=[
        {"label": "Starting EBITDA", "value": 100, "type": "total"},
        {"label": "Revenue Growth", "value": 45, "type": "positive"},
        {"label": "Cost Increases", "value": -20, "type": "negative"},
        {"label": "Efficiency Gains", "value": 15, "type": "positive"},
        {"label": "Ending EBITDA", "value": 140, "type": "total"}
    ]
)

# KPI dashboard with sparklines
factory.add_kpi_dashboard(
    title="Key Performance Indicators",
    kpis=[
        {"label": "Revenue", "value": "$4.2M", "change": "+12%", "trend": "up"},
        {"label": "Users", "value": "48,200", "change": "+8%", "trend": "up"},
        {"label": "Churn", "value": "2.1%", "change": "-0.3%", "trend": "down"},
        {"label": "NPS", "value": "72", "change": "+5", "trend": "up"}
    ]
)
```

**Design Rules:**
- Chart title: 24pt, bold, top-left
- Axis labels: 12pt, muted
- Data labels: 10pt, inside bars when possible
- Colors: Maximum 5 per chart, use brand palette
- Gridlines: Light gray (#E5E7EB), dashed, minimal
- No 3D effects (distorts data perception)
- Legend: Bottom or right, 12pt

### 3.7 Team Slide

**Purpose:** Introduce team members with photos and roles.

**Layout Pattern:**
```
┌─────────────────────────────────────┐
│ OUR TEAM                            │
│                                     │
│  ┌─────┐  ┌─────┐  ┌─────┐        │
│  │ 📷  │  │ 📷  │  │ 📷  │        │
│  │Photo│  │Photo│  │Photo│        │
│  └─────┘  └─────┘  └─────┘        │
│  Name      Name      Name          │
│  Role      Role      Role          │
│  Bio       Bio       Bio           │
│                                     │
└─────────────────────────────────────┘
```

**Code Pattern:**
```python
factory.add_team_slide(
    title="Leadership Team",
    members=[
        {
            "name": "Dr. Sarah Chen",
            "role": "CEO & Co-Founder",
            "bio": "15 years in healthcare AI, ex-Google Health",
            "photo_path": "photos/sarah.jpg"  # Optional
        },
        {
            "name": "James Park",
            "role": "CTO",
            "bio": "Former ML lead at Stanford Medicine",
            "photo_path": "photos/james.jpg"
        }
    ],
    layout="grid-3",  # grid-2, grid-3, grid-4, list
    show_photos=True
)
```

**Design Rules:**
- Photo: Circular crop, 1.5 inches diameter, subtle shadow
- Name: 20pt, bold, dark
- Role: 14pt, brand primary color
- Bio: 12pt, muted gray, max 2 lines
- Grid spacing: 0.5 inches between columns
- Maximum 8 team members per slide (split if more)

### 3.8 Quote Slide

**Purpose:** Highlight a key insight, testimonial, or memorable statement.

**Layout Pattern:**
```
┌─────────────────────────────────────┐
│                                     │
│         "                           │
│                                     │
│    The best way to predict the      │
│    future is to invent it.          │
│                                     │
│         "                           │
│                                     │
│    ── Alan Kay                      │
│       Computer Scientist            │
│                                     │
└─────────────────────────────────────┘
```

**Code Pattern:**
```python
factory.add_quote_slide(
    quote="The best way to predict the future is to invent it.",
    author="Alan Kay",
    role="Computer Scientist",
    style="centered",  # centered, left-accent, background-image
    background_color="brand_dark"  # Optional dark background
)
```

**Design Rules:**
- Quote marks: 72pt, brand secondary, decorative
- Quote text: 28-32pt, Inter Light or italic, centered
- Author: 18pt, bold, brand primary
- Role: 14pt, muted
- Maximum 2 sentences per quote
- Generous whitespace (minimum 2 inches top/bottom)

### 3.9 Image-Heavy Slide

**Purpose:** Showcase visuals — product screenshots, photos, architecture diagrams.

**Layout Patterns:**

**Full-bleed Image:**
```
┌─────────────────────────────────────┐
│                                     │
│      ┌───────────────────────┐      │
│      │                       │      │
│      │    FULL IMAGE         │      │
│      │                       │      │
│      └───────────────────────┘      │
│                                     │
│  Caption text here                  │
└─────────────────────────────────────┘
```

**Image + Text Split:**
```
┌─────────────────────────────────────┐
│ SLIDE TITLE                         │
│ ─────────────────                   │
│                                     │
│ ┌──────────────┐  Key points:      │
│ │              │  • Point 1        │
│ │   IMAGE      │  • Point 2        │
│ │              │  • Point 3        │
│ └──────────────┘                    │
└─────────────────────────────────────┘
```

**Code Pattern:**
```python
factory.add_image_slide(
    title="Product Architecture",
    image_path="images/architecture.png",
    layout="split-right",  # full-bleed, split-left, split-right, grid
    caption="High-level system architecture",
    bullet_points=["Microservices on K8s", "Event-driven CQRS", "99.99% uptime"]
)
```

**Design Rules:**
- Image resolution: Minimum 150 DPI at display size
- Rounded corners: 0.1 inches radius (via XML)
- Shadow: Subtle outer shadow, 3pt distance, 4pt blur
- Caption: 12pt, italic, centered below image
- Split ratio: 50/50 or 60/40 (image/text)

### 3.10 KPI Dashboard Slide

**Purpose:** Executive summary with key metrics and mini-visualizations.

**Layout Pattern:**
```
┌─────────────────────────────────────┐
│ EXECUTIVE DASHBOARD                 │
│                                     │
│ ┌────────┐ ┌────────┐ ┌────────┐  │
│ │ $4.2M  │ │ 48.2K  │ │  2.1%  │  │
│ │Revenue │ │ Users  │ │ Churn  │  │
│ │ ▲ +12% │ │ ▲ +8%  │ │ ▼ -0.3%│  │
│ │ ▁▂▃▄▅▆│ │ ▁▂▃▅▆▇│ │ ▇▆▅▄▃▂│  │
│ └────────┘ └────────┘ └────────┘  │
│                                     │
│ ┌────────┐ ┌────────┐ ┌────────┐  │
│ │   72   │ │  4.8   │ │  94%   │  │
│ │  NPS   │ │Rating  │ │Retention│  │
│ │ ▲ +5   │ │ ▲ +0.2 │ │ ▲ +2%  │  │
│ │ ▁▂▃▄▅▆│ │ ▁▁▂▃▃▄▅│ │ ▁▂▃▅▆▇│  │
│ └────────┘ └────────┘ └────────┘  │
└─────────────────────────────────────┘
```

**Code Pattern:**
```python
factory.add_kpi_dashboard(
    title="Executive Dashboard",
    kpis=[
        {"label": "Revenue", "value": "$4.2M", "change": "+12%", "trend": [2.1, 2.8, 3.5, 4.2], "format": "currency"},
        {"label": "Active Users", "value": "48,200", "change": "+8%", "trend": [32000, 38000, 44000, 48200], "format": "number"},
        {"label": "Churn Rate", "value": "2.1%", "change": "-0.3%", "trend": [3.2, 2.8, 2.4, 2.1], "format": "percent", "invert": True},
        {"label": "NPS Score", "value": "72", "change": "+5", "trend": [58, 62, 67, 72], "format": "number"},
        {"label": "Avg Rating", "value": "4.8", "change": "+0.2", "trend": [4.2, 4.5, 4.6, 4.8], "format": "decimal"},
        {"label": "Retention", "value": "94%", "change": "+2%", "trend": [88, 90, 92, 94], "format": "percent"}
    ],
    columns=3,  # 2, 3, 4
    show_sparklines=True
)
```

**Design Rules:**
- KPI card: Rounded rectangle, subtle shadow, white background
- Value: 36pt, bold, dark
- Label: 14pt, muted, uppercase
- Change indicator: Green for positive, Red for negative (with ▲/▼ arrows)
- Sparkline: 1pt stroke, brand primary color, 0.5 inches tall
- Card spacing: 0.3 inches gutters

## Level 4 — Advanced Techniques

### 4.1 Design System Integration

```python
from ppt_artisan.design_system import DesignSystem

ds = DesignSystem.from_brand(
    primary="#1A365D",
    secondary="#E53E3E",
    accent="#38A169",
    fonts={"heading": "Montserrat", "body": "Inter"}
)

# Apply globally to presentation
prs = Presentation(design_system=ds)
```

### 4.2 Custom Effects via XML Injection

```python
from ppt_artisan.effects import ShapeEffects

# Add shadow
ShapeEffects.add_shadow(
    shape,
    distance_pt=5,
    blur_pt=8,
    color="#000000",
    transparency=60,
    angle=45
)

# Add gradient fill
ShapeEffects.add_gradient(
    shape,
    colors=[("#1A365D", 0), (#2B6CB0", 50), (#63B3ED", 100)],
    angle=135
)

# Add glow
ShapeEffects.add_glow(
    shape,
    color="#38A169",
    radius_pt=10,
    transparency=40
)
```

### 4.3 Brand DNA Auto-Extraction

```python
from ppt_artisan.brand_extractor import BrandExtractor

extractor = BrandExtractor()

# From existing PowerPoint
brand = extractor.from_pptx("company_deck.pptx")
print(brand.colors)      # {"primary": "#1A365D", "secondary": "#E53E3E", ...}
print(brand.fonts)        # {"heading": "Montserrat", "body": "Inter", ...}
print(brand.color_ratio)  # {"primary": 60, "secondary": 30, "accent": 10}

# From image/logo
brand = extractor.from_image("logo.png")
```

### 4.4 AI Design Critique

```python
from ppt_artisan.validator import DesignValidator

validator = DesignValidator()
report = validator.evaluate(prs)

# report.score → 0-100 overall quality score
# report.issues → [{"type": "color_harmony", "severity": "high", "slide": 3, "message": "..."}]
# report.suggestions → ["Increase title font size to 36pt on slide 5", ...]

# Auto-fix issues
fixed_prs = validator.auto_fix(prs, report)
```

**Scoring Criteria:**
| Dimension | Weight | Description |
|-----------|--------|-------------|
| Visual Hierarchy | 25% | Title vs body size ratio, weight contrast |
| Color Harmony | 20% | 60-30-10 rule adherence, contrast ratios |
| Whitespace | 20% | Margin consistency, element spacing |
| Typography | 15% | Font consistency, size scales, line spacing |
| Alignment | 10% | Grid adherence, element alignment |
| Content Density | 10% | Bullet count, words per slide |

### 4.5 Batch Generation

```python
from ppt_artisan.core import Presentation
from ppt_artisan.slide_factory import SlideFactory
import csv

# Generate deck from CSV data
prs = Presentation()
factory = SlideFactory(prs)

with open("quarterly_data.csv") as f:
    reader = csv.DictReader(f)
    for row in reader:
        factory.add_content_slide(
            title=row["department"],
            bullets=[row["highlight1"], row["highlight2"], row["highlight3"]],
            layout="left-accent"
        )

prs.save("quarterly_report.pptx")
```

### 4.6 Custom Layout Grid

```python
from ppt_artisan.layout_engine import Grid

# Define 12-column grid
grid = Grid(
    slide_width=Inches(13.333),
    slide_height=Inches(7.5),
    columns=12,
    margin_left=Inches(0.75),
    margin_right=Inches(0.75),
    margin_top=Inches(0.5),
    margin_bottom=Inches(0.5),
    gutter=Inches(0.25)
)

# Place elements on grid
title_box = grid.place(col_start=1, col_end=12, row_start=1, row_end=1)
content_box = grid.place(col_start=1, col_end=8, row_start=2, row_end=5)
image_box = grid.place(col_start=9, col_end=12, row_start=2, row_end=5)
```

---

## 3. Hook System — 5 Irresistible Hooks

### Hook 1: "One-Line Deck Generation"

**Trigger phrase:** "Create a presentation about [topic]"
**What happens:**
1. Parse the sentence for topic, audience, tone
2. Generate slide outline (10 slides)
3. Auto-select template based on tone (corporate/startup/academic)
4. Generate all slides with placeholder content
5. Output: `topic_pitch.pptx` in current directory

**Magic moment:** User says one sentence, gets a complete 10-slide deck with title, content, charts, team slide, and closing.

### Hook 2: "Brand DNA"

**Trigger phrase:** "Match the brand of [file/logo]"
**What happens:**
1. Analyze input .pptx or image
2. Extract dominant colors (K-means clustering on pixel data)
3. Identify fonts from text runs
4. Calculate 60-30-10 color ratio
5. Generate new deck using extracted brand tokens

**Magic moment:** Feed it a competitor's deck, get a deck in your brand style.

### Hook 3: "Data-to-Stunning"

**Trigger phrase:** "Turn this data into slides" / "Visualize [csv/json]"
**What happens:**
1. Parse CSV/JSON data
2. Auto-detect data types (currency, percentage, count)
3. Select optimal chart types per data column
4. Generate KPI dashboard + detail charts
5. Add trend indicators and conditional formatting

**Magic moment:** Raw spreadsheet becomes a 5-slide data story with charts, KPIs, and insights.

### Hook 4: "Template Wizard"

**Trigger phrase:** "Use the consulting template" / "Make it look like McKinsey"
**What happens:**
1. Load pre-built template from `templates/` directory
2. Apply consistent styling (fonts, colors, spacing)
3. Map content to appropriate layout patterns
4. Ensure design system compliance

**Magic moment:** Professional consulting-grade layout applied automatically.

### Hook 5: "AI Design Critique"

**Trigger phrase:** "Review this deck" / "How does this look?"
**What happens:**
1. Analyze every slide against design principles
2. Score on 6 dimensions (visual hierarchy, color, whitespace, typography, alignment, density)
3. Generate report with specific issues and fixes
4. Offer one-click auto-fix

**Magic moment:** Get a professional design audit with actionable fixes, not vague feedback.

---

## 4. Design System Reference

### 4.1 Color Palettes

**60-30-10 Rule:**
- 60% — Dominant (background, large surfaces): White, off-white, or dark
- 30% — Secondary (headers, cards, sections): Brand primary
- 10% — Accent (CTAs, highlights, charts): Brand secondary

**Corporate Palette:**
```json
{
  "primary": "#1A365D",
  "secondary": "#2B6CB0",
  "accent": "#E53E3E",
  "background": "#FFFFFF",
  "surface": "#F7FAFC",
  "text_primary": "#1A202C",
  "text_secondary": "#718096",
  "success": "#38A169",
  "warning": "#D69E2E",
  "error": "#E53E3E"
}
```

**Startup Palette:**
```json
{
  "primary": "#6366F1",
  "secondary": "#8B5CF6",
  "accent": "#F59E0B",
  "background": "#FFFFFF",
  "surface": "#F8FAFC",
  "text_primary": "#0F172A",
  "text_secondary": "#64748B",
  "success": "#10B981",
  "warning": "#F59E0B",
  "error": "#EF4444"
}
```

**Dark Mode:**
```json
{
  "primary": "#818CF8",
  "secondary": "#A78BFA",
  "accent": "#FBBF24",
  "background": "#0F172A",
  "surface": "#1E293B",
  "text_primary": "#F1F5F9",
  "text_secondary": "#94A3B8",
  "success": "#34D399",
  "warning": "#FBBF24",
  "error": "#F87171"
}
```

### 4.2 Typography Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Deck Title | Montserrat | 44pt | Bold | 1.1 |
| Section Title | Montserrat | 40pt | Bold | 1.1 |
| Slide Title | Inter | 32-36pt | Bold | 1.2 |
| Subtitle | Inter | 20-22pt | Regular | 1.3 |
| Body | Inter | 18-20pt | Regular | 1.4 |
| Caption | Inter | 12-14pt | Regular | 1.3 |
| KPI Value | Montserrat | 36pt | Bold | 1.0 |
| KPI Label | Inter | 14pt | Medium | 1.2 |
| Footer | Inter | 10pt | Regular | 1.0 |

### 4.3 Spacing Grid

**Base unit:** 8px (0.083 inches)

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Inline spacing, icon gaps |
| `space-sm` | 8px | Tight element spacing |
| `space-md` | 16px | Standard element spacing |
| `space-lg` | 24px | Section spacing |
| `space-xl` | 32px | Major section breaks |
| `space-2xl` | 48px | Slide margins |
| `space-3xl` | 64px | Title slide breathing room |

**Margins:**
- Slide margins: 0.75 inches (left/right), 0.5 inches (top/bottom)
- Content area: 11.833 x 6.5 inches (16:9 widescreen)
- Safe zone: 0.25 inches from edges

### 4.4 Shadow & Effect Presets

```python
SHADOW_PRESETS = {
    "subtle": {"distance": 2, "blur": 4, "transparency": 80, "angle": 45},
    "card": {"distance": 4, "blur": 8, "transparency": 60, "angle": 45},
    "elevated": {"distance": 8, "blur": 16, "transparency": 40, "angle": 45},
    "dramatic": {"distance": 12, "blur": 24, "transparency": 30, "angle": 45},
    "inner": {"distance": 2, "blur": 4, "transparency": 70, "angle": 45, "inner": True}
}

GLOW_PRESETS = {
    "subtle": {"radius": 4, "transparency": 70},
    "accent": {"radius": 8, "transparency": 50},
    "highlight": {"radius": 12, "transparency": 30}
}
```

---

## 5. Python Scripts — Key Utilities

### 5.1 `core.py` — Presentation Wrapper

```python
from pptx import Presentation as PptxPresentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor

class Presentation:
    def __init__(self, design_system=None, template_path=None):
        if template_path:
            self.prs = PptxPresentation(template_path)
        else:
            self.prs = PptxPresentation()
            self.prs.slide_width = Inches(13.333)
            self.prs.slide_height = Inches(7.5)
        self.design_system = design_system

    def add_slide(self, layout_index=6):
        """Add slide with specified layout (6=blank default)."""
        return self.prs.slides.add_slide(self.prs.slide_layouts[layout_index])

    def save(self, path):
        self.prs.save(path)
```

### 5.2 `effects.py` — XML Shadow/Glow Injection

```python
from lxml import etree
from pptx.oxml.ns import qn

def add_shadow(shape, distance_pt=4, blur_pt=8, color="000000",
               transparency=60, angle=45, inner=False):
    """Inject shadow via DrawingML XML."""
    sp_pr = shape._element.spPr
    effect_lst = sp_pr.find(qn('a:effectLst'))
    if effect_lst is None:
        effect_lst = etree.SubElement(sp_pr, qn('a:effectLst'))

    tag = qn('a:innerShdw') if inner else qn('a:outerShdw')
    shadow = etree.SubElement(effect_lst, tag)
    shadow.set('blurRad', str(int(blur_pt * 12700)))
    shadow.set('dist', str(int(distance_pt * 12700)))
    shadow.set('dir', str(int(angle * 60000)))
    shadow.set('algn', 'tl')
    shadow.set('rotWithShape', '0')

    srgb = etree.SubElement(shadow, qn('a:srgbClr'))
    srgb.set('val', color)
    alpha = etree.SubElement(srgb, qn('a:alpha'))
    alpha.set('val', str(int((100 - transparency) * 1000)))
```

### 5.3 `chart_engine.py` — Chart Builder

```python
from pptx.chart.data import CategoryChartData
from pptx.enum.chart import XL_CHART_TYPE

def add_bar_chart(slide, data, categories, title, y_label,
                  colors=None, show_labels=True):
    """Create styled bar chart."""
    chart_data = CategoryChartData()
    chart_data.categories = categories
    for series_name, values in data.items():
        chart_data.add_series(series_name, values)

    chart_frame = slide.shapes.add_chart(
        XL_CHART_TYPE.COLUMN_CLUSTERED,
        Inches(1), Inches(1.5), Inches(11), Inches(5),
        chart_data
    )
    chart = chart_frame.chart
    chart.has_legend = len(data) > 1

    # Style series colors
    if colors:
        for i, series in enumerate(chart.series):
            fill = series.format.fill
            fill.solid()
            fill.fore_color.rgb = RGBColor.from_string(colors[i % len(colors)])

    return chart
```

### 5.4 `validator.py` — Design Critique Engine

```python
class DesignValidator:
    def evaluate(self, prs):
        report = {"score": 0, "issues": [], "suggestions": []}

        for i, slide in enumerate(prs.prs.slides):
            # Check title size
            # Check bullet count
            # Check color contrast
            # Check alignment consistency
            # Check whitespace ratios
            pass

        report["score"] = self._calculate_score(report["issues"])
        return report

    def _calculate_score(self, issues):
        penalties = {"critical": 15, "high": 10, "medium": 5, "low": 2}
        total_penalty = sum(penalties.get(i["severity"], 0) for i in issues)
        return max(0, 100 - total_penalty)
```

---

## 6. Template Definitions

### 6.1 Consulting Default

```python
CONSULTING_TEMPLATE = {
    "name": "consulting_default",
    "colors": {
        "primary": "#1A365D",
        "secondary": "#2B6CB0",
        "accent": "#E53E3E",
        "background": "#FFFFFF",
        "surface": "#F7FAFC"
    },
    "fonts": {
        "heading": "Montserrat",
        "body": "Inter"
    },
    "title_slide": {
        "background": "#1A365D",
        "title_color": "#FFFFFF",
        "accent_line": "#E53E3E"
    },
    "content_slide": {
        "layout": "left-accent",
        "accent_bar_width": 0.08,
        "title_size": 32,
        "body_size": 20
    },
    "section_slide": {
        "background": "#1A365D",
        "number_color": "#63B3ED",
        "title_color": "#FFFFFF"
    }
}
```

### 6.2 Startup Pitch

```python
STARTUP_TEMPLATE = {
    "name": "startup_pitch",
    "colors": {
        "primary": "#6366F1",
        "secondary": "#8B5CF6",
        "accent": "#F59E0B",
        "background": "#FFFFFF",
        "surface": "#F8FAFC"
    },
    "fonts": {
        "heading": "Poppins",
        "body": "Inter"
    },
    "title_slide": {
        "background": "gradient:#6366F1:#8B5CF6",
        "title_color": "#FFFFFF"
    },
    "content_slide": {
        "layout": "card",
        "card_radius": 0.15,
        "card_shadow": "card"
    }
}
```

---

## 7. Prompt Library — Claude Prompts per Slide Type

### Title Slide Prompt
```
Create a compelling title slide for a presentation about [TOPIC].
The title should be [TONE: bold/concise/dramatic] and the subtitle
should provide context for [AUDIENCE]. Include presenter name and date.
```

### Content Slide Prompt
```
Distill this content into 3-5 concise bullets for a presentation slide.
Each bullet must be maximum 6 words. Focus on the single key insight.
Content: [RAW_CONTENT]
```

### Chart Slide Prompt
```
Given this data: [DATA], recommend the best chart type and create a
visualization. Explain why this chart type best represents the data story.
```

### KPI Dashboard Prompt
```
Create a 6-KPI executive dashboard for [DOMAIN]. Include metric name,
current value, period-over-period change, and trend direction. Make
the numbers realistic and the trends meaningful.
```

### Quote Slide Prompt
```
Extract the most impactful quote or insight from this content and
format it for a standalone quote slide. Keep it under 2 sentences.
Content: [RAW_CONTENT]
```

### Design Critique Prompt
```
Review this presentation for design quality. Evaluate: visual hierarchy,
color harmony (60-30-10 rule), whitespace usage, typography consistency,
and content density. Provide a score out of 100 and specific fixes.
```

---

## 8. Implementation Notes

### Dependencies
```
python-pptx>=0.6.23
lxml>=4.9.0
Pillow>=9.0.0
```

### python-pptx Gotchas (Handled by This Skill)
1. **No animations** — Focused on static content quality instead
2. **Shadow/glow via XML** — `effects.py` handles DrawingML injection
3. **Theme color inheritance** — We use explicit RGB for brand-exact colors
4. **Chart styling** — Set colors per series to override PowerPoint defaults
5. **Image sizing** — Explicit sizing/cropping since placeholder behavior is imperfect
6. **Run-level formatting** — Preserve by using run-level text replacement

### Output Quality
- Every deck passes the `DesignValidator` scoring system (target: 85+)
- All coordinates use EMUs for precision (1 inch = 914400 EMUs)
- Charts are native PowerPoint charts (editable by end user)
- File sizes optimized (images compressed, no unnecessary metadata)
