const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number{
    return val
}
// any in a function allows you to accept numbers and return strings
function identityTwo(val: any): any{
    return val
}
//But type ensures that if the input is a number, the function must return a number
//and if the input is a string, the function must return a string
function identityThree<Type>(val: Type): Type{
    return val
}
function identityFour<T>(val: T): T{
    return val
}
interface Bottle{
    brand: string,
    type: number
}
function getSearchProducts<T>(products: T[]): T{
    //do some databade operations
    const myIndex = 3
    return products[myIndex]
}
const getMoreSearchProducts = <T>(products: T[]): T => {
    //do some databade operations
    const myIndex = 4
    return products[myIndex]
}
identityFour<Bottle>({brand : "new balance", type : 1.0})
identityThree("dave")