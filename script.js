const container = document.querySelector('#container');

function createGrid(gridSize) {
    document.documentElement.style.setProperty('--grid-Size',gridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const gridCell = document.createElement('div') ;
        gridCell.classList.add('square');
        container.appendChild(gridCell);
    }

    const squares = document.querySelectorAll('.square')

    squares.forEach(square => {
        square.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'black';
        });
    });
}

function createNewGrid() {

    let gridNumber = prompt("Enter a new grid size (max 100):");
    gridNumber = parseInt(gridNumber);

    if (isNaN(gridNumber) || gridNumber < 1 || gridNumber > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }

    container.innerHTML = '';
    createGrid(gridNumber);
}

document.getElementById('newGrid').addEventListener('click', createNewGrid);

// start with default 16x16
createGrid(16);