/* =====================================================================
   QUICKROOT / MANTU FRUITS - HOME PAGE SCRIPT (index.html)
   =====================================================================

   QUICK GUIDE - "Mujhe ye karna hai to kahan jau?"
   ---------------------------------------------------------------------
   * Naya fruit add karna / price / discount badalna  -> SECTION 2
   * Kisi ek fruit ka stock badalna                    -> SECTION 2 (stock: 5)
   * Poori category ka unit/stock badalna              -> SECTION 3
   * Nayi category add karna                           -> SECTION 1 (+ SECTION 3)
   * Baaki sab (search, cart, wishlist, location)      -> mat chhedo, bas padho

   Google Sheet wala code is file me NAHI hai. Wo alag file sheet.js me hai.
   ===================================================================== */


/* =====================================================================
   SECTION 1: CATEGORIES (left sidebar me ye dikhengi)
   ---------------------------------------------------------------------
   name = category ka naam (SECTION 2 me cat: "..." se EXACT match hona chahiye)
   img  = emoji jo naam ke aage dikhega
   ===================================================================== */
const categories = [
  { name: "All",          img: "🛒" },
  { name: "Apple",        img: "🍎" },
  { name: "Banana",       img: "🍌" },
  { name: "Mango",        img: "🥭" },
  { name: "Orange",       img: "🍊" },
  { name: "Grapes",       img: "🍇" },
  { name: "Guava",        img: "🍈" },
  { name: "Papaya",       img: "🍈" },
  { name: "Watermelon",   img: "🍉" },
  { name: "Kiwi",         img: "🥝" },
  { name: "Dragon Fruit", img: "🐉" },
  { name: "Strawberry",   img: "🍓" },
  { name: "Anar",         img: "❤️" },
  { name: "Cherry",       img: "🍒" },
  { name: "Coconut",      img: "🥥" },
  { name: "Dry Fruits",   img: "🥜" },
  { name: "Lemon",        img: "🍋" },
  { name: "Litchi",       img: "🍒" },
  { name: "Mosmi",        img: "🍊" },
  { name: "Pear",         img: "🍐" },
  { name: "Sarifa",       img: "🍏" },
  { name: "Ananas",       img: "🍍" }
];


/* =====================================================================
   SECTION 2: PRODUCTS (saare fruits yahin se aate hain)
   ---------------------------------------------------------------------
   Har fruit ki EK line:
     id       = unique number (kisi aur fruit se same nahi hona chahiye)
     cat      = category ka naam (SECTION 1 jaisa hi likhna)
     name     = fruit ka naam
     price    = asli price (Rs)
     discount = kitne Rs kam (final price = price - discount)
     img      = image file ka naam (CAPITAL/small letter bilkul file jaisa!)

   OPTIONAL (zarurat ho tabhi line me add karo, comma laga ke):
     stock: 2        -> sirf is fruit ka stock alag
     unit: "1 kg"    -> sirf is fruit ka unit alag
     organic: true   -> Organic tag
     featured: true  -> Featured tag

   NAYA FRUIT ADD KARNE KE LIYE:
     Kisi bhi line ko copy karo, neeche paste karo, naya id aur details daalo.
     Last line ke baad comma NAHI lagana, baaki sab lines ke baad comma lagana.
   ===================================================================== */
const baseFruitData = [

  /* ---------- Anar ---------- */
  { id: 1,  cat: "Anar", name: "Kandhari Anar", price: 220, discount: 20, img: "anar5.jpg" },
  { id: 2,  cat: "Anar", name: "Bhagwa Anar",   price: 200, discount: 20, img: "anar4.jpg" },
  { id: 3,  cat: "Anar", name: "Ruby Anar",     price: 210, discount: 20, img: "anar3.jpg" },

  /* ---------- Apple ---------- */
  { id: 6,  cat: "Apple", name: "Shimla Apple",    price: 210, discount: 20, img: "apple1.jpg" },
  { id: 7,  cat: "Apple", name: "Himachal Apple",  price: 220, discount: 20, img: "apple4.jpg" },
  { id: 8,  cat: "Apple", name: "New Seson Apple", price: 200, discount: 20, img: "apple3.jpg" },

  /* ---------- Banana ---------- */
  { id: 12, cat: "Banana", name: "Singha-Puri Banana", price: 70, discount: 15, img: "banana1.jpg" },
  { id: 13, cat: "Banana", name: "Chota size Banana",  price: 80, discount: 20, img: "banana5.jpg" },

  /* ---------- Mango ---------- */
  { id: 17, cat: "Mango", name: "Alphonso Mango", price: 220, discount: 25, img: "mango1.jpg" },
  { id: 18, cat: "Mango", name: "Dasheri Mango",  price: 220, discount: 25, img: "mango2.jpg" },
  { id: 19, cat: "Mango", name: "Langra Mango",   price: 220, discount: 25, img: "mango3.jpg" },

  /* ---------- Orange ---------- */
  { id: 27, cat: "Orange", name: "Nagpur Orange",     price: 200, discount: 10, img: "orange1.jpg" },
  { id: 28, cat: "Orange", name: "Dargaling Orange",  price: 220, discount: 10, img: "orange2.jpg" },

  /* ---------- Guava ---------- */
  { id: 32, cat: "Guava", name: "Allahabad Guava", price: 200, discount: 20, img: "guava1.jpg" },
  { id: 33, cat: "Guava", name: "Pink Guava",      price: 180, discount: 10, img: "guava2.jpg" },
  { id: 34, cat: "Guava", name: "Thai Guava",      price: 180, discount: 10, img: "guava3.jpg" },

  /* ---------- Papaya ---------- */
  { id: 39, cat: "Papaya", name: "Red Lady Papaya",  price: 60, discount: 10, img: "papaya1.jpg" },
  { id: 40, cat: "Papaya", name: "Hawaiian Papaya",  price: 80, discount: 10, img: "papaya2.jpg" },

  /* ---------- Watermelon ---------- */
  { id: 44, cat: "Watermelon", name: "Red Watermelon",     price: 70, discount: 5, img: "watermelon1.jpg" },
  { id: 45, cat: "Watermelon", name: "Striped Watermelon", price: 80, discount: 5, img: "watermelon2.jpg" },

  /* ---------- Dragon Fruit ---------- */
  { id: 48, cat: "Dragon Fruit", name: "Red Dragon Fruit",   price: 200, discount: 25, img: "dragon1.jpg", stock: 2 },
  { id: 49, cat: "Dragon Fruit", name: "White Dragon Fruit", price: 220, discount: 25, img: "dragon2.jpg" },

  /* ---------- Strawberry ----------
     NOTE: image ka naam file jaisa hi hona chahiye (GitHub par capital S hai) */
  { id: 54, cat: "Strawberry", name: "Fresh Strawberry",   price: 150, discount: 15, img: "Strawberry1.jpg" },
  { id: 55, cat: "Strawberry", name: "Organic Strawberry", price: 200, discount: 15, img: "Strawberry2.jpg" },

  /* ---------- Cherry ---------- */
  { id: 56, cat: "Cherry", name: "Red Cherry", price: 300, discount: 40, img: "cherry1.jpg" },

  /* ---------- Coconut ---------- */
  { id: 60, cat: "Coconut", name: "Tender Coconut", price: 60, discount: 5, img: "coconut4.jpg" },
  { id: 61, cat: "Coconut", name: "Green Coconut",  price: 90, discount: 5, img: "coconut2.jpg" },

  /* ---------- Dry Fruits ---------- */
  { id: 64, cat: "Dry Fruits", name: "Assorted Dry Fruit Laddu",         price: 750,  discount: 100, img: "k1.jpg" },
  { id: 65, cat: "Dry Fruits", name: "Cashew Nuts",                      price: 800,  discount: 100, img: "k2.jpg" },
  { id: 66, cat: "Dry Fruits", name: "Dates / Khajur",                   price: 700,  discount: 110, img: "k3.jpg" },
  { id: 67, cat: "Dry Fruits", name: "Date Crown (Dates)",               price: 700,  discount: 100, img: "k4.jpg" },
  { id: 68, cat: "Dry Fruits", name: "Premium Black Dates",              price: 1000, discount: 100, img: "k5.jpg" },
  { id: 69, cat: "Dry Fruits", name: "Triple Mix / Assorted Dry Fruits", price: 800,  discount: 100, img: "k6.jpg" },
  { id: 70, cat: "Dry Fruits", name: "Kimia Dates",                      price: 900,  discount: 90,  img: "k7.jpg" },
  { id: 71, cat: "Dry Fruits", name: "Almonds",                          price: 900,  discount: 100, img: "dryfruit1.jpg", stock: 1 },
  { id: 72, cat: "Dry Fruits", name: "Cashew Nuts Premium",              price: 800,  discount: 100, img: "dryfruit2.jpg" },
  { id: 73, cat: "Dry Fruits", name: "Walnuts",                          price: 700,  discount: 100, img: "dryfruit3.jpg" },
  { id: 74, cat: "Dry Fruits", name: "Black Raisins",                    price: 800,  discount: 100, img: "dryfruit4.jpg" },
  { id: 75, cat: "Dry Fruits", name: "Kaju",                             price: 900,  discount: 100, img: "dryfruit5.jpg" },
  { id: 76, cat: "Dry Fruits", name: "Kishmis",                          price: 280,  discount: 85,  img: "dryfruit6.jpg" },

  /* ---------- Lemon ---------- */
  { id: 77, cat: "Lemon", name: "Indian Lemon", price: 30, discount: 10, img: "lemon1.jpg" },
  { id: 78, cat: "Lemon", name: "Green Lemon",  price: 15, discount: 5,  img: "lemon2.jpg" },

  /* ---------- Litchi ---------- */
  { id: 80, cat: "Litchi", name: "Shahi Litchi", price: 120, discount: 15, img: "lichi1.jpg" },
  { id: 81, cat: "Litchi", name: "China Litchi", price: 120, discount: 15, img: "lichi2.jpg" },

  /* ---------- Mosmi ---------- */
  { id: 84, cat: "Mosmi", name: "Sweet Mosmi", price: 100, discount: 10, img: "mosmi1.jpg" },
  { id: 85, cat: "Mosmi", name: "Fresh Mosmi", price: 110, discount: 10, img: "mosmi2.jpg" },

  /* ---------- Pear ---------- */
  { id: 87, cat: "Pear", name: "Green Pear", price: 150, discount: 10, img: "pear1.jpg" },
  { id: 88, cat: "Pear", name: "Brown Pear", price: 200, discount: 15, img: "pear2.jpg" },

  /* ---------- Sarifa ---------- */
  { id: 92, cat: "Sarifa", name: "Custard Apple",       price: 150, discount: 10, img: "sarifa1.jpg" },
  { id: 93, cat: "Sarifa", name: "Green Custard Apple", price: 200, discount: 20, img: "sarifa2.jpg" },

  /* ---------- Grapes ---------- */
  { id: 96, cat: "Grapes", name: "Green Seedless Grapes", price: 450, discount: 20, img: "grapes1.jpg" },
  { id: 97, cat: "Grapes", name: "Black Grapes",          price: 600, discount: 50, img: "grapes2.jpg" },
  { id: 98, cat: "Grapes", name: "Gol Green Grapes",      price: 250, discount: 30, img: "grapes3.jpg" },
  { id: 99, cat: "Grapes", name: "Gol Black Grapes",      price: 300, discount: 40, img: "grapes4.jpg" },

  /* ---------- Kiwi ---------- */
  { id: 101, cat: "Kiwi", name: "Green Kiwi",    price: 150, discount: 15, img: "kiwi1.jpg" },
  { id: 102, cat: "Kiwi", name: "Golden Kiwi",   price: 180, discount: 15, img: "kiwi2.jpg" },
  { id: 103, cat: "Kiwi", name: "Imported Kiwi", price: 200, discount: 15, img: "kiwi3.jpg" },
  { id: 104, cat: "Kiwi", name: "Fresh Kiwi",    price: 190, discount: 15, img: "kiwi4.jpg" },

  /* ---------- Ananas (Pineapple) ---------- */
  { id: 105, cat: "Ananas", name: "Golden Pineapple", price: 120, discount: 20, img: "ananas1.jpg", stock: 2 }
];


/* =====================================================================
   SECTION 3: CATEGORY DEFAULTS (har category ke liye unit, stock, tags)
   ---------------------------------------------------------------------
   unit     = kis hisaab se bechte ho (1 kg, 1 dozen, 500 g ...)
   stock    = kitna maal hai (0 = Out of Stock dikhega)
   organic  = true to "Organic" tag dikhega
   featured = true to "Featured" tag dikhega

   Ye us category ke SAARE fruits par lagta hai.
   Kisi ek fruit ka alag chahiye to SECTION 2 me us line me stock/unit likho.
   ===================================================================== */
const categoryMeta = {
  "Anar":         { unit: "1 kg",     stock: 8,  organic: true,  featured: true  },
  "Apple":        { unit: "1 kg",     stock: 12, organic: true,  featured: true  },
  "Banana":       { unit: "1 dozen",  stock: 20, organic: false, featured: false },
  "Mango":        { unit: "1 kg",     stock: 8,  organic: true,  featured: true  },
  "Orange":       { unit: "1 kg",     stock: 14, organic: false, featured: false },
  "Guava":        { unit: "1 kg",     stock: 9,  organic: true,  featured: false },
  "Papaya":       { unit: "1 piece",  stock: 6,  organic: false, featured: false },
  "Watermelon":   { unit: "1 piece",  stock: 5,  organic: false, featured: false },
  "Dragon Fruit": { unit: "500 g",    stock: 4,  organic: true,  featured: true  },
  "Strawberry":   { unit: "500 g",    stock: 4,  organic: true,  featured: true  },
  "Cherry":       { unit: "500 g",    stock: 3,  organic: false, featured: true  },
  "Coconut":      { unit: "1 piece",  stock: 10, organic: false, featured: false },
  "Dry Fruits":   { unit: "500 g",    stock: 15, organic: false, featured: true  },
  "Lemon":        { unit: "500 g",    stock: 10, organic: false, featured: false },
  "Litchi":       { unit: "500 g",    stock: 7,  organic: false, featured: false },
  "Mosmi":        { unit: "1 kg",     stock: 8,  organic: false, featured: false },
  "Pear":         { unit: "1 kg",     stock: 7,  organic: false, featured: false },
  "Sarifa":       { unit: "1 kg",     stock: 5,  organic: true,  featured: false },
  "Grapes":       { unit: "1 kg",     stock: 9,  organic: false, featured: true  },
  "Kiwi":         { unit: "500 g",    stock: 6,  organic: false, featured: true  },
  "Ananas":       { unit: "1 piece",  stock: 4,  organic: false, featured: false }
};


/* =====================================================================
   SECTION 4: FINAL DATA BUILD  (isko EDIT NAHI karna)
   ---------------------------------------------------------------------
   SECTION 2 (fruit) + SECTION 3 (category defaults) ko jod kar
   final fruitData banata hai. Fruit ki apni line me jo likha hai wo
   category ke default se pehle maana jata hai.
   ===================================================================== */
const fruitData = baseFruitData.map((fruit) => {
  const meta = categoryMeta[fruit.cat] || {};

  return {
    ...fruit,
    unit:     fruit.unit     ?? meta.unit     ?? "1 unit",
    stock:    fruit.stock    ?? meta.stock    ?? 5,
    organic:  fruit.organic  ?? meta.organic  ?? false,
    featured: fruit.featured ?? meta.featured ?? false
  };
});


/* =====================================================================
   SECTION 5: PAGE STATE (page ki current settings - EDIT NAHI karna)
   ===================================================================== */
let cart = JSON.parse(localStorage.getItem("cart")) || {};   // { fruitId: quantity }

let currentCategory = "All";   // abhi kaunsi category khuli hai
let currentSearch   = "";      // search box me kya likha hai
let currentSort     = "";      // sort option
let onlyAvailable   = false;   // "Available only" filter
let onlyDiscounted  = false;   // "Discount only" filter
let maxPriceFilter  = "";      // max price filter


/* =====================================================================
   SECTION 6: SMALL HELPERS (chhote kaam ke functions)
   ===================================================================== */

/* HTML element ko id se dhoondhne ka short tareeka */
function $(id) {
  return document.getElementById(id);
}

/* Fruit ki final price = price - discount */
function getFinalPrice(fruit) {
  return fruit.price - fruit.discount;
}

/* Fruit ko id se dhoondho */
function getFruitById(id) {
  return fruitData.find((fruit) => fruit.id === id);
}

/* Price ko Rs ke saath dikhao, jaise 220 -> Rs 220 */
function formatPrice(price) {
  return `₹${price}`;
}

/* User ka likha text HTML me daalne se pehle safe banata hai */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* Stock ke hisaab se text */
function getStockText(stock) {
  if (stock <= 0) return "Out of Stock";
  if (stock <= 2) return `Only ${stock} left`;
  return "In Stock";
}

/* Stock ke hisaab se color: laal = khatam, orange = kam, hara = theek */
function getStockColor(stock) {
  if (stock <= 0) return "#dc2626";
  if (stock <= 2) return "#ea580c";
  return "#16a34a";
}

/* Search me har key par turant search na ho, thoda ruk ke ho (250 ms) */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

/* Cart me kitne items hain (total quantity) */
function getCartItemCount() {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}

/* Cart ka total paisa */
function getCartSubtotal() {
  let total = 0;

  Object.keys(cart).forEach((id) => {
    const fruit = getFruitById(Number(id));
    if (!fruit) return;
    total += getFinalPrice(fruit) * cart[id];
  });

  return total;
}

/* Cart ko browser me save karo */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* Upar navbar me cart ka number update karo */
function updateCartCount() {
  const cartBox = $("cart-count");
  if (cartBox) cartBox.innerText = getCartItemCount();
}

/* Right side "Cart Summary" box update karo */
function updateCartSummaryBox() {
  const box = $("cart-summary-box");
  if (!box) return;

  box.innerHTML = `
    <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;padding:16px;">
      <h3 style="margin-bottom:10px;font-size:18px;font-weight:900;color:#0f172a;">Cart Summary</h3>
      <p style="margin:6px 0;color:#475569;">Items: <strong style="color:#0f172a;">${getCartItemCount()}</strong></p>
      <p style="margin:6px 0;color:#475569;">Subtotal: <strong style="color:#16a34a;">${formatPrice(getCartSubtotal())}</strong></p>
    </div>
  `;
}


/* =====================================================================
   SECTION 7: WISHLIST (pasandida fruits - dil wala button)
   ===================================================================== */
function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

function saveWishlist(wishlist) {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function isInWishlist(id) {
  return getWishlist().some((item) => item.id === id);
}

/* Navbar me wishlist ka number */
function updateWishlistCount() {
  const countBox = $("wishlist-count");
  if (countBox) countBox.innerText = getWishlist().length;
}

/* Dil dabaya: wishlist me hai to hatao, nahi hai to jodo */
function toggleWishlist(id) {
  const fruit = getFruitById(id);
  if (!fruit) return;

  let wishlist = getWishlist();

  if (wishlist.some((item) => item.id === id)) {
    wishlist = wishlist.filter((item) => item.id !== id);
  } else {
    wishlist.push(fruit);
  }

  saveWishlist(wishlist);
  updateWishlistCount();
  applyFilters();   // cards dobara banao taaki dil badal jaye
}


/* =====================================================================
   SECTION 8: LEFT SIDEBAR CATEGORIES
   ===================================================================== */

/* Sidebar me categories ki list banao */
function loadCategories() {
  const list = $("category-list");
  if (!list) return;

  list.innerHTML = "";

  categories.forEach((cat) => {
    const li = document.createElement("li");
    li.className = "sidebar-category";
    li.innerHTML = `${cat.img} ${cat.name}`;
    li.dataset.category = cat.name;

    if (cat.name === currentCategory) li.classList.add("active");

    /* Category par click: us category ke fruits dikhao */
    li.onclick = () => {
      currentCategory = cat.name;
      updateActiveCategory();
      applyFilters();
    };

    list.appendChild(li);
  });
}

/* Jo category khuli hai usko highlight karo */
function updateActiveCategory() {
  document.querySelectorAll(".sidebar-category").forEach((item) => {
    item.classList.toggle("active", item.dataset.category === currentCategory);
  });
}

/* Fruits ke upar heading (All Fruits / Mango / ...) */
function updateCategoryTitle() {
  const title = $("category-title");
  if (!title) return;

  title.innerText = currentCategory === "All" ? "All Fruits" : currentCategory;
}


/* =====================================================================
   SECTION 9: SEARCH (search box + popup results)
   ---------------------------------------------------------------------
   Desktop aur mobile dono search box ek jaise chalte hain.
   Search karte hi ek popup (overlay) khulta hai jisme matching items dikhte hain.
   ===================================================================== */

/* Dono search boxes me se jo bhara hai uska text lo */
function readSearchValue() {
  const desktop = $("search-input");
  const mobile  = $("search-input-mobile");

  const desktopValue = desktop ? desktop.value.trim().toLowerCase() : "";
  const mobileValue  = mobile  ? mobile.value.trim().toLowerCase()  : "";

  return desktopValue || mobileValue;
}

/* Jis box me type kar rahe ho uska text doosre box me bhi copy karo */
function syncSearchInputs() {
  const desktop = $("search-input");
  const mobile  = $("search-input-mobile");
  if (!desktop || !mobile) return;

  if (document.activeElement === desktop) mobile.value = desktop.value;
  else if (document.activeElement === mobile) desktop.value = mobile.value;
}

/* Search chalao (button / Enter / type karne par) */
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

/* Popup kholo */
function openSearchOverlay() {
  const overlay = $("search-overlay");
  if (!overlay) return;

  overlay.classList.add("show");
  document.body.classList.add("search-overlay-open");

  const overlayInput = $("overlay-search-input");
  if (overlayInput) {
    overlayInput.value = readSearchValue();
    setTimeout(() => overlayInput.focus(), 50);
  }
}

/* Popup band karo */
function closeSearchOverlay() {
  const overlay = $("search-overlay");
  if (!overlay) return;

  overlay.classList.remove("show");
  document.body.classList.remove("search-overlay-open");
}

/* Popup band karo AUR niche ke fruits ko search text ke hisaab se dikhao */
function closeSearchOverlayAndRefresh() {
  closeSearchOverlay();
  applyFilters();
}

/* Search text se match hone wale fruits dhoondo (naam, category, price, unit me) */
function getSearchResults(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];

  return fruitData.filter((fruit) =>
    fruit.name.toLowerCase().includes(q) ||
    fruit.cat.toLowerCase().includes(q) ||
    String(fruit.price).includes(q) ||
    fruit.unit.toLowerCase().includes(q)
  );
}

/* Popup ke andar results ke cards banao */
function renderSearchOverlayResults(query) {
  const resultBox   = $("search-overlay-results");
  const resultCount = $("search-result-count");
  if (!resultBox || !resultCount) return;

  /* Kuch type nahi kiya */
  if (!query.trim()) {
    resultCount.innerText = "Type to search items";
    resultBox.innerHTML = `<div class="search-empty-state">Start typing to search fruits and products</div>`;
    return;
  }

  const results = getSearchResults(query);
  resultCount.innerText = `${results.length} item(s) found`;

  /* Kuch nahi mila */
  if (results.length === 0) {
    resultBox.innerHTML = `<div class="search-empty-state">No matching items found for "${escapeHtml(query)}"</div>`;
    return;
  }

  /* Results ke cards */
  resultBox.innerHTML = results.map((fruit) => `
    <div class="search-result-card" onclick="openProductFromSearch(${fruit.id})">
      <img src="${fruit.img}" alt="${fruit.name}" class="search-result-img">
      <div class="search-result-content">
        <span class="search-result-category">${fruit.cat}</span>
        <div class="search-result-title">${fruit.name}</div>
        <div class="search-result-meta">
          <span class="search-result-price">${formatPrice(getFinalPrice(fruit))}</span>
          <span>${fruit.unit}</span>
          <span>${getStockText(fruit.stock)}</span>
        </div>
      </div>
    </div>
  `).join("");
}

/* Popup me kisi fruit par click: popup band karo aur product page kholo */
function openProductFromSearch(id) {
  closeSearchOverlay();
  viewDetails(id);
}

/* Popup ke saare click/keyboard events yahan jodte hain */
function initSearchOverlay() {
  const overlayInput    = $("overlay-search-input");
  const overlayClose    = $("search-overlay-close");
  const overlayBackdrop = $("search-overlay-backdrop");

  /* Search box par click/focus karte hi popup khule */
  [$("search-input"), $("search-input-mobile")].forEach((input) => {
    if (!input) return;

    input.addEventListener("focus", function () {
      const value = input.value.trim();
      if (value) renderSearchOverlayResults(value);
      openSearchOverlay();
    });
  });

  /* Popup ke andar wale search box me type karna */
  if (overlayInput) {
    overlayInput.addEventListener("input", function () {
      const value = this.value.trim();

      const desktop = $("search-input");
      const mobile  = $("search-input-mobile");
      if (desktop) desktop.value = value;
      if (mobile)  mobile.value  = value;

      currentSearch = value.toLowerCase();
      renderSearchOverlayResults(value);
    });
  }

  /* X button aur peeche ke andhere hisse par click = band karo */
  if (overlayClose)    overlayClose.addEventListener("click", closeSearchOverlayAndRefresh);
  if (overlayBackdrop) overlayBackdrop.addEventListener("click", closeSearchOverlayAndRefresh);

  /* Esc key = band karo */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeSearchOverlayAndRefresh();
  });
}


/* =====================================================================
   SECTION 10: FILTERS + SORT
   ---------------------------------------------------------------------
   Category, search, available only, discount only, max price aur sort
   sab yahan lagte hain, phir cards dikhaye jaate hain.
   ===================================================================== */
function applyFilters() {
  let filtered = [...fruitData];

  /* 1) Category */
  if (currentCategory !== "All") {
    filtered = filtered.filter((fruit) => fruit.cat === currentCategory);
  }

  /* 2) Search text */
  if (currentSearch) {
    filtered = filtered.filter((fruit) =>
      fruit.name.toLowerCase().includes(currentSearch) ||
      fruit.cat.toLowerCase().includes(currentSearch)
    );
  }

  /* 3) Sirf available (stock > 0) */
  if (onlyAvailable) {
    filtered = filtered.filter((fruit) => fruit.stock > 0);
  }

  /* 4) Sirf discount wale */
  if (onlyDiscounted) {
    filtered = filtered.filter((fruit) => fruit.discount > 0);
  }

  /* 5) Max price (final price is se zyada na ho) */
  if (maxPriceFilter !== "" && !isNaN(maxPriceFilter)) {
    filtered = filtered.filter((fruit) => getFinalPrice(fruit) <= Number(maxPriceFilter));
  }

  /* 6) Sort */
  if (currentSort === "price-low") {
    filtered.sort((a, b) => getFinalPrice(a) - getFinalPrice(b));
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => getFinalPrice(b) - getFinalPrice(a));
  } else if (currentSort === "discount-high") {
    filtered.sort((a, b) => b.discount - a.discount);
  } else if (currentSort === "name-az") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  updateCategoryTitle();
  displayFruits(filtered);
  updateCartSummaryBox();
}


/* =====================================================================
   SECTION 11: FRUIT CARDS (screen par fruits dikhana)
   ===================================================================== */

/* Card ke neeche wala hissa:
   - stock 0     -> grey "Out of Stock" button
   - cart me hai -> [ - 2 + ] wala control
   - cart me nahi-> hara "Add to Cart" button */
function getCartControlsHTML(fruit) {
  const qty = cart[fruit.id] || 0;

  if (fruit.stock <= 0) {
    return `
      <button disabled
        style="background:#cbd5e1;color:#475569;padding:10px 14px;border:none;border-radius:12px;width:100%;cursor:not-allowed;font-weight:800;">
        Out of Stock
      </button>
    `;
  }

  if (qty > 0) {
    return `
      <div style="display:flex;align-items:center;justify-content:center;gap:8px;background:#22c55e;padding:8px 10px;border-radius:12px;color:white;">
        <button onclick="minusItem(${fruit.id})" style="background:white;color:#22c55e;border:none;padding:2px 8px;border-radius:8px;font-weight:bold;">-</button>
        <span style="min-width:20px;text-align:center;font-weight:700;">${qty}</span>
        <button onclick="plusItem(${fruit.id})" style="background:white;color:#22c55e;border:none;padding:2px 8px;border-radius:8px;font-weight:bold;">+</button>
      </div>
    `;
  }

  return `
    <button onclick="addToCart(${fruit.id})"
      style="background:#16a34a;color:white;padding:10px 14px;border:none;border-radius:12px;width:100%;font-weight:800;">
      Add to Cart
    </button>
  `;
}

/* Sirf ek card ka cart button/control dobara banao (poora page nahi) */
function renderCartControls(id) {
  const box = $("cart-" + id);
  const fruit = getFruitById(id);
  if (!box || !fruit) return;

  box.innerHTML = getCartControlsHTML(fruit);
}

/* Ek fruit ka poora card (HTML) banao */
function getFruitCardHTML(fruit) {
  const finalPrice = getFinalPrice(fruit);

  return `
    <div class="fruit-card">

      <!-- Photo + wishlist (dil) button -->
      <div style="position:relative;">
        <img src="${fruit.img}" class="fruit-img" alt="${fruit.name}">
        <button onclick="toggleWishlist(${fruit.id})"
          style="position:absolute;top:12px;right:12px;background:white;border:none;border-radius:999px;width:42px;height:42px;font-size:20px;box-shadow:0 8px 20px rgba(0,0,0,0.12);cursor:pointer;">
          ${isInWishlist(fruit.id) ? "❤️" : "🤍"}
        </button>
      </div>

      <!-- Tags: OFF / Organic / Featured -->
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin:12px 0 10px 0;">
        ${fruit.discount > 0 ? `<span style="background:#fee2e2;color:#b91c1c;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:800;">${formatPrice(fruit.discount)} OFF</span>` : ""}
        ${fruit.organic ? `<span style="background:#dcfce7;color:#166534;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:800;">Organic</span>` : ""}
        ${fruit.featured ? `<span style="background:#fef3c7;color:#92400e;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:800;">Featured</span>` : ""}
      </div>

      <!-- Naam, unit, stock -->
      <h3 style="font-size:20px;font-weight:800;margin-bottom:6px;color:#0f172a;">${fruit.name}</h3>
      <div style="font-size:14px;color:#64748b;margin-bottom:6px;font-weight:600;">${fruit.unit}</div>
      <div style="font-size:14px;font-weight:700;color:${getStockColor(fruit.stock)};margin-bottom:12px;">${getStockText(fruit.stock)}</div>

      <!-- Price: kata hua purana + hara naya -->
      <div style="margin-bottom:16px;">
        <span style="text-decoration:line-through;color:#94a3b8;font-size:14px;">${formatPrice(fruit.price)}</span>
        <span style="color:#16a34a;font-weight:900;font-size:22px;margin-left:8px;">${formatPrice(finalPrice)}</span>
      </div>

      <!-- Buttons: View Details + Cart control -->
      <div class="flex flex-col gap-3">
        <button onclick="viewDetails(${fruit.id})"
          style="background:#facc15;color:#111827;padding:10px 14px;border:none;border-radius:12px;font-weight:800;">
          View Details
        </button>
        <div id="cart-${fruit.id}">
          ${getCartControlsHTML(fruit)}
        </div>
      </div>

    </div>
  `;
}

/* Diye gaye fruits ki list screen par dikhao */
function displayFruits(list) {
  const container = $("product-container");
  const itemCount = $("item-count");
  if (!container) return;

  if (itemCount) itemCount.innerText = `Showing ${list.length} items`;

  /* Kuch nahi mila */
  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full bg-white rounded-3xl border border-slate-200 p-10 text-center text-slate-500">
        <h3 style="font-size:24px;font-weight:800;margin-bottom:8px;">No fruits found</h3>
        <p>Try another search or reset filters.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(getFruitCardHTML).join("");
}


/* =====================================================================
   SECTION 12: CART ACTIONS (Add / + / -)
   ---------------------------------------------------------------------
   Stock se zyada quantity cart me nahi ja sakti.
   ===================================================================== */

/* Cart ko save karo aur screen par sab kuch update karo */
function afterCartChange(id) {
  saveCart();
  updateCartCount();
  renderCartControls(id);
  updateCartSummaryBox();
}


/* ============================================================================================================
  QUICKROOT FLOATING CART  

/* ==================== SECTION 1 START ====================
   BASIC SETTINGS
   Yahan se page, cart ID aur delivery limit control hoti hai.
   In values ko badal kar settings change kar sakte hain.
   ========================================================= */

(function () {
  "use strict";

  // View Cart button par click karne se ye page khulega.
  const CART_PAGE = "cart.html";

  // Floating cart ki unique ID. Ise bina zaroorat mat badalna.
  const BAR_ID = "qr-floating-cart";

  // Floating cart ke CSS style ki unique ID.
  const STYLE_ID = "qr-floating-cart-style";

  // ₹500 ya usse zyada subtotal hone par free delivery message.
  // Amount badalna ho to 500 ko badal dein.
  const FREE_DELIVERY_ABOVE = 500;


/* ==================== SECTION 1 END ====================== */


/* ==================== SECTION 2 START ====================
   LOCAL STORAGE SE DATA PADHNA

   localStorage mein cart aur product data save hota hai.
   Ye functions wahi data read karte hain.
   ========================================================= */

  function readStorage(key, fallback) {
    try {
      const value = JSON.parse(localStorage.getItem(key));

      // Data na mile to fallback value return karo.
      return value == null ? fallback : value;
    } catch (error) {
      // Data galat format mein ho to website crash na ho.
      return fallback;
    }
  }

  // Cart ki quantity read karo.
  // Expected format: { "productID": quantity }
  function getCartData() {
    return readStorage("cart", {});
  }

  // Products ki list read karo.
  // Expected storage key: fruitData
  function getFruitData() {
    return readStorage("fruitData", []);
  }

/* ==================== SECTION 2 END ====================== */


/* ==================== SECTION 3 START ====================
   CART KI DETAILS NIKALNA
   ========================================================= */

  function getCartDetails() {
    const cart = getCartData();
    const fruits = getFruitData();

    let quantity = 0;
    let subtotal = 0;
    const items = [];

    Object.keys(cart).forEach(function (id) {
      const qty = Number(cart[id]) || 0;

      // Zero ya negative quantity ko ignore karo.
      if (qty <= 0) return;

      // Cart ID ke saath matching product find karo.
      const fruit = fruits.find(function (item) {
        return String(item.id) === String(id);
      });

      // Product data na mile tab bhi quantity count karo.
      if (!fruit) {
        quantity += qty;
        return;
      }

      // Discounted price = price - discount.
      // Negative price allow nahi karna.
      const price = Math.max(
        0,
        (Number(fruit.price) || 0) -
        (Number(fruit.discount) || 0)
      );

      quantity += qty;
      subtotal += price * qty;

      // Image list mein maximum 4 products dikhaye jayenge.
      items.push({
        id: fruit.id,
        name: fruit.name || "Fruit",
        img: fruit.img || "",
        qty: qty
      });
    });

    return {
      quantity: quantity,
      subtotal: subtotal,
      items: items
    };
  }

/* ==================== SECTION 3 END ====================== */


/* ==================== SECTION 4 START ====================
   FLOATING CART KA DESIGN / CSS

   DESIGN SETTINGS GUIDE:
   - left/right: cart ki side spacing.
   - bottom: screen ke neeche spacing.
   - z-index: cart doosre elements ke upar rahega.
   - padding: cart ke andar ki spacing.
   - background: cart ka background color.
   - border-radius: corners kitne gol honge.
   - box-shadow: cart ke neeche shadow.
   - image width/height: product image ka size.
   - @media: mobile screen ka design.
   ========================================================= */

  function addStyles() {
    // Style pehle se laga hai to dobara mat lagao.
    if (document.getElementById(STYLE_ID)) return;

    const style = document.createElement("style");
    style.id = STYLE_ID;

    style.textContent = `

      /* ===== BODY SPACING START =====
         Cart visible hone par page ke neeche 100px jagah.
         Isse page ka content floating cart ke peeche kam chhupega.
      */
      body.has-qr-floating-cart {
        padding-bottom: 100px !important;
      }
      /* ===== BODY SPACING END ===== */


      /* ===== MAIN FLOATING BAR START ===== */

      #${BAR_ID} {
        position: fixed;

        /* Desktop par left aur right se 16px gap. */
        left: 41%;
        right: 25%;

        /* Screen ke neeche se 16px gap. */
        bottom: 40px;

        /* Cart ko doosre elements ke upar rakhta hai. */
        z-index: 99999;

        /* Default mein cart chhupa rahega. */
        display: none;

        /* Cart ke andar items ko side-by-side rakho. */
        align-items: center;
        justify-content: space-between;
        gap: 14px;

        /* Andar ki spacing: vertical 12px, horizontal 16px. */
        padding: 10px 10px;

        /* Text aur background colors. */
        color: #101010;
        background: #f5f5ef;

        /* Border aur corners. */
        border: 1px solid rgba(18, 17, 17, 0.12);
        border-radius: 18px;

        /* Shadow: horizontal, vertical, blur. */
        box-shadow: 0 12px 40px rgba(246, 236, 236, 0.28);

        /* Text font. */
        font-family: Arial, sans-serif;

        /* Padding ko total width ke andar rakho. */
        box-sizing: border-box;
      }

      /* Cart visible karne wali class. */
      #${BAR_ID}.qr-visible {
        display: flex;
        animation: qrCartEnter .25s ease-out;
      }

      /* ===== MAIN FLOATING BAR END ===== */


      /* ===== LEFT SIDE / PRODUCT INFO START ===== */

      #${BAR_ID} .qr-left {
        display: flex;
        align-items: center;

        /* Image aur text ke beech 12px gap. */
        gap: 12px;

        min-width: 0;
      }

      /* Product images ko ek line mein rakho. */
      #${BAR_ID} .qr-items {
        display: flex;
        align-items: center;
        flex-shrink: 0;
      }

      /* ===== LEFT SIDE / PRODUCT INFO END ===== */


      /* ===== PRODUCT IMAGE SETTINGS START ===== */

      #${BAR_ID} .qr-item-image {
        /* Desktop image size: 42 × 42 pixels. */
        width: 42px;
        height: 42px;

        /* Image ko box mein fit karo. */
        object-fit: cover;

        /* Image ke around border. */
        border: 2px solid #111827;

        /* 50% = gol image. */
        border-radius: 50%;

        /* Images ko halka overlap karna. */
        margin-left: -10px;

        background: #fff;
      }

      /* Pehli image ko left side se overlap mat karo. */
      #${BAR_ID} .qr-item-image:first-child {
        margin-left: 0;
      }

      /* Image available na ho to emoji box. */
      #${BAR_ID} .qr-item-emoji {
        width: 42px;
        height: 42px;

        display: grid;
        place-items: center;

        margin-left: -10px;
        border: 2px solid #111827;
        border-radius: 50%;

        background: #101010;
        color: #111827;

        /* Emoji ka size 20px. */
        font-size: 20px;
      }

      /* Pehle emoji ka left margin zero. */
      #${BAR_ID} .qr-item-emoji:first-child {
        margin-left: 0;
      }

      /* ===== PRODUCT IMAGE SETTINGS END ===== */


      /* ===== TITLE AUR SUBTITLE START ===== */

      #${BAR_ID} .qr-info {
        min-width: 0;
      }

      /* Example: 2 items in cart */
      #${BAR_ID} .qr-title {
        font-size: 14px;
        font-weight: 800;
        line-height: 1.4;
      }

      /* Example: Subtotal: ₹240 */
      #${BAR_ID} .qr-subtitle {
        margin-top: 3px;
        color: #0a0a0a;
        font-size: 12px;
      }

      /* ===== TITLE AUR SUBTITLE END ===== */


      /* ===== VIEW CART BUTTON START ===== */

      #${BAR_ID} .qr-view-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 7px;

        /* Button ko squeeze hone se bachao. */
        flex-shrink: 0;

        /* Button ki spacing: vertical 12px, horizontal 17px. */
        padding: 12px 17px;

        /* Button text ka color. */
        color: #052e16;

        /* Button ka green background. */
        background: #4ade80;

        /* Button corners. */
        border-radius: 12px;

        /* Button text size aur boldness. */
        font-size: 14px;
        font-weight: 900;

        /* Link ka underline hatao. */
        text-decoration: none;

        /* Hover par smooth transition. */
        transition: background .2s ease, transform .2s ease;
      }

      /* Mouse le jaane par button ka color badle. */
      #${BAR_ID} .qr-view-button:hover {
        background: #86efac;
        transform: translateY(-1px);
      }

      /* ===== VIEW CART BUTTON END ===== */


      /* ===== CART ENTRY ANIMATION START ===== */

      @keyframes qrCartEnter {
        from {
          opacity: 0;
          transform: translateY(15px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Animation duration: 0.25 second. */
      /* ===== CART ENTRY ANIMATION END ===== */


      /* ===== MOBILE RESPONSIVE DESIGN START =====
         Ye settings tab apply hongi jab screen width 480px
         ya usse kam hogi.
      */

      @media (max-width: 480px) {

        #${BAR_ID} {
          /* Mobile par side aur bottom gap 8px. */
          left: 8px;
          right: 8px;
          bottom: 8px;

          gap: 8px;

          /* Mobile par kam padding. */
          padding: 10px;

          /* Mobile corners. */
          border-radius: 15px;
        }

        /* Mobile image size: 34 × 34 pixels. */
        #${BAR_ID} .qr-item-image,
        #${BAR_ID} .qr-item-emoji {
          width: 34px;
          height: 34px;
        }

        /* Mobile title text size: 12px. */
        #${BAR_ID} .qr-title {
          font-size: 12px;
        }

        /* Mobile subtitle text size: 11px. */
        #${BAR_ID} .qr-subtitle {
          font-size: 11px;
        }

        /* Mobile button size. */
        #${BAR_ID} .qr-view-button {
          padding: 11px 12px;
          font-size: 12px;
        }
      }

      /* ===== MOBILE RESPONSIVE DESIGN END ===== */
    `;

    // CSS ko page ke head mein add karo.
    document.head.appendChild(style);
  }

/* ==================== SECTION 4 END ====================== */


/* ==================== SECTION 5 START ====================
   FLOATING CART KA HTML BANANA

   Yahan cart ka structure banta hai:
   - Left side: product images.
   - Beech mein: quantity aur subtotal.
   - Right side: View Cart button.
   ========================================================= */

  function createBar() {
    // Agar cart pehle se bana hua hai to wahi return karo.
    let bar = document.getElementById(BAR_ID);
    if (bar) return bar;

    bar = document.createElement("div");
    bar.id = BAR_ID;

    // Screen reader ko cart updates batane mein madad.
    bar.setAttribute("aria-live", "polite");

    bar.innerHTML = `
      <div class="qr-left">

        <!-- Product images yahan render hongi. -->
        <div class="qr-items" id="qr-floating-cart-images"></div>

        <!-- Quantity aur subtotal text. -->
        <div class="qr-info">
          <div class="qr-title" id="qr-floating-cart-title">
            Your cart
          </div>

          <div class="qr-subtitle" id="qr-floating-cart-subtitle"></div>
        </div>
      </div>

      <!-- Button click par cart.html khulega. -->
      <a class="qr-view-button" href="${CART_PAGE}">
        View Cart <span aria-hidden="true">→</span>
      </a>
    `;

    // Floating bar ko page mein add karo.
    document.body.appendChild(bar);

    return bar;
  }

/* ==================== SECTION 5 END ====================== */


/* ==================== SECTION 6 START ====================
   PRODUCT IMAGES DIKHANA

   Maximum 4 product images floating cart mein dikhengi.
   Image missing ya load fail ho to fallback emoji dikh sakta hai.
   ========================================================= */

  function renderImages(items) {
    const box = document.getElementById("qr-floating-cart-images");
    if (!box) return;

    // Purani images hatao, taaki duplicates na banein.
    box.innerHTML = "";

    // Maximum 4 products ki images dikhana.
    items.slice(0, 4).forEach(function (item) {

      if (item.img) {
        const img = document.createElement("img");

        img.className = "qr-item-image";
        img.src = item.img;
        img.alt = item.name;

        // Image load fail ho to apple emoji dikhao.
        img.onerror = function () {
          const fallback = document.createElement("span");
          fallback.className = "qr-item-emoji";
          fallback.textContent = "🍎";
          img.replaceWith(fallback);
        };

        box.appendChild(img);

      } else {
        // Product image URL hi na ho to cart emoji.
        const emoji = document.createElement("span");
        emoji.className = "qr-item-emoji";
        emoji.textContent = "🛒";
        box.appendChild(emoji);
      }
    });
  }

/* ==================== SECTION 6 END ====================== */


/* ==================== SECTION 7 START ====================
   CART REFRESH KARNA

   Add, plus ya minus ke baad:
   - Quantity dobara read hogi.
   - Subtotal dobara calculate hoga.
   - Images update hongi.
   - Empty cart par floating bar hide hogi.
   ========================================================= */

  function refresh() {
    // Body available nahi hai to abhi kuch mat karo.
    if (!document.body) return;

    addStyles();

    // Cart bar create ya retrieve karo.
    const bar = createBar();

    // Latest cart details read karo.
    const details = getCartDetails();

    const title = document.getElementById("qr-floating-cart-title");
    const subtitle = document.getElementById("qr-floating-cart-subtitle");

    // Cart khaali ho to bar chhupa do.
    if (details.quantity <= 0) {
      bar.classList.remove("qr-visible");
      document.body.classList.remove("has-qr-floating-cart");
      return;
    }

    // Product images refresh karo.
    renderImages(details.items);

    // Total quantity ka text.
    if (title) {
      title.textContent =
        details.quantity +
        (details.quantity === 1 ? " item in cart" : " items in cart");
    }

    // ₹500 se kam par subtotal,
/* ===== LIVE CART TOTAL: START ===== */

// Cart mein sabhi products ka total price dikhana.
if (subtitle) {
  subtitle.textContent =
    "Total: ₹" +
    details.subtotal.toLocaleString("en-IN", {
      maximumFractionDigits: 2
    });
}

/* ===== LIVE CART TOTAL: END ===== */


    // Cart ko visible karo.
    bar.classList.add("qr-visible");

    // Page ke neeche extra space reserve karo.
    document.body.classList.add("has-qr-floating-cart");
  }

/* ==================== SECTION 7 END ====================== */


/* ==================== SECTION 8 START ====================
   ADD / PLUS / MINUS FUNCTIONS KO WRAP KARNA

   Ye original cart function ko chalata hai aur uske baad
   floating cart ko refresh karta hai.

   NOTE:
   Agar original function is waqt available nahi hai,
   to ye wrapper us function ko wrap nahi kar payega.
   ========================================================= */

  function wrapCartFunction(functionName) {
    const original = window[functionName];

    // Function available nahi hai to return.
    if (
      typeof original !== "function" ||
      original.qrFloatingWrapped
    ) {
      return;
    }

    // Original function ke around refresh lagao.
    function wrappedCartFunction() {
      const result = original.apply(this, arguments);

      // Cart update hone ke baad floating bar refresh karo.
      refresh();

      return result;
    }

    // Dobara wrapper lagne se bachao.
    wrappedCartFunction.qrFloatingWrapped = true;

    // Window par original function ko wrapped version se replace karo.
    window[functionName] = wrappedCartFunction;
  }

/* ==================== SECTION 8 END ====================== */


/* ==================== SECTION 9 START ====================
   INITIALIZATION / START

   Page ready hone par:
   1. CSS load karo.
   2. Floating cart create karo.
   3. Add, plus, minus functions wrap karo.
   4. Cart ko pehli baar refresh karo.
   ========================================================= */

  function start() {
    addStyles();
    createBar();

    wrapCartFunction("addToCart");
    wrapCartFunction("plusItem");
    wrapCartFunction("minusItem");

    refresh();
  }

/* ==================== SECTION 9 END ====================== */


/* ==================== SECTION 10 START ===================
   DOOSRE TAB KE CART UPDATES

   Agar isi website ka cart kisi doosre browser tab mein
   change ho, to current tab bhi refresh karne ki koshish karega.

   NOTE:
   Storage event aam taur par doosre tab mein fire hota hai,
   usi tab mein nahi jisne localStorage badla.
   ========================================================= */

  window.addEventListener("storage", function (event) {
    if (event.key === "cart" || event.key === "fruitData") {
      refresh();
    }
  });

/* ==================== SECTION 10 END ===================== */


/* ==================== SECTION 11 START ===================
   PAGE READY HONE PAR START KARNA

   DOMContentLoaded:
   HTML structure ready hone par start() chalta hai.

   load:
   Page ke load event par ek aur refresh hota hai.
   ========================================================= */

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }

  window.addEventListener("load", refresh);

/* ==================== SECTION 11 END ===================== */


/* ==================== SECTION 12 START ===================
   PUBLIC REFRESH FUNCTION

   script.js se zaroorat padne par:
   window.QRFloatCart.refresh();

   Isse floating cart manually refresh kar sakte hain.
   ========================================================= */

  window.QRFloatCart = {
    refresh: refresh
  };

/* ==================== SECTION 12 END =============== */

})();

/* ==========================================
   QUICKROOT FLOATING CART
   END OF FILE: floatcart.js

   IS FILE KE BAAD ISKA KOI AUR CODE PASTE MAT KARNA.
   ============================================================================================================== */


/* "Add to Cart" dabaya */
function addToCart(id) {
  const fruit = getFruitById(id);
  if (!fruit || fruit.stock <= 0) return;

  if ((cart[id] || 0) >= fruit.stock) return;   // stock se zyada nahi

  cart[id] = (cart[id] || 0) + 1;
  afterCartChange(id);
}

/* "+" dabaya */
function plusItem(id) {
  addToCart(id);
}

/* "-" dabaya (1 bacha tha to cart se hata do) */
function minusItem(id) {
  if (!cart[id]) return;

  if (cart[id] > 1) {
    cart[id]--;
  } else {
    delete cart[id];
  }

  afterCartChange(id);
}


/* =====================================================================
   SECTION 13: PRODUCT DETAILS PAGE
   ---------------------------------------------------------------------
   Fruit ko browser me save karke product.html kholta hai.
   ===================================================================== */
function viewDetails(id) {
  const fruit = getFruitById(id);
  if (!fruit) return;

  localStorage.setItem("selectedProduct", JSON.stringify(fruit));
  localStorage.setItem("productSource", "index");
  window.location.href = "product.html";
}


/* =====================================================================
   SECTION 14: DELIVERY LOCATION (navbar wala location selector)
   ---------------------------------------------------------------------
   Do tareeke: (1) GPS se current location  (2) haath se address likhna
   Chuni hui location browser me save rehti hai.
   ===================================================================== */
const LOCATION_STORAGE_KEY = "selectedDeliveryLocation";

/* Save ki hui location padho */
function getSavedLocationData() {
  try {
    return JSON.parse(localStorage.getItem(LOCATION_STORAGE_KEY)) || null;
  } catch (error) {
    return null;
  }
}

/* Location save karo */
function saveLocationData(data) {
  localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(data));
}

/* Navbar me location ka text dikhao */
function renderSelectedLocation(data) {
  const title   = $("selected-location");
  const subtext = $("selected-location-subtext");   // optional: na ho to bhi chalega

  if (!title) return;

  if (!data) {
    title.innerText = "Select delivery location";
    if (subtext) subtext.innerText = "Current location ya manual address add karo";
    return;
  }

  title.innerText = data.label || "Selected location";
  if (subtext) {
    subtext.innerText = data.subtext || (data.type === "gps" ? "Current location selected" : "Manual address");
  }
}

/* Dropdown ke andar chhota status message (loading / success / error) */
function setLocationStatus(message, type = "") {
  const statusText = $("location-status-text");
  if (!statusText) return;

  statusText.className = "location-helper-text";
  if (type) statusText.classList.add(type);
  statusText.innerText = message;
}

/* Dropdown band / khol */
function closeLocationDropdown() {
  const dropdown = $("location-dropdown");
  const box = $("location-box");
  if (dropdown) dropdown.classList.remove("show");
  if (box) box.classList.remove("active");
}

function openLocationDropdown() {
  const dropdown = $("location-dropdown");
  const box = $("location-box");
  if (dropdown) dropdown.classList.add("show");
  if (box) box.classList.add("active");
}

/* GPS coordinates se address ka naam dhoondho (free OpenStreetMap service) */
async function reverseGeocode(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
  const response = await fetch(url, { headers: { Accept: "application/json" } });

  if (!response.ok) throw new Error("Unable to fetch address");
  return response.json();
}

/* Lambe address ko chhota karo (42 akshar tak) */
function shortenText(text) {
  return text.length > 42 ? text.slice(0, 42) + "..." : text;
}

/* "Use current location" button */
async function detectCurrentLocation() {
  if (!navigator.geolocation) {
    setLocationStatus("Browser geolocation support nahi karta", "error");
    return;
  }

  setLocationStatus("Location fetch ho rahi hai...", "loading");

  navigator.geolocation.getCurrentPosition(
    /* Location mil gayi */
    async function (position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      let locationData;

      try {
        const geoData = await reverseGeocode(latitude, longitude);
        const address = geoData.display_name || `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

        locationData = {
          type: "gps",
          label: shortenText(address),
          fullAddress: address,
          subtext: "Current location selected",
          latitude,
          longitude
        };
        setLocationStatus("Current location saved", "success");
      } catch (error) {
        /* Address ka naam nahi mila to sirf coordinates save karo */
        const coords = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;

        locationData = {
          type: "gps",
          label: coords,
          fullAddress: coords,
          subtext: "Coordinates saved",
          latitude,
          longitude
        };
        setLocationStatus("Address na mila, coordinates save ho gaye", "success");
      }

      saveLocationData(locationData);
      renderSelectedLocation(locationData);
      closeLocationDropdown();
    },

    /* Location nahi mili */
    function (error) {
      let message = "Location access allow karo";
      if (error.code === 1) message = "Location permission deny ho gaya";
      else if (error.code === 2) message = "Location unavailable hai";
      else if (error.code === 3) message = "Location request timeout ho gaya";

      setLocationStatus(message, "error");
    },

    { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
  );
}

/* Haath se likha address save karo */
function saveManualLocation() {
  const input = $("manual-location-input");
  if (!input) return;

  const value = input.value.trim();
  if (!value) {
    setLocationStatus("Manual address enter karo", "error");
    return;
  }

  const locationData = {
    type: "manual",
    label: shortenText(value),
    fullAddress: value,
    subtext: "Manual address saved"
  };

  saveLocationData(locationData);
  renderSelectedLocation(locationData);
  setLocationStatus("Manual address saved", "success");
  input.value = "";
  closeLocationDropdown();
}

/* Location selector ke saare click events jodo */
function initLocationSelector() {
  const wrapper       = $("location-wrapper");
  const locationBox   = $("location-box");
  const dropdown      = $("location-dropdown");
  const useCurrentBtn = $("use-current-location-btn");
  const saveManualBtn = $("save-manual-location-btn");
  const manualInput   = $("manual-location-input");

  /* Pehle se save location dikhao */
  renderSelectedLocation(getSavedLocationData());

  /* Box par click: dropdown khol / band */
  if (locationBox && dropdown) {
    locationBox.addEventListener("click", function (event) {
      event.stopPropagation();
      if (dropdown.classList.contains("show")) closeLocationDropdown();
      else openLocationDropdown();
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
    manualInput.addEventListener("click", (event) => event.stopPropagation());

    manualInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        saveManualLocation();
      }
    });
  }

  /* Bahar kahin click karne par dropdown band */
  document.addEventListener("click", function (event) {
    if (!wrapper || !wrapper.contains(event.target)) closeLocationDropdown();
  });
}


/* =====================================================================
   SECTION 15: PAGE START (page khulte hi sab kuch yahin se chalu hota hai)
   ---------------------------------------------------------------------
   index.html is function ko page load hone par call karta hai.
   ===================================================================== */
function initHomePage() {

  /* Dusre pages (product, cart...) ke liye fruit list browser me save */
  localStorage.setItem("fruitData", JSON.stringify(fruitData));

  /* Page ke hisse banao */
  loadCategories();
  updateCartCount();
  updateWishlistCount();
  updateCategoryTitle();
  applyFilters();
  updateCartSummaryBox();
  initLocationSelector();
  initSearchOverlay();

  /* ---- Search boxes ---- */
  const debouncedSearch = debounce(executeSearch, 250);

  [$("search-input"), $("search-input-mobile")].forEach((input) => {
    if (!input) return;
    input.addEventListener("input", debouncedSearch);
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") executeSearch();
    });
  });

  [$("search-btn"), $("search-btn-mobile")].forEach((btn) => {
    if (btn) btn.addEventListener("click", executeSearch);
  });

  /* ---- Sort dropdown ---- */
  const sortSelect = $("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      currentSort = this.value;
      applyFilters();
    });
  }

  /* ---- "Available only" checkbox ---- */
  const availableOnly = $("available-only");
  if (availableOnly) {
    availableOnly.addEventListener("change", function () {
      onlyAvailable = this.checked;
      applyFilters();
    });
  }

  /* ---- "Discount only" checkbox ---- */
  const discountOnly = $("discount-only");
  if (discountOnly) {
    discountOnly.addEventListener("change", function () {
      onlyDiscounted = this.checked;
      applyFilters();
    });
  }

  /* ---- Max price box ---- */
  const maxPrice = $("max-price");
  if (maxPrice) {
    maxPrice.addEventListener("input", function () {
      maxPriceFilter = this.value.trim();
      applyFilters();
    });
  }

  /* ---- Upar ka hara banner (text yahan badal sakte ho) ---- */
  const banner = $("top-banner");
  if (banner) {
    banner.innerHTML = `
      <div style="background:linear-gradient(135deg,#16a34a,#22c55e,#84cc16);color:white;padding:20px;border-radius:24px;margin-bottom:18px;box-shadow:0 12px 30px rgba(34,197,94,0.18);">
        <h2 style="margin:0 0 6px 0;font-size:26px;font-weight:900;">Fresh Fruits Delivered Fast</h2>
        <p style="margin:0;font-size:15px;opacity:0.95;">Search, filter, sort aur quick cart sab ready hai</p>
      </div>
    `;
  }
}