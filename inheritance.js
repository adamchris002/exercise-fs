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

let apple1 = new Apple("Envy USA 1000", 15000, 5, true);
let apple2 = new Apple("Wang Shan 1000", 10000, 3, false);

let orange1 = new Orange("Sunkist Jakarta", 35000, 7, true);

// console.log(apple1);
// console.log(apple2);
// console.log(orange1);


// Factory Class => Classy ang fokusnya hanya ke method daripada ke key

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

// instanciation market

const market = new Market();

market.addFruit(apple1);
market.addFruit(apple2);
market.addFruit(orange1);

market.showFruits();