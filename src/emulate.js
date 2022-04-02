function emulate(grid) {
    do {
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

        setTimeout(() => {console.log(grid.blocks)}, 250);
    } while(false)
}

export default emulate;