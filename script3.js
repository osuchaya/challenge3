// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
console.log("clicked")

var lowerCases = "abcdefghijklmnopqrstuvwxyz";
var upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberS = "0123456789";
var specialCharacterS = "@!£$%^&*()_+";
var userSelect = "" //userSelect will be the placeholder for generated password from selection
var generatedPass = "";

function generatePassword() {
var passwordLength = window.prompt("Please select between 8 and 128 characters for your password.")
if (passwordLength >= 8 && passwordLength <= 128); 

var lowerCasesprompt = confirm("Do you want to include lower case letters in your password?");
if (lowerCasesprompt === true) 
userSelect += lowerCases

var upperCasesprompt = confirm("Do you want to include upper case letters?")
if (upperCasesprompt === true) 
userSelect += upperCases

var numberSprompt = confirm("Do you want to include numbers?")
if (numberSprompt === true) 
userSelect += numberS

var specialCharacterSprompt = confirm("Do you want to include special characters?")
if (specialCharacterSprompt === true) 
userSelect += specialCharacterS;


for (i = 0; i < passwordLength; i++) {
  generatedPass += userSelect[Math.floor(Math.random()*userSelect.length)]} 
return generatedPass;
}




function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



  