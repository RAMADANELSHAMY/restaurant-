let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let showAlert = document.querySelector(".alert");
let alertIndex;

let login = (event) => {
  event.preventDefault();
  let email = emailInput.value;
  let pass = passwordInput.value;
  let x = users.findIndex((el) => el.email == email);
  let y = users.findIndex((el) => el.pass == pass);
  email != ""
    ? x == -1 && y == -1
      ? ((alertIndex = 3), toggleAlert())
      : x != -1 && y != -1
      ? ((alertIndex = 2), toggleAlert())
      : (x == -1 || y == -1) && ((alertIndex = 1), toggleAlert())
    : ((alertIndex = 4), toggleAlert());
};

let toggleAlert = () => {
  switch (alertIndex) {
    case 1:
      setTimeout(() => {
        showAlert.classList.replace("opacity-0", "opacity-1");
        showAlert.innerText = "Wrong username or password";
        showAlert.classList.replace("alert-success", "alert-danger");
        setTimeout(() => {
          showAlert.classList.replace("opacity-1", "opacity-0");
        }, 2000);
      }, 1000);
      break;

    case 2:
      setTimeout(() => {
        showAlert.classList.replace("alert-danger", "alert-success");
        showAlert.classList.replace("opacity-0", "opacity-1");
        showAlert.innerText = "Logined Success";
        setTimeout(() => {
          window.location.href = "./foods&drinks/food&drinks.html";
          showAlert.classList.replace("opacity-1", "opacity-0");
        }, 2000);
      }, 1000);
      break;

    case 3:
      setTimeout(() => {
        showAlert.classList.replace("opacity-0", "opacity-1");
        showAlert.innerText = "Go to Register";
        showAlert.classList.replace("alert-success", "alert-danger");
        setTimeout(() => {
          showAlert.classList.replace("opacity-1", "opacity-0");
          window.location.href = "./register/register.html";
        }, 2000);
      }, 1000);
      break;

    case 4:
      setTimeout(() => {
        showAlert.classList.replace("opacity-0", "opacity-1");
        showAlert.innerText = "You don't Add email and password";
        showAlert.classList.replace("alert-success", "alert-danger");
        setTimeout(() => {
          showAlert.classList.replace("opacity-1", "opacity-0");
        }, 2000);
      }, 1000);
  }
};
