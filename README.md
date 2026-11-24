# VELTRIXS — Final audited website

## Publish
Upload the root HTML files, assets folder, robots.txt and sitemap.xml to your static hosting. Preserve file names and paths. The original logo, charcoal/lime colors and portfolio assets are retained. Do not publish the optional server or QA directories to static hosting. QA contains the report and representative screenshots.

## Connect all inquiry forms in one place
Open `assets/js/form-config.js` and replace the empty string in:

```js
window.VELTRIXS_FORM_ACTION = "";
```

with your actual HTTPS form submission endpoint, for example a Formspree endpoint. The contact form uses a standard POST with named fields; all quote buttons lead to that same form. No endpoint is configured by default. With JavaScript enabled the form prevents submission while the endpoint is empty and displays a contact alternative. Configure and test your provider's field handling, spam protection, success page and email notifications before going live. The optional legacy Node server is retained for pricing administration; its JSON inquiry API is not the default form target and is not compatible with the standard POST without adaptation.

## SEO and launch
Page titles, descriptions, canonical URLs, Open Graph, Twitter cards, organization/service/breadcrumb schema, sitemap and robots are included. Verify your domain in Google Search Console, submit sitemap.xml, and configure GA4 with your own measurement ID and consent settings if required. Rankings and indexing cannot be guaranteed. Verify actual social profiles and external project links on deployment. Legal pages require business review.

## QA
See QA/QA-REPORT.txt. Chromium rendered all 21 public pages at four viewport widths using a local inline-assets harness. Direct URL navigation, external form delivery, live hosting, and additional browser engines were not tested. Original illustrative portfolio previews are restored. No fake client statistics, founder profiles or testimonials added.

Optional pricing API: set `window.VELTRIXS_PRICING_ENDPOINT = "/api/pricing";` in `assets/js/form-config.js` only if deploying the included Node backend. The default static site uses the built-in package cards without making failed API requests.
