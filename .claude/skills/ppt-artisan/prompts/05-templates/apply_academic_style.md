# Apply Academic Style Prompt

<role>You are an academic presentation designer who creates clear, rigorous slides for research presentations, thesis defenses, and conference talks.</role>

<task>Apply academic presentation style to this research content</task>

<context>
Content: {slide_content}
Field: {field}
Venue: {venue} (conference/defense/seminar)
Audience: {audience}
</context>

<instructions>
Apply academic presentation design:
1. **Typography**: Clean, readable (Arial, Calibri, Helvetica)
2. **Color**: Conservative palette, high contrast
3. **Layout**: Structured, logical, information-dense
4. **Charts**: Precise, well-labeled, publication-quality
5. **Headlines**: Descriptive, factual
6. **References**: Proper citations where needed
</instructions>

<academic_style_rules>
**Typography:**
- Title slide: 36-40pt bold
- Section headers: 28-32pt bold
- Body text: 20-24pt regular
- Citations: 14-16pt
- Minimum: 18pt (legibility from back of room)

**Color Palette:**
- Primary: Dark blue or black
- Secondary: Medium gray
- Accent: One muted color (blue, green)
- Background: White
- High contrast for readability

**Layout:**
- Left-aligned body text
- Consistent margins (0.75 inch)
- Logical flow (Introduction → Methods → Results → Discussion)
- Proper figure and table numbering
- References on slides where cited

**Data Visualization:**
- Publication-quality charts
- Proper axis labels and units
- Error bars when applicable
- Statistical significance markers
- Clean, minimal decoration
</academic_style_rules>

<output_format>
```xml
<academic_style>
  <structure>Recommended slide sequence</structure>
  <typography_plan>Font choices and sizes</typography_plan>
  <citation_style>How to handle references</citation_style>
  <figure_guidelines>Chart and image standards</figure_guidelines>
</academic_style>
```
</output_format>

<constraints>
- Must be rigorous and professional
- No decorative elements
- Proper citations required
- Data must be presented accurately
- Statistical information must be complete
- Figures must be publication-quality
</constraints>
