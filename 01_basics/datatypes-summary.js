// primitive (call bye value)

// 7 types : string, Number, Boolean, Null, undefined, symbol, BigInt,


const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')

// console.log(id === anotherId);

const bigNumber = 345678930298123n



//  Reference (Non-Primitive) //returm type is object

// Array, Objects, Functions


const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "shweta",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

console.log(typeof score) //->return type = number
console.log(typeof scorevalue) //->return type = number
console.log(typeof isLoggedIn) //->return type = boolean
console.log(typeof outsideTemp) //->return type = object
console.log(typeof userEmail) //->return type = undefined
console.log(typeof id)         //->return type = symbol
console.log(typeof anotherId)  //->return type = symbol
console.log(typeof heros)      //->return type = object
console.log(typeof myObj)      //->return type = object
console.log(typeof myFunction) //->return type = function(object)

// very imp this types asked in interviws




// ****************************************************************


// stack (primitive), Heap(Non-primitive)

let myYoutubename = "shwetabhore"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "shweta@google.com"

console.log(userOne.email);
console.log(userTwo.email);