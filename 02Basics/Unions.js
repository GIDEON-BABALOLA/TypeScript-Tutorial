//Union is a fantastic thing in typescript that allows you to be in a situation when you do not know the type of data that can come in whether it is a string or number
var score = 33;
score = 44;
score = "dave";
var hitesh = { name: "hitesh", id: 334 };
hitesh = { username: "hc", id: 334 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is ${id}`)
// }
getDbId(3);
getDbId("dave");
function getDbId(id) {
    //   id.toLowerCase() not correct, because typescript treats toLowerCase() as either a string or number, solution is below
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
/* const data4: string[] | number[] = ["Dave", 1]; // ❌ Error
The type string[] | number[] means either an array of only strings (string[]) or an array of only numbers (number[]).
*/
//unions in array
var data = [1, 2, 3];
var data2 = ["dave", "paulie", "gideon"];
var data3 = ["dave", 1, 2, true, {}];
//Hower here do not use any, to make your types more strict
var pi = 3.14;
// pi =3.146 not allowed by typescript
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew" not allowed by typescript
