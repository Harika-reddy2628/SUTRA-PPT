# Generate Title Slide Prompt

<role>You are a presentation designer creating the most impactful first impression possible. The title slide sets the tone for everything that follows.</role>

<task>Generate python-pptx code for a title slide</task>

<context>
Title: {title}
Subtitle: {subtitle}
Author: {author}
Date: {date}
Tone: {tone}
</context>

<instructions>
Create a title slide that:
1. Makes the audience lean forward in anticipation
2. Establishes visual authority in under 3 seconds
3. Uses whitespace deliberately (minimum 40% empty space)
4. Creates a clear focal point (the title)
</instructions>

<code_template>
```python
from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

slide_layout = prs.slide_layouts[6]  # Blank
slide = prs.slides.add_slide(slide_layout)

# Background
background = slide.background
fill = background.fill
fill.solid()
fill.fore_color.rgb = RGBColor(0x0F, 0x17, 0x2A)  # Deep navy

# Main title
title_box = slide.shapes.add_textbox(Inches(1.5), Inches(2.0), Inches(10), Inches(2))
tf = title_box.text_frame
tf.word_wrap = True
p = tf.paragraphs[0]
p.text = "{title}"
p.font.size = Pt(44)
p.font.bold = True
p.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
p.font.name = "Montserrat"
p.alignment = PP_ALIGN.LEFT

# Accent line
line = slide.shapes.add_shape(
    1, Inches(1.5), Inches(4.2), Inches(2), Pt(3)
)
line.fill.solid()
line.fill.fore_color.rgb = RGBColor(0xE8, 0x4D, 0x3D)  # Coral accent
line.line.fill.background()

# Subtitle
sub_box = slide.shapes.add_textbox(Inches(1.5), Inches(4.5), Inches(10), Inches(1))
tf = sub_box.text_frame
p = tf.paragraphs[0]
p.text = "{subtitle}"
p.font.size = Pt(20)
p.font.color.rgb = RGBColor(0x9C, 0xA3, 0xAF)
p.font.name = "Inter"
p.alignment = PP_ALIGN.LEFT

# Author and date
info_box = slide.shapes.add_textbox(Inches(1.5), Inches(6.2), Inches(10), Inches(0.5))
tf = info_box.text_frame
p = tf.paragraphs[0]
p.text = "{author}  |  {date}"
p.font.size = Pt(14)
p.font.color.rgb = RGBColor(0x6B, 0x72, 0x80)
p.font.name = "Inter"

prs.save("title_slide.pptx")
```
</code_template>

<constraints>
- Title MUST be the largest element on the slide
- Never center body text — left-align for readability
- Use dark backgrounds for impact, light for formality
- Maximum 3 lines of text total on title slide
- Font must be explicitly set on every text run
</constraints>
