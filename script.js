const products = [
  { id: 1, name: "Signature Blazer", price: 129 },
  { id: 2, name: "Satin Slip Dress", price: 94 },
  { id: 3, name: "Classic Tote", price: 88 },
  { id: 4, name: "Everyday Knit Set", price: 110 },
  { id: 5, name: "Minimal Gold Hoops", price: 39 },
  { id: 6, name: "Soft Trench Coat", price: 149 }
];

let cartCount = 0;
const productContainer = document.getElementById("products");
const cartCountEl = document.getElementById("cart-count");
const yearEl = document.getElementById("year");
const newsletterForm = document.getElementById("newsletter-form");
const newsletterMessage = document.getElementById("newsletter-message");

function renderProducts() {
  productContainer.innerHTML = products
    .map(
      (product) => `
      <article class="product-card">
        <div class="product-image" role="img" aria-label="${product.name}"></div>
        <div class="product-meta">
          <h3>${product.name}</h3>
          <span class="price">$${product.price}</span>
        </div>
        <button class="add-btn" data-id="${product.id}">Add to Cart</button>
      </article>
    `
    )
    .join("");
}

function updateCartCount() {
  cartCountEl.textContent = String(cartCount);
}

productContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLElement && target.classList.contains("add-btn")) {
    cartCount += 1;
    updateCartCount();
  }
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("email");
  if (!(emailInput instanceof HTMLInputElement)) return;

  newsletterMessage.textContent = `Thanks for joining, ${emailInput.value}!`;
  newsletterForm.reset();
});

yearEl.textContent = String(new Date().getFullYear());
renderProducts();
updateCartCount();
