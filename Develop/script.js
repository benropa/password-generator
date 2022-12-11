// Ask user how many characters their password needs to contain.
// Make sure user provides a number between 8 and 128.
// Ask user if their password should include lowercase letters.
// Ask user if their password should include UPPERcase letters.
// Ask user if their password should contain numbers.
// Ask user if their password should contain special characters.
// Randomly generate set of digits that matches user's requested length.

// Get references to the #generate element

var specChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "/", "?", "<", ">", ".", ",", "[", "]", "{", "}", ":", ";", "~", "`"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


function generatePassword() {
  var selections = [];
  console.log("Hey! You clicked the button.")
// 1. Ask user how many characters their password needs to contain. (between 8 - 128)
    // Validate user answer and make sure their answer falls within guidelines.
const usernum = Number(window.prompt("How many characters would you like your password to contain? Please enter in a number between 8 and 128.", ""));
    if (usernum < 8) {
      alert("Please enter a number between 8 and 128.");
    } else if (usernum > 128) {
      alert("Please enter a number between 8 and 128.");
    } else if (isNaN(usernum)) {
      alert("Please enter a number between 8 and 128.");
      return "Please try again."
    }

// 2. Ask user what characters types they would like to include in their generated password.
      var lowerCase = window.confirm("Click OK to confirm you would like lowercase letters in your password.");
      console.log(lowerCase);
      if(lowerCase == true) { selections = selections+=(lowerCase);}
      var upperCase = window.confirm("Click OK to confirm you would like uppercase letters in your password.");
      console.log(upperCase);
      if(upperCase == true) { selections = selections+=(upperCase);}
      var specChars = window.confirm("Click OK to confirm you would like special characters in your password.");
      console.log(specChars);
      if(specChars == true) { selections = selections+=(specChars);}
      var numbers = window.confirm("Click OK to confirm you would like numbers in your password.");
      console.log(numbers);
      if(numbers == true) { selections = selections+=(numbers);}

      if (lowerCase == false && upperCase == false && specChars == false && numbers == false) {
        alert("You must select one or more sets of variables to generate a password.")
        return "You must select one or more sets of variables to generate a passoword. Please try again."
      }
// 3. Validate inputs and begin process of generating a password with user selected characters.

      var password = ""
      for (var i = 0; i < usernum; i++) {
        var setup;
        password+=(selections[Math.floor(Math.random() * selections.length)]);
      }

      const generatePassword = password+=("");
        return generatePassword;
    };


var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
