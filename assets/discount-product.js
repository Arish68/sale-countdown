document.addEventListener('DOMContentLoaded', function() {
  var addButton = document.querySelector('.discount-pro-atc-btn');

  if (addButton) {
    addButton.addEventListener('click', function() {
      var productId = addButton.getAttribute('data-var-id');
      addItemToCart(productId, 1);
    });
  }
});

function addItemToCart(variant_id, qty) {
  var data = {
    "id": variant_id,
    "quantity": qty
  };

  fetch('/cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(() => {
    window.location.href = "/cart";
  })
  .catch(error => console.error('Error:', error));

}