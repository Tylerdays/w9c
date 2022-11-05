let itemNames = [`ham`, `cheese`, `bread`];
let itemPrices = [5, 10, 15];
let inStock = [true, false, true];

console.log(`Item: ${itemNames[0]}. ${itemPrices[0]}. ${inStock[0]}`)
console.log(`Item: ${itemNames[1]}. ${itemPrices[1]}. ${inStock[1]}`)
console.log(`Item: ${itemNames[2]}. ${itemPrices[2]}. ${inStock[2]}`)

itemNames.push(`mustard`);
itemPrices.push(`20`);
inStock.push(true);

console.log(`Item: ${itemNames[3]}. ${itemPrices[3]}. ${inStock[3]}`)

var firstItem = `ham`;
var firstItemprice = 5;

var lastItemName = itemNames.pop();
var LastItemPrice = itemPrices.pop();
var lastInstock = inStock.pop();