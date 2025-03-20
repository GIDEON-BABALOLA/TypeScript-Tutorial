"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Gideon Babalola";
greetings.toLowerCase();
console.log(greetings);
//number
var userId = 334466;
userId.toFixed();
//boolean
var isLoggedIn = false;
//Type Inference
//Where annotations can be avoided
var number = 22.4;
number.toFixed();
//any
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
