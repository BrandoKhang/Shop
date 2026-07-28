// BUGATTI CHECKOUT INTERACTIVITY & STATE

document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutSummary();
  initPaymentAccordion();
  initDiscountCode();
  initCheckoutForm();
});

// DEFAULT PRODUCTS DATA FALLBACK
const DEFAULT_CART = [
  {
    product: {
      id: 'lego-chiron',
      title: 'LEGO ® Technic ™ Bugatti Chiron Pur Sport',
      price: 70.00,
      currency: '£',
      image: 'assets/lego_bugatti.jpg'
    },
    quantity: 1
  }
];

function getCartData() {
  const saved = localStorage.getItem('bugatti_cart');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.length > 0) return parsed;
    } catch (e) {
      console.error(e);
    }
  }
  return DEFAULT_CART;
}

let activeDiscount = 0; // Discount percentage

function renderCheckoutSummary() {
  const cart = getCartData();
  const listEl = document.getElementById('summary-items-list');
  const subtotalEl = document.getElementById('summary-subtotal');
  const totalEl = document.getElementById('summary-total');
  const taxNoteEl = document.getElementById('tax-note');

  let subtotal = 0;
  listEl.innerHTML = '';

  cart.forEach(item => {
    subtotal += item.product.price * item.quantity;

    const row = document.createElement('div');
    row.className = 'summary-item';
    row.innerHTML = `
      <div class="summary-thumb-box">
        <img src="${item.product.image}" alt="${item.product.title}">
        <span class="summary-badge">${item.quantity}</span>
      </div>
      <div class="summary-item-title">${item.product.title}</div>
      <div class="summary-item-price">${item.product.currency}${(item.product.price * item.quantity).toFixed(2)}</div>
    `;
    listEl.appendChild(row);
  });

  const discountAmount = subtotal * activeDiscount;
  const finalTotal = subtotal - discountAmount;
  
  // Tax calculation (20% VAT included: Tax = Total * (20/120) = Total / 6)
  const taxVal = finalTotal * (20 / 120);

  subtotalEl.textContent = `£${subtotal.toFixed(2)}`;
  totalEl.textContent = `£${finalTotal.toFixed(2)}`;
  taxNoteEl.textContent = `Including £${taxVal.toFixed(2)} in taxes`;
}

// PAYMENT ACCORDION TOGGLE
function initPaymentAccordion() {
  const radioInputs = document.querySelectorAll('input[name="payment_method"]');
  const accordionItems = document.querySelectorAll('.payment-accordion-item');

  radioInputs.forEach(input => {
    input.addEventListener('change', () => {
      accordionItems.forEach(item => item.classList.remove('active'));
      const parentItem = input.closest('.payment-accordion-item');
      if (parentItem) {
        parentItem.classList.add('active');
      }
    });
  });
}

// DISCOUNT CODE LOGIC
function initDiscountCode() {
  const btnApply = document.getElementById('btn-apply-discount');
  const inputDiscount = document.getElementById('discount-code');

  btnApply.addEventListener('click', () => {
    const code = inputDiscount.value.trim().toUpperCase();
    if (code === 'BUGATTI10') {
      activeDiscount = 0.10; // 10% off
      alert('Discount code BUGATTI10 applied! (10% OFF)');
      renderCheckoutSummary();
    } else if (code === 'VIP') {
      activeDiscount = 0.20; // 20% off
      alert('VIP discount code applied! (20% OFF)');
      renderCheckoutSummary();
    } else if (code === '') {
      alert('Please enter a discount code');
    } else {
      alert('Invalid code. Try "BUGATTI10" or "VIP"');
    }
  });
}

// FORM SUBMISSION & PAY NOW
function initCheckoutForm() {
  const btnPayNow = document.getElementById('pay-now-btn');
  if (!btnPayNow) return;

  btnPayNow.addEventListener('click', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput ? emailInput.value.trim() : '';

    if (!email) {
      alert('Please enter your email address before proceeding.');
      if (emailInput) emailInput.focus();
      return;
    }

    const firstName = document.getElementById('first-name')?.value.trim() || '';
    const lastName = document.getElementById('last-name')?.value.trim() || '';
    const address = document.getElementById('address')?.value.trim() || '';
    const apt = document.getElementById('apt')?.value.trim() || '';
    const city = document.getElementById('city')?.value.trim() || '';
    const postcode = document.getElementById('postcode')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const countryEl = document.getElementById('country');
    const countryName = countryEl ? countryEl.options[countryEl.selectedIndex]?.text : 'United Kingdom';

    const selectedPaymentRadio = document.querySelector('input[name="payment_method"]:checked');
    const paymentMethodValue = selectedPaymentRadio ? selectedPaymentRadio.value : 'credit_card';

    btnPayNow.disabled = true;
    btnPayNow.textContent = 'Processing Payment...';

    setTimeout(() => {
      const cart = getCartData();
      let subtotal = 0;
      cart.forEach(item => {
        subtotal += item.product.price * item.quantity;
      });

      const discountAmt = subtotal * activeDiscount;
      const finalTotal = subtotal - discountAmt;
      const orderId = 'BUG-' + Math.floor(100000 + Math.random() * 900000);

      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
      const estDeliveryDate = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

      const fullName = `${firstName} ${lastName}`.trim() || 'Valued Customer';
      const fullAddress = [address, apt, city, postcode, countryName].filter(Boolean).join(', ') || '10 Molsheim Way, London, SW1A 1AA';

      const newOrder = {
        id: orderId,
        date: now.toISOString(),
        displayDate: formattedDate,
        customer: {
          email: email,
          name: fullName,
          address: fullAddress,
          phone: phone || '+44 20 7946 0912'
        },
        items: cart.map(item => ({
          id: item.product.id,
          title: item.product.title,
          price: item.product.price,
          currency: item.product.currency || '£',
          image: item.product.image,
          quantity: item.quantity
        })),
        financials: {
          subtotal: subtotal,
          discount: discountAmt,
          discountCode: activeDiscount > 0 ? (activeDiscount === 0.1 ? 'BUGATTI10' : 'VIP') : null,
          tax: finalTotal * (20 / 120),
          total: finalTotal
        },
        paymentMethod: paymentMethodValue === 'paypal' ? 'PayPal Express' : 'Credit Card (Visa/MasterCard)',
        status: 'Confirmed',
        statusText: 'Payment confirmed & order being packed for dispatch',
        trackingNumber: 'BUG-TRK-' + Math.floor(100000 + Math.random() * 900000),
        carrier: 'DHL Express Luxury Transit',
        estimatedDelivery: estDeliveryDate,
        timeline: [
          { step: 1, title: 'Order Placed', subtitle: formattedDate, completed: true, active: false, icon: '🛒' },
          { step: 2, title: 'Payment Confirmed', subtitle: 'Payment processed successfully', completed: true, active: true, icon: '💳' },
          { step: 3, title: 'Packing & Inspection', subtitle: 'Molsheim Logistics Hub, France', completed: false, active: false, icon: '📦' },
          { step: 4, title: 'In Transit', subtitle: 'DHL Express Air Freight', completed: false, active: false, icon: '🚚' },
          { step: 5, title: 'Delivered', subtitle: `Estimated: ${estDeliveryDate}`, completed: false, active: false, icon: '🏠' }
        ]
      };

      // Save order to localStorage
      let orders = [];
      try {
        const savedOrders = localStorage.getItem('bugatti_orders');
        if (savedOrders) orders = JSON.parse(savedOrders);
      } catch (e) {
        console.error('Error parsing orders:', e);
      }
      orders.unshift(newOrder);
      localStorage.setItem('bugatti_orders', JSON.stringify(orders));

      // Clear cart
      localStorage.removeItem('bugatti_cart');

      // Show luxury confirmation modal
      showOrderSuccessModal(newOrder);
    }, 1200);
  });
}

function showOrderSuccessModal(order) {
  const backdrop = document.createElement('div');
  backdrop.className = 'order-success-backdrop';

  const modal = document.createElement('div');
  modal.className = 'order-success-modal';
  modal.innerHTML = `
    <div class="success-icon-badge">
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
    </div>
    <h2 class="success-title">Payment Successful!</h2>
    <p class="success-subtitle">Thank you for your purchase at <strong>BUGATTI STORE</strong>.</p>
    
    <div class="success-order-box">
      <div class="success-order-row">
        <span>Order ID:</span>
        <strong class="order-highlight">#${order.id}</strong>
      </div>
      <div class="success-order-row">
        <span>Tracking No:</span>
        <span class="tracking-highlight">${order.trackingNumber}</span>
      </div>
      <div class="success-order-row">
        <span>Estimated Delivery:</span>
        <span>${order.estimatedDelivery}</span>
      </div>
      <div class="success-order-row">
        <span>Total Payment:</span>
        <strong style="color: #3b82f6;">£${order.financials.total.toFixed(2)}</strong>
      </div>
    </div>

    <div class="success-actions">
      <button id="btn-track-order" class="btn-success-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
        Track Delivery Progress
      </button>
      <button id="btn-back-home" class="btn-success-secondary">Return to Store</button>
    </div>
  `;

  document.body.appendChild(backdrop);
  document.body.appendChild(modal);

  setTimeout(() => {
    backdrop.classList.add('open');
    modal.classList.add('open');
  }, 50);

  document.getElementById('btn-track-order').addEventListener('click', () => {
    window.location.href = `index.html?track=${order.id}`;
  });

  document.getElementById('btn-back-home').addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
