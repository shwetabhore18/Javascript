function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("w");
    console.log("e");
    console.log("t");
    console.log("a");
}

// sayMyName => reference
// sayMyName() => execution

// sayMyName()
                        //parameter
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result

    return number1 + number2
}
                      //arguments
const result = addTwoNumbers(3,4)

console.log("Result:", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// ... 3 dots means rest operator
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 400, 500));


const user = {
    username: "shweta",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username:"sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));