"""
ppt-artisan - Automated PowerPoint presentation generation toolkit.

Modules:
    deck_builder     - Core deck creation engine with SlideBuilder class.
    design_system    - Design token management (colours, typography, spacing).
    chart_factory    - Chart creation utilities (bar, line, pie, combo).
    template_engine  - Template loading, inspection, and content filling.
    export_utils     - Export, compression, optimisation, and batch processing.

Quick start:
    from ppt_artisan import SlideBuilder
    builder = SlideBuilder()
    builder.create_deck("My Deck", "Author")
    builder.add_title_slide("Hello", "World")
    builder.save("output.pptx")
"""

from .deck_builder import SlideBuilder
from .design_system import DesignSystem
from .chart_factory import ChartFactory
from .template_engine import TemplateEngine
from .export_utils import ExportManager

__all__ = [
    "SlideBuilder",
    "DesignSystem",
    "ChartFactory",
    "TemplateEngine",
    "ExportManager",
]
