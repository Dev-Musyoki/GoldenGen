// ===== COUNTER ANIMATION =====
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function animateCounter(element, target, duration = 2000) {
  if (prefersReducedMotion) {
    element.textContent = target;
    return;
  }

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

const heroStats = document.querySelector(".hero-stats");
if ("IntersectionObserver" in window) {
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll(
            ".hero-stat-number",
          );
          statNumbers.forEach((stat) => {
            animateCounter(stat, stat.textContent.trim());
          });
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  if (heroStats) statObserver.observe(heroStats);
} else {
  // Older browsers should show the final values rather than waiting for an
  // observer API they do not support.
  heroStats?.querySelectorAll(".hero-stat-number").forEach((stat) => {
    animateCounter(stat, stat.textContent.trim());
  });
}

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

if (typewriterEl) {
  // Reduced-motion users still receive the complete message, without the
  // continuous typing/deleting loop competing with the shopping task.
  if (prefersReducedMotion) {
    typewriterEl.textContent = words[0];
  } else {
    typeWriter();
  }
}

// ===== PRODUCT CARDS SLIDE-UP ON SCROLL =====
const productCards = document.querySelectorAll(".product-card");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  // Without the observer, never leave cards at their CSS-hidden initial state.
  productCards.forEach((card) => card.classList.add("visible"));
} else {
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
}

// ===== FILTER TABS =====
const filterTabs = document.querySelectorAll(".filter-tab");
const allCards = document.querySelectorAll(".product-card");
const filterResultsStatus = document.getElementById("featuredProductsStatus");

// Homepage cards are hand-authored HTML for now. Normalize their interactive
// controls here so keyboard and assistive-technology behavior stays consistent
// even when a future card forgets a type or accessible label.
function enhanceFeaturedActions() {
  allCards.forEach((card) => {
    const name = card.querySelector(".product-name")?.textContent.trim();
    if (!name) return;

    const quickViewButton = card.querySelector(".product-quick-view");
    const cartButton = card.querySelector(".product-cart-btn");

    quickViewButton?.setAttribute("type", "button");
    quickViewButton?.setAttribute("aria-label", `View details for ${name}`);
    cartButton?.setAttribute("type", "button");
    cartButton?.setAttribute("aria-label", `Add ${name} to cart`);
  });
}

enhanceFeaturedActions();

// Featured cards already carry warranty and delivery data in HTML data attributes.
// This keeps the homepage markup compact while making decision-critical trust signals
// visible before a customer opens Quick View.
function addFeaturedTrustSignals() {
  allCards.forEach((card) => {
    const warranty = card.dataset.warranty;
    const delivery = card.dataset.delivery;
    const productInfo = card.querySelector(".product-info");

    if (!productInfo || (!warranty && !delivery)) return;
    if (productInfo.querySelector(".product-trust-strip")) return;

    const trustStrip = document.createElement("div");
    trustStrip.className = "product-trust-strip";

    [
      { label: warranty, icon: "fa-shield-halved" },
      { label: delivery, icon: "fa-truck-fast" },
    ].forEach(({ label, icon }) => {
      if (!label) return;

      const signal = document.createElement("span");
      const iconElement = document.createElement("i");
      iconElement.className = `fa-solid ${icon}`;
      iconElement.setAttribute("aria-hidden", "true");
      signal.append(iconElement, document.createTextNode(label));
      trustStrip.append(signal);
    });

    productInfo.append(trustStrip);
  });
}

addFeaturedTrustSignals();

function updateCategorySummary() {
  const summary = window.GOLDENGEN_CATEGORY_SUMMARY;

  if (!summary) return;

  document.querySelectorAll("[data-category-summary]").forEach((element) => {
    const category = element.dataset.categorySummary;
    const count = summary[category];

    if (Number.isFinite(count)) {
      element.textContent = `${count} products`;
    }
  });
}

updateCategorySummary();

// Keep the homepage intentionally lightweight: show eight featured cards for “All”,
// but reveal every matching card when a customer chooses a specific category.
function showCards(filter) {
  let count = 0;
  allCards.forEach((card) => {
    const category = card.dataset.category;
    const matchesFilter = filter === "all" || category === filter;

    if (filter === "all") {
      if (count < 8) {
        card.style.display = "block";
        if (prefersReducedMotion) {
          card.classList.add("visible");
        } else {
          setTimeout(() => card.classList.add("visible"), count * 80);
        }
        count++;
      } else {
        card.style.display = "none";
      }
    } else {
      if (matchesFilter) {
        card.style.display = "block";
        if (prefersReducedMotion) {
          card.classList.add("visible");
        } else {
          setTimeout(() => card.classList.add("visible"), count * 80);
        }
        count++;
      } else {
        card.style.display = "none";
        card.classList.remove("visible");
      }
    }
  });

  // Announce the result count so filtering is understandable without relying on sight.
  if (filterResultsStatus) {
    const activeTab = document.querySelector(`.filter-tab[data-filter="${filter}"]`);
    // “All” is a control label, not a product category; use customer language
    // in the live announcement so the result is immediately understandable.
    const categoryLabel =
      filter === "all" ? "products" : activeTab?.textContent.trim() || "products";
    const visibleCount = filter === "all" ? Math.min(count, 8) : count;
    filterResultsStatus.textContent =
      visibleCount === 0
        ? `No featured ${categoryLabel.toLowerCase()} found.`
        : `Showing ${visibleCount} featured ${categoryLabel.toLowerCase()}.`;
  }
}

showCards("all");

filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((t) => {
      t.classList.remove("active");
      t.setAttribute("aria-pressed", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-pressed", "true");

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
  // Homepage cards use the same cart contract as catalogue cards, including
  // string-safe IDs for future non-numeric product sources.
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
let ggCurrentQuickViewTrigger = null;

function ggOpenQuickView(card) {
  // Quick View reads the card's data attributes so visible card content and its
  // expanded summary cannot drift into two separate product representations.
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
    // Escape card-derived values before inserting them into the dialog template.
    // The rating icons are retained as trusted markup because they come from the
    // hand-authored card structure, not from product text data.
    ggQuickViewContent.innerHTML = `
      <div class="quick-view-layout">
        <div class="quick-view-image">
          <img src="${ggEscapeHTML(image)}" alt="${ggEscapeHTML(name)}" style="view-transition-name: quick-view-image;" />
        </div>

        <div class="quick-view-details">
          <p class="quick-view-brand">${ggEscapeHTML(category)}</p>
          <h2 id="quickViewTitle">${ggEscapeHTML(name)}</h2>

          <div class="product-rating">${ratingHTML}</div>

          ${summary ? `<p class="quick-view-summary">${ggEscapeHTML(summary)}</p>` : ""}

          ${
            warranty || delivery
              ? `
                <div class="quick-view-meta">
                  ${warranty ? `<span><i class="fa-solid fa-shield-halved"></i> ${ggEscapeHTML(warranty)}</span>` : ""}
                  ${delivery ? `<span><i class="fa-solid fa-truck-fast"></i> ${ggEscapeHTML(delivery)}</span>` : ""}
                </div>
              `
              : ""
          }

          <p class="quick-view-price">
            ${ggFormatPrice(price)}
            ${oldPriceText ? `<span class="product-price-old">${ggEscapeHTML(oldPriceText)}</span>` : ""}
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

    // Move focus into the dialog after it becomes modal; otherwise keyboard
    // users can remain on the card behind the backdrop with no clear context.
    requestAnimationFrame(() => ggQuickViewClose?.focus());

    if (sourceImage) {
      sourceImage.style.viewTransitionName = "";
    }
  };

  ggCurrentQuickViewCard = card;
  ggCurrentQuickViewTrigger = card.querySelector(".product-quick-view");

  if (document.startViewTransition && sourceImage && !prefersReducedMotion) {
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
  const trigger = ggCurrentQuickViewTrigger;

  const restoreFocus = () => {
    // Return focus to the control that opened the dialog, preserving the user's
    // place in the product grid after the modal interaction ends.
    trigger?.focus();
    ggCurrentQuickViewCard = null;
    ggCurrentQuickViewTrigger = null;
  };

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

  if (
    document.startViewTransition &&
    sourceImage &&
    modalImage &&
    !prefersReducedMotion
  ) {
    const transition = document.startViewTransition(runClose);

    transition.finished.finally(() => {
      sourceImage.style.viewTransitionName = "";
      modalImage.style.viewTransitionName = "";
      restoreFocus();
    });
  } else {
    runClose();
    restoreFocus();
  }
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

// Native dialog Escape handling is routed through the same close path so focus
// restoration and the image transition cleanup happen consistently.
ggQuickView?.addEventListener("cancel", (event) => {
  event.preventDefault();
  ggCloseQuickView();
});

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
