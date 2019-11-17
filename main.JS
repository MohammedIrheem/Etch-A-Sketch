const container = document.getElementById("container");

function makeRows(x) {
  container.style.setProperty('--grid-rows', x);
  container.style.setProperty('--grid-cols', x);

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  for (c = 0; c < (x * x); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };

  $(".grid-item").width(960/x);
  $(".grid-item").height(960/x);
};
//Resize the grid
function refreshGrid(){
  z = prompt("How many boxes per side?");
  makeRows(z);
  $(".grid-item").hover(function(){
    $(this).css("background-color", "black");
    });
};

//Random color
function randomRgb() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`; 
}

document.getElementById("random").addEventListener("click", randomColor);

function randomColor() {
  $(".grid-item").hover(function(){ 
    this.style.backgroundColor = randomRgb();
    });
}

//classic color
document.getElementById("classic").addEventListener("click", classicColor);

function classicColor() {
  $(".grid-item").hover(function(){
    $(this).css("background-color", "black");
    });
}

//Start reset functions
document.getElementById("reset").addEventListener("click", resetGrid);

function getCells () {  
  return document.querySelectorAll('.grid-item');
}
// remove all cells from grid
function resetGrid() {
  getCells().forEach(function(){
    $('.grid-item').css("background-color", "white");
    });  // remove each cell from it's parent
}
// //End reset functions



$(document).ready(function(){
  makeRows(16);
  $(".grid-item").hover(function(){
    $(this).css("background-color", "black");
    });
});
