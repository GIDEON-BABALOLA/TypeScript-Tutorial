"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
// any in a function allows you to accept numbers and return strings
function identityTwo(val) {
    return val;
}
//But type ensures that if the input is a number, the function must return a number
//and if the input is a string, the function must return a string
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
function getSearchProducts(products) {
    //do some databade operations
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    //do some databade operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
function nextFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
function databaseFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
//Generic Class
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
// anotherFunction(3, "4"), this code won't work becauce there is extend number
nextFunction(2, 4);
identityFour({ brand: "new balance", type: 1.0 });
identityThree("dave");
