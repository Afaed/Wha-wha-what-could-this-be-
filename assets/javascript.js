// Assignment code here

// Get references to the #generate element
var generateBtn = document.getElementById("#generate");

// Write password to the #password input
function writePassword() {
 var password=generatePassword();
 var passwordText=document.querySelector("#password");
 generatePassword({passwordText.value = password{
     var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var passwordLength = 8;
     var password = ""});

 for (var i = 0; i <= passwordLength; i++) {
var randomNumber = Math.floor(Math.random() * chars.length);
password += chars.substring(randomNumber, randomNumber +1);
}
     document.querySelector("password").value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
