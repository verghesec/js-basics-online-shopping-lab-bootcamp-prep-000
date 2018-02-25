var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var groceryItemPrice = new Object();
  groceryItemPrice[item] = getPrice(100);
  cart.push(groceryItemPrice);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var c = cart.slice(0,cart.length);
  var intro = "In your cart, you have";
  var separator = "";
  var final_prefix = ""
  var output = "";
  var name = "";
  var price = 0;
  var tmpGroceryObj = {};

  //console.log(`cart length = ${c.length}`);
  if ( c.length === 0 ) {
    console.log("Your shopping cart is empty.");
  }
  else if ( c.length > 0 ) {
    let i = 0;
    if ( c.length > 2) {
      separator = ",";
    }
    output = intro;
    while (c.length > 0) {
      if ( (c.length === 1) && (cart.length > 1) ) {
        final_prefix = " and";
      }
      tmpGroceryObj = c.shift();
      name = Object.keys(tmpGroceryObj).shift();
      price = tmpGroceryObj[name];
      output = output + separator + final_prefix + " " + name + " at $" + price;
    }
    output = output + ".";
  }

  console.log(output);

}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getPrice(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
