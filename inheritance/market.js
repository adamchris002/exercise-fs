class Market {
    constructor(basket) {
        this.basket = basket || [];
    }

    addFruit(fruit) {
        this.basket.push(fruit);
    }
    showFruits() {
        console.log(this.basket);
    }
}

module.exports = Market;