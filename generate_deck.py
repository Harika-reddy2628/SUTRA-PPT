#!/usr/bin/env python3
"""
generate_deck.py - Generates the SUTRA Title Slide (.pptx)
Nothing Phone Light Theme (#191516, #FFFFFF, #D71920) with Radial Dot Matrix.
"""

from pathlib import Path
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# Nothing Light Minimalist Palette (#191516 & #FFFFFF)
COLOR_BG = RGBColor(0xFF, 0xFF, 0xFF)        # Pure White Background (#FFFFFF)
COLOR_DARK = RGBColor(0x19, 0x15, 0x16)      # Nothing Volcanic Dark Charcoal (#191516)
COLOR_RED = RGBColor(0xD7, 0x19, 0x20)       # Iconic Nothing Red (#D71920)
COLOR_MUTED = RGBColor(0x7A, 0x75, 0x76)     # Neutral Ash Muted (#7A7576)
COLOR_DIM = RGBColor(0xA0, 0x9A, 0x97)       # Faint Ash Muted
COLOR_BORDER = RGBColor(0xE8, 0xE3, 0xDF)    # Light Border
COLOR_DOT = RGBColor(0xDC, 0xD6, 0xD2)       # Subtle Light Dot Matrix

FONT_HEADING = "Space Grotesk"
FONT_BODY = "Space Grotesk"
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
             font_size=14, color=COLOR_DARK, bold=False, align=PP_ALIGN.LEFT):
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

    # 1. Pure White Background (#FFFFFF)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), SLIDE_WIDTH, SLIDE_HEIGHT, COLOR_BG)

    # 1b. Subtle Dot Grid Matrix (Center Faded)
    grid_spacing = 0.5  # Inches
    for x_step in range(3, 24):
        x = x_step * grid_spacing
        for y_step in range(2, 13):
            y = y_step * grid_spacing
            dx = (x - 6.666) / 5.5
            dy = (y - 3.75) / 3.0
            dist_sq = dx * dx + dy * dy
            if dist_sq < 1.0:
                dot_size = Inches(0.025)
                add_shape(slide, MSO_SHAPE.OVAL, Inches(x), Inches(y), dot_size, dot_size, COLOR_DOT)

    # 2. Top Header: Nothing OS Status Bar Style
    add_shape(slide, MSO_SHAPE.OVAL, Inches(0.8), Inches(0.65), Inches(0.12), Inches(0.12), COLOR_RED)
    
    add_text(slide, Inches(1.05), Inches(0.62), Inches(6.0), Inches(0.3),
             "(TEAM OFFGRID)  /  DEFENSE & DISASTER ROBOTICS", FONT_MONO, 9.5, COLOR_MUTED, True)

    add_text(slide, Inches(8.5), Inches(0.62), Inches(4.0), Inches(0.3),
             "AUG 2026  •  REV 1.0", FONT_MONO, 9.5, COLOR_MUTED, True, PP_ALIGN.RIGHT)

    # 3. Center Formula: [Context] -> [Accent Line] -> [Main Title] -> [Subtitle]
    # [Context / Tagline]
    add_text(slide, Inches(0.8), Inches(2.4), Inches(10.0), Inches(0.3),
             "[ AUTONOMOUS MULTI-UAV SWARM ARCHITECTURE ]",
             FONT_MONO, 10.5, COLOR_MUTED, True)

    # [Nothing Minimalist Accent Separator: Red bar + Dark dot]
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(2.78), Inches(0.8), Inches(0.025), COLOR_RED)
    add_shape(slide, MSO_SHAPE.OVAL, Inches(1.68), Inches(2.74), Inches(0.08), Inches(0.08), COLOR_DARK)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(1.84), Inches(2.78), Inches(0.4), Inches(0.025), COLOR_BORDER)

    # [Main Title — Big, bold, dark (#191516)]
    add_text(slide, Inches(0.8), Inches(3.05), Inches(11.0), Inches(1.2),
             "PROJECT SUTRA", FONT_HEADING, 56, COLOR_DARK, True)

    # [Subtitle / Context description]
    add_text(slide, Inches(0.8), Inches(4.3), Inches(9.0), Inches(0.8),
             "Swarm Unified Tactical Reconnaissance Architecture for GPS-Denied and Jammed Mountain Environments.",
             FONT_BODY, 17, COLOR_MUTED, False)

    # 4. Bottom Bar: Complete Team Offgrid Roster
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(5.85), Inches(11.733), Inches(0.015),
              COLOR_BORDER)

    add_text(slide, Inches(0.8), Inches(6.0), Inches(8.0), Inches(0.25),
             "CORE ARCHITECTURE TEAM (OFFGRID)", FONT_MONO, 8.5, COLOR_RED, True)

    members = [
        ("Nikhil", "Tech Lead · Subsys A & B", "GNC, FSD & Deep JSCC"),
        ("Vedanth Sai Ram", "Lead · Subsystem C", "Tri-Modal AI & DEM"),
        ("Siva Kesava", "Lead · Subsystem D", "3D GIS GCS & WebGPU"),
        ("Harika", "Lead · Subsystem E", "Verification & Pitch QA"),
        ("Rohith Kumar", "Lead · Subsystem F", "NDMA CONOPS & Ops"),
    ]

    col_w = Inches(2.2)
    gap = Inches(0.18)
    for i, (name, role, focus) in enumerate(members):
        left_pos = Inches(0.8) + i * (col_w + gap)
        add_text(slide, left_pos, Inches(6.3), col_w, Inches(0.25), name, FONT_MONO, 10, COLOR_DARK, True)
        add_text(slide, left_pos, Inches(6.55), col_w, Inches(0.22), role, FONT_MONO, 8, COLOR_MUTED, False)
        add_text(slide, left_pos, Inches(6.77), col_w, Inches(0.22), focus, FONT_MONO, 7.5, COLOR_DIM, True)


def main():
    prs = Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT
    prs.core_properties.title = "PROJECT SUTRA — Title Slide (Nothing Light Theme)"
    prs.core_properties.author = "Team Offgrid"

    print("Building Nothing Light Theme Title Slide (#191516 & #FFFFFF)...")
    build_title_slide(prs)

    output_path = Path("sutra_pitch_deck.pptx")
    prs.save(str(output_path))
    print(f"✓ Presentation saved to: {output_path.resolve()}")


if __name__ == "__main__":
    main()
