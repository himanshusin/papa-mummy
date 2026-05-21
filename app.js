// विवाह की 56वीं वर्षगांठ - पापा और मम्मी | संस्मरण डेटाबेस
const memories = [
  {
    id: 1,
    file: "15. papa smilling.JPG",
    chapter: "पापा और मम्मी",
    titleHindi: "पापा की मुस्कान",
    descHindi: "पापा, आपकी मुस्कान हम सभी बच्चों को हमेशा हिम्मत और हौसला देती है। आपका शांत स्वभाव और गंभीर व्यक्तित्व हमेशा हमारा मार्गदर्शन करता है。",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 2,
    file: "16. mummy smilling.png",
    chapter: "पापा और मम्मी",
    titleHindi: "मम्मी की प्यारी मुस्कान",
    descHindi: "मम्मी, आपकी यह ममतामयी मुस्कान हमारे घर को खुशियों और सुकून से भर देती है। आपका निस्वार्थ प्यार ही हम सब को हमेशा जोड़कर रखता है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 3,
    file: "9. papa mummy - mummy loving watching  papa.jpg",
    chapter: "साथ-साथ कदम",
    titleHindi: "एक-दूसरे के लिए प्यार और सम्मान",
    descHindi: "शादी के 56 सालों बाद भी आप दोनों के बीच का यह अनमोल प्यार और आपसी सम्मान देखकर, हम सब बच्चे भी अपने जीवन में ऐसा ही पवित्र रिश्ता जीना चाहते हैं।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 4,
    file: "6. papa mummy morning stroll.jpg",
    chapter: "साथ-साथ कदम",
    titleHindi: "हर कदम पर साथ",
    descHindi: "सुबह की सैर हो या जीवन का कोई भी मोड़, आप दोनों को हमेशा एक-दूसरे का हाथ थामकर साथ चलते देखना ही हम बच्चों के लिए सच्चे प्रेम की सबसे सुंदर सीख है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 5,
    file: "2. papa mummy at taj mahal.jpg",
    chapter: "घूमने-फिरने की यादें",
    titleHindi: "ताजमहल की यात्रा",
    descHindi: "ताजमहल के सामने आप दोनों की यह प्यारी तस्वीर! हम सब बच्चे आपके इस गहरे तालमेल और अटूट आपसी समझ को अपने जीवन में उतारना चाहते हैं और सीखना चाहते हैं।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 6,
    file: "11. papa mummy chicago trip.JPG",
    chapter: "घूमने-फिरने की यादें",
    titleHindi: "शिकागो का सफर",
    descHindi: "चाहे देश हो या विदेश, आप दोनों का साथ हर सफर को आसान और यादगार बना देता है। आप दोनों ने ही हमें दुनिया को अपनी नज़रों से देखना सिखाया है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 7,
    file: "12. papa mummy at statue of liberty.jpg",
    chapter: "घूमने-फिरने की यादें",
    titleHindi: "स्टैच्यू ऑफ लिबर्टी पर",
    descHindi: "दुनिया की बड़ी-बड़ी इमारतों और खूबसूरत नज़ारों के बीच भी आप दोनों का एक-दूसरे से जुड़ाव वैसा ही रहा। आप दोनों का साथ ही हमारी असली दुनिया है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 8,
    file: "13. papa mummy at niagra falls .jpg",
    chapter: "घूमने-फिरने की यादें",
    titleHindi: "नियाग्रा फॉल्स का दौरा",
    descHindi: "नियाग्रा फॉल्स के बहते पानी के बीच आप दोनों का यह खुशनुमा समय। एक-दूसरे का हाथ थामे हर पल को जीना और एक-दूसरे का ख्याल रखना ही आपकी पहचान है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 9,
    file: "3. papa mummy at us trip .jpg",
    chapter: "घूमने-फिरने की यादें",
    titleHindi: "अमेरिका यात्रा की यादें",
    descHindi: "उम्र के इस खूबसूरत पड़ाव पर भी आप दोनों का साथ घूमना और मुस्कुराना हम सभी बच्चों को सिखाता है कि अगर सच्चा जीवनसाथी साथ हो, तो हर राह आसान हो जाती है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 11,
    file: "10. papa mummy with papas sister and nephew and neice.jpg",
    chapter: "परिवार की जिम्मेदारी",
    titleHindi: "पूरे परिवार के साथ जुड़ाव",
    descHindi: "सिर्फ हमारे लिए ही नहीं, बल्कि बुआ और पूरे परिवार के साथ हर रिश्ते को इतनी आत्मीयता और जिम्मेदारी से निभाना, हमें अपनों की कद्र करना सिखाता है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 12,
    file: "5. papa mummy with all daughters.jpg",
    chapter: "परिवार की जिम्मेदारी",
    titleHindi: "अपनी प्यारी बेटियों के साथ",
    descHindi: "हम सब बेटियों को आपकी बेटियां होने पर बहुत गर्व है। हमारी हर छोटी-बड़ी खुशी के लिए आप दोनों ने जो निस्वार्थ प्यार और आशीर्वाद दिया है, उसका हम आभार मानते हैं।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 13,
    file: "4. papa mummy with all their kids.jpg",
    chapter: "परिवार की जिम्मेदारी",
    titleHindi: "बच्चों का भरा-पूरा परिवार",
    descHindi: "हम सभी बच्चों को अपने साये में रखना, हर कदम पर हमारा मार्गदर्शन करना और एकजुट रखना। आप दोनों का निस्वार्थ प्यार ही हमारा सबसे सुरक्षित आशियाना है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 14,
    file: "7. papa mummy with all kids.jpg",
    chapter: "परिवार की जिम्मेदारी",
    titleHindi: "पारिवारिक उत्सवों का आनंद",
    descHindi: "जब भी हम सब बच्चे और परिवार इकट्ठा होते हैं, तो आप दोनों के चेहरे की यह खुशी और आशीर्वाद पूरे घर को सकारात्मकता और प्रेम से भर देता है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 15,
    file: "8. papa mummy with all grand kids ( small).jpg",
    chapter: "नाती-पोतों का दुलार",
    titleHindi: "नाती-पोतों का बचपन",
    descHindi: "नाती-पोतों के साथ बच्चा बन जाना और उन्हें बेहद लाड़-प्यार से संवारना। आप दोनों का यह दुलार हमारे बच्चों के जीवन का सबसे अनमोल हिस्सा है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  },
  {
    id: 16,
    file: "1. papa mummy with grand kids (grown).png",
    chapter: "नाती-पोतों का दुलार",
    titleHindi: "बड़े होते नाती-पोते",
    descHindi: "बचपन से लेकर बड़े होने तक नाती-पोतों को अच्छे संस्कार और भरपूर स्नेह देना। आप दोनों का आशीर्वाद ही हमारी आने वाली पीढ़ियों का सबसे बड़ा सुरक्षा कवच है।",
    accentColor: "rgba(226, 201, 195, 0.08)"
  }
];

// Current State variables
let backgroundMusic = null;
let isMusicPlaying = false;

// Local shehnai/instrumental audio file
const weddingInstrumental = "music.mp3"; 

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  renderScrollytelling();
  renderCollage();
  initIntersectionObserver();
  initMusic();
}

// 1. Render Scrollytelling Timeline Cards (No image counter, no zoom button)
function renderScrollytelling() {
  const container = document.getElementById("story-timeline");
  if (!container) return;

  container.innerHTML = memories.map((memory, index) => {
    return `
      <div class="story-card-wrapper" id="story-wrapper-${index}">
        <div class="chapter-indicator">
          <span class="chapter-hindi">${memory.chapter}</span>
        </div>
        
        <div class="story-card" style="--accent: ${memory.accentColor}">
          <div class="story-card-inner">
            <div class="story-image-pane">
              <div class="image-shine-container">
                <img src="${memory.file}" alt="${memory.titleHindi}" loading="${index === 0 ? 'eager' : 'lazy'}" class="story-img" />
              </div>
            </div>
            
            <div class="story-text-pane">
              <div class="ornament-divider">✦ 56 वर्षों का साथ ✦</div>
              <h2 class="slide-title-hindi">${memory.titleHindi}</h2>
              
              <div class="slide-divider"></div>
              
              <p class="slide-desc-hindi">${memory.descHindi}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 2. Render Collage Grid (No zoom click actions, clean hover layout)
function renderCollage() {
  const container = document.getElementById("collage-grid");
  if (!container) return;

  container.innerHTML = memories.map((memory, index) => {
    return `
      <div class="collage-item">
        <img src="${memory.file}" alt="${memory.titleHindi}" loading="lazy" class="collage-img" />
        <div class="collage-overlay">
          <div class="collage-info">
            <h4 class="collage-title-hindi">${memory.titleHindi}</h4>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// 3. Scroll Intersection Observer for Timeline cards
function initIntersectionObserver() {
  const cards = document.querySelectorAll(".story-card-wrapper");
  const options = {
    threshold: 0.15,
    rootMargin: "0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-slide");
      }
    });
  }, options);

  cards.forEach(card => observer.observe(card));
}

// 4. Audio Music Player System
function initMusic() {
  const musicToggle = document.getElementById("music-toggle");
  if (!musicToggle) return;
  
  backgroundMusic = new Audio(weddingInstrumental);
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.4;
  
  // 1. Attempt to autoplay immediately on load (if the browser/platform rules permit it)
  backgroundMusic.play().then(() => {
    musicToggle.classList.add("playing");
    musicToggle.querySelector(".music-text").innerText = "म्यूट करें 🔇";
    isMusicPlaying = true;
  }).catch(err => {
    console.log("Direct autoplay blocked by browser policy. Waiting for user interaction.");
  });
  
  // Toggle Button Click Handler (Play/Pause manual override)
  musicToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent trigger from bubbling to document interaction listeners
    if (isMusicPlaying) {
      backgroundMusic.pause();
      musicToggle.classList.remove("playing");
      musicToggle.querySelector(".music-text").innerText = "संगीत बजाएं ♫";
      isMusicPlaying = false;
    } else {
      backgroundMusic.play().then(() => {
        musicToggle.classList.add("playing");
        musicToggle.querySelector(".music-text").innerText = "म्यूट करें 🔇";
        isMusicPlaying = true;
      }).catch(err => {
        console.log("Audio play blocked.", err);
      });
    }
  });

  // 2. Interaction-based fallback (triggers on very first touch, click, or key press)
  const startMusicOnInteraction = () => {
    if (!isMusicPlaying && backgroundMusic) {
      backgroundMusic.play().then(() => {
        musicToggle.classList.add("playing");
        musicToggle.querySelector(".music-text").innerText = "म्यूट करें 🔇";
        isMusicPlaying = true;
        removeInteractionListeners();
      }).catch(() => {});
    } else {
      removeInteractionListeners();
    }
  };

  const removeInteractionListeners = () => {
    document.removeEventListener("click", startMusicOnInteraction);
    document.removeEventListener("touchstart", startMusicOnInteraction);
    document.removeEventListener("keydown", startMusicOnInteraction);
  };

  document.addEventListener("click", startMusicOnInteraction);
  document.addEventListener("touchstart", startMusicOnInteraction);
  document.addEventListener("keydown", startMusicOnInteraction);
}
