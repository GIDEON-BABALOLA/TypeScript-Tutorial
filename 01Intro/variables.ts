let greetings: string = "Gideon Babalola";
greetings.toLowerCase();
console.log(greetings);

//number
let userId: number = 334466;
userId.toFixed()

//boolean
let isLoggedIn: boolean = false

//Type Inference
//Where annotations can be avoided
let number = 22.4;
number.toFixed();

//any
//any basically turns off the type value for the value
let hero: any;
function getHero(){
    return "thor"
}
hero = getHero();

export {}

