// Assignment code here
// Script reference Variables
var passwordSize;
var confirmLower;
var confirmUpper;
var confirmSpecialCharacter;
var confirmNumber;
var userInput;

// Required input variables
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [0,1,2,3,4,5,6,7,8,9];
var specialCharacter = ["!","@","#","$","%","&"];

var upperCase = [];
var upperLetter = function (x) {
  return x.toUpperCase();
};

upperCase = lowerCase.map(toUpperCase);

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

function generatePassword() {
  passwordSize = prompt("Please choose a number between 8 and 128");
  console.log("Chosen size is" + passwordSize);

  if(!passwordSize) {
    alert("Value Needed");
  } else if (passwordSize < 8 || passwordSize > 128) {
    passwordSize = prompt("Please select a number between 8 and 128");
    console.log("Password Size" + passwordSize);

  } else {
    confirmLower = confirm("Would you like lower case letters?");
    console.log("Lower case selection" + confirmLower);
    confirmUpper = confirm("Would you like Upper case letters?");
    console.log("Upper case" + confirmUpper);
    confirmSpecialCharacter = confirm("Would you like to include special characters?");
    console.log("Special Characters" + confirmSpecialCharacter);
  };
  // No options Selected
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecialCharacter) {
    userInput = alert("You must select an option");
    // all options chosen
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecialCharacter) {
    userInput = lowerCase.concat(upperCase, number, specialCharacter);
    console.log(userInput);
    // Three options are selected
  } else if (confirmLower && confirmUpper && confirmNumber) {
    userInput = lowerCase.concat(upperCase, number,);
    console.log(userInput);

  } else if (confirmLower && confirmUpper && confirmSpecialCharacter) {
    userInput = lowerCase.concat(upperCase, specialCharacter);
    console.log(userInput);

  } else if (confirmLower && confirmNumber && confirmSpecialCharacter) {
    userInput = lowerCase.concat(number, specialCharacter);
    console.log(userInput);
  }



}