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

    //makes sure user input is a number
    if(isNaN(passLength)){
      alert("Input was not a number, please try again.");
    } else {

      //checks length requirements
      if((passLength < passMinLength) || (passLength > passMaxLength)){
        alert("Password length did not meet the requirements." + "\nPlease re-enter a length between 8 to 128 characters.");  
      } else { 
        return passLength; //ends function, ending the loop
      }
    }
  }//END pseudo-recursion
}

//randomly builds the password based on received user input
function buildPassword(){
  var passChars = [];
  var tempPass = "";

  //uses conditionals to build an array with user-allowed characters
  if(passwordCriterea.includeSpecial){ passChars = passChars.concat(chars.charSpecial) }
  if(passwordCriterea.includeNumbers){ passChars = passChars.concat(chars.charNumber) }
  if(passwordCriterea.includeUpper){ passChars = passChars.concat(chars.charUpper) }
  if(passwordCriterea.includeLower){ passChars = passChars.concat(chars.charLower) }
  
  //constructs the password one character at a time
  for(var i = 0; i < passwordCriterea.passLength; i++){
    tempPass = tempPass + passChars[Math.floor(Math.random() * passChars.length)];
  }

  return tempPass; //returns the generated password
}

//the main function for telling everything what to do to create a password
function generatePassword(){
  
  //Prompt: length = 8 to 128 characters
  step = 0;
  passwordCriterea.passLength = generatePasswordLength();

  //Confirm: include special characters
  step = 1;
  passwordCriterea.includeSpecial = confirm("Would you like to include " + steps[step] + "?");

  //Confirm: include numbers
  step = 2;
  passwordCriterea.includeNumbers = confirm("Would you like to include " + steps[step] + "?");

  //Confirm: include upper-case
  step = 3;
  passwordCriterea.includeUpper = confirm("Would you like to include " + steps[step] + "?");

  //Confirm: include lower-case
  step = 4;
  passwordCriterea.includeLower = confirm("Would you like to include " + steps[step] + "?");
  
  //makes sure not all inputs are set to false before moving on to the next function
  if(!passwordCriterea.includeSpecial && !passwordCriterea.includeNumber && !passwordCriterea.includeUpper && !passwordCriterea.includeLower){ 
    alert("Your password must contain at least one character type." + 
      "\nClick the 'Generate Password' button to try again.");
  } else { 
    var password = buildPassword(); //builds the password with random characters
    writePassword(password);  //writes password out on the screen for the user to see
  }  
}

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//clicking the submit button causes the password generation process to begin
generateBtn.addEventListener("click", generatePassword);
