/* ==========================================================================
   KIRTIPUR HUB NEPAL - E-Commerce Gadget Interactive JavaScript Logic
   Official WhatsApp Number: +977 9749497724
   ========================================================================== */

const WHATSAPP_NUMBER = "9779749497724";

// ==========================================
// 1. PRODUCTS DATABASE
// ==========================================
const PRODUCTS = [
    {
        id: 'mypower-super35c',
        title: 'MY POWER Super35C 20000mAh 35W PowerBank',
        category: 'powerbanks',
        categoryLabel: 'Power Bank',
        price: 3499,
        oldPrice: 4299,
        badge: 'BESTSELLER',
        rating: 5.0,
        reviewsCount: 84,
        image: 'images/mypower_super35c.jpg?v=2',
        description: 'The MY POWER Super35C is a premium high-capacity 20,000mAh power bank equipped with 35W Super Fast Charging output. Designed with an integrated heavy-duty lanyard cable and a bright digital LED battery indicator, it can charge your phone, tablet, or handheld devices multiple times safely.',
        specs: [
            '20,000mAh High Capacity Li-Polymer Battery',
            '35W Super Fast Charging PD & Quick Charge Output',
            'Built-in Multi-purpose Durable Lanyard Cable',
            'Smart Digital LED Screen (0-100% Battery Display)',
            'Dual Input & Dual Output Ports (Type-C & USB-A)',
            '10-Layer Safety Protection against overcharging & short circuits'
        ]
    },
    {
        id: 'ultima-tws-earbuds',
        title: 'Ultima Wireless ANC Earbuds (TWS)',
        category: 'audio',
        categoryLabel: 'Audio & Earbuds',
        price: 2499,
        oldPrice: 3199,
        badge: 'HOT DEAL',
        rating: 4.9,
        reviewsCount: 62,
        image: 'images/ultima_earbuds.jpg?v=2',
        description: 'Enjoy immersive high-fidelity sound with Ultima ANC Wireless Earbuds. Featuring 13mm dynamic titanium drivers for punchy deep bass, Quad-Mic Environmental Noise Cancellation (ENC) for crystal clear voice calls, and up to 40 hours of continuous music playback with fast charging case.',
        specs: [
            'Active Noise Cancellation (ANC) up to 30dB',
            '13mm Titanium Dynamic Bass Drivers',
            'Quad Mic ENC Technology for HD Calling',
            '40 Hours Total Playtime with Charging Case',
            'ASAP Fast Charge: 10 mins charge = 120 mins music',
            'IPX5 Sweat & Water Resistance rating'
        ]
    },
    {
        id: 'pro-smartwatch-ultra',
        title: 'Ultra AMOLED Smartwatch Pro',
        category: 'wearables',
        categoryLabel: 'Smartwatches',
        price: 4999,
        oldPrice: 6499,
        badge: 'NEW',
        rating: 4.8,
        reviewsCount: 45,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=600&q=80',
        description: 'Step up your fitness and daily connectivity with the Ultra AMOLED Smartwatch. Comes with a vibrant 2.04" Always-On HD display, Bluetooth Calling with built-in clear HD speaker, 100+ sports tracking modes, and 24/7 health monitoring (Heart Rate, SpO2, Sleep).',
        specs: [
            '2.04-inch Always-On HD AMOLED Display (600 nits)',
            'HD Bluetooth Calling & Direct Phone Contacts Sync',
            'Real-time Heart Rate, SpO2 & Stress Monitor',
            '100+ Professional Sports & Exercise Modes',
            'Rugged Titanium Alloy Casing & IP68 Waterproof',
            'Up to 10 Days Battery Backup on single charge'
        ]
    },
    {
        id: 'gan-charger-65w',
        title: '65W GaN Dual Port Super Fast Charger',
        category: 'chargers',
        categoryLabel: 'Chargers & Cables',
        price: 2199,
        oldPrice: 2899,
        badge: 'FAST CHARGE',
        rating: 4.9,
        reviewsCount: 38,
        image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=600&q=80',
        description: 'Ultra-compact yet ultra-powerful Gallium Nitride (GaN III) 65W wall charger. Easily charges laptops, MacBooks, iPhones, iPads, and Android smartphones at top speed from a single socket.',
        specs: [
            '65W High-Speed Output Power Delivery (PD 3.0)',
            'Advanced GaN III Chip Technology (Low Heat)',
            'Dual Type-C Ports + 1 USB-A Quick Charge Port',
            'Universal Compatibility (MacBook, iPhone, Samsung)',
            'Compact Foldable Plug Design'
        ]
    },
    {
        id: 'rgb-gaming-headset',
        title: 'RGB Wireless Pro Gaming Headphones',
        category: 'gaming',
        categoryLabel: 'Gaming Gear',
        price: 3899,
        oldPrice: 4999,
        badge: 'GAMER CHOICE',
        rating: 4.9,
        reviewsCount: 51,
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80',
        description: 'Immerse yourself in competitive gaming with 7.1 surround sound audio, zero audio lag 2.4GHz wireless connection, detachable noise-canceling mic, dynamic RGB lighting effects, and soft memory foam earcups.',
        specs: [
            '50mm High-Precision Neodymium Audio Drivers',
            'Ultra Low Latency 2.4GHz Wireless + Bluetooth 5.3',
            'Detachable HD Noise-Canceling Boom Microphone',
            'Dynamic RGB Breathing Lighting',
            'Soft Breathable Memory Foam Ear Cushions'
        ]
    },
    {
        id: 'portable-speaker-bass',
        title: 'Heavy Bass Waterproof Outdoor Speaker',
        category: 'audio',
        categoryLabel: 'Audio & Earbuds',
        price: 3299,
        oldPrice: 4199,
        badge: 'POPULAR',
        rating: 4.7,
        reviewsCount: 29,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=600&q=80',
        description: 'Take your music anywhere with this rugged 20W stereo Bluetooth speaker featuring dual passive bass radiators, full IPX7 waterproof rating, and 16 hours of continuous playtime.',
        specs: [
            '20W Room-Filling Stereo Sound with Deep Bass',
            'IPX7 Full Waterproof & Shockproof Casing',
            '16 Hours Playback Battery Life',
            'TWS Pair Feature (Connect 2 speakers for 40W sound)',
            'Bluetooth 5.3 + TF Card Slot & AUX Port'
        ]
    },
    {
        id: 'magnetic-magsafe-bank',
        title: '10000mAh Wireless Magnetic Power Bank',
        category: 'powerbanks',
        categoryLabel: 'Power Bank',
        price: 2899,
        oldPrice: 3599,
        badge: 'TRENDING',
        rating: 4.8,
        reviewsCount: 34,
        image: 'https://images.unsplash.com/photo-1622445268465-843d30b91e5d?auto=format&fit=crop&w=600&q=80',
        description: 'Snap & Charge wirelessly on the go! Built for MagSafe compatible iPhones and Qi devices. Features 15W fast magnetic wireless charging and 22.5W wired PD output with a built-in foldable kickstand.',
        specs: [
            'Strong Ultra-Magnetic Hold for MagSafe',
            '15W Fast Wireless Charging + 22.5W Wired PD Output',
            'Integrated Foldable Metal Kickstand for Hands-Free Viewing',
            'Slim Pocket-Friendly Rubberized Surface',
            'LED Battery Power Indicators'
        ]
    },
    {
        id: 'nylon-braided-cable',
        title: '100W PD Ultra Fast Charging Cable (Type-C)',
        category: 'chargers',
        categoryLabel: 'Chargers & Cables',
        price: 699,
        oldPrice: 999,
        badge: 'ESSENTIAL',
        rating: 5.0,
        reviewsCount: 110,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
        description: 'Heavy duty 100W Type-C to Type-C fast charging cable wrapped in military-grade nylon braiding with gold-plated zinc alloy heads and built-in E-Mark smart chip.',
        specs: [
            '100W High Power Delivery Support (5A Max)',
            'Built-in E-Mark Smart Chip for Safe Fast Charging',
            'High-Density Military Nylon Braided Armor',
            '1.5 Meter Length & 480Mbps Data Transfer Rate',
            'Tested for 15,000+ Bends Durability'
        ]
    }
];

// ==========================================
// 2. STATE MANAGEMENT
// ==========================================
let currentFilter = 'all';
let currentSearch = '';
let currentSelectedProduct = null;
let cart = JSON.parse(localStorage.getItem('kirtipur_cart')) || [];

// ==========================================
// 3. INITIALIZATION & EVENT LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartBadge();
    setupEventListeners();
});

function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    const clearSearch = document.getElementById('clearSearch');

    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.trim().toLowerCase();
        clearSearch.style.display = currentSearch ? 'block' : 'none';
        renderProducts();
    });

    clearSearch.addEventListener('click', () => {
        searchInput.value = '';
        currentSearch = '';
        clearSearch.style.display = 'none';
        renderProducts();
    });

    // Category Filter Pills
    const categoryBtns = document.querySelectorAll('.nav-link');
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.getAttribute('data-category');
            renderProducts();
        });
    });

    // Product Modal Controls
    document.getElementById('closeProductModal').addEventListener('click', closeProductModal);
    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target.id === 'productModal') closeProductModal();
    });

    // Quantity buttons inside modal
    document.getElementById('modalQtyMinus').addEventListener('click', () => adjustModalQty(-1));
    document.getElementById('modalQtyPlus').addEventListener('click', () => adjustModalQty(1));

    // Modal Action Buttons
    document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
        if (!currentSelectedProduct) return;
        const qty = parseInt(document.getElementById('modalQty').value) || 1;
        addToCart(currentSelectedProduct.id, qty);
        closeProductModal();
        openCartDrawer();
    });

    document.getElementById('modalDirectWaBtn').addEventListener('click', () => {
        if (!currentSelectedProduct) return;
        const qty = parseInt(document.getElementById('modalQty').value) || 1;
        sendDirectProductWaOrder(currentSelectedProduct, qty);
    });

    // Cart Drawer Controls
    document.getElementById('cartBtn').addEventListener('click', openCartDrawer);
    document.getElementById('closeCartDrawer').addEventListener('click', closeCartDrawer);
    document.getElementById('cartDrawer').addEventListener('click', (e) => {
        if (e.target.id === 'cartDrawer') closeCartDrawer();
    });
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('cartCheckoutWaBtn').addEventListener('click', () => {
        if (cart.length === 0) {
            showToast('Your cart is empty!');
            return;
        }
        closeCartDrawer();
        openCheckoutModal();
    });

    // Checkout Modal Controls
    document.getElementById('closeCheckoutModal').addEventListener('click', closeCheckoutModal);
    document.getElementById('checkoutModal').addEventListener('click', (e) => {
        if (e.target.id === 'checkoutModal') closeCheckoutModal();
    });
}

// ==========================================
// 4. PRODUCT RENDERING & FILTERING
// ==========================================
function renderProducts() {
    const grid = document.getElementById('productGrid');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');

    let filtered = PRODUCTS.filter(p => {
        const matchesCategory = (currentFilter === 'all') || (p.category === currentFilter);
        const matchesSearch = !currentSearch || 
            p.title.toLowerCase().includes(currentSearch) || 
            p.categoryLabel.toLowerCase().includes(currentSearch) ||
            p.description.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });

    resultsCount.textContent = `Showing ${filtered.length} Gadget${filtered.length === 1 ? '' : 's'}`;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';

    grid.innerHTML = filtered.map(p => `
        <div class="product-card">
            <div class="card-img-wrapper" onclick="openProductModal('${p.id}')">
                <img src="${p.image}" alt="${p.title}" loading="lazy">
                <span class="card-badge">${p.badge}</span>
                <span class="card-quick-view"><i class="fa-solid fa-eye"></i> Quick View</span>
            </div>

            <div class="card-body">
                <span class="card-category">${p.categoryLabel}</span>
                <h3 class="card-title" onclick="openProductModal('${p.id}')">${p.title}</h3>
                
                <div class="card-rating">
                    <i class="fa-solid fa-star"></i>
                    <span>${p.rating} (${p.reviewsCount})</span>
                </div>

                <div class="card-price-row">
                    <span class="card-price">Rs. ${p.price.toLocaleString()}</span>
                    <span class="card-price-old">Rs. ${p.oldPrice.toLocaleString()}</span>
                </div>

                <div class="card-actions">
                    <button class="btn btn-outline btn-sm" onclick="openProductModal('${p.id}')">
                        <i class="fa-solid fa-circle-info"></i> Specs
                    </button>
                    <button class="btn btn-primary btn-sm" onclick="addToCart('${p.id}', 1)">
                        <i class="fa-solid fa-cart-plus"></i> Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterByCategory(cat) {
    currentFilter = cat;
    const categoryBtns = document.querySelectorAll('.nav-link');
    categoryBtns.forEach(btn => {
        if (btn.getAttribute('data-category') === cat) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderProducts();
}

function resetFilters() {
    currentFilter = 'all';
    currentSearch = '';
    document.getElementById('searchInput').value = '';
    document.getElementById('clearSearch').style.display = 'none';
    const categoryBtns = document.querySelectorAll('.nav-link');
    categoryBtns.forEach(btn => {
        if (btn.getAttribute('data-category') === 'all') btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderProducts();
}

// ==========================================
// 5. SINGLE PRODUCT DETAIL MODAL
// ==========================================
function openProductModal(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    currentSelectedProduct = product;

    document.getElementById('modalProductImg').src = product.image;
    document.getElementById('modalProductBadge').textContent = product.badge;
    document.getElementById('modalProductCategory').textContent = product.categoryLabel;
    document.getElementById('modalProductTitle').textContent = product.title;
    document.getElementById('modalProductPrice').textContent = `Rs. ${product.price.toLocaleString()}`;
    document.getElementById('modalProductOldPrice').textContent = `Rs. ${product.oldPrice.toLocaleString()}`;
    
    const saveAmt = product.oldPrice - product.price;
    document.getElementById('modalSaveTag').textContent = `Save Rs. ${saveAmt.toLocaleString()}`;
    document.getElementById('modalProductDesc').textContent = product.description;
    document.getElementById('modalQty').value = 1;

    // Render specs
    const specsList = document.getElementById('modalProductSpecs');
    specsList.innerHTML = product.specs.map(spec => `
        <li><i class="fa-solid fa-circle-check"></i> ${spec}</li>
    `).join('');

    document.getElementById('productModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

function adjustModalQty(delta) {
    const qtyInput = document.getElementById('modalQty');
    let val = parseInt(qtyInput.value) || 1;
    val += delta;
    if (val < 1) val = 1;
    if (val > 10) val = 10;
    qtyInput.value = val;
}

// Direct Single Product WhatsApp Order
function sendDirectProductWaOrder(product, quantity) {
    const total = product.price * quantity;
    const msg = `*NEW ORDER - KIRTIPUR HUB NEPAL*\n` +
                `------------------------------------\n` +
                `🛍️ *Product:* ${product.title}\n` +
                `🔢 *Quantity:* ${quantity}\n` +
                `💵 *Price:* Rs. ${product.price.toLocaleString()} x ${quantity}\n` +
                `💰 *Total Amount:* Rs. ${total.toLocaleString()}\n\n` +
                `Hi! I want to order this product directly from your website. Please send me delivery details. Thank you!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

// ==========================================
// 6. SHOPPING CART SYSTEM
// ==========================================
function addToCart(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    updateCartBadge();
    showToast(`Added "${product.title}" to cart!`);
}

function updateCartQuantity(productId, delta) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        saveCart();
        renderCartItems();
        updateCartBadge();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    renderCartItems();
    updateCartBadge();
    showToast('Item removed from cart');
}

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCart();
    renderCartItems();
    updateCartBadge();
    showToast('Cart cleared!');
}

function saveCart() {
    localStorage.setItem('kirtipur_cart', JSON.stringify(cart));
}

function updateCartBadge() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalCount;
    document.getElementById('cartItemCount').textContent = totalCount;
}

function openCartDrawer() {
    renderCartItems();
    document.getElementById('cartDrawer').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    document.getElementById('cartDrawer').classList.remove('active');
    document.body.style.overflow = '';
}

function renderCartItems() {
    const list = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');
    const grandTotalEl = document.getElementById('cartGrandTotal');

    if (cart.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
                <i class="fa-solid fa-bag-shopping" style="font-size: 2.5rem; margin-bottom: 12px;"></i>
                <p>Your cart is empty</p>
            </div>
        `;
        subtotalEl.textContent = 'Rs. 0';
        grandTotalEl.textContent = 'Rs. 0';
        return;
    }

    let subtotal = 0;

    list.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">Rs. ${item.price.toLocaleString()}</div>
                    <div class="cart-item-actions">
                        <div class="qty-control" style="transform: scale(0.85); transform-origin: left center;">
                            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)"><i class="fa-solid fa-minus"></i></button>
                            <input type="number" value="${item.quantity}" readonly>
                            <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
    grandTotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
}

// ==========================================
// 7. CHECKOUT & WHATSAPP ORDER GENERATOR
// ==========================================
function openCheckoutModal() {
    const summaryBox = document.getElementById('checkoutOrderSummary');
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    summaryBox.innerHTML = `
        <div style="font-weight: 700; color: #FFF; margin-bottom: 8px;">Order Summary (${cart.length} item types):</div>
        ${cart.map(i => `
            <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
                <span>• ${i.title} (x${i.quantity})</span>
                <strong style="color: var(--accent-cyan);">Rs. ${(i.price * i.quantity).toLocaleString()}</strong>
            </div>
        `).join('')}
        <div style="border-top: 1px dashed var(--border-color); margin-top: 8px; padding-top: 8px; display: flex; justify-content: space-between; font-weight: 800; font-size: 0.95rem; color: #FFF;">
            <span>Grand Total:</span>
            <span style="color: var(--accent-cyan);">Rs. ${total.toLocaleString()}</span>
        </div>
    `;

    document.getElementById('checkoutModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.body.style.overflow = '';
}

function sendWhatsAppOrder() {
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const address = document.getElementById('custAddress').value.trim();
    const payment = document.getElementById('custPayment').value;

    if (!name || !phone || !address) {
        showToast('Please fill all required fields!');
        return;
    }

    let itemsText = "";
    let grandTotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;
        itemsText += `${index + 1}. *${item.title}*\n   Qty: ${item.quantity} x Rs. ${item.price.toLocaleString()} = Rs. ${itemTotal.toLocaleString()}\n`;
    });

    const msg = 
`🛒 *NEW ORDER - KIRTIPUR HUB NEPAL*
----------------------------------------
👤 *Customer Name:* ${name}
📞 *Phone Number:* ${phone}
📍 *Delivery Address:* ${address}
💳 *Payment Preference:* ${payment}

📦 *ORDER ITEMS SUMMARY:*
${itemsText}
----------------------------------------
💰 *GRAND TOTAL:* Rs. ${grandTotal.toLocaleString()}
🚚 *Delivery:* Free Valley Shipping

Hi Kirtipur Hub Nepal! I have submitted this order from your website. Please confirm availability and delivery time. Thank you!`;

    const encodedMsg = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`, '_blank');

    closeCheckoutModal();
    clearCart();
}

// ==========================================
// 8. TOAST NOTIFICATION HELPERS
// ==========================================
function showToast(message) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-accent"></i> <span>${message}</span>`;
    
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}
