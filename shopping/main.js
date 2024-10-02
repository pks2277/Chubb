// localStorage.clear();
// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
// Initially, I used a standard JavaScript function to manage items in the cart, but I encountered a 
// bug: when an item was already in the cart and I tried to add the same item again from the main page, 
// the item's quantity would reset instead of updating. To resolve this issue, I sought assistance from AI.

// Add item to cart
function addToCart() {
    alert("Added to the cart!");
    const quantity = parseInt(document.getElementById('quantity-input').value) || 1;

    const item = {
        title: 'Nike Sneakers',
        price: 12500.00,
        quantity: quantity,
        total: (12500.00 * quantity).toFixed(2)
    };

    const existingItem = cart.find(cartItem => cartItem.title === item.title);
    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.total = (existingItem.price * existingItem.quantity).toFixed(2);
    } else {
        cart.push(item);
    }
    updateCart();
}

// Update cart in localStorage and render cart items
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
}

// Render cart items on the cart page
function renderCartItems() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceDiv = document.getElementById('total-price');

    if (!cart.length) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceDiv.innerHTML = 'Total: ₹0.00';
        return;
    }

    cartItemsDiv.innerHTML = '';
    let totalPrice = 0;
    
    cart.forEach((item, index) => {
        cartItemsDiv.innerHTML += `
            <div class="cart-item-card">
                <div class="cart-item-image">
                    <img src="img/NIKE1.png" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <div class="cart-item-counter">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <input type="text" value="${item.quantity}" readonly>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                    <div class="cart-item-price">Total: ₹${item.total}</div>
                    <button onclick="removeFromCart(${index})">Remove</button>
                </div>
            </div>
        `;
        totalPrice += parseFloat(item.total);
    });

    totalPriceDiv.innerHTML = `Total: ₹${totalPrice.toFixed(2)}`;
}

// Update quantity (increment or decrement)
function updateQuantity(index, change) {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
        cart[index].total = (cart[index].price * cart[index].quantity).toFixed(2);
        updateCart();
    }
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Check if on cart page and render cart items
if (document.body.id === 'cart-page') renderCartItems();

// Image and Lightbox functionality
const images = ['img/NIKE1.png', 'img/NIKE2.png', 'img/NIKE3.png', 'img/NIKE4.png'];
let currentImageIndex = 0;

function changeImage(src) {
    document.getElementById('main-product-image').src = src;
}

function openLightbox() {
    const mainImage = document.getElementById('main-product-image').src;
    currentImageIndex = images.indexOf(mainImage);
    document.getElementById('lightbox-image').src = mainImage;
    document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeLightboxImage(src, index) {
    currentImageIndex = index;
    document.getElementById('lightbox-image').src = src;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById('lightbox-image').src = images[currentImageIndex];
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    document.getElementById('lightbox-image').src = images[currentImageIndex];
}

function openCart() {
    window.location.href = 'cart.html';
}

// Increment and Decrement Quantity
function incrementQuantity() {
    const quantityInput = document.getElementById('quantity-input');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decrementQuantity() {
    const quantityInput = document.getElementById('quantity-input');
    if (quantityInput.value > 1) quantityInput.value = parseInt(quantityInput.value) - 1;
}

// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});
