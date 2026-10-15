// ===== GOLDENGEN — PRODUCTS PAGE ONLY =====
// Loaded after shared.js.
// Shared navigation, loading, dark mode and announcement behavior
// remain inside shared.js.

document.addEventListener("DOMContentLoaded", () => {
  // ===== DOM ELEMENTS =====
  const el = {
    grid: document.getElementById("productsGrid"),
    empty: document.getElementById("productsEmpty"),
    productCount: document.getElementById("productCount"),
    toolbarCount: document.getElementById("toolbarCount"),

    search: document.getElementById("searchInput"),
    searchBtn: document.getElementById("searchBtn"),

    sort: document.getElementById("sortSelect"),

    gridBtn: document.getElementById("gridViewBtn"),
    listBtn: document.getElementById("listViewBtn"),

    filters: document.getElementById("productsFilters"),
    filterToggle: document.getElementById("filterToggleBtn"),
    filtersClose: document.getElementById("filtersCloseBtn"),
    filtersBackdrop: document.getElementById("filtersBackdrop"),
    filtersApply: document.getElementById("filtersApplyBtn"),
    filtersReset: document.getElementById("filtersResetBtn"),
    emptyReset: document.getElementById("emptyResetBtn"),

    categoryList: document.getElementById("categoryFilterList"),
    useCaseList: document.getElementById("useCaseFilterList"),
    brandList: document.getElementById("brandFilterList"),
    brandSearch: document.getElementById("brandSearchInput"),

    minPrice: document.getElementById("minPriceInput"),
    maxPrice: document.getElementById("maxPriceInput"),
    maxRange: document.getElementById("maxPriceRange"),
    priceOutput: document.getElementById("priceRangeOutput"),

    rating: document.getElementById("ratingFilter"),
    inStock: document.getElementById("inStockFilter"),

    activeFilters: document.getElementById("activeFilters"),
    activeChips: document.getElementById("activeFilterChips"),
    activeCount: document.getElementById("activeFilterCount"),
    clearAll: document.getElementById("clearAllFiltersBtn"),

    loadMoreSection: document.getElementById("loadMoreSection"),
    loadMoreBtn: document.getElementById("loadMoreBtn"),
    loadMoreCount: document.getElementById("loadMoreCount"),
    progress: document.getElementById("productsProgress"),
    progressFill: document.getElementById("productsProgressFill"),

    quickView: document.getElementById("quickViewDialog"),
    quickViewContent: document.getElementById("quickViewContent"),
    quickViewClose: document.getElementById("quickViewCloseBtn"),

    chooseDialog: document.getElementById("chooseDialog"),
    chooseToggle: document.getElementById("chooseToggleBtn"),
    chooseClose: document.getElementById("chooseDialogClose"),
    chooseForm: document.getElementById("chooseForm"),
    chooseResults: document.getElementById("chooseResults"),

    compareToggle: document.getElementById("compareToggleBtn"),
    compareCount: document.getElementById("compareCount"),
    compareHint: document.getElementById("compareHint"),
    compareDialog: document.getElementById("compareDialog"),
    compareClose: document.getElementById("compareDialogClose"),
    compareContent: document.getElementById("compareContent"),

    cartCount: document.getElementById("cartCount"),
    announcer: document.getElementById("srAnnouncer"),
    backToTop: document.getElementById("backToTop"),
  };

  if (!el.grid) {
    console.warn("GoldenGen: #productsGrid was not found.");
    return;
  }

  // ===== SETTINGS =====
  const PRODUCTS_PER_PAGE = 12;

  const CART_KEY = "goldengen_cart";
  const WISHLIST_KEY = "goldengen_wishlist";
  const COMPARISON_KEY = "goldengen_comparison";
  const VIEW_KEY = "goldengen_product_view";
  const SORT_KEY = "goldengen_product_sort";

  // ===== DEMO PRODUCT CATALOGUE =====
  // Add the real images later in:
  // images/products/
  //
  // Missing files automatically receive a generated
  // GoldenGen image placeholder.

  const PRODUCTS = [
    {
      id: 1,
      sku: "GG-LAP-001",
      name: 'Apple MacBook Air M3 13"',
      brand: "Apple",
      category: "laptops",
      subcategory: "Ultrabook",
      price: 169000,
      oldPrice: 179000,
      image: "images/products/apple-macbook-air-m3.jpg",
      rating: 4.8,
      reviews: 184,
      badge: "new",
      badgeText: "New",
      stock: 7,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Thin and lightweight Apple laptop with the M3 chip, bright Liquid Retina display and all-day battery life.",
      specs: {
        processor: "Apple M3, 8-core CPU",
        memory: "16GB unified memory",
        storage: "512GB SSD",
        graphics: "8-core GPU",
        display: '13.6" Liquid Retina, 2560 × 1664',
        battery: "Up to 18 hours",
        weight: "1.24 kg",
        operatingSystem: "macOS",
        ports: "2× Thunderbolt / USB 4, MagSafe 3",
        expandability: "Memory is not user-upgradeable",
      },
      suitableFor: ["Student", "Developer", "Business", "Creative work"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-07-28",
      featuredRank: 1,
    },
    {
      id: 2,
      sku: "GG-LAP-002",
      name: 'Dell XPS 15 9530 15.6"',
      brand: "Dell",
      category: "laptops",
      subcategory: "Creator laptop",
      price: 228000,
      oldPrice: 245000,
      image: "images/products/dell-xps-15-9530.jpg",
      rating: 4.7,
      reviews: 126,
      badge: "sale",
      badgeText: "-7%",
      stock: 5,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Free Nairobi delivery",
      summary:
        "Premium performance laptop built for demanding creative work, productivity and high-resolution media.",
      specs: {
        processor: "Intel Core i7-13700H",
        memory: "32GB DDR5 RAM",
        storage: "1TB NVMe SSD",
        graphics: "NVIDIA RTX 4060, 8GB",
        display: '15.6" 3.5K OLED touch display',
        battery: "Up to 8 hours",
        weight: "1.92 kg",
        operatingSystem: "Windows 11",
        ports: "Thunderbolt 4, USB-A, HDMI, SD card",
        expandability: "SSD upgradeable",
      },
      suitableFor: ["Developer", "Creative work", "Business"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-06-12",
      featuredRank: 2,
    },
    {
      id: 3,
      sku: "GG-LAP-003",
      name: "HP Spectre x360 14 OLED",
      brand: "HP",
      category: "laptops",
      subcategory: "2-in-1 laptop",
      price: 198000,
      oldPrice: 214000,
      image: "images/products/hp-spectre-x360-14.jpg",
      rating: 4.6,
      reviews: 91,
      badge: "hot",
      badgeText: "Popular",
      stock: 4,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Premium convertible laptop with an OLED touch display, flexible hinge and powerful everyday performance.",
      specs: {
        processor: "Intel Core Ultra 7 155H",
        memory: "16GB LPDDR5X RAM",
        storage: "1TB NVMe SSD",
        graphics: "Intel Arc graphics",
        display: '14" 2.8K OLED touch display',
        battery: "Up to 12 hours",
        weight: "1.44 kg",
        operatingSystem: "Windows 11",
        ports: "2× Thunderbolt 4, USB-A, HDMI",
        expandability: "SSD upgradeable",
      },
      suitableFor: ["Student", "Developer", "Business", "Creative work"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-05-20",
      featuredRank: 3,
    },
    {
      id: 4,
      sku: "GG-LAP-004",
      name: "Lenovo ThinkPad X1 Carbon Gen 12",
      brand: "Lenovo",
      category: "laptops",
      subcategory: "Business laptop",
      price: 235000,
      oldPrice: null,
      image: "images/products/lenovo-thinkpad-x1-carbon-gen12.jpg",
      rating: 4.8,
      reviews: 143,
      badge: "bestseller",
      badgeText: "Bestseller",
      stock: 6,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Flagship business notebook with a durable carbon-fibre chassis, excellent keyboard and enterprise security.",
      specs: {
        processor: "Intel Core Ultra 7 155U",
        memory: "32GB LPDDR5X RAM",
        storage: "1TB NVMe SSD",
        graphics: "Intel integrated graphics",
        display: '14" 2.8K OLED display',
        battery: "Up to 15 hours",
        weight: "1.09 kg",
        operatingSystem: "Windows 11 Pro",
        ports: "2× Thunderbolt 4, USB-A, HDMI",
        expandability: "Memory is not user-upgradeable",
      },
      suitableFor: ["Business", "Developer", "Student"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-04-18",
      featuredRank: 4,
    },
    {
      id: 5,
      sku: "GG-LAP-005",
      name: "ASUS Zenbook 14 OLED",
      brand: "ASUS",
      category: "laptops",
      subcategory: "Ultrabook",
      price: 145000,
      oldPrice: 158000,
      image: "images/products/asus-zenbook-14-oled.jpg",
      rating: 4.6,
      reviews: 108,
      badge: "sale",
      badgeText: "-8%",
      stock: 9,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Compact premium laptop with an OLED display, strong battery life and a travel-friendly aluminium design.",
      specs: {
        processor: "AMD Ryzen 7 8840HS",
        memory: "16GB LPDDR5X RAM",
        storage: "1TB NVMe SSD",
        graphics: "AMD Radeon 780M",
        display: '14" 2.8K OLED display',
        battery: "Up to 15 hours",
        weight: "1.28 kg",
        operatingSystem: "Windows 11",
        ports: "USB4, USB-A, HDMI, microSD",
        expandability: "Memory is not user-upgradeable",
      },
      suitableFor: ["Student", "Developer", "Business", "Creative work"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-07-02",
      featuredRank: 5,
    },
    {
      id: 6,
      sku: "GG-LAP-006",
      name: 'Acer Aspire 5 15.6"',
      brand: "Acer",
      category: "laptops",
      subcategory: "Everyday laptop",
      price: 78000,
      oldPrice: 85000,
      image: "images/products/acer-aspire-5.jpg",
      rating: 4.3,
      reviews: 219,
      badge: "sale",
      badgeText: "-8%",
      stock: 12,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Dependable everyday laptop for school, office work, browsing and light creative tasks.",
      specs: {
        processor: "Intel Core i5-1235U",
        memory: "16GB DDR4 RAM",
        storage: "512GB NVMe SSD",
        graphics: "Intel Iris Xe graphics",
        display: '15.6" Full HD IPS display',
        battery: "Up to 8 hours",
        weight: "1.78 kg",
        operatingSystem: "Windows 11",
        ports: "USB-C, 3× USB-A, HDMI",
        expandability: "RAM and SSD upgradeable",
      },
      suitableFor: ["Student", "Business", "Everyday use"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-03-08",
      featuredRank: 8,
    },
    {
      id: 7,
      sku: "GG-LAP-007",
      name: "HP EliteBook 840 G10",
      brand: "HP",
      category: "laptops",
      subcategory: "Business laptop",
      price: 98000,
      oldPrice: 118000,
      image: "images/products/hp-elitebook-840-g10.jpg",
      rating: 4.5,
      reviews: 77,
      badge: "sale",
      badgeText: "-17%",
      stock: 8,
      condition: "refurbished",
      warranty: "6-month warranty",
      delivery: "Quality checked",
      summary:
        "Professionally refurbished business laptop with a premium build, strong security and dependable performance.",
      specs: {
        processor: "Intel Core i7-1355U",
        memory: "16GB DDR5 RAM",
        storage: "512GB NVMe SSD",
        graphics: "Intel Iris Xe graphics",
        display: '14" Full HD IPS display',
        battery: "Up to 10 hours",
        weight: "1.36 kg",
        operatingSystem: "Windows 11 Pro",
        ports: "Thunderbolt 4, USB-A, HDMI",
        expandability: "SSD upgradeable",
      },
      suitableFor: ["Business", "Student", "Developer"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-07-19",
      featuredRank: 6,
    },
    {
      id: 8,
      sku: "GG-LAP-008",
      name: "Lenovo ThinkPad T14 Gen 3",
      brand: "Lenovo",
      category: "laptops",
      subcategory: "Business laptop",
      price: 82000,
      oldPrice: 96000,
      image: "images/products/lenovo-thinkpad-t14-gen3.jpg",
      rating: 4.4,
      reviews: 164,
      badge: "sale",
      badgeText: "-15%",
      stock: 0,
      condition: "refurbished",
      warranty: "6-month warranty",
      delivery: "Quality checked",
      summary:
        "Refurbished ThinkPad with a sturdy business chassis, excellent keyboard and versatile office performance.",
      specs: {
        processor: "AMD Ryzen 5 Pro 6650U",
        memory: "16GB DDR4 RAM",
        storage: "512GB NVMe SSD",
        graphics: "AMD Radeon 660M",
        display: '14" Full HD IPS display',
        battery: "Up to 9 hours",
        weight: "1.46 kg",
        operatingSystem: "Windows 11 Pro",
        ports: "USB-C, USB-A, HDMI, RJ45",
        expandability: "RAM and SSD upgradeable",
      },
      suitableFor: ["Business", "Student", "Everyday use"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-02-14",
      featuredRank: 11,
    },
    {
      id: 9,
      sku: "GG-MON-001",
      name: 'Samsung Odyssey G5 27" QHD',
      brand: "Samsung",
      category: "monitors",
      subcategory: "Gaming monitor",
      price: 52000,
      oldPrice: 59000,
      image: "images/products/samsung-odyssey-g5-27.jpg",
      rating: 4.6,
      reviews: 236,
      badge: "hot",
      badgeText: "Popular",
      stock: 10,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Fragile-item delivery",
      summary:
        "Immersive QHD gaming monitor with a fast refresh rate, curved panel and smooth adaptive gameplay.",
      suitableFor: ["Gaming", "Creative work"],
      specs: {
        displaySize: '27"',
        resolution: "2560 × 1440 QHD",
        refreshRate: "165Hz",
        brightness: "300 nits",
        responseTime: "1ms",
        panelType: "VA curved",
        mounting: "VESA 75 × 75mm",
        eyeCare: "Flicker-free and low-blue-light mode",
      },
      createdAt: "2026-05-11",
      featuredRank: 7,
    },
    {
      id: 10,
      sku: "GG-MON-002",
      name: 'LG UltraGear 27GN800 27"',
      brand: "LG",
      category: "monitors",
      subcategory: "Gaming monitor",
      price: 61000,
      oldPrice: 68000,
      image: "images/products/lg-ultragear-27gn800.jpg",
      rating: 4.7,
      reviews: 191,
      badge: "sale",
      badgeText: "-10%",
      stock: 6,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Fragile-item delivery",
      summary:
        "Fast IPS gaming monitor with sharp QHD resolution, responsive motion and wide viewing angles.",
      suitableFor: ["Gaming", "Creative work"],
      specs: {
        displaySize: '27"',
        resolution: "2560 × 1440 QHD",
        refreshRate: "144Hz",
        brightness: "350 nits",
        responseTime: "1ms",
        panelType: "IPS",
        mounting: "VESA 100 × 100mm",
        eyeCare: "Flicker-free and reader mode",
      },
      createdAt: "2026-04-28",
      featuredRank: 9,
    },
    {
      id: 11,
      sku: "GG-MON-003",
      name: 'Dell P2422H 24" IPS',
      brand: "Dell",
      category: "monitors",
      subcategory: "Office monitor",
      price: 34000,
      oldPrice: null,
      image: "images/products/dell-p2422h-24.jpg",
      rating: 4.5,
      reviews: 312,
      badge: "bestseller",
      badgeText: "Bestseller",
      stock: 15,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Comfortable productivity monitor with an IPS panel, adjustable stand and practical office connectivity.",
      suitableFor: ["Business", "Student", "Everyday use"],
      specs: {
        displaySize: '24"',
        resolution: "1920 × 1080 Full HD",
        refreshRate: "60Hz",
        brightness: "250 nits",
        responseTime: "8ms",
        panelType: "IPS",
        mounting: "VESA 100 × 100mm",
        eyeCare: "Flicker-free and ComfortView",
      },
      createdAt: "2026-01-24",
      featuredRank: 12,
    },
    {
      id: 12,
      sku: "GG-MON-004",
      name: 'Samsung ViewFinity S6 34" UltraWide',
      brand: "Samsung",
      category: "monitors",
      subcategory: "Ultrawide monitor",
      price: 92000,
      oldPrice: 105000,
      image: "images/products/samsung-viewfinity-s6-34.jpg",
      rating: 4.7,
      reviews: 88,
      badge: "new",
      badgeText: "New",
      stock: 3,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Fragile-item delivery",
      summary:
        "Wide productivity display for multitasking, content timelines and immersive desktop workflows.",
      suitableFor: ["Business", "Creative work"],
      specs: {
        displaySize: '34"',
        resolution: "3440 × 1440 UltraWide",
        refreshRate: "100Hz",
        brightness: "300 nits",
        responseTime: "5ms",
        panelType: "IPS",
        mounting: "VESA 100 × 100mm",
        eyeCare: "Flicker-free and reader mode",
      },
      createdAt: "2026-07-30",
      featuredRank: 10,
    },
    {
      id: 13,
      sku: "GG-ACC-001",
      name: "Logitech MX Master 3S",
      brand: "Logitech",
      category: "accessories",
      subcategory: "Wireless mouse",
      price: 14500,
      oldPrice: 16500,
      image: "images/products/logitech-mx-master-3s.jpg",
      rating: 4.9,
      reviews: 486,
      badge: "bestseller",
      badgeText: "Bestseller",
      stock: 24,
      condition: "new",
      warranty: "6-month warranty",
      delivery: "Countrywide delivery",
      summary:
        "Premium productivity mouse with quiet clicks, precise tracking and multi-device control.",
      createdAt: "2026-03-16",
      featuredRank: 13,
    },
    {
      id: 14,
      sku: "GG-ACC-002",
      name: "Keychron K2 Pro Mechanical Keyboard",
      brand: "Keychron",
      category: "accessories",
      subcategory: "Mechanical keyboard",
      price: 13500,
      oldPrice: 15000,
      image: "images/products/keychron-k2-pro.jpg",
      rating: 4.7,
      reviews: 267,
      badge: "hot",
      badgeText: "Popular",
      stock: 18,
      condition: "new",
      warranty: "6-month warranty",
      delivery: "Countrywide delivery",
      summary:
        "Compact wireless mechanical keyboard with flexible connectivity and a comfortable typing feel.",
      createdAt: "2026-06-08",
      featuredRank: 14,
    },
    {
      id: 15,
      sku: "GG-ACC-003",
      name: "Sony WH-1000XM5 Headphones",
      brand: "Sony",
      category: "accessories",
      subcategory: "Wireless headphones",
      price: 47000,
      oldPrice: 52000,
      image: "images/products/sony-wh-1000xm5.jpg",
      rating: 4.8,
      reviews: 524,
      badge: "sale",
      badgeText: "-10%",
      stock: 11,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Flagship wireless headphones with advanced noise cancellation, clear calls and rich sound.",
      createdAt: "2026-02-27",
      featuredRank: 15,
    },
    {
      id: 16,
      sku: "GG-ACC-004",
      name: "Anker 737 Power Bank 24,000mAh",
      brand: "Anker",
      category: "accessories",
      subcategory: "Power bank",
      price: 24500,
      oldPrice: 28000,
      image: "images/products/anker-737-power-bank.jpg",
      rating: 4.7,
      reviews: 173,
      badge: "sale",
      badgeText: "-13%",
      stock: 14,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "High-capacity fast-charging power bank designed for laptops, phones and travel-heavy workflows.",
      createdAt: "2026-05-30",
      featuredRank: 17,
    },
    {
      id: 17,
      sku: "GG-ACC-005",
      name: "SanDisk Extreme Portable SSD 1TB",
      brand: "SanDisk",
      category: "accessories",
      subcategory: "External storage",
      price: 18500,
      oldPrice: 21000,
      image: "images/products/sandisk-extreme-portable-ssd-1tb.jpg",
      rating: 4.8,
      reviews: 351,
      badge: "sale",
      badgeText: "-12%",
      stock: 20,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Compact high-speed external SSD for backups, large project files and portable media libraries.",
      createdAt: "2026-01-11",
      featuredRank: 16,
    },
    {
      id: 18,
      sku: "GG-ACC-006",
      name: "TP-Link Archer AX55 Wi-Fi 6 Router",
      brand: "TP-Link",
      category: "accessories",
      subcategory: "Networking",
      price: 14500,
      oldPrice: null,
      image: "images/products/tp-link-archer-ax55.jpg",
      rating: 4.5,
      reviews: 204,
      badge: "new",
      badgeText: "New",
      stock: 16,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Fast Wi-Fi 6 router for busy homes, small offices, streaming and multiple connected devices.",
      createdAt: "2026-07-12",
      featuredRank: 18,
    },
    {
      id: 19,
      sku: "GG-GAM-001",
      name: "ASUS ROG Zephyrus G14",
      brand: "ASUS",
      category: "gaming",
      subcategory: "Gaming laptop",
      price: 285000,
      oldPrice: 309000,
      image: "images/products/asus-rog-zephyrus-g14.jpg",
      rating: 4.8,
      reviews: 197,
      badge: "hot",
      badgeText: "Popular",
      stock: 4,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Insured delivery",
      summary:
        "Compact high-performance gaming laptop balancing powerful graphics, portability and premium display quality.",
      specs: {
        processor: "AMD Ryzen 9 8945HS",
        memory: "32GB DDR5 RAM",
        storage: "1TB NVMe SSD",
        graphics: "NVIDIA RTX 4070, 8GB",
        display: '14" QHD+ 165Hz display',
        battery: "Up to 10 hours",
        weight: "1.50 kg",
        operatingSystem: "Windows 11",
        ports: "USB4, HDMI, USB-A, microSD",
        expandability: "SSD upgradeable",
      },
      suitableFor: ["Gaming", "Developer", "Creative work"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-07-25",
      featuredRank: 19,
    },
    {
      id: 20,
      sku: "GG-GAM-002",
      name: "MSI Katana 15 Gaming Laptop",
      brand: "MSI",
      category: "gaming",
      subcategory: "Gaming laptop",
      price: 185000,
      oldPrice: 205000,
      image: "images/products/msi-katana-15.jpg",
      rating: 4.4,
      reviews: 132,
      badge: "sale",
      badgeText: "-10%",
      stock: 5,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Insured delivery",
      summary:
        "Performance-focused gaming notebook with dedicated graphics, fast display and upgrade-friendly internals.",
      specs: {
        processor: "Intel Core i7-13620H",
        memory: "16GB DDR5 RAM",
        storage: "1TB NVMe SSD",
        graphics: "NVIDIA RTX 4060, 8GB",
        display: '15.6" Full HD 144Hz display',
        battery: "Up to 7 hours",
        weight: "2.25 kg",
        operatingSystem: "Windows 11",
        ports: "USB-C, USB-A, HDMI, RJ45",
        expandability: "RAM and SSD upgradeable",
      },
      suitableFor: ["Gaming", "Developer", "Creative work"],
      deliveryEstimate: "Nairobi: 1–2 days · Other counties: 2–5 days",
      createdAt: "2026-05-04",
      featuredRank: 20,
    },
    {
      id: 21,
      sku: "GG-GAM-003",
      name: "Razer BlackWidow V4 Mechanical Keyboard",
      brand: "Razer",
      category: "gaming",
      subcategory: "Gaming keyboard",
      price: 23500,
      oldPrice: 27000,
      image: "images/products/razer-blackwidow-v4.jpg",
      rating: 4.6,
      reviews: 241,
      badge: "sale",
      badgeText: "-13%",
      stock: 13,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Full-size mechanical gaming keyboard with programmable controls, RGB lighting and dedicated media keys.",
      createdAt: "2026-03-29",
      featuredRank: 21,
    },
    {
      id: 22,
      sku: "GG-GAM-004",
      name: "Logitech G Pro X Superlight 2",
      brand: "Logitech",
      category: "gaming",
      subcategory: "Gaming mouse",
      price: 21500,
      oldPrice: 24000,
      image: "images/products/logitech-g-pro-x-superlight-2.jpg",
      rating: 4.8,
      reviews: 329,
      badge: "bestseller",
      badgeText: "Bestseller",
      stock: 17,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Ultra-light wireless esports mouse with precise tracking, low latency and long battery life.",
      createdAt: "2026-04-09",
      featuredRank: 22,
    },
    {
      id: 23,
      sku: "GG-GAM-005",
      name: "HyperX Cloud III Gaming Headset",
      brand: "HyperX",
      category: "gaming",
      subcategory: "Gaming headset",
      price: 14500,
      oldPrice: 16500,
      image: "images/products/hyperx-cloud-iii.jpg",
      rating: 4.6,
      reviews: 288,
      badge: "sale",
      badgeText: "-12%",
      stock: 21,
      condition: "new",
      warranty: "6-month warranty",
      delivery: "Countrywide delivery",
      summary:
        "Comfortable wired gaming headset with clear directional audio, durable construction and a removable microphone.",
      createdAt: "2026-02-03",
      featuredRank: 23,
    },
    {
      id: 24,
      sku: "GG-GAM-006",
      name: "SteelSeries Arctis Nova 7 Wireless",
      brand: "SteelSeries",
      category: "gaming",
      subcategory: "Wireless gaming headset",
      price: 28500,
      oldPrice: 32000,
      image: "images/products/steelseries-arctis-nova-7.jpg",
      rating: 4.7,
      reviews: 214,
      badge: "new",
      badgeText: "New",
      stock: 8,
      condition: "new",
      warranty: "1-year warranty",
      delivery: "Countrywide delivery",
      summary:
        "Versatile wireless gaming headset with multi-platform support, clear chat and comfortable long-session wear.",
      createdAt: "2026-08-01",
      featuredRank: 24,
    },
  ];

  // Prototype inventory used to make every homepage category useful before
  // final product images and commercial catalogue data are available.
  const placeholderGroups = [
    {
      category: "laptops",
      image: "images/cat-laptops.jpg",
      subcategory: "Everyday laptop",
      prefix: "GoldenGen Everyday Laptop",
      count: 4,
      startPrice: 62000,
      step: 8500,
      summary:
        "Sample everyday laptop with practical performance for study, office work and home use.",
      suitableFor: ["Student", "Business", "Everyday use"],
      specs: {
        processor: "Intel Core i5 sample processor",
        memory: "16GB RAM",
        storage: "512GB SSD",
        graphics: "Integrated graphics",
        display: '15.6" Full HD display',
        battery: "Up to 8 hours",
        weight: "1.7 kg",
        operatingSystem: "Windows 11",
        ports: "USB-C, USB-A, HDMI",
        expandability: "RAM and SSD upgradeable",
      },
    },
    {
      category: "monitors",
      image: "images/cat-monitors.jpg",
      subcategory: "Office monitor",
      prefix: "GoldenGen Office Monitor",
      count: 10,
      startPrice: 23000,
      step: 4200,
      summary:
        "Sample monitor with a clear display and practical features for office work, study and everyday use.",
      suitableFor: ["Business", "Student", "Everyday use"],
      specs: {
        displaySize: '27"',
        resolution: "1920 × 1080 Full HD",
        refreshRate: "75Hz",
        brightness: "250 nits",
        responseTime: "5ms",
        panelType: "IPS",
        speakers: "Not included",
        mounting: "VESA 100 × 100mm",
        eyeCare: "Flicker-free and low-blue-light mode",
      },
    },
    {
      category: "accessories",
      image: "images/cat-keyboards.jpg",
      subcategory: "Mechanical keyboard",
      prefix: "GoldenGen Mechanical Keyboard",
      count: 9,
      startPrice: 6500,
      step: 900,
      summary:
        "Sample mechanical keyboard with comfortable switches, reliable connectivity and a practical layout.",
      suitableFor: ["Developer", "Business", "Everyday use"],
      specs: {
        connectivity: "USB-C and wireless sample configuration",
        layout: "Compact full-function layout",
        switchType: "Mechanical switches",
        battery: "Rechargeable battery",
        compatibility: "Windows, macOS and Linux",
      },
    },
    {
      category: "accessories",
      image: "images/cat-mice.jpg",
      subcategory: "Wireless mouse",
      prefix: "GoldenGen Wireless Mouse",
      count: 9,
      startPrice: 2800,
      step: 650,
      summary:
        "Sample wireless mouse designed for comfortable everyday navigation, office work and study.",
      suitableFor: ["Business", "Student", "Everyday use"],
      specs: {
        connectivity: "2.4GHz wireless and Bluetooth",
        buttons: "6 programmable buttons",
        sensor: "High-precision optical sensor",
        battery: "Rechargeable battery",
        compatibility: "Windows, macOS and Linux",
      },
    },
    {
      category: "accessories",
      image: "images/cat-headphones.jpg",
      subcategory: "Wireless headphones",
      prefix: "GoldenGen Wireless Headphones",
      count: 9,
      startPrice: 5200,
      step: 2400,
      summary:
        "Sample wireless headphones with comfortable earcups, clear calls and balanced everyday audio.",
      suitableFor: ["Business", "Student", "Everyday use"],
      specs: {
        connectivity: "Bluetooth 5.3",
        battery: "Up to 35 hours",
        microphone: "Built-in call microphone",
        noiseControl: "Passive noise isolation",
        compatibility: "Phones, laptops and tablets",
      },
    },
    {
      category: "accessories",
      image: "images/cat-bags.jpg",
      subcategory: "Bags & Cases",
      prefix: "GoldenGen Laptop Bag",
      count: 10,
      startPrice: 2800,
      step: 850,
      summary:
        "Sample laptop bag with protective padding, organised storage and a practical everyday carry design.",
      suitableFor: ["Student", "Business", "Everyday use"],
      specs: {
        laptopFit: "Up to 15.6-inch laptop",
        material: "Water-resistant outer material",
        compartments: "Padded laptop compartment and accessory pockets",
        carrying: "Shoulder strap and carry handles",
        protection: "Reinforced protective padding",
      },
    },
    {
      category: "gaming",
      image: "images/cat-gaming.jpg",
      subcategory: "Gaming gear",
      prefix: "GoldenGen Gaming Gear",
      count: 6,
      startPrice: 8500,
      step: 3200,
      summary:
        "Sample gaming accessory with practical controls, durable construction and a focused play experience.",
      suitableFor: ["Gaming"],
      specs: {
        connectivity: "USB and wireless sample configuration",
        lighting: "Customisable RGB lighting",
        compatibility: "PC and selected consoles",
        warrantySupport: "Sample gaming accessory warranty",
      },
    },
  ];

  const placeholderBadges = [
    { badge: "hot", label: "Popular" },
    { badge: "new", label: "New" },
    { badge: "bestseller", label: "Bestseller" },
    { badge: "sale" },
  ];

  const placeholderProducts = placeholderGroups.flatMap((group, groupIndex) =>
    Array.from({ length: group.count }, (_, index) => {
      const id = 25 + placeholderGroups
        .slice(0, groupIndex)
        .reduce((total, previous) => total + previous.count, 0) + index;
      const sequence = String(index + 1).padStart(2, "0");
      const isOutOfStock = index === group.count - 1;
      const badge = placeholderBadges[(id - 25) % placeholderBadges.length];
      const price = group.startPrice + group.step * index;
      const oldPrice =
        badge.badge === "sale" && !isOutOfStock
          ? Math.ceil((price * 1.1) / 100) * 100
          : null;
      const badgeText = oldPrice
        ? `-${Math.round(((oldPrice - price) / oldPrice) * 100)}%`
        : badge.label;

      return {
        id,
        sku: `GG-SAMPLE-${String(id).padStart(3, "0")}`,
        name: `${group.prefix} ${sequence}`,
        brand: "GoldenGen Sample",
        category: group.category,
        subcategory: group.subcategory,
        price,
        oldPrice,
        image: group.image,
        imageAlt: `Illustrative ${group.subcategory.toLowerCase()} image`,
        rating: 0,
        reviews: 0,
        badge: badge.badge,
        badgeText,
        stock: isOutOfStock ? 0 : 5,
        condition: "new",
        warranty: "Prototype warranty",
        delivery: "Delivery estimate to be confirmed",
        summary: group.summary,
        specs: { ...group.specs },
        suitableFor: group.suitableFor,
        deliveryEstimate: "Prototype delivery estimate",
        createdAt: "2026-08-15",
        featuredRank: 100 + id,
        isPrototype: true,
      };
    }),
  );

  PRODUCTS.push(...placeholderProducts);

  // ===== CATALOGUE PRICE LIMITS =====
  const prices = PRODUCTS.map((product) => product.price);

  const catalogueMin = Math.floor(Math.min(...prices) / 5000) * 5000;

  const catalogueMax = Math.ceil(Math.max(...prices) / 5000) * 5000;

  // ===== APPLICATION STATE =====
  // Controls update this state and then pass through refresh(); PRODUCTS remains
  // immutable so filtering and sorting never change the catalogue source data.
  const state = {
    search: "",
    sort: localStorage.getItem(SORT_KEY) || "featured",

    categories: new Set(),
    useCases: new Set(),
    brands: new Set(),
    conditions: new Set(),

    minPrice: catalogueMin,
    maxPrice: catalogueMax,

    rating: 0,
    inStockOnly: false,

    view: localStorage.getItem(VIEW_KEY) || "grid",
    visible: PRODUCTS_PER_PAGE,
  };

  // ===== HELPERS =====
  function formatPrice(value) {
    return `KSh ${Number(value).toLocaleString("en-KE")}`;
  }

  function titleCase(value) {
    return value.replace(/(^|[-\s])\w/g, (letter) => letter.toUpperCase());
  }

  function escapeHTML(value) {
    return String(value).replace(
      /[&<>'"]/g,
      (character) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "'": "&#39;",
          '"': "&quot;",
        })[character],
    );
  }

  function buildProductSpecs(product, compact = false) {
    if (!product.specs) return "";

    const labels = [
      ["processor", "Processor"],
      ["memory", "RAM"],
      ["storage", "Storage"],
      ["graphics", "GPU"],
      ["displaySize", "Screen size"],
      ["resolution", "Resolution"],
      ["refreshRate", "Refresh rate"],
      ["brightness", "Brightness"],
      ["responseTime", "Response time"],
      ["panelType", "Panel type"],
      ["display", "Display"],
      ["battery", "Battery"],
      ["weight", "Weight"],
      ["operatingSystem", "Operating system"],
      ["ports", "Ports"],
      ["expandability", "Expandability"],
      ["connectivity", "Connectivity"],
      ["layout", "Layout"],
      ["switchType", "Switch type"],
      ["buttons", "Buttons"],
      ["sensor", "Sensor"],
      ["microphone", "Microphone"],
      ["noiseControl", "Noise control"],
      ["compatibility", "Compatibility"],
      ["laptopFit", "Laptop fit"],
      ["material", "Material"],
      ["compartments", "Compartments"],
      ["carrying", "Carrying options"],
      ["protection", "Protection"],
      ["lighting", "Lighting"],
      ["warrantySupport", "Support"],
      ["speakers", "Speakers"],
      ["mounting", "Mounting"],
      ["eyeCare", "Eye care"],
    ];

    const entries = labels
      .filter(([key]) => product.specs[key])
      .slice(0, compact ? 3 : labels.length);

    return `
      <dl class="product-specs ${compact ? "product-specs-compact" : ""}">
        ${entries
          .map(
            ([key, label]) => `
              <div class="product-spec">
                <dt>${label}</dt>
                <dd>${escapeHTML(product.specs[key])}</dd>
              </div>
            `,
          )
          .join("")}
      </dl>
    `;
  }

  function buildUseCases(product) {
    if (!product.suitableFor?.length) return "";

    return `
      <div class="product-use-cases" aria-label="Suitable for">
        <span class="product-use-cases-label">Suitable for</span>
        <div class="product-use-case-list">
          ${product.suitableFor
            .map((useCase) => `<span>${escapeHTML(useCase)}</span>`)
            .join("")}
        </div>
      </div>
    `;
  }

  function getProductType(product) {
    const subcategory = String(product.subcategory || "").toLowerCase();

    if (product.specs?.processor || /\b(laptop|notebook)\b/.test(subcategory)) {
      return "laptops";
    }
    if (product.category === "monitors" || /\bmonitor\b/.test(subcategory)) {
      return "monitors";
    }
    if (/\bheadphones?\b/.test(subcategory)) return "headphones";
    if (/\bheadsets?\b/.test(subcategory)) return "headsets";
    if (/\bkeyboards?\b/.test(subcategory)) return "keyboards";
    if (/\b(mice|mouse)\b/.test(subcategory)) return "mice";
    if (/\b(bags?|cases?)\b/.test(subcategory)) return "bags and cases";
    if (/\bpower banks?\b/.test(subcategory)) return "power banks";
    if (/\b(external storage|ssd|hard drives?)\b/.test(subcategory)) {
      return "external storage";
    }
    if (/\b(networking|routers?)\b/.test(subcategory)) return "networking";

    // Do not treat every product in a broad category as interchangeable.
    return `${product.category}:${subcategory.trim()}`;
  }

  function getPriorityMatch(product, priority) {
    const specs = product.specs || {};
    const evidence = [];
    let score = 0;

    if (priority === "performance") {
      const memory = Number.parseFloat(specs.memory || "");
      const graphics = specs.graphics || "";

      if (/\b(rtx|geforce|radeon rx)\b/i.test(graphics)) {
        score += 4;
        evidence.push(`${graphics} graphics`);
      } else if (graphics) {
        evidence.push(`${graphics} listed`);
      }

      if (memory >= 32) {
        score += 3;
        evidence.push(`${memory}GB memory`);
      } else if (memory >= 16) {
        score += 2;
        evidence.push(`${memory}GB memory`);
      } else if (memory >= 8) {
        score += 1;
        evidence.push(`${memory}GB memory`);
      }
    }

    if (priority === "portability") {
      const weight = Number.parseFloat(specs.weight || "");
      if (Number.isFinite(weight)) {
        evidence.push(`${specs.weight} listed`);
        score =
          weight <= 1.3 ? 4 : weight <= 1.5 ? 3 : weight <= 1.8 ? 1 : 0;
      }
    }

    if (priority === "display") {
      const resolution = specs.resolution || specs.display || "";
      const panel = specs.panelType || "";

      if (/\b(oled)\b/i.test(`${resolution} ${panel}`)) {
        score += 2;
        evidence.push("OLED display");
      }
      if (/\b(3840|2160|4k|uhd)\b/i.test(resolution)) {
        score += 3;
        evidence.push(`${resolution} resolution`);
      } else if (/\b(2560|1440|2k|qhd)\b/i.test(resolution)) {
        score += 2;
        evidence.push(`${resolution} resolution`);
      } else if (/\b(1920|1080|full hd|fhd)\b/i.test(resolution)) {
        score += 1;
        evidence.push(`${resolution} resolution`);
      }
    }

    if (priority === "battery") {
      const hours = Number.parseFloat(
        specs.battery?.match(/(\d+(?:\.\d+)?)/)?.[1] || "",
      );
      if (Number.isFinite(hours)) {
        score = hours >= 12 ? 4 : hours >= 9 ? 3 : hours >= 6 ? 1 : 0;
        evidence.push(`${specs.battery} listed`);
      }
    }

    return { score, evidence };
  }

  function buildChooserResults({ deviceType, useCase, budget, priority }) {
    // Score only available examples that fit the selected device and budget. The
    // explanation shown beside each result is derived from the same score inputs.
    const useCaseLabel =
      {
        Student: "university",
        Developer: "programming",
        Gaming: "gaming",
        "Creative work": "creative work",
        Business: "business",
        "Everyday use": "everyday use",
      }[useCase] || useCase;
    const maximumBudget = budget === "any" ? Infinity : Number(budget);
    const matches = PRODUCTS.filter(
      (product) =>
        product.stock > 0 &&
        getProductType(product) === deviceType &&
        product.price <= maximumBudget,
    )
      .map((product) => {
        const matchesUseCase = product.suitableFor?.includes(useCase) || false;
        const priorityMatch = getPriorityMatch(product, priority);
        const priorityReason =
          priorityMatch.evidence.length > 0
            ? `Relevant details: ${priorityMatch.evidence.join(", ")}.`
            : priority === "balanced"
              ? "Compare its listed specifications and price."
              : `No listed ${priority} details support this preference; check the specifications before deciding.`;

        return {
          product,
          score: (matchesUseCase ? 10 : 0) + priorityMatch.score,
          reason: matchesUseCase
            ? `Matches your ${useCaseLabel} use case. ${priorityReason}`
            : `Not tagged for ${useCaseLabel}; consider only if its listed specifications suit your needs. ${priorityReason}`,
        };
      })
      .sort((first, second) =>
        second.score - first.score ||
        second.product.rating - first.product.rating ||
        first.product.price - second.product.price,
      )
      .slice(0, 3);

    if (matches.length === 0) {
      return `
        <div class="choose-results-empty">
          <strong>No example fits these choices</strong>
          <p>Try a wider budget or browse the full catalogue.</p>
        </div>
      `;
    }

    const hasUseCaseMatches = matches.some(({ product }) =>
      product.suitableFor?.includes(useCase),
    );
    const deviceLabel = deviceType === "monitors" ? "monitors" : "laptops";
    const heading = hasUseCaseMatches
      ? `Top ${deviceLabel} for ${escapeHTML(useCaseLabel)}`
      : `Other ${deviceLabel} within your budget`;

    return `
      <div class="choose-results-heading">
        <p class="quick-view-brand">Based on your choice</p>
        <h3>${heading}</h3>
        <p>
          Results fit your budget. Use the notes to see whether they match
          your use case and priority.
        </p>
      </div>

      <div class="choose-result-list">
        ${matches
          .map(
            ({ product, reason }) => `
              <article class="choose-result">
                <img
                  src="${escapeHTML(product.image)}"
                  alt="${escapeHTML(product.imageAlt || product.name)}"
                  loading="lazy"
                />
                <div class="choose-result-info">
                  <h4>${escapeHTML(product.name)}</h4>
                  <p>${escapeHTML(product.summary)}</p>
                  <p class="choose-result-reason">${escapeHTML(reason)}</p>
                  ${buildProductSpecs(product, true)}
                  <strong>${formatPrice(product.price)}</strong>
                </div>
                <button
                  type="button"
                  class="choose-result-view"
                  data-choose-product="${product.id}"
                >
                  View details
                </button>
              </article>
            `,
          )
          .join("")}
      </div>
    `;
  }

  const comparisonFields = [
    ["price", "Price"],
    ["processor", "CPU"],
    ["memory", "RAM"],
    ["storage", "Storage"],
    ["graphics", "GPU"],
    ["display", "Display"],
    ["battery", "Battery"],
    ["weight", "Weight"],
    ["operatingSystem", "Operating system"],
    ["ports", "Ports"],
    ["expandability", "Expandability"],
    ["warranty", "Warranty"],
    ["condition", "Condition"],
    ["availability", "Availability"],
    ["delivery", "Delivery"],
  ];

  const monitorComparisonFields = [
    ["price", "Price"],
    ["displaySize", "Screen size"],
    ["resolution", "Resolution"],
    ["refreshRate", "Refresh rate"],
    ["brightness", "Brightness"],
    ["responseTime", "Response time"],
    ["panelType", "Panel type"],
    ["speakers", "Speakers"],
    ["mounting", "Mounting"],
    ["eyeCare", "Eye care"],
    ["warranty", "Warranty"],
    ["condition", "Condition"],
    ["availability", "Availability"],
    ["delivery", "Delivery"],
  ];

  const comparisonFieldsByType = {
    headphones: [
      ["connectivity", "Connectivity"],
      ["battery", "Battery"],
      ["microphone", "Microphone"],
      ["noiseControl", "Noise control"],
      ["compatibility", "Compatibility"],
    ],
    headsets: [
      ["connectivity", "Connectivity"],
      ["battery", "Battery"],
      ["microphone", "Microphone"],
      ["noiseControl", "Noise control"],
      ["compatibility", "Compatibility"],
    ],
    keyboards: [
      ["connectivity", "Connectivity"],
      ["layout", "Layout"],
      ["switchType", "Switch type"],
      ["lighting", "Lighting"],
      ["compatibility", "Compatibility"],
    ],
    mice: [
      ["connectivity", "Connectivity"],
      ["buttons", "Buttons"],
      ["sensor", "Sensor"],
      ["battery", "Battery"],
      ["compatibility", "Compatibility"],
    ],
    "bags and cases": [
      ["laptopFit", "Laptop fit"],
      ["material", "Material"],
      ["compartments", "Compartments"],
      ["carrying", "Carrying options"],
      ["protection", "Protection"],
    ],
    "power banks": [
      ["capacity", "Capacity"],
      ["output", "Power output"],
      ["ports", "Ports"],
    ],
    "external storage": [
      ["capacity", "Capacity"],
      ["interface", "Interface"],
      ["durability", "Durability"],
      ["compatibility", "Compatibility"],
    ],
    networking: [
      ["wifiStandard", "Wi-Fi standard"],
      ["bands", "Bands"],
      ["coverage", "Coverage"],
      ["ports", "Ports"],
    ],
  };

  const generalComparisonFields = [
    ["warranty", "Warranty"],
    ["condition", "Condition"],
    ["availability", "Availability"],
    ["delivery", "Delivery"],
  ];

  function getComparisonValue(product, key) {
    if (key === "price") return formatPrice(product.price);
    if (key === "warranty") return product.warranty;
    if (key === "condition") return titleCase(product.condition);
    if (key === "availability") {
      return product.stock > 0
        ? `${product.stock} units in stock`
        : "Out of stock";
    }
    if (key === "delivery") return product.deliveryEstimate || product.delivery;

    return product.specs?.[key] || "Not specified";
  }

  function renderComparison() {
    const products = getComparisonProducts();

    if (!el.compareContent) return;

    const productType = products[0]
      ? getProductType(products[0])
      : comparisonType;
    const fields =
      productType === "monitors"
        ? monitorComparisonFields
        : productType && comparisonFieldsByType[productType]
          ? [
              ["price", "Price"],
              ...comparisonFieldsByType[productType],
              ...generalComparisonFields,
            ]
          : comparisonFields;
    const candidates = productType
      ? PRODUCTS.filter(
          (product) =>
            getProductType(product) === productType &&
            !comparisonIds.has(product.id),
        )
      : [];
    const comparisonMessage =
      products.length === 1
        ? "One product remains. Choose another product from the compatible list below."
        : products.length === 0 && productType
          ? "Choose two compatible products from the list below to start comparing."
          : products.length === 3
            ? "You have selected the maximum of three products."
            : "Choose another compatible product to compare side by side.";

    el.compareContent.innerHTML = `
      <div class="compare-header">
        <div>
          <p class="quick-view-brand">Product comparison</p>
          <h2>Compare products</h2>
          <p>${products.length < 2 ? "Manage your selection and add a compatible product to continue." : "See the differences that matter before you decide."}</p>
        </div>
        <span class="compare-limit">${products.length} of 3 selected</span>
      </div>

      <p class="compare-message" role="status">${comparisonMessage}</p>

      <section class="compare-selection" aria-label="Selected products">
        <h3>Selected products</h3>
        ${
          products.length
            ? `
              <ul class="compare-product-list">
                ${products
                  .map(
                    (product) => `
                      <li class="compare-product-item">
                        <img src="${escapeHTML(product.image)}" alt="" />
                        <span>${escapeHTML(product.name)}</span>
                        <button
                          type="button"
                          class="compare-remove"
                          data-remove-comparison="${product.id}"
                          aria-label="Remove ${escapeHTML(product.name)} from comparison"
                        >
                          Remove
                        </button>
                      </li>
                    `,
                  )
                  .join("")}
              </ul>
            `
            : '<p class="compare-selection-empty">No products selected yet.</p>'
        }
      </section>

      ${
        products.length < 3 && productType
          ? `
            <section class="compare-available" aria-label="Products available to add">
              <h3>Available products to add</h3>
              ${
                candidates.length
                  ? `
                    <ul class="compare-product-list">
                      ${candidates
                        .map(
                          (product) => `
                            <li class="compare-product-item">
                              <img src="${escapeHTML(product.image)}" alt="" />
                              <span>
                                <strong>${escapeHTML(product.name)}</strong>
                                <small>${formatPrice(product.price)}</small>
                              </span>
                              <button
                                type="button"
                                class="compare-add"
                                data-add-comparison="${product.id}"
                              >
                                Add
                              </button>
                            </li>
                          `,
                        )
                        .join("")}
                    </ul>
                  `
                  : '<p class="compare-selection-empty">There are no more products of this type to add.</p>'
              }
            </section>
          `
          : ""
      }

      ${
        products.length >= 2
          ? `
      <div class="compare-table-wrap">
        <table class="compare-table">
          <thead>
            <tr>
              <th scope="col">Attribute</th>
              ${products
                .map(
                  (product) => `
                    <th scope="col">
                      <img src="${escapeHTML(product.image)}" alt="" />
                      <span>${escapeHTML(product.name)}</span>
                    </th>
                  `,
                )
                .join("")}
            </tr>
          </thead>
          <tbody>
            ${fields
              .map(
                ([key, label]) => `
                  <tr>
                    <th scope="row">${label}</th>
                    ${products
                      .map(
                        (product) =>
                          `<td>${escapeHTML(getComparisonValue(product, key))}</td>`,
                      )
                      .join("")}
                  </tr>
                `,
              )
              .join("")}
          </tbody>
        </table>
      </div>
          `
          : ""
      }
    `;
  }

  function toggleComparison(productId) {
    const product = getProduct(productId);

    if (!product) return;

    const selectedProducts = getComparisonProducts();
    const selectedType = selectedProducts[0]
      ? getProductType(selectedProducts[0])
      : comparisonType;

    // Mixing laptops, monitors, or accessories would produce misleading rows, so
    // reject the selection before changing persisted comparison state.
    if (selectedType && getProductType(product) !== selectedType) {
      announce("Compare products from the same type, such as laptops with laptops.");
      return;
    }

    if (comparisonIds.has(product.id)) {
      comparisonIds.delete(product.id);
      announce(`${product.name} removed from comparison.`);
    } else if (comparisonIds.size >= 3) {
      announce("You can compare up to three products.");
      return;
    } else {
      comparisonType = getProductType(product);
      comparisonIds.add(product.id);
      announce(`${product.name} added to comparison.`);
    }

    syncComparisonState();

    if (el.compareDialog?.open) {
      renderComparison();
    }
  }

  function calculateDiscount(product) {
    if (!product.oldPrice) return 0;

    return Math.round(
      ((product.oldPrice - product.price) / product.oldPrice) * 100,
    );
  }

  function announce(message) {
    if (!el.announcer) return;

    el.announcer.textContent = "";

    setTimeout(() => {
      el.announcer.textContent = message;
    }, 20);
  }

  // ===== TOAST =====
  let toastTimeout;

  function showToast(message) {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toastMessage");

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.classList.add("visible");

    clearTimeout(toastTimeout);

    toastTimeout = setTimeout(() => {
      toast.classList.remove("visible");
    }, 2500);
  }

  function readArray(key) {
    // Preferences can outlive a code update, so malformed localStorage data
    // falls back safely instead of preventing the catalogue from rendering.
    try {
      const value = JSON.parse(localStorage.getItem(key));

      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }

  function writeArray(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn("GoldenGen local storage error:", error);
    }
  }

  const comparisonIds = new Set(
    readArray(COMPARISON_KEY).map((productId) => Number(productId)),
  );
  let comparisonType = getComparisonProducts()[0]
    ? getProductType(getComparisonProducts()[0])
    : null;

  function getComparisonProducts() {
    return [...comparisonIds]
      .map((productId) => getProduct(productId))
      .filter(Boolean);
  }

  function syncComparisonState() {
    let selectedProducts = getComparisonProducts();
    const firstType = selectedProducts[0]
      ? getProductType(selectedProducts[0])
      : null;

    if (firstType) {
      [...comparisonIds].forEach((productId) => {
        const product = getProduct(productId);

        if (product && getProductType(product) !== firstType) {
          comparisonIds.delete(productId);
        }
      });
    }

    selectedProducts = getComparisonProducts();
    if (selectedProducts.length) {
      comparisonType = getProductType(selectedProducts[0]);
    }

    const ids = [...comparisonIds];

    writeArray(COMPARISON_KEY, ids);

    if (el.compareCount) {
      el.compareCount.textContent = ids.length;
    }

    if (el.compareToggle) {
      const canCompare = ids.length >= 2;
      el.compareToggle.disabled = !canCompare;
      el.compareToggle.setAttribute("aria-disabled", String(!canCompare));
      el.compareToggle.setAttribute(
        "aria-label",
        canCompare
          ? `Compare ${ids.length} selected products side by side`
          : `Select ${2 - ids.length} more product${ids.length === 0 ? "s" : ""} of the same type to compare`,
      );
    }

    if (el.compareHint) {
      if (ids.length === 0) {
        el.compareHint.textContent =
          'Select 2–3 products of the same type using “Add to compare” on their cards to see their key specifications side by side.';
      } else if (ids.length === 1) {
        el.compareHint.textContent =
          `${selectedProducts[0].name} is selected. Add one more product of the same type to compare key specifications side by side.`;
      } else {
        el.compareHint.textContent =
          `${ids.length} ${firstType} selected. Compare them side by side now${ids.length < 3 ? " or add one more" : ""}.`;
      }
    }

    document.querySelectorAll('[data-action="compare"]').forEach((button) => {
      const selected = comparisonIds.has(Number(button.dataset.id));
      const product = getProduct(button.dataset.id);

      button.classList.toggle("selected", selected);
      button.setAttribute("aria-pressed", String(selected));
      if (product) {
        button.setAttribute(
          "aria-label",
          selected
            ? `Remove ${product.name} from comparison`
            : `Add ${product.name} to comparison`,
        );
      }
      button
        .querySelector("span")
        ?.replaceChildren(
          document.createTextNode(
            selected ? "In comparison" : "Add to compare",
          ),
        );
    });
  }

  function getProduct(productId) {
    return PRODUCTS.find((product) => product.id === Number(productId));
  }

  // ===== AUTOMATIC IMAGE PLACEHOLDER =====
  function makePlaceholder(product) {
    const initials = product.brand.slice(0, 2).toUpperCase();

    const svg = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="900"
        height="650"
        viewBox="0 0 900 650"
      >
        <defs>
          <linearGradient
            id="background"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0" stop-color="#0f0f1a"/>
            <stop offset="0.58" stop-color="#16213e"/>
            <stop offset="1" stop-color="#1a73e8"/>
          </linearGradient>
        </defs>

        <rect
          width="900"
          height="650"
          fill="url(#background)"
        />

        <circle
          cx="730"
          cy="110"
          r="180"
          fill="#ffd700"
          opacity="0.12"
        />

        <circle
          cx="130"
          cy="560"
          r="220"
          fill="#1a73e8"
          opacity="0.18"
        />

        <rect
          x="315"
          y="170"
          width="270"
          height="270"
          rx="45"
          fill="#ffffff"
          opacity="0.08"
          stroke="#ffd700"
          stroke-width="4"
        />

        <text
          x="450"
          y="335"
          text-anchor="middle"
          font-family="Arial"
          font-size="90"
          font-weight="700"
          fill="#ffd700"
        >
          ${escapeHTML(initials)}
        </text>

        <text
          x="450"
          y="510"
          text-anchor="middle"
          font-family="Arial"
          font-size="28"
          font-weight="700"
          fill="#ffffff"
        >
          ${escapeHTML(product.brand)}
        </text>

        <text
          x="450"
          y="555"
          text-anchor="middle"
          font-family="Arial"
          font-size="22"
          fill="#cbd5e1"
        >
          Image coming soon
        </text>
      </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function attachImageFallbacks(root = document) {
    const images = root.querySelectorAll("[data-product-image]");

    images.forEach((image) => {
      image.addEventListener(
        "error",
        () => {
          if (image.dataset.fallbackApplied === "true") {
            return;
          }

          const product = getProduct(image.dataset.productId);

          if (!product) return;

          image.dataset.fallbackApplied = "true";
          image.src = makePlaceholder(product);
        },
        { once: true },
      );
    });
  }

  // ===== CART =====
  function addToCart(productId) {
    const product = getProduct(productId);

    if (!product || product.stock < 1) return;

    const cart = ggReadCart();

    const existingItem = cart.find(
      (item) => String(item.id) === String(product.id),
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }

    ggWriteCart(cart);
    ggUpdateCartCount();
    ggRenderCartDropdown();

    if (typeof window.animateCartCount === "function") {
      window.animateCartCount();
    }

    announce(`${product.name} added to cart.`);
    ggShowToast(`${product.name} added to cart`);
  }

  // ===== GOLDENGEN SPOTLIGHT =====
  function initSpotlight() {
    const stage = document.getElementById("spotlightStage");
    const dotsWrap = document.getElementById("spotlightDots");

    if (!stage) return;

    const spotlightProducts = [...PRODUCTS]
      .sort((a, b) => a.featuredRank - b.featuredRank)
      .slice(0, 4);

    if (spotlightProducts.length === 0) return;

    stage.innerHTML = spotlightProducts
      .map(
        (product, index) => `
          <div class="spotlight-slide ${index === 0 ? "active" : ""}">
            <div class="spotlight-image-wrap">
              <img
                src="${escapeHTML(product.image)}"
                alt="${escapeHTML(product.imageAlt || product.name)}"
                data-product-image
                data-product-id="${product.id}"
              />
            </div>
            <div class="spotlight-details">
              <p class="spotlight-name">${escapeHTML(product.name)}</p>
              <p class="spotlight-subcat">
                ${escapeHTML(product.brand)} · ${escapeHTML(product.subcategory)}
              </p>
              <p class="spotlight-price">${formatPrice(product.price)}</p>
              <button
                type="button"
                class="spotlight-link"
                data-action="quick-view"
                data-id="${product.id}"
              >
                View product
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        `,
      )
      .join("");

    attachImageFallbacks(stage);
    stage.addEventListener("click", handleProductAction);

    if (dotsWrap) {
      dotsWrap.innerHTML = spotlightProducts
        .map(
          (_, index) => `
            <button
              type="button"
              class="spotlight-dot ${index === 0 ? "active" : ""}"
              data-spotlight-dot="${index}"
              aria-label="Show spotlight product ${index + 1}"
            ></button>
          `,
        )
        .join("");
    }

    const slides = Array.from(stage.querySelectorAll(".spotlight-slide"));
    const dots = dotsWrap
      ? Array.from(dotsWrap.querySelectorAll(".spotlight-dot"))
      : [];

    if (slides.length <= 1) return;

    let current = 0;
    let rotateTimer;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    function showSlide(index) {
      slides.forEach((slide, i) =>
        slide.classList.toggle("active", i === index),
      );
      dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
      current = index;
    }

    function nextSlide() {
      showSlide((current + 1) % slides.length);
    }

    function startRotation() {
      if (prefersReducedMotion) return;
      clearInterval(rotateTimer);
      rotateTimer = setInterval(nextSlide, 5000);
    }

    function stopRotation() {
      clearInterval(rotateTimer);
    }

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        showSlide(Number(dot.dataset.spotlightDot));
        startRotation();
      });
    });

    const spotlightEl = document.getElementById("spotlight");

    if (spotlightEl) {
      spotlightEl.addEventListener("mouseenter", stopRotation);
      spotlightEl.addEventListener("mouseleave", startRotation);
      spotlightEl.addEventListener("focusin", stopRotation);
      spotlightEl.addEventListener("focusout", startRotation);
    }

    startRotation();
  }

  // ===== WISHLIST =====
  function toggleWishlist(productId) {
    const product = getProduct(productId);

    if (!product) return;

    const wishlist = readArray(WISHLIST_KEY);
    const index = wishlist.indexOf(product.id);

    const isSaved = index === -1;

    if (isSaved) {
      wishlist.push(product.id);
    } else {
      wishlist.splice(index, 1);
    }

    writeArray(WISHLIST_KEY, wishlist);

    const matchingButtons = document.querySelectorAll(
      `[data-action="wishlist"][data-id="${product.id}"]`,
    );

    matchingButtons.forEach((button) => {
      const icon = button.querySelector("i");

      button.classList.toggle("active", isSaved);

      button.setAttribute("aria-pressed", String(isSaved));

      button.setAttribute(
        "aria-label",
        isSaved ? "Remove from wishlist" : "Add to wishlist",
      );

      if (icon) {
        icon.classList.toggle("fa-solid", isSaved);

        icon.classList.toggle("fa-regular", !isSaved);
      }
    });

    announce(
      isSaved
        ? `${product.name} added to wishlist.`
        : `${product.name} removed from wishlist.`,
    );
  }

  // ===== STAR RATING =====
  function buildStars(rating) {
    return Array.from({ length: 5 }, (_, index) => {
      const star = index + 1;

      if (rating >= star) {
        return `
            <i
              class="fa-solid fa-star"
              aria-hidden="true"
            ></i>
          `;
      }

      if (rating >= star - 0.5) {
        return `
            <i
              class="fa-solid fa-star-half-stroke"
              aria-hidden="true"
            ></i>
          `;
      }

      return `
          <i
            class="fa-regular fa-star"
            aria-hidden="true"
          ></i>
        `;
    }).join("");
  }

  // ===== PRODUCT CARD =====
  function buildCard(product) {
    const inStock = product.stock > 0;

    const isSaved = readArray(WISHLIST_KEY).includes(product.id);
    const isCompared = comparisonIds.has(product.id);

    const savePercent = calculateDiscount(product);

    const badgeClass = inStock
      ? `product-badge-${product.badge}`
      : "product-badge-out-of-stock";

    const badgeText = inStock ? product.badgeText : "Out of Stock";

    const conditionIcon =
      product.condition === "refurbished" ? "fa-rotate" : "fa-certificate";

    return `
      <article
        class="product-card"
        data-id="${product.id}"
        data-category="${escapeHTML(product.category)}"
      >
        <div class="product-image-wrapper">
          <span class="product-badge ${badgeClass}">
            ${escapeHTML(badgeText)}
          </span>

          <button
            type="button"
            class="product-wishlist-btn ${isSaved ? "active" : ""}"
            data-action="wishlist"
            data-id="${product.id}"
            aria-label="${isSaved ? "Remove from wishlist" : "Add to wishlist"}"
            aria-pressed="${isSaved}"
          >
            <i
              class="${isSaved ? "fa-solid" : "fa-regular"} fa-heart"
              aria-hidden="true"
            ></i>
          </button>

          <img
            src="${escapeHTML(product.image)}"
            alt="${escapeHTML(product.imageAlt || product.name)}"
            class="product-image"
            loading="lazy"
            data-product-image
            data-product-id="${product.id}"
          />

          <div class="product-overlay">
            <button
              type="button"
              class="product-quick-view"
              data-action="quick-view"
              data-id="${product.id}"
            >
              Quick View
            </button>
          </div>
        </div>

        <div class="product-info">
          <div class="product-card-topline">
            <span class="product-condition-tag">
              <i
                class="fa-solid ${conditionIcon}"
                aria-hidden="true"
              ></i>

              ${titleCase(product.condition)}
            </span>

            <span class="product-sku">
              ${escapeHTML(product.sku)}
            </span>
          </div>

          <span class="product-brand">
            ${escapeHTML(product.brand)} ·
            ${escapeHTML(product.subcategory)}
          </span>

          <h2 class="product-name">
            ${escapeHTML(product.name)}
          </h2>

          <div
            class="product-rating"
            aria-label="${product.rating} out of 5 stars from ${product.reviews} reviews"
          >
            ${buildStars(product.rating)}

            <span class="product-rating-count">
              ${product.rating} (${product.reviews})
            </span>
          </div>

          <p class="product-description">
            ${escapeHTML(product.summary)}
          </p>

          ${buildProductSpecs(product, true)}

          ${buildUseCases(product)}

          <p
            class="product-stock ${inStock ? "in-stock" : "out-of-stock"}"
          >
            <i
              class="fa-solid ${
                inStock ? "fa-circle-check" : "fa-circle-xmark"
              }"
              aria-hidden="true"
            ></i>

            ${
              inStock
                ? `${product.stock} units in stock`
                : "Currently unavailable"
            }
          </p>

          <div class="product-benefits">
            <span class="product-benefit">
              <i
                class="fa-solid fa-shield-halved"
                aria-hidden="true"
              ></i>

              ${escapeHTML(product.warranty)}
            </span>

            <span class="product-benefit">
              <i
                class="fa-solid fa-truck-fast"
                aria-hidden="true"
              ></i>

              ${escapeHTML(product.delivery)}
            </span>
          </div>

          <div class="product-price-row">
            <div class="product-prices">
              <span class="product-price">
                ${formatPrice(product.price)}
              </span>

              ${
                product.oldPrice
                  ? `
                    <span class="product-price-old">
                      ${formatPrice(product.oldPrice)}
                    </span>
                  `
                  : ""
              }

              ${
                savePercent
                  ? `
                    <span class="product-savings">
                      Save ${savePercent}%
                    </span>
                  `
                  : ""
              }
            </div>

            <button
              type="button"
              class="product-cart-btn"
              data-action="add-to-cart"
              data-id="${product.id}"
              aria-label="Add ${escapeHTML(product.name)} to cart"
              ${inStock ? "" : "disabled"}
            >
              <i
                class="fa-solid fa-cart-plus"
                aria-hidden="true"
              ></i>
            </button>
          </div>

          <button
            type="button"
            class="product-details-link"
            data-action="quick-view"
            data-id="${product.id}"
          >
            View product details

            <i
              class="fa-solid fa-arrow-right"
              aria-hidden="true"
            ></i>
          </button>

          <button
            type="button"
            class="product-compare-link ${isCompared ? "selected" : ""}"
            data-action="compare"
            data-id="${product.id}"
            aria-label="${isCompared ? `Remove ${escapeHTML(product.name)} from comparison` : `Add ${escapeHTML(product.name)} to comparison`}"
            aria-pressed="${isCompared}"
            aria-describedby="compareHint"
          >
            <i class="fa-solid fa-code-compare" aria-hidden="true"></i>
            <span>${isCompared ? "In comparison" : "Add to compare"}</span>
          </button>
        </div>
      </article>
    `;
  }

  // ===== SKELETON LOADING =====
  function showSkeletons() {
    el.grid.innerHTML = Array.from(
      { length: 8 },
      () => `
        <article
          class="product-card skeleton visible"
          aria-hidden="true"
        >
          <div class="skeleton-image"></div>

          <div class="skeleton-info">
            <div class="skeleton-line short"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line medium"></div>
            <div class="skeleton-circle"></div>
          </div>
        </article>
      `,
    ).join("");
  }
  // ===== PRODUCT ENTRANCE ANIMATION =====
  function revealCards(cards) {
    if (!("IntersectionObserver" in window)) {
      cards.forEach((card) => {
        card.classList.add("visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 80px 0px",
      },
    );

    cards.forEach((card, index) => {
      card.style.transitionDelay = `${Math.min(index * 45, 300)}ms`;

      observer.observe(card);
    });
  }

  // ===== FILTER COUNTS =====
  function countBy(property) {
    return PRODUCTS.reduce((counts, product) => {
      const value = product[property];

      counts[value] = (counts[value] || 0) + 1;

      return counts;
    }, {});
  }

  function buildFilterOption(type, value, count) {
    const setName = `${type}s`;

    const selected = state[setName]?.has(value) || false;

    return `
      <label class="filter-option">
        <input
          type="checkbox"
          value="${escapeHTML(value)}"
          data-filter-type="${type}"
          ${selected ? "checked" : ""}
        />

        <span
          class="filter-option-box"
          aria-hidden="true"
        ></span>

        <span class="filter-option-label">
          ${titleCase(value)}
        </span>

        <span class="filter-option-count">
          ${count}
        </span>
      </label>
    `;
  }

  function renderCategoryFilters() {
    const counts = countBy("category");

    const categories = Object.keys(counts).sort();

    el.categoryList.innerHTML = categories
      .map((category) =>
        buildFilterOption("category", category, counts[category]),
      )
      .join("");
  }

  function renderUseCaseFilters() {
    // Build this filter from suitableFor metadata so new products automatically
    // contribute to the available use-case counts.
    const counts = PRODUCTS.reduce((result, product) => {
      (product.suitableFor || []).forEach((useCase) => {
        result[useCase] = (result[useCase] || 0) + 1;
      });

      return result;
    }, {});

    const useCases = Object.keys(counts).sort();

    if (el.useCaseList) {
      el.useCaseList.innerHTML = useCases
        .map((useCase) =>
          buildFilterOption("useCase", useCase, counts[useCase]),
        )
        .join("");
    }
  }

  function renderBrandFilters(searchTerm = "") {
    const counts = countBy("brand");

    const normalizedSearch = searchTerm.trim().toLowerCase();

    const brands = Object.keys(counts)
      .filter((brand) => brand.toLowerCase().includes(normalizedSearch))
      .sort();

    if (brands.length === 0) {
      el.brandList.innerHTML = "<p>No matching brands.</p>";

      return;
    }

    el.brandList.innerHTML = brands
      .map((brand) => buildFilterOption("brand", brand, counts[brand]))
      .join("");
  }

  // ===== FILTER PRODUCTS =====
  function getFilteredProducts() {
    const query = state.search.trim().toLowerCase();

    return PRODUCTS.filter((product) => {
      const searchableText = [
        product.name,
        product.brand,
        product.category,
        product.subcategory,
        product.sku,
        product.condition,
        product.summary,
        ...(product.suitableFor || []),
        ...Object.values(product.specs || {}),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);

      const matchesCategory =
        state.categories.size === 0 || state.categories.has(product.category);

      const matchesUseCase =
        state.useCases.size === 0 ||
        [...state.useCases].some((useCase) =>
          product.suitableFor?.includes(useCase),
        );

      const matchesBrand =
        state.brands.size === 0 || state.brands.has(product.brand);

      const matchesCondition =
        state.conditions.size === 0 || state.conditions.has(product.condition);

      const matchesPrice =
        product.price >= state.minPrice && product.price <= state.maxPrice;

      const matchesRating = product.rating >= state.rating;

      const matchesStock = !state.inStockOnly || product.stock > 0;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesUseCase &&
        matchesBrand &&
        matchesCondition &&
        matchesPrice &&
        matchesRating &&
        matchesStock
      );
    });
  }

  // ===== SORT PRODUCTS =====
  function sortProducts(products) {
    const result = [...products];

    const sorters = {
      featured: (a, b) => a.featuredRank - b.featuredRank,

      newest: (a, b) => new Date(b.createdAt) - new Date(a.createdAt),

      "price-asc": (a, b) => a.price - b.price,

      "price-desc": (a, b) => b.price - a.price,

      rating: (a, b) => b.rating - a.rating || b.reviews - a.reviews,

      reviews: (a, b) => b.reviews - a.reviews,

      discount: (a, b) => calculateDiscount(b) - calculateDiscount(a),
    };

    return result.sort(sorters[state.sort] || sorters.featured);
  }

  // ===== ACTIVE FILTER CHIPS =====
  function getActiveFilterDefinitions() {
    const items = [];

    if (state.search) {
      items.push({
        type: "search",
        value: state.search,
        label: `Search: ${state.search}`,
      });
    }

    state.categories.forEach((value) => {
      items.push({
        type: "category",
        value,
        label: titleCase(value),
      });
    });

    state.useCases.forEach((value) => {
      items.push({
        type: "useCase",
        value,
        label: `Best for ${value}`,
      });
    });

    state.brands.forEach((value) => {
      items.push({
        type: "brand",
        value,
        label: value,
      });
    });

    state.conditions.forEach((value) => {
      items.push({
        type: "condition",
        value,
        label: titleCase(value),
      });
    });

    if (state.minPrice > catalogueMin) {
      items.push({
        type: "minPrice",
        value: state.minPrice,
        label: `From ${formatPrice(state.minPrice)}`,
      });
    }

    if (state.maxPrice < catalogueMax) {
      items.push({
        type: "maxPrice",
        value: state.maxPrice,
        label: `Up to ${formatPrice(state.maxPrice)}`,
      });
    }

    if (state.rating > 0) {
      items.push({
        type: "rating",
        value: state.rating,
        label: `${state.rating}+ stars`,
      });
    }

    if (state.inStockOnly) {
      items.push({
        type: "stock",
        value: "true",
        label: "In stock",
      });
    }

    return items;
  }

  function renderActiveFilters() {
    const items = getActiveFilterDefinitions();

    if (el.activeFilters) {
      el.activeFilters.classList.toggle("hidden", items.length === 0);
    }

    if (el.activeCount) {
      el.activeCount.classList.toggle("hidden", items.length === 0);

      el.activeCount.textContent = items.length;
    }

    if (!el.activeChips) return;

    el.activeChips.innerHTML = items
      .map(
        (item) => `
          <button
            type="button"
            class="active-filter-chip"
            data-remove-filter="${item.type}"
            data-value="${escapeHTML(item.value)}"
          >
            ${escapeHTML(item.label)}

            <i
              class="fa-solid fa-xmark"
              aria-hidden="true"
            ></i>
          </button>
        `,
      )
      .join("");
  }

  // ===== SYNCHRONIZE FORM CONTROLS =====
  function syncControls() {
    if (el.search) {
      el.search.value = state.search;
    }

    if (el.sort) {
      el.sort.value = state.sort;
    }

    if (el.minPrice) {
      el.minPrice.value = state.minPrice;
    }

    if (el.maxPrice) {
      el.maxPrice.value = state.maxPrice;
    }

    if (el.maxRange) {
      el.maxRange.min = catalogueMin;
      el.maxRange.max = catalogueMax;
      el.maxRange.value = state.maxPrice;
    }

    if (el.rating) {
      el.rating.value = String(state.rating);
    }

    if (el.inStock) {
      el.inStock.checked = state.inStockOnly;
    }

    if (el.priceOutput) {
      el.priceOutput.textContent = `Up to ${formatPrice(state.maxPrice)}`;
    }

    document
      .querySelectorAll('[data-filter-type="condition"]')
      .forEach((input) => {
        input.checked = state.conditions.has(input.value);
      });

    renderCategoryFilters();

    renderUseCaseFilters();

    renderBrandFilters(el.brandSearch?.value || "");
  }

  // ===== COUNTERS =====
  function updateCounts(total, shown) {
    const productWord = total === 1 ? "product" : "products";

    if (el.productCount) {
      el.productCount.textContent = `${total} ${productWord} available`;
    }

    if (el.toolbarCount) {
      el.toolbarCount.textContent =
        total > 0 ? `Showing 1–${shown} of ${total}` : "Showing 0 products";
    }
  }

  // ===== LOAD MORE =====
  function updateLoadMore(total, shown) {
    const hasMore = shown < total;

    if (el.loadMoreSection) {
      el.loadMoreSection.classList.toggle("hidden", total === 0);
    }

    if (el.loadMoreCount) {
      el.loadMoreCount.textContent = `Showing ${shown} of ${total} products`;
    }

    if (el.progress) {
      el.progress.setAttribute("aria-valuemax", String(total));

      el.progress.setAttribute("aria-valuenow", String(shown));
    }

    if (el.progressFill) {
      const percentage = total > 0 ? (shown / total) * 100 : 0;

      el.progressFill.style.width = `${percentage}%`;
    }

    if (el.loadMoreBtn) {
      el.loadMoreBtn.hidden = !hasMore;

      if (hasMore) {
        const remaining = total - shown;

        const nextAmount = Math.min(PRODUCTS_PER_PAGE, remaining);

        el.loadMoreBtn.innerHTML = `
          Load ${nextAmount} more products

          <i
            class="fa-solid fa-arrow-down"
            aria-hidden="true"
          ></i>
        `;
      }
    }
  }

  // ===== RENDER PRODUCTS =====
  function refresh({ resetPage = false, append = false } = {}) {
    // One rendering pipeline keeps search, filters, sorting, pagination, counts,
    // and empty states synchronized after every catalogue interaction.
    const previousVisible = state.visible;

    if (resetPage) {
      state.visible = PRODUCTS_PER_PAGE;
    }

    const filteredProducts = sortProducts(getFilteredProducts());

    if (append) {
      state.visible = Math.min(
        state.visible + PRODUCTS_PER_PAGE,
        filteredProducts.length,
      );
    }

    const visibleProducts = filteredProducts.slice(0, state.visible);

    if (el.empty) {
      el.empty.classList.toggle("hidden", filteredProducts.length !== 0);
    }

    el.grid.classList.toggle("hidden", filteredProducts.length === 0);

    let newCards;

    if (append) {
      // Only render the products that are newly revealed by "Load more" —
      // the ones already on screen stay untouched.
      const newlyVisible = filteredProducts.slice(
        previousVisible,
        state.visible,
      );

      el.grid.insertAdjacentHTML(
        "beforeend",
        newlyVisible.map(buildCard).join(""),
      );

      newCards = Array.from(el.grid.children).slice(-newlyVisible.length);
    } else {
      el.grid.innerHTML = visibleProducts.map(buildCard).join("");

      newCards = Array.from(el.grid.children);
    }

    el.grid.classList.toggle("list-view", state.view === "list");

    updateCounts(filteredProducts.length, visibleProducts.length);

    updateLoadMore(filteredProducts.length, visibleProducts.length);

    renderActiveFilters();
    attachImageFallbacks(el.grid);
    revealCards(newCards);
    syncComparisonState();
  }

  // ===== CLEAR FILTERS =====
  function clearAllFilters() {
    state.search = "";

    state.categories.clear();
    state.useCases.clear();
    state.brands.clear();
    state.conditions.clear();

    state.minPrice = catalogueMin;
    state.maxPrice = catalogueMax;

    state.rating = 0;
    state.inStockOnly = false;

    if (el.brandSearch) {
      el.brandSearch.value = "";
    }

    syncControls();

    refresh({
      resetPage: true,
    });

    announce("All filters cleared.");
  }

  function removeFilter(type, value) {
    if (type === "search") {
      state.search = "";
    }

    if (type === "category") {
      state.categories.delete(value);
    }

    if (type === "useCase") {
      state.useCases.delete(value);
    }

    if (type === "brand") {
      state.brands.delete(value);
    }

    if (type === "condition") {
      state.conditions.delete(value);
    }

    if (type === "minPrice") {
      state.minPrice = catalogueMin;
    }

    if (type === "maxPrice") {
      state.maxPrice = catalogueMax;
    }

    if (type === "rating") {
      state.rating = 0;
    }

    if (type === "stock") {
      state.inStockOnly = false;
    }

    syncControls();

    refresh({
      resetPage: true,
    });
  }

  // ===== GRID / LIST VIEW =====
  function applyView(view) {
    state.view = view === "list" ? "list" : "grid";

    localStorage.setItem(VIEW_KEY, state.view);

    el.grid.classList.toggle("list-view", state.view === "list");

    el.gridBtn?.classList.toggle("active", state.view === "grid");

    el.listBtn?.classList.toggle("active", state.view === "list");

    el.gridBtn?.setAttribute("aria-pressed", String(state.view === "grid"));

    el.listBtn?.setAttribute("aria-pressed", String(state.view === "list"));
  }

  // ===== MOBILE FILTER DRAWER =====
  function openFilters() {
    document.body.classList.add("filters-open");

    el.filters?.classList.add("open");

    el.filterToggle?.setAttribute("aria-expanded", "true");
  }

  function closeFilters() {
    document.body.classList.remove("filters-open");

    el.filters?.classList.remove("open");

    el.filterToggle?.setAttribute("aria-expanded", "false");
  }

  // ===== QUICK VIEW =====
  function openQuickView(productId, { returnToChooser = false } = {}) {
    const product = getProduct(productId);

    if (!product || !el.quickView || !el.quickViewContent) {
      return;
    }

    const isSaved = readArray(WISHLIST_KEY).includes(product.id);

    currentQuickViewProductId = product.id;
    currentQuickViewReturnToChooser = returnToChooser;

    const sourceImage = document.querySelector(
      `.product-card[data-id="${product.id}"] .product-image`,
    );

    const buildAndShow = () => {
      el.quickViewContent.innerHTML = `
        <div class="quick-view-layout">
          <div class="quick-view-image">
            <img
              src="${escapeHTML(product.image)}"
              alt="${escapeHTML(product.imageAlt || product.name)}"
              data-product-image
              data-product-id="${product.id}"
              style="view-transition-name: quick-view-image;"
            />
          </div>

          <div class="quick-view-details">
            ${
              currentQuickViewReturnToChooser
                ? `
                  <button
                    type="button"
                    class="quick-view-back"
                    data-return-to-chooser
                  >
                    <i class="fa-solid fa-arrow-left" aria-hidden="true"></i>
                    Back to recommendations
                  </button>
                `
                : ""
            }

            <p class="quick-view-brand">
              ${escapeHTML(product.brand)} ·
              ${escapeHTML(product.subcategory)}
            </p>

            <h2>
              ${escapeHTML(product.name)}
            </h2>

            <div class="product-rating">
              ${buildStars(product.rating)}

              <span class="product-rating-count">
                ${product.rating}
                (${product.reviews})
              </span>
            </div>

            <p class="quick-view-summary">
              ${escapeHTML(product.summary)}
            </p>

            ${buildProductSpecs(product)}

            ${buildUseCases(product)}

            <p class="quick-view-price">
              ${formatPrice(product.price)}
            </p>

            <div class="product-benefits">
              <span class="product-benefit">
                <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
                ${escapeHTML(product.warranty)}
              </span>

              <span class="product-benefit">
                <i class="fa-solid fa-truck-fast" aria-hidden="true"></i>
                ${escapeHTML(product.delivery)}
              </span>

              ${
                product.deliveryEstimate
                  ? `
                    <span class="product-benefit">
                      <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                      ${escapeHTML(product.deliveryEstimate)}
                    </span>
                  `
                  : ""
              }
            </div>

            <div class="quick-view-actions">
              <button
                type="button"
                class="quick-view-add"
                data-action="add-to-cart"
                data-id="${product.id}"
                ${product.stock > 0 ? "" : "disabled"}
              >
                Add to cart
              </button>

              <button
                type="button"
                class="quick-view-wishlist ${isSaved ? "active" : ""}"
                data-action="wishlist"
                data-id="${product.id}"
              >
                <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-heart"></i>
                Wishlist
              </button>
            </div>
          </div>
        </div>
      `;

      attachImageFallbacks(el.quickViewContent);

      if (typeof el.quickView.showModal === "function") {
        el.quickView.showModal();
      } else {
        el.quickView.setAttribute("open", "");
      }

      if (sourceImage) {
        sourceImage.style.viewTransitionName = "";
      }
    };

    if (document.startViewTransition && sourceImage) {
      sourceImage.style.viewTransitionName = "quick-view-image";

      document.startViewTransition(buildAndShow);
    } else {
      buildAndShow();
    }
  }

  let currentQuickViewProductId = null;
  let currentQuickViewReturnToChooser = false;

  function closeQuickView({ returnToChooser = false } = {}) {
    if (!el.quickView) return;

    const sourceImage = currentQuickViewProductId
      ? document.querySelector(
          `.product-card[data-id="${currentQuickViewProductId}"] .product-image`,
        )
      : null;

    const modalImage = el.quickViewContent?.querySelector("img");

    const runClose = () => {
      if (typeof el.quickView.close === "function") {
        el.quickView.close();
      } else {
        el.quickView.removeAttribute("open");
      }

      if (returnToChooser && el.chooseDialog) {
        if (typeof el.chooseDialog.showModal === "function") {
          el.chooseDialog.showModal();
        } else {
          el.chooseDialog.setAttribute("open", "");
        }

        el.chooseResults?.focus({ preventScroll: true });
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

    currentQuickViewProductId = null;
    currentQuickViewReturnToChooser = false;
  }

  // ===== HELP ME CHOOSE =====
  el.chooseToggle?.addEventListener("click", () => {
    if (typeof el.chooseDialog?.showModal === "function") {
      el.chooseDialog.showModal();
    } else {
      el.chooseDialog?.setAttribute("open", "");
    }
  });

  el.chooseClose?.addEventListener("click", () => {
    el.chooseDialog?.close();
  });

  el.chooseDialog?.addEventListener("click", (event) => {
    if (event.target === el.chooseDialog) {
      el.chooseDialog.close();
    }
  });

  el.chooseForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const selected = el.chooseForm.querySelector(
      'input[name="useCase"]:checked',
    );

    if (!selected) {
      announce("Choose a use case first.");
      return;
    }

    const deviceType =
      el.chooseForm.querySelector('input[name="deviceType"]:checked')?.value ||
      "laptops";
    const budget = el.chooseForm.elements.budget?.value || "any";
    const priority = el.chooseForm.elements.priority?.value || "balanced";

    el.chooseResults.innerHTML = buildChooserResults({
      deviceType,
      useCase: selected.value,
      budget,
      priority,
    });
    el.chooseResults.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  el.chooseResults?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-choose-product]");

    if (!button) return;

    el.chooseDialog?.close();
    openQuickView(button.dataset.chooseProduct, { returnToChooser: true });
  });

  function returnToChooser() {
    const layout = el.quickViewContent?.querySelector(".quick-view-layout");
    const backButton = el.quickViewContent?.querySelector(
      "[data-return-to-chooser]",
    );
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      !layout ||
      !el.quickView?.open ||
      typeof layout.animate !== "function" ||
      prefersReducedMotion
    ) {
      closeQuickView({ returnToChooser: true });
      return;
    }

    if (backButton) backButton.disabled = true;

    const animation = layout.animate(
      [
        { opacity: 1, transform: "translateY(0) scale(1)" },
        { opacity: 0, transform: "translateY(10px) scale(0.985)" },
      ],
      {
        duration: 220,
        easing: "ease-in",
        fill: "forwards",
      },
    );

    animation.onfinish = () => {
      if (el.quickView?.open) {
        closeQuickView({ returnToChooser: true });
      }
    };
  }

  el.quickViewContent?.addEventListener("click", (event) => {
    if (event.target.closest("[data-return-to-chooser]")) {
      returnToChooser();
    }
  });

  el.compareToggle?.addEventListener("click", () => {
    renderComparison();

    if (typeof el.compareDialog?.showModal === "function") {
      el.compareDialog.showModal();
    } else {
      el.compareDialog?.setAttribute("open", "");
    }
  });

  el.compareClose?.addEventListener("click", () => {
    el.compareDialog?.close();
  });

  el.compareDialog?.addEventListener("click", (event) => {
    if (event.target === el.compareDialog) {
      el.compareDialog.close();
    }

    const target = event.target;
    if (!(target instanceof Element)) return;

    const removeButton = target.closest("[data-remove-comparison]");

    if (removeButton) {
      toggleComparison(removeButton.dataset.removeComparison);
      return;
    }

    const addButton = target.closest("[data-add-comparison]");
    if (addButton) {
      toggleComparison(addButton.dataset.addComparison);
    }
  });

  el.compareDialog?.addEventListener("close", () => {
    if (comparisonIds.size === 0) {
      comparisonType = null;
    }
  });

  // ===== SEARCH EVENTS =====
  let searchDebounce;

  el.search?.addEventListener("input", () => {
    state.search = el.search.value;

    clearTimeout(searchDebounce);

    searchDebounce = setTimeout(() => {
      refresh({
        resetPage: true,
      });
    }, 250);
  });

  el.search?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      clearTimeout(searchDebounce);

      refresh({
        resetPage: true,
      });
    }
  });

  el.searchBtn?.addEventListener("click", () => {
    clearTimeout(searchDebounce);

    state.search = el.search.value;

    refresh({
      resetPage: true,
    });
  });

  // Navbar search transfers its value to the main product search.
  function runNavbarSearch() {
    if (!el.navSearch || !el.search) {
      return;
    }

    state.search = el.navSearch.value.trim();

    el.search.value = state.search;

    el.search.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    refresh({
      resetPage: true,
    });
  }

  el.navSearchBtn?.addEventListener("click", runNavbarSearch);

  el.navSearch?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      runNavbarSearch();
    }
  });

  // ===== SORTING =====
  el.sort?.addEventListener("change", () => {
    state.sort = el.sort.value;

    localStorage.setItem(SORT_KEY, state.sort);

    refresh({
      resetPage: true,
    });
  });

  // ===== VIEW BUTTONS =====
  el.gridBtn?.addEventListener("click", () => {
    applyView("grid");
    announce("Grid view selected.");
  });

  el.listBtn?.addEventListener("click", () => {
    applyView("list");
    announce("List view selected.");
  });

  // ===== GENERATED FILTER CHECKBOXES =====
  document.addEventListener("change", (event) => {
    const input = event.target.closest("[data-filter-type]");

    if (!input) return;

    const type = input.dataset.filterType;

    let targetSet;

    if (type === "category") {
      targetSet = state.categories;
    } else if (type === "brand") {
      targetSet = state.brands;
    } else if (type === "useCase") {
      targetSet = state.useCases;
    } else {
      targetSet = state.conditions;
    }

    if (input.checked) {
      targetSet.add(input.value);
    } else {
      targetSet.delete(input.value);
    }

    refresh({
      resetPage: true,
    });
  });

  // ===== BRAND SEARCH =====
  el.brandSearch?.addEventListener("input", () => {
    renderBrandFilters(el.brandSearch.value);
  });

  // ===== PRICE FILTER =====
  function handlePriceInputs() {
    const minimum = Number(el.minPrice?.value || catalogueMin);

    const maximum = Number(el.maxPrice?.value || catalogueMax);

    state.minPrice = Math.max(catalogueMin, Math.min(minimum, catalogueMax));

    state.maxPrice = Math.min(catalogueMax, Math.max(maximum, state.minPrice));

    if (el.maxRange) {
      el.maxRange.value = state.maxPrice;
    }

    if (el.priceOutput) {
      el.priceOutput.textContent = `Up to ${formatPrice(state.maxPrice)}`;
    }

    refresh({
      resetPage: true,
    });
  }

  el.minPrice?.addEventListener("change", handlePriceInputs);

  el.maxPrice?.addEventListener("change", handlePriceInputs);

  el.maxRange?.addEventListener("input", () => {
    state.maxPrice = Number(el.maxRange.value);

    if (el.maxPrice) {
      el.maxPrice.value = state.maxPrice;
    }

    if (el.priceOutput) {
      el.priceOutput.textContent = `Up to ${formatPrice(state.maxPrice)}`;
    }

    refresh({
      resetPage: true,
    });
  });

  // ===== RATING =====
  el.rating?.addEventListener("change", () => {
    state.rating = Number(el.rating.value);

    refresh({
      resetPage: true,
    });
  });

  // ===== STOCK =====
  el.inStock?.addEventListener("change", () => {
    state.inStockOnly = el.inStock.checked;

    refresh({
      resetPage: true,
    });
  });

  // ===== ACTIVE FILTER CHIP REMOVAL =====
  el.activeChips?.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-remove-filter]");

    if (!chip) return;

    removeFilter(chip.dataset.removeFilter, chip.dataset.value);
  });

  // ===== CLEAR BUTTONS =====
  el.clearAll?.addEventListener("click", clearAllFilters);

  el.filtersReset?.addEventListener("click", clearAllFilters);

  el.emptyReset?.addEventListener("click", clearAllFilters);

  // ===== MOBILE FILTER DRAWER =====
  el.filtersApply?.addEventListener("click", closeFilters);

  el.filterToggle?.addEventListener("click", openFilters);

  el.filtersClose?.addEventListener("click", closeFilters);

  el.filtersBackdrop?.addEventListener("click", closeFilters);

  // ===== COLLAPSIBLE FILTER GROUPS =====
  document.querySelectorAll(".filter-group-title").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".filter-group");

      const expanded = button.getAttribute("aria-expanded") !== "false";

      button.setAttribute("aria-expanded", String(!expanded));

      group?.classList.toggle("collapsed", expanded);

      const icon = button.querySelector("i");

      icon?.classList.toggle("fa-chevron-up", !expanded);

      icon?.classList.toggle("fa-chevron-down", expanded);
    });
  });

  // ===== LOAD MORE =====
  el.loadMoreBtn?.addEventListener("click", () => {
    refresh({
      append: true,
    });
  });
  // ===== PRODUCT ACTIONS =====
  function handleProductAction(event) {
    const button = event.target.closest("[data-action]");

    if (!button) return;

    const productId = Number(button.dataset.id);

    const action = button.dataset.action;

    if (action === "add-to-cart") {
      addToCart(productId);
    }

    if (action === "wishlist") {
      toggleWishlist(productId);
    }

    if (action === "quick-view") {
      openQuickView(productId);
    }

    if (action === "compare") {
      toggleComparison(productId);
    }
  }

  el.grid.addEventListener("click", handleProductAction);

  el.quickViewContent?.addEventListener("click", handleProductAction);

  el.quickViewClose?.addEventListener("click", closeQuickView);

  el.quickView?.addEventListener("click", (event) => {
    if (event.target === el.quickView) {
      closeQuickView();
    }
  });

  // ===== ESCAPE KEY =====
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    closeFilters();

    if (el.quickView?.open) {
      closeQuickView();
    }

    if (el.chooseDialog?.open) {
      el.chooseDialog.close();
    }

    if (el.compareDialog?.open) {
      el.compareDialog.close();
    }
  });

  // ===== BACK TO TOP =====
  el.backToTop?.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // ===== URL CATEGORY & SEARCH FILTER =====
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromURL = urlParams.get("category");
  const searchFromURL = urlParams.get("search");

  if (
    categoryFromURL &&
    PRODUCTS.some((product) => product.category === categoryFromURL)
  ) {
    state.categories.add(categoryFromURL);
  }

  if (searchFromURL) {
    state.search = searchFromURL;
  }

  // ===== INITIALIZE PRICE CONTROLS =====
  if (el.minPrice) {
    el.minPrice.min = catalogueMin;
    el.minPrice.max = catalogueMax;
  }

  if (el.maxPrice) {
    el.maxPrice.min = catalogueMin;
    el.maxPrice.max = catalogueMax;
  }

  // ===== INITIALIZE PAGE =====
  showSkeletons();
  syncControls();
  applyView(state.view);
  ggUpdateCartCount();
  initSpotlight();

  // Small delay simulates a future API request.
  setTimeout(() => {
    refresh({
      resetPage: true,
    });

    console.log(`GoldenGen loaded ${PRODUCTS.length} products.`);
  }, 550);
});
