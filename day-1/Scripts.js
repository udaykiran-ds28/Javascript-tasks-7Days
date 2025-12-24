let cart=[]
let subtotal=0
let discount=10;
let gstRate = 10;
function addtocart(product,price,quantity){
    const items={
        product,
        price,
        quantity
    }
    cart.push(items)
}
addtocart("mobile",225,2)
addtocart("laptop",6000,1)
console.log(cart)// printing the cart items
function calculator(){
  let subtotal=0


for (let item of cart) {
  subtotal += item.price * item.quantity;
}
let gstAmount = (subtotal * gstRate) / 100 + subtotal
let discount_price=(gstAmount * discount)/100;
console.log(subtotal ,"products price")
console.log(gstAmount,"GST amount")
console.log(discount_price,"Total discount");

let total_price = subtotal + gstAmount - discount_price ;
console.log(total_price," total price ")
}
calculator()
