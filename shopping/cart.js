const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsDiv = document.getElementById('cart-items');
const totalPriceDiv = document.getElementById('total-price');

function renderCartItems() {
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
        totalPriceDiv.innerHTML = '₹0.00';
        return;
    }

    cartItemsDiv.innerHTML = ''; // Clear current items
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemCard = document.createElement('div');
        // cartItemCard.className = 'cart-item-card flex items-center mb-4'; 
        cartItemCard.innerHTML = `
            <div class="cart-item-image">
                <img src="img/cart_img.png" alt="${item.title}" class="cart-item-img"> <!-- Added a class here -->
            </div>
            <div class="cart-item-details ml-4"> <!-- Added left margin for spacing -->
                <h3 class="cart-item-title">${item.title}</h3>
                <p class="cart-item-price">₹${item.total}</p>
            </div>
        `;
        cartItemsDiv.appendChild(cartItemCard);
        totalPrice += parseFloat(item.total);
    });

    totalPriceDiv.innerHTML = `₹${totalPrice.toFixed(2)}`;
}

renderCartItems(); // Call function to render cart items
