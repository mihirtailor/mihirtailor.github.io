document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cafeOrderForm");
  const orderSummary = document.getElementById("orderSummary");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const coffee = document.getElementById("coffee").value;
    const extras = Array.from(
      document.querySelectorAll('input[name="extras"]:checked')
    ).map((extra) => extra.value);
    const size = document.querySelector('input[name="size"]:checked').value;

    let totalPrice = calculatePrice(coffee, extras, size);

    displayOrderSummary(name, coffee, extras, size, totalPrice);
  });

  function calculatePrice(coffee, extras, size) {
    let price = 0;

    // Base price for coffee
    switch (coffee) {
      case "espresso":
        price += 2.5;
        break;
      case "latte":
        price += 3.0;
        break;
      case "cappuccino":
        price += 3.0;
        break;
      case "americano":
        price += 2.75;
        break;
    }

    // Add price for extras
    extras.forEach((extra) => {
      if (extra === "extraShot") price += 0.5;
      if (extra === "whippedCream") price += 0.25;
    });

    // Adjust price for size
    if (size === "medium") price += 0.5;
    if (size === "large") price += 1.0;

    return price.toFixed(2);
  }

  function displayOrderSummary(name, coffee, extras, size, totalPrice) {
    let summaryHTML = `
            <h2>Order Summary</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Coffee:</strong> ${coffee}</p>
            <p><strong>Size:</strong> ${size}</p>
        `;

    if (extras.length > 0) {
      summaryHTML += `<p><strong>Extras:</strong> ${extras.join(", ")}</p>`;
    }

    summaryHTML += `<p><strong>Total Price:</strong> $${totalPrice}</p>`;

    orderSummary.innerHTML = summaryHTML;
  }
});
