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
  btnPayNow.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if (!email) {
      alert('Please enter your email address before proceeding.');
      document.getElementById('email').focus();
      return;
    }

    btnPayNow.disabled = true;
    btnPayNow.textContent = 'Processing Payment...';

    setTimeout(() => {
      alert('🎉 Payment Successful! Thank you for your purchase at BUGATTI STORE.\n\nOrder Confirmation #BUG-' + Math.floor(100000 + Math.random() * 900000));
      localStorage.removeItem('bugatti_cart');
      window.location.href = 'index.html';
    }, 1500);
  });
}
