(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  $("#year").textContent = new Date().getFullYear();

  /* ---------- Split hero letters ---------- */
  $$("[data-split]").forEach((el) => {
    const text = el.textContent;
    el.textContent = "";
    [...text].forEach((c, i) => {
      const s = document.createElement("span");
      s.className = "ch";
      s.textContent = c === " " ? " " : c;
      s.style.transitionDelay = `${i * 45}ms`;
      el.appendChild(s);
    });
  });

  /* ---------- Preloader ---------- */
  document.body.classList.add("loading");
  const loader = $("#loader");
  let pct = 0;
  const finishLoad = () => {
    loader.classList.add("done");
    document.body.classList.remove("loading");
    setTimeout(() => {
      $$("[data-split]").forEach((el, i) => setTimeout(() => el.classList.add("in"), i * 250));
      $$(".hero .reveal").forEach((el, i) => setTimeout(() => el.classList.add("in"), 300 + i * 150));
      startTyping();
    }, 350);
    setTimeout(() => loader.remove(), 1200);
  };
  if (reduced) {
    finishLoad();
  } else {
    const tick = () => {
      pct = Math.min(100, pct + Math.ceil(Math.random() * 9));
      $("#loaderCount").textContent = pct;
      $("#loaderBar").style.width = pct + "%";
      pct < 100 ? setTimeout(tick, 28) : setTimeout(finishLoad, 250);
    };
    tick();
  }

  /* ---------- Typing roles ---------- */
  const roles = ["Senior Software Engineer.", "Generative AI & LLM builder.", "full stack web developer.", "UWP developer.", "space & astronomy nerd."];
  let typingStarted = false;
  function startTyping() {
    if (typingStarted) return;
    typingStarted = true;
    const el = $("#typed");
    if (reduced) { el.textContent = "Senior Software Engineer."; return; }
    let r = 0, i = 0, deleting = false;
    el.textContent = "";
    const loop = () => {
      const word = roles[r];
      el.textContent = word.slice(0, i);
      if (!deleting && i < word.length) { i++; setTimeout(loop, 70); }
      else if (!deleting) { deleting = true; setTimeout(loop, 1600); }
      else if (i > 0) { i--; setTimeout(loop, 35); }
      else { deleting = false; r = (r + 1) % roles.length; setTimeout(loop, 300); }
    };
    loop();
  }

  /* ---------- Background canvas: constellation + space mode ---------- */
  const canvas = $("#bgCanvas");
  const ctx = canvas.getContext("2d");
  let W, H, particles = [], stars = [], meteors = [], mouse = { x: -9999, y: -9999 };
  let space = false;
  const cssRGB = (name) => {
    const hex = getComputedStyle(document.documentElement).getPropertyValue(name).trim().replace("#", "");
    const n = parseInt(hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex, 16);
    return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
  };
  let rgb = cssRGB("--accent"), textRgb = cssRGB("--text");
  const refreshColors = () => { rgb = cssRGB("--accent"); textRgb = cssRGB("--text"); if (reduced || !heroVisible) draw(); };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.offsetWidth; H = canvas.offsetHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(110, Math.floor((W * H) / 13000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.8 + 0.6,
    }));
    const starCount = Math.min(320, Math.floor((W * H) / 5000));
    stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() < 0.08 ? Math.random() * 1.2 + 1.3 : Math.random() * 1.1 + 0.3,
      tw: Math.random() * 0.03 + 0.008, ph: Math.random() * Math.PI * 2,
      hue: Math.random() < 0.15 ? "190, 210, 255" : Math.random() < 0.08 ? "255, 214, 170" : "255, 255, 255",
      dx: (Math.random() - 0.5) * 0.05,
    }));
  }

  let heroVisible = true, t = 0;
  function drawNetwork() {
    for (const p of particles) {
      if (!reduced) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 140 && d > 0) { p.x += dx / d * 1.6; p.y += dy / d * 1.6; }
      }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb}, .8)`; ctx.fill();
    }
    ctx.lineWidth = 0.7;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.strokeStyle = `rgba(${rgb}, ${(1 - d / 120) * 0.35})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const a = particles[i], dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < 180) {
        ctx.strokeStyle = `rgba(${textRgb}, ${(1 - dm / 180) * 0.4})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
  }

  function drawSpace() {
    // stars
    const near = [];
    for (const s of stars) {
      if (!reduced) { s.x += s.dx; if (s.x < 0) s.x = W; if (s.x > W) s.x = 0; }
      const a = reduced ? 0.8 : 0.45 + 0.55 * Math.abs(Math.sin(t * s.tw + s.ph));
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.hue}, ${a})`; ctx.fill();
      if (s.r > 1.3) { // soft glow on the bright ones
        ctx.beginPath(); ctx.arc(s.x, s.y, s.r * 3.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.hue}, ${a * 0.08})`; ctx.fill();
      }
      if (Math.hypot(s.x - mouse.x, s.y - mouse.y) < 170 && s.r > 0.7) near.push(s);
    }
    // constellations around the cursor
    ctx.lineWidth = 0.8;
    for (let i = 0; i < near.length; i++) {
      for (let j = i + 1; j < near.length; j++) {
        const a = near[i], b = near[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 85) {
          ctx.strokeStyle = `rgba(${rgb}, ${(1 - d / 85) * 0.7})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    // shooting stars
    if (!reduced && Math.random() < 0.012 && meteors.length < 3) {
      const ang = Math.PI / 5 + Math.random() * 0.3;
      meteors.push({ x: Math.random() * W * 0.8 + W * 0.1, y: Math.random() * H * 0.35, vx: Math.cos(ang) * 11, vy: Math.sin(ang) * 11, life: 1 });
    }
    meteors = meteors.filter((m) => m.life > 0);
    for (const m of meteors) {
      const g = ctx.createLinearGradient(m.x, m.y, m.x - m.vx * 9, m.y - m.vy * 9);
      g.addColorStop(0, `rgba(255,255,255,${m.life})`);
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.strokeStyle = g; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(m.x - m.vx * 9, m.y - m.vy * 9); ctx.stroke();
      m.x += m.vx; m.y += m.vy; m.life -= 0.018;
    }
  }

  function draw() {
    t++;
    ctx.clearRect(0, 0, W, H);
    space ? drawSpace() : drawNetwork();
    if (heroVisible && !reduced) requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener("resize", () => { resize(); if (reduced) draw(); });
  if (reduced) { heroVisible = false; draw(); }
  else {
    requestAnimationFrame(draw);
    new IntersectionObserver(([e]) => {
      const was = heroVisible; heroVisible = e.isIntersecting;
      if (heroVisible && !was) requestAnimationFrame(draw);
    }).observe($(".hero"));
  }
  $(".hero").addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  $(".hero").addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });

  /* ---------- Toast ---------- */
  const toast = (msg) => {
    let el = $("#toast");
    if (!el) { el = document.createElement("div"); el.id = "toast"; el.className = "toast"; el.setAttribute("role", "status"); document.body.appendChild(el); }
    el.textContent = msg;
    el.classList.remove("show"); void el.offsetWidth; el.classList.add("show");
    clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("show"), 2600);
  };

  /* ---------- Space mode ---------- */
  const setSpace = (on, quiet) => {
    space = on;
    document.documentElement.classList.toggle("space", on);
    meteors = [];
    if (!heroVisible || reduced) draw();
    if (!quiet) toast(on ? "🔭 Space mode on. Move your cursor across the hero to draw constellations." : "Space mode off");
  };

  /* ---------- Theme (light / dark) ---------- */
  const themeBtn = $("#themeBtn");
  const metaTheme = $('meta[name="theme-color"]');
  const syncThemeUI = () => {
    const light = document.documentElement.dataset.theme === "light";
    themeBtn.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
    if (metaTheme) metaTheme.content = light ? "#f5f3ef" : "#0b0b0f";
  };
  const setTheme = (theme, originEl) => {
    const apply = () => {
      document.documentElement.dataset.theme = theme;
      try { localStorage.setItem("theme", theme); } catch (_) {}
      syncThemeUI(); refreshColors();
    };
    if (!document.startViewTransition || reduced) return apply();
    const r = (originEl || themeBtn).getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const end = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    document.startViewTransition(apply).ready.then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${end}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(.22,1,.36,1)", pseudoElement: "::view-transition-new(root)" }
      );
    });
  };
  syncThemeUI();
  themeBtn.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light"));

  /* ---------- Custom cursor ---------- */
  if (finePointer && !reduced) {
    const c = $("#cursor"), dot = $("#cursorDot");
    let cx = 0, cy = 0, tx = 0, ty = 0;
    window.addEventListener("pointermove", (e) => {
      tx = e.clientX; ty = e.clientY;
      dot.style.transform = `translate(${tx}px, ${ty}px)`;
    });
    (function follow() {
      cx += (tx - cx) * 0.18; cy += (ty - cy) * 0.18;
      c.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(follow);
    })();
    // delegated, so cards added later (GitHub repos) also get the hover state
    document.addEventListener("pointerover", (e) => {
      c.classList.toggle("is-hover", !!e.target.closest("a, button, .card, .repo, .read"));
    });
  }

  /* ---------- Magnetic buttons ---------- */
  if (finePointer && !reduced) {
    $$(".magnetic").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
      });
      el.addEventListener("pointerleave", () => {
        el.style.transition = "transform .6s cubic-bezier(.22,1,.36,1)";
        el.style.transform = "";
        setTimeout(() => (el.style.transition = ""), 600);
      });
    });
  }

  /* ---------- 3D tilt + spotlight ---------- */
  if (finePointer && !reduced) {
    $$(".tilt").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        el.style.transform = `rotateY(${(px - 0.5) * 14}deg) rotateX(${(0.5 - py) * 14}deg)`;
        el.style.setProperty("--mx", `${px * 100}%`);
        el.style.setProperty("--my", `${py * 100}%`);
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      io.unobserve(e.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => { if (!el.closest(".hero")) io.observe(el); });
  $$(".skillset li").forEach((li, i) => (li.style.transitionDelay = `${i * 35}ms`));
  $$(".card").forEach((el, i) => { el.style.transitionDelay = `${(i % 3) * 110}ms`; io.observe(el); });

  /* ---------- Count-up stats ---------- */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count, start = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - start) / 1400);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      countIO.unobserve(el);
    });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach((el) => countIO.observe(el));

  /* ---------- Scroll: progress, parallax, active nav ---------- */
  const progress = $("#progress");
  const ghosts = $$("[data-parallax]");
  const navLinks = $$("[data-nav]");
  let ticking = false;
  function onScroll() {
    const st = window.scrollY, max = document.documentElement.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? st / max : 0})`;
    if (!reduced) {
      ghosts.forEach((g) => {
        const r = g.parentElement.getBoundingClientRect();
        g.style.transform = `translateX(${-r.top * +g.dataset.parallax}px)`;
      });
    }
    const tl = $("#timeline"), fill = $("#timelineFill");
    if (tl) {
      const r = tl.getBoundingClientRect();
      const k = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
      fill.style.height = `${k * 100}%`;
    }
    let current = "home";
    $$("[data-section]").forEach((s) => { if (s.getBoundingClientRect().top < innerHeight * 0.45) current = s.id; });
    $$(".section").forEach((sec) => {
      const r = sec.getBoundingClientRect();
      sec.classList.toggle("is-current", r.top < innerHeight * 0.5 && r.bottom > innerHeight * 0.5);
    });
    navLinks.forEach((a) => {
      const on = a.dataset.nav === current;
      a.classList.toggle("is-active", on);
      on ? a.setAttribute("aria-current", "location") : a.removeAttribute("aria-current");
    });
    ticking = false;
  }
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  /* ---------- Project filters ---------- */
  const filters = $$(".filter"), pill = $(".filter__pill");
  const movePill = (btn) => {
    pill.style.width = btn.offsetWidth + "px";
    pill.style.transform = `translateX(${btn.offsetLeft}px)`;
  };
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-selected", b === btn); });
      movePill(btn);
      const f = btn.dataset.filter;
      $$(".card").forEach((card, i) => {
        const show = f === "all" || card.dataset.cat === f;
        card.classList.remove("in");
        card.classList.toggle("hide", !show);
        if (show) setTimeout(() => card.classList.add("in"), 40 + i * 60);
      });
    });
  });
  const activeFilter = () => movePill($(".filter.is-active"));
  window.addEventListener("load", activeFilter);
  window.addEventListener("resize", activeFilter);
  document.fonts && document.fonts.ready.then(activeFilter);

  /* ---------- GitHub (live) ---------- */
  const gh = $("#gh");
  if (gh) {
    const user = gh.dataset.user;
    const LANG = { JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5", "C#": "#178600", HTML: "#e34c26",
      CSS: "#563d7c", Java: "#b07219", Vue: "#41b883", "Jupyter Notebook": "#DA5B0B", Shell: "#89e051" };
    const CACHE = "gh-cache-v1";
    const getJSON = (url) => fetch(url).then((r) => { if (!r.ok) throw new Error(r.status); return r.json(); });

    const load = async () => {
      try {
        const c = JSON.parse(sessionStorage.getItem(CACHE));
        if (c && Date.now() - c.t < 3600e3) return c.d;
      } catch (_) {}
      const [u, repos, contrib] = await Promise.allSettled([
        getJSON(`https://api.github.com/users/${user}`),
        getJSON(`https://api.github.com/users/${user}/repos?sort=pushed&per_page=30`),
        getJSON(`https://github-contributions-api.jogruber.de/v4/${user}?y=last`),
      ]);
      const d = { u: u.value || null, repos: repos.value || null, contrib: contrib.value || null };
      if (d.u && d.repos && d.contrib) { try { sessionStorage.setItem(CACHE, JSON.stringify({ t: Date.now(), d })); } catch (_) {} }
      return d;
    };

    const visible = new Promise((res) => {
      const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { o.disconnect(); res(); } }, { threshold: 0.1 });
      o.observe(gh);
    });

    const countTo = (el, n) => {
      if (reduced) { el.textContent = n.toLocaleString(); return; }
      const start = performance.now();
      const step = (t) => {
        const k = Math.min(1, (t - start) / 1500);
        el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))).toLocaleString();
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const ago = (iso) => {
      const days = Math.floor((Date.now() - new Date(iso)) / 864e5);
      if (days < 1) return "today";
      if (days < 30) return `${days}d ago`;
      if (days < 365) return `${Math.floor(days / 30)}mo ago`;
      const y = Math.floor(days / 365);
      return `${y}y ago`;
    };
    const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
    const setStat = (key, n) => { const el = $(`[data-gh="${key}"]`, gh); if (el && Number.isFinite(n)) countTo(el, n); };

    Promise.all([load(), visible]).then(([{ u, repos, contrib }]) => {
      // stats
      if (u) {
        setStat("repos", u.public_repos);
        setStat("years", Math.floor((Date.now() - new Date(u.created_at)) / (365.25 * 864e5)));
      }
      if (contrib) {
        setStat("contrib", contrib.total?.lastYear ?? contrib.contributions.reduce((a, d) => a + d.count, 0));

        // heatmap
        const cells = $("#ghCells");
        const days = contrib.contributions;
        const pad = new Date(days[0].date + "T00:00:00").getDay();
        const fmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" });
        let html = "";
        for (let i = 0; i < pad; i++) html += '<i style="visibility:hidden"></i>';
        days.forEach((d, i) => {
          const col = Math.floor((i + pad) / 7);
          const label = `${d.count === 0 ? "No" : d.count} contribution${d.count === 1 ? "" : "s"} on ${fmt.format(new Date(d.date + "T00:00:00"))}`;
          html += `<i data-l="${d.level}" data-tip="${label}" style="transition-delay:${col * 14}ms"></i>`;
        });
        cells.innerHTML = html;
        requestAnimationFrame(() => requestAnimationFrame(() => cells.classList.add("in")));
        const scroller = $(".gh__scroll", gh);
        // size the squares so the graph fills the card's width (scrolls on small screens)
        const cols = Math.ceil((days.length + pad) / 7);
        const fitCells = () => {
          const w = scroller.clientWidth, gap = w > 900 ? 4 : 3;
          const cell = Math.min(20, Math.max(11, (w - (cols - 1) * gap) / cols));
          cells.style.setProperty("--cell", cell + "px");
          cells.style.setProperty("--gap", gap + "px");
          scroller.scrollLeft = scroller.scrollWidth; // show most recent weeks when it scrolls
        };
        fitCells();
        window.addEventListener("resize", fitCells);

        const tip = $("#ghTip"), graph = $(".gh__graph", gh);
        cells.addEventListener("pointerover", (e) => {
          const cell = e.target.closest("i[data-tip]");
          if (!cell) return tip.classList.remove("show");
          const g = graph.getBoundingClientRect(), r = cell.getBoundingClientRect();
          tip.textContent = cell.dataset.tip;
          const half = tip.offsetWidth / 2 + 6;
          tip.style.left = `${Math.min(g.width - half, Math.max(half, r.left - g.left + r.width / 2))}px`;
          tip.style.top = `${r.top - g.top - 8}px`;
          tip.classList.add("show");
        });
        cells.addEventListener("pointerleave", () => tip.classList.remove("show"));
      } else {
        $(".gh__graph", gh).hidden = true;
      }

      // repos
      const box = $("#ghRepos");
      const list = (repos || []).filter((r) => !r.fork && !r.archived).slice(0, 6);
      if (!list.length) {
        box.hidden = true;
      } else {
        box.innerHTML = list.map((r) => `
          <a class="repo is-new" href="${esc(r.html_url)}" target="_blank" rel="noopener" style="--lang:${LANG[r.language] || "var(--muted)"}">
            <span class="repo__name"><svg viewBox="0 0 24 24"><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5zM4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/></svg>${esc(r.name)}</span>
            <span class="repo__desc">${esc(r.description || (r.language ? `A ${r.language} project.` : "A side project."))}</span>
            <span class="repo__meta mono">
              ${r.language ? `<span class="repo__lang">${esc(r.language)}</span>` : ""}
              ${r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : ""}
              <span>updated ${ago(r.pushed_at)}</span>
            </span>
          </a>`).join("");
        $$(".repo", box).forEach((el, i) => setTimeout(() => el.classList.remove("is-new"), 80 + i * 90));
      }

      if (!u && !repos && !contrib) {
        $(".gh__stats", gh).hidden = true;
        $("#ghError").hidden = false;
      }
    });
  }

  /* ---------- Copy email ---------- */
  const copyBtn = $("#copyEmail");
  if (copyBtn) {
    const toast = $(".email__toast", copyBtn);
    let resetTimer;
    const fallbackCopy = (text) => {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", ""); ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (_) {}
      ta.remove();
      return ok;
    };
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      let ok = false;
      try { await navigator.clipboard.writeText(email); ok = true; } catch (_) { ok = fallbackCopy(email); }
      toast.textContent = ok ? "Copied to clipboard!" : "Press Ctrl/Cmd+C to copy";
      if (!ok) {
        const range = document.createRange(); range.selectNodeContents($(".email__addr", copyBtn));
        const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
      }
      copyBtn.classList.add("copied");
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => copyBtn.classList.remove("copied"), 2200);
    });
  }

  /* ---------- Accent colour switcher ---------- */
  const palettes = [
    ["#f25002", "#ffb347"],
    ["#7c5cff", "#3ee0cf"],
    ["#00c27a", "#c6ff5e"],
    ["#ff2e7e", "#ffa8c5"],
    ["#1e9bff", "#7ee8fa"],
  ];
  let pi = 0;
  try { pi = +(localStorage.getItem("accent") || 0) % palettes.length; } catch (_) {}
  const applyPalette = () => {
    const [a, b] = palettes[pi];
    document.documentElement.style.setProperty("--accent", a);
    document.documentElement.style.setProperty("--accent-2", b);
    refreshColors();
  };
  applyPalette();
  $("#accentBtn").addEventListener("click", () => {
    pi = (pi + 1) % palettes.length;
    try { localStorage.setItem("accent", pi); } catch (_) {}
    applyPalette();
  });

  /* ---------- Contact card: vCard + QR ---------- */
  const CONTACT = {
    first: "Tusshar Raj", last: "Gupta", full: "Tusshar Raj Gupta",
    org: "CYFIRMA", title: "Senior Software Engineer",
    email: "tussharrajgupta@outlook.com", site: "https://www.tusharrajgupta.in",
    linkedin: "https://www.linkedin.com/in/tushar-raj-gupta-8b944213a/",
    github: "https://github.com/TusharRaj13",
    xbox: "https://www.xbox.com/en-IN/play/user/FadelessFiber98",
    resume: "Tushar-Raj-Gupta-Resume.pdf",
  };
  const vcardText = (photoB64) => {
    const lines = [
      "BEGIN:VCARD", "VERSION:3.0",
      `N:${CONTACT.last};${CONTACT.first};;;`, `FN:${CONTACT.full}`,
      `ORG:${CONTACT.org}`, `TITLE:${CONTACT.title}`,
      `EMAIL;TYPE=INTERNET,PREF:${CONTACT.email}`,
      `URL:${CONTACT.site}`,
      `X-SOCIALPROFILE;TYPE=linkedin:${CONTACT.linkedin}`,
      `X-SOCIALPROFILE;TYPE=github:${CONTACT.github}`,
      "NOTE:Full stack\\, Generative AI and UWP developer.",
    ];
    if (photoB64) lines.push(("PHOTO;ENCODING=b;TYPE=JPEG:" + photoB64).replace(/(.{74})/g, "$1\r\n "));
    lines.push("END:VCARD");
    return lines.join("\r\n");
  };

  const bcard = $("#bcard");
  if (bcard) {
    bcard.addEventListener("click", () => {
      const f = bcard.classList.toggle("is-flipped");
      bcard.setAttribute("aria-pressed", f);
    });
    const renderQr = () => {
      const box = $("#contactQr");
      if (!box || box.childElementCount) return;
      if (typeof qrcode !== "function") {
        box.innerHTML = '<span style="font-size:12px;color:#888;text-align:center;padding:8px">QR unavailable. Use “Save contact”.</span>';
        return;
      }
      const qr = qrcode(0, "M");
      qr.addData(vcardText());
      qr.make();
      box.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
    };
    if (document.readyState === "complete") renderQr(); else window.addEventListener("load", renderQr);
  }

  const downloadVcf = async () => {
    let photo = "";
    try {
      const blob = await fetch("tushar-raj-gupta.jpg").then((r) => (r.ok ? r.blob() : Promise.reject()));
      photo = await new Promise((res) => { const fr = new FileReader(); fr.onload = () => res(String(fr.result).split(",")[1] || ""); fr.readAsDataURL(blob); });
    } catch (_) {}
    const url = URL.createObjectURL(new Blob([vcardText(photo)], { type: "text/vcard;charset=utf-8" }));
    const a = Object.assign(document.createElement("a"), { href: url, download: "Tusshar-Raj-Gupta.vcf" });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
    toast("📇 Contact card downloaded");
  };
  const vcfBtn = $("#vcfBtn");
  if (vcfBtn) vcfBtn.addEventListener("click", downloadVcf);

  /* ---------- Hidden terminal ---------- */
  const term = $("#term"), termBody = $("#termBody"), termIn = $("#termIn"), termForm = $("#termForm");
  if (term) {
    let lastFocus = null, greeted = false;
    const hist = []; let hi = 0;
    const esc = (s) => String(s).replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
    const setInert = (on) => [...document.body.children].forEach((el) => {
      if (el === term || el.tagName === "SCRIPT") return;
      on ? el.setAttribute("inert", "") : el.removeAttribute("inert");
    });
    const link = (href, label) => `<a href="${esc(href)}" target="_blank" rel="noopener">${esc(label || href)}</a>`;
    const print = (html, cls = "") => {
      const d = document.createElement("div");
      d.className = "ln " + cls; d.innerHTML = html;
      termBody.appendChild(d); termBody.scrollTop = termBody.scrollHeight;
    };
    const open = (url) => window.open(url, "_blank", "noopener");
    const goto = (id) => { close(); setTimeout(() => $("#" + id)?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }), 150); };

    const SECTIONS = { home: "home", about: "about", experience: "experience", work: "experience", projects: "projects", github: "code", code: "code", beyond: "beyond", research: "beyond", xbox: "beyond", contact: "contact" };
    const FILES = {
      "about.txt": () => print("Senior Software Engineer @ CYFIRMA, building DeCYFIR's Threat Intelligence Platform\nand its Attack Surface Discovery & Intelligence pillar. Full stack, Generative AI\nand UWP developer. Loves code, space and astronomy."),
      "experience.md": () => cmds.experience(),
      "projects/": () => cmds.projects(),
      "skills.json": () => cmds.skills(),
      "resume.pdf": () => { print("Opening resume.pdf…", "ok"); open(CONTACT.resume); },
      "contact.vcf": () => { print("Downloading contact.vcf…", "ok"); downloadVcf(); },
    };

    const cmds = {
      help: () => print(
`<span class="acc">Available commands</span>
  <b>about</b>        who I am            <b>skills</b>       what I work with
  <b>experience</b>   where I've worked   <b>projects</b>     things I've built
  <b>contact</b>      how to reach me     <b>email</b>        copy my email
  <b>resume</b>       open my resume      <b>vcard</b>        save my contact
  <b>social</b>       all my links        <b>github</b> · <b>linkedin</b> · <b>xbox</b>
  <b>goto</b> &lt;section&gt; scroll to a section  (about, experience, projects, github, contact)
  <b>theme</b> [light|dark]               <b>accent</b>       cycle accent colour
  <b>space</b>        toggle space mode 🔭  <b>neofetch</b>     system info
  <b>ls</b> · <b>cat</b> &lt;file&gt; · <b>echo</b> · <b>date</b> · <b>history</b> · <b>clear</b> · <b>exit</b>
<span class="dim">Tip: Tab autocompletes, ↑/↓ browse history, Esc closes.</span>`),
      about: () => FILES["about.txt"](),
      whoami: () => print("guest. But you're talking to <span class='acc'>Tusshar Raj Gupta</span>. Type <b>about</b>."),
      skills: () => print(
`<span class="acc">AI &amp; LLMs</span>        Generative AI · LLMs · LangChain · LangGraph · Python
<span class="acc">Frontend</span>         React.js · AngularJS · JavaScript · HTML &amp; CSS · Bootstrap
<span class="acc">Backend &amp; Cloud</span>  C# · Node.js · Java · SQL · MongoDB · Microsoft Azure · Git
<span class="acc">Windows</span>          UWP · Fluent Design · MVC`),
      experience: () => print(
`<span class="acc">Apr 2025 – now</span>   Senior Software Engineer · CYFIRMA
                 › DeCYFIR Threat Intelligence Platform
                 › Attack Surface Discovery &amp; Intelligence pillar
<span class="acc">Nov 2021 – Mar 2025</span> Software Engineer · CYFIRMA
<span class="acc">Aug 2019 – Oct 2021</span> Software Developer · Xlayer Technologies
<span class="dim">Education: PG Diploma, Advanced Computing (C-DAC Noida) · B.Tech CS</span>`),
      projects: () => print(
`${link("https://github.com/TusharRaj13/pl-hackathon", "StoreAI")}                      GenAI · Ollama · SDXL   <span class="dim">hackathon 2025</span>
${link("https://github.com/TusharRaj13/buildathon_final", "AI Report Generator")}          LlamaIndex · OpenAI     <span class="dim">100x Buildathon</span>
${link("https://www.microsoft.com/store/apps/9NR9PX55K522", "Companion for Fortnite")}       UWP · C#
${link("https://www.microsoft.com/store/apps/9N0XGX7KBFNL", "Companion for Valorant")}       UWP · C#
${link("https://github.com/TusharRaj13/IndiClassroom", "IndiClassroom")}                MEAN stack
${link("https://www.microsoft.com/store/apps/9MV981LVC2RH", "Unofficial Windows Central")}   UWP · C#
${link("https://tusharraj13.github.io/Wordcamp-React-App/", "Wordcamp Calendar")}            React · Redux
${link("https://tusharraj13.github.io/HTML-Editor/", "HTML Editor")}                  React · Redux`),
      contact: () => print(`✉  ${link("mailto:" + CONTACT.email, CONTACT.email)}\n⌂  ${link(CONTACT.site, "tusharrajgupta.in")}\n<span class="dim">Type <b>email</b> to copy, <b>vcard</b> to save my contact.</span>`),
      email: async () => {
        try { await navigator.clipboard.writeText(CONTACT.email); print(`Copied ${esc(CONTACT.email)} to clipboard ✓`, "ok"); }
        catch (_) { print(`My email: ${link("mailto:" + CONTACT.email, CONTACT.email)}`); }
      },
      resume: () => FILES["resume.pdf"](),
      vcard: () => FILES["contact.vcf"](),
      social: () => print(
`github     ${link(CONTACT.github, "github.com/TusharRaj13")}
linkedin   ${link(CONTACT.linkedin, "linkedin.com/in/tushar-raj-gupta")}
twitter    ${link("https://twitter.com/TusharRajGupta", "twitter.com/TusharRajGupta")}
xbox       ${link(CONTACT.xbox, "FadelessFiber98")}
instagram  ${link("https://www.instagram.com/tusharraj13/", "instagram.com/tusharraj13")}`),
      github: () => { print("Opening GitHub…", "ok"); open(CONTACT.github); },
      linkedin: () => { print("Opening LinkedIn…", "ok"); open(CONTACT.linkedin); },
      xbox: () => { print("Opening Xbox profile… 🎮", "ok"); open(CONTACT.xbox); },
      goto: (arg) => {
        const id = SECTIONS[(arg || "").toLowerCase()];
        if (!id) return print(`goto: unknown section '${esc(arg || "")}'. Try: ${Object.keys(SECTIONS).join(", ")}`, "err");
        print(`→ ${esc(arg)}`, "ok"); goto(id);
      },
      theme: (arg) => {
        const cur = document.documentElement.dataset.theme;
        const next = arg === "light" || arg === "dark" ? arg : cur === "light" ? "dark" : "light";
        setTheme(next, termIn); print(`Theme set to ${next}`, "ok");
      },
      accent: () => { $("#accentBtn").click(); print("Accent colour changed ✓", "ok"); },
      space: () => { setSpace(!space, true); print(space ? "🔭 Space mode ON. Close the terminal and move your cursor over the hero to draw constellations." : "Space mode OFF", "ok"); if (space) setTimeout(() => goto("home"), 900); },
      neofetch: () => print(
`<span class="ascii"> _____ ___  ___
|_   _| _ \\/ __|
  | | |   / (_ |
  |_| |_|_\\\\___|</span>
<span class="acc">tusshar</span>@<span class="acc">portfolio</span>
-----------------
<b>Role</b>     Senior Software Engineer @ CYFIRMA
<b>Builds</b>   DeCYFIR · Threat Intel · Attack Surface Discovery
<b>Stack</b>    Python · GenAI · React · C# · UWP · Azure
<b>Uptime</b>   ${Math.floor((Date.now() - new Date("2019-08-01")) / (365.25 * 864e5))}+ years shipping software
<b>Theme</b>    ${document.documentElement.dataset.theme}${space ? " + space" : ""}
<b>Gamertag</b> FadelessFiber98`),
      ls: () => print(Object.keys(FILES).map((f) => (f.endsWith("/") ? `<span class="acc">${f}</span>` : f)).join("   ")),
      cat: (arg) => {
        if (!arg) return print("cat: missing file. Try <b>ls</b>.", "err");
        const f = FILES[arg] || FILES[arg + "/"];
        f ? f() : print(`cat: ${esc(arg)}: No such file`, "err");
      },
      echo: (...a) => print(esc(a.join(" "))),
      date: () => print(new Date().toString()),
      history: () => print(hist.map((h, i) => `${String(i + 1).padStart(3)}  ${esc(h)}`).join("\n") || "(empty)"),
      clear: () => { termBody.innerHTML = ""; },
      exit: () => close(),
      sudo: () => print("Nice try. This incident will be reported 🙂", "err"),
      hire: () => { print("Excellent choice. Opening your email app…", "ok"); location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent("Let's work together")}`; },
    };
    cmds.cd = (arg) => cmds.goto(arg);
    cmds.man = cmds.help;

    const run = (raw) => {
      const line = raw.trim();
      print(esc(line), "cmd");
      if (!line) return;
      hist.push(line); hi = hist.length;
      if (/^rm\s+-rf/.test(line)) return print("rm: permission denied. This portfolio is protected 🛡️", "err");
      const [name, ...args] = line.split(/\s+/);
      const fn = cmds[name.toLowerCase()];
      fn ? fn(...args) : print(`command not found: ${esc(name)}. Type <b>help</b>.`, "err");
    };

    const openTerm = () => {
      if (!term.hidden) return;
      lastFocus = document.activeElement;
      term.hidden = false;
      document.body.style.overflow = "hidden";
      setInert(true);
      if (!greeted) {
        greeted = true;
        print(`<span class="ascii"> _____ ___  ___
|_   _| _ \\/ __|
  | | |   / (_ |
  |_| |_|_\\\\___|</span>`);
        print("Welcome to <span class='acc'>tusshar.sh</span>. You found the secret terminal 🎉");
        print("Type <b>help</b> to see what you can do. Try <b>space</b> 🔭", "dim");
      }
      setTimeout(() => termIn.focus(), 30);
    };
    function close() {
      if (term.hidden) return;
      term.hidden = true;
      document.body.style.overflow = "";
      setInert(false);
      lastFocus && lastFocus.focus && lastFocus.focus();
    }

    // keep keyboard focus inside the terminal: Shift+Tab from the input goes to ✕, Tab from ✕ goes back
    const termCloseBtn = $("#termClose");
    term.addEventListener("keydown", (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === termIn) { e.preventDefault(); termCloseBtn.focus(); }
      else if (!e.shiftKey && document.activeElement === termCloseBtn) { e.preventDefault(); termIn.focus(); }
      else if (e.shiftKey && document.activeElement === termCloseBtn) { e.preventDefault(); termIn.focus(); }
    });
    termForm.addEventListener("submit", (e) => { e.preventDefault(); run(termIn.value); termIn.value = ""; });
    termIn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowUp") { e.preventDefault(); if (hi > 0) termIn.value = hist[--hi]; }
      else if (e.key === "ArrowDown") { e.preventDefault(); hi = Math.min(hist.length, hi + 1); termIn.value = hist[hi] || ""; }
      else if (e.key === "Tab" && !e.shiftKey) {
        e.preventDefault();
        const v = termIn.value, parts = v.split(/\s+/);
        const pool = parts.length > 1 ? (parts[0] === "goto" || parts[0] === "cd" ? Object.keys(SECTIONS) : parts[0] === "cat" ? Object.keys(FILES) : parts[0] === "theme" ? ["light", "dark"] : []) : Object.keys(cmds);
        const cur = parts[parts.length - 1].toLowerCase();
        const hits = pool.filter((c) => c.startsWith(cur));
        if (hits.length === 1) { parts[parts.length - 1] = hits[0]; termIn.value = parts.join(" ") + (parts.length === 1 ? " " : ""); }
        else if (hits.length > 1) print(hits.join("   "), "dim");
      }
    });
    $("#termClose").addEventListener("click", close);
    $("#termOpen").addEventListener("click", openTerm);
    term.addEventListener("click", (e) => { if (e.target === term) close(); });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !term.hidden) { e.preventDefault(); return close(); }
      const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
      if ((e.key === "`" || e.key === "~") && !typing && term.hidden) { e.preventDefault(); openTerm(); }
    });
  }
})();
