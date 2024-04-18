



/* 16*16 grid of square divs
make divs with javascript
put them inside a container div
use flexbox to make them appear as a grid

ok what do i do. 
basically
how to make a box in a div
ok did that. now i need to make divs 16* 16. 
so just like 16 rows with 16 boxes in them each
make like a loop

*/

//selects grid container

const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {

  box = document.createElement("div");
  container.appendChild(box);

}