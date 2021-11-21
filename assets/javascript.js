// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#","$", "%","^","&", "*", "(", ")", "[","]",];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var passwordLength = 8;
var password = "";
// Get references to the #generate element
var generateBtn = document.getElementById("generate");

function generatePassword() { 
    var lowerresponse = window.prompt("what lowercase letter do you want");
    if (lowerresponse = lowercase || response === null);
       else window.alert("unacceptable");
    return lowercaseresponse;
    
    var uppercaseresponse = window.prompt("what uppercase letter do you want?")
     
}


// Write password to the #password input
function writePassword() {
 var password=generatePassword();
 var passwordText=document.querySelector("password");

passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
localStorage.getItem("password")