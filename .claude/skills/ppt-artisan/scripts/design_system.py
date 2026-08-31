"""
design_system.py - Design token management for PowerPoint presentations.

Provides colour palette generation, typography scale calculation,
spacing grid system, gradient presets, and shadow presets.

Usage:
    from design_system import DesignSystem
    ds = DesignSystem()
    palette = ds.generate_palette("#1B2A4A")
    scale = ds.typography_scale()
"""

from __future__ import annotations

import colorsys
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional, Tuple

from pptx.dml.color import RGBColor
from pptx.util import Inches, Pt, Emu


# ---------------------------------------------------------------------------
# Data classes for design tokens
# ---------------------------------------------------------------------------

@dataclass
class ColorToken:
    """Named colour with hex, RGB and HSL representations."""
    name: str
    hex_code: str
    rgb: RGBColor
    hsl: Tuple[int, int, int]

    def __repr__(self) -> str:
        return f"ColorToken({self.name}, {self.hex_code})"


@dataclass
class TypeToken:
    """Typographic scale entry."""
    name: str
    size_pt: float
    size_px: float
    line_height_pt: float
    weight: str
    font_family: str


@dataclass
class SpacingToken:
    """Spacing grid entry."""
    name: str
    value_inch: float
    value_emu: int
    value_pt: float


@dataclass
class ShadowPreset:
    """Box-shadow preset (offset, blur, spread, colour, opacity%)."""
    name: str
    offset_x: float
    offset_y: float
    blur: float
    spread: float
    color: RGBColor
    opacity: int


# ---------------------------------------------------------------------------
# DesignSystem
# ---------------------------------------------------------------------------

class DesignSystem:
    """Design token management: palette, type scale, spacing, gradients, shadows."""

    # Default colour palette
    DEFAULT_PALETTE: List[str] = [
        "#1B2A4A",  # primary navy
        "#2E86AB",  # secondary teal
        "#E84D3D",  # accent coral
        "#27AE60",  # success green
        "#F39C12",  # warning amber
        "#ECF0F1",  # light grey
        "#2C3E50",  # dark grey
        "#FFFFFF",  # white
        "#000000",  # black
    ]

    # Default typography scale (modular scale ~1.25)
    DEFAULT_TYPE_SCALE: List[Tuple[str, float, str]] = [
        ("display",  48, "bold"),
        ("h1",       36, "bold"),
        ("h2",       28, "bold"),
        ("h3",       22, "semibold"),
        ("body-lg",  18, "regular"),
        ("body",     16, "regular"),
        ("body-sm",  14, "regular"),
        ("caption",  12, "regular"),
        ("overline", 10, "medium"),
    ]

    # Default spacing grid (inches)
    DEFAULT_SPACING: List[Tuple[str, float]] = [
        ("xxs",  0.0625),
        ("xs",   0.125),
        ("sm",   0.25),
        ("md",   0.5),
        ("lg",   0.75),
        ("xl",   1.0),
        ("2xl",  1.5),
        ("3xl",  2.0),
        ("4xl",  3.0),
    ]

    def __init__(self, heading_font: str = "Montserrat",
                 body_font: str = "Inter"):
        self.heading_font = heading_font
        self.body_font = body_font

    # ------------------------------------------------------------------
    # Colour utilities
    # ------------------------------------------------------------------

    @staticmethod
    def hex_to_rgb(hex_code: str) -> RGBColor:
        """Convert a hex colour string to RGBColor."""
        h = hex_code.lstrip("#")
        if len(h) != 6:
            raise ValueError(f"Invalid hex: {hex_code}")
        return RGBColor(int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))

    @staticmethod
    def rgb_to_hex(r: int, g: int, b: int) -> str:
        """Convert RGB (0-255) to hex string."""
        return f"#{r:02X}{g:02X}{b:02X}"

    @staticmethod
    def rgb_to_hsl(r: int, g: int, b: int) -> Tuple[int, int, int]:
        """Convert RGB (0-255) to HSL (h 0-360, s 0-100, l 0-100)."""
        h, l, s = colorsys.rgb_to_hls(r / 255.0, g / 255.0, b / 255.0)
        return (int(h * 360), int(s * 100), int(l * 100))

    @staticmethod
    def hsl_to_rgb(h: int, s: int, l: int) -> RGBColor:
        """Convert HSL (h 0-360, s 0-100, l 0-100) to RGBColor."""
        r, g, b = colorsys.hls_to_rgb(h / 360.0, l / 100.0, s / 100.0)
        return RGBColor(int(r * 255), int(g * 255), int(b * 255))

    # ------------------------------------------------------------------
    # Palette generator
    # ------------------------------------------------------------------

    def generate_palette(self, base_hex: str, scheme: str = "analogous",
                         count: int = 5) -> List[ColorToken]:
        """Generate a colour palette from a base hex colour.

        Schemes: analogous, complementary, triadic, split-complementary, monochromatic.
        """
        base = self.hex_to_rgb(base_hex)
        r, g, b = base[0], base[1], base[2]
        h, s, l = self.rgb_to_hsl(r, g, b)

        angles: Dict[str, List[int]] = {
            "analogous":           [0, 30, 60, -30, -60],
            "complementary":       [0, 180, 160, 200, 30],
            "triadic":             [0, 120, 240, 60, 180],
            "split-complementary": [0, 150, 210, 30, 330],
            "monochromatic":       [0, 0, 0, 0, 0],
        }
        angle_list = angles.get(scheme, angles["analogous"])[:count]

        palette: List[ColorToken] = []
        for i, angle in enumerate(angle_list):
            new_h = (h + angle) % 360
            if scheme == "monochromatic":
                new_l = max(10, min(90, l + (i - 2) * 15))
                new_s = max(10, min(100, s + (i - 2) * 5))
            else:
                new_l = l
                new_s = s
            token_rgb = self.hsl_to_rgb(new_h, new_s, new_l)
            hex_val = self.rgb_to_hex(token_rgb[0], token_rgb[1], token_rgb[2])
            name = f"color-{i + 1}"
            palette.append(ColorToken(name, hex_val, token_rgb, (new_h, new_s, new_l)))

        return palette

    def default_palette(self) -> List[ColorToken]:
        """Return the default colour palette as ColorToken objects."""
        tokens: List[ColorToken] = []
        for i, hex_code in enumerate(self.DEFAULT_PALETTE):
            rgb = self.hex_to_rgb(hex_code)
            r, g, b = rgb[0], rgb[1], rgb[2]
            hsl = self.rgb_to_hsl(r, g, b)
            names = ["primary", "secondary", "accent", "success", "warning",
                     "light", "dark", "white", "black"]
            tokens.append(ColorToken(names[i] if i < len(names) else f"color-{i}",
                                     hex_code, rgb, hsl))
        return tokens

    # ------------------------------------------------------------------
    # Typography scale
    # ------------------------------------------------------------------

    def typography_scale(self, base_size: float = 16,
                         scale_ratio: float = 1.25,
                         font: Optional[str] = None) -> List[TypeToken]:
        """Calculate a modular typographic scale.

        If base_size/scale_ratio are omitted, returns the default preset scale.
        """
        font = font or self.body_font
        tokens: List[TypeToken] = []
        for name, size_pt, weight in self.DEFAULT_TYPE_SCALE:
            tokens.append(TypeToken(
                name=name,
                size_pt=size_pt,
                size_px=round(size_pt * 1.333, 1),  # pt -> px approx
                line_height_pt=round(size_pt * 1.4, 1),
                weight=weight,
                font_family=font,
            ))
        return tokens

    def custom_scale(self, base_pt: float = 14, ratio: float = 1.25,
                     steps: int = 8) -> List[TypeToken]:
        """Generate a custom modular scale from a base size."""
        tokens: List[TypeToken] = []
        for i in range(steps):
            size = round(base_pt * (ratio ** i), 1)
            name = f"step-{i}"
            tokens.append(TypeToken(
                name=name,
                size_pt=size,
                size_px=round(size * 1.333, 1),
                line_height_pt=round(size * 1.4, 1),
                weight="regular",
                font_family=self.body_font,
            ))
        return tokens

    # ------------------------------------------------------------------
    # Spacing grid
    # ------------------------------------------------------------------

    def spacing_grid(self) -> List[SpacingToken]:
        """Return the default spacing grid."""
        tokens: List[SpacingToken] = []
        for name, inches_val in self.DEFAULT_SPACING:
            tokens.append(SpacingToken(
                name=name,
                value_inch=inches_val,
                value_emu=int(Inches(inches_val)),
                value_pt=round(inches_val * 72, 1),
            ))
        return tokens

    def custom_spacing(self, base: float = 0.125, ratio: float = 2.0,
                       steps: int = 8) -> List[SpacingToken]:
        """Generate a custom spacing scale."""
        tokens: List[SpacingToken] = []
        for i in range(steps):
            val = round(base * (ratio ** i), 4)
            name = f"space-{i}"
            tokens.append(SpacingToken(
                name=name,
                value_inch=val,
                value_emu=int(Inches(val)),
                value_pt=round(val * 72, 1),
            ))
        return tokens

    # ------------------------------------------------------------------
    # Gradient presets
    # ------------------------------------------------------------------

    def gradient_presets(self) -> Dict[str, Dict[str, Any]]:
        """Return gradient presets as dicts with start/end colour + angle."""
        return {
            "ocean": {
                "start": RGBColor(0x1B, 0x2A, 0x4A),
                "end": RGBColor(0x2E, 0x86, 0xAB),
                "angle": 135,
            },
            "sunset": {
                "start": RGBColor(0xE8, 0x4D, 0x3D),
                "end": RGBColor(0xF3, 0x9C, 0x12),
                "angle": 180,
            },
            "forest": {
                "start": RGBColor(0x1B, 0x2A, 0x4A),
                "end": RGBColor(0x27, 0xAE, 0x60),
                "angle": 160,
            },
            "midnight": {
                "start": RGBColor(0x0F, 0x0C, 0x29),
                "end": RGBColor(0x30, 0x2B, 0x63),
                "angle": 135,
            },
            "corporate": {
                "start": RGBColor(0x2C, 0x3E, 0x50),
                "end": RGBColor(0xEC, 0xF0, 0xF1),
                "angle": 180,
            },
            "warm": {
                "start": RGBColor(0xE8, 0x4D, 0x3D),
                "end": RGBColor(0x1B, 0x2A, 0x4A),
                "angle": 135,
            },
        }

    def interpolate_gradient(self, start_hex: str, end_hex: str,
                             steps: int = 5) -> List[RGBColor]:
        """Interpolate between two hex colours and return a list of RGBColor."""
        start = self.hex_to_rgb(start_hex)
        end = self.hex_to_rgb(end_hex)
        colors: List[RGBColor] = []
        for i in range(steps):
            t = i / max(steps - 1, 1)
            r = int(start[0] + (end[0] - start[0]) * t)
            g = int(start[1] + (end[1] - start[1]) * t)
            b = int(start[2] + (end[2] - start[2]) * t)
            colors.append(RGBColor(r, g, b))
        return colors

    # ------------------------------------------------------------------
    # Shadow presets
    # ------------------------------------------------------------------

    def shadow_presets(self) -> Dict[str, ShadowPreset]:
        """Return shadow presets suitable for shapes/boxes."""
        shadow_color = RGBColor(0x00, 0x00, 0x00)
        return {
            "sm": ShadowPreset("small", 0, 1, 2, 0, shadow_color, 10),
            "md": ShadowPreset("medium", 0, 2, 6, 0, shadow_color, 15),
            "lg": ShadowPreset("large", 0, 4, 12, 0, shadow_color, 20),
            "xl": ShadowPreset("extra-large", 0, 8, 24, 0, shadow_color, 25),
            "inner": ShadowPreset("inner", 0, 2, 4, 0, shadow_color, 10),
            "colored": ShadowPreset("colored", 0, 4, 12, 0,
                                    RGBColor(0x2E, 0x86, 0xAB), 30),
        }

    # ------------------------------------------------------------------
    # Full token export
    # ------------------------------------------------------------------

    def export_tokens(self) -> Dict[str, Any]:
        """Export all design tokens as a nested dictionary."""
        return {
            "palette": {t.name: {"hex": t.hex_code, "rgb": (t.rgb[0], t.rgb[1], t.rgb[2]),
                                 "hsl": t.hsl} for t in self.default_palette()},
            "typography": {t.name: {"size_pt": t.size_pt, "size_px": t.size_px,
                                    "line_height": t.line_height_pt, "weight": t.weight,
                                    "font": t.font_family} for t in self.typography_scale()},
            "spacing": {s.name: {"inch": s.value_inch, "pt": s.value_pt,
                                 "emu": s.value_emu} for s in self.spacing_grid()},
            "gradients": {k: {"start": str(v["start"]), "end": str(v["end"]),
                              "angle": v["angle"]} for k, v in self.gradient_presets().items()},
            "shadows": {k: {"offset": (v.offset_x, v.offset_y), "blur": v.blur,
                            "spread": v.spread, "opacity": v.opacity}
                        for k, v in self.shadow_presets().items()},
        }


# ---------------------------------------------------------------------------
# CLI entry point
# ---------------------------------------------------------------------------

if __name__ == "__main__":
    ds = DesignSystem()

    print("=== Default Palette ===")
    for t in ds.default_palette():
        print(f"  {t.name:12s} {t.hex_code}  HSL{t.hsl}")

    print("\n=== Typography Scale ===")
    for t in ds.typography_scale():
        print(f"  {t.name:12s} {t.size_pt:5.0f}pt  {t.weight}")

    print("\n=== Spacing Grid ===")
    for s in ds.spacing_grid():
        print(f"  {s.name:6s} {s.value_inch:.4f}\"  {s.value_pt:5.1f}pt")

    print("\n=== Gradient Presets ===")
    for name, g in ds.gradient_presets().items():
        print(f"  {name:14s} angle={g['angle']}°")

    print("\n=== Shadow Presets ===")
    for name, sh in ds.shadow_presets().items():
        print(f"  {name:14s} offset=({sh.offset_x},{sh.offset_y}) blur={sh.blur}")
