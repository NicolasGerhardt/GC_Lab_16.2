interface Mountian {
    name:string;
    height:number;
}

const mountains:Mountian[] = [{
    name:'kilimanjaro',
    height:19341
},{
    name:'Everest',
    height:29029
},{
    name:'Denali',
    height:20310
}];

function findNameOfTallestMountain(mountains:Mountian[]):string {
    let tallest:Mountian = {name:'Sea Level', height:0};

    mountains.forEach(m => {
        if (m.height > tallest.height) {
            tallest = m;
        }
    });

    return tallest.name;
}

const nameOfTallestMountain:string = findNameOfTallestMountain(mountains);

console.log(`The Tallest Mountain that I know if is ${nameOfTallestMountain}`);

interface Product {
    name:string;
    price:number;
}

const products:Product[] = [{
    name:'Nintendo Switch console',
    price:299.99
},{
    name:'Nintendo Switch Lite',
    price:199.99
},{
    name:'Dragonslayer Novel',
    price:1.80
}]

function calcAverageProductPrice(products:Product[]):number {
    let sumProductPrice:number = 0;

    products.forEach(p => {
        sumProductPrice += p.price;
    });
    return sumProductPrice / products.length;
}

const averageProductPrice:number = calcAverageProductPrice(products);

console.log(`The average price of my products is $${averageProductPrice.toFixed(2)}`);

interface InventoryItem {
    product:Product;
    quantity:number;
}

const inventory:InventoryItem[] = [{
    product:{
        name:'motor',
        price:10.00
    },
    quantity: 10
},{
    product:{
        name:'sensor',
        price:12.50
    },
    quantity: 4
},{
    product:{
        name:'LED',
        price:1.00
    },
    quantity: 20
}]

function calcInventoryValue(inventory:InventoryItem[]):number {
    let value:number = 0;

    inventory.forEach(item => {
        value += item.product.price * item.quantity;
    });

    return value;
}

const inventoryValue = calcInventoryValue(inventory);

console.log(`My inventory is valued at $${inventoryValue.toFixed(2)}`);