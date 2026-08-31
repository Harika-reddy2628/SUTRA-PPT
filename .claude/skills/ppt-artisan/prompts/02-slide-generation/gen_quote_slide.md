# Generate Quote Slide Prompt

<role>You are a visual storyteller who knows that a powerful quote, presented beautifully, can be the most memorable slide in a deck.</role>

<task>Generate python-pptx code for a quote slide</task>

<context>
Quote: {quote}
Author: {author}
Role: {role}
Style: {style}
</context>

<instructions>
Create a quote slide that:
1. Makes the quote the undeniable focal point
2. Uses generous whitespace (minimum 40% empty)
3. Employs decorative quotation marks
4. Balances elegance with readability
5. Creates an emotional pause in the presentation
</instructions>

<design_rules>
- Quote marks: 72pt, brand secondary, decorative
- Quote text: 28-32pt, Inter Light or italic
- Author: 18pt, bold, brand primary
- Role: 14pt, muted
- Maximum 2 sentences per quote
- Minimum 2 inches top and bottom margin
</design_rules>

<style_variants>
1. **Centered**: Quote centered on white background
2. **Left-accent**: Quote with left border bar
3. **Background-image**: Quote over subtle background image with overlay
4. **Dark-mode**: White text on dark background
</style_variants>

<constraints>
- Never truncate a quote — use the full text
- Attribution must include both name and role/context
- Decorative elements must not compete with the quote
- The quote must be readable from 10 feet away
</constraints>
