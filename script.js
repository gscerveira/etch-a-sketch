// Initialize variable that defines number of cells in grid, by multiplying rows by columns
let gridCellsNumber = 16*16;

let container = document.getElementById("container");

createCells();

function createCells() {
    for (let i = 0; i < gridCellsNumber; i++) {
        let div = document.createElement("div");
        div.id = `cell${i}`;
        container.appendChild(div);    
    }
}

function paintCell(cell) {
    //let currentCell = document.getElementById(e.target.id);
    cell.style.backgroundColor = "purple";
}

// select all with id starting with cell
let cells = document.querySelectorAll('[id^=cell]');
//add event listener that runs paintCell function, it gets the id and paints the cell
cells.forEach(cell => {cell.addEventListener('mouseover', () => paintCell(cell))});