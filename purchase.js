const getItem = JSON.parse(localStorage.getItem("usercart"));
const cartList = document.getElementById("cart-list");
console.log(getItem);
let nameEntry = getItem.name;
let priceEntry = getItem.price;

// ----------------

let li = document.createElement("li");
li.innerHTML = nameEntry;
console.log(li);
cartList.appendChild(li);

let Span = document.createElement("span");
Span.innerHTML = priceEntry;
li.appendChild(Span);

// ---------
