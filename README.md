# VELTRIXS — Premium Digital Agency Website

A complete, static, responsive one-page digital agency website built with HTML, CSS and vanilla JavaScript. No npm, build process, paid libraries, database or framework needed.

## Quick start

1. Open `index.html` in a browser to preview it.
2. For GitHub Pages, upload the *contents* of this folder to the root of your repository (or enable Pages for the selected folder/branch).
3. Your deployment will load automatically from `index.html`.

## Contact form — IMPORTANT

The form is intentionally **not connected** because you asked to supply your own action URL later. In `index.html` find:

```html
<form id="contactForm" action="YOUR_FORM_ACTION_LINK_HERE" method="POST">
```

Replace `YOUR_FORM_ACTION_LINK_HERE` with your own working form-processing endpoint (FormSubmit/Formspree/your API/etc.). Until then, submission is blocked and the site displays an honest setup message instead of claiming to have sent an email. Some form processors also require extra hidden fields or different `name` attributes: follow your provider's instructions.

## Easy customization

- Brand copy, services, form fields, and three live project links: `index.html`
- Colors, font sizes, spacing, and animations: `assets/css/style.css`; change variables under `:root`.
- Navigation, scroll animations, service accordion, and contact form placeholder logic: `assets/js/main.js`.
- Contact email currently: `mhk202007@gmail.com`; WhatsApp currently: `+92 330 6829814` (from the old agency page). Search and replace in `index.html` if needed.
- Browser title, meta description, and OG preview: top of `index.html`.
- Mobile menu: included, no dependencies.

## Logo and imagery

- `assets/images/logo-veltrixs.png` — polished transparent light wordmark for dark backgrounds, used on the website.
- `assets/images/logo-veltrixs-dark.png` — transparent dark wordmark for light backgrounds.
- `assets/images/logo-mark.png` — standalone brand icon.
- `assets/images/favicon.png` — favicon.
- `assets/images/logo-original-concept.png` — original AI-generated transparent logo concept.
- `assets/images/social-preview.png` — social-share preview image.

Portfolio card visuals are custom CSS illustrations reflecting the projects' industries and brand presentations. **They are not screenshots of the linked websites.** Each card links directly to the actual project.

## Services shown

Website Development / Social Media Management / SEO & Search Visibility / AI Content Creation / Graphic Designing.

## Motion & accessibility

Uses subtle entry transitions, scrolling ticker, animated orbit illustration, cursor-aware hero glow, animated accordion, hover effects, progress bar, and responsive mobile menu. Honors `prefers-reduced-motion`. Includes keyboard-friendly focus styles, descriptive labels, and form validation.

## Important notes

- The site itself is deployable on any static host. Contact form delivery needs *your own endpoint*.
- Google Fonts will load on internet-enabled devices; local fallback fonts keep the page usable offline.
- No fictitious reviews, metrics, or agency awards have been invented.
- Review your contact details and site copy before publishing.
