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
      return "Please try again."
    } else if (usernum > 128) {
      alert("Please enter a number between 8 and 128.");
      return "Please try again."
    } else if (isNaN(usernum)) {
      alert("Please enter a number between 8 and 128.");
      return "Please try again."
    }

// 2. Ask user what characters types they would like to include in their generated password.
  // Ask user if their password should include lowercase letters.
      var ynlower = window.confirm("Click OK to confirm you would like lowercase letters in your password.");
      console.log(ynlower);
      if(ynlower == true) { selections = selections.concat(lowerCase);}
  // Ask user if their password should include UPPERcase letters.
      var ynupper = window.confirm("Click OK to confirm you would like uppercase letters in your password.");
      console.log(ynupper);
      if(ynupper == true) { selections = selections.concat(upperCase);}
  // Ask user if their password should contain special characters.
      var ynspecs = window.confirm("Click OK to confirm you would like special characters in your password.");
      console.log(ynspecs);
      if(ynspecs == true) { selections = selections.concat(specChars);}
   // Ask user if their password should contain numbers.
      var ynnum = window.confirm("Click OK to confirm you would like numbers in your password.");
      console.log(ynnum);
      if(ynnum == true) { selections = selections.concat(numbers);}
    // Make sure user selects at least one type of character.
      if (ynlower == false && ynupper == false && ynspecs == false && ysnum == false) {
        alert("You must select one or more sets of variables to generate a password.")
        return "You must select one or more sets of variables to generate a passoword. Please try again."
      }
// 3. Validate inputs and begin process of generating a password with user selected characters.

      var password = ""
      for (var i = 0; i < usernum; i++) {
    // Randomly generate set of digits that matches user's requested length.
        password+=(selections[Math.floor(Math.random() * selections.length)]);
      }
    // Display password with return.
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
