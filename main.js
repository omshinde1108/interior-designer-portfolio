/* ===== SITE SETTINGS (edit here) ===== */
const SITE = {
  name: "Rutuja Kamankar",
  whatsapp: "919356432235",            // country code + number, digits only
  email: "rutuja.kamankar@gmail.com",
  social: [                             // set url to "" until you have the link
    { name: "Instagram", url: "" },
    { name: "LinkedIn", url: "" },
    { name: "Behance", url: "" }
  ]
};
const ICONS = {
  plan: '<path d="M3 3h18v18H3zM3 12h8M11 3v6M15 21v-7h6"/>',
  sofa: '<path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3M3 11a2 2 0 0 1 2 2v2h14v-2a2 2 0 0 1 2-2 1 1 0 0 1 1 1v6H2v-6a1 1 0 0 1 1-1zM5 18v2M19 18v2"/>',
  ruler: '<path d="M3 17 17 3l4 4L7 21zM8 12l2 2M11 9l2 2M14 6l2 2"/>',
  cube: '<path d="M12 2 3 7v10l9 5 9-5V7zM3 7l9 5 9-5M12 12v10"/>',
  swatch: '<path d="M4 4h6v16H4zM10 8l4-4 4 4-8 12M14 20h6v-6"/>',
  idea: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c1 1 1 2 1 3h6c0-1 0-2 1-3a6 6 0 0 0-4-10z"/>',
  home: '<path d="M3 11 12 3l9 8M5 10v11h14V10M10 21v-6h4v6"/>',
  shop: '<path d="M4 9h16l-1-5H5zM5 9v11h14V9M9 20v-6h6v6"/>',
  puzzle: '<path d="M9 3h3v3a2 2 0 1 0 4 0V3h5v6h-3a2 2 0 1 0 0 4h3v8H3V3z"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>',
  chat: '<path d="M4 4h16v12H9l-5 4z"/>',
  team: '<path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-4 3-6 6-6s6 2 6 6M17 11a2.5 2.5 0 1 0 0-5M17 14c3 0 4 2 4 5"/>',
  adapt: '<path d="M4 12a8 8 0 0 1 14-5l2-2v6h-6l2-2a5 5 0 0 0-9 3M20 12a8 8 0 0 1-14 5l-2 2v-6h6l-2 2a5 5 0 0 0 9-3"/>',
  clock: '<path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2"/>',
  sheet: '<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h7"/>',
  pen: '<path d="M4 20l1-5L16 4l4 4L9 19zM14 6l4 4"/>'
};
const svg = k => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[k]}</svg>`;
const $ = (s, r = document) => r.querySelector(s);
const h = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const TBA = "Details to be added";

const SERVICES = [
  ["Space Planning", "plan", "Functional layouts that make the best use of every room."],
  ["Furniture Planning", "sofa", "Furniture arrangements that balance comfort, flow and proportion."],
  ["2D Drafting", "ruler", "Clear plans, elevations and working drawings."],
  ["3D Visualization", "cube", "Realistic views so you can see the space before it is built."],
  ["Material Selection", "swatch", "Materials and finishes chosen to suit the design and the use."],
  ["Interior Concept Development", "idea", "A clear design direction developed from your brief."],
  ["Residential Interior Design", "home", "Homes designed around how you live."],
  ["Commercial Interior Design", "shop", "Offices, stores and supermarkets planned for function and flow."]
];
const SKILLS = [
  ["Space Planning", "plan", "Arranging rooms and circulation for everyday use."],
  ["Furniture Layout", "sofa", "Placing furniture for comfort and movement."],
  ["2D Drawing", "ruler", "Accurate technical drawings."],
  ["3D Visualization", "cube", "Spatial models and realistic views."],
  ["Material Selection", "swatch", "Choosing finishes that work together."],
  ["Creative Thinking", "idea", "Fresh ideas grounded in the brief."],
  ["Problem Solving", "puzzle", "Practical answers to site and layout limits."],
  ["Attention to Detail", "eye", "Care over dimensions, joins and finishes."],
  ["Communication", "chat", "Listening to clients and explaining ideas clearly."],
  ["Teamwork", "team", "Working with designers, vendors and site teams."],
  ["Adaptability", "adapt", "Adjusting to changing briefs and conditions."],
  ["Time Management", "clock", "Keeping drawings and deliverables on schedule."]
];
const SOFTWARE = [
  ["AutoCAD", "ruler", "2D drafting and technical drawings"],
  ["SketchUp", "cube", "3D modelling and space visualization"],
  ["V-Ray", "eye", "Realistic rendering and visualization"],
  ["Lumion", "home", "Architectural visualization"],
  ["Canva", "pen", "Presentation and design layouts"],
  ["MS Office", "sheet", "Documentation and presentations"]
];
const PROCESS = [
  ["Consultation", "Understanding requirements and project goals."],
  ["Site Understanding", "Understanding the space and existing conditions."],
  ["Concept Development", "Developing the design direction and concept."],
  ["Space Planning", "Creating functional layouts and furniture arrangements."],
  ["2D Drafting", "Preparing technical drawings and plans."],
  ["3D Visualization", "Creating realistic spatial representations."],
  ["Material Selection", "Selecting suitable materials and finishes."],
  ["Project Coordination", "Supporting the project through execution."]
];
const EXPERIENCE = ["Design development", "Space planning", "AutoCAD drafting", "SketchUp modelling", "Material selection", "Furniture planning", "Working drawings", "3D visualization", "Site-related work and site visits", "Client meetings", "Presentation drawings", "Coordination during project execution"];
const STATS = [["6+", "Months internship experience"], ["2023–2026", "Interior design diploma"], ["6", "Software tools"], ["5+", "Core design skills"]];
const FORM_OPTS = {
  type: ["Residential", "Commercial", "Office", "Restaurant / Café", "Kitchen", "Bedroom", "Living Room", "Other"],
  budget: ["Below ₹5 Lakhs", "₹5–10 Lakhs", "₹10–20 Lakhs", "₹20–50 Lakhs", "₹50 Lakhs+", "Discuss with Designer"],
  style: ["Modern", "Minimal", "Contemporary", "Rustic", "Traditional", "Luxury", "Industrial", "Other"]
};

/* ===== Render static lists ===== */
const pad = n => String(n).padStart(2, "0");
SERVICES.forEach((s, i) => { const e = h("article", "svc rv", `${svg(s[1])}<span class="num">${pad(i + 1)}</span><h3>${s[0]}</h3><p>${s[2]}</p>`); $("#serviceList").append(e); });
SKILLS.forEach(s => $("#skillList").append(h("article", "skill rv", `${svg(s[1])}<h3>${s[0]}</h3><p>${s[2]}</p>`)));
SOFTWARE.forEach(s => $("#softList").append(h("article", "soft rv", `<div class="sico">${svg(s[1])}</div><h3>${s[0]}</h3><p>${s[2]}</p>`)));
PROCESS.forEach((p, i) => $("#processList").append(h("li", "step rv", `<span class="num">${pad(i + 1)}</span><h3>${p[0]}</h3><p>${p[1]}</p>`)));
EXPERIENCE.forEach(t => $("#expList").append(h("li", null, t)));
STATS.forEach(s => $("#stats").append(h("div", "stat rv", `<b>${s[0]}</b><span>${s[1]}</span>`)));
SITE.social.forEach(s => $("#social").append(h("li", null, s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${s.name}</a>` : `<span title="Link to be added">${s.name}</span>`)));
$("#waBtn").href = `https://wa.me/${SITE.whatsapp}`;
Object.entries(FORM_OPTS).forEach(([k, arr]) => { const sel = $(`select[name=${k}]`); sel.append(new Option("Select…", "")); arr.forEach(o => sel.append(new Option(o, o))); });

/* ===== Projects ===== */
const grid = $("#grid"), filters = $("#filters");
const info = v => v ? v : TBA;
function card(p, big) {
  const a = h("a", "pcard" + (big ? " big" : ""));
  a.href = "#project-" + p.id; a.dataset.id = p.id;
  a.append(makeImg(p.coverImage, p.title + " cover"));
  a.append(h("div", "pinfo", `<small>${p.categories.join(" / ")}</small><h3>${p.title}</h3>${big ? `<p>${p.description}</p>` : ""}<span class="more">VIEW PROJECT</span>`));
  a.addEventListener("click", e => { e.preventDefault(); openProject(p.id); });
  return a;
}
(FEATURED_IDS.length ? projects.filter(p => FEATURED_IDS.includes(p.id)) : projects).forEach(p => $("#featured").append(card(p, true)));
["All", ...CATEGORIES].forEach((c, i) => {
  const b = h("button", "chip-btn", c.toUpperCase()); b.type = "button"; b.setAttribute("aria-pressed", i === 0);
  b.addEventListener("click", () => filter(c, b)); filters.append(b);
});
projects.forEach(p => grid.append(card(p)));
function filter(c, btn) {
  filters.querySelectorAll("button").forEach(b => b.setAttribute("aria-pressed", b === btn));
  let shown = 0;
  [...grid.children].forEach(el => {
    const p = projects.find(x => x.id == el.dataset.id);
    const ok = c === "All" || p.categories.includes(c);
    el.classList.toggle("out", !ok); el.hidden = false;
    if (ok) shown++;
    setTimeout(() => { if (el.classList.contains("out")) el.hidden = true; }, 350);
  });
  let empty = $("#empty"); if (empty) empty.remove();
  if (!shown) grid.after(h("p", "muted empty", "No projects in this category yet.")).nextSibling.id = "empty";
}

/* ===== Project detail modal ===== */
const modal = $("#modal");
function openProject(id) {
  const p = projects.find(x => x.id === id), body = $("#mBody");
  const folder = p.coverImage.replace(/cover\.[a-z]+$/i, "");
  const imgs = p.images.map(f => /^(https?:|assets\/)/.test(f) ? f : folder + f);
  const rows = [["Category", p.categories.join(", ")], ["Location", info(p.location)], ["Year", info(p.year)], ["Area", info(p.area)]];
  if (p.commercialTypes) rows.push(["Types", p.commercialTypes.join(", ")]);
  body.innerHTML = `<header class="mhead"><small>${p.categories.join(" / ")}</small><h2 id="mTitle">${p.title}</h2></header>
    <dl class="facts">${rows.map(r => `<div><dt>${r[0]}</dt><dd>${r[1]}</dd></div>`).join("")}</dl>
    <div class="mcols"><div><h3>Design Concept</h3><p>${info(p.concept)}</p></div><div><h3>Description</h3><p>${info(p.description)}</p></div>
    <div><h3>Software Used</h3><p>${p.software.length ? p.software.join(", ") : TBA}</p></div></div>
    <h3>Gallery</h3><div class="gal"></div>
    <div class="actions"><a class="btn solid" href="#inquiry" id="mInq">INQUIRE FOR A SIMILAR PROJECT</a></div>`;
  const gal = $(".gal", body);
  const items = imgs.map((s, i) => ({ src: s, alt: `${p.title} - image ${i + 1}` }));
  items.forEach((it, i) => { const b = h("button", "gitem g" + (i % 4)); b.type = "button"; b.setAttribute("aria-label", "Open " + it.alt); b.append(makeImg(it.src, it.alt)); b.addEventListener("click", () => Lightbox.open(items, i)); gal.append(b); });
  $("#mInq", body).addEventListener("click", () => { modal.close(); const t = $("select[name=type]"); const m = p.categories.includes("Commercial") ? "Commercial" : p.categories.includes("Kitchen") ? "Kitchen" : p.categories.includes("Residential") || p.categories.includes("Farmhouse") ? "Residential" : ""; if (m) t.value = m; $("textarea[name=req]").value = `I'd like a design similar to: ${p.title}`; });
  modal.showModal(); document.body.classList.add("lock"); modal.scrollTop = 0;
}
$("#mClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });
modal.addEventListener("close", () => document.body.classList.remove("lock"));

/* ===== Nav, theme, scroll effects ===== */
const nav = $("#nav"), burger = $("#burger");
const setMenu = o => { nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); burger.setAttribute("aria-label", o ? "Close menu" : "Open menu"); };
burger.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
$("#menu").addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") setMenu(false); });
$("#theme").addEventListener("click", () => {
  const d = document.documentElement, next = (d.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")) === "dark" ? "light" : "dark";
  d.dataset.theme = next; try { localStorage.setItem("rk-theme", next); } catch (e) {}
});
const par = $("#heroImg .par"), reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
let tick = false;
addEventListener("scroll", () => {
  if (tick) return; tick = true;
  requestAnimationFrame(() => { nav.classList.toggle("small", scrollY > 60); if (!reduce && scrollY < innerHeight) par.style.transform = `translateY(${scrollY * .08}px) scale(1.08)`; tick = false; });
}, { passive: true });
const links = [...document.querySelectorAll("#menu a[href^='#']:not(.menu-cta)")];
const secs = links.map(a => $(a.getAttribute("href")));
new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" }).observe && secs.forEach(s => s && new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" }).observe(s));
const rvObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); rvObs.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".rv").forEach((el, i) => { el.style.setProperty("--d", (i % 4) * 70 + "ms"); rvObs.observe(el); });

/* ===== Inquiry form ===== */
const form = $("#form");
function inquiryText() {
  const f = Object.fromEntries(new FormData(form)), v = x => (x && x.trim()) || "-";
  return `New Interior Design Inquiry\n\nName: ${v(f.name)}\nPhone: ${v(f.phone)}\nEmail: ${v(f.email)}\nProject Type: ${v(f.type)}\nLocation: ${v(f.location)}\nApproximate Area: ${v(f.area)}\nBudget: ${v(f.budget)}\nPreferred Style: ${v(f.style)}\nTimeline: ${v(f.timeline)}\nRequirements: ${v(f.req)}`;
}
function valid() {
  const e = $("#formErr"); e.textContent = "";
  if (!form.name.value.trim() || !form.phone.value.trim()) { e.textContent = "Please enter your full name and phone number."; (form.name.value.trim() ? form.phone : form.name).focus(); return false; }
  return true;
}
form.addEventListener("submit", e => { e.preventDefault(); if (valid()) open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(inquiryText())}`, "_blank", "noopener"); });
$("#mailBtn").addEventListener("click", () => { if (valid()) location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("New Interior Design Inquiry")}&body=${encodeURIComponent(inquiryText())}`; });
