//    creditCardDetails?: number, This ensures that not everybody has to have a credit card number
var myUser = {
    _id: "1234",
    name: "h",
    email: "h@h.com",
    isActive: false
};
myUser.email = "h@gmail.com";
// myUser._id = "asa"  Cannot assign "_id" because it is a read only property
function createUser(u) { }
var createAccount = function (u) {
    return { _id: "ff", name: "kk", email: "kk", isActive: true };
};
