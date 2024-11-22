let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let showAlert = document.querySelector(".alert");
let alertIndex;

let login = (event) => {
  event.preventDefault();
  let email = emailInput.value;
  let pass = passwordInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=])[\w\d@$#$%^&+=]{8,}$/;
  let emailTest = emailRegex.test(email);
  let passwordTest = passwordRegex.test(pass);

  if (email != "") {
    if (passwordTest && emailTest) {
      let x = users.find((el) => el.email == email || el.pass == pass);
      !x
        ? (users.push({ email, pass }),
          localStorage.setItem("users", JSON.stringify(users)),
          (alertIndex = 1),
          toggleAlert())
        : ((alertIndex = 2), toggleAlert());
    } else {
      alertIndex = 3;
      toggleAlert();
    }
  } else {
    alertIndex = 4;
    toggleAlert();
  }
};

let toggleAlert = () => {
  alertIndex == 1 &&
    setTimeout(() => {
      showAlert.classList.replace("alert-danger", "alert-success");
      showAlert.classList.replace("opacity-0", "opacity-1");
      showAlert.innerText = "Registered Success";
      setTimeout(() => {
        window.location.href = "../index.html";
        showAlert.classList.replace("opacity-1", "opacity-0");
      }, 2000);
    }, 1000);

  alertIndex == 2 &&
    setTimeout(() => {
      showAlert.classList.replace("opacity-0", "opacity-1");
      showAlert.innerText = "choose another email or pasword";
      showAlert.classList.replace("alert-success", "alert-danger");
      setTimeout(() => {
        showAlert.classList.replace("opacity-1", "opacity-0");
      }, 2000);
    }, 1000);

  alertIndex == 3 &&
    setTimeout(() => {
      showAlert.classList.replace("opacity-0", "opacity-1");
      showAlert.innerText = "Invalid data";
      showAlert.classList.replace("alert-success", "alert-danger");
      setTimeout(() => {
        showAlert.classList.replace("opacity-1", "opacity-0");
      }, 2000);
    }, 1000);

  alertIndex == 4 &&
    setTimeout(() => {
      showAlert.classList.replace("opacity-0", "opacity-1");
      showAlert.innerText = "You don't Add email and password";
      showAlert.classList.replace("alert-success", "alert-danger");
      setTimeout(() => {
        showAlert.classList.replace("opacity-1", "opacity-0");
      }, 2000);
    }, 1000);
};
