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

let boxcolor;

function randomRGB() {
 const max = 255;
 const min = 0;

  let color1 = Math.floor(Math.random() * (max - min + 1) - min);
  let color2 = Math.floor(Math.random() * (max - min + 1) - min);
  let color3 = Math.floor(Math.random() * (max - min + 1) - min);

  boxcolor = "rgb(" + color1 + "," + " " + color2 + "," + " " + color3 + ")"
}

function colorSquare() {
  let boxes = document.querySelectorAll("div.box");

  boxes.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      randomRGB();
      square.style.backgroundColor = boxcolor;
    });
  });
}



function removeGrid() {
  let rows = document.querySelectorAll("div.row");
  rows.forEach((row) => {
    row.remove();
  })
}

changeSize(16);
colorSquare();





btn = document.querySelector("button");

btn.addEventListener("click", () => {
   input = prompt ("Enter desired grid size (e.g. '20' for 20x20) to a max of 100");
   if (input > 100) {
    input = 100;
   }
   removeGrid();
   changeSize(input);
   colorSquare();

})

/* 
randomize rgb of square color

run a function that randomizes 
*/ 

