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

// ===== ADD TO CART + QUICK VIEW (HOMEPAGE) =====
const productsGridEl = document.getElementById("productsGrid");
const ggQuickView = document.getElementById("quickViewDialog");
const ggQuickViewContent = document.getElementById("quickViewContent");
const ggQuickViewClose = document.getElementById("quickViewCloseBtn");

function ggParsePrice(text) {
  return Number(String(text).replace(/[^0-9]/g, "")) || 0;
}

function ggAddToCart(card) {
  const cart = ggReadCart();
  const existingItem = cart.find(
    (item) => String(item.id) === String(card.dataset.id),
  );
  const name =
    card.querySelector(".product-name")?.textContent.trim() || "Product";

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: card.dataset.id,
      name,
      price: ggParsePrice(card.querySelector(".product-price")?.textContent),
      image: card.querySelector(".product-image")?.getAttribute("src") || "",
      quantity: 1,
    });
  }

  ggWriteCart(cart);
  ggUpdateCartCount();

  if (typeof window.animateCartCount === "function") {
    window.animateCartCount();
  }

  const announcer = document.getElementById("srAnnouncer");
  if (announcer) {
    announcer.textContent = "";
    setTimeout(() => {
      announcer.textContent = `${name} added to cart.`;
    }, 20);
  }

  ggShowToast(`${name} added to cart`);
}

let ggCurrentQuickViewCard = null;

function ggOpenQuickView(card) {
  if (!ggQuickView || !ggQuickViewContent) return;

  const name =
    card.querySelector(".product-name")?.textContent.trim() || "Product";
  const category = card.dataset.category
    ? card.dataset.category.charAt(0).toUpperCase() +
      card.dataset.category.slice(1)
    : "";
  const image = card.querySelector(".product-image")?.getAttribute("src") || "";
  const price = ggParsePrice(card.querySelector(".product-price")?.textContent);
  const oldPriceText = card
    .querySelector(".product-price-old")
    ?.textContent.trim();
  const ratingHTML = card.querySelector(".product-rating")?.innerHTML || "";
  const summary = card.dataset.summary || "";
  const warranty = card.dataset.warranty || "";
  const delivery = card.dataset.delivery || "";
  const sourceImage = card.querySelector(".product-image");

  const buildAndShow = () => {
    ggQuickViewContent.innerHTML = `
      <div class="quick-view-layout">
        <div class="quick-view-image">
          <img src="${image}" alt="${name}" style="view-transition-name: quick-view-image;" />
        </div>

        <div class="quick-view-details">
          <p class="quick-view-brand">${category}</p>
          <h2>${name}</h2>

          <div class="product-rating">${ratingHTML}</div>

          ${summary ? `<p class="quick-view-summary">${summary}</p>` : ""}

          ${
            warranty || delivery
              ? `
                <div class="quick-view-meta">
                  ${warranty ? `<span><i class="fa-solid fa-shield-halved"></i> ${warranty}</span>` : ""}
                  ${delivery ? `<span><i class="fa-solid fa-truck-fast"></i> ${delivery}</span>` : ""}
                </div>
              `
              : ""
          }

          <p class="quick-view-price">
            ${ggFormatPrice(price)}
            ${oldPriceText ? `<span class="product-price-old">${oldPriceText}</span>` : ""}
          </p>

          <div class="quick-view-actions">
            <button type="button" class="quick-view-add" data-quick-view-add="${card.dataset.id}">
              Add to cart
            </button>

            <a class="quick-view-wishlist" href="products.html?search=${encodeURIComponent(name)}">
              View full details
            </a>
          </div>
        </div>
      </div>
    `;

    if (typeof ggQuickView.showModal === "function") {
      ggQuickView.showModal();
    } else {
      ggQuickView.setAttribute("open", "");
    }

    if (sourceImage) {
      sourceImage.style.viewTransitionName = "";
    }
  };

  ggCurrentQuickViewCard = card;

  if (document.startViewTransition && sourceImage) {
    sourceImage.style.viewTransitionName = "quick-view-image";

    document.startViewTransition(buildAndShow);
  } else {
    buildAndShow();
  }
}

function ggCloseQuickView() {
  if (!ggQuickView) return;

  const sourceImage = ggCurrentQuickViewCard?.querySelector(".product-image");
  const modalImage = ggQuickViewContent?.querySelector("img");

  const runClose = () => {
    if (typeof ggQuickView.close === "function") {
      ggQuickView.close();
    } else {
      ggQuickView.removeAttribute("open");
    }

    if (sourceImage) {
      sourceImage.style.viewTransitionName = "quick-view-image";
    }
  };

  if (document.startViewTransition && sourceImage && modalImage) {
    const transition = document.startViewTransition(runClose);

    transition.finished.finally(() => {
      sourceImage.style.viewTransitionName = "";
      modalImage.style.viewTransitionName = "";
    });
  } else {
    runClose();
  }

  ggCurrentQuickViewCard = null;
}
if (productsGridEl) {
  productsGridEl.addEventListener("click", (event) => {
    const cartBtn = event.target.closest(".product-cart-btn");
    if (cartBtn) {
      const card = cartBtn.closest(".product-card");
      if (card && card.dataset.id) ggAddToCart(card);
      return;
    }

    const quickViewBtn = event.target.closest(".product-quick-view");
    if (quickViewBtn) {
      const card = quickViewBtn.closest(".product-card");
      if (card) ggOpenQuickView(card);
    }
  });
}

ggQuickViewClose?.addEventListener("click", ggCloseQuickView);

ggQuickView?.addEventListener("click", (event) => {
  if (event.target === ggQuickView) {
    ggCloseQuickView();
  }
});

ggQuickViewContent?.addEventListener("click", (event) => {
  const addBtn = event.target.closest("[data-quick-view-add]");
  if (!addBtn) return;

  const card = document.querySelector(
    `.product-card[data-id="${addBtn.dataset.quickViewAdd}"]`,
  );
  if (!card) return;

  ggAddToCart(card);
  ggCloseQuickView();
});

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
  if (!dropdown) return;

  const shouldOpen = forceState ?? !dropdown.classList.contains("open");
  dropdown.classList.toggle("open", shouldOpen);

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
