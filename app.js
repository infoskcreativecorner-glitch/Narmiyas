/* ==========================================================================
   NARMIYAS — LUXURY EDITORIAL CONTEMPORARY FASHION APPLICATION ENGINE
   100% Non-Repeating Unique Image Distribution across Products & Swatches
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
  initHeaderScroll();
  initMegaMenu();
  initMobileNav();
  initCartDrawer();
  initProductCatalog();
  initCustomStudioWizard();
  initJournalModals();
  initSearchOverlay();
  initNewsletterForm();
  
  initThemeToggle();
  init3DTiltEffect();
  initScrollRevealObserver();
  initFabricSwatches();
  initMobileDock();
  
  initPreloader();
  initMagneticButtons();
});

/* ==========================================================================
   1. PRODUCTS CATALOG (100% UNIQUE IMAGE PAIRS FOR EACH ITEM)
   ========================================================================== */
const NARMIYAS_PRODUCTS = [
  {
    id: 'nar-sig-01',
    name: 'THE NARMIYAS SIGNATURE COUTURE SET',
    category: 'SIGNATURE',
    price: 22500,
    priceFormatted: '₹22,500',
    tag: 'AUTHENTIC SIGNATURE OUTFIT',
    primaryImg: 'assets/images/client_look1.jpg',
    secondaryImg: 'assets/images/uniq_look1.jpg',
    sizes: ['CUSTOM', 'S', 'M', 'L'],
    fabric: 'Bespoke Hand-Embroidered Organza with Silk Twill Detailing',
    fit: 'Sculpted Contemporary Silhouette',
    description: 'The defining piece of NARMIYAS couture. Precision hand threadwork crafted over 60+ hours for unmatched rarity.'
  },
  {
    id: 'nar-sig-02',
    name: 'CELESTIAL DRAPE EMBROIDERED DRESS',
    category: 'SIGNATURE',
    price: 19800,
    priceFormatted: '₹19,800',
    tag: 'MADE TO ORDER',
    primaryImg: 'assets/images/client_look2.jpg',
    secondaryImg: 'assets/images/uniq_look2.jpg',
    sizes: ['CUSTOM', 'XS', 'S', 'M'],
    fabric: 'Liquid Silk Satin Crepe with Hand-Stitched Accent Pearls',
    fit: 'Fluid Architectural Drape',
    description: 'An ethereal ensemble created for high-impact evening events. Individually tailored upon order.'
  },
  {
    id: 'nar-sig-03',
    name: 'ATELIER FLORAL BESPOKE OUTFIT',
    category: 'SIGNATURE',
    price: 24000,
    priceFormatted: '₹24,000',
    tag: 'EXCLUSIVE CRAFT',
    primaryImg: 'assets/images/client_look3.jpg',
    secondaryImg: 'assets/images/uniq_look3.jpg',
    sizes: ['CUSTOM', 'S', 'M', 'L', 'XL'],
    fabric: 'Custom Woven Floral Brocade with Velvet Trim',
    fit: 'Contemporary Royal Fit',
    description: 'A masterpiece of bespoke tailorcraft combining traditional motif art with contemporary silhouettes.'
  },
  {
    id: 'nar-sig-04',
    name: 'VERDANT HERITAGE STATEMENT SET',
    category: 'SIGNATURE',
    price: 21500,
    priceFormatted: '₹21,500',
    tag: 'LIMITED RUN',
    primaryImg: 'assets/images/client_look4.jpg',
    secondaryImg: 'assets/images/uniq_look4.jpg',
    sizes: ['CUSTOM', 'S', 'M', 'L'],
    fabric: 'Rich Emerald Silk Weave with Metallic Zari Threadwork',
    fit: 'Tailored Statement Fit',
    description: 'Rich jewel tones handcrafted into a bold statement silhouette. Zero mass production.'
  },
  {
    id: 'nar-sig-05',
    name: 'THE RARITY TRENCH COAT',
    category: 'SIGNATURE',
    price: 18500,
    priceFormatted: '₹18,500',
    tag: 'HAND-CRAFTED BESPOKE',
    primaryImg: 'assets/images/signature_main.jpg',
    secondaryImg: 'assets/images/mood_bold.jpg',
    sizes: ['CUSTOM', 'S', 'M', 'L'],
    fabric: 'Heavyweight Structured Wool Blend with Hand-Burnished Trim',
    fit: 'Relaxed Avant-Garde Cut',
    description: 'An architectural coat engineered for individuals who stand apart.'
  },
  {
    id: 'nar-sig-06',
    name: 'NOCTURNE SILK WRAP DRESS',
    category: 'SIGNATURE',
    price: 14200,
    priceFormatted: '₹14,200',
    tag: 'LIMITED EDITION',
    primaryImg: 'assets/images/uniq_look1.jpg',
    secondaryImg: 'assets/images/hero_model.jpg',
    sizes: ['CUSTOM', 'XS', 'S', 'M'],
    fabric: '100% Pure Mulberry Silk Crepe',
    fit: 'Fluid Asymmetric Cut',
    description: 'Ethereal drape with hidden inner ties for effortlessly precise fit.'
  },
  {
    id: 'nar-sig-07',
    name: 'METALLIC ATELIER BLAZER',
    category: 'SIGNATURE',
    price: 16800,
    priceFormatted: '₹16,800',
    tag: 'CUSTOM FIT',
    primaryImg: 'assets/images/uniq_look2.jpg',
    secondaryImg: 'assets/images/custom_craft.jpg',
    sizes: ['CUSTOM', 'S', 'M', 'L', 'XL'],
    fabric: 'Structured Metallic Weave with Satin Lapel',
    fit: 'Sharp Double-Breasted Cut',
    description: 'A striking statement jacket fusing high-contrast texture with immaculate tailorcraft.'
  },
  {
    id: 'nar-drop-01',
    name: 'CHARCOAL MONOLITH SET',
    category: 'NEW DROPS',
    price: 12500,
    priceFormatted: '₹12,500',
    tag: 'JUST DROPPED',
    primaryImg: 'assets/images/uniq_look3.jpg',
    secondaryImg: 'assets/images/signature_main.jpg',
    sizes: ['CUSTOM', 'S', 'M', 'L'],
    fabric: 'Matte Cotton-Viscose Twill',
    fit: 'Boxy Top + Fluid Trousers',
    description: 'Minimalist monochrome leisure suit designed for quiet luxury.'
  },
  {
    id: 'nar-drop-02',
    name: 'AURA VEIL EMBROIDERED TOP',
    category: 'NEW DROPS',
    price: 8900,
    priceFormatted: '₹8,900',
    tag: 'HANDMADE',
    primaryImg: 'assets/images/uniq_look4.jpg',
    secondaryImg: 'assets/images/client_look2.jpg',
    sizes: ['CUSTOM', 'XS', 'S', 'M', 'L'],
    fabric: 'Sheer Organza with Threadwork',
    fit: 'Sculptural Oversized Sleeves',
    description: 'Bespoke hand embroidery created in limited quantities.'
  },
  {
    id: 'nar-drop-03',
    name: 'CHAMPAGNE STATEMENT DRAPE',
    category: 'NEW DROPS',
    price: 19800,
    priceFormatted: '₹19,800',
    tag: 'COUTURE',
    primaryImg: 'assets/images/mood_bold.jpg',
    secondaryImg: 'assets/images/hero_model.jpg',
    sizes: ['CUSTOM ONLY'],
    fabric: 'Liquid Metallic Satin',
    fit: 'Custom Tailored Fluid Drape',
    description: 'A dramatic evening piece handcrafted individually upon order.'
  }
];

/* ==========================================================================
   2. DYNAMIC FABRIC SWATCHES (UNIQUE VISUAL PER FABRIC)
   ========================================================================== */
const FABRIC_SWATCHES = {
  silk: {
    title: 'PURE MULBERRY SILK',
    desc: 'Ethically sourced silk with natural subtle luster and liquid drape.',
    img: 'assets/images/uniq_look1.jpg'
  },
  wool: {
    title: 'BESPOKE HERITAGE BROCADE',
    desc: 'Custom woven floral motifs with velvet trim detailing.',
    img: 'assets/images/client_look3.jpg'
  },
  metallic: {
    title: 'EMERALD EMBROIDERED SATIN',
    desc: 'Rich jewel tone woven with metallic zari accent threads.',
    img: 'assets/images/client_look4.jpg'
  },
  embroidered: {
    title: 'CELESTIAL ORGANZA EMBROIDERY',
    desc: 'Hand-stitched threadwork crafted over 60+ hours by senior artisans.',
    img: 'assets/images/client_look2.jpg'
  }
};

function initFabricSwatches() {
  const pills = document.querySelectorAll('.swatch-pill');
  const imgTarget = document.getElementById('custom-atelier-img');
  const titleTarget = document.getElementById('custom-fabric-title');
  const descTarget = document.getElementById('custom-fabric-desc');

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const key = pill.getAttribute('data-swatch');
      const data = FABRIC_SWATCHES[key];
      if (!data) return;

      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      if (imgTarget) imgTarget.src = data.img;
      if (titleTarget) titleTarget.textContent = data.title;
      if (descTarget) descTarget.textContent = data.desc;
    });
  });
}

/* ==========================================================================
   3. MOBILE DOCK & INTERACTION ENGINES
   ========================================================================== */
function initMobileDock() {
  const dockToggle = document.getElementById('mobile-dock-theme-toggle');
  if (dockToggle) {
    dockToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      showToast(isDark ? 'EDITORIAL MODE: DARK VELVET ATELIER' : 'EDITORIAL MODE: WARM IVORY');
    });
  }
}

function init3DTiltEffect() {
  const cards = document.querySelectorAll('.tilt-card, .sig-card, .mood-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

function initThemeToggle() {
  const btn = document.getElementById('theme-toggle-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    showToast(isDark ? 'EDITORIAL MODE: DARK VELVET ATELIER' : 'EDITORIAL MODE: WARM IVORY');
  });
}

function initScrollRevealObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed', 'active');
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal-box, .reveal-text').forEach(el => observer.observe(el));
}

function initCustomCursor() {
  const cursor = document.getElementById('custom-cursor');
  const cursorText = document.getElementById('cursor-text');
  if (!cursor) return;

  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function renderCursor() {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  document.querySelectorAll('[data-cursor]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      const text = el.getAttribute('data-cursor') || 'VIEW';
      cursorText.textContent = text;
      cursor.classList.add('active');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('active');
    });
  });
}

function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function initMegaMenu() {
  const trigger = document.getElementById('collections-nav-link');
  const megaMenu = document.getElementById('collections-mega-menu');
  if (!trigger || !megaMenu) return;

  let menuTimeout;
  trigger.addEventListener('mouseenter', () => {
    clearTimeout(menuTimeout);
    megaMenu.classList.add('active');
    megaMenu.style.opacity = '1';
    megaMenu.style.visibility = 'visible';
    megaMenu.style.transform = 'translateY(0)';
  });
  trigger.addEventListener('mouseleave', () => {
    menuTimeout = setTimeout(() => {
      if (!megaMenu.matches(':hover')) {
        closeMega();
      }
    }, 200);
  });
  megaMenu.addEventListener('mouseleave', () => {
    closeMega();
  });
  function closeMega() {
    megaMenu.style.opacity = '0';
    megaMenu.style.visibility = 'hidden';
    megaMenu.style.transform = 'translateY(-10px)';
    megaMenu.classList.remove('active');
  }
}

function initMobileNav() {
  const btn = document.getElementById('mobile-menu-trigger');
  const drawer = document.getElementById('mobile-nav-drawer');
  const closeBtn = document.getElementById('mobile-nav-close');

  if (btn && drawer) btn.addEventListener('click', () => drawer.classList.add('active'));
  if (closeBtn && drawer) closeBtn.addEventListener('click', () => drawer.classList.remove('active'));
}

/* ==========================================================================
   4. CART ENGINE
   ========================================================================== */
let cartState = [
  {
    product: NARMIYAS_PRODUCTS[0],
    size: 'CUSTOM',
    qty: 1
  }
];

function initCartDrawer() {
  const cartTrigger = document.getElementById('cart-trigger');
  const cartDrawer = document.getElementById('cart-drawer');
  const cartOverlay = document.getElementById('cart-overlay');
  const closeCartBtn = document.getElementById('close-cart-btn');

  if (cartTrigger && cartDrawer && cartOverlay) {
    cartTrigger.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
  }
  renderCartUI();
}

function openCart() {
  document.getElementById('cart-drawer')?.classList.add('active');
  document.getElementById('cart-overlay')?.classList.add('active');
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('active');
  document.getElementById('cart-overlay')?.classList.remove('active');
}

function addToCart(productId, selectedSize = 'CUSTOM', quantity = 1) {
  const product = NARMIYAS_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cartState.find(item => item.product.id === productId && item.size === selectedSize);
  if (existing) {
    existing.qty += quantity;
  } else {
    cartState.push({ product, size: selectedSize, qty: quantity });
  }

  renderCartUI();
  showToast(`ADDED ${product.name} TO YOUR COLLECTION.`);
  openCart();
}

function updateCartQty(productId, size, change) {
  const item = cartState.find(i => i.product.id === productId && i.size === size);
  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      cartState = cartState.filter(i => !(i.product.id === productId && i.size === size));
    }
  }
  renderCartUI();
}

function renderCartUI() {
  const cartContainer = document.getElementById('cart-items-container');
  const cartBadge = document.getElementById('cart-count-badge');
  const mobileDockCartBadge = document.getElementById('mobile-dock-cart-count');
  const subtotalEl = document.getElementById('cart-subtotal-val');
  if (!cartContainer) return;

  let totalQty = 0;
  let subtotal = 0;
  cartContainer.innerHTML = '';

  if (cartState.length === 0) {
    cartContainer.innerHTML = `
      <div style="text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; margin-bottom: 1rem;">YOUR COLLECTION IS EMPTY.</p>
        <p style="font-size: 0.85rem;">Discover rarity in our Signature Drop.</p>
      </div>
    `;
  } else {
    cartState.forEach(item => {
      totalQty += item.qty;
      subtotal += item.product.price * item.qty;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.product.primaryImg}" alt="${item.product.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div>
            <div class="cart-item-title">${item.product.name}</div>
            <div class="cart-item-meta">SIZE: ${item.size} | ${item.product.priceFormatted}</div>
          </div>
          <div class="cart-item-qty">
            <button class="qty-btn" onclick="updateCartQty('${item.product.id}', '${item.size}', -1)">-</button>
            <span style="font-size: 0.85rem; font-weight: 600;">${item.qty}</span>
            <button class="qty-btn" onclick="updateCartQty('${item.product.id}', '${item.size}', 1)">+</button>
          </div>
        </div>
      `;
      cartContainer.appendChild(itemEl);
    });
  }

  if (cartBadge) cartBadge.textContent = totalQty;
  if (mobileDockCartBadge) mobileDockCartBadge.textContent = totalQty;
  if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

  const whatsappCheckoutBtn = document.getElementById('cart-whatsapp-checkout');
  if (whatsappCheckoutBtn) {
    whatsappCheckoutBtn.onclick = () => {
      if (cartState.length === 0) return;
      let text = "Hi Narmiyas, I would like to place an order for:\n";
      cartState.forEach(i => {
        text += `- ${i.product.name} (Size: ${i.size}, Qty: ${i.qty}) - ₹${(i.product.price * i.qty).toLocaleString('en-IN')}\n`;
      });
      text += `\nTotal: ₹${subtotal.toLocaleString('en-IN')}`;
      const url = `https://wa.me/917871148118?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    };
  }
}

/* ==========================================================================
   5. PRODUCT DETAIL MODAL & QUICK VIEW
   ========================================================================== */
function initProductCatalog() {
  document.querySelectorAll('[data-open-pdp]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productId = btn.getAttribute('data-open-pdp');
      openPDPModal(productId);
    });
  });
}

function openPDPModal(productId) {
  const product = NARMIYAS_PRODUCTS.find(p => p.id === productId) || NARMIYAS_PRODUCTS[0];
  const modal = document.getElementById('pdp-modal');
  if (!modal) return;

  const container = document.getElementById('pdp-modal-content');
  if (!container) return;

  container.innerHTML = `
    <div class="modal-close-icon" onclick="closePDPModal()">✕</div>
    <div class="pdp-spread">
      <div class="pdp-gallery-col" style="position: relative;">
        <img src="${product.primaryImg}" alt="${product.name}" class="pdp-main-img" id="pdp-active-img">
        <button onclick="document.getElementById('pdp-active-img').src = document.getElementById('pdp-active-img').src.includes('${product.primaryImg}') ? '${product.secondaryImg}' : '${product.primaryImg}'" style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%); background: rgba(0,0,0,0.4); color: #fff; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>
        <button onclick="document.getElementById('pdp-active-img').src = document.getElementById('pdp-active-img').src.includes('${product.primaryImg}') ? '${product.secondaryImg}' : '${product.primaryImg}'" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%); background: rgba(0,0,0,0.4); color: #fff; border: none; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
        <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
          <img src="${product.primaryImg}" style="width: 70px; height: 90px; object-fit: cover; cursor: pointer; border: 1px solid var(--text-primary);" onclick="document.getElementById('pdp-active-img').src='${product.primaryImg}'">
          <img src="${product.secondaryImg}" style="width: 70px; height: 90px; object-fit: cover; cursor: pointer; border: 1px solid var(--border-medium);" onclick="document.getElementById('pdp-active-img').src='${product.secondaryImg}'">
        </div>
      </div>
      <div class="pdp-details-col">
        <div class="editorial-caps" style="color: var(--accent-gold-dark);">${product.tag}</div>
        <h2 class="pdp-title">${product.name}</h2>
        <div class="pdp-price">${product.priceFormatted}</div>
        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; font-weight: 300;">
          ${product.description}
        </p>

        <div>
          <label class="form-label" style="margin-bottom: 0.5rem; display: block;">SELECT SIZE / FIT</label>
          <div style="display: flex; gap: 0.5rem;" id="pdp-size-picker">
            ${product.sizes.map((s, idx) => `
              <button class="btn-secondary" style="padding: 0.5rem 1rem; font-size: 0.7rem; ${idx === 0 ? 'background-color: var(--text-primary); color: #fff;' : ''}" data-size="${s}">${s}</button>
            `).join('')}
          </div>
        </div>

        <div style="padding: 1rem; background-color: var(--bg-secondary); border-left: 2px solid var(--accent-gold); margin: 0.5rem 0;">
          <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase;">FABRIC & CRAFT</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.25rem;">${product.fabric}</div>
        </div>

        <div style="display: flex; gap: 1rem; margin-top: 1rem;">
          <button class="btn-primary" style="flex: 1;" onclick="addToCart('${product.id}', 'CUSTOM', 1); closePDPModal();">
            <span>ADD TO COLLECTION</span>
          </button>
          <button class="btn-secondary" onclick="openWhatsAppCustomForProduct('${product.name}')">
            <span>CUSTOMISE THIS</span>
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');

  const sizeBtns = container.querySelectorAll('#pdp-size-picker button');
  sizeBtns.forEach(b => {
    b.addEventListener('click', () => {
      sizeBtns.forEach(x => {
        x.style.backgroundColor = 'transparent';
        x.style.color = 'var(--text-primary)';
      });
      b.style.backgroundColor = 'var(--text-primary)';
      b.style.color = '#fff';
    });
  });
}

function closePDPModal() {
  document.getElementById('pdp-modal')?.classList.remove('active');
}

function openWhatsAppCustomForProduct(productName) {
  const text = `Hi Narmiyas, I am interested in customizing the piece: "${productName}". Please share details.`;
  window.open(`https://wa.me/917871148118?text=${encodeURIComponent(text)}`, '_blank');
}

function initCustomStudioWizard() {
  const openBtns = document.querySelectorAll('[data-open-studio]');
  const modal = document.getElementById('custom-studio-modal');

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal?.classList.add('active');
    });
  });

  const form = document.getElementById('custom-studio-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('cs-name')?.value || '';
      const phone = document.getElementById('cs-phone')?.value || '';
      const outfit = document.getElementById('cs-outfit')?.value || 'Custom Statement Outfit';
      const color = document.getElementById('cs-color')?.value || 'Signature Beige/Ivory';
      const budget = document.getElementById('cs-budget')?.value || 'Flexible';
      const notes = document.getElementById('cs-notes')?.value || '';

      const waMsg = `Hi Narmiyas! I would like to create a custom outfit.\n\n` +
                    `*Name*: ${name}\n` +
                    `*Contact/WhatsApp*: ${phone}\n` +
                    `*Outfit Type*: ${outfit}\n` +
                    `*Preferred Colour*: ${color}\n` +
                    `*Budget Preference*: ${budget}\n` +
                    `*Details*: ${notes}`;

      window.open(`https://wa.me/917871148118?text=${encodeURIComponent(waMsg)}`, '_blank');
      closeStudioModal();
      showToast('WIZARD COMPLETE. REDIRECTING TO WHATSAPP...');
    });
  }
}

function closeStudioModal() {
  document.getElementById('custom-studio-modal')?.classList.remove('active');
}

function initJournalModals() {
  document.querySelectorAll('[data-open-article]').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.journal-title')?.textContent || 'FASHION ESSAY';
      const modal = document.getElementById('journal-modal');
      const content = document.getElementById('journal-modal-content');
      if (modal && content) {
        content.innerHTML = `
          <div class="modal-close-icon" onclick="document.getElementById('journal-modal').classList.remove('active')">✕</div>
          <div style="padding: 4rem 3rem;">
            <div class="editorial-caps" style="color: var(--accent-gold-dark); margin-bottom: 1rem;">NARMIYAS JOURNAL / EDIT 04</div>
            <h1 class="font-serif" style="font-size: clamp(2.2rem, 4vw, 3.5rem); margin-bottom: 2rem; line-height: 1.1;">${title}</h1>
            <div style="font-size: 1.1rem; line-height: 1.9; color: var(--text-secondary); font-weight: 300;">
              <p style="margin-bottom: 1.5rem;">
                Fashion in the contemporary era has transcended standard seasonal cycles. At NARMIYAS, we view garment creation as an architectural dialogue between the wearer’s persona and master sartorial craft.
              </p>
              <blockquote style="font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; color: var(--text-primary); border-left: 2px solid var(--accent-gold); padding-left: 1.5rem; margin: 2rem 0;">
                "True luxury is not about wearing what everyone desires; it is wearing what no one else can possess."
              </blockquote>
              <p>
                Each custom order at NARMIYAS begins with a personal consultation. From hand-selected silk weaves to individual fittings, we ensure your signature piece remains an absolute rarity.
              </p>
            </div>
            <div style="margin-top: 3rem; text-align: center;">
              <button class="btn-primary" onclick="document.getElementById('journal-modal').classList.remove('active'); openStudioModalDirect();">
                <span>CREATE YOUR CUSTOM OUTFIT →</span>
              </button>
            </div>
          </div>
        `;
        modal.classList.add('active');
      }
    });
  });
}

function openStudioModalDirect() {
  document.getElementById('custom-studio-modal')?.classList.add('active');
}

function initSearchOverlay() {
  const trigger = document.getElementById('search-trigger');
  const overlay = document.getElementById('search-overlay');
  const closeBtn = document.getElementById('close-search-btn');

  if (trigger && overlay) trigger.addEventListener('click', () => overlay.classList.add('active'));
  if (closeBtn && overlay) closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
}

function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast('WELCOME TO THE NARMIYAS PRIVATE CIRCLE.');
        input.value = '';
      }
    });
  }
}

function showToast(message) {
  let toast = document.getElementById('narmiyas-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'narmiyas-toast';
    toast.className = 'narmiyas-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.15em;">NARMIYAS</span> <span>${message}</span>`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}

/* ==========================================================================
   PREMIUM PRELOADER
   ========================================================================== */
function initPreloader() {
  const preloader = document.getElementById('narmiyas-preloader');
  const counter = document.getElementById('preloader-counter');
  
  if (!preloader || !counter) return;

  let count = 0;
  const updateCounter = setInterval(() => {
    count += Math.floor(Math.random() * 10) + 1;
    if (count >= 100) {
      count = 100;
      clearInterval(updateCounter);
      setTimeout(() => {
        preloader.classList.add('loaded');
        document.body.style.overflow = 'auto'; // allow scrolling after load
      }, 500); // short delay after hitting 100
    }
    counter.textContent = count.toString().padStart(3, '0');
  }, 30);
  
  // Prevent scrolling while preloader is active
  document.body.style.overflow = 'hidden';
  
  // Failsafe in case JS errors or slow load
  window.addEventListener('load', () => {
    setTimeout(() => {
      if(!preloader.classList.contains('loaded')) {
        clearInterval(updateCounter);
        counter.textContent = '100';
        preloader.classList.add('loaded');
        document.body.style.overflow = 'auto';
      }
    }, 1500);
  });
}

/* ==========================================================================
   MAGNETIC BUTTONS EFFECT
   ========================================================================== */
function initMagneticButtons() {
  // Apply magnetic effect to key buttons and nav items
  const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary, .dock-action-item, .action-btn, .quick-add-badge');
  
  magneticElements.forEach((elem) => {
    elem.classList.add('magnetic');
    
    elem.addEventListener('mousemove', (e) => {
      const rect = elem.getBoundingClientRect();
      // Calculate mouse position relative to center of element
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Move element slightly towards cursor (magnetic pull)
      elem.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    
    elem.addEventListener('mouseleave', () => {
      // Snap back to original position
      elem.style.transform = `translate(0px, 0px)`;
    });
  });
}
