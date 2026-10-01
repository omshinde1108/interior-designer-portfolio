/* Image helper with graceful placeholder + fullscreen lightbox */
function makeImg(src, alt, eager) {
  const wrap = document.createElement("div");
  wrap.className = "ph-wrap";
  const img = new Image();
  img.alt = alt; img.src = src;
  if (!eager) img.loading = "lazy";
  img.decoding = "async";
  img.addEventListener("error", () => { img.remove(); wrap.classList.add("ph"); wrap.setAttribute("role", "img"); wrap.setAttribute("aria-label", alt + " (image to be added)"); });
  wrap.appendChild(img);
  return wrap;
}
// Mark frames whose static <img> failed (hero / profile)
document.querySelectorAll("figure.frame img").forEach(img => {
  const fail = () => img.closest("figure").classList.add("ph");
  if (img.complete && img.naturalWidth === 0) fail();
  img.addEventListener("error", fail);
});

const Lightbox = (() => {
  const lb = document.getElementById("lb"), img = document.getElementById("lbImg"),
        ph = document.getElementById("lbPh"), count = document.getElementById("lbCount");
  let list = [], i = 0, opener = null;
  function show() {
    const it = list[i];
    ph.hidden = true; img.hidden = false; img.alt = it.alt; img.src = it.src;
    img.onerror = () => { img.hidden = true; ph.hidden = false; };
    count.textContent = (i + 1) + " / " + list.length;
  }
  function open(items, index) { list = items; i = index; opener = document.activeElement; lb.hidden = false; document.body.classList.add("lock"); show(); lb.querySelector(".close").focus(); }
  function close() { lb.hidden = true; document.body.classList.toggle("lock", document.getElementById("modal").open); if (opener) opener.focus(); }
  const step = d => { i = (i + d + list.length) % list.length; show(); };
  lb.addEventListener("click", e => {
    const a = e.target.dataset.a;
    if (a === "close" || e.target === lb || e.target.classList.contains("lb-stage")) close();
    if (a === "prev") step(-1); if (a === "next") step(1);
  });
  document.addEventListener("keydown", e => {
    if (lb.hidden) return;
    if (e.key === "Escape") { e.stopPropagation(); close(); }
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  }, true);
  let sx = 0; lb.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
  lb.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) step(d > 0 ? -1 : 1); });
  return { open };
})();
