// ===== GOLDENGEN — SHARED ACROSS ALL PAGES =====
// Loaded on every page, before the page-specific script.

// ===== LOADING OVERLAY =====
class LoadingOverlay {
  #overlay;
  #progress;
  #text;
  #interval;
  #isHidden = false;

  #messages = [
    "Loading amazing products...",
    "Setting up your experience...",
    "Almost ready...",
    "Welcome to GoldenGen!",
  ];

  constructor() {
    this.#overlay = document.getElementById("loadingOverlay");
    this.#progress = document.getElementById("loaderProgress");
    this.#text = document.getElementById("loaderText");

    if (!this.#overlay) {
      console.warn("Overlay not found!");
      return;
    }

    this.#init();
  }

  #setProgress(percent) {
    if (this.#progress) {
      this.#progress.style.width = `${Math.min(percent, 100)}%`;
    }
  }

  #setText(text) {
    if (this.#text) {
      this.#text.textContent = text;
    }
  }

  #unlockScroll() {
    document.body.style.overflow = "";
    document.body.style.overflowY = "";
    document.body.style.overflowX = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.overflowY = "";
    document.documentElement.style.overflowX = "";

    const bodyStyles = window.getComputedStyle(document.body);
    if (bodyStyles.overflowX === "hidden") {
      document.body.style.overflowX = "visible";
    }
    if (bodyStyles.overflowY === "hidden") {
      document.body.style.overflowY = "auto";
    }
  }

  #hide() {
    if (this.#isHidden) return;
    this.#isHidden = true;

    if (this.#interval) clearInterval(this.#interval);

    this.#unlockScroll();

    if (this.#overlay) {
      this.#overlay.classList.add("hidden");
      this.#overlay.style.transition = "opacity 0.6s ease";
      this.#overlay.style.opacity = "0";

      setTimeout(() => {
        if (this.#overlay?.parentNode) {
          this.#overlay.parentNode.removeChild(this.#overlay);
        }
      }, 650);
    }
  }

  #simulateProgress() {
    let progress = 0;
    let messageIndex = 0;

    const INCREMENT = 20;
    const INTERVAL_MS = 400;

    this.#interval = setInterval(() => {
      progress += INCREMENT;
      this.#setProgress(progress);

      if (progress >= 40 && messageIndex === 0) {
        messageIndex = 1;
        this.#setText(this.#messages[1]);
      }

      if (progress >= 70 && messageIndex === 1) {
        messageIndex = 2;
        this.#setText(this.#messages[2]);
      }

      if (progress >= 100) {
        this.#setText(this.#messages[3]);
        this.#setProgress(100);
        clearInterval(this.#interval);
        setTimeout(() => this.#hide(), 600);
      }
    }, INTERVAL_MS);
  }

  #init() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    this.#simulateProgress();

    setTimeout(() => this.#hide(), 5000);
  }
}

const loader = new LoadingOverlay();

// ===== SYSTEM DARK MODE PREFERENCE (first visit only) =====
(function applySystemPreference() {
  const saved = localStorage.getItem("goldengen_darkmode");

  if (!saved) {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (prefersDark) {
      document.body.classList.add("dark-mode");
    }
  } else if (saved === "true") {
    document.body.classList.add("dark-mode");
  }
})();

// ===== SCROLL ANIMATIONS =====
class ScrollAnimator {
  #observer;
  #selectors = [".reveal", ".reveal-left", ".reveal-right", ".reveal-scale"];

  constructor() {
    this.#init();
  }

  #createObserver() {
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            this.#observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      },
    );
  }

  #observeElements() {
    const elements = document.querySelectorAll(this.#selectors.join(", "));
    elements.forEach((el) => this.#observer.observe(el));
  }

  #init() {
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(this.#selectors.join(", "))
        .forEach((el) => el.classList.add("visible"));
      return;
    }

    this.#observer = this.#createObserver();
    this.#observeElements();
  }
}

const scrollAnimator = new ScrollAnimator();

// ===== ANNOUNCEMENT BAR =====
const announcements = [
  `<img src="https://flagcdn.com/16x12/ke.png" alt="Kenya flag" style="display:inline-block; vertical-align:middle; margin-right:6px;"> Delivery countrywide — We deliver across Kenya!`,
  "📧 sales@GoldenGen.co.ke — Reach us anytime",
  `<i class="fa-brands fa-whatsapp"></i> Order via WhatsApp or Call 0795 044 498`,
  "🛡️ Warranty Included — 1 Year New, 6 Months Refurbished",
];

let currentAnnouncement = 0;
const announcementText = document.getElementById("announcementText");
let intervalId;

function cycleAnnouncements() {
  if (!announcementText) return;

  announcementText.classList.add("hide");

  setTimeout(() => {
    currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
    announcementText.innerHTML = announcements[currentAnnouncement];
    announcementText.classList.remove("hide");
  }, 650);
}

if (announcementText) {
  intervalId = setInterval(cycleAnnouncements, 4000);

  announcementText.addEventListener("mouseenter", () =>
    clearInterval(intervalId),
  );
  announcementText.addEventListener("mouseleave", () => {
    intervalId = setInterval(cycleAnnouncements, 4000);
  });
}

// ===== DARK MODE =====
class DarkMode {
  #KEY = "goldengen_darkmode";
  #btn = document.getElementById("darkModeToggle");
  #icon = document.querySelector("#darkModeToggle i");

  constructor() {
    this.#init();
  }

  get isEnabled() {
    return localStorage.getItem(this.#KEY) === "true";
  }

  enable() {
    document.body.classList.add("dark-mode");
    localStorage.setItem(this.#KEY, "true");
    this.#updateIcon(true);
    this.#announceChange("Dark mode enabled");
  }

  disable() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem(this.#KEY, "false");
    this.#updateIcon(false);
    this.#announceChange("Light mode enabled");
  }

  toggle() {
    this.isEnabled ? this.disable() : this.enable();
  }

  #updateIcon(isDark) {
    if (!this.#icon) return;
    this.#icon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  #announceChange(message) {
    const announcer = document.getElementById("srAnnouncer");
    if (announcer) announcer.textContent = message;
  }

  #init() {
    if (this.isEnabled) this.enable();

    if (this.#btn) {
      this.#btn.addEventListener("click", () => this.toggle());
    }

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        if (!localStorage.getItem(this.#KEY)) {
          e.matches ? this.enable() : this.disable();
        }
      });
  }
}

const darkMode = new DarkMode();

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const expanded =
      hamburger.getAttribute("aria-expanded") === "true" ? false : true;
    hamburger.setAttribute("aria-expanded", expanded);
    navLinks.classList.toggle("active");

    const icon = hamburger.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars", !expanded);
      icon.classList.toggle("fa-times", expanded);
    }
  });

  document.addEventListener("click", (e) => {
    if (
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target) &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      const icon = hamburger.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    }
  });

  navLinks.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      const icon = hamburger.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });
}

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector(".main-nav");
if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 10);
  });
}

// ===== CART COUNT BOUNCE =====
const cartCount = document.getElementById("cartCount");
if (cartCount) {
  window.animateCartCount = function () {
    cartCount.classList.add("bounce");
    setTimeout(() => cartCount.classList.remove("bounce"), 400);
  };
}
