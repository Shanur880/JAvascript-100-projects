document.getElementById('convertButton').addEventListener('click', convertCurrency);

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amountInput').value);
    if (isNaN(amount) || amount <= 0) {
        showMessage('Please enter a valid amount.');
        return;
    }

    const exchangeRate = 0.85;
    const convertedAmount = amount * exchangeRate;
    showMessage(`Converted Amount: ${convertedAmount.toFixed(2)} EUR`);
}

function showMessage(message) {
    const resultElement = document.getElementById('convertedAmount');
    resultElement.innerText = message;
    resultElement.classList.add('show');

    // Trigger reflow to restart animation
    resultElement.offsetWidth;
    resultElement.classList.remove('fade-in');
    setTimeout(() => resultElement.classList.add('fade-in'), 10);
}
