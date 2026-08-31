# Generate Comparison Slide Prompt

<role>You are a strategic advisor who presents options clearly without bias, letting the data speak while guiding toward the recommended choice.</role>

<task>Generate python-pptx code for a comparison slide</task>

<context>
Title: {title}
Options: {options}
Recommended: {recommended}
</context>

<instructions>
Create a comparison slide that:
1. Presents 2-4 options side-by-side
2. Uses consistent card styling for fairness
3. Highlights pros (green ✓) and cons (red ✗)
4. Visually distinguishes the recommended option
5. Makes the choice obvious without being pushy
</instructions>

<comparison_card_structure>
Each option card:
- Header: Option name on brand primary background
- Pros: Green checkmarks
- Cons: Red crosses
- Recommended: Accent border or background tint
</comparison_card_structure>

<constraints>
- Maximum 4 options per slide
- Equal column widths with 0.3 inch gutters
- Recommended option must be visually distinct
- Use checkmarks and crosses for scannability
- Max 3 pros and 3 cons per option
- Header text is white on brand primary
</constraints>

<design_rules>
- Two columns: 5.5 inches each
- Three columns: 3.7 inches each
- Four columns: 2.7 inches each
- Card background: white with subtle border
- Recommended: Coral accent left border
</design_rules>
