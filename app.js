// ════════════════════════════════════════════════════════════════
//  Anniversary App · 56th · Papa & Mummy
// ════════════════════════════════════════════════════════════════

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
    title: "एक-दूसरे के लिए प्यार और सम्मान",
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
    title: "नियाग्रा फॉल्स का दौरा",
    desc: "नियाग्रा फॉल्स के बहते पानी के बीच आप दोनों का यह खुशनुमा समय। एक-दूसरे का हाथ थामे हर पल को जीना और एक-दूसरे का ख्याल रखना ही आपकी पहचान है।"
  },
  {
    id: 9,
    file: "3. papa mummy at us trip .jpg",
    chapter: "घूमने-फिरने की यादें",
    title: "अमेरिका यात्रा की यादें",
    desc: "उम्र के इस खूबसूरत पड़ाव पर भी आप दोनों का साथ घूमना और मुस्कुराना हम सभी बच्चों को सिखाता है कि अगर सच्चा जीवनसाथी साथ हो तो हर राह आसान हो जाती है।"
  },
  {
    id: 10,
    file: "10. papa mummy with papas sister and nephew and neice.jpg",
    chapter: "परिवार की जिम्मेदारी",
    title: "पूरे परिवार के साथ जुड़ाव",
    desc: "सिर्फ हमारे लिए ही नहीं, बल्कि बुआ और पूरे परिवार के साथ हर रिश्ते को इतनी आत्मीयता और जिम्मेदारी से निभाना — हमें अपनों की कद्र करना सिखाता है।"
  },
  {
    id: 11,
    file: "5. papa mummy with all daughters.jpg",
    chapter: "परिवार की जिम्मेदारी",
    title: "अपनी प्यारी बेटियों के साथ",
    desc: "हम सब बेटियों को आपकी बेटियां होने पर बहुत गर्व है। हमारी हर छोटी-बड़ी खुशी के लिए आप दोनों ने जो निस्वार्थ प्यार और आशीर्वाद दिया है, उसका हम आभार मानते हैं।"
  },
  {
    id: 12,
    file: "4. papa mummy with all their kids.jpg",
    chapter: "परिवार की जिम्मेदारी",
    title: "बच्चों का भरा-पूरा परिवार",
    desc: "हम सभी बच्चों को अपने साये में रखना, हर कदम पर हमारा मार्गदर्शन करना और एकजुट रखना। आप दोनों का निस्वार्थ प्यार ही हमारा सबसे सुरक्षित आशियाना है।"
  },
  {
    id: 13,
    file: "7. papa mummy with all kids.jpg",
    chapter: "परिवार की जिम्मेदारी",
    title: "पारिवारिक उत्सवों का आनंद",
    desc: "जब भी हम सब बच्चे और परिवार इकट्ठा होते हैं, तो आप दोनों के चेहरे की यह खुशी और आशीर्वाद पूरे घर को सकारात्मकता और प्रेम से भर देता है।"
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
    desc: "बचपन से लेकर बड़े होने तक नाती-पोतों को अच्छे संस्कार और भरपूर स्नेह देना। आप दोनों का आशीर्वाद ही हमारी आने वाली पीढ़ियों का सबसे बड़ा सुरक्षा कवच है।"
  },
  {
    id: 16,
    file: "14. papa mummy my wedding welcoming  me in their family.jpg",
    chapter: "परिवार में स्वागत",
    title: "परिवार में प्यार से स्वागत",
    desc: "आपने हम सब दामादों और बहुओं को भी अपने बच्चों जैसा प्यार दिया। इस परिवार का हिस्सा बनना हमारे जीवन का सबसे सुंदर अनुभव है।"
  }
];

// ── State ─────────────────────────────────────────────────────
let audio        = null;
let musicPlaying = false;
let wantsMusic   = true;
let lbIndex      = 0;

// ── Init ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildTimeline();
  buildMasonry();
  initScrollObserver();
  initScrollProgress();
  initMusic();
  initLightbox();
  initPetals();
});

// ── 1. Timeline ───────────────────────────────────────────────
function buildTimeline() {
  const el = document.getElementById("timeline");
  if (!el) return;

  el.innerHTML = memories.map((m, i) => `
    <div class="tc" id="tc-${i}">
      <div class="tc-chapter">
        <div class="tc-chapter-line"></div>
        <span class="tc-chapter-label">${m.chapter}</span>
      </div>
      <div class="tc-card">
        <div class="tc-inner">
          <div class="tc-img-wrap">
            <div class="tc-img-frame">
              <img
                class="tc-img"
                src="${m.file}"
                alt="${m.title}"
                loading="${i < 2 ? 'eager' : 'lazy'}"
                data-lb-index="${i}"
              />
            </div>
          </div>
          <div class="tc-text">
            <p class="tc-ornament">✦ 56 वर्षों का साथ ✦</p>
            <h2 class="tc-title">${m.title}</h2>
            <div class="tc-rule"></div>
            <p class="tc-desc">${m.desc}</p>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// ── 2. Masonry Gallery ────────────────────────────────────────
function buildMasonry() {
  const el = document.getElementById("masonry");
  if (!el) return;

  el.innerHTML = memories.map((m, i) => `
    <div class="mi" data-lb-index="${i}">
      <img class="mi-img" src="${m.file}" alt="${m.title}" loading="lazy" />
      <div class="mi-cap">${m.title}</div>
    </div>
  `).join("");
}

// ── 3. Scroll Intersection Observer ──────────────────────────
function initScrollObserver() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, delay) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add("visible"), 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

  document.querySelectorAll(".tc, .mi").forEach(el => obs.observe(el));
}

// ── 4. Scroll Progress Bar ─────────────────────────────────────
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;

  const update = () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : "0%";
  };

  window.addEventListener("scroll", update, { passive: true });
}

// ── 5. Lightbox ───────────────────────────────────────────────
function initLightbox() {
  const lb      = document.getElementById("lightbox");
  const lbImg   = document.getElementById("lbImg");
  const lbCap   = document.getElementById("lbCaption");
  const lbClose = document.getElementById("lbClose");
  const lbPrev  = document.getElementById("lbPrev");
  const lbNext  = document.getElementById("lbNext");
  if (!lb) return;

  const open = (idx) => {
    lbIndex = ((idx % memories.length) + memories.length) % memories.length;
    const m = memories[lbIndex];
    lbImg.src = m.file;
    lbImg.alt = m.title;
    lbCap.textContent = m.title;
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  };

  const close = () => {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  };

  const prev = () => open(lbIndex - 1);
  const next = () => open(lbIndex + 1);

  // Open on image click
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-lb-index]");
    if (target) open(parseInt(target.dataset.lbIndex, 10));
  });

  lbClose.addEventListener("click", close);
  lbPrev.addEventListener("click", prev);
  lbNext.addEventListener("click", next);

  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });

  // Keyboard
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape")      close();
    if (e.key === "ArrowLeft")   prev();
    if (e.key === "ArrowRight")  next();
  });

  // Swipe on mobile
  let touchStartX = 0;
  lb.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend",   (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
  }, { passive: true });
}

// ── 6. Music ──────────────────────────────────────────────────
function initMusic() {
  const fab  = document.getElementById("musicFab");
  const bars = document.getElementById("musicBars");
  if (!fab) return;

  audio = new Audio("music.mp3");
  audio.loop   = true;
  audio.volume = 0.4;

  const setUI = (playing) => {
    musicPlaying = playing;
    bars.classList.toggle("playing", playing);
    bars.classList.toggle("muted",  !playing);
    fab.setAttribute("aria-label", playing ? "Mute music" : "Play music");
  };

  const tryPlay = () => {
    if (!wantsMusic) return;
    audio.play().then(() => setUI(true)).catch(() => setUI(false));
  };

  const onInteraction = () => {
    if (wantsMusic && !musicPlaying) tryPlay();
    document.removeEventListener("touchstart", onInteraction);
    document.removeEventListener("click",      onInteraction);
  };

  // Attempt autoplay; fall back to first interaction
  tryPlay();
  document.addEventListener("touchstart", onInteraction, { passive: true, once: true });
  document.addEventListener("click",      onInteraction, { once: true });

  fab.addEventListener("click", (e) => {
    e.stopPropagation();
    wantsMusic = !wantsMusic;
    if (wantsMusic) {
      tryPlay();
    } else {
      audio.pause();
      setUI(false);
    }
  });
}

// ── 7. Floating Petal Canvas ──────────────────────────────────
function initPetals() {
  const canvas = document.getElementById("petalCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let W, H, petals = [];

  const resize = () => {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });

  const COLORS = [
    "rgba(201,169,110,0.55)",
    "rgba(232,213,168,0.55)",
    "rgba(201,123,132,0.4)",
    "rgba(240,214,217,0.5)",
    "rgba(255,255,255,0.45)"
  ];

  class Petal {
    constructor() { this.reset(true); }

    reset(init = false) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : -20;
      this.r  = 3 + Math.random() * 6;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = 0.5 + Math.random() * 1.2;
      this.angle  = Math.random() * Math.PI * 2;
      this.spin   = (Math.random() - 0.5) * 0.04;
      this.color  = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.wobble = Math.random() * Math.PI * 2;
    }

    update() {
      this.wobble += 0.02;
      this.x += this.vx + Math.sin(this.wobble) * 0.4;
      this.y += this.vy;
      this.angle += this.spin;
      if (this.y > H + 20) this.reset();
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      // Simple petal shape
      ctx.ellipse(0, 0, this.r, this.r * 1.8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // Fewer petals on mobile for performance
  const count = window.innerWidth < 640 ? 18 : 36;
  for (let i = 0; i < count; i++) petals.push(new Petal());

  let raf;
  const loop = () => {
    ctx.clearRect(0, 0, W, H);
    petals.forEach(p => { p.update(); p.draw(); });
    raf = requestAnimationFrame(loop);
  };
  loop();

  // Pause when hero leaves viewport to save battery
  const heroEl = document.getElementById("hero");
  if (heroEl && "IntersectionObserver" in window) {
    new IntersectionObserver((entries) => {
      entries[0].isIntersecting ? loop() : cancelAnimationFrame(raf);
    }, { threshold: 0 }).observe(heroEl);
  }
}
