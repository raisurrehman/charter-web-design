const fs = require("fs");
const path = require("path");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "_extract_ti.json"), "utf8"));

const htmlPath = path.join(__dirname, "index.html");
let html = fs.readFileSync(htmlPath, "utf8");

const oldTestimonials = html.match(/<section class="section section-muted" id="testimonials">[\s\S]*?<\/section>/);
const oldInstructors = html.match(/<section class="section" id="instructors">[\s\S]*?<\/section>/);

if (!oldTestimonials || !oldInstructors) {
  console.error("sections not found");
  process.exit(1);
}

const newTestimonials = `  <section class="section section-muted" id="testimonials">
    <div class="wrap">
      <div class="section-head reveal slider-head">
        <div>
          <div class="kicker">Testimonials</div>
          <h2>What our customers are saying</h2>
          <p>Hear from learners who trained with Charter Center across HSE, BIM, and management tracks.</p>
        </div>
        <div class="slider-controls">
          <button type="button" class="slider-btn" id="quotePrev" aria-label="Previous"><i data-lucide="chevron-left"></i></button>
          <button type="button" class="slider-btn" id="quoteNext" aria-label="Next"><i data-lucide="chevron-right"></i></button>
        </div>
      </div>
      <div class="slider-viewport reveal">
        <div class="quote-track" id="quoteTrack"></div>
      </div>
    </div>
  </section>`;

const newInstructors = `  <section class="section" id="instructors">
    <div class="wrap">
      <div class="section-head reveal slider-head">
        <div>
          <div class="kicker">Instructors</div>
          <h2>Meet our instructors</h2>
          <p>Learn from certified professionals and industry experts with real project experience.</p>
        </div>
        <div class="slider-controls">
          <button type="button" class="slider-btn" id="instPrev" aria-label="Previous"><i data-lucide="chevron-left"></i></button>
          <button type="button" class="slider-btn" id="instNext" aria-label="Next"><i data-lucide="chevron-right"></i></button>
        </div>
      </div>
      <div class="slider-viewport reveal">
        <div class="instructor-track" id="instructorTrack"></div>
      </div>
    </div>
  </section>`;

html = html.replace(oldTestimonials[0], newTestimonials);
html = html.replace(oldInstructors[0], newInstructors);
fs.writeFileSync(htmlPath, html);

const jsPath = path.join(__dirname, "assets/js/main.js");
let js = fs.readFileSync(jsPath, "utf8");

const dataBlock =
  "  var TESTIMONIALS = " + JSON.stringify(data.testimonials) + ";\n" +
  "  var INSTRUCTORS = " + JSON.stringify(data.instructors) + ";\n";

if (js.includes("var TESTIMONIALS =")) {
  js = js.replace(/  var TESTIMONIALS = \[[\s\S]*?\];\n  var INSTRUCTORS = \[[\s\S]*?\];\n/, dataBlock);
} else {
  js = js.replace("  var CATEGORIES = ", dataBlock + "  var CATEGORIES = ");
}

const sliderBlock = `
  /* Testimonials + Instructors sliders */
  function starsHtml(n) {
    var full = Math.max(0, Math.min(5, Number(n) || 5));
    return '<div class="stars">' + "★".repeat(full) + "☆".repeat(5 - full) + "</div>";
  }
  function renderTestimonials() {
    var track = document.getElementById("quoteTrack");
    if (!track) return;
    track.innerHTML = (TESTIMONIALS || []).map(function (t) {
      return '<article class="quote-card">' +
        starsHtml(t.rating) +
        "<p>" + escapeHtml(t.quote) + "</p>" +
        '<div class="quote-person"><img src="' + escapeHtml(t.avatar) + '" alt="" loading="lazy" />' +
        "<div><strong>" + escapeHtml(t.name) + "</strong><span>" + escapeHtml(t.role || "Customer") + "</span></div></div>" +
        "</article>";
    }).join("");
  }
  function renderInstructors() {
    var track = document.getElementById("instructorTrack");
    if (!track) return;
    track.innerHTML = (INSTRUCTORS || []).map(function (p) {
      return '<a class="instructor-card" href="' + escapeHtml(p.url || "https://charter-center.com/") + '" target="_blank" rel="noopener">' +
        '<img src="' + escapeHtml(p.avatar) + '" alt="" loading="lazy" />' +
        '<div class="info"><h3>' + escapeHtml(p.name) + "</h3><p>" + escapeHtml(p.title || "") + "</p></div></a>";
    }).join("");
  }
  function setupSlider(trackId, prevId, nextId) {
    var track = document.getElementById(trackId);
    var prev = document.getElementById(prevId);
    var next = document.getElementById(nextId);
    if (!track) return;
    function step() {
      var card = track.querySelector(":scope > *");
      return card ? card.getBoundingClientRect().width + 16 : 320;
    }
    if (prev) prev.addEventListener("click", function () { track.scrollBy({ left: -step(), behavior: "smooth" }); });
    if (next) next.addEventListener("click", function () { track.scrollBy({ left: step(), behavior: "smooth" }); });
  }
  renderTestimonials();
  renderInstructors();
  setupSlider("quoteTrack", "quotePrev", "quoteNext");
  setupSlider("instructorTrack", "instPrev", "instNext");
`;

if (!js.includes("Testimonials + Instructors sliders")) {
  js = js.replace("  /* Mobile nav */", sliderBlock + "\n  /* Mobile nav */");
}

fs.writeFileSync(jsPath, js);

const cssPath = path.join(__dirname, "assets/css/main.css");
let css = fs.readFileSync(cssPath, "utf8");

const oldQuote = /\/\* Testimonials \*\/[\s\S]*?(?=\/\* Instructors|\.instructor-grid)/;
const oldInst = /\.instructor-grid[\s\S]*?(?=\/\* FAQ|\.accordion|\/\* Newsletter)/;

const newSliderCss = `/* Testimonials + Instructors — horizontal dynamic sliders */
.slider-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 1rem;
}
.slider-controls { display: flex; gap: .45rem; flex-shrink: 0; }
.slider-btn {
  width: 42px; height: 42px; border-radius: 50%;
  border: 1px solid var(--line);
  background: #fff;
  color: var(--navy);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background .2s, border-color .2s, color .2s, transform .2s;
}
.slider-btn:hover {
  background: var(--navy);
  border-color: var(--navy);
  color: #fff;
  transform: translateY(-1px);
}
.slider-btn .lucide { width: 1.1rem; height: 1.1rem; }
.slider-viewport { overflow: hidden; }
.quote-track,
.instructor-track {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding-bottom: .35rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}
.quote-track::-webkit-scrollbar,
.instructor-track::-webkit-scrollbar { display: none; }
.quote-track > *,
.instructor-track > * {
  flex: 0 0 min(340px, 82vw);
  scroll-snap-align: start;
}
.instructor-track > * {
  flex-basis: min(260px, 70vw);
}
.quote-grid { display: none; }
.instructor-grid { display: none; }

`;

if (css.includes("Testimonials + Instructors — horizontal")) {
  console.log("css already updated");
} else if (oldQuote.test(css)) {
  css = css.replace(oldQuote, newSliderCss + "/* Testimonials */\n");
  // keep quote-card styles - they should still exist after. Check.
  fs.writeFileSync(cssPath, css);
  console.log("css-slider-inserted");
} else {
  // append before newsletter
  css = css.replace("/* Newsletter", newSliderCss + "/* Newsletter");
  fs.writeFileSync(cssPath, css);
  console.log("css-appended");
}

// Ensure quote-card and instructor-card base styles still good; update flex widths already set.
// Soften fixed 3/4 column media queries that force quote-grid/instructor-grid
css = fs.readFileSync(cssPath, "utf8");
css = css.replace(
  ".course-grid, .quote-grid, .instructor-grid, .footer-grid { grid-template-columns: 1fr 1fr; }",
  ".course-grid, .footer-grid { grid-template-columns: 1fr 1fr; }"
);
css = css.replace(
  ".course-grid, .quote-grid, .instructor-grid, .footer-grid, .cat-grid, .news-form {",
  ".course-grid, .footer-grid, .cat-grid, .news-form {"
);

// Reinforce card styles for slider context if quote-card block got mangled
if (!css.includes(".quote-card {")) {
  css = css.replace(
    "/* Testimonials */\n",
    `/* Testimonials */
.quote-card {
  background: #fff; border-radius: 24px; padding: 1.5rem;
  border: 1px solid var(--line);
  box-shadow: 0 10px 28px rgba(18,26,51,.05);
  display: flex; flex-direction: column; min-height: 100%;
}
.quote-card .stars { color: #f4b000; letter-spacing: .08em; margin-bottom: .7rem; }
.quote-card p {
  margin: 0 0 1.1rem; color: #3a4460; font-size: var(--fs-sm); line-height: 1.6; flex: 1;
}
.quote-person { display: flex; gap: .75rem; align-items: center; }
.quote-person img { width: 42px; height: 42px; border-radius: 50%; object-fit: cover; }
.quote-person strong { display: block; font-size: var(--fs-sm); color: var(--navy-deep); }
.quote-person span { font-size: var(--fs-xs); color: var(--muted); }

`
  );
}
if (!css.includes(".instructor-card {")) {
  css = css.replace(
    "/* Newsletter",
    `.instructor-card {
  background: #fff; border-radius: 22px; overflow: hidden;
  border: 1px solid var(--line);
  transition: transform .2s var(--ease), box-shadow .2s;
  display: block;
}
.instructor-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(18,26,51,.1);
}
.instructor-card img { width: 100%; aspect-ratio: .92; object-fit: cover; background: #d5dceb; }
.instructor-card .info { padding: 1rem 1.05rem 1.2rem; }
.instructor-card h3 {
  font-family: var(--display); font-size: var(--fs-sm); margin: 0 0 .35rem; color: var(--navy-deep);
}
.instructor-card p {
  margin: 0; font-size: var(--fs-xs); color: var(--muted); line-height: 1.45;
}

/* Newsletter`
  );
}

fs.writeFileSync(cssPath, css);
console.log("done t=" + data.testimonials.length + " i=" + data.instructors.length);
