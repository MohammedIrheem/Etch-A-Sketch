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


function refreshGrid(){
    z = prompt("How many boxes per side?");
    makeRows(z);
    $(".grid-item").hover(function(){
      $(this).css("background-color", "black");
      });
};

$(document).ready(function(){
  makeRows(16);
  $(".grid-item").hover(function(){
    $(this).css("background-color", "black");
    });
});
