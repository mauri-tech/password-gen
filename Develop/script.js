/* 
1 - User clicks button to start password generation
2 - User enters the number of characters for the password in prompt window
3-  User confirms the total number of chars in the password
    a) If its a valid number criteria, it will continue with #4
    b) Loop if its an invalid number criteria, it will display error prompt and restart   
4 - User confirms if the password should have special characters
5 - User confirms if the password should have numeric characters
6 - User confirms if the password should have lowercase characters
7 - User confirms if the password should have uppercase characters
8 - The user criteria generate random values with the selected user characters.
9 - Password is displayerd in the textarea
 */

document.querySelector("#generate").addEventListener("click", writePassword);

// Characters Arrays 
var numbersChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Variable Declaration 
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password
function generatePassword() {
  var confirmLength = (prompt("How many characters will the password contain?"));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 8 || confirmLength >= 128) {
      alert("⚠️ Invalid length, password must have at least 8 - 128 characters, try again.");
      var confirmLength = (prompt("How many characters will the password contain?"));
      } 

      // Repeat back how many charactes the user will have  
      alert(`Your password will have ${confirmLength} characters`);

    // Determine which parameters are included in the password 
    var confirmSpecialCharacter = confirm("Click OK to include special characters");
    var confirmNumericCharacter = confirm("Click OK to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to include uppercase characters");


      // Loop if the answer is outside the parameters 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one parameter");
        var confirmSpecialCharacter = confirm("Click OK to include special characters");
        var confirmNumericCharacter = confirm("Click OK to include numeric characters");    
        var confirmLowerCase = confirm("Click OK to lowercase characters");
        var confirmUpperCase = confirm("Click OK to include uppercase characters");   
    } 

      var passwordCharacters = []
      
    if (confirmSpecialCharacter) {
      passwordCharacters = passwordCharacters.concat(specialChar)
    }

    if (confirmNumericCharacter) {
      passwordCharacters = passwordCharacters.concat(numbersChar)
    }
      
    if (confirmLowerCase) {
      passwordCharacters = passwordCharacters.concat(lowerCase)
    }

    if (confirmUpperCase) {
      passwordCharacters = passwordCharacters.concat(upperCase)
    }

      console.log(passwordCharacters)

      var randomPassword = ""
      
      for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
      }
      return randomPassword;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);