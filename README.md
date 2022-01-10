# Conway's Game of Life
Celluar automaton divised by John Horton Conway in 1970. The Game of Life is Turing complete. The playground (or so called *universe*) is an (infinite) 2D orthogonal grid of square cells. The cells have one of two possible states - live (1) or dead (0). Every cell has eight cells (or *neighbours*) around itself. Survival of each cell is determined by its neighbours - there can be new life spark upon the specific number of neighbours or the cell simply dies due to under- or overpopulation. Hence the name: *game of life*.

# Rules
1. Any live cell with fewer than two live neighbours dies (underpopulation)
2. Any live cell with two or three live neighbours lives on to the next generation
3. Any live cell with more than three live neighbours dies (overpopulation)
4. Any dead cell with exactly three live neighbours becomes a live cell (reproduction)

To start the game, there should be a specific seed of cells.

# How to play?
Just clone the repo or download the repo contents and run index.html. You can turn on or off specific cells by clicking on them. There is an initial seed already defined but you can of course clear it and make your own seed. You can check some interesting seeds on [https://en.wikipedia.org/wiki/Conway's_Game_of_Life#Examples_of_patterns](Wikipedia).

# Technologies
Written using P5 library (`lib` folder). Rule implementation can be found in `sketch.js` file.