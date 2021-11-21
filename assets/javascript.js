// Assignment code here
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var numbers = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#","$", "%","^","&", "*", "(", ")", "[","]",];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var passwordLength = 8;
var password = "";
// Get references to the #generate element
var generateBtn = document.getElementById("#generate");

// Write password to the #password input
function writePassword() {
 var password=generatePassword();
 var passwordText=document.querySelector("#password");

 window.prompt("what lowercase letter do you want") 
    if (response = lowercase || response === "ok");
        else { window.alert("unacceptable");
    return lowresponse;}
    console.log("lowerresponse")


window.prompt("Which capital letter do you want")
    if (window.prompt = capitalcase || Response === "ok")
        ;else {window.prompt("Please pick a acceptable letter");
        return capitalcase
    }

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
localStorage.getItem("password")