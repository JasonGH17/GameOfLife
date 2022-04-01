import Block from "./Block.js";

class Grid {
    constructor(width, height, charset) {
        this.width = width;
        this.height = height;
        this.charset = charset;
        this.blocks = [];

        this.#createBlockArray();
    }

    #createBlockArray() {
        for (let w = 0; w < this.width; w++) {
            this.blocks.push([]);
            for (let h = 0; h < this.height; h++) {
                this.blocks[w].push(new Block(0));
            }
        }
    }

    get grid() {
        let grid = [];
        for (let w = 0; w < this.width; w++) {
            grid.push([]);
            for (let h = 0; h < this.height; h++) {
                grid[w].push(this.blocks[w][h].getState === 0 ? this.charset.empty : this.charset.filled);
            }
        }
        return grid;
    }
}

export default Grid;