function alphabet_order(str){
	return str.split('').sort().join('');
}
console.log(alphabet_order("jarrod and kiral"));


//BONUS
var userStrng = prompt("Please enter a word.");
var strings = [];

function alphabet_order() {
	for(i = 0; i < userStrng.length; i++){
		strings.push(userStrng[i])
	}
	strings.sort();
	console.log("The word you entered is:" + " " + userStrng + "\n\n" + "The alphabetized version is:" + " " + strings.join(""))
}
alphabet_order()