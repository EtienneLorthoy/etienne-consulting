# AI Search Content Optimization Specification
> Source: LinkedIn "How to Optimize Your Owned Content for AI Search" (2025)
> Purpose: Agent-executable ruleset for auditing and optimizing owned web content for LLM (Large Language Model) visibility.

---

## Scope

Apply this spec to any owned web page, blog post, landing page, or PDF asset. The goal is dual optimization: content must remain valid for traditional SEO (Search Engine Optimization) while also being structured for extraction by LLM-based discovery engines (ChatGPT, Perplexity, Copilot, Claude, etc.).

---

## Section 1: Writing Rules

### 1.1 Tone and Readability

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| W-01 | Use plain, direct language | No sentence uses metaphor, hyperbole, or figurative language as a substitute for factual description |
| W-02 | Adopt a neutral, authoritative voice | No promotional or sales-pitch phrasing detected |
| W-03 | Write for snippet extraction | Each section (H2 or H3 block) must be independently intelligible without surrounding context |
| W-04 | Sentences must be declarative and complete | No fragment sentences; no implied subjects |
| W-05 | Sentence length target | Fewer than 20 words per sentence |
| W-06 | Use transitional connectors | At least one logical connector per paragraph (because, therefore, for example, as a result) |
| W-07 | No creative language substitutes | Replace metaphors with factual equivalents (e.g. "20% increase in leads" not "rocket ship campaign") |
| W-08 | Provide inline context | Definitions, examples, or comparisons appear within the sentence that introduces the concept |

### 1.2 Answer-Block Formatting

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| AB-01 | Each major section begins with an answer block | First 30-80 words of each H2 section directly answer the question implied by the heading |
| AB-02 | Answer block precedes supporting detail | Detailed explanations, examples, and citations appear after the answer block, not before |
| AB-03 | Optional label usage | Label "Quick Answer:" may prefix the answer block to aid LLM signal detection |

### 1.3 Heading Structure

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| H-01 | H1 is a complete question or declarative answer | H1 must not be a generic label (e.g. "Lead Generation" fails; "How B2B Teams Generate Leads Today" passes) |
| H-02 | H2s and H3s are descriptive subtopics | Each subheading answers a specific question or states a clear concept |
| H-03 | No vague headings | Headings such as "Overview", "Best Practices", "Introduction" fail unless followed by a qualifying phrase |
| H-04 | Heading hierarchy is linear and logical | Order must follow H1 > H2 > H3 with no skipped levels; no topic-bouncing between unrelated H2 blocks |
| H-05 | Heading depth limit | Do not use H5 or H6; maximum depth is H4 |

**Heading audit method (agent steps):**
1. Extract all heading tags from page HTML.
2. Verify no level is skipped (e.g. H1 directly to H3).
3. Verify each heading is a question or declarative phrase of at least 4 words.
4. Verify sibling headings at the same level share topical coherence.

### 1.4 Internal Linking

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| IL-01 | Anchor text is descriptive | No "click here", "learn more", or URL-only anchors |
| IL-02 | Link density | 3-5 internal links per 1,000 words |
| IL-03 | Hub-and-spoke structure | Pillar pages link to subtopic pages; subtopic pages link back to the pillar |
| IL-04 | Related entity clusters are cross-linked | Topically adjacent pages reference each other |
| IL-05 | Crawl depth for key pages | Important pillar pages must be reachable within 2 clicks from the homepage |

### 1.5 Content Freshness and Recency

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| R-01 | "Last updated" date visible on page | Date appears near title or footer |
| R-02 | Evergreen pages carry a year-update note | Add "2025 Update:" note or equivalent to signal freshness to crawlers |
| R-03 | High-value content reviewed on schedule | Content reviewed and updated every 6-12 months |
| R-04 | FAQ schema updated after content revision | FAQ schema metadata matches current on-page content after any edit |

### 1.6 AI Extraction Enhancements

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| E-01 | Structured lists present | Bullet points, numbered lists, or tables used for any enumerable content |
| E-02 | How-to content uses numbered steps | Step 1, Step 2, etc. format required for instructional sequences |
| E-03 | Key concepts explicitly defined | Each domain-specific term is defined inline on first use |
| E-04 | FAQ section present | At least one FAQ block using prompt-style questions exists per major content page |

---

## Section 2: Technical Rules

### 2.1 Schema Markup

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| S-01 | FAQPage or QAPage schema implemented | Highest-priority schema for LLM discoverability; required on any page with a FAQ section |
| S-02 | Article schema paired with FAQ schema | Must include: `author`, `dateModified`, `headline`, `about` properties |
| S-03 | Organization or Product schema present | Must include `sameAs` links to trusted third-party sources (LinkedIn page, Wikipedia, etc.) |
| S-04 | Schema matches visible on-page content | No discrepancy between structured data values and rendered text |
| S-05 | Pricing schema applied where relevant | Use on any page describing cost tiers, plans, or pricing ranges |

### 2.2 Accessibility and Semantic Markup

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| A-01 | Semantic HTML elements used | `<article>`, `<section>`, `<aside>` define page structure |
| A-02 | No hidden or script-generated text | All meaningful text is in crawlable DOM (Document Object Model) nodes |
| A-03 | `<strong>` and `<em>` used semantically only | Not applied for visual styling; only applied when the content is meaningfully emphasized |
| A-04 | Alt text on all images | Each image has descriptive alt text that answers a related sub-question |
| A-05 | Alt text is specific, not generic | "Diagram showing the stages of the marketing funnel" passes; "image1" or "photo" fails |

### 2.3 Metadata and URLs

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| M-01 | Title tag written in natural language | Reflects how a user would phrase a question, not internal taxonomy |
| M-02 | Meta description answers the primary query | Short, direct answer to the page's main topic |
| M-03 | Meta description length | 140-160 characters |
| M-04 | Meta description includes intent connector | Contains at least one of: how, what, why, when, which |
| M-05 | URL slug is natural language | Reads as a prompt-style phrase (e.g. `/how-to-generate-b2b-leads` not `/art-gen-b2b`) |
| M-06 | URL slug avoids abbreviations | No internal shorthand or truncated terms |
| M-07 | URL topic matches H1 | Slug keywords must align with the H1 heading |

### 2.4 Visual and Media Elements

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| V-01 | Image filenames are descriptive | Keyword-rich, hyphenated filenames (e.g. `stages-of-marketing-funnel.png`) |
| V-02 | Captions provided for diagrams and charts | Caption text reinforces the topic and is visible on the page |
| V-03 | YouTube videos embedded via standard iframe | Use the standard YouTube iframe embed; no third-party wrappers |
| V-04 | Video transcripts provided | Full transcript present on-page or linked from the page |
| V-05 | VideoObject schema applied to video content | Includes title, description, and transcript reference |
| V-06 | Video metadata optimized | Title, tags, and description on YouTube accurately reflect video content |
| V-07 | Video embeds do not degrade page load | Assets compressed; lazy loading applied where appropriate |

### 2.5 PDF Assets

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| P-01 | PDF uses machine-readable text | No scanned image-only pages; text must be selectable |
| P-02 | PDF has descriptive filename | Keyword-focused, hyphenated filename |
| P-03 | PDF has descriptive metadata | Title, subject, and author fields populated in document properties |
| P-04 | PDF uses clear heading structure | H1/H2/H3 hierarchy present within the PDF document |
| P-05 | PDF file size is minimized | Assets compressed; fast web view enabled |
| P-06 | PDF contains internal hyperlinks | Links to related pages or sections where applicable |
| P-07 | Alt text or captions on PDF visuals | Charts and diagrams have accompanying text descriptions |
| P-08 | HTML companion page exists | Core content from the PDF is also available in an HTML version |

---

## Section 3: SEO (Search Engine Optimization) Balance Rules

These rules prevent LLM optimizations from degrading traditional search ranking.

| Rule ID | Rule | Pass Condition |
|---------|------|----------------|
| SEO-01 | Do not sacrifice content depth for brevity | Answer blocks are additions, not replacements for comprehensive content |
| SEO-02 | Do not restructure URLs without redirects | Any URL change must include a 301 redirect from the old slug |
| SEO-03 | Maintain E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals | Author credentials, publication dates, and citations remain present |
| SEO-04 | Site performance not degraded by new markup | Core Web Vitals scores must not regress after schema or media changes |
| SEO-05 | No thin or over-compressed pages | Minimum content depth appropriate to the topic must be maintained |
| SEO-06 | Crawlability must not be broken | robots.txt, canonical tags, and sitemap remain consistent after changes |

---

## Section 4: Audit Checklist

Use this checklist per page audited. Each item maps to a rule ID above.

```
CONTENT
[ ] W-01  Plain language: no metaphors or figurative language
[ ] W-02  Neutral, authoritative voice
[ ] W-03  Each section independently intelligible
[ ] W-04  All sentences declarative and complete
[ ] W-05  Sentences under 20 words
[ ] W-06  Transitional connectors present
[ ] W-08  Inline context: definitions or examples embedded
[ ] AB-01 Each H2 section opens with a 30-80 word answer block
[ ] AB-02 Supporting detail follows the answer block
[ ] H-01  H1 is a complete question or declarative answer
[ ] H-02  All H2s and H3s are descriptive and specific
[ ] H-03  No vague headings (Overview, Best Practices, etc.)
[ ] H-04  Heading hierarchy is strictly linear
[ ] IL-01 All anchor text is descriptive
[ ] IL-02 3-5 internal links per 1,000 words
[ ] IL-03 Hub-and-spoke linking structure verified
[ ] IL-05 Key pillar pages within 2 clicks of homepage
[ ] R-01  "Last updated" date visible on page
[ ] E-01  Structured lists used for enumerable content
[ ] E-03  All domain terms defined inline on first use
[ ] E-04  FAQ section present

TECHNICAL
[ ] S-01  FAQPage or QAPage schema implemented
[ ] S-02  Article schema includes author, dateModified, headline, about
[ ] S-03  Organization schema includes sameAs links
[ ] S-04  Schema values match visible on-page content
[ ] A-01  Semantic HTML elements define page structure
[ ] A-02  No hidden or script-generated text
[ ] A-04  All images have descriptive alt text
[ ] M-02  Meta description answers primary query
[ ] M-03  Meta description is 140-160 characters
[ ] M-05  URL slug is natural language
[ ] M-07  URL slug matches H1 topic
[ ] V-01  Image filenames are descriptive and keyword-rich
[ ] V-03  YouTube videos use standard iframe embed
[ ] V-04  Video transcripts present on page

SEO BALANCE
[ ] SEO-01 Content depth maintained alongside answer blocks
[ ] SEO-02 No URL changes without 301 redirects
[ ] SEO-04 Core Web Vitals not regressed
[ ] SEO-05 No thin or over-compressed content
[ ] SEO-06 Crawlability intact
```

---

## Section 5: Agent Execution Notes

- Rules marked with "highest-priority" in the source: S-01 (FAQPage schema).
- When auditing, treat W-rules as blocking failures. A page failing W-02 (sales pitch language) or W-03 (context-dependent sections) should be flagged for full rewrite before schema work begins.
- Apply checklist items in order: content rules first, technical rules second. Technical fixes have no benefit on poorly structured content.
- For PDF assets, run Section 2.5 rules independently from the parent page audit.
- LLM optimization and SEO rules are not mutually exclusive. Failing any SEO-balance rule in Section 3 constitutes a regression even if all other checks pass.
- Do not remove content depth when adding answer blocks. Answer blocks are prepended to existing sections, not replacements for them.