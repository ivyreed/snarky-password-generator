// Assignment code here

var lower = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upper = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var symbols = ['!','@','#','$','%','^','&','*'];
var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var charachterLength = 0;
var choices = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// prompts:
// password length between 8 && 128
// choose lower upper symbols numbers
// Validate:
// check correct numbers
// make sure at least one set is selected
// after:
// show password

function promptInfo () {
  charachterLength = parseInt(prompt("How long do you want your password to be?"))
  choices = [];
  if (charachterLength < 8) {
    alert("Too short bud.")
    return false;
  }
  if (charachterLength > 128){
    alert('thats a bit much. why not try a smaller password?')
    return false;
  }
  if (isNaN(charachterLength)) {
    alert("At least try to pick a number...")
    return false;
  }
  if (confirm("Do you want lowercase letters in your password?")){
    choices = choices.concat(lower);
  }
  if (confirm("How about capitol letters in your password?")){
    choices = choices.concat(upper);
  }
  if (confirm("Would you perhaps let symbols be in your password?")){
    choices = choices.concat(symbols);
  }
  if (confirm("No password is complete without numbers, right?")){
    choices = choices.concat(numbers)
  }
  if (choices.length === 0) {
    alert('how the hell do i make a password out of nothing?')
    return promptInfo();
  }
  return true;
}

function generatePassword (){

 var password = '';
 for (var i = 1; i <= charachterLength; i++) {
  var randomnumber = Math.floor(Math.random() * choices.length)
  password = password.concat(choices[randomnumber])
 }
 return password
 // for loops = declare what i need; keep going as long as this is true; change at the end of each iteration
// for loop

// for(i = 0; i <50; i++){
//   console.log('hi')
// }


// while loop

// let i = 0
// while (i < 50){
//   console.log('hi')
//   i++;
  
// }

}


// Write password to the #password input
function writePassword() {
  if (promptInfo ()) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
