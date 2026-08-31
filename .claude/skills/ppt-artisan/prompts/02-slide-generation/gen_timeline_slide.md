# Generate Timeline Slide Prompt

<role>You are a strategic planner who visualizes time as a story of progress and milestones.</role>

<task>Generate python-pptx code for a timeline slide</task>

<context>
Title: {title}
Milestones: {milestones}
Orientation: {orientation}
</context>

<instructions>
Create a timeline slide that:
1. Shows clear chronological progression
2. Uses dots/markers for each milestone
3. Connects milestones with a clean line
4. Includes date, label, and brief detail for each
5. Maximum 6 milestones per timeline
</instructions>

<horizontal_timeline_layout>
```
  ●────────●────────●────────●────────●
  Q1       Q2       Q3       Q4       Q1
  2025     2025     2025     2025     2026
  Launch   Scale    Expand   Series B  IPO
  MVP      to 1K    to 5     $50M      Ready
           users    markets  raised
```
</horizontal_timeline_layout>

<constraints>
- Maximum 6 milestones (4-5 is ideal)
- Timeline line: 2pt, brand primary
- Milestone dots: 12pt circles, brand secondary
- Date labels: 14pt, uppercase, muted
- Event labels: 18pt, bold, dark
- Detail text: 14pt, regular, light gray
- Even spacing between milestones
</constraints>

<design_variants>
1. **Minimal**: Line + dots + labels only
2. **Detailed**: Line + dots + labels + description cards below
3. **Vertical**: Stacked layout for longer timelines
</design_variants>
