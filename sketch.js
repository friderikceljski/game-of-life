function make2DArray(rows, cols) {
    let arrs = new Array(rows);
    
    for (let i = 0; i < arrs.length; i++) {
        const arr = new Array(cols);

        for (let j = 0; j < arr.length; j++) {
            arr[j] = 0;
        }

        arrs[i] = arr;
    }

    return arrs;
}

function deepCopyFunction(inObject) {
    let outObject, value, key;
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject;
    }
  
    outObject = Array.isArray(inObject) ? [] : {};
  
    for (key in inObject) {
      value = inObject[key];
  
      outObject[key] = deepCopyFunction(value);
    }
  
    return outObject;
  }

function isAlive(arr,x,y) {
    return 1 ? arr[y][x] == 1 : 0;
}

function refresh() {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            grid[y][x] = 0;
        }
    }
}

function setPattern(x, y, pattern) {
    for (let i = 0; i < pattern.length; i++, x++) {
        const char = pattern[i];
        grid[y][x] = char == '*' ? 1 : 0;
    }
}

function live() {
    for (let i = 1; i < grid.length - 1; i++) {
        for (let j = 1; j < grid[i].length - 1; j++) {
            let neighboursCount = grid[i-1][j-1] + grid[i-1][j] + grid[i-1][j+1] +
                                  grid[i][j-1]   + 0            + grid[i][j+1] +
                                  grid[i+1][j-1] + grid[i+1][j] + grid[i+1][j+1];


            if (isAlive(grid,j,i)) {
                newGrid[i][j] = neighboursCount == 2 || neighboursCount == 3 ? 1 : 0;
            } else {
                newGrid[i][j] = neighboursCount == 3 ? 1 : 0;
            }
        }
    }

    grid = deepCopyFunction(newGrid);
}

function drawGrid() {
    strokeWeight(1);
    stroke(51);
    fill("#00cc00");

    for (let y = 1; y < grid.length - 1; y++) {
        for (let x = 1; x < grid[y].length - 1; x++) {
            if (isAlive(grid, x, y)) {
                rect((x-1) * 10, (y-1) * 10, 10, 10);
            }
        }
    }
}

function mouseClicked() {
    const x = floor(mouseX / 10) + 1;
    const y = floor(mouseY / 10) + 1;

    grid[y][x] = grid[y][x] == 1 ? 0 : 1;
}

let active = false;
let grid = make2DArray(50, 80);
let newGrid = make2DArray(50, 80);
setPattern(37, 22, ".**");
setPattern(37, 23, "**");
setPattern(37, 24, ".*");

function activate() {
    active = !active;
}

function setup() {
    createCanvas(780, 480);
    frameRate(15);
}

function draw() {
    background('#0f0f23');

    drawGrid(grid);
    if (active) {
        live();
    }
}