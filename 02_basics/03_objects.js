// singleton

//object literals

const mysym = Symbol("key1")


const JsUser = {
    name: "shweta",
    "full name": "Shweta Bhore",
     [mysym]: "mykey1",
    age: 21,
    location: "pune",
    email: "shweta@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);


// JsUser.email = "shweta.yeho.com"
// Object.freeze(JsUser)
// JsUser.email = "shweta@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

