const getItem = JSON.parse(localStorage.getItem("usercart"));
const cartList = document.getElementById("cart-list");
// console.log(getItem);

let nameEntry = getItem.name;
let IdEntry = getItem.id;
let priceEntry = getItem.price;
// console.log(nameEntry, IdEntry, priceEntry);
// ---------------
let arrayOfObject = [];
if (IdEntry && nameEntry && priceEntry) {
  arrayOfObject.push({ id: IdEntry, name: nameEntry, price: priceEntry });
}

let cartItems = JSON.parse(sessionStorage.getItem("arrayOfObject")) || [];
cartItems.push({ id: IdEntry, name: nameEntry, price: priceEntry });
sessionStorage.setItem("arrayOfObject", JSON.stringify(cartItems));

function removeItem(id) {
  const storedArray = JSON.parse(sessionStorage.getItem("arrayOfObject"));

  // const modifiedArray = storedArray.filter((item) => {
  //   return item.id !== id || item.name !== name || item.price !== price;
  // });

  const modifiedArray = storedArray.filter((item) => {
    return !(item.id === id);
  });

  sessionStorage.setItem("arrayOfObject", JSON.stringify(modifiedArray));
  localStorage.setItem("usercart", {});
  cartItems = JSON.parse(sessionStorage.getItem("arrayOfObject")) || [];
  window.location.reload();
}

// ----------------

if (cartItems) {
  const renderCartItems = () => {
    cartList.innerHTML = ""; // Clear the existing list
    cartItems.forEach((item) => {
      let li = document.createElement("li");
      li.innerHTML = item.name;
      let button = document.createElement("button");
      button.innerHTML = `<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>`;
      li.prepend(button);
      button.onclick = () => removeItem(item.id);
      let span = document.createElement("span");
      span.innerHTML = item.price;
      li.appendChild(span);
      cartList.appendChild(li);
    });
  };

  renderCartItems(); // Render the cart items initially

  window.addEventListener("storage", (event) => {
    if (event.key === "arrayOfObject") {
      // Retrieve the updated items from sessionStorage
      cartItems = JSON.parse(sessionStorage.getItem("arrayOfObject")) || [];
      renderCartItems(); // Re-render the updated cart items
    }
  });
}
