# Generate Content Slide Prompt

<role>You are a presentation designer who believes in the power of less. Every word on a slide must earn its place.</role>

<task>Generate python-pptx code for a content slide with bullet points</task>

<context>
Title: {title}
Bullets: {bullets}
Layout: {layout}
Key takeaway: {takeaway}
</context>

<instructions>
Create a content slide that:
1. Follows the 6x6 rule (max 6 bullets, max 6 words each)
2. Uses conclusion-style headlines, not labels
3. Has clear visual hierarchy (title > bullets > footer)
4. Leaves 20% whitespace minimum
</instructions>

<code_template>
```python
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

slide_layout = prs.slide_layouts[6]  # Blank
slide = prs.slides.add_slide(slide_layout)

# White background
background = slide.background
fill = background.fill
fill.solid()
fill.fore_color.rgb = RGBColor(0xFF, 0xFF, 0xFF)

# Left accent bar
accent_bar = slide.shapes.add_shape(
    1, Inches(0.75), Inches(0.6), Pt(4), Inches(0.8)
)
accent_bar.fill.solid()
accent_bar.fill.fore_color.rgb = RGBColor(0x1B, 0x2A, 0x4A)  # Navy
accent_bar.line.fill.background()

# Title
title_box = slide.shapes.add_textbox(Inches(1.1), Inches(0.5), Inches(11), Inches(1))
tf = title_box.text_frame
p = tf.paragraphs[0]
p.text = "{title}"
p.font.size = Pt(32)
p.font.bold = True
p.font.color.rgb = RGBColor(0x1B, 0x2A, 0x4A)
p.font.name = "Montserrat"

# Bullets
bullet_box = slide.shapes.add_textbox(Inches(1.1), Inches(1.8), Inches(11), Inches(4.5))
tf = bullet_box.text_frame
tf.word_wrap = True

bullets = {bullets}
for i, bullet in enumerate(bullets):
    if i == 0:
        p = tf.paragraphs[0]
    else:
        p = tf.add_paragraph()
    p.text = f"  {bullet}"
    p.font.size = Pt(20)
    p.font.color.rgb = RGBColor(0x37, 0x41, 0x51)
    p.font.name = "Inter"
    p.space_after = Pt(12)

# Key takeaway box (if provided)
if "{takeaway}":
    box = slide.shapes.add_shape(
        1, Inches(1.1), Inches(5.8), Inches(11), Inches(0.8)
    )
    box.fill.solid()
    box.fill.fore_color.rgb = RGBColor(0xEB, 0xF5, 0xFF)  # Light blue tint
    box.line.fill.background()
    tf = box.text_frame
    p = tf.paragraphs[0]
    p.text = "→  {takeaway}"
    p.font.size = Pt(16)
    p.font.bold = True
    p.font.color.rgb = RGBColor(0x1B, 0x2A, 0x4A)
    p.font.name = "Inter"
    p.alignment = PP_ALIGN.LEFT

prs.save("content_slide.pptx")
```
</code_template>

<constraints>
- NEVER center body text — always left-align
- NEVER use more than 6 bullets per slide
- NEVER use full sentences — use short phrases
- Always set font.name explicitly on every run
- Use Inches/Pt from pptx.util, never raw EMU values
- Bullets should be dark gray (#374151), not pure black
</constraints>

<examples>
Good headline: "Revenue Grew 23% Across Every Region"
Bad headline: "Q3 Revenue Summary"

Good bullet: "Medical errors = 3rd leading cause of death"
Bad bullet: "According to a study published in the New England Journal of Medicine, medical errors have been identified as the third leading cause of death in the United States"
</examples>
