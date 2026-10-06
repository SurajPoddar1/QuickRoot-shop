/* =========================================================
   MANTU FRUITS - ADVANCED HOME SCRIPT
   NOTE:
   - Ye file sirf home page (index.html) ke liye hai
   - Search, filters, categories, wishlist, cart count,
     product details redirect sab yahin handle hoga
   - Baad me aur fruits add karne ho to baseFruitData me add karo
   ========================================================= */

/* =========================================================
   CATEGORY LIST
   NOTE:
   - Sidebar me ye categories dikhengi
   ========================================================= */
const categories = [
  { name: "All", img: "🛒" },
  { name: "Apple", img: "🍎" },
  { name: "Banana", img: "🍌" },
  { name: "Mango", img: "🥭" },
  { name: "Orange", img: "🍊" },
  { name: "Grapes", img: "🍇" },
  { name: "Guava", img: "🍈" },
  { name: "Papaya", img: "🍈" },
  { name: "Watermelon", img: "🍉" },
  { name: "Kiwi", img: "🥝" },
  { name: "Dragon Fruit", img: "🐉" },
  { name: "Strawberry", img: "🍓" },
  { name: "Anar", img: "❤️" },
  { name: "Cherry", img: "🍒" },
  { name: "Coconut", img: "🥥" },
  { name: "Dry Fruits", img: "🥜" },
  { name: "Lemon", img: "🍋" },
  { name: "Litchi", img: "🍒" },
  { name: "Mosmi", img: "🍊" },
  { name: "Pear", img: "🍐" },
  { name: "Sarifa", img: "🍏" },
  { name: "Ananas", img: "🍍" }
];

/* =========================================================
   BASE PRODUCT DATA
   NOTE:
   - Yahin se saare products aayenge
   - Agar future me aur products chahiye to isi array me add karo
   ========================================================= */
const baseFruitData = [
  { id: 1, cat: "Anar", name: "Kandhari Anar", price: 180, discount: 20, img: "anar1.webp" },
  { id: 2, cat: "Anar", name: "Bhagwa Anar", price: 180, discount: 20, img: "anar2.webp" },
  { id: 3, cat: "Anar", name: "Ruby Anar", price: 180, discount: 20, img: "anar3.jpg" },
  { id: 4, cat: "Anar", name: "Desi Anar", price: 180, discount: 20, img: "anar4.jpg" },
  { id: 5, cat: "Anar", name: "Fresh Red Anar", price: 180, discount: 20, img: "anar5.jpg" },

  { id: 6, cat: "Apple", name: "Shimla Apple", price: 200, discount: 20, img: "apple1.jpg" },
  { id: 7, cat: "Apple", name: "Green Apple", price: 200, discount: 20, img: "apple2.jpg" },
  { id: 8, cat: "Apple", name: "Fuji Apple", price: 200, discount: 20, img: "apple3.jpg" },
  { id: 9, cat: "Apple", name: "Royal Gala Apple", price: 200, discount: 20, img: "apple4.jpg" },
  { id: 10, cat: "Apple", name: "Red Delicious Apple", price: 200, discount: 20, img: "apple5.jpg" },
  { id: 11, cat: "Apple", name: "Golden Apple", price: 200, discount: 20, img: "apple6.jpg" },

  { id: 12, cat: "Banana", name: "Robusta Banana", price: 50, discount: 5, img: "banana1.jpg" },
  { id: 13, cat: "Banana", name: "Red Banana", price: 50, discount: 5, img: "banana2.jpg" },
  { id: 14, cat: "Banana", name: "Yelakki Banana", price: 50, discount: 5, img: "banana3.jpg" },
  { id: 15, cat: "Banana", name: "Nendran Banana", price: 50, discount: 5, img: "banana4.jpg" },
  { id: 16, cat: "Banana", name: "Elaichi Banana", price: 50, discount: 5, img: "banana5.jpg" },

  { id: 17, cat: "Mango", name: "Alphonso Mango", price: 220, discount: 25, img: "mango1.jpg" },
  { id: 18, cat: "Mango", name: "Dasheri Mango", price: 220, discount: 25, img: "mango2.jpg" },
  { id: 19, cat: "Mango", name: "Langra Mango", price: 220, discount: 25, img: "mango3.jpg" },
  { id: 20, cat: "Mango", name: "Kesar Mango", price: 220, discount: 25, img: "mango4.jpg" },
  { id: 21, cat: "Mango", name: "Himsagar Mango", price: 220, discount: 25, img: "mango5.jpg" },
  { id: 22, cat: "Mango", name: "Badami Mango", price: 220, discount: 25, img: "mango6.jpg" },
  { id: 23, cat: "Mango", name: "Totapuri Mango", price: 220, discount: 25, img: "mango7.jpg" },
  { id: 24, cat: "Mango", name: "Neelam Mango", price: 220, discount: 25, img: "mango8.jpg" },
  { id: 25, cat: "Mango", name: "Chausa Mango", price: 220, discount: 25, img: "mango9.jpg" },
  { id: 26, cat: "Mango", name: "Safeda Mango", price: 220, discount: 25, img: "mango10.jpg" },

  { id: 27, cat: "Orange", name: "Nagpur Orange", price: 100, discount: 10, img: "orange1.jpg" },
  { id: 28, cat: "Orange", name: "Kinnow Orange", price: 100, discount: 10, img: "orange2.jpg" },
  { id: 29, cat: "Orange", name: "Valencia Orange", price: 100, discount: 10, img: "orange3.jpg" },
  { id: 30, cat: "Orange", name: "Mandarin Orange", price: 100, discount: 10, img: "orange4.jpg" },
  { id: 31, cat: "Orange", name: "Blood Orange", price: 100, discount: 10, img: "orange5.jpg" },

  { id: 32, cat: "Guava", name: "Allahabad Guava", price: 80, discount: 10, img: "guava1.jpg" },
  { id: 33, cat: "Guava", name: "Pink Guava", price: 80, discount: 10, img: "guava2.jpg" },
  { id: 34, cat: "Guava", name: "Thai Guava", price: 80, discount: 10, img: "guava3.jpg" },
  { id: 35, cat: "Guava", name: "White Guava", price: 80, discount: 10, img: "guava4.jpg" },
  { id: 36, cat: "Guava", name: "Lucknow Guava", price: 80, discount: 10, img: "guava5.jpg" },
  { id: 37, cat: "Guava", name: "Seedless Guava", price: 80, discount: 10, img: "guava6.jpg" },
  { id: 38, cat: "Guava", name: "Desi Guava", price: 80, discount: 10, img: "guava7.jpg" },

  { id: 39, cat: "Papaya", name: "Red Lady Papaya", price: 60, discount: 10, img: "papaya1.jpg" },
  { id: 40, cat: "Papaya", name: "Hawaiian Papaya", price: 60, discount: 10, img: "papaya2.jpg" },
  { id: 41, cat: "Papaya", name: "Indian Papaya", price: 60, discount: 10, img: "papaya3.jpg" },
  { id: 42, cat: "Papaya", name: "Solo Papaya", price: 60, discount: 10, img: "papaya4.jpg" },
  { id: 43, cat: "Papaya", name: "Fresh Papaya", price: 60, discount: 10, img: "papaya5.jpg" },

  { id: 44, cat: "Watermelon", name: "Red Watermelon", price: 70, discount: 5, img: "watermelon1.jpg" },
  { id: 45, cat: "Watermelon", name: "Striped Watermelon", price: 70, discount: 5, img: "watermelon2.jpg" },
  { id: 46, cat: "Watermelon", name: "Mini Watermelon", price: 70, discount: 5, img: "watermelon3.jpg" },
  { id: 47, cat: "Watermelon", name: "Seedless Watermelon", price: 70, discount: 5, img: "watermelon4.jpg" },

  { id: 48, cat: "Dragon Fruit", name: "Red Dragon Fruit", price: 200, discount: 25, img: "dragon1.jpg" },
  { id: 49, cat: "Dragon Fruit", name: "White Dragon Fruit", price: 200, discount: 25, img: "dragon2.jpg" },
  { id: 50, cat: "Dragon Fruit", name: "Yellow Dragon Fruit", price: 200, discount: 25, img: "dragon3.jpg" },
  { id: 51, cat: "Dragon Fruit", name: "Thai Dragon Fruit", price: 200, discount: 25, img: "dragon4.jpg" },
  { id: 52, cat: "Dragon Fruit", name: "Organic Dragon Fruit", price: 200, discount: 25, img: "dragon5.jpg" },
  { id: 53, cat: "Dragon Fruit", name: "Fresh Dragon Fruit", price: 200, discount: 25, img: "dragon6.jpg" },

  { id: 54, cat: "Strawberry", name: "Fresh Strawberry", price: 150, discount: 15, img: "strawberry1.jpg" },
  { id: 55, cat: "Strawberry", name: "Organic Strawberry", price: 150, discount: 15, img: "strawberry2.jpg" },

  { id: 56, cat: "Cherry", name: "Red Cherry", price: 300, discount: 40, img: "cherry1.jpg" },
  { id: 57, cat: "Cherry", name: "Black Cherry", price: 300, discount: 40, img: "cherry2.jpg" },
  { id: 58, cat: "Cherry", name: "Sweet Cherry", price: 300, discount: 40, img: "cherry3.jpg" },
  { id: 59, cat: "Cherry", name: "Imported Cherry", price: 300, discount: 40, img: "cherry4.jpg" },

  { id: 60, cat: "Coconut", name: "Tender Coconut", price: 50, discount: 5, img: "coconut1.jpg" },
  { id: 61, cat: "Coconut", name: "Green Coconut", price: 50, discount: 5, img: "coconut2.jpg" },
  { id: 62, cat: "Coconut", name: "Brown Coconut", price: 50, discount: 5, img: "coconut3.jpg" },
  { id: 63, cat: "Coconut", name: "Dry Coconut", price: 50, discount: 5, img: "coconut4.jpg" },

  { id: 64, cat: "Dry Fruits", name: "Assorted Dry Fruit Laddu", price: 800, discount: 100, img: "k1.jpg" },
  { id: 65, cat: "Dry Fruits", name: "Cashew Nuts", price: 800, discount: 100, img: "k2.jpg" },
  { id: 66, cat: "Dry Fruits", name: "Dates / Khajur", price: 800, discount: 100, img: "k3.jpg" },
  { id: 67, cat: "Dry Fruits", name: "Date Crown (Dates)", price: 800, discount: 100, img: "k4.jpg" },
  { id: 68, cat: "Dry Fruits", name: "Premium Black Dates", price: 800, discount: 100, img: "k5.jpg" },
  { id: 69, cat: "Dry Fruits", name: "Triple Mix / Assorted Dry Fruits", price: 800, discount: 100, img: "k6.jpg" },
  { id: 70, cat: "Dry Fruits", name: "Kimia Dates", price: 800, discount: 100, img: "k7.jpg" },
  { id: 71, cat: "Dry Fruits", name: "Almonds", price: 800, discount: 100, img: "dryfruit1.jpg" },
  { id: 72, cat: "Dry Fruits", name: "Cashew Nuts Premium", price: 800, discount: 100, img: "dryfruit2.jpg" },
  { id: 73, cat: "Dry Fruits", name: "Walnuts", price: 800, discount: 100, img: "dryfruit3.jpg" },
  { id: 74, cat: "Dry Fruits", name: "Black Raisins", price: 800, discount: 100, img: "dryfruit4.jpg" },
  { id: 75, cat: "Dry Fruits", name: "Kaju", price: 800, discount: 100, img: "dryfruit5.jpg" },
  { id: 76, cat: "Dry Fruits", name: "Kishmis", price: 800, discount: 100, img: "dryfruit6.jpg" },

  { id: 77, cat: "Lemon", name: "Indian Lemon", price: 60, discount: 10, img: "lemon1.jpg" },
  { id: 78, cat: "Lemon", name: "Green Lemon", price: 60, discount: 10, img: "lemon2.jpg" },
  { id: 79, cat: "Lemon", name: "Kagzi Lemon", price: 60, discount: 10, img: "lemon3.jpg" },

  { id: 80, cat: "Litchi", name: "Shahi Litchi", price: 120, discount: 15, img: "lichi1.jpg" },
  { id: 81, cat: "Litchi", name: "China Litchi", price: 120, discount: 15, img: "lichi2.jpg" },
  { id: 82, cat: "Litchi", name: "Desi Litchi", price: 120, discount: 15, img: "lichi3.jpg" },
  { id: 83, cat: "Litchi", name: "Fresh Litchi", price: 120, discount: 15, img: "lichi4.jpg" },

  { id: 84, cat: "Mosmi", name: "Sweet Mosmi", price: 70, discount: 10, img: "mosmi1.jpg" },
  { id: 85, cat: "Mosmi", name: "Fresh Mosmi", price: 70, discount: 10, img: "mosmi2.jpg" },
  { id: 86, cat: "Mosmi", name: "Juicy Mosmi", price: 70, discount: 10, img: "mosmi3.jpg" },

  { id: 87, cat: "Pear", name: "Green Pear", price: 90, discount: 10, img: "pear1.jpg" },
  { id: 88, cat: "Pear", name: "Brown Pear", price: 90, discount: 10, img: "pear2.jpg" },
  { id: 89, cat: "Pear", name: "Chinese Pear", price: 90, discount: 10, img: "pear3.jpg" },
  { id: 90, cat: "Pear", name: "Sweet Pear", price: 90, discount: 10, img: "pear4.jpg" },
  { id: 91, cat: "Pear", name: "Imported Pear", price: 90, discount: 10, img: "pear5.jpg" },

  { id: 92, cat: "Sarifa", name: "Custard Apple", price: 80, discount: 10, img: "sarifa1.jpg" },
  { id: 93, cat: "Sarifa", name: "Green Custard Apple", price: 80, discount: 10, img: "sarifa2.jpg" },
  { id: 94, cat: "Sarifa", name: "Sweet Sarifa", price: 80, discount: 10, img: "sarifa3.jpg" },
  { id: 95, cat: "Sarifa", name: "Fresh Sarifa", price: 80, discount: 10, img: "sarifa4.jpg" },

  { id: 96, cat: "Grapes", name: "Green Seedless Grapes", price: 90, discount: 10, img: "grapes1.jpg" },
  { id: 97, cat: "Grapes", name: "Black Grapes", price: 90, discount: 10, img: "grapes2.jpg" },
  { id: 98, cat: "Grapes", name: "Red Grapes", price: 90, discount: 10, img: "grapes3.jpg" },
  { id: 99, cat: "Grapes", name: "Thompson Grapes", price: 90, discount: 10, img: "grapes4.jpg" },
  { id: 100, cat: "Grapes", name: "Imported Grapes", price: 90, discount: 10, img: "grapes5.jpg" },

  { id: 101, cat: "Kiwi", name: "Green Kiwi", price: 100, discount: 15, img: "kiwi1.jpg" },
  { id: 102, cat: "Kiwi", name: "Golden Kiwi", price: 100, discount: 15, img: "kiwi2.jpg" },
  { id: 103, cat: "Kiwi", name: "Imported Kiwi", price: 100, discount: 15, img: "kiwi3.jpg" },
  { id: 104, cat: "Kiwi", name: "Fresh Kiwi", price: 100, discount: 15, img: "kiwi4.jpg" },

  { id: 105, cat: "Ananas", name: "Golden Pineapple", price: 120, discount: 20, img: "ananas1.jpg" }
];

/* =========================================================
   EXTRA PRODUCT META
   NOTE:
   - Unit, stock, organic, featured yahan control ho raha hai
   ========================================================= */
const categoryMeta = {
  "Anar": { unit: "1 kg", stock: 8, organic: true, featured: true },
  "Apple": { unit: "1 kg", stock: 12, organic: true, featured: true },
  "Banana": { unit: "1 dozen", stock: 20, organic: false, featured: false },
  "Mango": { unit: "1 kg", stock: 8, organic: true, featured: true },
  "Orange": { unit: "1 kg", stock: 14, organic: false, featured: false },
  "Guava": { unit: "1 kg", stock: 9, organic: true, featured: false },
  "Papaya": { unit: "1 piece", stock: 6, organic: false, featured: false },
  "Watermelon": { unit: "1 piece", stock: 5, organic: false, featured: false },
  "Dragon Fruit": { unit: "500 g", stock: 4, organic: true, featured: true },
  "Strawberry": { unit: "500 g", stock: 4, organic: true, featured: true },
  "Cherry": { unit: "500 g", stock: 3, organic: false, featured: true },
  "Coconut": { unit: "1 piece", stock: 10, organic: false, featured: false },
  "Dry Fruits": { unit: "500 g", stock: 15, organic: false, featured: true },
  "Lemon": { unit: "500 g", stock: 10, organic: false, featured: false },
  "Litchi": { unit: "500 g", stock: 7, organic: false, featured: false },
  "Mosmi": { unit: "1 kg", stock: 8, organic: false, featured: false },
  "Pear": { unit: "1 kg", stock: 7, organic: false, featured: false },
  "Sarifa": { unit: "1 kg", stock: 5, organic: true, featured: false },
  "Grapes": { unit: "1 kg", stock: 9, organic: false, featured: true },
  "Kiwi": { unit: "500 g", stock: 6, organic: false, featured: true },
  "Ananas": { unit: "1 piece", stock: 4, organic: false, featured: false }
};

/* =========================================================
   SPECIAL STOCK CHANGES
   NOTE:
   - Kuch selected items ka stock manually alag diya gaya hai
   ========================================================= */
const specialStockMap = {
  21: 2,
  31: 0,
  48: 2,
  59: 0,
  71: 1,
  105: 2
};

/* =========================================================
   FINAL DATA BUILD
   NOTE:
   - base data + extra meta merge ho raha hai
   ========================================================= */
const fruitData = baseFruitData.map((fruit) => {
  const meta = categoryMeta[fruit.cat] || {};
  const stock = specialStockMap[fruit.id] ?? meta.stock ?? 5;

  return {
    ...fruit,
    unit: meta.unit || "1 unit",
    stock,
    organic: meta.organic || false,
    featured: meta.featured || false
  };
});

/* =========================================================
   GLOBAL STATE
   ========================================================= */
let cart = JSON.parse(localStorage.getItem("cart")) || {};
let cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

let currentCategory = "All";
let currentSearch = "";
let currentSort = "";
let onlyAvailable = false;
let onlyDiscounted = false;
let maxPriceFilter = "";

/* =========================================================
   COMMON HELPERS
   ========================================================= */
function getFruitById(id) {
  return fruitData.find((fruit) => fruit.id === id);
}

function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(wishlist) {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function isInWishlist(id) {
  return getWishlist().some((item) => item.id === id);
}

function updateWishlistCount() {
  const wishlist = getWishlist();
  const countBox = document.getElementById("wishlist-count");
  if (countBox) {
    countBox.innerText = wishlist.length;
  }
}

function updateCartCount() {
  cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const cartBox = document.getElementById("cart-count");
  if (cartBox) {
    cartBox.innerText = cartCount;
  }
}

function formatPrice(price) {
  return `₹${price}`;
}

function getStockText(stock) {
  if (stock <= 0) return "Out of Stock";
  if (stock <= 2) return `Only ${stock} left`;
  return "In Stock";
}

function getStockColor(stock) {
  if (stock <= 0) return "#dc2626";
  if (stock <= 2) return "#ea580c";
  return "#16a34a";
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function getCartSubtotal() {
  let total = 0;

  Object.keys(cart).forEach((id) => {
    const fruit = getFruitById(Number(id));
    if (!fruit) return;

    const qty = cart[id];
    total += (fruit.price - fruit.discount) * qty;
  });

  return total;
}

/* =========================================================
   CATEGORY TITLE
   ========================================================= */
function updateCategoryTitle() {
  const title = document.getElementById("category-title");
  if (!title) return;

  if (currentCategory === "All") {
    title.innerText = "All Fruits";
  } else {
    title.innerText = currentCategory;
  }
}

/* =========================================================
   LOAD SIDEBAR CATEGORIES
   ========================================================= */
function loadCategories() {
  const list = document.getElementById("category-list");
  if (!list) return;

  list.innerHTML = "";

  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.className = "sidebar-category";
    li.innerHTML = `${cat.img} ${cat.name}`;
    li.dataset.category = cat.name;

    if (cat.name === currentCategory) {
      li.classList.add("active");
    }

    li.onclick = () => {
      currentCategory = cat.name;
      updateActiveCategory();
      applyFilters();
    };

    list.appendChild(li);
  });
}

function updateActiveCategory() {
  document.querySelectorAll(".sidebar-category").forEach((item) => {
    item.classList.remove("active");
    if (item.dataset.category === currentCategory) {
      item.classList.add("active");
    }
  });
}

/* =========================================================
   SEARCH HELPERS
   NOTE:
   - Desktop aur mobile input dono sync honge
   - Search stuck issue yahin fix hua hai
   ========================================================= */
function readSearchValue() {
  const desktopInput = document.getElementById("search-input");
  const mobileInput = document.getElementById("search-input-mobile");

  const desktopValue = desktopInput ? desktopInput.value.trim().toLowerCase() : "";
  const mobileValue = mobileInput ? mobileInput.value.trim().toLowerCase() : "";

  return desktopValue || mobileValue;
}

function syncSearchInputs() {
  const desktopInput = document.getElementById("search-input");
  const mobileInput = document.getElementById("search-input-mobile");

  if (desktopInput && mobileInput) {
    if (document.activeElement === desktopInput) {
      mobileInput.value = desktopInput.value;
    } else if (document.activeElement === mobileInput) {
      desktopInput.value = mobileInput.value;
    }
  }
}

function executeSearch() {
  syncSearchInputs();
  currentSearch = readSearchValue();
  renderSearchOverlayResults(currentSearch);

  if (currentSearch) {
    openSearchOverlay();
  } else {
    closeSearchOverlay();
    applyFilters();
  }
}

/* =========================================================
   SEARCH OVERLAY
   ========================================================= */
function openSearchOverlay() {
  const overlay = document.getElementById("search-overlay");
  if (!overlay) return;

  overlay.classList.add("show");
  document.body.classList.add("search-overlay-open");

  const overlayInput = document.getElementById("overlay-search-input");
  const searchValue = readSearchValue();

  if (overlayInput) {
    overlayInput.value = searchValue;
    setTimeout(() => overlayInput.focus(), 50);
  }
}

function closeSearchOverlay() {
  const overlay = document.getElementById("search-overlay");
  if (!overlay) return;

  overlay.classList.remove("show");
  document.body.classList.remove("search-overlay-open");
}

function getSearchResults(query) {
  const cleanQuery = (query || "").trim().toLowerCase();

  if (!cleanQuery) return [];

  return fruitData.filter((fruit) => {
    return (
      fruit.name.toLowerCase().includes(cleanQuery) ||
      fruit.cat.toLowerCase().includes(cleanQuery) ||
      String(fruit.price).includes(cleanQuery) ||
      (fruit.unit || "").toLowerCase().includes(cleanQuery)
    );
  });
}

function renderSearchOverlayResults(query) {
  const resultBox = document.getElementById("search-overlay-results");
  const resultCount = document.getElementById("search-result-count");

  if (!resultBox || !resultCount) return;

  const results = getSearchResults(query);

  if (!query.trim()) {
    resultCount.innerText = "Type to search items";
    resultBox.innerHTML = `
      <div class="search-empty-state">
        Start typing to search fruits and products
      </div>
    `;
    return;
  }

  resultCount.innerText = `${results.length} item(s) found`;

  if (results.length === 0) {
    resultBox.innerHTML = `
      <div class="search-empty-state">
        No matching items found for "${query}"
      </div>
    `;
    return;
  }

  resultBox.innerHTML = results.map((fruit) => {
    const finalPrice = fruit.price - fruit.discount;

    return `
      <div class="search-result-card" onclick="openProductFromSearch(${fruit.id})">
        <img src="${fruit.img}" alt="${fruit.name}" class="search-result-img">

        <div class="search-result-content">
          <span class="search-result-category">${fruit.cat}</span>

          <div class="search-result-title">${fruit.name}</div>

          <div class="search-result-meta">
            <span class="search-result-price">${formatPrice(finalPrice)}</span>
            <span>${fruit.unit || "1 unit"}</span>
            <span>${getStockText(fruit.stock)}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function openProductFromSearch(id) {
  closeSearchOverlay();
  viewDetails(id);
}

function initSearchOverlay() {
  const desktopSearchInput = document.getElementById("search-input");
  const mobileSearchInput = document.getElementById("search-input-mobile");
  const overlayInput = document.getElementById("overlay-search-input");
  const overlayClose = document.getElementById("search-overlay-close");
  const overlayBackdrop = document.getElementById("search-overlay-backdrop");

  if (desktopSearchInput) {
    desktopSearchInput.addEventListener("focus", function () {
      const value = desktopSearchInput.value.trim();
      if (value) {
        renderSearchOverlayResults(value);
      }
      openSearchOverlay();
    });
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("focus", function () {
      const value = mobileSearchInput.value.trim();
      if (value) {
        renderSearchOverlayResults(value);
      }
      openSearchOverlay();
    });
  }

  if (overlayInput) {
    overlayInput.addEventListener("input", function () {
      const value = this.value.trim();

      const desktop = document.getElementById("search-input");
      const mobile = document.getElementById("search-input-mobile");

      if (desktop) desktop.value = value;
      if (mobile) mobile.value = value;

      currentSearch = value.toLowerCase();
      renderSearchOverlayResults(value);
    });

    overlayInput.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeSearchOverlay();
      }
    });
  }

  if (overlayClose) {
    overlayClose.addEventListener("click", closeSearchOverlay);
  }

  if (overlayBackdrop) {
    overlayBackdrop.addEventListener("click", closeSearchOverlay);
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeSearchOverlay();
    }
  });
}
/* =========================================================
   FILTER + SEARCH + SORT
   NOTE:
   - All category par full products aayenge
   - Search reset hone par normal state wapas aayegi
   ========================================================= */
function applyFilters() {
  let filtered = [...fruitData];

  if (currentCategory !== "All") {
    filtered = filtered.filter((fruit) => fruit.cat === currentCategory);
  }

  if (currentSearch) {
    filtered = filtered.filter((fruit) =>
      fruit.name.toLowerCase().includes(currentSearch) ||
      fruit.cat.toLowerCase().includes(currentSearch)
    );
  }

  if (onlyAvailable) {
    filtered = filtered.filter((fruit) => fruit.stock > 0);
  }

  if (onlyDiscounted) {
    filtered = filtered.filter((fruit) => fruit.discount > 0);
  }

  if (maxPriceFilter !== "" && !isNaN(maxPriceFilter)) {
    filtered = filtered.filter((fruit) => (fruit.price - fruit.discount) <= Number(maxPriceFilter));
  }

  if (currentSort === "price-low") {
    filtered.sort((a, b) => (a.price - a.discount) - (b.price - b.discount));
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => (b.price - b.discount) - (a.price - a.discount));
  } else if (currentSort === "discount-high") {
    filtered.sort((a, b) => b.discount - a.discount);
  } else if (currentSort === "name-az") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  updateCategoryTitle();
  displayFruits(filtered);
  updateCartSummaryBox();
}

/* =========================================================
   CART CONTROL BUTTON RENDER
   ========================================================= */
function renderCartControls(id) {
  const box = document.getElementById("cart-" + id);
  if (!box) return;

  const fruit = getFruitById(id);
  const qty = cart[id] || 0;

  if (!fruit) return;

  if (fruit.stock <= 0) {
    box.innerHTML = `
      <button disabled
        style="background:#cbd5e1;color:#475569;padding:8px 14px;border:none;border-radius:12px;width:100%;cursor:not-allowed;">
        Out of Stock
      </button>
    `;
    return;
  }

  if (qty > 0) {
    box.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;gap:8px;background:#22c55e;padding:8px 10px;border-radius:12px;color:white;">
        <button onclick="minusItem(${id})" style="background:white;color:#22c55e;border:none;padding:2px 8px;border-radius:8px;font-weight:bold;">-</button>
        <span id="qty-${id}" style="min-width:20px;text-align:center;font-weight:700;">${qty}</span>
        <button onclick="plusItem(${id})" style="background:white;color:#22c55e;border:none;padding:2px 8px;border-radius:8px;font-weight:bold;">+</button>
      </div>
    `;
  } else {
    box.innerHTML = `
      <button onclick="addToCart(${id})"
        style="background:#16a34a;color:white;padding:10px 14px;border:none;border-radius:12px;width:100%;font-weight:800;">
        Add to Cart
      </button>
    `;
  }
}

/* =========================================================
   SHOW PRODUCTS
   ========================================================= */
function displayFruits(list) {
  const container = document.getElementById("product-container");
  const itemCount = document.getElementById("item-count");

  if (!container) return;

  if (itemCount) {
    itemCount.innerText = `Showing ${list.length} items`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-white rounded-3xl border border-slate-200 p-10 text-center text-slate-500">
        <h3 style="font-size:24px;font-weight:800;margin-bottom:8px;">No fruits found</h3>
        <p>Try another search or reset filters.</p>
      </div>
    `;
    return;
  }

  let html = "";

  list.forEach((fruit) => {
    const finalPrice = fruit.price - fruit.discount;
    const qty = cart[fruit.id] || 0;

    html += `
      <div class="fruit-card">
        <div style="position:relative;">
          <img src="${fruit.img}" class="fruit-img" alt="${fruit.name}">

          <button onclick="toggleWishlist(${fruit.id})"
            style="position:absolute;top:12px;right:12px;background:white;border:none;border-radius:999px;width:42px;height:42px;font-size:20px;box-shadow:0 8px 20px rgba(0,0,0,0.12);cursor:pointer;">
            ${isInWishlist(fruit.id) ? "❤️" : "🤍"}
          </button>
        </div>

        <div style="display:flex;gap:6px;flex-wrap:wrap;margin:12px 0 10px 0;">
          ${fruit.discount > 0 ? `<span style="background:#fee2e2;color:#b91c1c;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:800;">${formatPrice(fruit.discount)} OFF</span>` : ""}
          ${fruit.organic ? `<span style="background:#dcfce7;color:#166534;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:800;">Organic</span>` : ""}
          ${fruit.featured ? `<span style="background:#fef3c7;color:#92400e;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:800;">Featured</span>` : ""}
        </div>

        <h3 style="font-size:20px;font-weight:800;margin-bottom:6px;color:#0f172a;">${fruit.name}</h3>

        <div style="font-size:14px;color:#64748b;margin-bottom:6px;font-weight:600;">
          ${fruit.unit}
        </div>

        <div style="font-size:14px;font-weight:700;color:${getStockColor(fruit.stock)};margin-bottom:12px;">
          ${getStockText(fruit.stock)}
        </div>

        <div style="margin-bottom:16px;">
          <span style="text-decoration:line-through;color:#94a3b8;font-size:14px;">${formatPrice(fruit.price)}</span>
          <span style="color:#16a34a;font-weight:900;font-size:22px;margin-left:8px;">${formatPrice(finalPrice)}</span>
        </div>

        <div class="flex flex-col gap-3">
          <button onclick="viewDetails(${fruit.id})"
            style="background:#facc15;color:#111827;padding:10px 14px;border:none;border-radius:12px;font-weight:800;">
            View Details
          </button>

          <div id="cart-${fruit.id}">
            ${
              fruit.stock <= 0
                ? `
              <button disabled
                style="background:#cbd5e1;color:#475569;padding:10px 14px;border:none;border-radius:12px;width:100%;cursor:not-allowed;font-weight:800;">
                Out of Stock
              </button>
            `
                : qty > 0
                ? `
              <div style="display:flex;align-items:center;justify-content:center;gap:8px;background:#22c55e;padding:8px 10px;border-radius:12px;color:white;">
                <button onclick="minusItem(${fruit.id})" style="background:white;color:#22c55e;border:none;padding:2px 8px;border-radius:8px;font-weight:bold;">-</button>
                <span id="qty-${fruit.id}" style="min-width:20px;text-align:center;font-weight:700;">${qty}</span>
                <button onclick="plusItem(${fruit.id})" style="background:white;color:#22c55e;border:none;padding:2px 8px;border-radius:8px;font-weight:bold;">+</button>
              </div>
            `
                : `
              <button onclick="addToCart(${fruit.id})"
                style="background:#16a34a;color:white;padding:10px 14px;border:none;border-radius:12px;width:100%;font-weight:800;">
                Add to Cart
              </button>
            `
            }
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

/* =========================================================
   CART ACTIONS
   ========================================================= */
function addToCart(id) {
  const fruit = getFruitById(id);
  if (!fruit || fruit.stock <= 0) return;

  if (cart[id]) {
    if (cart[id] >= fruit.stock) return;
    cart[id]++;
  } else {
    cart[id] = 1;
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCartControls(id);
  updateCartSummaryBox();
}

function plusItem(id) {
  const fruit = getFruitById(id);
  if (!fruit) return;

  if (!cart[id]) cart[id] = 0;
  if (cart[id] >= fruit.stock) return;

  cart[id]++;
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCartSummaryBox();

  const qtyBox = document.getElementById("qty-" + id);
  if (qtyBox) {
    qtyBox.innerText = cart[id];
  } else {
    renderCartControls(id);
  }
}

function minusItem(id) {
  if (!cart[id]) return;

  if (cart[id] > 1) {
    cart[id]--;
    const qtyBox = document.getElementById("qty-" + id);
    if (qtyBox) {
      qtyBox.innerText = cart[id];
    } else {
      renderCartControls(id);
    }
  } else {
    delete cart[id];
    renderCartControls(id);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCartSummaryBox();
}

/* =========================================================
   WISHLIST ACTION
   ========================================================= */
function toggleWishlist(id) {
  const fruit = getFruitById(id);
  if (!fruit) return;

  let wishlist = getWishlist();
  const exists = wishlist.find((item) => item.id === id);

  if (exists) {
    wishlist = wishlist.filter((item) => item.id !== id);
  } else {
    wishlist.push(fruit);
  }

  saveWishlist(wishlist);
  updateWishlistCount();
  applyFilters();
}

/* =========================================================
   PRODUCT DETAILS REDIRECT
   ========================================================= */
function viewDetails(id) {
  const fruit = getFruitById(id);
  if (!fruit) return;

  localStorage.setItem("selectedProduct", JSON.stringify(fruit));
  localStorage.setItem("productSource", "index");
  window.location.href = "product.html";
}

/* =========================================================
   CART SUMMARY BOX
   ========================================================= */
function updateCartSummaryBox() {
  const box = document.getElementById("cart-summary-box");
  if (!box) return;

  const subtotal = getCartSubtotal();
  const itemTotal = Object.values(cart).reduce((a, b) => a + b, 0);

  box.innerHTML = `
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:16px;">
      <h3 style="margin-bottom:10px;font-size:18px;font-weight:900;color:#0f172a;">Cart Summary</h3>
      <p style="margin:6px 0;color:#475569;">Items: <strong style="color:#0f172a;">${itemTotal}</strong></p>
      <p style="margin:6px 0;color:#475569;">Subtotal: <strong style="color:#16a34a;">${formatPrice(subtotal)}</strong></p>
    </div>
  `;
}

/* =========================================================
   INIT HOME PAGE
   NOTE:
   - Yahan saare event listeners ek hi jagah add ho rahe hain
   - Search button, enter key, reset, filters sab yahin connect hain
   ========================================================= */

function initHomePage() {
  /* future pages ke liye localStorage me product data save */
  localStorage.setItem("fruitData", JSON.stringify(fruitData));

  loadCategories();
  updateCartCount();
  updateWishlistCount();
  updateCategoryTitle();
  applyFilters();
  updateCartSummaryBox();
  initLocationSelector();
  initSearchOverlay();

  const desktopSearchInput = document.getElementById("search-input");
  const mobileSearchInput = document.getElementById("search-input-mobile");
  const searchBtn = document.getElementById("search-btn");
  const searchBtnMobile = document.getElementById("search-btn-mobile");
  const sortSelect = document.getElementById("sort-select");
  const availableOnly = document.getElementById("available-only");
  const discountOnly = document.getElementById("discount-only");
  const maxPrice = document.getElementById("max-price");
  const banner = document.getElementById("top-banner");

  const debouncedSearch = debounce(executeSearch, 250);

  if (desktopSearchInput) {
    desktopSearchInput.addEventListener("input", debouncedSearch);
    desktopSearchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        executeSearch();
      }
    });
  }

  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("input", debouncedSearch);
    mobileSearchInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        executeSearch();
      }
    });
  }

  if (searchBtn) {
    searchBtn.addEventListener("click", executeSearch);
  }

  if (searchBtnMobile) {
    searchBtnMobile.addEventListener("click", executeSearch);
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      currentSort = this.value;
      applyFilters();
    });
  }

  if (availableOnly) {
    availableOnly.addEventListener("change", function () {
      onlyAvailable = this.checked;
      applyFilters();
    });
  }

  if (discountOnly) {
    discountOnly.addEventListener("change", function () {
      onlyDiscounted = this.checked;
      applyFilters();
    });
  }

  if (maxPrice) {
    maxPrice.addEventListener("input", function () {
      maxPriceFilter = this.value.trim();
      applyFilters();
    });
  }

  if (banner) {
    banner.innerHTML = `
      <div style="background:linear-gradient(135deg,#16a34a,#22c55e,#84cc16);color:white;padding:20px;border-radius:24px;margin-bottom:18px;box-shadow:0 12px 30px rgba(34,197,94,0.18);">
        <h2 style="margin:0 0 6px 0;font-size:26px;font-weight:900;">Fresh Fruits Delivered Fast</h2>
        <p style="margin:0;font-size:15px;opacity:0.95;">Search, filter, sort aur quick cart sab ready hai</p>
      </div>
    `;
  }


}

/* =========================================================
   LOCATION SELECTOR
   ========================================================= */
const LOCATION_STORAGE_KEY = "selectedDeliveryLocation";

function getSavedLocationData() {
  try {
    return JSON.parse(localStorage.getItem(LOCATION_STORAGE_KEY)) || null;
  } catch (error) {
    return null;
  }
}

function saveLocationData(data) {
  localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(data));
}

function renderSelectedLocation(data) {
  const title = document.getElementById("selected-location");
  const subtext = document.getElementById("selected-location-subtext");

  if (!title || !subtext) return;

  if (!data) {
    title.innerText = "Select delivery location";
    subtext.innerText = "Current location ya manual address add karo";
    return;
  }

  title.innerText = data.label || "Selected location";

  if (data.type === "gps") {
    subtext.innerText = data.subtext || "Current location selected";
  } else {
    subtext.innerText = data.subtext || "Manual address";
  }
}

function setLocationStatus(message, type = "") {
  const statusText = document.getElementById("location-status-text");
  if (!statusText) return;

  statusText.className = "location-helper-text";
  if (type) {
    statusText.classList.add(type);
  }
  statusText.innerText = message;
}

function closeLocationDropdown() {
  const dropdown = document.getElementById("location-dropdown");
  const box = document.getElementById("location-box");

  if (dropdown) dropdown.classList.remove("show");
  if (box) box.classList.remove("active");
}

function openLocationDropdown() {
  const dropdown = document.getElementById("location-dropdown");
  const box = document.getElementById("location-box");

  if (dropdown) dropdown.classList.add("show");
  if (box) box.classList.add("active");
}

function loadSelectedLocation() {
  const saved = getSavedLocationData();
  renderSelectedLocation(saved);
}

async function reverseGeocode(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

  const response = await fetch(url, {
    headers: {
      Accept: "application/json"
    }
  });

  if (!response.ok) {
    throw new Error("Unable to fetch address");
  }

  const data = await response.json();
  return data;
}

async function detectCurrentLocation() {
  if (!navigator.geolocation) {
    setLocationStatus("Browser geolocation support nahi karta", "error");
    return;
  }

  setLocationStatus("Location fetch ho rahi hai...", "loading");

  navigator.geolocation.getCurrentPosition(
    async function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      try {
        const geoData = await reverseGeocode(latitude, longitude);

        const address =
          geoData.display_name ||
          `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

        const shortLabel =
          address.length > 42 ? address.slice(0, 42) + "..." : address;

        const locationData = {
          type: "gps",
          label: shortLabel,
          fullAddress: address,
          subtext: "Current location selected",
          latitude,
          longitude
        };

        saveLocationData(locationData);
        renderSelectedLocation(locationData);
        setLocationStatus("Current location saved", "success");
        closeLocationDropdown();
      } catch (error) {
        const fallbackAddress = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

        const locationData = {
          type: "gps",
          label: fallbackAddress,
          fullAddress: fallbackAddress,
          subtext: "Coordinates saved",
          latitude,
          longitude
        };

        saveLocationData(locationData);
        renderSelectedLocation(locationData);
        setLocationStatus("Address na mila, coordinates save ho gaye", "success");
        closeLocationDropdown();
      }
    },
    function (error) {
      let message = "Location access allow karo";

      if (error.code === 1) {
        message = "Location permission deny ho gaya";
      } else if (error.code === 2) {
        message = "Location unavailable hai";
      } else if (error.code === 3) {
        message = "Location request timeout ho gaya";
      }

      setLocationStatus(message, "error");
    },
    {
      enableHighAccuracy: true,
      timeout: 12000,
      maximumAge: 0
    }
  );
}

function saveManualLocation() {
  const input = document.getElementById("manual-location-input");
  if (!input) return;

  const value = input.value.trim();
  if (!value) {
    setLocationStatus("Manual address enter karo", "error");
    return;
  }

  const shortLabel = value.length > 42 ? value.slice(0, 42) + "..." : value;

  const locationData = {
    type: "manual",
    label: shortLabel,
    fullAddress: value,
    subtext: "Manual address saved"
  };

  saveLocationData(locationData);
  renderSelectedLocation(locationData);
  setLocationStatus("Manual address saved", "success");
  input.value = "";
  closeLocationDropdown();
}

function initLocationSelector() {
  const locationWrapper = document.getElementById("location-wrapper");
  const locationBox = document.getElementById("location-box");
  const dropdown = document.getElementById("location-dropdown");
  const useCurrentBtn = document.getElementById("use-current-location-btn");
  const saveManualBtn = document.getElementById("save-manual-location-btn");
  const manualInput = document.getElementById("manual-location-input");

  loadSelectedLocation();

  if (locationBox && dropdown) {
    locationBox.addEventListener("click", function (event) {
      event.stopPropagation();

      const isOpen = dropdown.classList.contains("show");
      if (isOpen) {
        closeLocationDropdown();
      } else {
        openLocationDropdown();
      }
    });
  }

  if (useCurrentBtn) {
    useCurrentBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      detectCurrentLocation();
    });
  }

  if (saveManualBtn) {
    saveManualBtn.addEventListener("click", function (event) {
      event.stopPropagation();
      saveManualLocation();
    });
  }

  if (manualInput) {
    manualInput.addEventListener("click", function (event) {
      event.stopPropagation();
    });

    manualInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        saveManualLocation();
      }
    });
  }

  document.addEventListener("click", function (event) {
    if (!locationWrapper || !locationWrapper.contains(event.target)) {
      closeLocationDropdown();
    }
  });
}

/* =========================================================
   QuickRoot -> Google Sheet sender
   1) Apps Script deploy karke jo Web app URL mile, neeche paste karo
   2) SECRET wahi rakho jo Code.gs me hai
   Customer ka password kabhi sheet me nahi bheja jata.
   ========================================================= */
(function () {
  var WEB_APP_URL = "https://script.google.com/macros/s/AKfycbxQq1pcLHyvnSm0GIlTDcFUbql8TXxT1_OE3G8qRE9_VWyIiMkLgUpanvnprSqFB5zO/exec";
  var SECRET = "Poddar-quickrootshop1-purneabihar-111";

  var QUEUE_KEY = "qrSheetQueue";

  function configured() {
    return WEB_APP_URL.indexOf("https://script.google.com/") === 0;
  }

  function readQueue() {
    try { return JSON.parse(localStorage.getItem(QUEUE_KEY)) || []; } catch (e) { return []; }
  }
  function writeQueue(q) {
    try { localStorage.setItem(QUEUE_KEY, JSON.stringify(q.slice(-100))); } catch (e) {}
  }
  function removeFromQueue(id) {
    writeQueue(readQueue().filter(function (x) { return x.id !== id; }));
  }

  function post(item) {
    // text/plain avoids the CORS preflight that Apps Script does not support
    return fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(item)
    }).then(function () { removeFromQueue(item.id); });
  }

  function flush() {
    if (!configured() || navigator.onLine === false) return;
    readQueue().forEach(function (item) { post(item).catch(function () {}); });
  }

  function newId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }

  function send(type, data) {
    if (!configured()) {
      console.warn("QRSheet: WEB_APP_URL set nahi hai, data sheet me nahi gaya.");
      return;
    }
    var item = { id: newId(), key: SECRET, type: type, sentAt: new Date().toISOString(), data: data || {} };
    var q = readQueue();
    q.push(item);
    writeQueue(q); // retry ke liye save, success par hat jata hai
    post(item).catch(function () {});
  }

  window.QRSheet = { send: send, flush: flush };
  window.addEventListener("load", flush);
  window.addEventListener("online", flush);
})();