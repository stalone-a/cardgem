document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        showEmptyCartNotice('Ваша корзина пуста. Добавьте товары для оформления заказа.');
        return;
    }

    loadOrderItems();
    updateCartBadge();
    initDeliveryMethodHandlers();
    initFormValidation();

    window.addEventListener('storage', function (e) {
        if (e.key === 'cart') {
            const updatedCart = JSON.parse(e.newValue || '[]');
            if (updatedCart.length === 0) {
                showEmptyCartNotice('Корзина пуста. Перенаправляем в каталог.');
                return;
            }
            loadOrderItems();
            updateCartBadge();
        }
    });

    window.addEventListener('cartChanged', function () {
        const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (updatedCart.length === 0) {
            showEmptyCartNotice('Корзина пуста. Перенаправляем в каталог.');
            return;
        }
        loadOrderItems();
        updateCartBadge();
    });
});

function showEmptyCartNotice(message) {
    if (document.querySelector('.checkout-cart-notice')) return;

    const notice = document.createElement('div');
    notice.className = 'alert alert-info checkout-cart-notice';
    notice.setAttribute('role', 'status');
    notice.innerHTML = `<i class="bi bi-cart-x me-2"></i>${message}`;
    document.body.appendChild(notice);

    setTimeout(() => {
        window.location.href = 'catalog.html';
    }, 1400);
}

function loadOrderItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const orderItemsList = document.getElementById('orderItemsList');
    const orderTotal = document.getElementById('orderTotal');

    if (cart.length === 0) {
        orderItemsList.innerHTML = '<p class="text-muted">Корзина пуста</p>';
        orderTotal.textContent = '0 ₽';
        return;
    }

    let html = '<div class="order-items">';
    let total = 0;

    const groupedCart = cart.reduce((acc, item) => {
        const itemId = String(item.id);
        if (acc[itemId]) {
            acc[itemId].quantity += 1;
        } else {
            acc[itemId] = { ...item, quantity: 1 };
        }
        return acc;
    }, {});

    const cartItems = Object.values(groupedCart);

    cartItems.forEach(item => {
        let price = 0;
        if (typeof item.price === 'string') {
            price = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
        } else if (typeof item.price === 'number') {
            price = item.price;
        }

        if (price <= 0) return;

        const itemTotal = price * item.quantity;
        total += itemTotal;

        const itemName = item.title || item.name || 'Товар';
        let image = item.image || 'images/placeholder.svg';

        html += `
            <div class="order-item mb-3" onclick="openProductFromCheckout(${item.id})" style="cursor: pointer;">
                <div class="d-flex align-items-center">
                    <img src="${image}" alt="${itemName}" class="order-item-image" onerror="this.src='images/placeholder.svg'">
                    <div class="flex-grow-1 ms-3">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="order-item-info">
                                <div class="order-item-name fw-medium mb-1">${itemName}</div>
                                <div class="order-item-price text-primary fw-bold">${itemTotal.toLocaleString('ru-RU')} ₽</div>
                            </div>
                            <div class="order-item-actions" onclick="event.stopPropagation();">
                                <div class="quantity-controls-checkout">
                                    <button class="quantity-btn-checkout" onclick="updateCheckoutQuantity('${item.id}', ${item.quantity - 1})" ${item.quantity <= 1 ? 'disabled' : ''}>
                                        <i class="bi bi-dash"></i>
                                    </button>
                                    <span class="quantity-display">${item.quantity}</span>
                                    <button class="quantity-btn-checkout" onclick="updateCheckoutQuantity('${item.id}', ${item.quantity + 1})" ${item.quantity >= 99 ? 'disabled' : ''}>
                                        <i class="bi bi-plus"></i>
                                    </button>
                                </div>
                                <button class="btn-remove-checkout" onclick="removeFromCheckout('${item.id}')">
                                    <i class="bi bi-trash"></i> Удалить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';

    orderItemsList.innerHTML = html;
    updateTotalPrice(total);
}

function updateTotalPrice(baseTotal) {
    const orderTotal = document.getElementById('orderTotal');
    const subtotalElement = document.getElementById('subtotal');
    const deliveryElement = document.getElementById('deliveryCost');

    if (subtotalElement) {
        subtotalElement.textContent = baseTotal.toLocaleString('ru-RU') + ' ₽';
    }

    if (deliveryElement) {
        deliveryElement.textContent = '0 ₽';
    }

    if (orderTotal) {
        orderTotal.textContent = baseTotal.toLocaleString('ru-RU') + ' ₽';
    }
}

function updateCheckoutQuantity(productId, newQuantity) {
    if (newQuantity < 1) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productIndices = [];
    cart.forEach((item, index) => {
        if (String(item.id) === String(productId)) {
            productIndices.push(index);
        }
    });

    const currentQuantity = productIndices.length;

    if (newQuantity > currentQuantity) {

        const itemToAdd = cart.find(item => String(item.id) === String(productId));
        if (itemToAdd) {
            for (let i = 0; i < (newQuantity - currentQuantity); i++) {
                cart.push({ ...itemToAdd });
            }
        }
    } else if (newQuantity < currentQuantity) {

        const itemsToRemove = currentQuantity - newQuantity;
        for (let i = 0; i < itemsToRemove; i++) {
            const indexToRemove = productIndices.pop();
            cart.splice(indexToRemove, 1);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    loadOrderItems();

    updateCartBadge();

    window.dispatchEvent(new Event('storage'));
}

function openProductFromCheckout(productId) {
    const productPages = {
        1: 'products/mastercard-ziraat.html',
        2: 'products/alfabank-bazovaya.html',
        3: 'products/yumoney-verified.html',
        4: 'products/paypal-verified.html',
        29: 'products/paypal-balance-500-1000.html',
        30: 'products/paypal-balance-1000-plus.html',
        7: 'products/ozon-bank-extended.html',
        8: 'products/mastercard-kaspi-gold.html',
        9: 'products/oldubil-verified.html',
        10: 'products/wise-verified.html',
        11: 'products/pyypl-verified.html',
        12: 'products/yandex-pay-maximum.html',
        16: 'products/revolut-verified.html',
        17: 'products/volet-advcash-verified.html',
        18: 'products/skrill-verified.html',
        19: 'products/bybit-verified.html',
        20: 'products/binance-verified.html',
        21: 'products/okx-verified.html',
        26: 'products/mexc-verified.html',
        305: 'products/bybit-account-with-balance.html',
        27: 'products/bingx-verified.html',
        28: 'products/coinbase-verified.html',
        304: 'products/coinbase-account-with-balance.html',
        24: 'products/mastercard-rbs.html',
        25: 'products/mir-sberbank.html',
        102: 'products/vtb-platina.html',
        201: 'products/sberbank-gold.html',
        202: 'products/sberbank-perviy.html',
        205: 'products/tinkoff-black.html',
        210: 'products/visa-prepaid-virtual-100-eur.html',
        211: 'products/mastercard-prepaid-virtual-100-usd.html',
        212: 'products/max-account.html',
        214: 'products/pari-account.html',
        215: 'products/betboom-account.html',
        216: 'products/liga-account.html',
        217: 'products/fonbet-account.html',
        218: 'products/winline-account.html',
        219: 'products/marathon-account.html',
        213: 'products/qplus-wallet.html',
        220: 'products/avito-account.html',
        221: 'products/avito-account-with-reviews.html',
        224: 'products/ebay-account.html',
        225: 'products/amazon-account.html',
        226: 'products/wechat-account.html',
        227: 'products/gosuslugi-account.html',
        228: 'products/github-copilot-pro.html',
        229: 'products/github-copilot-proplus.html',
        230: 'products/github-copilot-max.html',
        231: 'products/claude-ai-pro.html',
        232: 'products/claude-ai-max.html',
        233: 'products/fortnite-300-plus-skins.html',
        240: 'products/gta-6-ultimate-edition-ps-turkey.html',
        241: 'products/gta-6-ultimate-edition-xbox-turkey.html',
        234: 'products/facebook-old-2016-2020.html',
        235: 'products/x-twitter-old-2008-2014.html',
        236: 'products/google-usa-gmail-2020-6-years-personal.html',
        237: 'products/reddit-karma-1000-global.html',
        238: 'products/1xbet-account.html',
        239: 'products/stake-account.html',
        75: 'products/onlyf-account.html',
        303: 'products/binance-account-with-balance.html',
        301: 'products/vpn.html',
        302: 'products/proxy.html'
    };

    const page = productPages[productId];
    if (page) {
        window.location.href = page;
    }
}

function removeFromCheckout(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cart = cart.filter(item => String(item.id) !== String(productId));

    localStorage.setItem('cart', JSON.stringify(cart));

    if (cart.length === 0) {
        showEmptyCartNotice('Корзина пуста. Перенаправляем в каталог.');
        return;
    }

    loadOrderItems();

    updateCartBadge();

    window.dispatchEvent(new Event('storage'));
}

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.length;

    document.querySelectorAll('.cart-count').forEach(element => {
        element.textContent = cartCount;

        const badge = element.closest('.badge');
        if (badge) {
            badge.style.display = cartCount > 0 ? 'inline-block' : 'none';
        }
    });
}

function initDeliveryMethodHandlers() {
    const deliveryRadios = document.querySelectorAll('input[name="deliveryMethod"]');
    const deliveryAddressPanel = document.getElementById('deliveryAddressPanel');
    const deliveryAddressColumn = document.getElementById('deliveryAddressColumn');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const firstNameLabel = firstNameInput.previousElementSibling;
    const lastNameLabel = lastNameInput.previousElementSibling;

    const firstNameContainer = firstNameInput.closest('.mb-3');
    const lastNameContainer = lastNameInput.closest('.mb-3');

    const isMobile = () => window.innerWidth < 992;

    deliveryRadios.forEach(radio => {
        radio.addEventListener('change', function () {

            const cart = JSON.parse(localStorage.getItem('cart')) || [];

            const groupedCart = cart.reduce((acc, item) => {
                const itemId = String(item.id);
                if (acc[itemId]) {
                    acc[itemId].quantity += 1;
                } else {
                    acc[itemId] = { ...item, quantity: 1 };
                }
                return acc;
            }, {});

            const cartItems = Object.values(groupedCart);

            let baseTotal = 0;
            cartItems.forEach(item => {
                let price = 0;
                if (typeof item.price === 'string') {
                    price = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
                } else if (typeof item.price === 'number') {
                    price = item.price;
                }
                baseTotal += price * item.quantity;
            });
            updateTotalPrice(baseTotal);

            if (this.value === 'virtual') {

                deliveryAddressPanel.style.display = 'none';

                firstNameInput.removeAttribute('required');
                lastNameInput.removeAttribute('required');

                const firstNameRequiredMark = firstNameLabel.querySelector('.required-mark');
                const lastNameRequiredMark = lastNameLabel.querySelector('.required-mark');

                if (firstNameRequiredMark) {
                    firstNameRequiredMark.style.display = 'none';
                }
                if (lastNameRequiredMark) {
                    lastNameRequiredMark.style.display = 'none';
                }

                if (isMobile()) {
                    deliveryAddressColumn.style.display = 'none';
                }

                const addressFields = deliveryAddressPanel.querySelectorAll('input[required], select[required], textarea[required]');
                addressFields.forEach(field => {
                    field.removeAttribute('required');
                    field.classList.remove('is-valid', 'is-invalid');
                });
            } else {

                deliveryAddressPanel.style.display = 'block';
                deliveryAddressColumn.style.display = 'block';

                document.getElementById('country').setAttribute('required', 'required');
                document.getElementById('region').setAttribute('required', 'required');
                document.getElementById('city').setAttribute('required', 'required');
                document.getElementById('address').setAttribute('required', 'required');

                firstNameInput.setAttribute('required', 'required');
                lastNameInput.setAttribute('required', 'required');

                const firstNameRequiredMark = firstNameLabel.querySelector('.required-mark');
                const lastNameRequiredMark = lastNameLabel.querySelector('.required-mark');

                if (firstNameRequiredMark) {
                    firstNameRequiredMark.style.display = 'inline';
                }
                if (lastNameRequiredMark) {
                    lastNameRequiredMark.style.display = 'inline';
                }
            }
        });
    });
}

function initFormValidation() {
    const form = document.getElementById('checkoutForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();

        const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;

        let isValid = true;

        const contactInfo = document.getElementById('contactInfo');
        if (!contactInfo.value.trim()) {
            contactInfo.classList.add('is-invalid');
            isValid = false;
        } else {
            contactInfo.classList.remove('is-invalid');
            contactInfo.classList.add('is-valid');
        }

        if (deliveryMethod !== 'virtual') {
            const fields = [
                document.getElementById('firstName'),
                document.getElementById('lastName'),
                document.getElementById('country'),
                document.getElementById('region'),
                document.getElementById('city'),
                document.getElementById('address')
            ];

            fields.forEach(field => {
                const value = field.tagName === 'SELECT' ? field.value : field.value.trim();
                field.classList.toggle('is-invalid', !value);
                field.classList.toggle('is-valid', Boolean(value));
                if (!value) isValid = false;
            });
        }

        if (isValid) {

            processOrder();
        } else {

            const firstInvalid = form.querySelector('.is-invalid');
            if (firstInvalid) {
                firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        form.classList.add('was-validated');
    });
}

let currentOrderTotal = 0;
let selectedCrypto = null;
let cryptoRates = {};
let lastRateUpdate = null;
let rateUpdateInterval = null;
let ratesLoaded = false;

function processOrder() {
    const contactInfo = document.getElementById('contactInfo').value;
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;

    const orderData = {
        contactInfo: contactInfo,
        paymentMethod: paymentMethod,
        deliveryMethod: deliveryMethod,
        items: JSON.parse(localStorage.getItem('cart')) || []
    };

    if (deliveryMethod !== 'virtual') {
        orderData.deliveryAddress = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            country: document.getElementById('country').value,
            region: document.getElementById('region').value,
            city: document.getElementById('city').value,
            postalCode: document.getElementById('postalCode').value,
            address: document.getElementById('address').value
        };
    }

    const groupedCart = orderData.items.reduce((acc, item) => {
        const itemId = String(item.id);
        if (acc[itemId]) {
            acc[itemId].quantity += 1;
        } else {
            acc[itemId] = { ...item, quantity: 1 };
        }
        return acc;
    }, {});

    const cartItems = Object.values(groupedCart);

    let total = 0;
    cartItems.forEach(item => {
        let price = 0;
        if (typeof item.price === 'string') {
            price = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
        } else if (typeof item.price === 'number') {
            price = item.price;
        }
        total += price * item.quantity;
    });

    orderData.total = total;
    currentOrderTotal = total;

    localStorage.setItem('currentOrder', JSON.stringify(orderData));

    showCryptoPaymentPanel();
}

function showCryptoPaymentPanel() {

    document.getElementById('checkoutForm').style.display = 'none';
    document.querySelector('.checkout-summary-panel').style.display = 'none';
    document.querySelector('.main-bg h2').style.display = 'none';

    const cryptoPanel = document.getElementById('cryptoPaymentPanel');
    cryptoPanel.style.display = 'block';

    document.getElementById('paymentTotalRub').textContent = currentOrderTotal.toLocaleString('ru-RU');

    fetchCryptoRates();
    startAutoRateUpdate();

    initCryptoOptions();

    window.scrollTo(0, 0);
}

async function fetchCryptoRates(retryCount = 0) {
    const maxRetries = 3;

    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether,bitcoin,ethereum,ripple,binancecoin,monero,matic-network,polygon-ecosystem-token,the-open-network&vs_currencies=rub', {
            cache: 'no-cache',
            headers: {
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache'
            }
        });

        if (!response.ok) {
            throw new Error(`API ответил с кодом: ${response.status}`);
        }

        const data = await response.json();

        const requiredCoins = ['tether', 'bitcoin', 'ethereum', 'ripple', 'binancecoin', 'monero', 'the-open-network'];
        const missingCoins = requiredCoins.filter(coin => !data[coin]?.rub);

        if (missingCoins.length > 0) {
            throw new Error(`Отсутствуют данные для: ${missingCoins.join(', ')}`);
        }

        let polRate = null;
        if (data['polygon-ecosystem-token']?.rub) {
            polRate = data['polygon-ecosystem-token'].rub;
        } else if (data['matic-network']?.rub) {
            polRate = data['matic-network'].rub;
        }

        if (!polRate) {
            throw new Error('Не удалось получить курс POL');
        }

        cryptoRates = {
            'USDT': data.tether.rub,
            'BTC': data.bitcoin.rub,
            'ETH': data.ethereum.rub,
            'XRP': data.ripple.rub,
            'BNB': data.binancecoin.rub,
            'XMR': data.monero.rub,
            'POL': polRate,
            'TON': data['the-open-network'].rub
        };

        lastRateUpdate = new Date();
        ratesLoaded = true;

        updateRateStatusDisplay();
        enableCheckoutIfReady();

    } catch (error) {
        ratesLoaded = false;
        updateRateStatusDisplay();

        if (retryCount < maxRetries) {
            setTimeout(() => {
                fetchCryptoRates(retryCount + 1);
            }, 5000);
        } else {
            showRateError();
        }
    }
}

function updateRateStatusDisplay() {
    const statusElement = document.getElementById('rateStatus');
    if (!statusElement) return;

    if (ratesLoaded && lastRateUpdate) {
        const timeStr = lastRateUpdate.toLocaleTimeString();
        statusElement.innerHTML = `
            <div class="alert alert-success d-flex align-items-center">
                <i class="bi bi-check-circle-fill me-2"></i>
                <span>Курсы актуальны (обновлено в ${timeStr})</span>
            </div>
        `;
    } else {
        statusElement.innerHTML = `
            <div class="alert alert-warning d-flex align-items-center">
                <div class="spinner-border spinner-border-sm me-2" role="status"></div>
                <span>Загружаем актуальные курсы...</span>
            </div>
        `;
    }
}

function showRateError() {
    const statusElement = document.getElementById('rateStatus');
    if (!statusElement) return;

    statusElement.innerHTML = `
        <div class="alert alert-danger d-flex align-items-center">
            <i class="bi bi-exclamation-triangle-fill me-2"></i>
            <div class="flex-grow-1">
                <span>Не удалось загрузить актуальные курсы</span>
                <button class="btn btn-sm btn-outline-danger ms-2" onclick="fetchCryptoRates()">
                    <i class="bi bi-arrow-clockwise me-1"></i>Повторить
                </button>
            </div>
        </div>
    `;
}

function enableCheckoutIfReady() {
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        if (ratesLoaded) {
            checkoutBtn.disabled = false;
            checkoutBtn.innerHTML = 'Оформить заказ';
        } else {
            checkoutBtn.disabled = true;
            checkoutBtn.innerHTML = 'Загружаем курсы...';
        }
    }
}

function startAutoRateUpdate() {
    if (rateUpdateInterval) {
        clearInterval(rateUpdateInterval);
    }

    rateUpdateInterval = setInterval(() => {
        fetchCryptoRates();
    }, 300000);
}

window.addEventListener('beforeunload', () => {
    if (rateUpdateInterval) {
        clearInterval(rateUpdateInterval);
    }
});

document.addEventListener('visibilitychange', () => {
    if (!document.hidden && ratesLoaded) {
        if (lastRateUpdate && (new Date() - lastRateUpdate) > 600000) {
            fetchCryptoRates();
        }
    }
});

function initCryptoOptions() {
    const cryptoOptions = document.querySelectorAll('.crypto-option');

    cryptoOptions.forEach(option => {
        option.addEventListener('click', function () {

            cryptoOptions.forEach(opt => opt.classList.remove('selected'));

            this.classList.add('selected');

            const crypto = this.getAttribute('data-crypto');
            const cryptoName = this.getAttribute('data-name');

            if (!ratesLoaded) {
                alert('Курсы криптовалют еще загружаются. Пожалуйста, подождите.');
                return;
            }

            selectedCrypto = crypto;

            const rate = cryptoRates[crypto];
            if (!rate) {
                alert(`Курс для ${cryptoName} недоступен. Попробуйте обновить страницу.`);
                return;
            }

            const cryptoAmount = (currentOrderTotal / rate).toFixed(8);
            const displayCrypto = crypto === 'TON' ? 'GRAM' : crypto;

            document.getElementById('paymentTotalCrypto').textContent = cryptoAmount;
            document.getElementById('cryptoSymbol').textContent = displayCrypto;

            showPaymentDetails(crypto, cryptoAmount, displayCrypto);
        });
    });
}

function showPaymentDetails(crypto, amount, displayCrypto = crypto) {
    const paymentDetails = document.getElementById('paymentDetails');
    paymentDetails.style.display = 'block';

    const walletAddress = generateWalletAddress(crypto);
    document.getElementById('walletAddress').value = walletAddress;

    document.getElementById('exactAmount').textContent = `${amount} ${displayCrypto}`;

    paymentDetails.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function generateWalletAddress(crypto) {
    const addresses = {
        'USDT': 'TSeDN72GFdZMjdUQ7vAF4Fr8VKr179BR9W',
        'BTC': 'bc1qfltfq200eaerx8qcs32d6kjqt6dc2wytsx7fve',
        'ETH': '0xb833F0a516402E6E8dE95467a62EEB701dA89FFa',
        'XRP': 'rs1sXQZsv58E2pG5ZMaaDSb4ATC3nPPgco',
        'BNB': '0xb833F0a516402E6E8dE95467a62EEB701dA89FFa',
        'XMR': '86LWrERA2yFesLAmVk9Cy962wEZoCs5aLGecaiSGz7ss5fsNR19ewgud8iPq1vTWt1QR788ucbmbyjYviSB7yR9uVPXHfXq',
        'POL': '0xb833F0a516402E6E8dE95467a62EEB701dA89FFa',
        'TON': 'UQCABwtQiCoVhBQXtPeIv4pIWjVGcDEHxqYQJFodr_FpgKU1'
    };

    return addresses[crypto] || 'Address not available';
}

function copyWalletAddress() {
    const walletInput = document.getElementById('walletAddress');
    walletInput.select();
    walletInput.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');

        const btn = event.target.closest('button');
        const originalHTML = btn.innerHTML;
        const btnText = btn.querySelector('.copy-btn-text');

        if (btnText) {
            btn.innerHTML = '<i class="bi bi-check"></i> <span class="copy-btn-text">Скопировано!</span>';
        } else {
            btn.innerHTML = '<i class="bi bi-check"></i>';
        }

        btn.classList.add('btn-success');
        btn.classList.remove('btn-outline-primary');

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('btn-success');
            btn.classList.add('btn-outline-primary');
        }, 2000);
    } catch (err) {
    }
}

function confirmPayment() {
    if (!selectedCrypto) {
        alert('Пожалуйста, выберите криптовалюту');
        return;
    }

    const orderData = JSON.parse(localStorage.getItem('currentOrder') || '{}');

    document.getElementById('cryptoPaymentPanel').style.display = 'none';

    showProcessingPanel(orderData);
}

function showProcessingPanel(orderData) {
    const processingPanel = document.getElementById('processingPanel');
    processingPanel.style.display = 'block';

    const orderNumber = Math.floor(Math.random() * 90000) + 10000;

    const processingTitle = document.getElementById('processingTitle');
    if (processingTitle) {
        processingTitle.textContent = `Заявка №${orderNumber} в обработке`;
    }

    const rate = cryptoRates[selectedCrypto];
    if (!rate) {
        return;
    }

    const cryptoAmount = (currentOrderTotal / rate).toFixed(8);
    const displayCrypto = selectedCrypto === 'TON' ? 'GRAM' : selectedCrypto;

    document.getElementById('processingAmount').textContent = cryptoAmount;
    document.getElementById('processingCrypto').textContent = displayCrypto;
    document.getElementById('processingContact').textContent = orderData.contactInfo || 'Не указан';

    window.scrollTo(0, 0);

    localStorage.removeItem('cart');
    localStorage.removeItem('currentOrder');

    window.dispatchEvent(new Event('storage'));
}
