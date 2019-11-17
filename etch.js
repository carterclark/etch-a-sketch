const container = document.querySelector('.container');
const containerId = document.querySelector('#containerId');
const item = document.querySelectorAll('.item');
const box = document.getElementById('box');

function newGrid(){
  removeDivs();
  var num = newNumber();
  createGrid(num);
}           //function that makes new grid
function newNumber(){
  var entry = prompt('New cell count: ');
  var num = parseInt(entry);
  return num;
}         //function to get new grid size
function removeDivs(cells){
  while (containerId.firstChild){
    containerId.removeChild(containerId.firstChild);
  }
}   //function to remove divs

function createGrid(cells){
  container.style.gridTemplateColumns = 
    `repeat(${cells}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${cells}, 1fr)`;
  for (let i=0; i<cells; i++){
    for (let j=0; j<cells; j++){
      const div = document.createElement('div');
      div.classList.add('item');
      div.setAttribute('id', 'box');
      div.setAttribute('onmouseenter', 'color(this)');
      container.appendChild(div);
    }
  }
}   //function to make first grid

function color(x){
  x.style.backgroundColor = 'red';
}            //function for color change
createGrid(16);