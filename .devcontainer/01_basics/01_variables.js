const accountId = 14526
let accountEmail = "nadim@google.com"
let accountPassword = "22345"
accountCity = "delhi"
let accountState;

// accountId = 2  // not allowed kyo const keyboard ke value ko change nhi kiya ja sakta hai


accountEmail = "na@google.com"
accountPassword = "2565465"
accountCity = "mumbai"
console.log(accountId);

/*
 prefer not to use var
 because of issue in block scope and functional scope
*/ 

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
