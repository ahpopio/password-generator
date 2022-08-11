// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
  "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
  "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"];
var numeral = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacter = ["!", "#", "$", "%", "^", "&", "*", "(",
  ")", "+", "-", "_", "<", ">"];

var passwordGenerate = function() {

  // prompts the user to specify a password length
  var passwordLength = window.prompt("How long would you like your password to be? Please choose a length between 8 and 128 characters.");
  console.log(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("Great! Next let's choose your character sets.");
      var lowercasePassword()=window.prompt("Would you like to include lowercase letters?");
  }
  else {
    window.alert("Your password is too long or too short. Please choose an appropriate length.");
    passwordGenerate();
  }
}

// Next they should be asked which character sets to include in their password

// A loop should occur pulling characters until a password of the
// specified length has been generated

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
