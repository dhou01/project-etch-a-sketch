const gridDiv = document.querySelector('.gridDiv');
const grid = document.createAttribute('style')

grid.value = `
    background-color: black;
    width: 50px;
    height: 50px;
`;

gridDiv.setAttributeNode(grid);