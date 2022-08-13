// Initial input from user on button click
// var startButton = document.getElementById("generate");

// Arrays containing character sets of each type
// (lower, upper, numeral, and special)
var lowercaseLibrary = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
  "v", "w", "x", "y", "z"];
var uppercaseLibrary = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
  "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
  "V", "W", "X", "Y", "Z"];
var numeralLibrary = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacterLibrary = ["!", "#", "$", "%", "^", "&", "*", "(",
  ")", "+", "-", "_", "<", ">"];

// Retrieve desired password length from user
function passwordOptions() {
  var passwordLength = parseInt(window.prompt("How long would you like your password to be? Please choose a length between 8 and 128 characters."));

  // prompts the user to specify a password length, loops if given a
  // length less than 8 characters or greater than 128
  console.log(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128) {
    window.alert("Great! Next let's choose your character sets.");
  }
  else {
    window.alert("Your password is too long or too short. Please choose an appropriate length.");
    passwordOptions();
  }

  // several prompts asking the user to choose their character sets
  var includeLower = confirm("Do you want to include lowercase letters?");
  var includeUpper = confirm("Do you want to include uppercase letters?");
  var includeNumeral = confirm("Do you want to include numbers?");
  var includeSpecial = confirm("Do you want to include special characters ('%', '&', etc.)?");

  if (!includeLower && !includeUpper && !includeNumeral && !includeSpecial) {
    window.alert("Please choose at least one character set for your password!");
    passwordOptions();
  }

  // creates an object storing user's selections
  var passwordRecipe = {
    length: passwordLength,
    lowercase: includeLower,
    uppercase: includeUpper,
    numeral: includeNumeral,
    special: includeSpecial
  }

  // testing
  console.log(passwordRecipe);

  // ends the question phase
  return passwordRecipe;
}

function createPassword() {
  // retrieve user's selections
  var recipe = passwordOptions();
  // set up a blank array to store the appropriate character sets
  // for this password
  var passwordIngredients = [];
  // start selecting ingredients (pulling from character sets) to
  // generate a password
  if (recipe.lower) {
    for (i = 0; i < lowercaseLibrary.length; i++) {
      passwordIngredients.push(lowercaseLibrary[i]);
    }
  }
  if (recipe.upper) {
    for (i=0; i < uppercaseLibrary.length; i++) {
      passwordIngredients.push(uppercaseLibrary[i]);
    }
  }
  if (recipe.numeral) {
    for (i=0; i < numeralLibrary.length; i++) {
      passwordIngredients.push(numeralLibrary[i]);
    }
  }
  if (recipe.special) {
    for (i=0; i < specialCharacterLibrary.length; i++) {
      passwordIngredients.push(specialCharacterLibrary[i]);
    }
  }
}



// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
generate.addEventListener("click", passwordOptions);
