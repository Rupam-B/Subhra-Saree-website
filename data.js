const data = [
  {
    id: 1,
    item: "Silk Saree",
    price: 800,
    image: "images/disp-1.jpg",
  },
  {
    id: 2,
    item: "Navratri Kurta",
    price: 700,
    image: "images/disp-2.jpg",
  },
  {
    id: 3,
    item: "Silk Banarasi",
    price: 1200,
    image: "images/disp-3.jpg",
  },
  {
    id: 4,
    item: "Tangail Saree",
    price: 750,
    image: "images/disp-4.jpg",
  },
  {
    id: 5,
    item: "Gopala Dress",
    price: 100,
    image: "images/disp-5.jpg",
  },
  {
    id: 6,
    item: "Printed Saree",
    price: 350,
    image: "images/disp-6.jpg",
  },
  {
    id: 7,
    item: "Manipuri Silk",
    price: 550,
    image: "images/disp-7.jpg",
  },
  {
    id: 8,
    item: "Scarf gamcha",
    price: 150,
    image: "images/disp-8.jpg",
  },
  {
    id: 9,
    item: "kashmiri Silk",
    price: 6000,
    image: "images/disp-9.jpg",
  },
];

const sareeList = data.map((saree) => {
  return `<div class="col mx-10"  key="${saree.id}">
  <div  class="card shadow-sm">
      <img
        src="${saree.image}"
        class="bd-placeholder-img card-img-top"
        width="100%"
        height="225"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Placeholder: Thumbnail"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      />
      <div class="card-body">
        <p class="card-text">
          "${saree.item}" <br/>
          Jari Paar
        </p>
        <div
          class="d-flex justify-content-between align-items-center"
        >
          <div class="btn-group">
            <button
              type="button"
              onclick="showImage(${saree.id},'${saree.image}')"
              class="btn btn-sm btn-outline-secondary"$
            >
              View
            </button>
            <button
              type="button"
              onclick="purchaseGateway(${saree.id}, '${saree.item}', '${saree.price}')"
              class="btn btn-sm btn-outline-secondary"
            >
              Buy
            </button>
          </div>
          <small id="PriceNumb-1" class="text-body-secondary"
            >INR "${saree.price}"</small
          >
        </div>
      </div>
      </div>
  </div>`;
});

const sareeContainer = document.querySelector(".sareeList");
sareeContainer.innerHTML = sareeList.join("");

const purchaseGateway = (id, name, price) => {
  console.log(id, name, price);
  const userCart = {
    name: name,
    price: price,
  };
  localStorage.setItem("usercart", JSON.stringify(userCart));
  window.location.assign("purchase.html");
};

const showImage = (id, image) => {
  window.location.assign(image);
  //   console.log(id, image);
};
