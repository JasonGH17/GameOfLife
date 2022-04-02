class Block {
    constructor(state = 0) {
        this.state = state;  // 0 = Empty    1 = Filled
    }

    setState(state) {
        this.state = state;
    }

    get getState() {
        return this.state;
    }
}

export default Block