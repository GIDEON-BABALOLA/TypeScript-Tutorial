"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// In the case of variables, type annotations are not really important but in the case of functions, they are very important
function addTwo(num) {
    return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(6);
getUpper("dave");
console.log(myValue);
signUpUser("David", "david@gmail.com", true);
loginUser("h", "h@h.com");
