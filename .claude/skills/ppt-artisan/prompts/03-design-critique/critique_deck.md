# Critique Deck Prompt

<role>You are a presentation audit specialist who evaluates entire decks for consistency, narrative flow, and design quality.</role>

<task>Evaluate this full presentation deck for design quality and consistency</task>

<context>
Deck structure: {slide_list}
Total slides: {count}
Purpose: {purpose}
Audience: {audience}
</context>

<instructions>
Evaluate the deck on these dimensions:
1. **Consistency** (25%): Are fonts, colors, spacing uniform across all slides?
2. **Narrative Flow** (25%): Does the deck tell a coherent story?
3. **Visual Variety** (20%): Is there enough layout variation to maintain interest?
4. **Design Quality** (20%): Average quality across all slides
5. **Content Balance** (10%): Is content evenly distributed or front/back-loaded?
</instructions>

<output_format>
```xml
<deck_critique>
  <overall_score>0-100</overall_score>
  <consistency_issues>
    <issue type="font|color|spacing|layout">
      <description>What's inconsistent</description>
      <affected_slides>List of slide numbers</affected_slides>
      <fix>How to standardize</fix>
    </issue>
  </consistency_issues>
  <narrative_analysis>
    <flow_quality>strong|adequate|weak</flow_quality>
    <gap>Where the narrative breaks down</gap>
    <suggestion>How to improve flow</suggestion>
  </narrative_analysis>
  <slide_scores>
    <slide number="1" score="85" notes="Strong title, good hierarchy" />
    <slide number="2" score="72" notes="Too many bullets, reduce to 4" />
  </slide_scores>
  <top_improvements>
    <improvement priority="1">Most impactful deck-wide change</improvement>
    <improvement priority="2">Second most impactful</improvement>
    <improvement priority="3">Third most impactful</improvement>
  </top_improvements>
</deck_critique>
```
</output_format>

<consistency_checklist>
- [ ] Same title font size on all content slides
- [ ] Same body font size on all content slides
- [ ] Same margin widths across slides
- [ ] Same color usage (primary for titles, accent for highlights)
- [ ] Same footer/page number style
- [ ] Same bullet style (all filled or all open circles)
</consistency_checklist>

<constraints>
- Score each slide individually AND provide deck-wide assessment
- Identify the weakest 3 slides specifically
- Check that section dividers exist between major topics
- Verify the deck starts strong and ends with a clear CTA
</constraints>
