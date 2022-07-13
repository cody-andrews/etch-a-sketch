const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.classList.add('divs');
  };
};
makeRows(16, 16);
const boxes = Array.from(document.getElementsByClassName('grid-item'));


boxes.forEach(box => {
  box.addEventListener('mouseenter', function handleClick(event) {
    console.log('box clicked', event);

    box.setAttribute('style', 'background-color: black;');
  });
});

// divs.forEach( f => f.addEventLister('mouseenter', function(){
//     let div = e.querySelector('div');
//     div.classList.add('hovered');
// })

// )


  