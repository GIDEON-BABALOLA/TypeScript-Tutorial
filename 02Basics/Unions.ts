//Union is a fantastic thing in typescript that allows you to be in a situation when you do not know the type of data that can come in whether it is a string or number
let score: number | string = 33;
score = 44
score = "dave"
type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}
let hitesh: User | Admin = {name : "hitesh", id : 334}
hitesh = {username : "hc", id : 334}
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is ${id}`)
// }
getDbId(3);
getDbId("dave")
function getDbId(id: number | string){
 //   id.toLowerCase() not correct, because typescript treats toLowerCase() as either a string or number, solution is below
 if(typeof id === "string"){
    id.toLowerCase()
 }
}

/* const data4: string[] | number[] = ["Dave", 1]; // ❌ Error
The type string[] | number[] means either an array of only strings (string[]) or an array of only numbers (number[]).
*/

//unions in array
const data: number[] = [1, 2, 3]
const data2: string[] = ["dave", "paulie", "gideon"]
const data3: (string | number | boolean | object)[] = ["dave", 1, 2, true,  {}]
//Hower here do not use any, to make your types more strict

let pi:3.14 = 3.14
// pi =3.146 not allowed by typescript

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
// seatAllotment = "crew" not allowed by typescript