// type User = {
//     name: string;
//     email : string;
//     isActive : boolean;
// }
// type MyString = string;
// function createUser(user: User): User{
// return {name : "", email: "", isActive: true}
// }
// createUser({name : "", email : "", isActive: true})
type User = {
    readonly _id : string // Now you can't change the value of the id
    name: string
    email: string
    isActive: boolean
    creditCardDetails?: number
}
//    creditCardDetails?: number, This ensures that not everybody has to have a credit card number
let myUser: User = {
    _id : "1234",
    name : "h",
    email : "h@h.com",
    isActive : false
}
myUser.email = "h@gmail.com"
// myUser._id = "asa"  Cannot assign "_id" because it is a read only property
function createUser(u: User){}
const createAccount = (u: User): User => {
return {_id : "ff", name : "kk", email : "kk", isActive : true}
}


type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}
const createCardDetails = (card : cardDetails): cardDetails => { 
    return {cardnumber : "1234", cardDate : "0843", cvv : 424}
}
export {}