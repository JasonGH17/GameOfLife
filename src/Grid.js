import Block from "./Block.js";
import { readFileSync } from "fs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

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
                this.blocks[w].push(new Block());
            }
        }
    }

    setBlock(x, y, state) {
        this.blocks[x][y - 1].setState(state);
    }

    get grid() {
        let grid = [];
        for (let w = 0; w < this.width; w++) {
            grid.push([]);
            for (let h = 0; h < this.height; h++) {
                grid[w].push(this.blocks[w][h].getState == 0 ? this.charset.empty : this.charset.filled);
            }
        }
        return grid;
    }
}

function constructFromFile(file) {
    const json = JSON.parse(readFileSync(__dirname + file).toString());
    const xy = Object.keys(json).length;

    const grid = new Grid(xy, xy, { empty: " ", filled: "#" });

    for (let h = 1; h <= xy; h++) {
        for (let w = 1; w <= xy; w++) {
            if (json[h][`${w}`])
                grid.setBlock(h, w, json[h][`${w}`]);
        }
    }

    return grid;
};

export { Grid, constructFromFile };