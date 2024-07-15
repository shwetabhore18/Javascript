const accountId = 144553
let accountEmail = "shweta@google.com"
var accountPassword = "12345"
accountCity = "pune"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sb@sb.com"
accountPassword = "123"
accountCity = "mumbai"

console.log(accountId);

/*prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity, accountState])
