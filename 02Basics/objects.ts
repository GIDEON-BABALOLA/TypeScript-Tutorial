const User = {
    name: "hitest",
    email : "hitesh@lco.dev",
    isActive: true
}
/*
still weird in typescript
function createUser({name : string, isPaid: boolean}){}
let newUser = {name : "hitesh", isPaid : false, email : "h@h.com"}
createUser(newUser);
*/
/*Wrong
function createUser({name : string, isPaid: boolean}){}
createUser({name : "hitesh", isPaid : false, email : "h@h.com"});
*/
//correct
function createUser({name : string, isPaid: boolean}){}
createUser({name : "hitesh", isPaid : false});
function createCourse(): {name : string, price: number}{
return {name : "hitesh", price : 10};
}
export {}