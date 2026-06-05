# Main Responsive Portfolio

A responsive personal portfolio website for Nitesh Prasad Badu showcasing an interactive hero, projects, skills, and contact sections. Built with semantic HTML, a single CSS stylesheet, and small vanilla JavaScript modules for interactivity and theme management.

🌐 Live link: https://portfolio-kappa-gilt-42.vercel.app/
**Highlights**

- Responsive layout for desktop and mobile
- Light / dark theme toggle (desktop + mobile)
- Interactive code-card in hero with syntactic coloring
- Infinite-scrolling skills marquee with hover zoom effect
- Simple, dependency-free stack making it easy to deploy anywhere

**Tech stack**

- HTML5
- CSS3 (custom properties, responsive breakpoints, animations)
- Vanilla JavaScript (ES modules / IIFE patterns)

**Getting started**

- Clone or copy the project into your local machine.
- Open `index.html` directly in a browser for a static preview, or use a simple HTTP server to avoid mixed-content or file:// limitations:

```bash
# from project root
python3 -m http.server 3000
# then open http://localhost:3000 in your browser
```

**Development**

- Edit markup in [index.html](index.html)
- Update styles in [css/style.css](css/style.css)
- Update UI behaviour in `js/` (notable files: [js/navbar.js](js/navbar.js), [js/hero.js](js/hero.js), [js/skills.js](js/skills.js))
- Use your editor's Live Server extension or the command above to preview changes.

**Project structure (important files)**

- [index.html](index.html): main entry and all section markup
- [css/style.css](css/style.css): site styles, theme variables, marquee animations
- [js/navbar.js](js/navbar.js): theme toggle (desktop + mobile) and mobile menu
- [js/hero.js](js/hero.js): interactive code-card pointer effect
- [js/skills.js](js/skills.js): skills-related script (placeholder logger)
- [assests/](assests/): images and project preview assets

**Customization notes**

- Theme colors are driven by CSS variables at the top of [css/style.css](css/style.css) (both `:root` and `[data-theme="dark"]`). Adjust variables to fine-tune colors.
- The skills marquee lives in the `#skills` section of [index.html](index.html). Replace the letter tiles in `.skill-icon` with real SVG or image assets if you prefer icons.
- Animation speed/direction lives in the `.marquee-row--*` declarations in [css/style.css](css/style.css). Change the `animation` duration or `animation-direction` for different effects.

**Accessibility & performance**

- Semantic HTML sections and ARIA labels exist for the theme buttons and menu toggles. Verify with a screen reader and expand ARIA attributes where needed.
- The site is dependency-free which keeps load times minimal. Use optimized images (WebP/AVIF) in `assests/` to improve performance.

**Testing / Verification**

- Verify theme toggle works on both desktop (top bar) and mobile (inside the mobile menu).
- Check skills marquee behavior on small screens; hover will pause animation on desktop. On touch devices tapping will not pause — consider adding touch handlers if needed.

**Contributing**

- Small improvements, bug fixes, or feature suggestions are welcome. Open a PR or modify files directly and test locally before committing.

**License**

- Add a license of your choice (e.g., MIT). This repository does not include a license file by default.

**Author**

- Nitesh Prasad Badu

---

If you want, I can:

- Add a `package.json` and a small build/dev script,
- Generate optimized icon assets for the skills marquee,
- Add touch-friendly pause/play controls for mobile marquee.

Which of those would you like next?
