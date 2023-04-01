// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
console.log("clicked")


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

function generatePassword() {
  var outputPassword = ""; //empty placeholder for password to be generated

  var passwordLength; prompt("Select password length between 8 to 128 characters");

  if (passwordLength >= 8 && passwordLength <= 128)
  alert("Please choose from the following criteria to include in your password"); 
  {
    var selection = false; //user password length not met specification

    var options = ""; // placeholder for options selected



    var lowerCases = confirm("Do you want to include lower case letters?");
    if (lowerCases === true) {
    selection = true; options += lowerCases;
  }

  var upperCases = confirm("Do you want to include upper case letters?");
    if (upperCases === true) {
    selection = true; options += upperCases;
  }

  var numberS = confirm("Do you want to include numbers?");
    if (numberS === true) {
    selection = true; options += numberS;
  }

  var specialCharacterS = confirm("Do you want to include special characters?");
    if (specialCharacterS === true) {
    selection = true; options += specialCharacterS;
  }

  else if { (selection === false) { alert("At least one character type must be selected") };
  }  
  
  {  for (i = 0; i < passwordLength; i++) {
      outputPassword = options[Math.floor(Math.random() * options.length)];
    };
  }
  

  return outputPassword;

  generatePassword ()

writePassword (outputPassword
  )


  