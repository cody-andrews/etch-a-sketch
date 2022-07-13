const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols)

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1); 
    container.appendChild(cell).className = "grid-item";
    cell.style.backgroundColor = 'white';
  };
};
makeRows(64, 64);

const boxes = Array.from(document.getElementsByClassName('grid-item'));


boxes.forEach(box => {
  box.addEventListener('mouseenter', function handleClick(event) {
    console.log('box clicked', event);

    box.style.backgroundColor = 'black';
  });
});

function resetGrid() {
  let gridBox = container.querySelectorAll('div');
  gridBox.forEach(gridBox => gridBox.style.backgroundColor = '#ffffff');
}
