let addToCate = () => {
  categories.forEach((pro) => {
    let cate = category.find((el) => el.cat == pro.cat);
    !cate && category.push(pro);
  });
};

let renderCategory = (category) => {
  categoriesContent.innerHTML = "";
  category.forEach((el, i) => {
    categoriesContent.innerHTML += `
  <div class="card cardProducts bg-white shadow-sm border-0 text-center rounded-5" 
  onclick="cateFilter(${i}) " >
      <img src='${el.src}' class="card-img-top m-auto mt-3" alt="food">
      <div class="card-body">
        <h5 class="card-title  mt-4">${el.cat}</h5>
      </div>
  </div>
        `;
  });
};

let cateFilter = (i) => {
  let product = filteredInput.length > 0 ? filteredInput[i] : category[i];
  activeHeading.innerText = `${product.cat}`;
  activeLink.innerText = "Types";
  categoriesContent.innerHTML = "";
  cateTypes = categories.filter((el) => el.cat == product.cat);
  renderTypes(cateTypes);
  toggleSearch();
};

let renderTypes = (cateTypes) => {
  categoriesContent.innerHTML = "";
  cateTypes.forEach((el, i) => {
    categoriesContent.innerHTML += `
  <div class="card cardTypes bg-white shadow-sm border-0 text-center rounded-5" 
  onclick="addToCard(${i}) " >
  <img src="${el.src}" class="card-img-top m-auto mt-3" alt="food">
      <div class="card-body">
          <h5>${el.name}</h5>
          <p class=" text-body-tertiary fw-semibold" style="font-size:.9rem">${el.size}</p>
          <p class="text-warning fs-4 m-0">$${el.price}</p>
      </div>
  </div>
    `;
  });
};

let addToCard = (i) => {
  toggleModal();
  let product =
    filteredInput.length > 0
      ? { ...filteredInput[i], qty: 1 }
      : { ...cateTypes[i], qty: 1 };
  let x = card.findIndex((el) => el.name == product.name);
  x == -1 && card.push(product);
  renderCard();
};

let renderCard = () => {
  card.forEach((el, i) => {
    cardContent.innerHTML = `
    <img src="${el.src}" alt="food" class="img-card">
    <h5 class="fs-2">${el.name}</h5>
    <p class="text-body-tertiary fw-semibold" style="font-size:.9rem">${
      el.size
    }</p>
    <p class="text-warning fs-2 fw-semibold m-0">$${el.price}</p>
    <div class="col-12 d-flex gap-2 d-flex justify-content-center align-items-center my-3 fs-3">
      <button onclick="decrementQty(${i})" class="btn btn-warning">-</button>
      <p class="fw-medium fs-2 text-secondary mt-3">${el.qty}</p>
      <button onclick="incrementQty(${i})" class="btn btn-warning ">+</button>
    </div>
    <span class="bg-warning rounded text-center col-5 p-2 mb-3 fw-medium text-secondary total ">total:$${
      el.qty * el.price
    }</span>
    <button class="btn btn-warning col-10 fw-semibold addToOrder" onclick="addToOrder(event,${i})">Add to Order</button>
  `;
  });
};

let incrementQty = (i) => {
  let product = card[i];
  product.qty++;
  renderCard();
};
let decrementQty = (i) => {
  let product = card[i];
  product.qty > 1 ? product.qty-- : card.splice(i, 1);
  renderCard();
};
function addToOrder(event, i) {
  event.target.setAttribute("disabled", "true");
  let product = { ...card[i], total: card[i].price * card[i].qty };
  setTimeout(() => {
    setTimeout(() => {
      showAlert.classList.replace("opacity-0", "opacity-1");
      setTimeout(() => {
        orders.push(product);
        localStorage.setItem("orders", JSON.stringify(orders));
        card[i].qty = 1;
        renderCard();
        showAlert.classList.replace("opacity-1", "opacity-0");
        event.target.removeAttribute("disabled");
      }, 2000);
    }, 1000);
  }, 0);
}

let toggleModal = () => {
  !modalIndex
    ? (modalDiv.classList.replace("opacity-0", "opacity-100"),
      fadeInDiv.classList.replace(
        "animate__fadeOutRightBig",
        "animate__fadeInRightBig"
      ),
      setTimeout(() => modalDiv.classList.replace("d-none", "d-flex"), 200))
    : (modalDiv.classList.replace("opacity-100", "opacity-0"),
      setTimeout(() => modalDiv.classList.replace("d-flex", "d-none"), 200),
      fadeInDiv.classList.replace(
        "animate__fadeInRightBig",
        "animate__fadeOutRightBig"
      ));
  modalIndex = !modalIndex;
};
let goLogin = () => {
  window.location.href = "../index.html";
};

let searchInput = (event, key, arr) => {
  filteredInput = arr.filter(
    (el) =>
      el[key]
        .toLowerCase()
        .replaceAll(" ", "")
        .indexOf(event.target.value.toLowerCase().replaceAll(" ", "")) != -1
  );
  !searchIndex ? renderCategory(filteredInput) : renderTypes(filteredInput);
};
let changePath = () => {
  if (activeLink.innerText != "Categories") {
    activeHeading.innerText = "Categories";
    activeLink.innerText = "Categories";
    renderCategory(category);
    toggleSearch();
  }
};

let toggleSearch = () => {
  !searchIndex
    ? ((search1.value = ""),
      (search1.style.display = "none"),
      search2.classList.replace("d-none", "d-flex"))
    : ((search2.value = ""),
      (search1.style.display = "flex"),
      search2.classList.replace("d-flex", "d-none"));
  searchIndex = !searchIndex;
};
