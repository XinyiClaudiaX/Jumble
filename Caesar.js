// Xinyi Xiao
// This JS program helps implement the caeser code and post it to the web app.
var data = {}; // An object stores users' input text and chosen shift

function callback(key, value) {
	//This is a callback function which is used to access the user data and 
	//keep them in the object "data".
	//Parameter: key, value. "Key" is the name of the data, like "userData", which 
	//will be set as the key of the object. And the "value" will be a number 
	//or an array, which will be set as the value of the object.
	data[key] = value;
}

function userData(userText) {
	//This function changes user text to ASCII Code and keep it in an array.
	//Parameter: userText. User's typing. Get from "data" object.
	//Return Value: None.
	var userArray = userText.split('');
	userArray1 = userArray.map(char => char.charCodeAt(0));
	callback("userData",userArray1);
	}

function shift(n) {
	//Change the value of rangeValue(HTML object) 
	//Parameter: n, the shift number of the Caesar Cipher.
	//Return value: None.
	const rangeValue = document.getElementById("range_value");
	rangeValue.textContent = n;
	//Get the shift 
	callback("shift", n);
}

//Read user's input text.
const userInput = document.getElementById("context");
userData(userInput.value);
userInput.addEventListener('input', (e) => {userData(e.target.value); show(); });

//Read user's chosen shift
const userShift = document.getElementById("user_shift");
shift(userShift.value);
userShift.addEventListener('change',(e) => {shift(e.target.value); show();});


function caeserCipher(data) {
	//This function generates the cipher.
	//Parameter: "data": the global object "data".
	//Retrun Value: A string includes the Caeser Cipher code of the user's
	//text.
	var s = Number(data['shift']);
	var a = data['userData'];
	var newA = [];
	for (let i = 0; i < a.length; i++) {
		if (a[i] >= 65 && a[i] <= 90) {
			newAE = a[i] + s;
			if (newAE > 90) {
				newAE = newAE - 26;
			}
			newA.push(newAE);
		}
		else if (a[i] >= 97 && a[i] <= 122) {
			newAE = a[i] + s;
			if (newAE > 122) {
				newAE = newAE - 26;
				
			}
			newA.push(newAE);
		} else {
			newA.push(a[i]);
		}
	}
	newA = newA.map(code => String.fromCharCode(code));
	var cipher = newA.join('');
	return cipher;
}

function show(){
	//Output the result
	const topText = document.getElementById('top_text');
	topText.textContent = caeserCipher(data);
}