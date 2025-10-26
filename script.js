let options = document.querySelectorAll("a");
let h2 = document.querySelector("h2");
let res-content = document.querySelector("main .container h2");

let navbar = document.querySelector("nav");
let aside = document.querySelector("aside");
// let acc = document.querySelector("h2");

navbar.addEventListener("mouseover", () => {
  h2.innerText = "Eat Fuchka";
});

navbar.addEventListener("mouseout", () => {
  h2.innerText = "Fuchka";
});
