const loginBtn = document.querySelector(".login-btn button");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", () => {
  loginModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
});
