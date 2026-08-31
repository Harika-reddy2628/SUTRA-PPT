#!/usr/bin/env python3
"""
generate_deck.py - Generates the SUTRA Title Slide (.pptx)
Strictly adhering to PPT Artisan Title Slide Formula:
  [Subtitle/Context - small, muted]
  [Accent line]
  [Main Title - big, bold, dark]
  [Subtitle / One-liner]
  [Author | Date]
"""

from pathlib import Path
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# Design System Palette (Vitt Light Elegant)
COLOR_BG = RGBColor(0xFA, 0xF7, 0xF2)        # Warm Sandstone Alabaster
COLOR_FOREST = RGBColor(0x18, 0x3A, 0x2B)    # Deep Sovereign Forest Green
COLOR_MUTED = RGBColor(0x5A, 0x6B, 0x63)     # Sandstone Muted Green
COLOR_TERRACOTTA = RGBColor(0x9E, 0x4D, 0x34) # Warm Terracotta Clay
COLOR_BORDER = RGBColor(0xED, 0xE4, 0xD6)    # Sandstone Border

FONT_HEADING = "Plus Jakarta Sans"
FONT_BODY = "Plus Jakarta Sans"
FONT_MONO = "JetBrains Mono"

SLIDE_WIDTH = Inches(13.333)
SLIDE_HEIGHT = Inches(7.5)


def add_shape(slide, shape_type, left, top, width, height, fill_color, line_color=None, line_width=1):
    shape = slide.shapes.add_shape(shape_type, left, top, width, height)
    shape.fill.solid()
    shape.fill.fore_color.rgb = fill_color
    if line_color:
        shape.line.color.rgb = line_color
        shape.line.width = Pt(line_width)
    else:
        shape.line.fill.background()
    return shape


def add_text(slide, left, top, width, height, text, font_name=FONT_BODY,
             font_size=14, color=COLOR_FOREST, bold=False, align=PP_ALIGN.LEFT):
    tx = slide.shapes.add_textbox(left, top, width, height)
    tf = tx.text_frame
    tf.word_wrap = True
    tf.margin_left = tf.margin_top = tf.margin_right = tf.margin_bottom = 0
    p = tf.paragraphs[0]
    p.text = text
    p.alignment = align
    if p.runs:
        run = p.runs[0]
        run.font.name = font_name
        run.font.size = Pt(font_size)
        run.font.color.rgb = color
        run.font.bold = bold
    return tx


def build_title_slide(prs):
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    # 1. Background (>50% Whitespace)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), SLIDE_WIDTH, SLIDE_HEIGHT, COLOR_BG)

    # 2. Top Left Tag / Logo
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(0.6), Inches(0.4), Inches(0.4),
              COLOR_FOREST, None)
    add_text(slide, Inches(1.3), Inches(0.68), Inches(4.0), Inches(0.3),
             "DEFENSE & DISASTER ROBOTICS", FONT_MONO, 9, COLOR_MUTED, True)

    # 3. Center Formula
    # [Subtitle / Context — small, muted]
    add_text(slide, Inches(0.8), Inches(2.6), Inches(10.0), Inches(0.3),
             "AUTONOMOUS MULTI-UAV SWARM ARCHITECTURE",
             FONT_MONO, 11, COLOR_TERRACOTTA, True)

    # [Accent Line — 2pt visual separator]
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(3.0), Inches(1.2), Inches(0.035),
              COLOR_TERRACOTTA)

    # [Main Title — Big, bold, dark (44pt+)]
    add_text(slide, Inches(0.8), Inches(3.25), Inches(11.0), Inches(1.2),
             "PROJECT SUTRA", FONT_HEADING, 54, COLOR_FOREST, True)

    # [Subtitle / Context description — 18-22pt]
    add_text(slide, Inches(0.8), Inches(4.5), Inches(8.5), Inches(0.8),
             "Swarm Unified Tactical Reconnaissance Architecture for GPS-Denied and Jammed Mountain Environments.",
             FONT_BODY, 18, COLOR_MUTED, False)

    # 4. Bottom Bar: [Author | Date]
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(6.5), Inches(11.733), Inches(0.015),
              COLOR_BORDER)

    add_text(slide, Inches(0.8), Inches(6.65), Inches(6.0), Inches(0.3),
             "Nikhil Sai Kilani  •  Lead Architect", FONT_MONO, 10, COLOR_FOREST, True)

    add_text(slide, Inches(8.5), Inches(6.65), Inches(4.0), Inches(0.3),
             "August 2026", FONT_MONO, 10, COLOR_FOREST, True, PP_ALIGN.RIGHT)


def main():
    prs = Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT
    prs.core_properties.title = "PROJECT SUTRA — Title Slide"
    prs.core_properties.author = "Nikhil Sai Kilani"

    print("Building strict PPT Artisan Title Slide...")
    build_title_slide(prs)

    output_path = Path("sutra_pitch_deck.pptx")
    prs.save(str(output_path))
    print(f"✓ Presentation saved to: {output_path.resolve()}")


if __name__ == "__main__":
    main()
