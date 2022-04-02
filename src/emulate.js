function emulate(grid) {
    const blocks = [];
    for (let h = 0; h < grid.blocks.length; h++) {
        for (let w = 0; w < grid.blocks[h].length; w++) {
            if (grid.blocks[h][w].getState === 1)
                blocks.push({ x: w, y: h, neighbours: 0 });
        }
    }

    while (true) {
        for (let i in blocks) {
            const block = blocks[i];
            const x = block.x;
            const y = block.y;
            let neighbours = 0;

            console.log(grid.blocks[y][x]);

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
            blocks[i].neighbours = neighbours;
        }



        setTimeout(() => { }, 250);
    }
}

export default emulate;