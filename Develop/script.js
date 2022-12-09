// Assignment code here

// 1. ask for how many characters to use on the password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
