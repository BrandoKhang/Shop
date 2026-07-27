// BUGATTI STORE - APP INTERACTIVITY & STATE MANAGEMENT

const PRODUCTS = [
  {
    id: 'lego-chiron',
    brand: 'BUGATTI STORE',
    title: 'LEGO ® Technic ™ Bugatti Chiron Pur Sport',
    category: 'models',
    price: 70.00,
    currency: '£',
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
    image: 'assets/bugatti_chiron.jpg',
    description: 'Authentic 1:18 scale diecast model of the Bugatti Chiron in signature French Racing Blue two-tone luxury finish.'
  },
  {
    id: 'centodieci-white',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI CENTODIECI SCALE MODEL 1:18 WHITE',
    category: 'models',
    price: 85.00,
    currency: '£',
    image: 'assets/bugatti_chiron.jpg',
    description: 'Limited edition tribute to the EB110, white metallic 1:18 scale replica with functional doors and detailed engine bay.'
  },
  {
    id: 'divo-grey',
    brand: 'BUGATTI STORE',
    title: 'BUGATTI DIVO SCALE MODEL 1:18 MATTE GREY',
    category: 'models',
    price: 75.00,
    currency: '£',
    image: 'assets/bugatti_mistral.jpg',
    description: 'Cornering hypercar scale model featuring custom matte grey paintwork and French tricolor aero wing flags.'
  },
  {
    id: 'smartwatch-v1',
    brand: 'BUGATTI STORE',
    title: 'LEGO ®️ TECHNIC ™️ BUGATTI BOLIDE YELLOW',
    category: 'tech',
    price: 55,
    currency: '£',
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
    image: 'assets/m1_b4a52add-71a6-4115-b8c2-7c3a17861a31.webp',
    description: 'A highly detailed 1:18 scale diecast model of the Bugatti Bolide in blue (approx. 27cm). This replica beautifully recreates the bodywork of the car, with all curves and features exactly where you would find them on the original car.'
  }
];

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

  // Action Tools (Order Note, Shipping, Discount)
  document.getElementById('btn-order-note').addEventListener('click', () => {
    showToast('Order note modal opened');
  });
  document.getElementById('btn-shipping').addEventListener('click', () => {
    showToast('Shipping calculator opened');
  });
  document.getElementById('btn-discount').addEventListener('click', () => {
    showToast('Enter discount code');
  });

  // Checkout Button
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
    card.innerHTML = `
      <div class="product-image-box">
        <img src="${product.image}" alt="${product.title}" loading="lazy">
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
        addToCart(product.id);
        openCartDrawer();
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

function addToCart(productId) {
  const existing = cart.find(item => item.product.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    const prod = PRODUCTS.find(p => p.id === productId);
    if (prod) {
      cart.push({ product: prod, quantity: 1 });
    }
  }
  renderCartDrawer();
  showToast('Item added to cart');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.product.id !== productId);
  renderCartDrawer();
}

function updateQuantity(productId, delta) {
  const item = cart.find(i => i.product.id === productId);
  if (item) {
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
  subtotalPriceEl.textContent = `£${subtotal.toFixed(2)} GBP`;

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
    const row = document.createElement('div');
    row.className = 'cart-item';
    row.innerHTML = `
      <div class="cart-item-left">
        <div class="cart-thumb">
          <img src="${item.product.image}" alt="${item.product.title}">
        </div>
        <div class="cart-item-details">
          <div class="cart-item-title">${item.product.title}</div>
          <div class="cart-item-price">${item.product.currency}${item.product.price.toFixed(2)}</div>
        </div>
      </div>
      <div class="cart-item-right">
        <div class="qty-stepper">
          <span class="qty-val">${item.quantity}</span>
          <div class="qty-arrows">
            <button class="qty-arrow-btn btn-inc" data-id="${item.product.id}">▲</button>
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

  body.innerHTML = `
    <div class="modal-img-wrapper">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="modal-details">
      <span class="brand-label">${product.brand}</span>
      <h2 class="modal-title">${product.title}</h2>
      <div class="modal-price">${product.currency}${product.price.toFixed(2)}</div>
      <p class="modal-desc">${product.description}</p>
      <button class="btn add-modal-btn" id="modal-add-btn">Add to Cart - ${product.currency}${product.price.toFixed(2)}</button>
    </div>
  `;

  document.getElementById('modal-add-btn').addEventListener('click', () => {
    addToCart(product.id);
    closeModal();
    openCartDrawer();
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
