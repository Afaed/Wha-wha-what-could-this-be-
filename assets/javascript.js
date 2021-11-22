// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#","$", "%","^","&", "*", "(", ")", "[","]",];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var password = "";

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

function generatePassword() { 
let length= prompt ("Length of password")
while (length < 8 && length > 128){
  length = prompt("Try again");}

let useLowercase =prompt("Use lowercase")
while (useLowercase !== "no" && useLowercase !== "yes"){
  useLowercase = prompt("Try again")};

let useUppercase = prompt("Use Uppercase")
    while (useUppercase !== "no" && useUppercase !=="yes") {
    useUppercase = prompt("Try again")};

let useSymbol = prompt ("Use symbol?")
while (useSymbol !== "no" && useSymbol !== "yes") {
useSymbol = prompt("try again")};

let usableCharacters = [];

if (useLowercase === "yes") {
    usableCharacters += lowercase;
  };
if (useUppercase === "yes") {
    usableCharacters += uppercase;
  };
if (useSymbol === "yes") {
        usableCharacters += symbol;};
        Math.random 
};
 


// Write password to the #password input
function writePassword() {
 var password=generatePassword();
 var passwordText=document.querySelector("#password");

passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
localStorage.getItem("password")
