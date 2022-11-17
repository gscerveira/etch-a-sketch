// Initialize variable that defines number of cells in grid, by multiplying rows by columns
let gridCellsNumber = 16*16;

let container = document.getElementById("container");

createCells();

function createCells() {
    for (let i = 0; i < gridCellsNumber; i++) {
        let div = document.createElement("div");
        container.appendChild(div);    
    }
}