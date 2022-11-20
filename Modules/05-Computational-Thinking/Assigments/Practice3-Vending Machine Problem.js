// Your task is to create a function that simulates a vending machine.
// Given an amount of money (in cents ¢ to make it simpler) and a productNumber, the vending machine should output the correct product name and give back the correct amount of change.

// The coins used for the change are the following: [500, 200, 100, 50, 20, 10]

// The return value is an object with 2 properties:

// product: the product name that the user selected.
// change: an array of coins (can be empty, must be sorted in descending order).

// Notes
// If productNumber is invalid (out of range) you should return the string: "Enter a valid product number".
// If money is not enough to buy a certain product you should return the string: "Not enough money for this product".
// If there's no change, return an empty array as the change.

// Examples
// vendingMachine(products, 200, 7) ➞ { product: "Crackers", change: [ 50, 20, 10 ] }
// vendingMachine(products, 500, 0) ➞ "Enter a valid product number"
// vendingMachine(products, 90, 1) ➞ "Not enough money for this product"

function vendingMachine(products, payment, productNumber) {    
    // Start here
    if (productNumber<1 || productNumber>9) {
        console.log('Enter a valid product number')
        return "Enter a valid product number"
    } else if (payment < products[productNumber-1].price) {
        console.log('Not enough money for this product')
        return "Not enough money for this product"
    } else {
        var balanceArr = [];
        console.log('Price:', products[productNumber-1].price, '| Product:', products[productNumber-1].name, '| ProductNumber:', products[productNumber-1].number, '| Balance:', payment-products[productNumber-1].price)
        coinBalance(payment, products[productNumber-1].price)
        console.log('Balance :', balanceArr)
    }

    function coinBalance(paid, prodPrice) {
        let balance = paid - prodPrice;
        coinsChg = [500, 200, 100, 50, 20, 10];
        for(i=0; i<coinsChg.length; i++) {
            if(parseInt(balance/coinsChg[i]) !== 0) {
                for(j=0; j<=parseInt(balance/coinsChg[i]); j++) {
                    balanceArr.push(coinsChg[i])
                    balance = balance - coinsChg[i]
                }
            } 
        }
        return balanceArr;
    }
return {product:products[productNumber-1].name, change:balanceArr};
}
  
  // Products
  const products = [    
    { number: 1, price: 100, name: 'Orange juice' },    
    { number: 2, price: 200, name: 'Soda' },    
    { number: 3, price: 150, name: 'Chocolate snack' },    
    { number: 4, price: 250, name: 'Cookies' },    
    { number: 5, price: 180, name: 'Gummy bears' },    
    { number: 6, price: 500, name: 'Chocolate bar' },    
    { number: 7, price: 120, name: 'Crackers' },    
    { number: 8, price: 220, name: 'Potato chips' },    
    { number: 9, price: 80, name: 'Small snack' }
  ]
  
  // Test Cases
  console.log(JSON.stringify(vendingMachine(products, 200, 7)) === JSON.stringify({ product: 'Crackers', change: [50, 20, 10] }))
  console.log('*********************')
  console.log(JSON.stringify(vendingMachine(products, 500, 0)) === JSON.stringify('Enter a valid product number'))
  console.log('*********************')
  console.log(JSON.stringify(vendingMachine(products, 90, 1)) === JSON.stringify('Not enough money for this product'))
  console.log('*********************')
