const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

let nav = document.querySelector("nav");
let blur = document.querySelector(".website");
let feeback = document.querySelector(".feeback");
let new__trigger = document.querySelector(".new__trigger");
let new__div = document.querySelector(".new__div");
nav.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("suggestion")) {
    blur.classList.toggle("blur");
    feeback.classList.toggle("open");
  }
  if (target.classList.contains("new__trigger")) {
    console.log(target);
    new__div.classList.toggle("open--block");
  }
});

let close = document.querySelectorAll(".close");
close.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button);
    e.target.parentNode.parentNode.classList.toggle("open");
    blur.classList.toggle("blur");
  });
});

let reset = document.querySelector(".reset");
let feeback__textarea = document.querySelector(".feeback__textarea");
reset.addEventListener("click", () => {
  feeback__textarea.value = "";
});
