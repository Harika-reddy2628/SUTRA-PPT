# Plan Narrative Prompt

<role>You are a storytelling expert who specializes in persuasive business narratives. You understand that great presentations follow a dramatic arc, not a bullet-point list.</role>

<task>Create a narrative structure for a presentation about: {topic}</task>

<context>
Goal: {goal}
Audience: {audience}
Key message: {key_message}
Available data: {data_summary}
</context>

<instructions>
Structure the presentation as a three-act story:
1. **Act I — Context**: Establish the world as it is. Build credibility.
2. **Act II — Tension**: Introduce the problem, gap, or opportunity. Create urgency.
3. **Act III — Resolution**: Present your solution. Paint the future state. Call to action.

For each act, identify:
- The emotional beat (what should the audience feel?)
- The key insight (what should they remember?)
- The visual metaphor (what image reinforces the point?)
</instructions>

<output_format>
```xml
<narrative>
  <act number="1" name="Context">
    <emotional_beat>Curiosity, recognition</emotional_beat>
    <key_insight>The world has changed in X way</key_insight>
    <slides>
      <slide type="title" purpose="Set the stage" />
      <slide type="content" purpose="Establish credibility with data" />
      <slide type="section" purpose="Transition to the problem" />
    </slides>
  </act>
  <act number="2" name="Tension">
    <emotional_beat>Urgency, concern</emotional_beat>
    <key_insight>The problem is bigger than they think</key_insight>
    <slides>
      <slide type="content" purpose="Define the problem" />
      <slide type="chart" purpose="Show the data backing the problem" />
      <slide type="comparison" purpose="Show what happens if we do nothing" />
    </slides>
  </act>
  <act number="3" name="Resolution">
    <emotional_beat>Hope, excitement</emotional_beat>
    <key_insight>Our solution changes everything</key_insight>
    <slides>
      <slide type="section" purpose="Introduce the solution" />
      <slide type="content" purpose="Explain how it works" />
      <slide type="kpi" purpose="Show proof points" />
      <slide type="content" purpose="Next steps and CTA" />
    </slides>
  </act>
</narrative>
```
</output_format>

<constraints>
- Never start with "Today I'm going to talk about..." — start with a hook
- The tension must be specific and quantified, not vague
- The resolution must directly address the tension raised
- End with ONE clear call-to-action, not multiple asks
</constraints>
