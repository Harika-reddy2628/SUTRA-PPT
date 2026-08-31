---
name: "PPT Artisan"
description: "Create stunning, presentation-quality PowerPoint decks programmatically using python-pptx. Use when the user wants to generate .pptx files, build slide decks, create presentations, design pitch decks, quarterly reports, data dashboards, KPI dashboards, timeline slides, team slides, comparison slides, or any visual presentation. Triggers on keywords: pptx, powerpoint, presentation, slides, deck, pitch deck, slide deck, quarterly report, data dashboard, brand deck, KPI dashboard, timeline, team slide, comparison, data visualization, chart."
---

# PPT Artisan — Programmatic Presentation Design

You are a presentation design expert who creates stunning, consulting-grade PowerPoint decks using python-pptx. You combine rigorous design principles with programmatic precision to produce decks that look like they were designed by a top-tier agency.

## Level 1 — Overview

### What This Skill Does

Generates complete, production-ready .pptx files with:
- **10+ slide types**: Title, content, section divider, comparison, timeline, chart, team, quote, image-heavy, KPI dashboard
- **Design system**: Consistent colors, typography, spacing grid, shadow/effect presets
- **Data-to-stunning charts**: Transform CSV/JSON into beautiful bar, line, pie, combo charts
- **AI design critique**: Auto-evaluate and improve slide design with scoring
- **Template engine**: Apply pro design templates with one command

### 5 Irresistible Hooks

1. **One-Line Deck Generation** — "Create a 10-slide startup pitch deck about AI healthcare" → full deck in 30 seconds
2. **Brand DNA** — Feed it any .pptx, it extracts your brand colors/fonts → applies to new deck
3. **Data-to-Stunning** — Drop a CSV, get a KPI dashboard with trend arrows, sparklines, conditional formatting
4. **Template Wizard** — Pick "consulting", "startup", "corporate" → pro layout applied automatically
5. **AI Design Critique** — Scores your deck on 6 dimensions → suggests specific fixes

### Core Library

`python-pptx` — the de facto Python library for programmatic PowerPoint creation.

**Key limitations:**
- No animations/transitions (by design — focus on static content quality)
- Shadow/glow effects require XML injection (handled by effects module)
- Theme color inheritance is imperfect — we use explicit RGB for brand-exact colors
- Charts are native PowerPoint charts (editable by user after generation)

---

## Level 2 — Quick Start

### Prerequisites

```bash
pip install python-pptx lxml Pillow
```

### Generate a Deck in 30 Seconds

```python
import sys
sys.path.insert(0, '/home/nikhil/.claude/skills/ppt-artisan/scripts')

from deck_builder import SlideBuilder

builder = SlideBuilder()

# Title slide
builder.add_title_slide(
    title="AI-Powered Healthcare",
    subtitle="Revolutionizing Patient Outcomes Through Machine Learning",
    author="Your Name",
    date="August 2026"
)

# Content slide
builder.add_content_slide(
    title="The Problem",
    bullets=[
        "Medical errors are the 3rd leading cause of death",
        "Diagnostic delays cost $46B annually",
        "Radiologist burnout leads to 30% error rates"
    ]
)

# Chart slide
builder.add_chart_slide(
    title="Market Growth",
    chart_type="bar",
    data={"2024": 12.5, "2025": 18.2, "2026": 27.8, "2027": 41.3},
    y_label="Revenue ($B)"
)

# KPI dashboard
builder.add_kpi_dashboard(
    title="Key Metrics",
    kpis=[
        {"label": "Revenue", "value": "$4.2M", "change": "+12%", "trend": "up"},
        {"label": "Users", "value": "48,200", "change": "+8%", "trend": "up"},
        {"label": "Churn", "value": "2.1%", "change": "-0.3%", "trend": "down"}
    ]
)

builder.save("ai_healthcare_pitch.pptx")
```

### Apply a Template

```python
from template_engine import TemplateEngine

engine = TemplateEngine()
prs = engine.from_template("consulting")
# Add slides...
prs.save("quarterly_report.pptx")
```

---

## Level 3 — Detailed Slide Type Guide

### 3.1 Title Slide

**Purpose:** First impression. Sets tone and professionalism.

```
┌─────────────────────────────────────┐
│                                     │
│         SUBTITLE / TAGLINE          │  ← 18-22pt, muted
│                                     │
│     ═══════════════════════════     │  ← Accent line
│                                     │
│          MAIN TITLE                 │  ← 40-44pt, bold
│          ─────────────              │
│                                     │
│        Supporting text              │  ← 18-20pt
│                                     │
│  Author Name    │    Date           │  ← Bottom bar
└─────────────────────────────────────┘
```

**Design Rules:**
- Title: 40-44pt, Montserrat Bold, dark (#1A1A2E)
- Subtitle: 18-22pt, Inter Regular, muted (#6B7280)
- Accent line: 2pt weight, brand secondary, 2 inches wide
- Minimum 1.5 inches top margin

### 3.2 Content Slide

**Purpose:** Core information delivery. One idea per slide.

**Pattern A — Left Accent Bar:**
```
┌─────────────────────────────────────┐
│ ▌ SLIDE TITLE                       │
│                                     │
│   • First key point                 │  ← 20pt, 6 words max
│                                     │
│   • Second point                    │
│                                     │
│   • Third point                     │
│                                     │
│ ──────────────────────────────────  │
│ Page 5                    Company   │
└─────────────────────────────────────┘
```

**Design Rules:**
- Maximum 6 bullets, 6 words each (6x6 rule)
- Title: 32-36pt, bold, top-left
- Bullets: 20pt Inter Regular, left-aligned
- Bullet color: #374151

### 3.3 Section Divider

**Purpose:** Break deck into logical sections. Visual reset.

```
┌─────────────────────────────────────┐
│                                     │
│      SECTION 01                     │  ← 16pt, uppercase, muted
│      ════════════════════════       │
│                                     │
│      Market Analysis                │  ← 44-48pt, bold
│                                     │
│      Brief context or transition    │  ← 18pt subtitle
│                                     │
└─────────────────────────────────────┘
```

### 3.4 Comparison Slide

**Purpose:** Side-by-side comparison of 2-4 options.

```
┌─────────────────────────────────────┐
│ COMPARISON TITLE                    │
│                                     │
│ ┌──────────┐ ┌──────────┐ ┌──────┐ │
│ │  OPTION  │ │  OPTION  │ │ OPT  │ │
│ │    A     │ │    B     │ │  C   │ │
│ │ ✓ Free   │ │ ✓ Cheap  │ │ ✓ Pro│ │
│ │ ✗ Slow   │ │ ✗ Basic  │ │ ✗ $$$│ │
│ └──────────┘ └──────────┘ └──────┘ │
│                                     │
│ Recommended: Option B               │
└─────────────────────────────────────┘
```

### 3.5 Timeline Slide

**Purpose:** Show progression, milestones, or historical sequence.

```
┌─────────────────────────────────────┐
│ TIMELINE TITLE                      │
│                                     │
│  ●────────●────────●────────●─────  │
│  Q1 2025  Q2 2025  Q3 2025  Q4     │
│  Launch   Scale    Expand   IPO     │
│  MVP      to 1K    to 5    Ready   │
└─────────────────────────────────────┘
```

### 3.6 Data/Chart Slide

**Chart Type Selection:**
| Data Type | Chart Type | Use Case |
|-----------|------------|----------|
| Comparison | Bar/Column | Revenue by product |
| Trend | Line | Growth trajectory |
| Parts of whole | Pie/Doughnut | Market composition |
| Distribution | Scatter | Correlation |
| Composition + trend | Combo | Revenue + growth rate |

### 3.7 Team Slide

**Purpose:** Introduce team members with photos and roles.

```
┌─────────────────────────────────────┐
│ OUR TEAM                            │
│                                     │
│  ┌─────┐  ┌─────┐  ┌─────┐        │
│  │Photo│  │Photo│  │Photo│        │
│  └─────┘  └─────┘  └─────┘        │
│  Name      Name      Name          │
│  Role      Role      Role          │
└─────────────────────────────────────┘
```

### 3.8 Quote Slide

**Purpose:** Highlight key insight or testimonial.

```
┌─────────────────────────────────────┐
│         "                           │
│    The best way to predict the      │
│    future is to invent it.          │
│         "                           │
│    ── Alan Kay                      │
│       Computer Scientist            │
└─────────────────────────────────────┘
```

### 3.9 KPI Dashboard

**Purpose:** Executive summary with key metrics.

```
┌─────────────────────────────────────┐
│ EXECUTIVE DASHBOARD                 │
│                                     │
│ ┌────────┐ ┌────────┐ ┌────────┐  │
│ │ $4.2M  │ │ 48.2K  │ │  2.1%  │  │
│ │Revenue │ │ Users  │ │ Churn  │  │
│ │ ▲ +12% │ │ ▲ +8%  │ │ ▼ -0.3%│  │
│ └────────┘ └────────┘ └────────┘  │
└─────────────────────────────────────┘
```

---

## Level 4 — Advanced Techniques

### 4.1 Design System

```python
from design_system import DesignSystem

ds = DesignSystem(
    primary="#1A365D",
    secondary="#E53E3E",
    accent="#38A169",
    fonts={"heading": "Montserrat", "body": "Inter"}
)
```

### 4.2 Custom Effects via XML

```python
# Add shadow to shape
from lxml import etree
ns = 'http://schemas.openxmlformats.org/drawingml/2006/main'
spPr = shape._element.find(f'{{{ns}}}spPr')
effectLst = etree.SubElement(spPr, f'{{{ns}}}effectLst')
outerShdw = etree.SubElement(effectLst, f'{{{ns}}}outerShdw', attrib={
    'blurRad': '50800',  # 4pt blur
    'dist': '38100',      # 3pt distance
    'dir': '5400000',     # 45 degrees
})
srgbClr = etree.SubElement(outerShdw, f'{{{ns}}}srgbClr', attrib={'val': '000000'})
etree.SubElement(srgbClr, f'{{{ns}}}alpha', attrib={'val': '40000'})  # 40% opacity
```

### 4.3 AI Design Critique

Score decks on 6 dimensions:
| Dimension | Weight | Description |
|-----------|--------|-------------|
| Visual Hierarchy | 25% | Title vs body size ratio |
| Color Harmony | 20% | 60-30-10 rule adherence |
| Whitespace | 20% | Margin consistency |
| Typography | 15% | Font consistency |
| Alignment | 10% | Grid adherence |
| Content Density | 10% | Bullet count per slide |

### 4.4 Design Principles (Evidence-Based)

- **60-30-10 Color Rule**: 60% dominant, 30% secondary, 10% accent
- **6x6 Rule**: Max 6 bullets, max 6 words per bullet
- **Rule of Thirds**: Place key elements at intersection points
- **Whitespace**: Leave 15-20% of slide area empty
- **Sans-serif only**: Inter, Montserrat, Poppins (min 18pt body, 36pt titles)
- **One idea per slide**: If it needs explanation, split it

---

## Prompt Library

### Deck Planning

```xml
<role>You are a presentation strategist and narrative architect.</role>
<task>Create a slide-by-slide outline for a presentation about: {topic}</task>
<context>
Audience: {audience}
Tone: {tone}
Duration: {duration} minutes
</context>
<output_format>
For each slide provide:
1. Slide type (title/content/section/chart/etc.)
2. Headline (as a conclusion, not a label)
3. Key content (bullets/data/visual)
4. Design notes (layout, colors, effects)
</output_format>
```

### Slide Generation

```xml
<role>You are a presentation designer at a top-tier consulting firm.</role>
<task>Generate python-pptx code for a {slide_type} slide</task>
<context>
Headline: {headline}
Content: {content}
Brand colors: {colors}
</context>
<constraints>
- Use Inches/Pt from pptx.util, never raw EMU
- Set font.name explicitly on every run
- Follow 6x6 rule for bullets
- Left-align body text, center only headlines
- Minimum 0.5 inch margins
</constraints>
```

### Design Critique

```xml
<role>You are a senior presentation designer reviewing a slide deck.</role>
<task>Evaluate this slide for design quality</task>
<slide_content>{slide_data}</slide_content>
<scoring>
Rate 1-10 on: visual hierarchy, color harmony, whitespace, typography, alignment, content density
</scoring>
<output_format>
1. Overall score (0-100)
2. Top 3 issues with severity
3. Specific fix recommendations
</output_format>
```

---

## Scripts Reference

| Script | Purpose | Key Class |
|--------|---------|-----------|
| `deck_builder.py` | Core slide creation engine | `SlideBuilder` |
| `design_system.py` | Color/typography/spacing tokens | `DesignSystem` |
| `chart_factory.py` | Chart creation + styling | `ChartFactory` |
| `template_engine.py` | Load/apply .pptx templates | `TemplateEngine` |
| `export_utils.py` | Optimize, compress, export | `ExportUtils` |

## Resources

- Templates: `resources/templates/` (consulting, startup, corporate, creative, academic, dark)
- Palettes: `resources/palettes/` (corporate, startup, creative, academic, neutrals)
- Examples: `examples/` (quick_start.py, brand_deck.py, data_dashboard.py)

## Troubleshooting

### Issue: Font not rendering
**Cause**: Font not installed on system
**Solution**: Use universally available fonts (Arial, Calibri) or bundle fonts

### Issue: Images appear blurry
**Cause**: Low resolution source images
**Solution**: Use minimum 150 DPI at display size, optimize with Pillow

### Issue: File size too large
**Cause**: Uncompressed images
**Solution**: Use `ExportUtils.optimize()` to compress images before adding

### Issue: Chart colors don't match brand
**Cause**: PowerPoint theme overriding explicit colors
**Solution**: Set `chart.series[0].format.fill.solid()` with explicit RGB
