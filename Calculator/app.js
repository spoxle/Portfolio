const buttons = document.querySelectorAll('button');

const input = document.querySelector('#input');
const output = document.querySelector('#output');

let equation = "";
let update = false;
let last = 0;

buttons.forEach(function(button) {
	button.onclick = function() {
		if (update === true) {
			input.innerHTML = last;

			update = false;
		}

		switch (button.getAttribute("id")) {
			case null:
				input.innerHTML += button.innerHTML;
				equation += button.dataset.key || button.innerHTML;

				break;
			case "back":
				const value = input.innerHTML;

				if (value.slice(-1) === " ") {
					input.innerHTML = value.slice(0, -3);
				} else {
					input.innerHTML = value.slice(0, -1);
				}

				equation = equation.slice(0, -1);

				break;
			case "clear":
				output.innerHTML = "0";
				input.innerHTML = "";
				equation = "";

				break;
			case "eval":
				try {
					const answer = eval(equation);

					output.innerHTML = answer;
					input.innerHTML += " = ";
					equation = answer;
					last = answer;


					update = true;
				} catch(error) {
					output.innerHTML = "Error";
				}

				break;
		}
	}
});