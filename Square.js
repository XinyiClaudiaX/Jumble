// Xinyi Xiao
// This JS program helps implement the Square Cipher and post it to the web app.
var albe = 'ABCDEFGHIJKLMNOPQRSTUVWXY';// Global variable;Default value: Alphabet Order

var input = 'Welcome to the Jumble'; // Global variable;Default value: Welcome to the Jumble

function showSquare(s){
	//Transit 25 letters string into table (HTML format) shown on the sidebar.
	//Parameters: This function has one parameter, s. It is a 25 characters string, 
	//which includes from A to Y. This string is shuffled alphabet generated by 
	//function "shuffle".
	//Return value: None.
	s = s.split('');
	var grid = [];
	while (s.length > 0){
		var row = [];
		for (let i = 0; i < 5; i ++){
			row.push('<td>' + s[i] + '</td>');
		}
		grid.push('<tr>'+row.join('')+'</tr>');
		s.splice(0, 5);
	}
	grid = grid.join('');
	const cipherSquare = document.getElementById('cipher_square');
	cipherSquare.innerHTML = grid;
}

function shuffle(letters) {
	//This function shuffles the alphabet (except Z) by
	//Fisher-Yates algorithm, and set the shuffled string to the global 
	//variable albe.
	//Parameter: letters, a string includes the alphabet from A to Z.
	//Return value: None.
	letters = letters.split('');
	for(let j = letters.length - 1; j > 1; j--){
		var k = Math.floor(Math.random() * j);
		if (!(k == j)){
			[ letters[k], letters[j] ] = [ letters[j], letters[k] ];
		}
	}
	albe = letters.join('');
}

function squareCipher() {
	//This function generate the Square Cipher code of user's input 
	//according to the new shuffled alphabet string and the rule of 
	//Square Cipher.
	//Parameter: None.
	//Return: A string includes the Square Cipher code of user's input.
	newOrderA = albe.split('');
	inputA = input.split('');
	newArray = [];
	for (let i = 0 ; i < inputA.length; i++) {
		c = inputA[i].charCodeAt(0);
		if (c >= 65 && c <= 90) {
			c = c - 65;
			newArray.push(newOrderA[c]);
		} else if (c >= 97 && c <= 122) {
			c = c - 97;
			newArray.push(newOrderA[c].toLowerCase());
		} else {
			newArray.push(String.fromCharCode(c));
		}
	}
	return newArray.join('');
}

const userIn = document.getElementById('context');
userIn.addEventListener('input', (e) => {input = e.target.value; showText();});

const update = document.getElementById('update');
showSquare(albe);
update.addEventListener('click',(e) => {shuffle(albe); showSquare(albe); showText();});

function showText(){
	const bottomText = document.getElementById('bottom_text');
	bottomText.textContent = squareCipher();
}