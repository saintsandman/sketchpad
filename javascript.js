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
  })
}

function colorSquare() {
  let boxes = document.querySelectorAll("div.box");

  boxes.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "red";
    });
  });
}

changeSize(16);
colorSquare();

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
   colorSquare();

})

/* 
randomize rgb of square color

ok first separate the function
*/ 

