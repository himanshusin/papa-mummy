// ═══════════════════════════════════════════════════════════════════
//  56th Anniversary · Celebrity Dark Luxury Edition
//  Papa & Mummy · 21 May 2026
// ═══════════════════════════════════════════════════════════════════

const memories = [
  {
    id: 1,
    file: "15. papa smilling.png",
    chapter: "पापा और मम्मी",
    title: "पापा की मुस्कान",
    desc: "पापा, आपकी मुस्कान हम सभी बच्चों को हमेशा हिम्मत और हौसला देती है। आपका शांत स्वभाव और गंभीर व्यक्तित्व हमेशा हमारा मार्गदर्शन करता है।"
  },
  {
    id: 2,
    file: "16. mummy smilling.png",
    chapter: "पापा और मम्मी",
    title: "मम्मी की प्यारी मुस्कान",
    desc: "मम्मी, आपकी यह ममतामयी मुस्कान हमारे घर को खुशियों और सुकून से भर देती है। आपका निस्वार्थ प्यार ही हम सब को हमेशा जोड़कर रखता है।"
  },
  {
    id: 3,
    file: "9. papa mummy - mummy loving watching  papa.jpg",
    chapter: "साथ-साथ कदम",
    title: "एक-दूसरे के लिए प्यार",
    desc: "शादी के 56 सालों बाद भी आप दोनों के बीच का यह अनमोल प्यार और आपसी सम्मान देखकर, हम सब बच्चे भी अपने जीवन में ऐसा ही पवित्र रिश्ता जीना चाहते हैं।"
  },
  {
    id: 4,
    file: "6. papa mummy morning stroll.jpg",
    chapter: "साथ-साथ कदम",
    title: "हर कदम पर साथ",
    desc: "सुबह की सैर हो या जीवन का कोई भी मोड़, आप दोनों को हमेशा एक-दूसरे का हाथ थामकर साथ चलते देखना ही हम बच्चों के लिए सच्चे प्रेम की सबसे सुंदर सीख है।"
  },
  {
    id: 5,
    file: "2. papa mummy at taj mahal.jpg",
    chapter: "घूमने-फिरने की यादें",
    title: "ताजमहल की यात्रा",
    desc: "ताजमहल के सामने आप दोनों की यह प्यारी तस्वीर! हम सब बच्चे आपके इस गहरे तालमेल और अटूट आपसी समझ को अपने जीवन में उतारना चाहते हैं।"
  },
  {
    id: 6,
    file: "11. papa mummy chicago trip.JPG",
    chapter: "घूमने-फिरने की यादें",
    title: "शिकागो का सफर",
    desc: "चाहे देश हो या विदेश, आप दोनों का साथ हर सफर को आसान और यादगार बना देता है। आप दोनों ने ही हमें दुनिया को अपनी नज़रों से देखना सिखाया है।"
  },
  {
    id: 7,
    file: "12. papa mummy at statue of liberty.jpg",
    chapter: "घूमने-फिरने की यादें",
    title: "स्टैच्यू ऑफ लिबर्टी पर",
    desc: "दुनिया की बड़ी-बड़ी इमारतों और खूबसूरत नज़ारों के बीच भी आप दोनों का एक-दूसरे से जुड़ाव वैसा ही रहा। आप दोनों का साथ ही हमारी असली दुनिया है।"
  },
  {
    id: 8,
    file: "13. papa mummy at niagra falls .jpg",
    chapter: "घूमने-फिरने की यादें",
    title: "नियाग्रा फॉल्स",
    desc: "नियाग्रा फॉल्स के बहते पानी के बीच आप दोनों का यह खुशनुमा समय। एक-दूसरे का हाथ थामे हर पल को जीना और ख्याल रखना ही आपकी पहचान है।"
  },
  {
    id: 9,
    file: "3. papa mummy at us trip .jpg",
    chapter: "घूमने-फिरने की यादें",
    title: "अमेरिका यात्रा",
    desc: "उम्र के इस खूबसूरत पड़ाव पर भी आप दोनों का साथ घूमना हम सभी बच्चों को सिखाता है कि अगर सच्चा जीवनसाथी साथ हो तो हर राह आसान हो जाती है।"
  },
  {
    id: 10,
    file: "10. papa mummy with papas sister and nephew and neice.jpg",
    chapter: "परिवार की जिम्मेदारी",
    title: "पूरे परिवार के साथ",
    desc: "सिर्फ हमारे लिए ही नहीं, बल्कि बुआ और पूरे परिवार के साथ हर रिश्ते को इतनी आत्मीयता और जिम्मेदारी से निभाना — हमें अपनों की कद्र करना सिखाता है।"
  },
  {
    id: 11,
    file: "5. papa mummy with all daughters.jpg",
    chapter: "परिवार की जिम्मेदारी",
    title: "प्यारी बेटियों के साथ",
    desc: "हम सब बेटियों को आपकी बेटियां होने पर बहुत गर्व है। हमारी हर छोटी-बड़ी खुशी के लिए आप दोनों ने जो निस्वार्थ प्यार दिया है, उसका हम आभार मानते हैं।"
  },
  {
    id: 12,
    file: "4. papa mummy with all their kids.jpg",
    chapter: "परिवार की जिम्मेदारी",
    title: "बच्चों का भरा-पूरा परिवार",
    desc: "हम सभी बच्चों को अपने साये में रखना, हर कदम पर मार्गदर्शन करना और एकजुट रखना। आप दोनों का निस्वार्थ प्यार ही हमारा सबसे सुरक्षित आशियाना है।"
  },
  {
    id: 13,
    file: "7. papa mummy with all kids.jpg",
    chapter: "परिवार की जिम्मेदारी",
    title: "पारिवारिक उत्सव",
    desc: "जब भी हम सब बच्चे और परिवार इकट्ठा होते हैं, तो आप दोनों के चेहरे की यह खुशी और आशीर्वाद पूरे घर को प्रेम से भर देता है।"
  },
  {
    id: 14,
    file: "8. papa mummy with all grand kids ( small).jpg",
    chapter: "नाती-पोतों का दुलार",
    title: "नाती-पोतों का बचपन",
    desc: "नाती-पोतों के साथ बच्चा बन जाना और उन्हें बेहद लाड़-प्यार से संवारना। आप दोनों का यह दुलार हमारे बच्चों के जीवन का सबसे अनमोल हिस्सा है।"
  },
  {
    id: 15,
    file: "1. papa mummy with grand kids (grown).png",
    chapter: "नाती-पोतों का दुलार",
    title: "बड़े होते नाती-पोते",
    desc: "बचपन से लेकर बड़े होने तक नाती-पोतों को अच्छे संस्कार और भरपूर स्नेह देना। आप दोनों का आशीर्वाद हमारी आने वाली पीढ़ियों का सबसे बड़ा सुरक्षा कवच है।"
  },
  {
    id: 16,
    file: "14. papa mummy my wedding welcoming  me in their family.jpg",
    chapter: "परिवार में स्वागत",
    title: "परिवार में प्यार से स्वागत",
    desc: "आपने हम सब दामादों और बहुओं को भी अपने बच्चों जैसा प्यार दिया। इस परिवार का हिस्सा बनना हमारे जीवन का सबसे सुंदर अनुभव है।"
  }
];

// ── State ─────────────────────────────────────────────────────────
let ytPlayer     = null;
let ytReady      = false;
let musicPlaying = false;
let wantsMusic   = true;
let lbIndex      = 0;
let activeDots   = null;  // NodeList of snap dots
let snapEl       = null;  // the snap scroll container

// ── Boot ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildDesktopTimeline();
  buildSnapStory();
  buildGallery();
  initObserver();
  initScrollProgress();
  initCounter();
  initBokeh();
  initTilt();
  initLightbox();
  initMusic();
});

// ════════════════════════════════════════════════════════════════════
//  DESKTOP TIMELINE  (two-column, centre spine)
// ════════════════════════════════════════════════════════════════════
function buildDesktopTimeline() {
  const tl = document.getElementById("tl");
  if (!tl) return;

  tl.innerHTML += memories.map(m => `
    <div class="tl-item">
      <div class="tl-img-wrap">
        <img class="tl-img" src="${m.file}" alt="${m.title}" loading="lazy" data-lb="${memories.indexOf(m)}" />
      </div>
      <div class="tl-dot-wrap">
        <div class="tl-dot"></div>
      </div>
      <div class="tl-text-card tl-card">
        <div class="tl-text">
          <div class="tl-chapter">
            <span class="tl-ch-dot"></span>
            <span class="tl-ch-label">${m.chapter}</span>
          </div>
          <h2 class="tl-title">${m.title}</h2>
          <div class="tl-rule"></div>
          <p class="tl-desc">${m.desc}</p>
        </div>
      </div>
    </div>
  `).join("");
}

// ════════════════════════════════════════════════════════════════════
//  MOBILE SNAP STORY  (full-viewport, scroll-snap)
// ════════════════════════════════════════════════════════════════════
function buildSnapStory() {
  snapEl = document.getElementById("snap");
  if (!snapEl) return;

  const total = memories.length;

  // Build story slides
  const slides = memories.map((m, i) => `
    <div class="snap-slide" id="ss-${i}">
      <div class="ss-photo">
        <img class="ss-photo-img" src="${m.file}" alt="${m.title}" loading="${i < 2 ? 'eager' : 'lazy'}" data-lb="${i}" />
        <div class="ss-fade"></div>
      </div>
      <div class="ss-body">
        <div class="ss-meta">
          <span class="ss-chapter">${m.chapter}</span>
          <span class="ss-counter">${i + 1} / ${total}</span>
        </div>
        <h2 class="ss-title">${m.title}</h2>
        <div class="ss-rule"></div>
        <p class="ss-desc">${m.desc}</p>
        <div class="ss-dots" id="dots-${i}">
          ${memories.map((_, di) => `<div class="ss-dot${di === i ? ' active' : ''}"></div>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // End slide — link out to gallery
  const endSlide = `
    <div class="snap-slide snap-end" id="ss-end">
      <p class="snap-end-label">तस्वीरों में यादें देखें</p>
      <a class="snap-end-btn" href="#gallery">
        यादों का झरोखा
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 4v16M5 13l7 7 7-7"/>
        </svg>
      </a>
    </div>
  `;

  snapEl.innerHTML = slides + endSlide;

  // Update dots as user scrolls inside the snap container
  snapEl.addEventListener("scroll", onSnapScroll, { passive: true });
}

function onSnapScroll() {
  if (!snapEl) return;

  // Find the slide whose top sits closest to the container top
  // (slides can be taller than the viewport when a message runs long).
  const cTop   = snapEl.getBoundingClientRect().top;
  const slides = snapEl.querySelectorAll(".snap-slide");
  let idx = 0, best = Infinity;
  slides.forEach((s, i) => {
    const d = Math.abs(s.getBoundingClientRect().top - cTop);
    if (d < best) { best = d; idx = i; }
  });

  document.querySelectorAll(".ss-dots").forEach((dotSet) => {
    dotSet.querySelectorAll(".ss-dot").forEach((d, di) => d.classList.toggle("active", di === idx));
  });
}

// ════════════════════════════════════════════════════════════════════
//  MASONRY GALLERY
// ════════════════════════════════════════════════════════════════════
function buildGallery() {
  const el = document.getElementById("masonry");
  if (!el) return;

  el.innerHTML = memories.map((m, i) => `
    <div class="mi" data-lb="${i}">
      <img class="mi-img" src="${m.file}" alt="${m.title}" loading="lazy" />
      <div class="mi-cap">${m.title}</div>
    </div>
  `).join("");
}

// ════════════════════════════════════════════════════════════════════
//  SCROLL OBSERVER  (fade-in for timeline items + gallery)
// ════════════════════════════════════════════════════════════════════
function initObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("vis");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -4% 0px" });

  document.querySelectorAll(".tl-item, .mi").forEach(el => obs.observe(el));
}

// ════════════════════════════════════════════════════════════════════
//  SCROLL PROGRESS BAR
// ════════════════════════════════════════════════════════════════════
function initScrollProgress() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;
  const update = () => {
    const s = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = s > 0 ? `${(window.scrollY / s) * 100}%` : "0%";
  };
  window.addEventListener("scroll", update, { passive: true });
}

// ════════════════════════════════════════════════════════════════════
//  COUNTER ANIMATION  (0 → 56)
// ════════════════════════════════════════════════════════════════════
function initCounter() {
  const el = document.getElementById("heroCounter");
  if (!el) return;

  const TARGET   = 56;
  const DURATION = 2200; // ms
  let started    = false;

  const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

  const run = () => {
    if (started) return;
    started = true;
    const start = performance.now();

    const tick = (now) => {
      const t   = Math.min((now - start) / DURATION, 1);
      el.textContent = Math.round(easeOutExpo(t) * TARGET);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  // Start after a short delay (let hero animations settle)
  setTimeout(run, 800);
}

// ════════════════════════════════════════════════════════════════════
//  BOKEH PARTICLES  (slow golden orbs)
// ════════════════════════════════════════════════════════════════════
function initBokeh() {
  const canvas = document.getElementById("bokeh");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W, H;

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });

  // Orb color palette: warm golden / rose glows
  const PALETTE = [
    [200, 164,  74],   // gold
    [242, 224, 153],   // gold light
    [196, 120, 133],   // rose
    [255, 255, 255],   // white
    [138, 110,  42],   // gold dark
  ];

  class Orb {
    constructor() { this.init(true); }

    init(random = false) {
      this.x    = Math.random() * W;
      this.y    = random ? Math.random() * H : H + 80;
      this.r    = 20 + Math.random() * 60;        // large soft orbs
      this.vy   = -(0.08 + Math.random() * 0.18); // very slow upward drift
      this.vx   = (Math.random() - 0.5) * 0.12;
      this.life = 0;
      this.maxLife = 300 + Math.random() * 400;   // long life
      this.col  = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      this.wobbleOffset = Math.random() * Math.PI * 2;
    }

    update() {
      this.life++;
      this.x += this.vx + Math.sin(this.life * 0.008 + this.wobbleOffset) * 0.25;
      this.y += this.vy;
      if (this.y < -this.r * 2 || this.life > this.maxLife) this.init();
    }

    draw() {
      const fade = Math.min(this.life / 60, 1) * Math.min((this.maxLife - this.life) / 60, 1);
      const alpha = fade * 0.18;
      const [r, g, b] = this.col;

      const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.r);
      grad.addColorStop(0,   `rgba(${r},${g},${b},${alpha})`);
      grad.addColorStop(0.5, `rgba(${r},${g},${b},${alpha * 0.5})`);
      grad.addColorStop(1,   `rgba(${r},${g},${b},0)`);

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
    }
  }

  // Fewer on mobile for battery
  const COUNT = window.innerWidth < 640 ? 14 : 28;
  const orbs  = Array.from({ length: COUNT }, () => new Orb());

  let raf;
  const loop = () => {
    ctx.clearRect(0, 0, W, H);
    orbs.forEach(o => { o.update(); o.draw(); });
    raf = requestAnimationFrame(loop);
  };
  loop();

  // Pause animation when hero is out of view
  const hero = document.getElementById("hero");
  if (hero) {
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (!raf) loop();
      } else {
        cancelAnimationFrame(raf);
        raf = null;
      }
    }, { threshold: 0 }).observe(hero);
  }
}

// ════════════════════════════════════════════════════════════════════
//  GALLERY 3-D TILT  (desktop pointer events)
// ════════════════════════════════════════════════════════════════════
function initTilt() {
  // Only for pointer devices
  if (window.matchMedia("(hover: none)").matches) return;

  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest(".mi");
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x    = (e.clientX - rect.left) / rect.width  - 0.5;
    const y    = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${y * -9}deg) scale(1.03)`;
    card.style.transition = "transform 0.1s ease";
  });

  document.addEventListener("mouseleave", (e) => {
    const card = e.target.closest?.(".mi");
    if (card) {
      card.style.transform = "";
      card.style.transition = "transform 0.6s cubic-bezier(0.16,1,0.3,1)";
    }
  }, true);
}

// ════════════════════════════════════════════════════════════════════
//  LIGHTBOX
// ════════════════════════════════════════════════════════════════════
function initLightbox() {
  const lb      = document.getElementById("lb");
  const img     = document.getElementById("lbImg");
  const cap     = document.getElementById("lbCap");
  const closeEl = document.getElementById("lbClose");
  const prevEl  = document.getElementById("lbPrev");
  const nextEl  = document.getElementById("lbNext");
  if (!lb) return;

  const show = (idx) => {
    lbIndex = ((idx % memories.length) + memories.length) % memories.length;
    const m  = memories[lbIndex];
    img.src  = m.file;
    img.alt  = m.title;
    cap.textContent = m.title;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const hide = () => {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  };

  // Open on any [data-lb] click
  document.addEventListener("click", (e) => {
    const t = e.target.closest("[data-lb]");
    if (t) show(parseInt(t.dataset.lb, 10));
  });

  closeEl.addEventListener("click", hide);
  prevEl.addEventListener("click",  () => show(lbIndex - 1));
  nextEl.addEventListener("click",  () => show(lbIndex + 1));
  lb.addEventListener("click",      (e) => { if (e.target === lb) hide(); });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    const map = { Escape: hide, ArrowLeft: () => show(lbIndex - 1), ArrowRight: () => show(lbIndex + 1) };
    map[e.key]?.();
  });

  // Swipe
  let tx = 0;
  lb.addEventListener("touchstart", (e) => { tx = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend",   (e) => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 48) dx < 0 ? show(lbIndex + 1) : show(lbIndex - 1);
  }, { passive: true });
}

// ════════════════════════════════════════════════════════════════════
//  MUSIC  — YouTube IFrame Player API (background audio)
// ════════════════════════════════════════════════════════════════════
const YT_VIDEO_ID = "606CgcbkgEY"; // Mohammed Rafi — soulful romantic songs

function initMusic() {
  const fab  = document.getElementById("musicFab");
  const bars = document.getElementById("vizBars");
  if (!fab) return;

  const setUI = (playing) => {
    musicPlaying = playing;
    bars.classList.toggle("playing", playing);
    bars.classList.toggle("muted",  !playing);
  };
  setUI(false);

  // The API calls this global once the iframe_api script has loaded.
  window.onYouTubeIframeAPIReady = () => {
    ytPlayer = new YT.Player("ytPlayer", {
      videoId: YT_VIDEO_ID,
      playerVars: {
        autoplay: 1,
        loop: 1,
        playlist: YT_VIDEO_ID, // required for single-video looping
        controls: 0,
        disablekb: 1,
        modestbranding: 1,
        playsinline: 1,
        rel: 0
      },
      events: {
        onReady: (e) => {
          ytReady = true;
          e.target.setVolume(38);
          if (wantsMusic) e.target.playVideo(); // may be blocked until a gesture
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.PLAYING) setUI(true);
          else if (e.data === YT.PlayerState.PAUSED || e.data === YT.PlayerState.ENDED) setUI(false);
        }
      }
    });
  };

  // Inject the YouTube IFrame API script.
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);

  // Browsers block autoplay-with-sound; resume on the first user gesture.
  const onFirst = () => {
    if (wantsMusic && ytReady && !musicPlaying) ytPlayer.playVideo();
    document.removeEventListener("touchstart", onFirst);
    document.removeEventListener("click",      onFirst);
  };
  document.addEventListener("touchstart", onFirst, { passive: true, once: true });
  document.addEventListener("click",      onFirst, { once: true });

  // FAB toggles based on actual playback state.
  fab.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!ytReady) return;
    if (musicPlaying) {
      wantsMusic = false;
      ytPlayer.pauseVideo();
    } else {
      wantsMusic = true;
      ytPlayer.playVideo();
    }
  });
}
