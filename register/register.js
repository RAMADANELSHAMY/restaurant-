let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let showAlert = document.querySelector(".alert");
let alertIndex;

let login = (event) => {
  event.preventDefault();
  let email = emailInput.value;
  let pass = passwordInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=])[\w\d@$#$%^&+=]{8,}$/;
  let emailTest = emailRegex.test(email);
  let passwordTest = passwordRegex.test(pass);

  if (passwordTest && emailTest) {
    let x = users.find((el) => el.email == email || el.pass == pass);
    !x
      ? (users.push({ email, pass }),
        localStorage.setItem("users", JSON.stringify(users)),
        (alertIndex = true),
        toggleAlert())
      : ((alertIndex = false), toggleAlert());
  } else {
    alertIndex = undefined;
    toggleAlert();
  }
};

let toggleAlert = () => {
  alertIndex == true &&
    setTimeout(() => {
      showAlert.classList.replace("alert-danger", "alert-success");
      showAlert.classList.replace("opacity-0", "opacity-1");
      showAlert.innerText = "Registered Success";
      setTimeout(() => {
        window.location.href = "../index.html";
        showAlert.classList.replace("opacity-1", "opacity-0");
      }, 2000);
    }, 1000);

  alertIndex == false &&
    setTimeout(() => {
      showAlert.classList.replace("opacity-0", "opacity-1");
      showAlert.innerText = "choose another email or pasword";
      showAlert.classList.replace("alert-success", "alert-danger");
      setTimeout(() => {
        showAlert.classList.replace("opacity-1", "opacity-0");
      }, 2000);
    }, 1000);

  alertIndex == undefined &&
    setTimeout(() => {
      showAlert.classList.replace("opacity-0", "opacity-1");
      showAlert.innerText = "invalid data";
      showAlert.classList.replace("alert-success", "alert-danger");
      setTimeout(() => {
        showAlert.classList.replace("opacity-1", "opacity-0");
      }, 2000);
    }, 1000);
};
