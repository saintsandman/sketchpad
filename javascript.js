const container2 = document.querySelector(".container2");

function changeSize(size) {
  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container2.appendChild(row);
  }
  
  let rows = document.querySelectorAll("div.row");

  rows.forEach((row) => {
    for (let i = 0; i < size; i++) {
      box = document.createElement("div");
      box.classList.add("box");
      row.appendChild(box);
    }
  
  let boxes = document.querySelectorAll("div.box");

  boxes.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "red";
    });
  });
  })
}

changeSize(16);

function removeGrid() {
  let rows = document.querySelectorAll("div.row");
  rows.forEach((row) => {
    row.remove();
  })
}



btn = document.querySelector("button");

btn.addEventListener("click", () => {
   input = prompt ("Enter grid size (e.g. '20' for 20x20)");
   removeGrid();
   changeSize(input);
})

/* prompt for size
use size as input
function that deletes all of the divs
then makes a # of containers = to the input number
then it creates and appends a number of square divs = to input number into each container
start with that

ok now you need to do the row thing to the original 
16x16 so its the same sort of row with boxes in em system.*/ 

