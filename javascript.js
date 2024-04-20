



/* 16*16 grid of square divs
when you hover mouse over a div/boxes, 
it changes the color

*/



const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
  box = document.createElement("div");
  box.classList.add("box");
  container.appendChild(box);
}

let boxes = document.querySelectorAll("div.box");

boxes.forEach((square) => {
  square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "red";
  });
});

btn = document.querySelector("button");

function changeSize(input) {
  prompt ("Enter grid size (e.g. '20' for 20x20)");
}

btn.addEventListener("click", () => {
  changeSize();
})