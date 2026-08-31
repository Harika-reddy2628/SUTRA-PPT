# Generate KPI Dashboard Prompt

<role>You are an executive dashboard designer who distills complexity into clarity. Every number must earn its place on the screen.</role>

<task>Generate python-pptx code for a KPI dashboard slide</task>

<context>
Title: {title}
KPIs: {kpis}
Columns: {columns}
</context>

<instructions>
Create a KPI dashboard that:
1. Shows 4-6 key metrics in card layout
2. Each card has: value, label, trend indicator, mini sparkline
3. Uses green for positive trends, red for negative
4. Cards are evenly spaced with consistent styling
5. The overall impression is "executive summary at a glance"
</instructions>

<kpi_card_structure>
Each KPI card contains:
- Value: 36pt, bold, dark (the hero)
- Label: 14pt, muted, uppercase (the context)
- Trend: ▲ +12% (green) or ▼ -0.3% (red)
- Sparkline: Simple line showing direction
</kpi_card_structure>

<code_template>
```python
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from lxml import etree

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

slide_layout = prs.slide_layouts[6]
slide = prs.slides.add_slide(slide_layout)

# Title
title_box = slide.shapes.add_textbox(Inches(0.75), Inches(0.4), Inches(11), Inches(0.8))
tf = title_box.text_frame
p = tf.paragraphs[0]
p.text = "{title}"
p.font.size = Pt(28)
p.font.bold = True
p.font.color.rgb = RGBColor(0x1B, 0x2A, 0x4A)
p.font.name = "Montserrat"

# KPI cards
kpis = [
    {"label": "REVENUE", "value": "$4.2M", "change": "+12%", "trend": "up"},
    {"label": "USERS", "value": "48,200", "change": "+8%", "trend": "up"},
    {"label": "CHURN", "value": "2.1%", "change": "-0.3%", "trend": "down"},
    {"label": "NPS", "value": "72", "change": "+5", "trend": "up"},
]

card_width = Inches(2.8)
card_height = Inches(2.2)
start_x = Inches(0.75)
start_y = Inches(1.6)
gap = Inches(0.3)

for i, kpi in enumerate(kpis):
    col = i % 4
    x = start_x + col * (card_width + gap)
    y = start_y

    # Card background
    card = slide.shapes.add_shape(1, x, y, card_width, card_height)
    card.fill.solid()
    card.fill.fore_color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
    card.line.color.rgb = RGBColor(0xE5, 0xE7, 0xEB)
    card.line.width = Pt(1)

    # Add shadow via XML
    ns = 'http://schemas.openxmlformats.org/drawingml/2006/main'
    spPr = card._element.find(f'{{{ns}}}spPr')
    effectLst = etree.SubElement(spPr, f'{{{ns}}}effectLst')
    outerShdw = etree.SubElement(effectLst, f'{{{ns}}}outerShdw', attrib={
        'blurRad': '38100', 'dist': '25400', 'dir': '5400000'
    })
    srgbClr = etree.SubElement(outerShdw, f'{{{ns}}}srgbClr', attrib={'val': '000000'})
    etree.SubElement(srgbClr, f'{{{ns}}}alpha', attrib={'val': '15000'})

    # Value
    val_box = slide.shapes.add_textbox(x + Inches(0.3), y + Inches(0.3), card_width - Inches(0.6), Inches(0.8))
    tf = val_box.text_frame
    p = tf.paragraphs[0]
    p.text = kpi["value"]
    p.font.size = Pt(36)
    p.font.bold = True
    p.font.color.rgb = RGBColor(0x1B, 0x2A, 0x4A)
    p.font.name = "Montserrat"

    # Label
    lbl_box = slide.shapes.add_textbox(x + Inches(0.3), y + Inches(1.1), card_width - Inches(0.6), Inches(0.4))
    tf = lbl_box.text_frame
    p = tf.paragraphs[0]
    p.text = kpi["label"]
    p.font.size = Pt(12)
    p.font.color.rgb = RGBColor(0x9C, 0xA3, 0xAF)
    p.font.name = "Inter"
    p.font.bold = True

    # Trend
    trend_color = RGBColor(0x05, 0x96, 0x69) if kpi["trend"] == "up" else RGBColor(0xDC, 0x26, 0x26)
    trend_box = slide.shapes.add_textbox(x + Inches(0.3), y + Inches(1.5), card_width - Inches(0.6), Inches(0.4))
    tf = trend_box.text_frame
    p = tf.paragraphs[0]
    arrow = "▲" if kpi["trend"] == "up" else "▼"
    p.text = f"{arrow} {kpi['change']}"
    p.font.size = Pt(14)
    p.font.bold = True
    p.font.color.rgb = trend_color
    p.font.name = "Inter"

prs.save("kpi_dashboard.pptx")
```
</code_template>

<constraints>
- Maximum 6 KPIs per slide (4 is ideal)
- Value must be the largest element in each card
- Green for positive trends, red for negative
- Cards must have subtle shadow for depth
- Consistent card sizing and spacing
- Labels are uppercase, muted, small
</constraints>
