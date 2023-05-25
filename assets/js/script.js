/*

QUESTIONS:
1) why are the prompt boxes coming up immediately on the screen?
2) why isn't the event listener working properly?
3) why isn't GitHub matching my local, even though i've added, committed, and pushed

*/
// Assignment Code
var generateBtn = document.querySelector("#generate");
var passMinLength = 8;
var passMaxLength = 128;

//array holding char types user may/may not want in their password
const steps = [null, "special characters", "numbers", "upper case letters", "lower case letters"];
var step = 0; //counter for which step we're on, used with steps array


var chars = {
  //*****NOT INCLUDING SPACEBAR AND BACKSLASH UNTIL FULLY FUNCTIONAL*****
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

//Prompt User for Length
function generatePasswordLength(){  
  var passLength;

  //START pseudo-recursion while loop
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

//randomly builds the password based on received user input
function buildPassword(passLength, includeSpecial, includeNumber, includeUpper, includeLower){
  //initialize variables so no funky stuff
  var passChars = [];
  var tempPass = "";

  //uses conditionals to build an array with user-allowed characters
  if(includeSpecial){ passChars = passChars.concat(chars.charSpecial) }
  console.log(passChars);
  if(includeNumber){ passChars = passChars.concat(chars.charNumber) }
  console.log(passChars);
  if(includeUpper){ passChars = passChars.concat(chars.charUpper) }
  console.log(passChars);
  if(includeLower){ passChars = passChars.concat(chars.charLower) }
  console.log(passChars);
  
  //constructs the password one character at a time
  for(var i = 0; i < passLength; i++){
    tempPass = tempPass + passChars[Math.floor(Math.random() * passChars.length)];
    console.log(tempPass);
  }

  return tempPass; //returns the generated password
}

//the main function for telling everything what to do to create a password
function generatePassword(){
  //Prompt: length = 8 to 128 characters
  step = 0;
  passwordCriterea.passLength = generatePasswordLength();
  console.log("length = " + passwordCriterea.passLength);

  //Confirm: include special characters
  step = 1;
  passwordCriterea.includeSpecial = confirm("Would you like to include " + steps[step] + "?");
  console.log("include special chars = " + passwordCriterea.includeSpecial);

  //Confirm: include numbers
  step = 2;
  passwordCriterea.includeNumber = confirm("Would you like to include " + steps[step] + "?");
  console.log("include numbers = " + passwordCriterea.includeNumber);

  //Confirm: include upper-case
  step = 3;
  passwordCriterea.includeUpper = confirm("Would you like to include " + steps[step] + "?");
  console.log("include upper-case = " + passwordCriterea.includeUpper);

  //Confirm: include lower-case
  step = 4;
  passwordCriterea.includeLower = confirm("Would you like to include " + steps[step] + "?");
  console.log("include lower-case = " + passwordCriterea.includeLower);
  
  //randomly builds the password
  var password = buildPassword(passwordCriterea.passLength, passwordCriterea.includeSpecial, 
    passwordCriterea.includeNumber, passwordCriterea.includeUpper, 
    passwordCriterea.includeLower);

  //writes password out on the screen for the user to see
  writePassword(password);
  
}


// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(passwordText);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);




/* CODE GRAVEYARD

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

*/ //END CODE GRAVEYARD