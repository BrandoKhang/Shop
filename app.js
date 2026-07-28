// BUGATTI STORE - APP INTERACTIVITY & STATE MANAGEMENT

const PRODUCTS = [
  {
    id: 'lego-chiron',
    brand: 'BUGATTI STORE',
    title: 'LEGO ® Technic ™ Bugatti Chiron Pur Sport',
    category: 'tech',
    price: 70.00,
    currency: '£',
    maxQty: 5,
    image: 'assets/lego_bugatti.jpg',
    description: 'Experience iconic engineering with the LEGO Technic Bugatti Chiron Pur Sport building set. Authentic aerodynamic bodywork and detailed W16 engine.'
  },
  {
    id: 'mistral-black',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI MISTRAL SCALE MODEL 1:18 BLACK',
    category: 'models',
    price: 70.00,
    currency: '£',
    maxQty: 3,
    image: 'assets/bugatti_mistral.jpg',
    description: 'Precision 1:18 diecast replica of the ultimate Bugatti W16 Mistral roadster finished in gloss black with yellow luxury cockpit interior.'
  },
  {
    id: 'bolide-yellow',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI BOLIDE SCALE MODEL 1:18 YELLOW',
    category: 'models',
    price: 70.00,
    currency: '£',
    maxQty: 3,
    image: 'assets/bugatti_bolide.jpg',
    description: 'Track-focused hypercar 1:18 scale model of the Bugatti Bolide featuring aerodynamic wings and aggressive yellow carbon fiber scheme.'
  },
  {
    id: 'chiron-blue',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI CHIRON SCALE MODEL 1:18 BLUE',
    category: 'models',
    price: 70.00,
    currency: '£',
    maxQty: 3,
    image: 'assets/bugatti_chiron.jpg',
    description: 'Authentic 1:18 scale diecast model of the Bugatti Chiron in signature French Racing Blue two-tone luxury finish.'
  },
  {
    id: 'centodieci-white',
    brand: 'BUGATTI STORE',
    title: 'LEGO ®️ Speed Champions Bugatti Vision Gran Turismo',
    category: 'tech',
    price: 35.00,
    currency: '£',
    maxQty: 5,
    image: 'assets/lego-speed-champions-bugatti-vision-gran-turismo.webp',
    description: 'The Bugatti model car includes details from the vehicle created by Bugatti for the Gran Turismo video game in 2015. This includes a horseshoe front grille, rear wing, distinctive 8-eye headlights, a roof fin and wide tyres imprinted with ‘Michelin’. The toy car also includes a LEGO driver minifigure wearing a Bugatti outfit to place inside the cockpit to enjoy races.'
  },
  {
    id: 'divo-grey',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI DIVO SCALE MODEL 1:18 GREY',
    category: 'models',
    price: 75.00,
    currency: '£',
    maxQty: 3,
    image: 'assets/m28_dd0d3d5f-e9b1-4bfe-a4f1-6f757064f0a5.webp',
    description: 'A highly detailed 1:18 scale diecast model of the Bugatti Divo in grey (approx. 27cm). This replica beautifully recreates the bodywork of the car, with all curves and features exactly where you would find them on the original car.'
  },
  {
    id: 'smartwatch-v1',
    brand: 'BUGATTI STORE',
    title: 'LEGO ®️ TECHNIC ™️ BUGATTI BOLIDE YELLOW',
    category: 'tech',
    price: 55,
    currency: '£',
    maxQty: 5,
    image: 'assets/legobolideyellow1.webp',
    description: 'The model car kit features a working W16 engine, steering and scissor doors. The stunning looks of the LEGO race car steal the show, with a yellow colour scheme and authentic sticker details. After building and exploring the car, kids (and adults alike) can display their collectible LEGO racing car with pride.'
  },
  {
    id: 'lifestyle-cap',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI BOLIDE SCALE MODEL 1:18 BLUE',
    category: 'models',
    price: 70.00,
    currency: '£',
    maxQty: 3,
    image: 'assets/m1_b4a52add-71a6-4115-b8c2-7c3a17861a31.webp',
    description: 'A highly detailed 1:18 scale diecast model of the Bugatti Bolide in blue (approx. 27cm). This replica beautifully recreates the bodywork of the car, with all curves and features exactly where you would find them on the original car.'
  },
  {
    id: 'champagne-chiron',
    brand: 'BUGATTI STORE',
    title: 'CHAMPAGNE CARBON FOR BUGATTI — CHIRON EDITION',
    category: 'accessories',
    price: 195.00,
    currency: '£',
    maxQty: 2,
    image: 'assets/c5_ee7fb0ca-d3d4-4a2a-8bfe-f6fe0a1ae029.webp',
    description: 'Exclusive Champagne Carbon for Bugatti Chiron Edition. A premium collaboration between Champagne Carbon and Bugatti, presented in a sleek carbon-fiber wrapped magnum bottle with signature Bugatti orange accents and luxury gift box.'
  },
  {
    id: 'champagne-bolide',
    brand: 'BUGATTI STORE',
    title: 'CHAMPAGNE CARBON FOR BUGATTI — BOLIDE EDITION',
    category: 'accessories',
    price: 195.00,
    currency: '£',
    maxQty: 2,
    image: 'assets/c9_786d28de-c6c0-48cd-9b82-be1dbbf2e496.webp',
    description: 'Exclusive Champagne Carbon for Bugatti Bolide Edition. A bold blue carbon-fiber wrapped magnum bottle inspired by the Bolide hypercar, part of the prestigious Champagne Carbon x Bugatti collection. Arrives in an elegant black luxury gift box.'
  },
  {
    id: 'navy-blue-tshirt',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI LOGO NAVY BLUE T-SHIRT',
    category: 'clothing',
    price: 65.00,
    currency: '£',
    maxQty: 5,
    image: 'assets/navy-blue-t-shirt-bugatti-logo-25-1339.webp',
    description: 'Premium navy blue cotton T-shirt featuring the iconic Bugatti oval logo in light blue. A timeless wardrobe staple crafted from luxury-grade cotton with a relaxed, comfortable fit — perfect for everyday luxury wear.'
  },
  {
    id: 'bugatti-eb-puffer-jacket',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI EB PUFFER JACKET NAVY',
    category: 'clothing',
    price: 395.00,
    currency: '£',
    maxQty: 2,
    image: 'assets/bugatti-eb-puffer-jacket.webp',
    description: 'The Bugatti EB Puffer Jacket in navy combines performance insulation with signature Bugatti styling. Features a hooded silhouette, quilted body, electric blue zip pullers, and an embroidered EB monogram badge — engineered for those who refuse to compromise on style or warmth.'
  },
  {
    id: 'sunglasses-36c-rimless',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI EYEWEAR — 36C RIMLESS SILVER BLUE',
    category: 'lifestyle',
    price: 495.00,
    currency: '£',
    maxQty: 2,
    image: 'assets/36C-BP-SS_Front.jpg',
    description: 'The Bugatti 36C Rimless Sunglasses in brushed silver and blue are the epitome of understated luxury. Featuring frameless mineral lenses in deep aqua blue, ultra-fine metal bridges, and the discreet Ettore Bugatti signature — a masterpiece of precision optical engineering.'
  },
  {
    id: 'sunglasses-56-14k-gold',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI EYEWEAR — 56 AVIATOR 14K GOLD',
    category: 'lifestyle',
    price: 795.00,
    currency: '£',
    maxQty: 2,
    image: 'assets/56-14K_Angle.jpg',
    description: 'The Bugatti 56 Aviator in 14K gold-plated titanium is crafted for those who demand the extraordinary. Double-bridge aviator silhouette with gradient green lenses and hand-polished gold temple arms — a timeless expression of automotive-inspired haute couture.'
  }
];

function getMaxQty(product) {
  return product.maxQty || 5;
}

// STATE
let cart = [
  {
    product: PRODUCTS[0], // LEGO Technic Bugatti
    quantity: 1
  }
];

let activeCategory = 'all';
const FREE_SHIPPING_THRESHOLD = 200.00;

// DOM ELEMENTS
document.addEventListener('DOMContentLoaded', () => {
  renderProductsGrid();
  renderCartDrawer();

  // Navigation Links Filter
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      activeCategory = link.getAttribute('data-category');
      renderProductsGrid();
    });
  });

  // Drawer Toggle Events
  const cartIconBtn = document.getElementById('cart-icon-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartBackdrop = document.getElementById('cart-backdrop');

  cartIconBtn.addEventListener('click', openCartDrawer);
  closeCartBtn.addEventListener('click', closeCartDrawer);
  cartBackdrop.addEventListener('click', closeCartDrawer);

  // Search Overlay Events
  const searchBtn = document.getElementById('search-btn');
  const closeSearchBtn = document.getElementById('close-search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchInput = document.getElementById('search-input');

  searchBtn.addEventListener('click', () => {
    searchOverlay.classList.add('open');
    searchInput.focus();
  });
  closeSearchBtn.addEventListener('click', () => searchOverlay.classList.remove('open'));
  searchInput.addEventListener('input', handleSearch);

  // Modal Events
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  closeModalBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);

  // Drawer Tabs
  const tabCart = document.getElementById('tab-cart');
  const tabRecent = document.getElementById('tab-recent');
  const cartView = document.getElementById('cart-content-view');
  const recentView = document.getElementById('recent-content-view');

  tabCart.addEventListener('click', () => {
    tabCart.classList.add('active');
    tabCart.classList.remove('muted');
    tabRecent.classList.remove('active');
    tabRecent.classList.add('muted');
    cartView.style.display = 'flex';
    recentView.style.display = 'none';
  });

  tabRecent.addEventListener('click', () => {
    tabRecent.classList.add('active');
    tabRecent.classList.remove('muted');
    tabCart.classList.remove('active');
    tabCart.classList.add('muted');
    cartView.style.display = 'none';
    recentView.style.display = 'block';
    renderRecentlyViewed();
  });

  // ============================================================
  // ACTION PANELS — Order Note / Shipping / Discount
  // ============================================================

  let activePanel = null; // tracks which panel is open
  let appliedDiscount = null; // { code, type, value, label }
  let orderNote = '';

  // --- SHIPPING DATA ---
  const SHIPPING_RATES = {
    UK: [
      { method: 'Standard Delivery',  days: '2–4 business days',  price: 'Free over £200 · else £5.99' },
      { method: 'Express Delivery',   days: '1–2 business days',  price: '£12.99' },
      { method: 'Next Day (pre-2pm)', days: '1 business day',     price: '£18.99' }
    ],
    EU_CLOSE: [
      { method: 'Standard EU',        days: '5–8 business days',  price: 'Free over £200 · else £9.99' },
      { method: 'Express EU',         days: '3–5 business days',  price: '£19.99' }
    ],
    EU_FAR: [
      { method: 'Standard EU',        days: '7–12 business days', price: 'Free over £200 · else £11.99' },
      { method: 'Express EU',         days: '5–7 business days',  price: '£22.99' }
    ],
    US: [
      { method: 'International',      days: '8–14 business days', price: '£14.99' },
      { method: 'Express Int\'l',     days: '5–8 business days',  price: '£29.99' }
    ],
    CA: [
      { method: 'International',      days: '9–15 business days', price: '£14.99' },
      { method: 'Express Int\'l',     days: '6–9 business days',  price: '£29.99' }
    ],
    AU: [
      { method: 'International',      days: '10–18 business days', price: '£16.99' },
      { method: 'Express Int\'l',     days: '7–10 business days',  price: '£34.99' }
    ],
    OTHER: [
      { method: 'International',      days: '14–21 business days', price: '£19.99' }
    ]
  };

  // --- DISCOUNT CODES ---
  const DISCOUNT_CODES = {
    'BUGATTI10':  { type: 'percent', value: 10,  label: '10% off your order' },
    'BUGATTI20':  { type: 'percent', value: 20,  label: '20% off your order' },
    'WELCOME15':  { type: 'percent', value: 15,  label: '15% welcome discount' },
    'FREESHIP':   { type: 'shipping', value: 0,  label: 'Free shipping unlocked' },
    'SAVE50':     { type: 'fixed',   value: 50,  label: '£50 off your order' }
  };

  // Helper: toggle panel open/close
  function togglePanel(panelId, btnEl) {
    const panel = document.getElementById(panelId);
    const allPanels = document.querySelectorAll('.cart-panel');
    const allBtns   = document.querySelectorAll('.action-tool-btn');

    const isAlreadyOpen = panel.classList.contains('open');

    // Close all panels & deactivate all buttons
    allPanels.forEach(p => p.classList.remove('open'));
    allBtns.forEach(b => b.classList.remove('active'));

    if (!isAlreadyOpen) {
      panel.classList.add('open');
      btnEl.classList.add('active');
      activePanel = panelId;
    } else {
      activePanel = null;
    }
  }

  // --- ORDER NOTE ---
  const btnOrderNote = document.getElementById('btn-order-note');
  const noteTa       = document.getElementById('order-note-textarea');
  const noteCount    = document.getElementById('note-char-count');
  const saveNoteBtn  = document.getElementById('save-note-btn');

  btnOrderNote.addEventListener('click', () => {
    togglePanel('panel-order-note', btnOrderNote);
    if (document.getElementById('panel-order-note').classList.contains('open')) {
      setTimeout(() => noteTa.focus(), 350);
    }
  });

  noteTa.addEventListener('input', () => {
    const len = noteTa.value.length;
    noteCount.textContent = `${len} / 500`;
    saveNoteBtn.classList.remove('saved');
    saveNoteBtn.textContent = 'Save note';
  });

  saveNoteBtn.addEventListener('click', () => {
    orderNote = noteTa.value.trim();
    saveNoteBtn.textContent = '✓ Saved';
    saveNoteBtn.classList.add('saved');
    if (orderNote) showToast('Order note saved');
  });

  // --- SHIPPING CALCULATOR ---
  const btnShipping     = document.getElementById('btn-shipping');
  const calcBtn         = document.getElementById('btn-calc-shipping');
  const shippingResult  = document.getElementById('shipping-result');

  btnShipping.addEventListener('click', () => {
    togglePanel('panel-shipping', btnShipping);
  });

  calcBtn.addEventListener('click', () => {
    const country  = document.getElementById('shipping-country').value;
    const postcode = document.getElementById('shipping-postcode').value.trim();

    if (!country) {
      shippingResult.className = 'shipping-result error';
      shippingResult.textContent = '⚠ Please select a country first.';
      return;
    }

    const rates = SHIPPING_RATES[country];
    const locationLabel = postcode ? ` to <strong>${postcode.toUpperCase()}</strong>` : '';

    shippingResult.className = 'shipping-result has-result';
    shippingResult.innerHTML = `
      <div class="result-title">Estimated delivery${postcode ? ' to ' + postcode.toUpperCase() : ''}</div>
      ${rates.map(r => `
        <div class="result-row">
          <span class="result-method">${r.method}</span>
          <span class="result-time">${r.days}</span>
          <span class="result-price">${r.price}</span>
        </div>
      `).join('')}
    `;
  });

  // Allow pressing Enter in postcode field to trigger calculate
  document.getElementById('shipping-postcode').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') calcBtn.click();
  });

  // --- DISCOUNT CODE ---
  const btnDiscount       = document.getElementById('btn-discount');
  const discountInput     = document.getElementById('discount-code-input');
  const applyDiscountBtn  = document.getElementById('btn-apply-discount');
  const discountResult    = document.getElementById('discount-result');

  btnDiscount.addEventListener('click', () => {
    togglePanel('panel-discount', btnDiscount);
    if (document.getElementById('panel-discount').classList.contains('open')) {
      setTimeout(() => discountInput.focus(), 350);
    }
  });

  function applyDiscount() {
    const code = discountInput.value.trim().toUpperCase();
    if (!code) {
      discountResult.className = 'discount-result error';
      discountResult.textContent = '⚠ Please enter a discount code.';
      return;
    }

    if (DISCOUNT_CODES[code]) {
      appliedDiscount = { code, ...DISCOUNT_CODES[code] };
      discountResult.className = 'discount-result success';
      discountResult.innerHTML = `✓ <strong>${code}</strong> — ${appliedDiscount.label}`;
      discountInput.disabled = true;
      applyDiscountBtn.textContent = 'Remove';
      applyDiscountBtn.onclick = removeDiscount;
      renderCartDrawer(); // recalculate subtotal with discount
      showToast(`Discount applied: ${appliedDiscount.label}`);
    } else {
      appliedDiscount = null;
      discountResult.className = 'discount-result error';
      discountResult.textContent = '✕ Invalid code. Try BUGATTI10, BUGATTI20, FREESHIP or SAVE50.';
    }
  }

  function removeDiscount() {
    appliedDiscount = null;
    discountInput.value = '';
    discountInput.disabled = false;
    discountResult.className = 'discount-result';
    discountResult.textContent = '';
    applyDiscountBtn.textContent = 'Apply';
    applyDiscountBtn.onclick = applyDiscount;
    renderCartDrawer();
    showToast('Discount removed');
  }

  applyDiscountBtn.addEventListener('click', applyDiscount);
  discountInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') applyDiscount();
  });

  // Expose appliedDiscount to renderCartDrawer scope
  window._getAppliedDiscount = () => appliedDiscount;


  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast('Your cart is empty');
      return;
    }
    localStorage.setItem('bugatti_cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
  });

  document.getElementById('view-cart-page-btn').addEventListener('click', () => {
    localStorage.setItem('bugatti_cart', JSON.stringify(cart));
    window.location.href = 'checkout.html';
  });
});

// RENDER CATALOG GRID
function renderProductsGrid() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = '';

  const filtered = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory || (activeCategory === 'sale' && p.price <= 70));

  filtered.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    const maxLimit = getMaxQty(product);
    card.innerHTML = `
      <div class="product-image-box">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
        <span class="limit-badge">Limit ${maxLimit}/order</span>
        <button class="quick-add-btn" data-id="${product.id}">Add to Cart</button>
      </div>
      <div class="product-info">
        <span class="brand-label">${product.brand}</span>
        <div class="title-price-row">
          <h3 class="product-title">${product.title}</h3>
          <span class="product-price">${product.currency}${product.price.toFixed(2)}</span>
        </div>
      </div>
    `;

    // Click card -> quick view modal
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('quick-add-btn')) {
        e.stopPropagation();
        if (addToCart(product.id)) {
          openCartDrawer();
        }
      } else {
        openQuickViewModal(product);
      }
    });

    grid.appendChild(card);
  });
}

// CART DRAWER FUNCTIONS
function openCartDrawer() {
  document.getElementById('cart-drawer').classList.add('open');
  document.getElementById('cart-backdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-backdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function addToCart(productId, qtyToAdd = 1) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return false;

  const maxLimit = getMaxQty(prod);
  const existing = cart.find(item => item.product.id === productId);
  const currentQty = existing ? existing.quantity : 0;

  if (currentQty + qtyToAdd > maxLimit) {
    const remaining = Math.max(0, maxLimit - currentQty);
    if (remaining === 0) {
      showToast(`⚠ Order limit reached! Maximum ${maxLimit} allowed for this item.`);
    } else {
      showToast(`⚠ Limit exceeded! Only ${remaining} more allowed (Max limit: ${maxLimit}).`);
    }
    return false;
  }

  if (existing) {
    existing.quantity += qtyToAdd;
  } else {
    cart.push({ product: prod, quantity: qtyToAdd });
  }
  renderCartDrawer();
  showToast('Item added to cart');
  return true;
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  renderCartDrawer();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (item) {
    const maxLimit = getMaxQty(item.product);
    if (delta > 0 && item.quantity + delta > maxLimit) {
      showToast(`⚠ Maximum order limit of ${maxLimit} reached for this item!`);
      return;
    }
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      renderCartDrawer();
    }
  }
}

function renderCartDrawer() {
  localStorage.setItem('bugatti_cart', JSON.stringify(cart));
  const itemsList = document.getElementById('cart-items-list');
  const badgeCount = document.getElementById('cart-badge-count');
  const tabCount = document.getElementById('cart-tab-count');
  const subtotalPriceEl = document.getElementById('cart-subtotal-price');
  const progressFill = document.getElementById('shipping-progress-bar');
  const shippingNeededEl = document.getElementById('shipping-needed-amount');
  const shippingDescEl = document.getElementById('shipping-text-desc');

  // Compute Total Count & Subtotal
  let totalCount = 0;
  let subtotal = 0;

  cart.forEach(item => {
    totalCount += item.quantity;
    subtotal += item.product.price * item.quantity;
  });

  badgeCount.textContent = totalCount;
  tabCount.textContent = totalCount;

  // Apply discount to displayed subtotal
  const disc = window._getAppliedDiscount ? window._getAppliedDiscount() : null;
  let discountedSubtotal = subtotal;
  let subtotalHTML = '';

  if (disc) {
    if (disc.type === 'percent') {
      discountedSubtotal = subtotal * (1 - disc.value / 100);
    } else if (disc.type === 'fixed') {
      discountedSubtotal = Math.max(0, subtotal - disc.value);
    }

    if (disc.type !== 'shipping') {
      subtotalHTML = `
        <span style="text-decoration:line-through;color:#6b7280;font-size:13px;font-weight:500;">£${subtotal.toFixed(2)}</span>
        &nbsp;£${discountedSubtotal.toFixed(2)} GBP
      `;
    } else {
      subtotalHTML = `£${subtotal.toFixed(2)} GBP <span style="color:#86efac;font-size:11px;font-weight:600;margin-left:4px;">FREE SHIP</span>`;
    }
  } else {
    subtotalHTML = `£${subtotal.toFixed(2)} GBP`;
  }

  subtotalPriceEl.innerHTML = subtotalHTML;

  // Free Shipping Progress
  const percent = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  progressFill.style.width = `${percent}%`;

  const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
  if (remaining > 0) {
    shippingDescEl.innerHTML = `Spend <span class="highlight-price">£${remaining.toFixed(2)}</span> more to reach free shipping!`;
  } else {
    shippingDescEl.innerHTML = `<span class="highlight-price">🎉 Congratulations! You unlocked free shipping!</span>`;
  }

  // Render Items List
  if (cart.length === 0) {
    itemsList.innerHTML = `
      <div style="text-align: center; padding: 40px 0; color: #6b7280;">
        <p>Your cart is empty</p>
      </div>
    `;
    return;
  }

  itemsList.innerHTML = '';
  cart.forEach(item => {
    const maxLimit = getMaxQty(item.product);
    const isAtMax = item.quantity >= maxLimit;
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-left">
        <div class="cart-thumb">
          <img src="${item.product.image}" alt="${item.product.title}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">
            ${item.product.title}
            <span class="cart-item-limit-tag">Limit: ${maxLimit}</span>
          </div>
          <div class="cart-item-price">${item.product.currency}${item.product.price.toFixed(2)}</div>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="qty-stepper">
          <span class="qty-val">${item.quantity}</span>
          <div class="qty-arrows">
            <button class="qty-arrow-btn btn-inc ${isAtMax ? 'disabled' : ''}" data-id="${item.product.id}" title="${isAtMax ? 'Maximum limit reached' : 'Increase quantity'}">▲</button>
            <button class="qty-arrow-btn btn-dec" data-id="${item.product.id}">▼</button>
          </div>
        </div>
        <button class="btn-remove" data-id="${item.product.id}">Remove</button>
      </div>
    `;

    // Event listeners
    row.querySelector('.btn-inc').addEventListener('click', () => updateQuantity(item.product.id, 1));
    row.querySelector('.btn-dec').addEventListener('click', () => updateQuantity(item.product.id, -1));
    row.querySelector('.btn-remove').addEventListener('click', () => removeFromCart(item.product.id));

    itemsList.appendChild(row);
  });
}

function renderRecentlyViewed() {
  const grid = document.getElementById('recent-items-grid');
  grid.innerHTML = `
    <div style="padding: 20px 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
      ${PRODUCTS.slice(1, 3).map(p => `
        <div style="background: #121215; padding: 12px; border-radius: 12px; cursor: pointer;" onclick="openQuickViewModalById('${p.id}')">
          <img src="${p.image}" style="width: 100%; height: 80px; object-fit: contain; background: #e3e4e6; border-radius: 8px; margin-bottom: 8px;">
          <div style="font-size: 11px; font-weight: 700; color: #fff;">${p.title}</div>
          <div style="font-size: 11px; color: #3b82f6;">${p.currency}${p.price.toFixed(2)}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// SEARCH OVERLAY logic
function handleSearch(e) {
  const query = e.target.value.toLowerCase().trim();
  const resultsContainer = document.getElementById('search-results');
  resultsContainer.innerHTML = '';

  if (!query) return;

  const matched = PRODUCTS.filter(p => p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));

  if (matched.length === 0) {
    resultsContainer.innerHTML = `<div style="color: #9ca3af; text-align: center; padding: 20px;">No products found</div>`;
    return;
  }

  matched.forEach(product => {
    const item = document.createElement('div');
    item.className = 'search-result-item';
    item.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div>
        <div style="font-size: 13px; font-weight: 700; color: #ffffff;">${product.title}</div>
        <div style="font-size: 12px; color: #3b82f6;">${product.currency}${product.price.toFixed(2)}</div>
      </div>
    `;
    item.addEventListener('click', () => {
      document.getElementById('search-overlay').classList.remove('open');
      openQuickViewModal(product);
    });
    resultsContainer.appendChild(item);
  });
}

// MODAL QUICK VIEW
function openQuickViewModalById(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (prod) openQuickViewModal(prod);
}

function openQuickViewModal(product) {
  const modal = document.getElementById('product-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const body = document.getElementById('modal-body');
  const maxLimit = getMaxQty(product);

  let modalQty = 1;

  body.innerHTML = `
    <div class="modal-img-wrapper">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="modal-details">
      <span class="brand-label">${product.brand}</span>
      <h2 class="modal-title">${product.title}</h2>
      <div class="modal-price">${product.currency}${product.price.toFixed(2)}</div>
      <p class="modal-desc">${product.description}</p>
      
      <!-- Quantity Selector & Limit Info -->
      <div class="modal-qty-container">
        <div class="modal-limit-tag">🔒 Purchase limit: Max ${maxLimit} per order</div>
        <div class="modal-qty-row">
          <span class="modal-qty-label">Quantity:</span>
          <div class="modal-qty-controls">
            <button class="modal-qty-btn" id="modal-qty-dec">-</button>
            <span class="modal-qty-val" id="modal-qty-val">1</span>
            <button class="modal-qty-btn" id="modal-qty-inc">+</button>
          </div>
        </div>
      </div>

      <button class="btn add-modal-btn" id="modal-add-btn">Add to Cart - ${product.currency}${(product.price * modalQty).toFixed(2)}</button>
    </div>
  `;

  const decBtn = document.getElementById('modal-qty-dec');
  const incBtn = document.getElementById('modal-qty-inc');
  const qtyVal = document.getElementById('modal-qty-val');
  const addBtn = document.getElementById('modal-add-btn');

  decBtn.addEventListener('click', () => {
    if (modalQty > 1) {
      modalQty--;
      qtyVal.textContent = modalQty;
      addBtn.textContent = `Add to Cart - ${product.currency}${(product.price * modalQty).toFixed(2)}`;
    }
  });

  incBtn.addEventListener('click', () => {
    if (modalQty < maxLimit) {
      modalQty++;
      qtyVal.textContent = modalQty;
      addBtn.textContent = `Add to Cart - ${product.currency}${(product.price * modalQty).toFixed(2)}`;
    } else {
      showToast(`⚠ Limit of ${maxLimit} items per order reached.`);
    }
  });

  addBtn.addEventListener('click', () => {
    if (addToCart(product.id, modalQty)) {
      closeModal();
      openCartDrawer();
    }
  });

  modal.classList.add('open');
  backdrop.classList.add('open');
}

function closeModal() {
  document.getElementById('product-modal').classList.remove('open');
  document.getElementById('modal-backdrop').classList.remove('open');
}

// TOAST NOTIFICATIONS
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  toastMsg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}
