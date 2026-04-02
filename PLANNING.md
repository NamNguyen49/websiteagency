# HNT SOLUTIONS - STRATEGIC DIGITAL ARCHITECTURE 2026

This document serves as the "Source of Truth" for the agency's website architecture, design rules, and conversion frameworks.

## 1. CORE ARCHITECTURE (The Sitemap)

The website is structured into 4 high-conversion "Power Hubs" and essential supporting pages.

### A. Power Hub: Web Design & Systems
- **Parent Page**: `/services/web-design`
- **Sub-pages (Internal Render)**:
  - `corporate-website`: Focus on Trust & Authority.
  - `e-commerce-website`: Focus on Sales Velocity & UX.
  - `landing-page`: Focus on Ad Conversion & Lead Capture.
  - `uiux-design`: Focus on CRO Logic & User Psychology.

### B. Power Hub: SEO Growth
- **Parent Page**: `/services/seo`
- **Sub-pages**: `overall-seo`, `keyword-seo`, `website-audit`.

### C. Power Hub: Advertising (ROI)
- **Parent Page**: `/services/ads`
- **Sub-pages**: `facebook-ads`, `google-ads`, `tiktok-ads`.

### D. Power Hub: Future Tech (Automation & AI)
- **Parent Page**: `/services/marketing-ai`
- **Sub-pages**: `automation-marketing`, `ai-content`, `chatbot`.

---

## 2. UI/UX RULES 2026 (The Design Mandate)

To be a top-tier global agency, the UI must feel **"Expensive, Predictable, and Performant"**.

### A. Visual Aesthetics
- **Background**: 100% Solid Dark Theme (`#0a0a0b`) for primary containers to ensure zero bleed-through.
- **Accents**: HNT Brand Blue (`#38bdf8`) used exclusively for **Interactions** (Hover, CTA, Active States).
- **Glassmorphism**: Restricted to high-level decorative elements (Mockups, Badges) with heavy blur (`20px+`).
- **Typography**: Industrial-grade sans-serif (Inter/Outfit). Heavy weights for headlines (800+).

### B. Interaction Logic
- **Predictable Hover**: All interactive links must shift slightly (+16px padding) and change to Brand Blue.
- **Micro-animations**: Use subtle floating effects (` translateY `) for 3D icons to create "Living" UI.
- **Opaque Navigation**: Dropdowns must be 100% solid to mask complex background animations (like the 3D grid).

---

## 3. PAGE STRUCTURE STANDARDS (SEO & CRO)

Every service page MUST follow this sequence to ensure search visibility and user conversion.

| Section | Purpose | SEO Note |
| :--- | :--- | :--- |
| **Hero (H1)** | Immediate Value | Key keyword in H1 (e.g., "Thiết kế Website Bán hàng"). |
| **Outcomes (Vitals)** | Proof of Life | Stats like "98% Satisfaction" or "ROI +50%". |
| **What We Do** | Clarity | Bullet points with semantic tags (H3/H4). |
| **Our Process (Workflow)** | Predictability | Step-by-step logic to lower user anxiety. |
| **The "Eat" Factor** | Trust | Case Study link or Social Proof. |
| **Final CTA (The Hook)** | Conversion | High-contrast button with a promise (e.g., "Get Free Audit"). |

---

## 4. CONTENT STRATEGY & DYNAMISM

### A. Multilingual Integrity
- **NO HARDCODED STRINGS**: All text must reside in `LanguageContext.jsx`.
- **Slugs**: Use consistent URL slugs (English-based) across all translations for routing stability.

### B. Conversion Copywriting (The HNT Way)
- Avoid passive voice: Use "Đột phá doanh thu" instead of "Dịch vụ tăng doanh thu của chúng tôi".
- High-intensity hooks: "Máy in tiền từ Ads", "Thống lĩnh thứ hạng tìm kiếm".

---

## 5. TECHNICAL ROADMAP

1. [x] **Header & Navigation**: Finalized Mega Menu with hierarchical routing.
2. [x] **Web Design Category**: Implemented with sub-item rendering.
3. [ ] **SEO, Ads, AI Pages**: Deploy dedicated sub-item rendering (matching Web Design structure).
4. [ ] **Case Study Engine**: Portfolio grid with industry filters (F&B, Real Estate, etc.).
5. [ ] **Contact Transmission**: High-performance form with lead qualification fields.
