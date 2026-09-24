# GOLDENGEN CORE VISION

GoldenGen should NOT become:

> "Another laptop shop website."

The central product vision is:

> **"A technology shopping experience designed around how people actually research and buy tech in Kenya."**

Every design, UX, architecture, and feature decision should be evaluated against this vision.

The goal is not to create the website with the most features or the most animations.

The goal is to create an e-commerce frontend that makes technology easier to:

**DISCOVER → UNDERSTAND → COMPARE → TRUST → BUY**

The project should demonstrate that a frontend can solve real user problems through thoughtful information architecture, UX, visual design, accessibility, performance, and clean engineering.

---

## WHAT GOLDENGEN SHOULD SOLVE

GoldenGen should explore solutions to problems such as:

- Customers struggling to understand technical specifications.
- Difficulty comparing similar laptops and technology products.
- Unclear warranty information.
- Unclear product condition.
- Unclear stock status.
- Unclear delivery expectations.
- Generic product descriptions.
- Weak product discovery.
- Poor mobile shopping experiences.
- Lack of useful guidance for non-technical buyers.
- Lack of visible trust signals.
- Inconsistent product information.
- Difficulty knowing which product is appropriate for a particular use case.

These should become design opportunities rather than simply a checklist of features.

---

## THE GOLDENGEN SHOPPING EXPERIENCE

A possible core journey is:

```text
SEARCH
   ↓
DISCOVER
   ↓
UNDERSTAND
   ↓
COMPARE
   ↓
TRUST
   ↓
SELECT
   ↓
CART
   ↓
CHECKOUT
```

Every stage should be intentionally designed.

---

## PRODUCT INFORMATION AS A CORE FEATURE

Technology products should expose the information customers actually need to make decisions.

For laptops, this may include:

- Processor
- RAM
- Storage
- GPU
- Display
- Battery
- Weight
- Operating system
- Warranty
- Condition
- Availability
- Delivery estimate
- Intended use
- Expandability
- Ports

The interface should make technical information understandable without hiding important details behind unnecessary interaction.

---

## "HELP ME CHOOSE"

Consider a product-discovery experience that asks what the customer needs the device for:

- University
- Programming
- Gaming
- Creative work
- Business
- Everyday use

The system should help narrow the product selection.

This should be a useful product-discovery system, not an AI gimmick.

---

## PRODUCT COMPARISON

Product comparison should be considered a major future feature.

Users should eventually be able to compare products side-by-side using information such as:

- Price
- CPU
- RAM
- Storage
- GPU
- Display
- Battery
- Weight
- Ports
- Warranty
- Availability
- Delivery

Comparison must use the unified product data source.

Never manually duplicate product information simply to build the comparison UI.

---

## TRUST SHOULD BE VISIBLE

Avoid relying exclusively on generic claims such as:

- "Fast Delivery"
- "Secure Payment"
- "Trusted Store"

Instead, design interfaces capable of communicating concrete information such as:

**Warranty**

`12 months`

**Stock**

`In stock`

**Condition**

`Brand new`

**Delivery**

`Estimated delivery`

**Returns**

`Return policy`

For the current fictional project, such information may be mock data.

Do not present fictional information as real-world claims.

The architecture should nevertheless be ready for these values to come from a future backend.

---

## DESIGN FOR KENYA

GoldenGen should feel designed for Kenyan users rather than being a generic international template with "Kenya" added afterward.

Consider:

- KSh pricing
- Kenyan counties
- County-aware delivery interfaces
- Mobile-first interaction
- Local payment architecture for future backend integration
- Local delivery expectations
- After-sales support
- Warranty communication
- Performance on varying network conditions

Local context should improve the user's shopping experience rather than exist merely as decoration.

---

## MOBILE-FIRST

Mobile is a primary shopping environment.

The experience should work naturally as:

```text
PHONE
  ↓
SEARCH
  ↓
PRODUCT
  ↓
COMPARE
  ↓
CART
  ↓
CHECKOUT
```

Do not treat mobile as a smaller desktop experience.

---

## VISUAL IDENTITY

GoldenGen should have a deliberate visual identity rather than relying on generic "modern e-commerce" aesthetics.

If new color palettes are provided, evaluate them against:

- Product photography
- Contrast
- Accessibility
- Brand personality
- Price visibility
- CTA visibility
- Cards
- Navigation
- Forms
- Badges
- Mobile appearance
- Visual hierarchy

Do not select a palette simply because individual colors look attractive.

The complete system must work together.

---

## DARK MODE

Dark mode currently exists but may eventually be removed.

Do not remove it automatically.

Evaluate whether maintaining dark mode actually improves the shopping experience or whether a single strong GoldenGen theme would create a clearer product identity.

The decision should be based on design and UX considerations, not the assumption that every modern website needs dark mode.

---

## MOTION

Motion should support the experience rather than exist merely to demonstrate technical ability.

Possible directions:

### About page

A subtle technology-network animation representing connectivity.

### Contact page

A subtle communication/signal animation.

### Product interactions

Meaningful transitions and micro-interactions.

### Page navigation

View Transitions API.

### Backgrounds

Subtle geometric, technological, or data-flow systems.

Avoid excessive particles, distracting effects, or animation that competes with products.

Respect `prefers-reduced-motion`.

---

## ABOUT PAGE

The About page should communicate the GoldenGen philosophy rather than simply contain generic company text.

Potential conceptual structure:

```text
DISCOVER
    ↓
COMPARE
    ↓
UNDERSTAND
    ↓
BUY
    ↓
SUPPORT
```

The page should communicate that GoldenGen exists to make technology shopping easier to understand.

---

## TECHNICAL QUALITY

GoldenGen should also be impressive to developers.

The frontend should progressively move toward:

```text
GoldenGen
│
├── Design System
│   ├── tokens
│   ├── typography
│   ├── spacing
│   ├── colors
│   └── motion
│
├── Shared UI
│   ├── navbar
│   ├── cart
│   ├── toast
│   ├── modal
│   └── reusable product UI
│
├── Product System
│   ├── product data
│   ├── search
│   ├── filtering
│   ├── sorting
│   ├── comparison
│   └── recommendations
│
├── UX
│   ├── loading states
│   ├── empty states
│   ├── error states
│   ├── accessibility
│   └── responsive behavior
│
└── Motion System
    ├── page transitions
    ├── view transitions
    ├── micro-interactions
    └── background effects
```

Wherever practical:

> **One source of truth.**

Separate data from presentation.

Separate shared functionality from page-specific functionality.

---

## THE STANDARD FOR NEW FEATURES

Before proposing a feature, ask:

1. What user problem does this solve?
2. Is this problem relevant to technology shopping?
3. Does it improve discovery, understanding, comparison, trust, selection, or purchasing?
4. Does it make sense for the Kenyan context?
5. Does it improve the mobile experience?
6. Does it improve accessibility?
7. Does it justify its performance cost?
8. Can it be implemented without duplicating existing architecture?
9. Can it eventually connect cleanly to a backend?
10. Is it genuinely useful, or is it just visual decoration?

If a feature fails these questions, reconsider it.

---

# GOLDENGEN SUCCESS CRITERIA

GoldenGen should not be considered successful simply because:

- It looks flashy.
- It has many animations.
- It has many pages.
- It has many features.

The stronger target is:

> **A user can arrive at GoldenGen, understand what a technology product offers, determine whether it fits their needs, compare it with alternatives, understand the associated trust/delivery information, and confidently proceed toward purchasing.**

And from a developer's perspective:

> **The codebase should demonstrate clean architecture, separation of concerns, reusable systems, thoughtful UX engineering, accessibility, performance awareness, and a clear path toward a future backend.**

The objective is not to build the biggest frontend.

**Build the most intentional one.**

---

# ENGINEERING RULES

## CURRENT STACK

GoldenGen currently uses HTML5, CSS3, vanilla JavaScript, `localStorage`, and Live Server. There is no frontend framework, backend, or build system.

Do not introduce React, Vue, Angular, Tailwind, Bootstrap, TypeScript, or another framework unless explicitly requested. Keep changes compatible with the current no-build workflow and make backend integration possible where practical.

## INSPECT BEFORE CHANGING

Before modifying code:

1. Read the relevant files.
2. Search the entire GoldenGen project for related functions, IDs, classes, event listeners, data, and styles.
3. Identify the code that actually controls the behavior.
4. State the local cause and the smallest change that tests it.
5. Implement only after that diagnosis.

Do not guess how the project works. Do not rewrite unrelated areas or create a second implementation when an existing one can be improved or reused.

## FILE OWNERSHIP

- `js/shared.js`: navbar, mobile menu, theme, announcement bar, cart core, cart dropdown, cart badge, toast notifications, shared utilities, and shared UI behavior.
- `js/main.js`: homepage-specific behavior only.
- `js/products.js`: catalog data and product-page behavior including search, filtering, sorting, view switching, quick view, and future comparison behavior.
- `js/contact.js`: contact-page behavior only.

Keep shared behavior in `shared.js` and page behavior in the relevant page script. If ownership must change, explain the reason and update all callers.

## NO DUPLICATE LOGIC

Search before adding any event listener, cart renderer, modal handler, toast system, navbar handler, theme handler, product lookup, or utility. Avoid duplicate listeners and competing renderers. Prefer one coherent shared implementation.

The cart `localStorage` key is `goldengen_cart`. Cart items generally contain `id`, `name`, `price`, `image`, and `quantity`. IDs are not guaranteed to be numeric: homepage and other page cards may use string IDs such as `home-xxx`, while catalog products may use numeric IDs. Preserve this distinction.

## PRODUCT DATA

The catalog `PRODUCTS` array and hardcoded featured cards currently coexist and may be inconsistent. Do not blindly rewrite the project, but move incrementally toward one source of truth. Separate product data, business logic, and presentation wherever practical so the same structured data can drive cards, search, filtering, quick view, comparison, cart metadata, recommendations, and future product details.

Product data should be able to represent CPU, RAM, storage, GPU, display, battery, weight, operating system, warranty, condition, availability, delivery estimate, intended use, ports, and expandability. Use structured attributes to support useful recommendations such as university, programming, gaming, creative work, business, and everyday use.

## TRUST AND MOCK DATA

Expose concrete product information such as warranty, condition, stock status, delivery estimate, returns, specifications, and support information where it helps a buying decision. Current values may be mock data, but never imply fictional operational claims are verified real-world claims. Keep these fields shaped so a future API or backend can provide them.

## VIEW TRANSITIONS AND REVEALS

Preserve the existing View Transitions API behavior, including the same-document Quick View product-image morph and cross-document navigation transitions, unless there is a documented reason to change it.

Some sections use `opacity: 0` until they receive a `reveal` class through the IntersectionObserver system in `shared.js`. If content appears invisible, inspect that system before changing markup or removing the reveal behavior. Known sections include `.why-us`, `.quick-links`, `.featured-products`, and `.categories`.

## CSS AND DESIGN TOKENS

Use the existing CSS architecture (`base`, `components`, `layout`, `pages`, and `themes`) and reuse tokens from `css/base/variables.css`. Do not hardcode a value when an appropriate custom property already exists. Avoid unrelated formatting or broad CSS rewrites.

Preserve dark mode unless explicitly asked to remove it. Use semantic HTML, meaningful alt text, labels, keyboard-accessible controls, visible focus states, appropriate modal focus and Escape behavior, sufficient contrast, usable touch targets, and reduced-motion support. Do not add ARIA attributes unnecessarily.

## RESPONSIVE AND PERFORMANCE QUALITY

Design mobile-first rather than shrinking desktop layouts. Check navigation, search, product cards, filters, quick view, cart, forms, buttons, and specifications on narrow screens and slower connections.

Prefer lazy-loaded images where appropriate, small DOM changes, delegated or limited event listeners, and animations that do not cause layout thrashing. Every animation must communicate state, continuity, or feedback. Respect `@media (prefers-reduced-motion: reduce)`.

Implement intentional loading, empty, error, and success states with useful recovery actions. Do not use vague error messages when the user can be told what happened and what to do next.

## VALIDATION

After edits, check for console errors, broken references, duplicate listeners, CSS conflicts, responsive regressions, accessibility regressions, and broken existing behavior. Run the narrowest available executable check first, then broaden validation only when needed. Do not add fake backend behavior or unrelated features merely to increase feature count.

---

# IMPLEMENTATION RECORD

This section records the major GoldenGen improvements completed during the current frontend iteration.

## Architecture And Shared Behavior

- Consolidated Products-page cart behavior onto the shared cart implementation in `js/shared.js`.
- Removed duplicate Products-page cart dropdown listeners and renderers.
- Preserved the `goldengen_cart` contract and normalized homepage/catalogue product IDs when merging cart items.
- Added shared navbar search routing from About, Contact, and Privacy Policy to `products.html?search=...` without duplicating the Products live-search handler.
- Made the shared loading overlay optional for lightweight pages, then added the same branded loader to Privacy Policy.

## Product Discovery And Decision Support

- Enriched the catalogue source with structured laptop fields for processor, RAM, storage, GPU, display, battery, weight, operating system, ports, expandability, use cases, and delivery estimates.
- Added compact technical highlights and intended-use labels to product cards.
- Added full structured specifications and delivery information to Quick View.
- Added the data-driven Help Me Choose flow for University, Programming, Gaming, Creative work, Business, and Everyday use.
- Added persisted comparison selection with a three-product limit and a shared side-by-side table covering price, specifications, warranty, condition, availability, and delivery.
- Fixed Load More pagination so the catalogue correctly expands from 12 to all 24 products and hides the completed action.
- Aligned all homepage featured cards with catalogue IDs, names, images, prices, badges, ratings, summaries, and cart behavior.

## About, Contact, And Privacy

- Added the About journey section: Discover, Understand, Compare, Trust, and Support.
- Improved Contact with actionable phone, email, and WhatsApp links, county delivery guidance, clearer form guidance, `aria-invalid`, and `aria-busy` states.
- Added `privacy-policy.html` with honest prototype data-flow documentation covering localStorage, cart, wishlist, comparison, and simulated contact submissions.
- Added Quick Links and the complete shared footer structure to Privacy Policy.
- Restored descriptive document titles for Products, About, and Contact.

## Visual System

- Adopted the fixed dark GoldenGen theme as the default, without a user-facing theme toggle or system preference switching.
- Kept the dark theme stylesheet available for rollback while removing its active preference behavior.
- Added blue-gold title accents and contained blue-gold atmospheric fades to About, Contact, and Privacy Policy main content.
- Added the homepage-inspired three-circle header treatment to About, Contact, and Privacy Policy.
- Standardized footer branding, Kenya attribution, Quick Links, and policy links across pages.
- Improved the GoldenGen navbar and loading logos with the same blue-gold wordmark and visible blue `Technologies` tagline.
- Improved the announcement bar with a blue-gold edge and safe two-line wrapping on small screens.
- Added a visible gold border around the Products toolbar.
- Improved the Privacy Policy note with a visible gold border and higher-contrast text.

## Final Validation

- All five pages load without console errors or diagnostics.
- All five pages have descriptive document titles, Quick Links, shared footer structure, and no mobile horizontal overflow.
- Cross-page search routes correctly and Products live filtering remains functional.
- Products category filtering, Load More, Help Me Choose, comparison, Quick View, and cart merging were exercised in the browser.
- Contact validation and successful simulated submission were exercised in the browser.
- Homepage featured products were compared against all 24 catalogue products with no ID, name, price, or image mismatches.
- Formatting checks pass with `git diff --check`.
