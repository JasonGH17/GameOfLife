import { constructFromFile } from "./Grid.js";
import emulate from "./emulate.js";

const grid = constructFromFile("\\grid.json");

emulate(grid)