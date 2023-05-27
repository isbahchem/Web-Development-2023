//Functional Programming
var currencyOne = 100;
var currencyTwo = 0;
var excahngeRate = 1.2;

function convertCurrency(amount, rate){
    return amount*rate;
}

currencyTwo = convertCurrency(currencyOne, excahngeRate);

console.log(currencyTwo);