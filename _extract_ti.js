const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.join(__dirname, "_source.html"), "utf8");

function strip(s) {
  return String(s || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#039;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const testimonials = [];
html.split('class="testimonial-slide"').slice(1).forEach((block) => {
  const chunk = block.slice(0, 5000);
  const img = chunk.match(/src="([^"]+)"/);
  const name = chunk.match(/user-name[^>]*>([\s\S]*?)<\/h6>/i) || chunk.match(/<h6[^>]*>([\s\S]*?)<\/h6>/i);
  const role =
    chunk.match(/<small[^>]*>([\s\S]*?)<\/small>/i) ||
    chunk.match(/user-title[^>]*>([\s\S]*?)<\/span>/i);
  const text = chunk.match(/<div class="testimonial-text">([\s\S]*?)<\/div>/i);
  if (!img || !name) return;
  let quote = strip(text ? text[1] : "");
  if (!quote) return;
  if (quote.length > 280) quote = quote.slice(0, 280) + "…";

  const stars = (chunk.match(/★/g) || []).length;
  testimonials.push({
    name: strip(name[1]),
    role: strip(role ? role[1] : "Customer") || "Customer",
    avatar: img[1],
    quote,
    rating: stars || 5
  });
});

const instructors = [];
html.split('class="instructor-slide"').slice(1).forEach((block) => {
  const chunk = block.slice(0, 2200);
  const href = chunk.match(/href="([^"]+)"/);
  const img = chunk.match(/<img[^>]+src="([^"]+)"/);
  const name = chunk.match(/instructor-name[^>]*>([\s\S]*?)<\/h6>/i);
  const title = chunk.match(/instructor-role[^>]*>([\s\S]*?)<\/p>/i);
  if (!img || !name) return;
  instructors.push({
    url: href ? href[1] : "https://charter-center.com/",
    avatar: img[1],
    name: strip(name[1]),
    title: strip(title ? title[1] : "").slice(0, 110)
  });
});

function dedupe(list, key) {
  const seen = new Set();
  return list.filter((item) => {
    const k = (item[key] || "").toLowerCase();
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

const out = {
  testimonials: dedupe(testimonials, "name"),
  instructors: dedupe(instructors, "name")
};

fs.writeFileSync(path.join(__dirname, "_extract_ti.json"), JSON.stringify(out, null, 2));
console.log("t=" + out.testimonials.length + " i=" + out.instructors.length);
console.log("q0 len=" + (out.testimonials[0] && out.testimonials[0].quote.length));
console.log("q0", out.testimonials[0] && out.testimonials[0].quote.slice(0, 120));
