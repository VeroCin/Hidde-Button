let winningButtonIndex;

function checkButton(clickedIndex) {
	const resultElement = document.getElementById('result');
	if (clickedIndex === winningButtonIndex) {
		resultElement.textContent = 'Winner!';
                resultElement.style.color = 'green';
	} else {
                resultElement.textContent = 'Not a winner.';
                resultElement.style.color = 'red';
	}
}

function generateButtons() {
	const buttonCount = parseInt(document.getElementById('buttonCount').value);
	const container = document.getElementById('buttons-container');
	container.innerHTML = '';
	document.getElementById('result').textContent = '';
	winningButtonIndex = Math.floor(Math.random() * buttonCount);

	for (let i = 0; i < buttonCount; ++i) {
		let button = document.createElement('button');
                button.className = 'btn btn-outline-secondary';
                button.textContent = `Buton ${i + 1}`;
                button.onclick = () => checkButton(i);
                container.appendChild(button);
	}
}
