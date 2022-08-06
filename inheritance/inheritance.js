const { Apple, Orange } = require("./fruit");
const Market = require("./market");

let apple1 = new Apple("Envy USA 1000", 15000, 5, true);
let apple2 = new Apple("Wang Shan 1000", 10000, 3, false);
let orange1 = new Orange("Sunkist Jakarta", 35000, 7, true);

// console.log(apple1);
// console.log(apple2);
// console.log(orange1);


// Factory Class => Classy ang fokusnya hanya ke method daripada ke key

// instanciation market

const market = new Market();

market.addFruit(apple1);
market.addFruit(apple2);
market.addFruit(orange1);

market.showFruits();