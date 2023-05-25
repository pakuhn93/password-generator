// Assignment Code
var password;
var generateBtn = document.querySelector("#generate");
var passMinLength = 8;
var passMaxLength = 128;

//array holding char types user may/may not want in their password
var steps = [null, "special characters", "numbers", "upper case letters", "lower case letters"];
var step = 0; //counter for which step we're on, used with steps array


var chars = {
  //*****NOT INCLUDING BACKSLASH FOR NOW*****
  charSpecial: ["`", "~", "1", "@", "#", "$", "%", "^", "&", "*", 
  "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "\"",
   "\'", ";", ":", ",", "<", ".", ">", "?", "/"], //NOT including " " spacebar, ran into weird issues when it was on the end of passwords
  charNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  charUpper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
  "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  charLower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
  "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
}

//the user's password criterea, initialized with default values
var passwordCriterea = {
  passLength: 8,
  includeSpecial: true,
  includeNumbers: true,
  includeUpper: true,
  includeLower: true
}

//Prompt Length
function generatePasswordLength(){  
  var passLength;

  //pseudo-recursion while loop
  while(true){
    passLength = prompt("Type in a Length for your Password (between 8 to 128 characters long)", 8);

    if(isNaN(passLength)){
      alert("Input was not a number, please try again.");
    } else {

      if((passLength < passMinLength) || (passLength > passMaxLength)){
        alert("Password length did not meet the requirements." + "\nPlease re-enter a length between 8 to 128 characters.");  
      } else { 
        return passLength; //ends function, ending the loop
      }
    }
  }//END pseudo-recursion
}

//Prompt y/n for allowed character types
function generateCharacterTypes(){
  var includeCharType;

  //START pseudo-recursion
  while(true){
    includeCharType = prompt("Would you like to include " + steps[step] + "?" + "\nPlease enter y/n", "y");

    if (isNaN(includeCharType)){
      includeCharType.toLowerCase();

      if((includeCharType == "y")){
        includeCharType = true;
        return includeCharType;

      } else if ((includeCharType == "n")){
        includeCharType = false;
        return includeCharType;

      } else { 
        alert("Input was not in the correct format (y/n)." + "\nPlease, re-enter your choice");
      }
    } else { 
      alert("Input was not in the correct format (y/n)." + "\nPlease, re-enter your choice");
    }
  } //END pseudo-recursion
}

function createPassword(passLength, includeSpecial, includeNumber, includeUpper, includeLower){
  var passChars = [];
  var tempPass = "";

  if(includeSpecial){ passChars = passChars.concat(chars.charSpecial) }
  console.log(passChars);
  if(includeNumber){ passChars = passChars.concat(chars.charNumber) }
  console.log(passChars);
  if(includeUpper){ passChars = passChars.concat(chars.charUpper) }
  console.log(passChars);
  if(includeLower){ passChars = passChars.concat(chars.charLower) }
  console.log(passChars);
  

  for(var i = 0; i < passLength; i++){
    tempPass = tempPass + passChars[Math.floor(Math.random() * passChars.length)];
    console.log(tempPass);
  }
}

function generatePassword(){ 
  //Prompt: length = 8 to 128 characters
  step = 0;
  passwordCriterea.passLength = generatePasswordLength();
  console.log("length = " + passwordCriterea.passLength);

  //Prompt: include special characters y/n
  step = 1;
  passwordCriterea.includeSpecial = generateCharacterTypes();
  console.log("include special chars = " + passwordCriterea.includeSpecial);

  //Prompt: include numbers y/n
  step = 2;
  passwordCriterea.includeNumber = generateCharacterTypes();
  console.log("include numbers = " + passwordCriterea.includeNumber);

  //Prompt: include upper-case y/n
  step = 3;
  passwordCriterea.includeUpper = generateCharacterTypes();
  console.log("include upper-case = " + passwordCriterea.includeUpper);

  //Prompt: include lower-case y/n
  step = 4;
  passwordCriterea.includeLower = generateCharacterTypes();
  console.log("include lower-case = " + passwordCriterea.includeLower);

  //randomly creates the password based on received user input
  createPassword(passwordCriterea.passLength, passwordCriterea.includeSpecial, 
    passwordCriterea.includeNumber, passwordCriterea.includeUpper, 
    passwordCriterea.includeLower);

}

generatePassword();

// Write password to the #password input

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
//   console.log(passwordText);
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());

