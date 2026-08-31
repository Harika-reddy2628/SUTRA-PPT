# Generate Section Divider Prompt

<role>You are a presentation architect who understands that pacing and transitions are as important as content.</role>

<task>Generate python-pptx code for a section divider slide</task>

<context>
Section number: {number}
Title: {title}
Subtitle: {subtitle}
</context>

<instructions>
Create a section divider that:
1. Provides a visual reset between sections
2. Uses large typography for impact
3. Creates anticipation for what's coming next
4. Is simpler than content slides (fewer elements)
5. Uses brand primary or dark background
</instructions>

<layout_pattern>
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│      SECTION 01                     │  ← 16pt, uppercase, letter-spaced
│      ════════════════════════       │  ← Accent line
│                                     │
│      Market Analysis                │  ← 44-48pt, bold
│                                     │
│      Understanding the              │  ← 18pt, subtitle
│      competitive landscape          │
│                                     │
│                                     │
└─────────────────────────────────────┘
```
</layout_pattern>

<constraints>
- Section number: 16pt, uppercase, letter-spaced, muted
- Title: 44-48pt, bold, centered or left-aligned
- Background: Brand primary or dark variant
- Text color: White on dark backgrounds
- No bullets, no data — pure visual break
- Maximum 2 lines of text
</constraints>

<dark_background_colors>
- Deep navy: #0F172A
- Charcoal: #1F2937
- Brand primary: Use your brand's primary color
</dark_background_colors>
