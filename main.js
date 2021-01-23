worldArr = [];
unic = [];
let u1 = document.getElementById(`userInput1`);
let u2 = document.getElementById(`userInput2`);

btn1.onclick = function () {
	let userInput = u1.value;
	userInput = userInput.split("\n");

	for (let i = 0; i < userInput.length; i++) {
		userInput[i] = userInput[i].trim();
		worldArr.push(userInput[i]);
		console.log(userInput[i]);
	}
};

btn2.onclick = function () {
	unic = [...new Set(worldArr)];
	console.log(unic);
	u2.value = unic.join("\n");

	return unic;
};


