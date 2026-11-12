# Furniture Website — Design & Build Specification

## 1. Project Direction

Build a premium, warm-minimalist furniture website inspired by the reference image, but with original branding, copy, imagery, and code.

Visual direction:

- Quiet luxury
- Scandinavian + subtle Japanese minimalism
- Warm, calm, editorial
- Generous whitespace
- Natural materials
- Strong typography hierarchy
- Soft photography
- Minimal borders and shadows
- Responsive from the beginning

Do not copy the reference brand name, text, images, or exact layout.

---

## 2. Color System

```css

```

Use mostly white/cream backgrounds, dark text, and small amounts of brown as the accent.

---

## 3. Typography

Recommended:

**Headings:** DM Serif Display  
**Body/UI:** Inter

Alternatives:

- Headings: Cormorant Garamond, Playfair Display
- Body: Manrope, Open Sans

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

```css
body {
  font-family: "Inter", sans-serif;
  color: var(--color-text);
  line-height: 1.6;
}

h1,
h2,
h3 {
  font-family: "DM Serif Display", serif;
  font-weight: 400;
  line-height: 1.05;
}
```

Suggested sizes:

```css
.hero-title {
  font-size: clamp(3rem, 6vw, 6rem);
}

.section-title {
  font-size: clamp(2.25rem, 4vw, 3.75rem);
}

body {
  font-size: 1rem;
}
```

---

## 4. Spacing System

```css
:root {
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem; /* 8px */
  --space-3: 0.75rem; /* 12px */
  --space-4: 1rem; /* 16px */
  --space-5: 1.5rem; /* 24px */
  --space-6: 2rem; /* 32px */
  --space-7: 3rem; /* 48px */
  --space-8: 4rem; /* 64px */
  --space-9: 5rem; /* 80px */
  --space-10: 6rem; /* 96px */
  --space-11: 8rem; /* 128px */
}
```

Desktop section padding: 6rem  
Large sections: 8rem  
Tablet: 5rem  
Mobile: 4rem

General rule:

- 8–12px: tiny relationships
- 16–24px: related content
- 32–48px: component groups
- 64–128px: major sections

---

## 5. Container

```css
.container {
  width: min(90% - 2rem, 1200px);
  margin-inline: auto;
}
```

Keep main content around 1200–1280px on large screens.

---

## 6. Border Radius

```css
:root {
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 18px;
  --radius-pill: 999px;
}
```

Use roughly:

- Buttons: 6–10px
- Cards/images: 12–18px
- Circular categories: 50%

Avoid making everything a pill.

---

## 7. Shadows

Keep shadows subtle.

```css
--shadow-soft: 0 10px 30px rgba(37, 33, 28, 0.08);
--shadow-light: 0 4px 16px rgba(37, 33, 28, 0.05);
```

If the shadow is one of the first things you notice, it is too strong.

---

## 8. Image Style

All AI images should share:

**Lighting**

- Soft natural window light
- Warm morning/afternoon light
- Gentle realistic shadows

**Colors**

- Ivory
- Cream
- Beige
- Taupe
- Walnut
- Natural oak
- Muted green

**Interior**

- Modern Scandinavian
- Subtle Japanese minimalism
- Natural materials
- Clean architecture
- Uncluttered spaces

**Photography**

- Premium interior editorial photography
- Photorealistic
- Realistic materials/textures
- Natural color grading
- High-end furniture magazine aesthetic

Avoid:

- People in product/interior images
- Text in images
- Logos
- Watermarks
- Excessive saturation
- Fake-looking CGI
- Over-decoration

---

# 9. Hero Images

## Desktop

> High-end editorial interior photograph of a luxurious modern living room, large soft ivory boucle sofa with elegant neutral cushions, low natural walnut coffee table, sculptural ceramic objects, warm beige textured walls, large indoor olive tree in a minimalist ceramic planter, subtle framed abstract artwork, elegant pendant light, natural oak flooring, floor-to-ceiling windows, soft diffused morning sunlight entering from the left, realistic gentle shadows, sophisticated warm ivory, cream, beige, taupe and walnut color palette, Scandinavian-Japanese luxury interior design, calm and sophisticated atmosphere, photorealistic premium interior photography, realistic fabric and wood textures, 35mm architectural photography, wide composition, main furniture arrangement positioned toward the right side, generous clean negative space on the left for website headline and buttons, no people, no text, no logos, no watermark, 16:9 website hero image.

Filename: `hero-desktop.jpg`

## Mobile

> Same luxury modern living room, same ivory boucle sofa, walnut coffee table, olive tree and warm beige interior, portrait-oriented editorial interior photography, main sofa and plant fully visible in the center of the frame, balanced vertical composition, soft natural morning sunlight, warm neutral palette, photorealistic, premium furniture magazine photography, no people, no text, no logos, no watermark, 4:5 portrait composition optimized for a mobile website hero.

Filename: `hero-mobile.jpg`

**Important:** Do not put website text inside the AI image. Put text/buttons in HTML/CSS.

---

# 10. Promotion Banner

> Luxury contemporary dining room in a warm minimalist home, elegant natural oak dining table surrounded by six sculptural cream upholstered chairs, large green indoor plant in the corner, soft beige walls, minimalist pendant lamp hanging above the table, sunlight streaming through a large window, warm ivory and sand color palette, sophisticated Scandinavian interior design, photorealistic high-end furniture editorial photography, wide horizontal composition, dining furniture positioned toward the right with clean architectural space toward the left for website copy, soft natural shadows, no people, no text, no logos, no watermark.

Filename: `summer-banner.jpg`

---

# 11. Product Image Prompts

## Sofa

> Premium modern three-seat sofa in soft warm ivory fabric, elegant curved silhouette, subtle textured upholstery, placed in a refined minimalist living room with warm beige walls and natural oak flooring, small neutral cushions, soft diffused window light, realistic fabric texture, tasteful Scandinavian luxury furniture photography, clean uncluttered composition, front three-quarter camera angle, photorealistic commercial furniture photography, warm cream and beige palette, no people, no text, no logos, no watermark.

`sofa.jpg`

## Armchair

> Elegant modern lounge armchair upholstered in warm cream boucle fabric, sculptural curved wooden frame, positioned in a sophisticated minimalist living room, natural oak floor, beige textured wall, small indoor plant and subtle decor in background, soft morning window light, gentle realistic shadows, premium Scandinavian furniture editorial photography, three-quarter view, photorealistic, warm neutral color palette, clean uncluttered composition, no people, no text, no logos, no watermark.

`armchair.jpg`

## Sideboard

> Luxury minimalist walnut wooden sideboard with clean geometric lines and subtle brass hardware, styled against a warm ivory plaster wall, elegant ceramic vase and small sculptural objects on top, soft indoor plant nearby, natural oak floor, beautiful diffused sunlight, sophisticated contemporary Scandinavian interior, premium furniture magazine photography, photorealistic wood grain and materials, warm neutral color palette, three-quarter view, no people, no text, no logos, no watermark.

`sideboard.jpg`

## Bed Frame

> Elegant modern upholstered bed frame in warm beige linen fabric, luxurious minimalist bedroom, soft cream bedding, natural oak bedside table, small ceramic lamp, subtle indoor plant, warm textured plaster walls, large window with soft morning sunlight, calm Scandinavian-Japanese interior design, photorealistic high-end interior photography, realistic linen and wood textures, warm ivory beige and taupe palette, clean uncluttered composition, no people, no text, no logos, no watermark.

`bed-frame.jpg`

## Desk

> Minimalist contemporary walnut writing desk with elegant slim wooden legs, styled in a sophisticated warm beige home office, cream upholstered chair, small ceramic lamp, subtle green plant, textured ivory wall, natural daylight entering from a nearby window, premium Scandinavian furniture photography, photorealistic realistic walnut wood grain, warm neutral color palette, clean editorial composition, no people, no text, no logos, no watermark.

`desk.jpg`

## Wardrobe

> Tall minimalist natural oak wardrobe with clean modern doors and subtle vertical detailing, placed against a warm cream bedroom wall, refined Scandinavian interior, small ceramic vase and indoor plant nearby, soft diffused daylight, natural oak flooring, sophisticated neutral palette of ivory, beige and warm wood, premium furniture editorial photography, photorealistic materials, clean composition, no people, no text, no logos, no watermark.

`wardrobe.jpg`

---

# 12. Category Images

Keep the main subject centered because these will be circular/square crops.

### Living Room

> Beautiful minimalist living room with an elegant cream sofa, natural wooden coffee table, warm beige walls, indoor green plant and soft sunlight, sophisticated Scandinavian interior design, centered composition with the main furniture fully visible in the center, photorealistic interior photography, warm ivory and beige palette, simple uncluttered styling, no people, no text, no logos, no watermark, square composition.

### Bedroom

> Elegant warm minimalist bedroom with a cream upholstered bed, soft beige linen bedding, natural oak bedside table, small ceramic lamp and subtle green plant, warm ivory plaster walls, gentle morning sunlight, Scandinavian-Japanese luxury interior design, centered composition, photorealistic interior photography, sophisticated neutral color palette, uncluttered, no people, no text, no logos, no watermark, square composition.

### Dining

> Sophisticated modern dining room with natural oak dining table and elegant cream upholstered chairs, minimalist pendant lamp above the table, subtle indoor plant, warm beige walls, soft natural window light, Scandinavian luxury interior design, centered symmetrical composition, photorealistic furniture photography, warm cream beige and natural wood palette, uncluttered, no people, no text, no logos, no watermark, square composition.

### Office

> Elegant minimalist home office with a natural walnut desk, sophisticated cream upholstered chair, small sculptural desk lamp, indoor green plant and warm beige textured walls, soft natural daylight, Scandinavian-Japanese interior design, centered composition, photorealistic premium interior photography, warm neutral palette, clean uncluttered styling, no people, no text, no logos, no watermark, square composition.

### Outdoor

> Luxury modern outdoor patio with elegant natural wood lounge furniture, cream outdoor cushions, minimalist stone coffee table, lush green plants, contemporary architecture, warm neutral stone surfaces, soft golden morning sunlight, sophisticated resort-inspired furniture photography, photorealistic, calm premium atmosphere, centered composition, no people, no text, no logos, no watermark, square composition.

### Storage

> Beautiful minimalist storage room with elegant natural oak shelving, modern wooden cabinets, neatly arranged neutral ceramic objects, books and small indoor plants, warm ivory walls, natural oak floor, soft diffused sunlight, Scandinavian-Japanese interior design, sophisticated neutral palette, centered composition, photorealistic high-end interior photography, clean uncluttered styling, no people, no text, no logos, no watermark, square composition.

Filenames:

- `category-living.jpg`
- `category-bedroom.jpg`
- `category-dining.jpg`
- `category-office.jpg`
- `category-outdoor.jpg`
- `category-storage.jpg`

---

# 13. Signature Collection

### Lounge Chair

> Single elegant Scandinavian lounge chair made from warm natural wood and soft cream fabric, positioned in a minimalist warm beige interior, subtle indoor plant in background, soft sunlight, natural oak floor, premium furniture editorial photography, realistic wood grain and fabric texture, sophisticated neutral palette, three-quarter product view, clean uncluttered composition, photorealistic, no people, no text, no logos, no watermark, 4:3 composition.

### Dining Table

> Beautiful modern natural oak dining table with clean architectural lines, minimalist dining room, two elegant cream chairs partially visible, warm ivory textured wall, subtle pendant lamp above, soft natural window light, Scandinavian luxury furniture photography, photorealistic realistic wood grain, warm beige and natural oak palette, clean editorial composition, no people, no text, no logos, no watermark, 4:3 composition.

### Coffee Table

> Sculptural round walnut coffee table with elegant minimalist design, placed in a sophisticated cream living room, subtle ceramic vase and small decorative object on the table, soft beige sofa slightly visible in background, warm natural sunlight, realistic walnut wood grain, premium Scandinavian furniture editorial photography, shallow depth of field, photorealistic, warm neutral palette, no people, no text, no logos, no watermark, 4:3 composition.

### Bookshelf

> Elegant minimalist natural oak bookshelf against a warm ivory plaster wall, beautifully styled with neutral ceramic vases, books, small sculptures and subtle green plants, sophisticated Scandinavian-Japanese interior design, soft natural window light, realistic wood texture, premium interior design magazine photography, photorealistic, warm cream beige and natural wood palette, symmetrical composition, no people, no text, no logos, no watermark, 4:3 composition.

Filenames:

- `signature-chair.jpg`
- `signature-table.jpg`
- `signature-coffee-table.jpg`
- `signature-bookshelf.jpg`

---

# 14. Why Choose Us

> Quiet luxury modern living room corner, elegant cream lounge chair beside a minimalist natural walnut sideboard, sculptural floor lamp, small indoor plant, warm beige textured wall, framed minimalist artwork, sunlight creating beautiful soft geometric shadows across the wall and furniture, sophisticated Scandinavian-Japanese interior design, warm ivory beige taupe and walnut palette, photorealistic high-end interior design editorial photography, calm luxurious atmosphere, realistic materials, no people, no text, no logos, no watermark, wide 4:3 composition.

`why-choose.jpg`

---

# 15. Dark Quote Banner

> Close-up editorial photograph of an elegant walnut wooden side table in a luxurious warm minimalist living room, sculptural ceramic vase, small stack of beautifully arranged neutral books, warm ambient lamp light creating dramatic soft shadows, dark brown and deep walnut tones, cinematic luxury furniture photography, rich realistic wood texture, intimate sophisticated atmosphere, shallow depth of field, premium interior design magazine aesthetic, no people, no text, no logos, no watermark, wide horizontal composition with darker negative space on the left for website typography.

`quote-banner.jpg`

---

# 16. Testimonial Portraits

Use fictional ordinary people, not celebrities.

### Avatar 1

> Professional editorial portrait of a friendly young female interior design customer in her early 30s, natural appearance, subtle warm smile, elegant neutral casual clothing, photographed against a softly blurred sophisticated modern home interior, warm natural window light, realistic skin texture, premium lifestyle photography, warm beige and cream color palette, shallow depth of field, photorealistic, head-and-shoulders composition, no text, no logos, no watermark, square portrait.

### Avatar 2

> Professional editorial portrait of a confident young male homeowner in his mid 30s, natural friendly expression, sophisticated neutral shirt, photographed inside a beautifully designed contemporary home, warm natural window light, softly blurred beige interior background, realistic skin texture, premium lifestyle photography, subtle warm color grading, photorealistic, head-and-shoulders composition, no text, no logos, no watermark, square portrait.

### Avatar 3

> Professional editorial portrait of an elegant female homeowner in her late 30s, warm natural smile, sophisticated neutral clothing, photographed in a luxurious minimalist living room, soft diffused daylight, warm beige and ivory interior softly blurred behind her, realistic skin texture, premium lifestyle photography, photorealistic, calm approachable expression, head-and-shoulders composition, no text, no logos, no watermark, square portrait.

Filenames:

- `avatar-1.jpg`
- `avatar-2.jpg`
- `avatar-3.jpg`

---

# 17. Blog Images

### Living Room Styling

> Beautiful modern luxury living room featuring a large cream sofa, natural walnut coffee table, neutral textured cushions, indoor green plant, minimalist artwork and warm beige walls, soft morning sunlight, Scandinavian-Japanese interior design, sophisticated warm neutral palette, photorealistic high-end interior magazine photography, inviting cozy atmosphere, no people, no text, no logos, no watermark, landscape 4:3 composition.

`blog-living.jpg`

### Perfect Sofa

> Close editorial photograph of a luxurious cream boucle sofa in a sophisticated modern living room, elegant neutral cushions, natural oak floor, warm beige textured wall, subtle indoor plant and minimalist artwork, soft diffused window light, realistic fabric texture, premium furniture magazine photography, warm ivory beige and taupe palette, photorealistic, no people, no text, no logos, no watermark, landscape 4:3 composition.

`blog-sofa.jpg`

### Sustainable Furniture

> Beautiful sustainable modern furniture arrangement featuring natural oak furniture, handcrafted wooden coffee table, woven natural fiber chair, indoor plants and subtle ceramic decor, warm ivory walls, soft natural sunlight, sophisticated Scandinavian interior design, environmentally conscious luxury aesthetic, realistic natural wood textures, photorealistic editorial interior photography, warm beige and earthy neutral palette, no people, no text, no logos, no watermark, landscape 4:3 composition.

`sustainable-furniture.jpg`

---

# 18. Newsletter Image

> Warm minimalist living room with an elegant cream sofa, soft beige cushions, natural walnut side table, large indoor green plant and subtle framed artwork, warm ivory walls, soft afternoon sunlight, calm luxurious atmosphere, Scandinavian-Japanese interior design, photorealistic premium interior photography, warm cream beige and walnut color palette, uncluttered composition, main furniture positioned toward the right side, clean darker beige space toward the left, no people, no text, no logos, no watermark, wide horizontal composition.

`newsletter.jpg`

---

# 19. Page Structure

```text
body
├── header
├── main
│   ├── hero
│   ├── benefits
│   ├── categories
│   ├── featured-products
│   ├── advantages
│   ├── statistics
│   ├── why-choose-us
│   ├── testimonials
│   ├── blog
│   └── newsletter
└── footer
```

Use semantic HTML:
`header`, `nav`, `main`, `section`, `article`, `footer`, `button`.

---

# 20. Header

Desktop:

- Logo
- Navigation
- Sign in
- Primary login/CTA

Suggested heights:

- Desktop: 72–88px
- Mobile: 64–72px

Mobile:

- Logo
- Menu button

Do not squeeze desktop navigation into mobile.

---

# 21. Hero Layout

Desktop:

- Two-column layout
- Text roughly 40–45%
- Image roughly 55–60%

Example:

```css
.hero {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  align-items: center;
  gap: 3rem;
}
```

Mobile:

- Stack vertically
- Smaller heading
- Mobile image
- CTA remains easy to tap
- No horizontal overflow

---

# 22. Benefits

Four:

1. Premium Materials
2. Expert Craftsmanship
3. Stylish & Functional
4. Customer Care

Desktop:
`repeat(4, 1fr)`

Tablet:
`repeat(2, 1fr)`

Mobile:
`1fr`

Keep descriptions short.

---

# 23. Categories

Circular images:

```css
.category-image {
  width: 100px;
  aspect-ratio: 1;
  border-radius: 50%;
  object-fit: cover;
}
```

Desktop: 6 columns  
Tablet: 3 columns  
Mobile: 2–3 columns

---

# 24. Product Grid

Desktop: 3 columns  
Tablet: 2 columns  
Mobile: 1 column

```css
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.product-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-lg);
}
```

---

# 25. Statistics

Use a dark background.

Example:

- 250+ Happy Customers
- 550+ Quality Products
- 15+ Awards
- 98% Satisfaction

Keep the section simple and high contrast.

---

# 26. Testimonials

Each:

- Quote
- Customer name
- Job/title
- Portrait
- Optional rating

Use a grid on desktop and stack on mobile.

---

# 27. Newsletter

Use a warm cream/beige background.

Include:

- Heading
- Short description
- Email input
- Subscribe button
- Optional image

---

# 28. Footer

Dark background.

Include:

- Logo
- Brand description
- Shop links
- Company links
- Support links
- Social icons
- Copyright

Use a responsive grid.

---

# 29. Responsive Breakpoints

Use mobile-first CSS.

```css
@media (min-width: 375px) {
}

@media (min-width: 768px) {
}

@media (min-width: 1024px) {
}

@media (min-width: 1200px) {
}
```

Test intermediate widths too.

---

# 30. Responsive Hero Image

Use separate desktop/mobile images:

```html
<picture>
  <source media="(max-width: 600px)" srcset="images/hero/hero-mobile.jpg" />
  <img src="images/hero/hero-desktop.jpg" alt="Modern luxury living room" />
</picture>
```

This prevents important furniture from being badly cropped on mobile.

---

# 31. Buttons

```css
.btn-primary {
  background: var(--color-brown);
  color: var(--color-white);
  padding: 0.8rem 1.4rem;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-brown);
}

.btn-primary:hover {
  background: var(--color-dark);
  border-color: var(--color-dark);
}
```

Make buttons comfortable to tap on mobile.

---

# 32. Accessibility

Every meaningful image needs useful alt text:

```html
<img
  src="images/products/sofa.jpg"
  alt="Cream boucle three-seat sofa in a modern living room"
/>
```

Decorative images can use `alt=""`.

Use semantic HTML and maintain good contrast.

---

# 33. CSS Organization

For this learning project:

```text
project/
├── index.html
├── css/
│   ├── style.css
│   └── queries.css
├── images/
└── icons/
```

Organize CSS by section:

```css
/* BASE */
/* HEADER */
/* HERO */
/* BENEFITS */
/* CATEGORIES */
/* PRODUCTS */
/* ADVANTAGES */
/* TESTIMONIALS */
/* BLOG */
/* NEWSLETTER */
/* FOOTER */
```

Keep it understandable rather than unnecessarily complex.

---

# 34. Development Order

1. HTML skeleton
2. Global CSS/reset
3. Variables
4. Typography
5. Container
6. Buttons
7. Header
8. Hero
9. Benefits
10. Categories
11. Product cards
12. Advantages
13. Statistics
14. Testimonials
15. Blog
16. Newsletter
17. Footer
18. Responsive design
19. Polish

Do not build the whole website at once.

---

# 35. Core Design Principles

1. Whitespace is part of the design.
2. Use a restrained color palette.
3. Use two fonts, not five.
4. Keep image ratios consistent.
5. Use Grid for two-dimensional page layouts.
6. Use Flexbox for one-dimensional alignment.
7. Avoid using absolute positioning for the entire layout.
8. Keep shadows subtle.
9. Use typography to create hierarchy.
10. Treat mobile as a real layout, not an afterthought.
11. Never put website text into AI-generated images.
12. Use separate mobile imagery when composition requires it.
13. Keep animation subtle.
14. Reuse spacing variables.
15. Reuse color variables.
16. Keep components visually consistent.

---

# 36. Asset Checklist

Before full implementation:

[ ] Desktop hero
[ ] Mobile hero
[ ] Promotion banner
[ ] 6 product images
[ ] 6 category images
[ ] 4 signature collection images
[ ] Why Choose Us image
[ ] Dark quote banner
[ ] 3 testimonial portraits
[ ] 3 blog images
[ ] Newsletter image
[ ] Logo
[ ] UI icons

---

# 37. Learning Rules

This is a practice project.

Do not blindly copy code.

For each section:

1. Study the design.
2. Identify the layout.
3. Decide whether Grid or Flexbox is appropriate.
4. Build the HTML.
5. Style it yourself.
6. Only search for help when genuinely stuck.
7. Explain why the CSS works.

When something looks wrong, inspect:

- width
- height
- padding
- margin
- gap
- alignment
- font size
- line height
- object-fit
- grid columns
- flex direction

Do not randomly change values until it looks right.

---

# 38. Final Visual Target

The finished site should feel:

**Warm → Minimal → Premium → Calm → Editorial → Modern**

The goal is not complexity.

The goal is demonstrating that strong HTML/CSS decisions can create a polished professional result.

---

# 39. Project Manager Challenge

Pass 1: Make it work.  
Pass 2: Make it responsive.  
Pass 3: Make it look good.  
Pass 4: Polish it.

The first version is allowed to look rough.

The important thing is that you build it and understand why it works.
