#!/usr/bin/env python3
"""
generate_deck.py - Generates the SUTRA Master Pitch Deck (.pptx)
Theme: Light Elegant Sandstone & Sovereign Forest (Vitt Style)
Redesigned Slide 1: Simple, Spacious, Noise-Free
"""

from pathlib import Path
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# Design System Palette (Vitt Light Elegant)
COLOR_BG = RGBColor(0xFA, 0xF7, 0xF2)        # Warm Sandstone Alabaster
COLOR_CARD = RGBColor(0xFF, 0xFF, 0xFF)      # Pure White Card
COLOR_CARD_BORDER = RGBColor(0xED, 0xE4, 0xD6) # Sandstone Border

COLOR_FOREST = RGBColor(0x18, 0x3A, 0x2B)    # Deep Sovereign Forest Green
COLOR_MUTED = RGBColor(0x4A, 0x5B, 0x53)     # Sandstone Dark Green
COLOR_FAINT = RGBColor(0x7A, 0x8C, 0x83)     # Faint Green

COLOR_TERRACOTTA = RGBColor(0x9E, 0x4D, 0x34) # Warm Terracotta Clay
COLOR_SAGE = RGBColor(0x4A, 0x7A, 0x58)       # Vedic Sage Green
COLOR_OCHRE = RGBColor(0xB6, 0x86, 0x37)      # Heritage Ochre Gold
COLOR_SKY = RGBColor(0x2B, 0x6C, 0xB0)        # Sky / Telemetry Blue

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
             font_size=14, color=COLOR_FOREST, bold=False, italic=False, align=PP_ALIGN.LEFT):
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
        run.font.italic = italic
    return tx


def build_slide_1_spacious(prs):
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    # 1. Background
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), SLIDE_WIDTH, SLIDE_HEIGHT, COLOR_BG)

    # 2. Top Header Bar
    # Defense Badge
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(0.5), Inches(2.6), Inches(0.35),
              RGBColor(0xF7, 0xEC, 0xE9), COLOR_TERRACOTTA, 0.8)
    add_text(slide, Inches(0.9), Inches(0.58), Inches(2.4), Inches(0.25),
             "DEFENSE & DISASTER ROBOTICS", FONT_MONO, 8.5, COLOR_TERRACOTTA, True, False, PP_ALIGN.CENTER)

    # Swarm State Badge
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(3.6), Inches(0.5), Inches(2.4), Inches(0.35),
              RGBColor(0xEA, 0xF2, 0xEE), COLOR_SAGE, 0.8)
    add_text(slide, Inches(3.7), Inches(0.58), Inches(2.2), Inches(0.25),
             "● SWARM STATE: 5/5 ACTIVE", FONT_MONO, 8.5, COLOR_FOREST, True, False, PP_ALIGN.CENTER)

    # Sector Meta Right
    add_text(slide, Inches(7.5), Inches(0.58), Inches(5.0), Inches(0.25),
             "SECTOR: KEDARNATH VALLEY (30.73° N, 79.06° E)",
             FONT_MONO, 9, COLOR_MUTED, False, False, PP_ALIGN.RIGHT)

    # Header Divider Line
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.05), Inches(11.733), Inches(0.015),
              COLOR_CARD_BORDER)

    # 3. Main Center Content — Clean & Spacious
    # Overline
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(1.8), Inches(0.6), Inches(0.03), COLOR_TERRACOTTA)
    add_text(slide, Inches(1.5), Inches(1.72), Inches(8.0), Inches(0.25),
             "AUTONOMOUS MULTI-AGENT SWARM ARCHITECTURE",
             FONT_MONO, 9.5, COLOR_TERRACOTTA, True)

    # Main Title
    add_text(slide, Inches(0.8), Inches(2.1), Inches(11.0), Inches(1.2),
             "PROJECT SUTRA", FONT_HEADING, 58, COLOR_FOREST, True)

    # Subtitle
    add_text(slide, Inches(0.8), Inches(3.3), Inches(11.0), Inches(0.5),
             "Swarm Unified Tactical Reconnaissance Architecture",
             FONT_BODY, 20, COLOR_SAGE, True, True)

    # Mission Statement
    add_text(slide, Inches(0.8), Inches(3.9), Inches(10.5), Inches(0.8),
             "A decentralized, fault-tolerant multi-UAV swarm engineered from first principles for "
             "GPS-denied deep mountain valleys, -5 dB RF jamming resilience, and sub-meter survivor geolocation under dense forest canopies.",
             FONT_BODY, 13.5, COLOR_MUTED, False)

    # 4 Architectural Pillars (Horizontal Porcelain Cards)
    pillars = [
        ("01. AUTOPILOT & GNC", "PX4 50Hz Offboard, 3D Voxel Cost-Volume & ORCA 3D Collision Shield.", COLOR_FOREST),
        ("02. NEURAL COMMS", "Deep JSCC Autoencoder with 96.9% compression & -5 dB jamming survival.", COLOR_TERRACOTTA),
        ("03. AI PERCEPTION", "Tri-Modal RGB/FLIR/mmWave with 3.59cm terrain-corrected DEM raycasting.", COLOR_SAGE),
        ("04. TACTICAL GCS", "Pegasus 3D GIS with 60 FPS WebGPU pipeline & MIL-STD-2525 ATAK CoT XML.", COLOR_SKY),
    ]

    card_w = Inches(2.75)
    gap = Inches(0.24)
    card_top = Inches(4.85)
    card_h = Inches(1.5)

    for i, (title, desc, col) in enumerate(pillars):
        c_left = Inches(0.8) + i * (card_w + gap)
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, c_left, card_top, card_w, card_h,
                  COLOR_CARD, COLOR_CARD_BORDER, 1)

        # Title
        add_text(slide, c_left + Inches(0.2), card_top + Inches(0.18), card_w - Inches(0.4), Inches(0.3),
                 title, FONT_MONO, 9, col, True)

        # Description
        add_text(slide, c_left + Inches(0.2), card_top + Inches(0.55), card_w - Inches(0.4), Inches(0.8),
                 desc, FONT_BODY, 9, COLOR_MUTED, False)

    # 4. Footer Attribution Bar
    footer_top = Inches(6.65)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), footer_top, Inches(11.733), Inches(0.015),
              COLOR_CARD_BORDER)

    add_text(slide, Inches(0.8), footer_top + Inches(0.18), Inches(7.5), Inches(0.3),
             "Nikhil (Tech Lead) • Vedanth Sai Ram • Siva Kesava • Harika • Rohith Kumar",
             FONT_MONO, 8.5, COLOR_MUTED, False)

    add_text(slide, Inches(8.0), footer_top + Inches(0.18), Inches(4.533), Inches(0.3),
             "● NDMA / DARPA-TIER OPEN ARCHITECTURE · GRAND FINALS 2026",
             FONT_MONO, 8.5, COLOR_FOREST, True, False, PP_ALIGN.RIGHT)


def main():
    prs = Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT
    prs.core_properties.title = "PROJECT SUTRA — Master Defense & Disaster Robotics Pitch Deck"
    prs.core_properties.author = "Nikhil & SUTRA Core Architecture Team"

    print("Building Slide 1 in Simple, Spacious, Noise-Free Layout...")
    build_slide_1_spacious(prs)

    output_path = Path("sutra_pitch_deck.pptx")
    prs.save(str(output_path))
    print(f"✓ Presentation saved to: {output_path.resolve()}")


if __name__ == "__main__":
    main()
