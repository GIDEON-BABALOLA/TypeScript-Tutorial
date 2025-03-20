"use strict";
console.log("typescript is here");
console.log("typescript is here");
//tsc -w, works just like nodemon
//classes in typescript
//public and private are access modifiers
class User {
    constructor(email, username, city, address) {
        this.courseCode = "CSC214";
        this._courseCount = 1;
        this.state = "";
        this.street = "ajebandele";
        this.email = email;
        this.username = username;
        this.city = city;
        this.address = address;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //when making a setter, don't put the data type that is going to be returned
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
//Inheritance in TypeScript
//protected ensures that values are available within classes and also available within inherited classes,
//but it will not be acceptable outside the two classes
// inheritance cannot acquire private property
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        // this._courseCount = 4, this won't work, coursecount is private
    }
    changeCourseCode() {
        this.courseCode = "CSC313";
    }
}
//    class User{
//     private _courseCount = 1
//     private readonly street: string = "ajebamidele"
//     state: string = ""
//     constructor(
//         public email: string,
//         public username: string,
//         public city: string,
//         private address: string
//         // readonly alone does not work here
//     ){
//     }
//     get getAppleEmail(): string{
//         return `apple${this.email}`
//     }
//     get courseCount(): number{
//         return this._courseCount
//     }
//     //when making a setter, don't put the data type that is going to be returned
//     set courseCount(courseNumber){
//        if(courseNumber <= 1){
//           throw new Error("Course count should be more than 1")
//          }
//     this._courseCount = courseNumber
//     }
//    }
// A more professional way of writing this code
//This won't work because TypeScript does not support named arguments when caling a constructor
//const hitesh = new User(email : "h@h.com", username : "hitesh")
//instead
const hitesh = new User("h@h.com", "hitesh", "ado", "covenant avenue");
hitesh.state = "ekiti";
// hitesh.street = "ajebandele" wrong
// hitesh.deleteToken() delete token is private;
//There is a tsconfig option that ensures that if typescript is wrong, it won't produce the javascript
//now private and public
// hitesh.address
//this shows an error, Property 'address' is private and only accessible within class 'User'
//Also others that are not marked are automatically marked public in the typescript world
// # - javascript
// # - typescript
