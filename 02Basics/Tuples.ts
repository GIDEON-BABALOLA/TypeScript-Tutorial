//Tuples
// const user: (string | number )[] = [1, "hc"]
let user: [string, number, boolean]
user = ["hc", 131, true]
// let rgb: [number, number, number] = [244, 234, 122, 0.4] wrong
//correct
 let rgb: [number, number, number] = [244, 234, 122]
// user = [true, 131, true] wrong
//tuples make sure that the order of the array matter and is precise
type User = [number, string]
const newUser: User = [1, "example@gmail.com"]
newUser[1] = "hc.com" // allowed, imagine this
export {}