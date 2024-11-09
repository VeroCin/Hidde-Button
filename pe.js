let winningButtonIndex = Math.floor(Math.random() * 3);

function checkButton(clickedIndex) {
    let resultElement = document.getElementById('result');
    if (clickedIndex === winningButtonIndex) {
        resultElement.textContent = "castigator";
    } else {
        resultElement.textContent = "necastigator";
    }
}
