#!/usr/bin/env python3
"""
generate_deck.py - Generates Project SUTRA PowerPoint Presentation (.pptx)
Compliant with PPT Artisan Skills & Web Aura Architectural Design System:
- Slide 01: Title Slide (Monumental headline, 3 Grounded Tabs, Team Subsystem Roster)
- Slide 02: The Problem (Prominent Slide Title, Left Accent Bar, 6x6 Bullets, 3D Isometric Failure Illustrations & Big Full-Bleed Photo Card)
"""

from pathlib import Path
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# Web Aura & PPT Artisan Color Palette
COLOR_BG = RGBColor(0xFF, 0xFF, 0xFF)        # Pure White (#FFFFFF)
COLOR_BLACK = RGBColor(0x00, 0x00, 0x00)     # Solid Black (#000000)
COLOR_NAVY = RGBColor(0x0A, 0x16, 0x28)      # Deep Navy Accent (#0A1628)
COLOR_GRAY = RGBColor(0x37, 0x41, 0x51)      # Dark Gray 6x6 Text (#374151)
COLOR_SLATE = RGBColor(0x47, 0x55, 0x69)     # Slate Neutral (#475569)
COLOR_MUTED = RGBColor(0x64, 0x74, 0x8B)     # Muted Text (#64748B)
COLOR_DIM = RGBColor(0x94, 0xA3, 0xB8)       # Dim Label (#94A3B8)
COLOR_BORDER = RGBColor(0xE2, 0xE8, 0xF0)    # Light Border (#E2E8F0)
COLOR_CARD_BG = RGBColor(0xF8, 0xFA, 0xFC)   # Slate Surface (#F8FAFC)
COLOR_WATERMARK = RGBColor(0xF1, 0xF5, 0xF9) # Faint Watermark Number (#F1F5F9)
COLOR_EMERALD = RGBColor(0x04, 0x78, 0x57)   # Emerald Status Pill
COLOR_LIGHT_EMERALD = RGBColor(0x34, 0xD3, 0x99) # Emerald Green Text (#34D399)
COLOR_RED = RGBColor(0xD7, 0x19, 0x20)       # Crimson Warning Pill

FONT_HEADING = "Plus Jakarta Sans"
FONT_SERIF = "Georgia"
FONT_BODY = "Inter"
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


def build_slide_01_title(prs):
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    # 1. Background Grid Pattern
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), SLIDE_WIDTH, SLIDE_HEIGHT, COLOR_BG)
    grid_spacing = 0.5
    for x_step in range(1, 26):
        x = x_step * grid_spacing
        add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(x), Inches(0), Inches(0.008), SLIDE_HEIGHT, COLOR_BORDER)
    for y_step in range(1, 15):
        y = y_step * grid_spacing
        add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(y), SLIDE_WIDTH, Inches(0.008), COLOR_BORDER)

    # 2. Top Header
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(0.55), Inches(0.35), Inches(0.35), COLOR_BLACK)
    add_text(slide, Inches(1.25), Inches(0.62), Inches(6.0), Inches(0.3),
             "TEAM OFFGRID  /  DEFENSE & DISASTER ROBOTICS", FONT_HEADING, 9.5, COLOR_BLACK, bold=True)

    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.8), Inches(0.58), Inches(1.8), Inches(0.3), COLOR_CARD_BG, COLOR_BORDER)
    add_shape(slide, MSO_SHAPE.OVAL, Inches(9.95), Inches(0.68), Inches(0.08), Inches(0.08), COLOR_EMERALD)
    add_text(slide, Inches(10.1), Inches(0.64), Inches(1.5), Inches(0.2), "AUTONOMOUS SWARM", FONT_HEADING, 7.5, COLOR_SLATE, bold=True)
    add_text(slide, Inches(11.7), Inches(0.62), Inches(1.5), Inches(0.3),
             "AUG 2026 • REV 1.0", FONT_MONO, 8.5, COLOR_MUTED, align=PP_ALIGN.RIGHT)

    # 3. Center Hero
    add_text(slide, Inches(0.8), Inches(1.55), Inches(11.0), Inches(0.4),
             "“When GPS fails and RF links jam, SUTRA geonavigates and locates survivors in real-time.”",
             FONT_SERIF, 18, COLOR_BLACK, italic=True)

    bracket_len = Inches(0.35)
    bracket_thick = Inches(0.02)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.6), Inches(2.05), bracket_len, bracket_thick, COLOR_BLACK)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.6), Inches(2.05), bracket_thick, bracket_len, COLOR_BLACK)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(6.0), Inches(3.75), bracket_len, bracket_thick, COLOR_BLACK)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(6.33), Inches(3.42), bracket_thick, bracket_len, COLOR_BLACK)

    add_text(slide, Inches(0.8), Inches(2.05), Inches(8.0), Inches(0.8), "PROJECT", FONT_HEADING, 52, COLOR_BLACK, bold=True)
    add_text(slide, Inches(0.8), Inches(2.8), Inches(8.0), Inches(0.8), "SUTRA.", FONT_HEADING, 52, COLOR_SLATE, italic=True)

    add_text(slide, Inches(0.8), Inches(3.68), Inches(10.0), Inches(0.45),
             "Swarm Unified Tactical Reconnaissance Architecture — decentralized multi-UAV flight, Deep JSCC neural zero-cliff video, and 3.59cm terrain-corrected DEM survivor geolocation.",
             FONT_BODY, 12.0, COLOR_SLATE)

    # Grounded Tabs
    grounded_tabs = [
        ("01", "DECENTRALIZED GNC", "50Hz", "Offboard Rate", "PX4 MicroXRCE + VIO EKF2", COLOR_BLACK),
        ("02", "SEMANTIC WIRELESS", "-5dB", "Jam Resilience", "Deep JSCC Zero-Cliff Video", COLOR_NAVY),
        ("03", "TERRAIN GEOLOCATION", "3.59cm", "Geo-Accuracy", "WGS84 3D DEM Raycasting", COLOR_EMERALD),
    ]
    card_w = Inches(2.7)
    card_h = Inches(1.15)
    card_gap = Inches(0.2)
    for i, (num, tag, val, label, sub, tag_color) in enumerate(grounded_tabs):
        c_left = Inches(0.8) + i * (card_w + card_gap)
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, c_left, Inches(4.3), card_w, card_h, COLOR_CARD_BG, COLOR_BORDER)
        add_text(slide, c_left + Inches(1.8), Inches(4.25), Inches(0.8), Inches(0.6), num, FONT_MONO, 28, COLOR_WATERMARK, bold=True, align=PP_ALIGN.RIGHT)
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, c_left + Inches(0.12), Inches(4.4), Inches(1.3), Inches(0.2), tag_color)
        add_text(slide, c_left + Inches(0.12), Inches(4.42), Inches(1.3), Inches(0.18), tag, FONT_HEADING, 6.2, COLOR_BG, bold=True, align=PP_ALIGN.CENTER)
        add_text(slide, c_left + Inches(0.12), Inches(4.65), Inches(1.4), Inches(0.4), val, FONT_HEADING, 19, COLOR_BLACK, bold=True)
        add_text(slide, c_left + Inches(1.2), Inches(4.72), Inches(1.3), Inches(0.3), label, FONT_HEADING, 9, COLOR_SLATE, bold=True)
        add_text(slide, c_left + Inches(0.12), Inches(5.1), Inches(2.45), Inches(0.25), sub, FONT_BODY, 7.5, COLOR_MUTED)

    # 4. Bottom Roster Bar
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(5.65), Inches(11.733), Inches(0.015), COLOR_BORDER)
    add_text(slide, Inches(0.8), Inches(5.75), Inches(6.0), Inches(0.2), "CORE ARCHITECTURE TEAM (OFFGRID)", FONT_HEADING, 8.0, COLOR_DIM, bold=True)
    add_text(slide, Inches(7.5), Inches(5.75), Inches(5.033), Inches(0.2), "RESEARCH-BACKED & EMPIRICALLY VALIDATED", FONT_HEADING, 8.0, COLOR_SLATE, bold=True, align=PP_ALIGN.RIGHT)

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
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, left_pos, Inches(6.0), col_w, Inches(1.15), COLOR_CARD_BG, COLOR_BORDER)
        add_text(slide, left_pos + Inches(0.12), Inches(6.08), col_w - Inches(0.24), Inches(0.25), name, FONT_HEADING, 10.5, COLOR_BLACK, bold=True)
        add_text(slide, left_pos + Inches(0.12), Inches(6.32), col_w - Inches(0.24), Inches(0.22), role, FONT_BODY, 8.0, COLOR_SLATE)
        badge_bg = COLOR_BLACK if is_lead else COLOR_BORDER
        badge_txt_color = COLOR_BG if is_lead else COLOR_NAVY
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, left_pos + Inches(0.12), Inches(6.65), Inches(1.2), Inches(0.22), badge_bg)
        add_text(slide, left_pos + Inches(0.12), Inches(6.67), Inches(1.2), Inches(0.2), badge, FONT_HEADING, 6.8, badge_txt_color, bold=True, align=PP_ALIGN.CENTER)


def build_slide_02_problem(prs):
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    # 1. Background Grid Pattern
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), SLIDE_WIDTH, SLIDE_HEIGHT, COLOR_BG)
    grid_spacing = 0.5
    for x_step in range(1, 26):
        x = x_step * grid_spacing
        add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(x), Inches(0), Inches(0.008), SLIDE_HEIGHT, COLOR_BORDER)
    for y_step in range(1, 15):
        y = y_step * grid_spacing
        add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(y), SLIDE_WIDTH, Inches(0.008), COLOR_BORDER)

    # 2. Top Section: Left Accent Bar + Prominent Slide Title
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.8), Inches(0.62), Inches(0.1), Inches(0.36), COLOR_NAVY)
    add_text(slide, Inches(1.05), Inches(0.65), Inches(4.5), Inches(0.35),
             "THE PROBLEM", FONT_MONO, 13, COLOR_NAVY, bold=True)
    
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(9.6), Inches(0.60), Inches(2.9), Inches(0.36), COLOR_CARD_BG, COLOR_BORDER)
    add_shape(slide, MSO_SHAPE.OVAL, Inches(9.8), Inches(0.72), Inches(0.1), Inches(0.1), COLOR_RED)
    add_text(slide, Inches(9.95), Inches(0.66), Inches(2.5), Inches(0.25),
             "RESCUE DRONE FAILURE MODES", FONT_MONO, 8.0, COLOR_SLATE, bold=True, align=PP_ALIGN.CENTER)

    # 3. Left Column: Simple Conclusion Headline + 6x6 Simple Bullets
    add_text(slide, Inches(0.8), Inches(1.35), Inches(7.0), Inches(1.1),
             "GPS Loss and Radio Blackouts Cripple Disaster Rescue",
             FONT_HEADING, 28, COLOR_BLACK, bold=True)

    bullets = [
        "Mountain valleys cut drone video feeds",
        "Dense trees block satellite GPS signals",
        "Single control towers cause mission failure",
        "Manual searching delays finding trapped victims",
        "Military drones cost over $50,000 each",
    ]

    bullet_start_y = Inches(2.55)
    bullet_gap = Inches(0.48)
    for i, b_text in enumerate(bullets):
        curr_y = bullet_start_y + i * bullet_gap
        add_shape(slide, MSO_SHAPE.OVAL, Inches(0.82), curr_y + Inches(0.06), Inches(0.09), Inches(0.09), COLOR_NAVY)
        add_text(slide, Inches(1.02), curr_y, Inches(6.8), Inches(0.4),
                 b_text, FONT_BODY, 15, COLOR_GRAY, bold=False)

    # 3D Isometric Failure Schematics Strip
    add_text(slide, Inches(0.8), Inches(5.05), Inches(5.0), Inches(0.2),
             "TACTICAL FAILURE SCHEMATICS", FONT_MONO, 7.5, COLOR_DIM, bold=True)

    schematics = [
        ("RF Ridge Shadow", "Video Stream Severance", "assets/illustrations/rf_mountain_shadow.jpg"),
        ("Canopy Shadow", "GNSS Multi-Path Drift", "assets/illustrations/gps_canopy_shadow.jpg"),
        ("Central Link Loss", "Single Point Abort", "assets/illustrations/single_link_loss.jpg"),
    ]
    sch_w = Inches(2.2)
    sch_gap = Inches(0.18)
    for i, (sch_title, sch_sub, img_file) in enumerate(schematics):
        sx = Inches(0.8) + i * (sch_w + sch_gap)
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, sx, Inches(5.28), sch_w, Inches(1.02), COLOR_CARD_BG, COLOR_BORDER)
        if Path(img_file).exists():
            slide.shapes.add_picture(img_file, sx + Inches(0.06), Inches(5.32), sch_w - Inches(0.12), Inches(0.55))
        add_text(slide, sx + Inches(0.08), Inches(5.92), sch_w - Inches(0.16), Inches(0.2), sch_title, FONT_HEADING, 8.0, COLOR_BLACK, bold=True)
        add_text(slide, sx + Inches(0.08), Inches(6.10), sch_w - Inches(0.16), Inches(0.18), sch_sub, FONT_MONO, 6.5, COLOR_MUTED)

    # 4. Right Column: Reference-Matching Big Full-Bleed Image Card Carousel
    add_text(slide, Inches(8.0), Inches(1.35), Inches(4.5), Inches(0.25),
             "REAL DISASTER FIELD EVIDENCE", FONT_MONO, 8.5, COLOR_DIM, bold=True)
    add_text(slide, Inches(10.8), Inches(1.35), Inches(1.7), Inches(0.25),
             "SOURCE 01 / 03", FONT_MONO, 8.5, COLOR_MUTED, bold=True, align=PP_ALIGN.RIGHT)

    # Stack Layer 2 & 1 shadows
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.2), Inches(1.95), Inches(4.3), Inches(3.8), RGBColor(0x30, 0x30, 0x30))
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.1), Inches(1.85), Inches(4.4), Inches(3.9), RGBColor(0x20, 0x20, 0x20))

    # Top Active Card Background Frame
    card_rect = add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.0), Inches(1.75), Inches(4.5), Inches(4.0), COLOR_BLACK)

    # Embed Full Bleed Image
    img_path = Path("assets/disaster/wayanad_rescue.jpg")
    if img_path.exists():
        slide.shapes.add_picture(str(img_path), Inches(8.0), Inches(1.75), Inches(4.5), Inches(4.0))

    # Dark Gradient Overlay Box
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(8.0), Inches(3.6), Inches(4.5), Inches(2.15), RGBColor(0x0A, 0x0A, 0x0A))

    # Top Monogram Circle + Badge
    add_shape(slide, MSO_SHAPE.OVAL, Inches(8.25), Inches(1.95), Inches(0.4), Inches(0.4), RGBColor(0x40, 0x40, 0x40))
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(10.6), Inches(1.95), Inches(1.7), Inches(0.28), RGBColor(0x20, 0x20, 0x20))
    add_text(slide, Inches(10.6), Inches(1.98), Inches(1.7), Inches(0.25), "GOVT DISASTER AUDIT", FONT_MONO, 7.0, COLOR_BG, bold=True, align=PP_ALIGN.CENTER)

    # Bottom Overlay Typography
    add_text(slide, Inches(8.25), Inches(3.8), Inches(4.0), Inches(0.45),
             "Wayanad Landslide Search", FONT_HEADING, 16, COLOR_BG, bold=True)
    add_text(slide, Inches(8.25), Inches(4.25), Inches(4.0), Inches(0.25),
             "Western Ghats • NDMA Official Disaster Review", FONT_MONO, 8.0, COLOR_DIM)

    add_text(slide, Inches(8.25), Inches(4.6), Inches(4.0), Inches(0.22),
             "FIELD BOTTLENECK", FONT_MONO, 7.5, COLOR_LIGHT_EMERALD, bold=True)
    add_text(slide, Inches(8.25), Inches(4.85), Inches(4.0), Inches(0.8),
             "“70% of commercial drones lost connection behind mountain ridges and crashed under thick tree canopy.”",
             FONT_BODY, 9.0, RGBColor(0xE2, 0xE8, 0xF0), italic=False)

    # Continuous Indicator Dots
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.0), Inches(5.95), Inches(0.6), Inches(0.08), COLOR_BLACK)
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.7), Inches(5.95), Inches(0.12), Inches(0.08), COLOR_BORDER)
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(8.9), Inches(5.95), Inches(0.12), Inches(0.08), COLOR_BORDER)
    add_text(slide, Inches(10.0), Inches(5.88), Inches(2.5), Inches(0.25), "CONTINUOUS LOOP", FONT_MONO, 7.5, COLOR_DIM, align=PP_ALIGN.RIGHT)

    # 5. Footer (Page 2 & Company attribution)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.8), Inches(6.5), Inches(11.733), Inches(0.015), COLOR_BORDER)
    add_text(slide, Inches(0.8), Inches(6.65), Inches(3.0), Inches(0.3),
             "PAGE 02", FONT_MONO, 9, COLOR_MUTED, bold=False)
    add_text(slide, Inches(7.5), Inches(6.65), Inches(5.033), Inches(0.3),
             "TEAM OFFGRID — PROJECT SUTRA", FONT_MONO, 9, COLOR_NAVY, bold=True, align=PP_ALIGN.RIGHT)


def main():
    prs = Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT
    prs.core_properties.title = "PROJECT SUTRA Pitch Deck"
    prs.core_properties.author = "Team Offgrid"

    print("Building Slide 1 (Title) & Slide 2 (The Problem with 3D Isometric Illustrations)...")
    build_slide_01_title(prs)
    build_slide_02_problem(prs)

    output_path = Path("sutra_pitch_deck.pptx")
    prs.save(str(output_path))
    print(f"✓ Presentation saved to: {output_path.resolve()}")


if __name__ == "__main__":
    main()
