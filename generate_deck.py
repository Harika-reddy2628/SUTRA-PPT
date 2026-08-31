#!/usr/bin/env python3
"""
generate_deck.py - Generates the SUTRA Master Pitch Deck (.pptx)
Theme: Light Elegant Sandstone & Sovereign Forest (Vitt Style)
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
COLOR_CARD_RAISED = RGBColor(0xF4, 0xEC, 0xE1) # Raised Parchment
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


def build_slide_1(prs):
    blank_layout = prs.slide_layouts[6]
    slide = prs.slides.add_slide(blank_layout)

    # 1. Background
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0), Inches(0), SLIDE_WIDTH, SLIDE_HEIGHT, COLOR_BG)

    # 2. Top Header Bar
    # Badge Defense
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(0.5), Inches(0.4), Inches(2.5), Inches(0.35),
              RGBColor(0xF7, 0xEC, 0xE9), COLOR_TERRACOTTA, 1)
    add_text(slide, Inches(0.6), Inches(0.47), Inches(2.3), Inches(0.25),
             "DEFENSE & DISASTER ROBOTICS", FONT_MONO, 8.5, COLOR_TERRACOTTA, True, PP_ALIGN.CENTER)

    # Badge Swarm State
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, Inches(3.1), Inches(0.4), Inches(2.4), Inches(0.35),
              RGBColor(0xEA, 0xF2, 0xEE), COLOR_SAGE, 1)
    add_text(slide, Inches(3.2), Inches(0.47), Inches(2.2), Inches(0.25),
             "● SWARM STATE: 5/5 ACTIVE", FONT_MONO, 8.5, COLOR_FOREST, True, PP_ALIGN.CENTER)

    # Telemetry Meta Right
    add_text(slide, Inches(6.5), Inches(0.47), Inches(6.3), Inches(0.25),
             "SECTOR: KEDARNATH VALLEY (30.73° N, 79.06° E)   |   CLOCK: 2026-08-31 11:22 UTC+05:30",
             FONT_MONO, 8.5, COLOR_MUTED, False, PP_ALIGN.RIGHT)

    # Header Divider Line
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.5), Inches(0.9), Inches(12.333), Inches(0.015),
              COLOR_CARD_BORDER)

    # 3. Main Body - Left Diptych (Title & Thesis)
    # Tag
    add_text(slide, Inches(0.5), Inches(1.25), Inches(7.0), Inches(0.3),
             "— AUTONOMOUS MULTI-AGENT AERIAL SWARM ARCHITECTURE",
             FONT_MONO, 9.5, COLOR_TERRACOTTA, True)

    # Title
    add_text(slide, Inches(0.5), Inches(1.55), Inches(7.0), Inches(1.0),
             "PROJECT SUTRA", FONT_HEADING, 50, COLOR_FOREST, True)

    # Subtitle
    add_text(slide, Inches(0.5), Inches(2.55), Inches(7.0), Inches(0.4),
             "Swarm Unified Tactical Reconnaissance Architecture",
             FONT_BODY, 16, COLOR_SAGE, True)

    # Problem / Solution Statement
    add_text(slide, Inches(0.5), Inches(3.0), Inches(6.8), Inches(0.8),
             "A decentralized, fault-tolerant multi-UAV swarm engineered from first principles for "
             "GPS-denied deep mountain valleys, heavy RF jamming (-5 dB SNR), and sub-meter survivor geolocation under dense forest canopies.",
             FONT_BODY, 12, COLOR_MUTED, False)

    # 4 Subsystems Grid (2x2)
    subsys_data = [
        ("SUBSYS A", "PX4 50Hz Offboard + SUTRA-FSD 3D Occupancy & ORCA 3D", Inches(0.5), Inches(3.9), COLOR_FOREST),
        ("SUBSYS B", "Deep JSCC Neural Transceiver (96.9% Video Compression)", Inches(3.9), Inches(3.9), COLOR_TERRACOTTA),
        ("SUBSYS C", "Tri-Modal RGB/Thermal Edge AI + 3.59cm WGS84 Raycaster", Inches(0.5), Inches(4.55), COLOR_SAGE),
        ("SUBSYS D", "Pegasus 3D GIS GCS + WebGPU 60 FPS Multi-Stream & ATAK CoT", Inches(3.9), Inches(4.55), COLOR_SKY),
    ]

    for code, desc, left, top, col in subsys_data:
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, left, top, Inches(3.3), Inches(0.55),
                  COLOR_CARD, COLOR_CARD_BORDER, 1)
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, left + Inches(0.08), top + Inches(0.12),
                  Inches(0.8), Inches(0.3), col, None)
        add_text(slide, left + Inches(0.08), top + Inches(0.18), Inches(0.8), Inches(0.25),
                 code, FONT_MONO, 7.5, RGBColor(0xFF, 0xFF, 0xFF), True, PP_ALIGN.CENTER)
        add_text(slide, left + Inches(0.95), top + Inches(0.12), Inches(2.25), Inches(0.35),
                 desc, FONT_BODY, 8.5, COLOR_FOREST, True)

    # 4. Main Body - Right Diptych (Telemetry HUD Box)
    hud_left = Inches(7.5)
    hud_top = Inches(1.3)
    hud_w = Inches(5.333)
    hud_h = Inches(3.8)

    # HUD Box Outer
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, hud_left, hud_top, hud_w, hud_h,
              COLOR_CARD, COLOR_CARD_BORDER, 1)

    # Top Gradient Accent Line
    add_shape(slide, MSO_SHAPE.RECTANGLE, hud_left + Inches(0.5), hud_top, hud_w - Inches(1.0), Inches(0.03),
              COLOR_FOREST)

    # HUD Header
    add_text(slide, hud_left + Inches(0.2), hud_top + Inches(0.15), Inches(3.5), Inches(0.3),
             "⬡ TACTICAL MESH TELEMETRY (GAZEBO SIM 8)", FONT_MONO, 9.5, COLOR_FOREST, True)
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, hud_left + Inches(3.8), hud_top + Inches(0.15),
              Inches(1.3), Inches(0.28), RGBColor(0xEA, 0xF2, 0xEE), COLOR_SAGE, 1)
    add_text(slide, hud_left + Inches(3.8), hud_top + Inches(0.2), Inches(1.3), Inches(0.2),
             "SWARM-RAFT LOCKED", FONT_MONO, 7.5, COLOR_FOREST, True, PP_ALIGN.CENTER)

    # HUD Stream Rows
    streams = [
        ("LEADER (UAV-01)", "ORCA 3D ACTIVE | Z = 4.60m | V = 3.20 m/s", COLOR_FOREST),
        ("ECHELON FOLLOWER (UAV 02-05)", "CBF BARRIER CLEARANCE: 4.12m > 2.80m SAFE", COLOR_SAGE),
        ("NEURAL LINK (DEEP JSCC)", "-5.0 dB SNR JAMMING | 41.8 dB PSNR RECON", COLOR_FOREST),
        ("EDGE NEUROFLIGHT INVERSION", "0.04 ms INFERENCE | 18.0 m/s GUST REJECTION", COLOR_SKY),
        ("CONSENSUS STATE", "QUORUM 5/5 | TERM 14 | ZERO SPLIT-BRAIN", COLOR_OCHRE),
    ]

    row_y = hud_top + Inches(0.6)
    for tag, val, val_col in streams:
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, hud_left + Inches(0.2), row_y,
                  hud_w - Inches(0.4), Inches(0.4), COLOR_CARD_RAISED, COLOR_CARD_BORDER, 1)
        add_text(slide, hud_left + Inches(0.3), row_y + Inches(0.1), Inches(2.2), Inches(0.25),
                 tag, FONT_MONO, 8, COLOR_MUTED, True)
        add_text(slide, hud_left + Inches(2.3), row_y + Inches(0.1), hud_w - Inches(2.6), Inches(0.25),
                 val, FONT_MONO, 8, val_col, True, PP_ALIGN.RIGHT)
        row_y += Inches(0.46)

    # Target Acquired Box
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, hud_left + Inches(0.2), row_y + Inches(0.05),
              hud_w - Inches(0.4), Inches(0.6), COLOR_CARD_RAISED, COLOR_SAGE, 1)
    add_text(slide, hud_left + Inches(0.4), row_y + Inches(0.12), Inches(3.3), Inches(0.2),
             "🎯 SURVIVOR TARGET ACQUIRED", FONT_MONO, 8, COLOR_MUTED, True)
    add_text(slide, hud_left + Inches(0.4), row_y + Inches(0.32), Inches(3.3), Inches(0.25),
             "WGS84: 30.73462° N, 79.06691° E", FONT_MONO, 9.5, COLOR_FOREST, True)
    add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, hud_left + Inches(3.8), row_y + Inches(0.18),
              Inches(1.1), Inches(0.32), RGBColor(0xF7, 0xEC, 0xE9), COLOR_TERRACOTTA, 1)
    add_text(slide, hud_left + Inches(3.8), row_y + Inches(0.23), Inches(1.1), Inches(0.25),
             "ERR: 0.0359m", FONT_MONO, 8.5, COLOR_TERRACOTTA, True, PP_ALIGN.CENTER)

    # 5. Bottom Metrics Ribbon (4 Cards)
    metrics_top = Inches(5.35)
    metrics_h = Inches(1.3)
    metric_w = Inches(2.9)
    metric_gap = Inches(0.24)

    metrics = [
        ("232/232", "TESTS", "ZERO-MOCK VERIFICATION",
         "100% automated pytest suite passing with live telemetry stdout", COLOR_FOREST),
        ("96.9%", "BW SAVED", "DEEP JSCC COMPRESSION",
         "512 KB → 16 KB frames surviving extreme -5 dB jamming without cliff", COLOR_TERRACOTTA),
        ("3.59", "CM", "WGS84 DEM GEOLOCATION",
         "Terrain-corrected raycaster error from 30m altitude over mountain slopes", COLOR_SAGE),
        ("60.0", "FPS", "WEBGPU MULTI-STREAM",
         "Locked 60 FPS zero frame-drop tactical 3D GIS Ground Control Station", COLOR_SKY),
    ]

    for i, (num, unit, title, sub, col) in enumerate(metrics):
        m_left = Inches(0.5) + i * (metric_w + metric_gap)
        add_shape(slide, MSO_SHAPE.ROUNDED_RECTANGLE, m_left, metrics_top, metric_w, metrics_h,
                  COLOR_CARD, COLOR_CARD_BORDER, 1)
        # Left color bar
        add_shape(slide, MSO_SHAPE.RECTANGLE, m_left, metrics_top, Inches(0.04), metrics_h, col)

        # Number & unit
        add_text(slide, m_left + Inches(0.15), metrics_top + Inches(0.12), metric_w - Inches(0.3), Inches(0.4),
                 f"{num} {unit}", FONT_HEADING, 20, col, True)
        # Title
        add_text(slide, m_left + Inches(0.15), metrics_top + Inches(0.52), metric_w - Inches(0.3), Inches(0.25),
                 title, FONT_MONO, 8.5, COLOR_FOREST, True)
        # Subtitle
        add_text(slide, m_left + Inches(0.15), metrics_top + Inches(0.78), metric_w - Inches(0.3), Inches(0.45),
                 sub, FONT_BODY, 7.5, COLOR_MUTED, False)

    # 6. Footer Attribution Bar
    footer_top = Inches(6.85)
    add_shape(slide, MSO_SHAPE.RECTANGLE, Inches(0.5), footer_top, Inches(12.333), Inches(0.015),
              COLOR_CARD_BORDER)

    add_text(slide, Inches(0.5), footer_top + Inches(0.12), Inches(8.5), Inches(0.3),
             "Nikhil (Tech Lead · Subsystems A & B)  •  Vedanth Sai Ram (Subsystem C Perception)  •  "
             "Siva Kesava (Subsystem D 3D GIS)  •  Harika (Subsystem E QA & Pitch)  •  Rohith Kumar (Subsystem F Compute)",
             FONT_MONO, 7.5, COLOR_MUTED, False)

    add_text(slide, Inches(9.0), footer_top + Inches(0.12), Inches(3.833), Inches(0.3),
             "● NDMA / DARPA-TIER OPEN ARCHITECTURE · GRAND FINALS 2026",
             FONT_MONO, 7.5, COLOR_FOREST, True, PP_ALIGN.RIGHT)


def main():
    prs = Presentation()
    prs.slide_width = SLIDE_WIDTH
    prs.slide_height = SLIDE_HEIGHT
    prs.core_properties.title = "PROJECT SUTRA — Master Defense & Disaster Robotics Pitch Deck"
    prs.core_properties.author = "Nikhil & SUTRA Core Architecture Team"

    print("Building Slide 1 in Vitt Light Elegant Sandstone & Sovereign Forest Theme...")
    build_slide_1(prs)

    output_path = Path("sutra_pitch_deck.pptx")
    prs.save(str(output_path))
    print(f"Presentation saved to: {output_path.resolve()} ({output_path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
