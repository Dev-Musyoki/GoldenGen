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

// ===== SHARED NAVBAR SEARCH =====
// The Products page owns live filtering; other pages route searches there.
const sharedSearchInput = document.getElementById("searchInput");
const sharedSearchButton = document.getElementById("searchBtn");
const isProductsPage = Boolean(document.getElementById("productsGrid"));

if (sharedSearchInput && !isProductsPage) {
  function routeSharedSearch() {
    const query = sharedSearchInput.value.trim();
    const destination = query
      ? `products.html?search=${encodeURIComponent(query)}`
      : "products.html";

    window.location.href = destination;
  }

  sharedSearchButton?.addEventListener("click", routeSharedSearch);

  sharedSearchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      routeSharedSearch();
    }
  });
}

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

// ===== SHARED CART HELPERS =====
const GOLDENGEN_CART_KEY = "goldengen_cart";

function ggReadCart() {
  try {
    const value = JSON.parse(localStorage.getItem(GOLDENGEN_CART_KEY));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function ggWriteCart(cart) {
  try {
    localStorage.setItem(GOLDENGEN_CART_KEY, JSON.stringify(cart));
  } catch (error) {
    console.warn("GoldenGen local storage error:", error);
  }
}

function ggUpdateCartCount() {
  const cartCountEl = document.getElementById("cartCount");
  if (!cartCountEl) return;

  const total = ggReadCart().reduce(
    (sum, item) => sum + (item.quantity || 1),
    0,
  );
  cartCountEl.textContent = total;
}

ggUpdateCartCount();

function ggFormatPrice(value) {
  return `Ksh ${Number(value).toLocaleString("en-KE")}`;
}

// ===== SHARED TOAST =====
let ggToastTimeout;

function ggShowToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");

  if (!toast || !toastMessage) return;

  toastMessage.textContent = message;
  toast.classList.add("visible");

  clearTimeout(ggToastTimeout);

  ggToastTimeout = setTimeout(() => {
    toast.classList.remove("visible");
  }, 2500);
}

// ===== SHARED CART DROPDOWN =====
function ggRenderCartDropdown() {
  const itemsEl = document.getElementById("cartDropdownItems");
  const totalEl = document.getElementById("cartDropdownTotal");

  if (!itemsEl || !totalEl) return;

  const cart = ggReadCart();

  if (cart.length === 0) {
    itemsEl.innerHTML = `<p class="cart-dropdown-empty">Your cart is empty.</p>`;
    totalEl.textContent = ggFormatPrice(0);
    return;
  }

  let total = 0;

  itemsEl.innerHTML = cart
    .map((item) => {
      if (!item.name) return "";

      total += (item.price || 0) * item.quantity;

      return `
        <div class="cart-dropdown-item">
          <img src="${item.image || ""}" alt="${item.name}" />
          <div>
            <p class="cart-dropdown-item-name">${item.name}</p>
            <p class="cart-dropdown-item-meta">
              ${ggFormatPrice(item.price || 0)} × ${item.quantity}
            </p>
          </div>
          <button
            type="button"
            class="cart-dropdown-item-remove"
            data-remove-cart-item="${item.id}"
            aria-label="Remove ${item.name}"
          >
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      `;
    })
    .join("");

  totalEl.textContent = ggFormatPrice(total);
}

function ggRemoveFromCart(productId) {
  const cart = ggReadCart().filter(
    (item) => String(item.id) !== String(productId),
  );

  ggWriteCart(cart);
  ggUpdateCartCount();
  ggRenderCartDropdown();
}

function ggToggleCartDropdown(forceState) {
  const dropdown = document.getElementById("cartDropdown");
  const toggle = document.getElementById("cartToggle");
  if (!dropdown) return;

  const shouldOpen = forceState ?? !dropdown.classList.contains("open");
  dropdown.classList.toggle("open", shouldOpen);
  toggle?.setAttribute("aria-expanded", String(shouldOpen));

  if (shouldOpen) {
    ggRenderCartDropdown();
  }
}

document.getElementById("cartToggle")?.addEventListener("click", (event) => {
  event.preventDefault();
  ggToggleCartDropdown();
});

document
  .getElementById("cartDropdownClose")
  ?.addEventListener("click", () => ggToggleCartDropdown(false));

document.addEventListener("click", (event) => {
  const widget = document.querySelector(".cart-widget");
  if (widget && !widget.contains(event.target)) {
    ggToggleCartDropdown(false);
  }
});

document
  .getElementById("cartDropdownItems")
  ?.addEventListener("click", (event) => {
    const removeBtn = event.target.closest("[data-remove-cart-item]");
    if (!removeBtn) return;

    ggRemoveFromCart(removeBtn.dataset.removeCartItem);
  });
