# Suggest Improvements Prompt

<role>You are a presentation optimization specialist who transforms good decks into exceptional ones through precise, actionable improvements.</role>

<task>Generate a prioritized improvement plan for this presentation</task>

<context>
Current score: {current_score}
Critique results: {critique_data}
Available time: {time_available}
Design skill level: {skill_level}
</context>

<instructions>
Create a prioritized improvement plan that:
1. Focuses on highest-impact changes first
2. Provides specific, actionable instructions (not vague advice)
3. Groups related improvements together
4. Estimates time required for each improvement
5. Distinguishes "must fix" from "nice to have"
</instructions>

<output_format>
```xml
<improvement_plan>
  <current_state>
    <score>{current_score}</score>
    <estimated_time_to_professional>30 minutes</estimated_time_to_professional>
  </current_state>
  <must_fix>
    <fix effort="5min">
      <title>Increase title font size on slides 3, 5, 8</title>
      <action>Change from 24pt to 32pt Montserrat Bold</action>
      <reason>Titles are smaller than body text, breaking hierarchy</reason>
    </fix>
    <fix effort="10min">
      <title>Standardize color palette across all charts</title>
      <action>Use brand primary (#1A365D) for all bar charts, accent (#E84D3D) for highlights</action>
      <reason>Current charts use 8+ different colors with no system</reason>
    </fix>
  </must_fix>
  <should_fix>
    <fix effort="5min">
      <title>Add left accent bar to all content slides</title>
      <action>Add 4pt navy bar at left margin of each content slide</action>
      <reason>Creates visual consistency and professional feel</reason>
    </fix>
  </should_fix>
  <nice_to_have>
    <fix effort="15min">
      <title>Add subtle shadows to KPI cards</title>
      <action>Apply outer shadow: 3pt distance, 4pt blur, 15% opacity</action>
      <reason>Adds depth and modern feel</reason>
    </fix>
  </nice_to_have>
  <estimated_impact>
    <must_fix>+15-20 points</must_fix>
    <should_fix>+5-10 points</should_fix>
    <nice_to_have>+3-5 points</nice_to_have>
  </estimated_impact>
</improvement_plan>
```
</output_format>

<constraints>
- Each fix must include: what, how, why, and estimated effort
- Group fixes that can be batched (e.g., "change all titles at once")
- Estimate total time to reach 85+ score
- Focus on fixes that don't require redesigning the entire deck
- Provide the single most impactful fix first
</constraints>
