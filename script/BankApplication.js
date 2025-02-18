let balance = 1000; // Initial balance
let balanceHidden = true; 

function toggleBalance() {
    let balanceElement = document.getElementById("balance");
    if (balanceHidden) {
        balanceElement.textContent = `$${balance.toFixed(2)}`;
    } else {
        balanceElement.textContent = "****";
    }
    balanceHidden = !balanceHidden;
}

function deposit() {
    let amount = parseFloat(prompt("Enter deposit amount:"));
    if (amount > 0) {
        balance += amount;
        alert(`Deposited: $${amount.toFixed(2)}`);
        toggleBalance(); // Update balance display
        toggleBalance(); // Hide it again
    } else {
        alert("Invalid deposit amount.");
    }
}

function withdraw() {
    let amount = parseFloat(prompt("Enter withdrawal amount:"));
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        alert(`Withdrew: $${amount.toFixed(2)}`);
        toggleBalance();
        toggleBalance();
    } else {
        alert("Invalid or insufficient funds.");
    }
}

function transfer() {
    let amount = parseFloat(prompt("Enter transfer amount:"));
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        alert(`Transferred: $${amount.toFixed(2)}`);
        toggleBalance();
        toggleBalance();
    } else {
        alert("Invalid or insufficient funds.");
    }
}