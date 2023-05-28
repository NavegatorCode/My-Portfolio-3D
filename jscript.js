const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  box.classList.toggle("boxActive");
  btn.classList.toggle("btnActive");
});
