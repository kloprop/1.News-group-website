const collapsibles = document.querySelectorAll(".collapsible");
console.log(collapsibles);
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

let nav = document.querySelector("nav");
let blur = document.querySelector(".blur");

let new__trigger = document.querySelector(".new__trigger");
let new__div = document.querySelector(".new__div");
nav.addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("suggestion")) {
    console.log("g");
    blur.classList.toggle("open");
  }
  if (target.classList.contains("new__trigger")) {
    new__div.classList.toggle("open--block");
  }
});

blur.addEventListener("click", (e) => {
  if (e.target.classList.contains("blur")) {
    e.target.classList.toggle("open");
  }
});

let close = document.querySelectorAll(".close");
close.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
    blur.classList.toggle("open");
  });
});

let reset = document.querySelector(".reset");
let feeback__textarea = document.querySelector(".feeback__textarea");
reset.addEventListener("click", () => {
  feeback__textarea.value = "";
});
