
// In the case of variables, type annotations are not really important but in the case of functions, they are very important
function addTwo(num: number): number{
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

// function getValue(myVal: number): boolean{
// if(myVal > 6){
//     return true
// }
// return "200 OK"
// }

const getHello = (s: string): string => {
return ""
}

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map((hero: string): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}
function handleError(errmsg: string): never{
  throw new Error(errmsg);
}


addTwo(6);

getUpper("dave");

signUpUser("David", "david@gmail.com", true);

loginUser("h", "h@h.com")

export {}
