// Assignment Code
var generateBtn = document.querySelector("#generate");
var passMinLength = 8;
var passMaxLength = 128;

//array holding char types user may/may not want in their password
var steps = [null, "special characters", "numbers", "upper case letters", "lower case letters"];
var step = 0; //counter for which step we're on, used with steps array

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

function generatePassword(){
  //Prompt: length = 8 to 128 characters
  //Prompt: include special characters y/n
  //Prompt: include lower and uppercase y/n
  //Prompt: include numbers y/n
  step = 0;
  passwordCriterea.passLength = generatePasswordLength();
  console.log(passwordCriterea.passLength);

  step = 1;
  passwordCriterea.includeSpecial = generateCharacterTypes();
  console.log(passwordCriterea.includeSpecial);

  step = 2;
  passwordCriterea.includeNumber = generateCharacterTypes();
  console.log(passwordCriterea.includeNumber);

  step = 3;
  passwordCriterea.includeUpper = generateCharacterTypes();
  console.log(passwordCriterea.includeUpper);

  step = 4;
  passwordCriterea.includeLower = generateCharacterTypes();
  console.log(passwordCriterea.includeLower);
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

