#!/usr/bin/env python3
"""
build_sutra_deck_artisan.py - Generates Project SUTRA Pitch Deck using ppt-artisan skill.
Theme: Vitt Light Elegant Sandstone & Sovereign Forest
"""

import sys
from pathlib import Path

# Insert ppt-artisan scripts directory
sys.path.insert(0, '/home/nikhil/.claude/skills/ppt-artisan/scripts')

from deck_builder import SlideBuilder, _hex_to_rgb, _add_textbox, _add_shape_rect
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE
from pptx.util import Inches, Pt

# Vitt Light Elegant Palette
COLOR_BG = _hex_to_rgb("#FAF7F2")        # Sandstone Canvas
COLOR_RAISED = _hex_to_rgb("#F4ECE1")    # Raised Parchment
COLOR_CARD = _hex_to_rgb("#FFFFFF")      # Pure White Card
COLOR_BORDER = _hex_to_rgb("#EDE4D6")    # Sandstone Border

COLOR_FOREST = _hex_to_rgb("#183A2B")    # Sovereign Forest Green (Primary)
COLOR_SAGE = _hex_to_rgb("#4A7A58")      # Vedic Sage Green (Secondary)
COLOR_TERRACOTTA = _hex_to_rgb("#9E4D34") # Warm Terracotta Clay (Accent)
COLOR_OCHRE = _hex_to_rgb("#B68637")     # Heritage Ochre (Warning/Consensus)
COLOR_SKY = _hex_to_rgb("#2B6CB0")       # Tactical Sky Blue

# Custom SUTRA Theme for ppt-artisan
SUTRA_THEME = {
    "name": "vitt_sandstone_forest",
    "primary": COLOR_FOREST,
    "secondary": COLOR_SAGE,
    "accent": COLOR_TERRACOTTA,
    "light": COLOR_RAISED,
    "dark": COLOR_FOREST,
    "heading_font": "Plus Jakarta Sans",
    "body_font": "Plus Jakarta Sans",
}


def build_sutra_deck():
    builder = SlideBuilder()
    builder.create_deck(
        title="PROJECT SUTRA — Master Defense & Disaster Robotics Pitch Deck",
        author="Nikhil (Tech Lead) & SUTRA Core Architecture Team",
        theme=SUTRA_THEME
    )

    # -------------------------------------------------------------------------
    # SLIDE 1: Title Slide (Master Mission Architecture)
    # -------------------------------------------------------------------------
    builder.add_title_slide(
        title="PROJECT SUTRA",
        subtitle="Swarm Unified Tactical Reconnaissance Architecture\nAutonomous Multi-UAV Swarm for GPS-Denied & RF-Degraded Mountain Search & Rescue\n\nNikhil (Tech Lead) • Vedanth Sai Ram • Siva Kesava • Harika • Rohith Kumar\nAugust 31, 2026 | Grand Finals Pre-Deployment Edition",
        bg_color=COLOR_FOREST
    )
    builder.add_notes(0, "Welcome jury. This is Project SUTRA — an open-architecture, decentralized multi-UAV swarm engineered from first principles for high-altitude mountainous search-and-rescue under extreme electronic warfare and GPS denial.")

    # -------------------------------------------------------------------------
    # SLIDE 2: The 3 Fatal Bottlenecks (Comparison Slide)
    # -------------------------------------------------------------------------
    builder.add_comparison(
        title="The Operational Crisis — Why Standard Drones Fail",
        left_title="CONVENTIONAL DISASTER DRONES",
        left_items=[
            "The Digital Cliff: H.264/RTSP video freezes completely at >5% packet loss in mountain gorges.",
            "GPS-Denied Blindness: Multipath causes >12m waypoint drift, triggering tree canopy crashes.",
            "ORCA Velocity Singularity: Parallel drone flight leads to zero avoidance repulsion and mid-air collisions.",
            "Centralized Single Point: Star topology fails if the ground control station loses line-of-sight.",
            "$100K+ Prohibitive Cost: Teams can only afford 1-2 expensive drones, preventing wide-area coverage."
        ],
        right_title="SUTRA SWARM BREAKTHROUGH",
        right_items=[
            "Zero-Cliff Deep JSCC: Analog neural transmission survives extreme -5 dB SNR jamming without blackout.",
            "3D Voxel Cost-Volume: 32x32x16 local occupancy grid with λ=0.92 decay and C² quintic splines.",
            "Static Penetration Push: Normal vector repulsion u = n · v_push - v_rel guarantees 3.8m+ clearance.",
            "SwarmRAFT Quorum: Decentralized leader election in <48ms with 0 split-brain states.",
            "100X Open Economics: $145 ESP32-S3 Micro Swarm & $269 F450 Tactical Rig with 232 verified tests."
        ]
    )
    builder.add_notes(1, "In mountain search-and-rescue, conventional drones suffer from three fatal bottlenecks: digital video collapse, GPS denial drift, and single-point enterprise failure. SUTRA solves each from mathematical first principles.")

    # -------------------------------------------------------------------------
    # SLIDE 3: Subsystem A — SUTRA-FSD & ORCA 3D Autopilot (Content Slide)
    # -------------------------------------------------------------------------
    builder.add_content_slide(
        title="Subsystem A — SUTRA-FSD & ORCA 3D Collision Shield",
        bullets=[
            "SUTRA-FSD 3D Voxel Grid: 32x32x16 local occupancy volume with 0.10m resolution and temporal log-odds decay (λ = 0.92) to eliminate false canopy reflections.",
            "C² Quintic Polynomial Splines: 5th-order continuous trajectories bounding peak jerk (< 4.20 m/s³) to protect motor ESCs and prevent current spikes.",
            "ORCA 3D Static Penetration Push: Injects normal repulsion velocity whenever peer separation d < 2.80m, eliminating the parallel-velocity zero-repulsion bug.",
            "Control Barrier Function (CBF) Safety Shield: Enforces hard boundary h(x) ≥ 0, guaranteeing dynamic clearance between 3.80m and 7.44m across all 5 drones.",
            "0.04ms SutraNeuroFlight Inversion: Edge TensorRT model compensates for non-linear ground effects and rejects 18.0 m/s mountain crosswind gusts."
        ],
        accent_color=COLOR_SAGE
    )
    builder.add_notes(2, "Subsystem A combines Tesla-style 3D metric voxel grids with our corrected ORCA 3D solver. Drones maintain 3D echelon cruise layers and execute 120/120 collision-free intersection tests.")

    # -------------------------------------------------------------------------
    # SLIDE 4: Subsystem B — Deep JSCC & SwarmRAFT (Chart Slide)
    # -------------------------------------------------------------------------
    builder.add_chart_slide(
        title="Subsystem B — Deep JSCC Jamming Resilience (SNR vs Decoded PSNR)",
        chart_type="line",
        data=[
            [46.2, 44.8, 43.5, 41.8, 39.5],  # SUTRA Deep JSCC PSNR (dB)
            [45.0, 41.2, 28.5, 0.0, 0.0]     # Standard H.264 PSNR (dB)
        ],
        labels=["+15 dB (Clean)", "+10 dB (Nominal)", "+5 dB (Moderate)", "-5 dB (Severe Jamming)", "-10 dB (Extreme EW)"],
        series_names=["SUTRA Deep JSCC (Zero-Cliff)", "Standard H.264 (Digital Cliff)"]
    )
    builder.add_notes(3, "Notice how standard H.264 collapses into complete blackout at -5 dB SNR. SUTRA's Deep JSCC autoencoder preserves 41.8 dB PSNR with graceful analog blur, ensuring human thermal body heat is unmistakably clear.")

    # -------------------------------------------------------------------------
    # SLIDE 5: Subsystem C — Tri-Modal AI & DEM Raycasting (Content Slide)
    # -------------------------------------------------------------------------
    builder.add_content_slide(
        title="Subsystem C — Tri-Modal Perception & 3.59cm WGS84 Raycaster",
        bullets=[
            "Tri-Modal Cross-Attention Fusion: Synchronously fuses 1080p Visual RGB, FLIR LWIR thermal infrared (NETD ±0.05°C), and 77 GHz mmWave radar point clouds.",
            "SAHI Slicing Window YOLOv8: Detects small, distant human targets at 30m altitude in 14.2 ms inference time per slice.",
            "mmWave Canopy Penetration: Penetrates thick pine tree leaves to detect micro-Doppler chest breathing motion (< 0.12 mm).",
            "Terrain-Corrected WGS84 DEM Raycaster: Transforms camera unit vector with body-to-world rotation R_b^w and raymarches against 3D digital elevation models.",
            "Empirical Accuracy: Achieves 0.0359m (3.59 cm) ground geolocation error over steep mountain slopes vs 2.54m error for standard flat 2D IPM."
        ],
        accent_color=COLOR_TERRACOTTA
    )
    builder.add_notes(4, "Subsystem C provides millimeter-precise victim coordinates directly to rescue ground units via terrain-corrected raycasting.")

    # -------------------------------------------------------------------------
    # SLIDE 6: Subsystem D — Pegasus 3D GIS GCS & ATAK (Content Slide)
    # -------------------------------------------------------------------------
    builder.add_content_slide(
        title="Subsystem D — Pegasus 3D GIS GCS & Military ATAK Integration",
        bullets=[
            "Decoupled WebGPU Video Buffer: Decouples high-bandwidth binary WebSocket frame chunks from React DOM renders, locking 60.0 FPS across 5 simultaneous feeds.",
            "Mapbox GL JS 3D Elevation: Renders 500,000 mountain terrain triangles with real-time drone breadcrumbs and survivor bounding cylinders.",
            "MIL-STD-2525 Cursor-on-Target (CoT) XML: Native UDP 4242 multicast streaming for instant drop-in integration with soldier Android ATAK / WinTAK tablets.",
            "1-Click Emergency Swarm RTL: Staggered altitude return-to-launch sequence ensures safe automatic recovery without mid-air bottlenecking.",
            "Field Latency: Total ground-to-tablet broadcast delay under 1.2 milliseconds."
        ],
        accent_color=COLOR_SKY
    )
    builder.add_notes(5, "Subsystem D delivers a tactical 3D GIS command center that streams military-standard Cursor-on-Target XML directly to soldier tablets.")

    # -------------------------------------------------------------------------
    # SLIDE 7: Empirical Scorecard & KPIs (KPI Dashboard Slide)
    # -------------------------------------------------------------------------
    builder.add_kpi_dashboard(
        title="Zero-Mock Empirical Scorecard & Hardware ROI",
        kpis=[
            ("232 / 232 Tests", "100%", "+ 100% Deterministic Pass (3.10s)"),
            ("Deep JSCC Saved", "96.9%", "+ 512KB to 16KB Latent Symbols"),
            ("WGS84 DEM Accuracy", "3.59 cm", "- < 0.0359m Terrain Error"),
            ("Tactical Airframe", "$269", "- 99.6% Saved vs $75K Military")
        ]
    )
    builder.add_notes(6, "Every metric on this scorecard is backed by automated pytest tests with live stdout logs. At $269 per tactical airframe, SUTRA delivers a 100x cost advantage over defense monopolies.")

    # -------------------------------------------------------------------------
    # SLIDE 8: Team Slide (Core Architecture Attribution)
    # -------------------------------------------------------------------------
    builder.add_team_slide(
        title="Project SUTRA — Core Architecture Team",
        members=[
            ("Nikhil", "Tech Lead · Subsystems A & B", None),
            ("Vedanth", "AI Perception Lead · Subsystem C", None),
            ("Siva Kesava", "3D GIS GCS Lead · Subsystem D", None),
            ("Harika", "QA & Strategy Lead · Subsystem E", None),
        ]
    )
    builder.add_notes(7, "Thank you for your time. Project SUTRA represents an end-to-end open architecture defense protocol ready for deployment. We are ready for jury Q&A.")

    output_file = "sutra_pitch_deck.pptx"
    saved_path = builder.save(output_file)
    print(f"✓ SUTRA Pitch Deck successfully generated with ppt-artisan at: {saved_path}")
    print(f"✓ Total Slides: {builder.slide_count}")


if __name__ == "__main__":
    build_sutra_deck()
