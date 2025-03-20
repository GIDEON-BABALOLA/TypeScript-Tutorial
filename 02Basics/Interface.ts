interface User {
    readonly dbId: number,
    email : string,
    userId : number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponname : string): number
}
//Reopening the interface
interface User{
    githubToken: string,
}
interface person{
    username : string
}
// now githubToken has been added to typescript

//inheritance in interface
interface Admin extends User{
    role : "admin" | "ta" | "learner"
}
interface Developer extends User, person, Admin{
job : "software" | "data" | "cloud"
}

//interface support readonly and ?
const hitesh: User = {dbId : 22, email : "h@h.com", userId : 2211, startTrial : () => {
    return "trial started"
},
getCoupon : (name: "hitesh10") => {
    return 10
},
githubToken : "github"
}
const administrator: Admin = {dbId : 22, email : "h@h.com", userId : 2211, startTrial : () => {
    return "trial started"
},
getCoupon : (name: "hitesh10") => {
    return 10
},
githubToken : "github",
role  : "admin"
}
const gideon: Developer = {dbId : 22, email : "h@h.com", userId : 2211, startTrial : () => {
    return "trial started"
},
getCoupon : (name: "hitesh10") => {
    return 10
},
githubToken : "github",
role  : "admin",
job : "cloud",
username : "Gideon Babalola"
}
hitesh.email = "h@hc.com"
 // hitesh.dbId = 33 not allowed, readOnly
// Difference Between Types And Interfaces
//Also a type cannot be changes after been created, this is simply what I mean
// type browser = {
//     name : string,
//     engine : string,
//     version : number
// }
// type browser = {
//     platfrom : string
// }
//Other Differences in extending
// Extending an Interface
interface Animal {
    name: string;
  }
  
  interface Bear extends Animal {
    honey: boolean;
  }
// Extending a type
type meat = {
    name: string;
  }
  
  type chicken = meat & { 
    size: number;
  }
  
export {}