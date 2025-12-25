let cart = [];
let discount = 10;
let gstRate = 10;

function addtocart(product, price, quantity) {
    const items = {
        product,
        price,
        quantity
    };
    cart.push(items);
}

function addItems() {
    type=prompt("enter the product name")
    id=Number(prompt("enter the price"))
    quantit=Number( prompt("enther product quantity"))
    addtocart(type,id,quantit)

    document.getElementById("output").innerHTML =
        "<p>Items added to cart successfully ✅</p>";
}

function calculator() {
    let subtotal = 0;

    for (let item of cart) {
        subtotal += item.price * item.quantity;
    }

    let gstAmount = (subtotal * gstRate) / 100;
    let amountWithGST = subtotal + gstAmount;
    let discountPrice = (amountWithGST * discount) / 100;
    let totalPrice = amountWithGST - discountPrice;

    document.getElementById("output").innerHTML = `
        <h3>Bill Summary</h3>
        <p><strong>Subtotal:</strong> ₹${subtotal}</p>
        <p><strong>GST (10%):</strong> ₹${gstAmount}</p>
        <p><strong>Discount (10%):</strong> ₹${discountPrice}</p>
        <h4><strong>Total Price:</strong> ₹${totalPrice}</h4>
    `;
}
