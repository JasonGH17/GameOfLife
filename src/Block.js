class Block {
    constructor(state = 0) {
        this.state = state;  // 0 = Empty    1 = Filled

        this.neighbours = 0;
    }

    setState(state) {
        this.state = state;
    }

    setNeighbours(count) {
        this.neighbours = count;
    }

    get getState() {
        return this.state;
    }
}

export default Block