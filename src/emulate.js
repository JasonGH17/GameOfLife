const timer = ms => new Promise(res => setTimeout(res, ms));

async function emulate(grid) {
    do {
        console.clear()
        for (let y = 0; y < grid.blocks.length; y++) {
            for (let x = 0; x < grid.blocks[y].length; x++) {
                let neighbours = 0;

                if (y > 0) {
                    if (x > 0) {
                        neighbours += grid.blocks[y - 1][x - 1].getState;
                        neighbours += grid.blocks[y][x - 1].getState;
                    }
                    if (x < grid.blocks[y].length - 1) {
                        neighbours += grid.blocks[y - 1][x + 1].getState;
                        neighbours += grid.blocks[y][x + 1].getState;
                    }
                    neighbours += grid.blocks[y - 1][x].getState;
                }
                if (y < grid.blocks.length - 1) {
                    if (x > 0)
                        neighbours += grid.blocks[y + 1][x - 1].getState;
                    if (x < grid.blocks[y].length - 1)
                        neighbours += grid.blocks[y + 1][x + 1].getState;
                    neighbours += grid.blocks[y + 1][x].getState;
                }

                grid.blocks[y][x].setNeighbours(neighbours);
            }
        }

        for (let y = 0; y < grid.blocks.length; y++) {
            for (let x = 0; x < grid.blocks[y].length; x++) {
                if (grid.blocks[y][x].neighbours < 2 && grid.blocks[y][x].getState == 1) {
                    grid.blocks[y][x].setState(0);
                    grid.blocks[y][x].setNeighbours(0);
                } else if (grid.blocks[y][x].neighbours > 3 && grid.blocks[y][x].getState == 1) {
                    grid.blocks[y][x].setState(0);
                    grid.blocks[y][x].setNeighbours(0);
                } else if (grid.blocks[y][x].neighbours == 3 && grid.blocks[y][x].getState == 0) {
                    grid.blocks[y][x].setState(1);
                    grid.blocks[y][x].setNeighbours(0);
                }
            }
        }

        console.log(grid.grid);
        await timer(250);
    } while (true);
}

export default emulate;