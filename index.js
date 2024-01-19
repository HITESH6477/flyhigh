const menuButton = document.getElementById("menu-btn");
const sideBarCtr = document.getElementById("sidebar-ctr");
const sideBar = document.getElementById("sidebar");
const sideBarCloseBtn = document.getElementById("sidebar-close-icon");

menuButton.addEventListener("click", () => {
  sideBarCtr.classList.toggle("show-sidebar-ctr");
  sideBar.classList.toggle("show-sidebar");
  document.body.classList.toggle("stop-body-scroll");
});

sideBarCloseBtn.addEventListener("click", () => {
  sideBarCtr.classList.toggle("show-sidebar-ctr");
  sideBar.classList.toggle("show-sidebar");
  document.body.classList.toggle("stop-body-scroll");
});

const nameInput = document.getElementById("input-name");
const emailInput = document.getElementById("input-email");
const phoneInput = document.getElementById("input-phone");
const textAreaInput = document.getElementById("input-textarea");
const submitBtn = document.getElementById("enquiry-btn");
const userForm = document.getElementById("query-form");

const userInputData = {
  name: null,
  email: null,
  phone: null,
  textMessage: null,
};

userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  userInputData.name = nameInput.value;
  userInputData.email = emailInput.value;
  userInputData.phone = phoneInput.value;
  userInputData.textMessage = textAreaInput.value;

  console.log(userInputData);
});
