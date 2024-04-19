



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

