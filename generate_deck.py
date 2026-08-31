#!/usr/bin/env python3
"""
generate_deck.py - Generates the SUTRA Title Slide (.pptx)
Web Aura India Architectural Design System:
- Pure White Background (#FFFFFF) with micro-grid pattern
- Serif quotation quote
- Monumental headline with L-bracket alignment framing
- Punchy Hero Metric Callout Cards with Watermarks
- Complete Team Offgrid Subsystem Card row
"""

from pathlib import Path
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# Web Aura Color Palette
COLOR_BG = RGBColor(0xFF, 0xFF, 0xFF)        # Pure White (#FFFFFF)
COLOR_BLACK = RGBColor(0x00, 0x00, 0x00)     # Solid Black (#000000)
COLOR_NAVY = RGBColor(0x0A, 0x16, 0x28)      # Deep Navy/Charcoal (#0A1628)
COLOR_SLATE = RGBColor(0x47, 0x55, 0x69)     # Slate Neutral (#475569)
COLOR_MUTED = RGBColor(0x64, 0x74, 0x8B)     # Muted Text (#64748B)
COLOR_DIM = RGBColor(0x94, 0xA3, 0xB8)       # Dim Label (#94A3B8)
COLOR_BORDER = RGBColor(0xE2, 0xE8, 0xF0)    # Light Border (#E2E8F0)
COLOR_CARD_BG = RGBColor(0xF8, 0xFA, 0xFC)   # Slate Surface (#F8FAFC)
COLOR_WATERMARK = RGBColor(0xF1, 0xF5, 0xF9) # Faint Watermark Number (#F1F5F9)
COLOR_EMERALD = RGBColor(0x05, 0x96, 0x69)   # Emerald Status Pill

FONT_HEADING = "Plus Jakarta Sans"
FONT_SERIF = "Georgia"
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
             font_size=14, color=COLOR_BLACK, bold=False, italic=False, align=PP_ALIGN.LEFT):
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


def build_title_slide(prs):
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    # 1. Pure White Background (#FFFFFF)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), SLIDE_WIDTH, SLIDE_HEIGHT, COLOR_BG)

    # 1b. Architectural Grid Pattern (Fine Slate lines)
    grid_spacing = 0.5  # Inches
    for x_step in range(1, 26):
        x = x_step * grid_spacing
        add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(x), Inches(0), Inches(0.008), SLIDE_HEIGHT, COLOR_BORDER)
    for y_step in range(1, 15):
        y = y_step * grid_spacing
        add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(y), SLIDE_WIDTH, Inches(0.008), COLOR_BORDER)

    # 2. Top Header: Web Aura Split Style
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(0.55), Inches(0.35), Inches(0.35), COLOR_BLACK)
    
    add_text(slide, Inches(1.25), Inches(0.62), Inches(6.0), Inches(0.3),
             "TEAM OFFGRID  /  DEFENSE & DISASTER ROBOTICS", FONT_HEADING, 9.5, COLOR_BLACK, bold=True)

    # Pill Tag & Rev
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.8), Inches(0.58), Inches(1.8), Inches(0.3), COLOR_CARD_BG, COLOR_BORDER)
    add_shape(slide, MSO_SHAPE.OVAL, Inches(9.95), Inches(0.68), Inches(0.08), Inches(0.08), COLOR_EMERALD)
    add_text(slide, Inches(10.1), Inches(0.64), Inches(1.5), Inches(0.2), "AUTONOMOUS SWARM", FONT_HEADING, 7.5, COLOR_SLATE, bold=True)

    add_text(slide, Inches(11.7), Inches(0.62), Inches(1.5), Inches(0.3),
             "AUG 2026 • REV 1.0", FONT_MONO, 8.5, COLOR_MUTED, bold=False, italic=False, align=PP_ALIGN.RIGHT)

    # 3. Center Hero: Web Aura Peak Craft Formula
    # [3a. Serif Quotation Hook]
    add_text(slide, Inches(0.8), Inches(1.55), Inches(11.0), Inches(0.4),
             "“When GPS fails and RF links jam, SUTRA geonavigates and locates survivors in real-time.”",
             FONT_SERIF, 18, COLOR_BLACK, bold=False, italic=True)

    # [3b. L-Bracket Corner Frames]
    bracket_len = Inches(0.35)
    bracket_thick = Inches(0.02)
    # Top-Left L-bracket
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.6), Inches(2.05), bracket_len, bracket_thick, COLOR_BLACK)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.6), Inches(2.05), bracket_thick, bracket_len, COLOR_BLACK)
    # Bottom-Right L-bracket
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(6.0), Inches(3.75), bracket_len, bracket_thick, COLOR_BLACK)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(6.33), Inches(3.42), bracket_thick, bracket_len, COLOR_BLACK)

    # [3c. Monumental Headline: PROJECT SUTRA]
    add_text(slide, Inches(0.8), Inches(2.05), Inches(8.0), Inches(0.8),
             "PROJECT", FONT_HEADING, 52, COLOR_BLACK, bold=True)
    add_text(slide, Inches(0.8), Inches(2.8), Inches(8.0), Inches(0.8),
             "SUTRA.", FONT_HEADING, 52, COLOR_SLATE, bold=False, italic=True)

    # [3d. Description]
    add_text(slide, Inches(0.8), Inches(3.68), Inches(10.0), Inches(0.45),
             "Swarm Unified Tactical Reconnaissance Architecture — decentralized multi-UAV flight, Deep JSCC neural zero-cliff video, and 3.59cm terrain-corrected DEM survivor geolocation.",
             FONT_BODY, 12.0, COLOR_SLATE, bold=False)

    # [3e. Punchy Hero Metric Callout Cards with Watermarks]
    punchy_tabs = [
        ("01", "GPS-DENIED", "0%", "Reliance", "VIO + Optical Flow EKF2", COLOR_BLACK),
        ("02", "ZERO-CLIFF", "0.0 dB", "Cliff Free", "Deep JSCC Neural Wireless", COLOR_NAVY),
        ("03", "SUB-DECIMETER", "3.59cm", "Geo-Fix", "3D DEM Terrain Raycast", COLOR_EMERALD),
    ]
    card_w = Inches(2.7)
    card_h = Inches(1.15)
    card_gap = Inches(0.2)
    for i, (num, tag, val, label, sub, tag_color) in enumerate(punchy_tabs):
        c_left = Inches(0.8) + i * (card_w + card_gap)
        # Card Container
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, c_left, Inches(4.3), card_w, card_h, COLOR_CARD_BG, COLOR_BORDER)
        
        # Watermark Number in top right
        add_text(slide, c_left + Inches(1.8), Inches(4.25), Inches(0.8), Inches(0.6), num, FONT_MONO, 28, COLOR_WATERMARK, bold=True, align=PP_ALIGN.RIGHT)
        
        # Tag Badge
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, c_left + Inches(0.12), Inches(4.4), Inches(1.1), Inches(0.2), tag_color)
        add_text(slide, c_left + Inches(0.12), Inches(4.42), Inches(1.1), Inches(0.18), tag, FONT_HEADING, 6.5, COLOR_BG, bold=True, align=PP_ALIGN.CENTER)
        
        # Giant Hero Value
        add_text(slide, c_left + Inches(0.12), Inches(4.65), Inches(1.4), Inches(0.4), val, FONT_HEADING, 20, COLOR_BLACK, bold=True)
        add_text(slide, c_left + Inches(1.3), Inches(4.72), Inches(1.2), Inches(0.3), label, FONT_HEADING, 9, COLOR_SLATE, bold=True)
        
        # Subtext
        add_text(slide, c_left + Inches(0.12), Inches(5.1), Inches(2.45), Inches(0.25), sub, FONT_BODY, 7.5, COLOR_MUTED, bold=False)

    # 4. Bottom Bar: Web Aura Card Row Style (5 Team Subsystems)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(5.65), Inches(11.733), Inches(0.015), COLOR_BORDER)

    add_text(slide, Inches(0.8), Inches(5.75), Inches(6.0), Inches(0.2),
             "CORE ARCHITECTURE TEAM (OFFGRID)", FONT_HEADING, 8.0, COLOR_DIM, bold=True)
    add_text(slide, Inches(7.5), Inches(5.75), Inches(5.033), Inches(0.2),
             "RESEARCH-BACKED & EMPIRICALLY VALIDATED", FONT_HEADING, 8.0, COLOR_SLATE, bold=True, italic=False, align=PP_ALIGN.RIGHT)

    members = [
        ("Nikhil", "Tech Lead · Subsys A & B", "GNC & JSCC", True),
        ("Vedanth Sai Ram", "Lead · Subsystem C", "AI PERCEPTION", False),
        ("Siva Kesava", "Lead · Subsystem D", "3D GIS GCS", False),
        ("Harika", "Lead · Subsystem E", "VERIFICATION QA", False),
        ("Rohith Kumar", "Lead · Subsystem F", "NDMA CONOPS", False),
    ]

    col_w = Inches(2.2)
    gap = Inches(0.18)
    for i, (name, role, badge, is_lead) in enumerate(members):
        left_pos = Inches(0.8) + i * (col_w + gap)
        # Card Background
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, left_pos, Inches(6.0), col_w, Inches(1.15),
                  COLOR_CARD_BG, COLOR_BORDER)
        
        # Name & Role
        add_text(slide, left_pos + Inches(0.12), Inches(6.08), col_w - Inches(0.24), Inches(0.25),
                 name, FONT_HEADING, 10.5, COLOR_BLACK, bold=True)
        add_text(slide, left_pos + Inches(0.12), Inches(6.32), col_w - Inches(0.24), Inches(0.22),
                 role, FONT_BODY, 8.0, COLOR_SLATE, bold=False)
        
        # Badge Pill
        badge_bg = COLOR_BLACK if is_lead else COLOR_BORDER
        badge_txt_color = COLOR_BG if is_lead else COLOR_NAVY
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, left_pos + Inches(0.12), Inches(6.65), Inches(1.2), Inches(0.22),
                  badge_bg)
        add_text(slide, left_pos + Inches(0.12), Inches(6.67), Inches(1.2), Inches(0.2),
                 badge, FONT_HEADING, 6.8, badge_txt_color, bold=True, italic=False, align=PP_ALIGN.CENTER)


def main():
    prs = Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT
    prs.core_properties.title = "PROJECT SUTRA — Title Slide (Web Aura Architecture)"
    prs.core_properties.author = "Team Offgrid"

    print("Building Web Aura Architectural Title Slide with Punchy Tabs (.pptx)...")
    build_title_slide(prs)

    output_path = Path("sutra_pitch_deck.pptx")
    prs.save(str(output_path))
    print(f"✓ Presentation saved to: {output_path.resolve()}")


if __name__ == "__main__":
    main()
