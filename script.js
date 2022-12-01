// Initialize variable that defines number of cells in grid, by multiplying rows by columns
let gridCellsNumber = 16*16;

let container = document.getElementById("container");

createCells();

let resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener('click', () => resetGrid())

function createCells() {
    for (let i = 0; i < gridCellsNumber; i++) {
        let div = document.createElement("div");
        div.id = `cell${i}`;
        container.appendChild(div);
    }
}

function resetGrid() {
    cells.forEach(cell => {cell.remove()});
    let cellsPerSide = prompt("Choose number of cells per side (Up to 100)");
    if (cellsPerSide <= 100 && cellsPerSide > 0) {
        gridCellsNumber = Math.pow(cellsPerSide, 2);
    }
    else {resetGrid()}
    createCells();
    cells = document.querySelectorAll('[id^=cell]');
    container.style.gridTemplateColumns = `repeat(${cellsPerSide}, 1fr)`;
    cells.forEach(cell => {cell.addEventListener('mouseover', () => paintCell(cell))});
}

function paintCell(cell) {
    cell.style.backgroundColor = "purple";
}


let cells = document.querySelectorAll('[id^=cell]');

cells.forEach(cell => {cell.addEventListener('mouseover', () => paintCell(cell))});