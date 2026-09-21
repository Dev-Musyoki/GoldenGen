// ===== GOLDENGEN — HOMEPAGE ONLY =====
// Loaded after shared.js. Only things unique to index.html live here.

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
  const startTime = performance.now();

  const suffix = target.replace(/[0-9]/g, "");
  const number = parseInt(target.replace(/[^0-9]/g, ""));

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * number);

    element.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".hero-stat-number");
        statNumbers.forEach((stat) => {
          animateCounter(stat, stat.textContent.trim());
        });
        statObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);

const heroStats = document.querySelector(".hero-stats");
if (heroStats) statObserver.observe(heroStats);

// ===== TYPEWRITER EFFECT =====
const typewriterEl = document.getElementById("typewriter");
const words = [
  "Premium Laptops",
  "Gaming Accessories",
  "Computer Peripherals",
  "Quality Tech Gear",
  "Keyboards & Mice",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1500);
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  const speed = isDeleting ? 60 : 100;
  setTimeout(typeWriter, speed);
}

if (typewriterEl) typeWriter();

// ===== PRODUCT CARDS SLIDE-UP ON SCROLL =====
const productCards = document.querySelectorAll(".product-card");

const cardObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 100);
        cardObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

productCards.forEach((card) => cardObserver.observe(card));

// ===== FILTER TABS =====
const filterTabs = document.querySelectorAll(".filter-tab");
const allCards = document.querySelectorAll(".product-card");

function showCards(filter) {
  let count = 0;
  allCards.forEach((card) => {
    const category = card.dataset.category;
    const matchesFilter = filter === "all" || category === filter;

    if (filter === "all") {
      if (count < 8) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("visible"), count * 80);
        count++;
      } else {
        card.style.display = "none";
      }
    } else {
      if (matchesFilter) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("visible"), count * 80);
        count++;
      } else {
        card.style.display = "none";
        card.classList.remove("visible");
      }
    }
  });
}

showCards("all");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    allCards.forEach((card) => card.classList.remove("visible"));

    showCards(tab.dataset.filter);
  });
});

// ===== VIDEO SECTION =====
const videoPlayBtn = document.getElementById("videoPlayBtn");
const videoPlayOverlay = document.getElementById("videoPlayOverlay");
const videoThumbnail = document.getElementById("videoThumbnail");
const videoPlayer = document.getElementById("videoPlayer");
const bgMusic = document.getElementById("bgMusic");

if (videoPlayBtn) {
  videoPlayBtn.addEventListener("click", () => {
    videoThumbnail.style.display = "none";
    videoPlayOverlay.style.display = "none";
    videoPlayer.classList.add("active");
    videoPlayer.play();

    setTimeout(() => {
      if (bgMusic) {
        bgMusic.currentTime = 0;
        bgMusic.volume = 0.3;
        bgMusic.play().catch((err) => console.log("Music blocked:", err));
      }
    }, 300);
  });

  videoPlayer.addEventListener("ended", () => {
    if (bgMusic) {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    }
    videoThumbnail.style.display = "block";
    videoPlayOverlay.style.display = "flex";
    videoPlayer.classList.remove("active");
  });

  videoPlayer.addEventListener("pause", () => {
    if (bgMusic) bgMusic.pause();
  });

  videoPlayer.addEventListener("play", () => {
    if (bgMusic) {
      bgMusic.volume = 0.3;
      bgMusic.play().catch((err) => console.log("Music blocked:", err));
    }
  });
}

// ===== AUDIO UNLOCK =====
let audioUnlocked = false;

document.addEventListener(
  "click",
  () => {
    if (!audioUnlocked && bgMusic) {
      bgMusic
        .play()
        .then(() => {
          bgMusic.pause();
          bgMusic.currentTime = 0;
          audioUnlocked = true;
        })
        .catch((err) => console.log(err));
    }
  },
  { once: true },
);
