let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let showAlert = document.querySelector(".alert");
let alertIndex;

let login = (event) => {
  event.preventDefault();
  let email = emailInput.value;
  let pass = passwordInput.value;
  let x = users.findIndex((el) => el.email == email && el.pass == pass);
  x == -1
    ? ((alertIndex = true), toggleAlert())
    : ((alertIndex = false), toggleAlert());
};

let toggleAlert = () => {
  alertIndex
    ? setTimeout(() => {
        showAlert.classList.replace("opacity-0", "opacity-1");
        showAlert.innerText = "Wrong username or password";
        showAlert.classList.replace("alert-success", "alert-danger");
        setTimeout(() => {
          showAlert.classList.replace("opacity-1", "opacity-0");
        }, 2000);
      }, 1000)
    : setTimeout(() => {
        showAlert.classList.replace("alert-danger", "alert-success");
        showAlert.classList.replace("opacity-0", "opacity-1");
        showAlert.innerText = "Logined Success";
        setTimeout(() => {
          window.location.href = "./foods&drinks/food&drinks.html";
          showAlert.classList.replace("opacity-1", "opacity-0");
        }, 2000);
      }, 1000);
};
