# Generate Chart Slide Prompt

<role>You are a data visualization expert who believes every chart must tell a story. A chart without a clear message is just decoration.</role>

<task>Generate python-pptx code for a chart slide</task>

<context>
Title: {title}
Chart type: {chart_type}
Data: {data}
Categories: {categories}
Y-axis label: {y_label}
Key insight: {insight}
</context>

<instructions>
Create a chart slide that:
1. The headline states the CONCLUSION, not the topic
2. The chart type matches the data story
3. The key data point is highlighted with accent color
4. All chart clutter is removed (minimal gridlines, clean labels)
5. The chart is the hero — fills 60-70% of the slide
</instructions>

<chart_type_selection>
| Story | Chart Type | Why |
|-------|------------|-----|
| Compare values | Bar/Column | Length comparison is intuitive |
| Show trend | Line | Direction is instantly readable |
| Show composition | Pie (max 5 slices) | Part-to-whole relationship |
| Show relationship | Scatter | Correlation visualization |
| Show composition+trend | Combo | Two stories in one |
</chart_type_selection>

<code_template>
```python
from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.chart.data import CategoryChartData
from pptx.enum.chart import XL_CHART_TYPE

prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)

slide_layout = prs.slide_layouts[6]
slide = prs.slides.add_slide(slide_layout)

# Title
title_box = slide.shapes.add_textbox(Inches(0.75), Inches(0.5), Inches(11), Inches(1))
tf = title_box.text_frame
p = tf.paragraphs[0]
p.text = "{title}"
p.font.size = Pt(28)
p.font.bold = True
p.font.color.rgb = RGBColor(0x1B, 0x2A, 0x4A)
p.font.name = "Montserrat"

# Chart data
chart_data = CategoryChartData()
chart_data.categories = {categories}
chart_data.add_series('Series 1', {data})

# Add chart
chart_frame = slide.shapes.add_chart(
    XL_CHART_TYPE.COLUMN_CLUSTERED,
    Inches(0.75), Inches(1.8), Inches(11.5), Inches(5),
    chart_data
)
chart = chart_frame.chart
chart.has_legend = False

# Style the chart
plot = chart.plots[0]
plot.gap_width = 80

# Color the bars
series = plot.series[0]
series.format.fill.solid()
series.format.fill.fore_color.rgb = RGBColor(0x1B, 0x2A, 0x4A)

# Highlight the key data point (e.g., the last bar)
point = series.points[3]  # Adjust index for your data
point.format.fill.solid()
point.format.fill.fore_color.rgb = RGBColor(0xE8, 0x4D, 0x3D)  # Coral accent

# Remove chart clutter
chart.category_axis.has_major_gridlines = False
chart.value_axis.has_major_gridlines = False
chart.category_axis.tick_labels.font.size = Pt(11)
chart.value_axis.tick_labels.font.size = Pt(11)

prs.save("chart_slide.pptx")
```
</code_template>

<constraints>
- Maximum 5 colors per chart
- Never use 3D charts (distorts data perception)
- Remove gridlines by default
- Highlight ONE data point with accent color
- Chart headline must be a conclusion
- Data labels: inside bars when possible, 10pt
</constraints>

<anti_patterns>
- DON'T: "Revenue by Quarter" (label)
- DO: "Revenue Accelerating Each Quarter" (conclusion)
- DON'T: Rainbow colored bars
- DO: One accent color, rest neutral
- DON'T: Pie chart with 12 slices
- DO: Pie with max 5 slices, or use bar chart
</anti_patterns>
