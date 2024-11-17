let categoriesContent = document.querySelector("#categoriesContent");
let cardContent = document.querySelector("#cardContent");
let activeLink = document.querySelector("#activeLink");
let activeHeading = document.querySelector("#activeHeading");
let cardProducts = document.querySelector(".cardProducts");
let modalDiv = document.querySelector(".modal");
let fadeInDiv = document.querySelector(".fadeInDiv");
let modalIndex = false;
let search1 = document.querySelector(".search-1");
let search2 = document.querySelector(".search-2");
let searchIndex = false;
let showAlert = document.querySelector(".alert");

addToCate();
renderCategory(category);
