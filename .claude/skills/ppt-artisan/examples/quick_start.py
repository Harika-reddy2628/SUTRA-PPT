#!/usr/bin/env python3
"""
PPT Artisan — Quick Start Example
Generates a complete 10-slide pitch deck from scratch.
"""

import sys
sys.path.insert(0, '/home/nikhil/.claude/skills/ppt-artisan/scripts')

from deck_builder import SlideBuilder
from pptx.dml.color import RGBColor

def create_startup_pitch():
    """Create a 10-slide startup pitch deck."""
    builder = SlideBuilder()

    # Slide 1: Title
    builder.add_title_slide(
        title="AI-Powered Healthcare",
        subtitle="Revolutionizing Patient Outcomes Through Machine Learning"
    )

    # Slide 2: The Problem
    builder.add_content_slide(
        title="Medical Errors Cost 250,000 Lives Annually",
        bullets=[
            "3rd leading cause of death in the US",
            "$46B annual cost from diagnostic delays",
            "30% error rate in high-volume radiology",
            "Radiologist burnout at all-time high"
        ]
    )

    # Slide 3: Section Divider
    builder.add_section_divider(
        title="Our Solution",
        subtitle="AI-assisted diagnosis that catches what humans miss"
    )

    # Slide 4: Solution Overview
    builder.add_content_slide(
        title="AI Radiology Assistant",
        bullets=[
            "Real-time anomaly detection in medical images",
            "99.2% accuracy on chest X-rays",
            "Integrates with existing PACS workflow",
            "FDA 510(k) clearance pending"
        ]
    )

    # Slide 5: Market Opportunity
    builder.add_chart_slide(
        title="Healthcare AI Market Growing 40% YoY",
        chart_type="bar",
        data=[[12.5, 18.2, 27.8, 41.3]],
        labels=["2024", "2025", "2026", "2027"],
        series_names=["Market Size ($B)"]
    )

    # Slide 6: Comparison
    builder.add_comparison(
        title="Manual Review vs Our AI Solution",
        left_title="Manual Review",
        left_items=["30% error rate", "20 min per scan", "Radiologist burnout"],
        right_title="Our AI Solution",
        right_items=["99.2% accuracy", "3 seconds per scan", "Consistent quality"]
    )

    # Slide 7: Traction
    builder.add_kpi_dashboard(
        title="Early Traction",
        kpis=[
            ("PILOTS", "12", "+4 this quarter"),
            ("ACCURACY", "99.2%", "+0.3% vs v1"),
            ("SPEED", "3sec", "vs 20min manual"),
            ("PIPELINE", "$8.2M", "in LOIs")
        ]
    )

    # Slide 8: Business Model
    builder.add_content_slide(
        title="SaaS Model with 85% Gross Margins",
        bullets=[
            "Per-study pricing: $5-15 per scan",
            "Enterprise licensing: $50K-200K/year",
            "Implementation fee: $25K one-time",
            "Target LTV:CAC ratio: 5:1"
        ]
    )

    # Slide 9: Team
    builder.add_team_slide(
        title="The Team",
        members=[
            ("Dr. Sarah Chen", "CEO", "15yr healthcare AI, ex-Google Health"),
            ("James Park", "CTO", "Former ML lead, Stanford Medicine"),
            ("Dr. Priya Patel", "CMO", "Radiologist, 10yr clinical experience")
        ]
    )

    # Slide 10: The Ask
    builder.add_content_slide(
        title="Raising $5M Series A",
        bullets=[
            "FDA clearance completion (6 months)",
            "Scale to 50 hospital pilots",
            "Hire 8 engineers and 3 clinical staff",
            "Launch commercial rollout Q2 2027"
        ]
    )

    # Save
    output_path = "/home/nikhil/Desktop/sutra_pitch_deck/ai_healthcare_pitch.pptx"
    builder.save(output_path)
    print(f"Deck saved to: {output_path}")
    print(f"10 slides generated successfully!")

if __name__ == "__main__":
    create_startup_pitch()
