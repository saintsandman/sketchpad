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

function removeGrid() {
  boxes.forEach((square) => {
    square.remove();
  })
}

function changeSize(size) {
  
}

btn = document.querySelector("button");

btn.addEventListener("click", () => {
   input = prompt ("Enter grid size (e.g. '20' for 20x20)");
   removeGrid()
})

/* prompt for size
use size as input
function that deletes all of the divs
then makes a # of containers = to the input number
then it creates and appends a number of square divs = to input number into each container
start with that */ 

