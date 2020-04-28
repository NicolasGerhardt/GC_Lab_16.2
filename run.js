var mountains = [{
        name: 'kilimanjaro',
        height: 19341
    }, {
        name: 'Everest',
        height: 29029
    }, {
        name: 'Denali',
        height: 20310
    }];
function findNameOfTallestMountain(mountains) {
    var tallest = { name: 'Sea Level', height: 0 };
    mountains.forEach(function (m) {
        if (m.height > tallest.height) {
            tallest = m;
        }
    });
    return tallest.name;
}
var nameOfTallestMountain = findNameOfTallestMountain(mountains);
console.log("The Tallest Mountain that I know if is " + nameOfTallestMountain);
var products = [{
        name: 'Nintendo Switch console',
        price: 299.99
    }, {
        name: 'Nintendo Switch Lite',
        price: 199.99
    }, {
        name: 'Dragonslayer Novel',
        price: 1.80
    }];
function calcAverageProductPrice(products) {
    var sumProductPrice = 0;
    products.forEach(function (p) {
        sumProductPrice += p.price;
    });
    return sumProductPrice / products.length;
}
var averageProductPrice = calcAverageProductPrice(products);
console.log("The average price of my products is $" + averageProductPrice.toFixed(2));
var inventory = [{
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10
    }, {
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    }, {
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }];
function calcInventoryValue(inventory) {
    var value = 0;
    inventory.forEach(function (item) {
        value += item.product.price * item.quantity;
    });
    return value;
}
var inventoryValue = calcInventoryValue(inventory);
console.log("My inventory is valued at $" + inventoryValue.toFixed(2));
