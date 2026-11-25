import {
  BENCHMARKS,
  COMPARISONS,
  GALLERY,
  GAMES,
  SITE_META,
  SUBSYSTEMS,
  TIMELINE
} from "./data/status.js";

const state = {
  compareIndex: 0,
  split: 50,
  globalClassic: false,
  subsystemFilter: "all",
  galleryFilter: "all",
  lastFocused: null
};

const els = {
  f1Toggle: document.getElementById("f1-toggle"),
  f1Label: document.getElementById("f1-label"),
  toast: document.getElementById("hud-toast"),
  metaVersion: document.getElementById("meta-version"),
  metaBinary: document.getElementById("meta-binary"),
  metaUpdated: document.getElementById("meta-updated"),
  compareTabs: document.getElementById("compare-tabs"),
  compareViewport: document.getElementById("compare-viewport"),
  compareClassic: document.getElementById("compare-classic"),
  compareEnhanced: document.getElementById("compare-enhanced"),
  compareSlider: document.getElementById("compare-slider"),
  compareTitle: document.getElementById("compare-title"),
  compareDesc: document.getElementById("compare-desc"),
  compareStats: document.getElementById("compare-stats"),
  v7SwarmStrip: document.getElementById("v7-swarm-strip"),
  benchGrid: document.getElementById("bench-grid"),
  gamesGrid: document.getElementById("games-grid"),
  subsystemFilters: document.getElementById("subsystem-filters"),
  subsystemGrid: document.getElementById("subsystem-grid"),
  timelineGrid: document.getElementById("timeline-grid"),
  galleryFilters: document.getElementById("gallery-filters"),
  galleryGrid: document.getElementById("gallery-grid"),
  lightbox: document.getElementById("lightbox"),
  lightboxTitle: document.getElementById("lightbox-title"),
  lightboxMeta: document.getElementById("lightbox-meta"),
  lightboxImg: document.getElementById("lightbox-img"),
  lightboxClose: document.getElementById("lightbox-close")
};

let toastTimer = null;

function showToast(text) {
  els.toast.textContent = text;
  els.toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("visible"), 2200);
}

function setSplit(pct) {
  const clamped = Math.max(0, Math.min(100, Math.round(pct)));
  state.split = clamped;
  els.compareViewport.style.setProperty("--split", `${clamped}%`);
  els.compareSlider.value = String(clamped);
}

function toggleGlobalF1() {
  state.globalClassic = !state.globalClassic;
  document.body.classList.toggle("mode-classic", state.globalClassic);
  els.f1Toggle.setAttribute("aria-pressed", String(state.globalClassic));
  els.f1Label.textContent = state.globalClassic ? "CLASSIC (RETAIL)" : "ENHANCED + RT";
  setSplit(state.globalClassic ? 100 : 0);
  showToast(
    state.globalClassic
      ? "[F1] RENDER MODE: CLASSIC (100% ORIGINAL RETAIL)"
      : "[F1] RENDER MODE: ENHANCED + HARDWARE RT"
  );
}

function renderMeta() {
  els.metaVersion.textContent = SITE_META.version;
  els.metaBinary.textContent = `${SITE_META.binarySize} (sha ${SITE_META.binarySha})`;
  els.metaUpdated.textContent = SITE_META.updatedAt;

  els.v7SwarmStrip.innerHTML = SITE_META.v7Status
    .map(
      (lane) => `
      <div class="swarm-card">
        <span class="pulse-dot" aria-hidden="true"></span>
        <div>
          <h3>LIVE BUILD LANE: ${lane.label}</h3>
          <p>${lane.detail}</p>
        </div>
      </div>`
    )
    .join("");
}

function renderCompareTabs() {
  els.compareTabs.innerHTML = COMPARISONS.map(
    (item, idx) => `
      <button
        type="button"
        role="tab"
        class="tab-btn"
        aria-selected="${idx === state.compareIndex}"
        data-index="${idx}"
      >${item.game} · ${item.tag.split("·")[1].trim()}</button>`
  ).join("");
}

function selectCompare(index) {
  state.compareIndex = index;
  const item = COMPARISONS[index];
  els.compareClassic.src = item.classic;
  els.compareClassic.alt = item.classicAlt;
  els.compareEnhanced.src = item.enhanced;
  els.compareEnhanced.alt = item.enhancedAlt;
  els.compareTitle.textContent = `${item.game} — ${item.tag}`;
  els.compareDesc.textContent = item.summary;
  els.compareStats.innerHTML = item.stats
    .map((s) => `<span class="chip">${s}</span>`)
    .join("");

  els.compareTabs.querySelectorAll(".tab-btn").forEach((btn, i) => {
    btn.setAttribute("aria-selected", String(i === index));
  });
}

function renderBenchmarks() {
  const maxMs = 16.67; // 60 FPS frame budget reference
  els.benchGrid.innerHTML = BENCHMARKS.map((b) => {
    const pct = Math.min(100, Math.max(6, (b.ms / maxMs) * 100));
    return `
      <div class="bench-row">
        <div>
          <div class="bench-title">${b.game}</div>
          <div class="bench-scene">${b.scene}</div>
        </div>
        <div class="bench-bar-wrap">
          <div class="bench-track" role="progressbar" aria-valuenow="${b.ms}" aria-valuemin="0" aria-valuemax="${maxMs}" aria-label="${b.game} steady frame time ${b.ms} milliseconds">
            <div class="bench-fill" style="width:${pct.toFixed(1)}%; background:${b.accent}"></div>
          </div>
          <div class="bench-note">${b.note}</div>
        </div>
        <div class="bench-numbers">
          <div class="bench-ms">${b.ms.toFixed(2)} ms <span class="bench-scene">(~${b.fps} FPS)</span></div>
          <div class="bench-tris">${b.rtTris.toLocaleString()} RT tris · ${b.skipped} skipped</div>
        </div>
      </div>`;
  }).join("");
}

function renderGames() {
  els.gamesGrid.innerHTML = GAMES.map((g, idx) => {
    const wideClass = idx === GAMES.length - 1 ? "game-card game-card-wide" : "game-card";
    const metersHtml = g.metrics
      .map(
        (m) => `
        <div class="meter-item">
          <div class="meter-top">
            <span class="meter-label">${m.label}</span>
            <span class="meter-pct">${m.pct}%</span>
          </div>
          <div class="meter-track">
            <div class="meter-fill" style="width:${m.pct}%; background:${g.accent}"></div>
          </div>
        </div>`
      )
      .join("");

    return `
      <article class="${wideClass}">
        <div class="game-media">
          <img src="${g.heroShot}" alt="${g.name} rendered in Forever Platform Enhanced mode" loading="lazy" />
          <span class="game-status-badge">${g.status}</span>
        </div>
        <div class="game-body">
          <div class="game-head">
            <div>
              <h3>${g.name}</h3>
              <div class="game-era">${g.era} · ${g.format}</div>
            </div>
          </div>
          <div class="meters">${metersHtml}</div>
          <div class="bullet-cols">
            <div class="bullet-box">
              <h4>Working Today</h4>
              <ul>${g.done.map((d) => `<li>${d}</li>`).join("")}</ul>
            </div>
            <div class="bullet-box">
              <h4>Next Up</h4>
              <ul>${g.next.map((n) => `<li>${n}</li>`).join("")}</ul>
            </div>
          </div>
        </div>
      </article>`;
  }).join("");
}

function renderSubsystems() {
  const categories = [
    ["all", "All"],
    ["core", "Core"],
    ["graphics", "Graphics & RT"],
    ["assets", "2026 Assets"],
    ["gameplay", "Gameplay & AI"],
    ["live", "Live Servers"]
  ];

  els.subsystemFilters.innerHTML = categories
    .map(
      ([key, label]) => `
      <button
        type="button"
        class="pill-btn"
        data-cat="${key}"
        aria-pressed="${state.subsystemFilter === key}"
      >${label}</button>`
    )
    .join("");

  const visible =
    state.subsystemFilter === "all"
      ? SUBSYSTEMS
      : SUBSYSTEMS.filter((s) => s.category === state.subsystemFilter);

  els.subsystemGrid.innerHTML = visible
    .map((s) => {
      const tagClass = s.status.startsWith("Shipped")
        ? "shipped"
        : s.status.startsWith("Building") || s.status.startsWith("Upgrading")
          ? "building"
          : "";
      const barColor =
        tagClass === "shipped"
          ? "var(--accent-green)"
          : tagClass === "building"
            ? "var(--accent-amber)"
            : "var(--border-strong)";
      return `
        <div class="sub-card">
          <div class="sub-top">
            <span class="sub-name">${s.name}</span>
            <span class="status-tag ${tagClass}">${s.status}</span>
          </div>
          <div class="meter-track" role="progressbar" aria-valuenow="${s.score}" aria-valuemin="0" aria-valuemax="100" aria-label="${s.name} ${s.score} percent">
            <div class="meter-fill" style="width:${s.score}%; background:${barColor}"></div>
          </div>
          <p class="sub-note">${s.note}</p>
        </div>`;
    })
    .join("");
}

function renderTimeline() {
  els.timelineGrid.innerHTML = TIMELINE.map(
    (t) => `
      <article class="tl-item ${t.state}">
        <div class="tl-meta">
          <span class="tl-ver">${t.ver}</span>
          <span>${t.date}</span>
        </div>
        <h3>${t.title}</h3>
        <p>${t.summary}</p>
      </article>`
  ).join("");
}

function renderGallery() {
  const filters = [
    ["all", "All Captures"],
    ["ps1", "PlanetSide 1"],
    ["enb", "Earth & Beyond"],
    ["war", "Warhammer Online"],
    ["mh", "Marvel Heroes"]
  ];

  els.galleryFilters.innerHTML = filters
    .map(
      ([key, label]) => `
      <button
        type="button"
        class="pill-btn"
        data-game="${key}"
        aria-pressed="${state.galleryFilter === key}"
      >${label}</button>`
    )
    .join("");

  const items =
    state.galleryFilter === "all"
      ? GALLERY
      : GALLERY.filter((g) => g.game === state.galleryFilter);

  els.galleryGrid.innerHTML = items
    .map(
      (shot) => `
      <button
        type="button"
        class="shot-card"
        data-src="${shot.src}"
        data-title="${shot.title}"
        data-meta="${shot.meta}"
      >
        <img src="${shot.src}" alt="${shot.title}" loading="lazy" />
        <span class="shot-meta">
          <span class="shot-title">${shot.title}</span>
          <span class="shot-sub">${shot.meta}</span>
        </span>
      </button>`
    )
    .join("");
}

function openLightbox(src, title, meta) {
  state.lastFocused = document.activeElement;
  els.lightboxImg.src = src;
  els.lightboxImg.alt = title;
  els.lightboxTitle.textContent = title;
  els.lightboxMeta.textContent = meta;
  els.lightbox.hidden = false;
  els.lightboxClose.focus();
}

function closeLightbox() {
  els.lightbox.hidden = true;
  if (state.lastFocused && typeof state.lastFocused.focus === "function") {
    state.lastFocused.focus();
  }
}

function bindEvents() {
  els.f1Toggle.addEventListener("click", toggleGlobalF1);

  window.addEventListener("keydown", (e) => {
    if (e.key === "F1") {
      e.preventDefault();
      toggleGlobalF1();
    } else if (e.key === "Escape" && !els.lightbox.hidden) {
      closeLightbox();
    }
  });

  els.compareTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    selectCompare(Number(btn.dataset.index));
    if (state.split === 0 || state.split === 100) {
      setSplit(50);
    }
  });

  els.compareSlider.addEventListener("input", (e) => {
    setSplit(Number(e.target.value));
  });

  els.subsystemFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-btn");
    if (!btn) return;
    state.subsystemFilter = btn.dataset.cat;
    renderSubsystems();
  });

  els.galleryFilters.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill-btn");
    if (!btn) return;
    state.galleryFilter = btn.dataset.game;
    renderGallery();
  });

  els.galleryGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".shot-card");
    if (!card) return;
    openLightbox(card.dataset.src, card.dataset.title, card.dataset.meta);
  });

  els.lightboxClose.addEventListener("click", closeLightbox);
  els.lightbox.addEventListener("click", (e) => {
    if (e.target === els.lightbox) closeLightbox();
  });
}

renderMeta();
renderCompareTabs();
selectCompare(0);
setSplit(50);
renderBenchmarks();
renderGames();
renderSubsystems();
renderTimeline();
renderGallery();
bindEvents();
