// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

console.log(generateBtn)
//function generatePassword () {

function writePassword() {

var password = generatePassword();
var passwordText = document.querySelector("#password");
    passwordText.value = password;
};
console.log(writePassword)


//Define Character options

var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberS = "0123456789";
var specialCharacterS = "@!£$%^&*()_+";
console.log(lowerCases)
console.log(upperCases)
console.log(numberS)
console.log(specialCharacterS)

