class Fruit {
    constructor (name, type, price, stock, isAvailable) {
        this.name = name || "";
        this.type = type || "";
        this.price = price || 0;
        this.stock = stock || 0;
        this.isAvailable = isAvailable;
    }
}

class Apple extends Fruit {
    constructor (name, price, stock, isAvailable) {
        super (name, "Apple", price, stock, isAvailable);
    }
}

class Orange extends Fruit {
    constructor (name, price, stock, isAvailable) {
        super (name, "Orange", price, stock, isAvailable);
    }
}

module.exports = {
    Apple, 
    Orange,
};