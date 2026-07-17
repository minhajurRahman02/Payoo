document.getElementById('cashout-btn').addEventListener('click', function () {
    let newBalance;
    const inputAgentNumber = document.getElementById('input-agent-number');
    const agentNumber = inputAgentNumber.value;

    const inputAmount = document.getElementById('input-amount');
    const inputPin = document.getElementById('input-pin');

    if (inputAgentNumber.value === "" || inputAmount.value === "" || inputPin.value === "") {
        alert("Enter all the credentials!");
    }
    else {
        //process agent number
        if (inputAgentNumber.value != "123456789") {
            alert("Invalid Credentials!");
            return;
        }
        //process amount
        const amount = Number(inputAmount.value);

        const currentBalance = Number(document.getElementById('balance').innerText);

        if (amount < 1) {
            alert("Invalid Amount Input!");
            return;
        }
        else if(amount > currentBalance){
            alert("Insufficient Balance!");
            return;
        }
        else{
            newBalance = currentBalance - amount;
        }

        //process pin
        const pinNumber = inputPin.value;
        if (pinNumber != '1234') {
            alert("Invalid PIN Number!");
            return;
        }

        (document.getElementById('balance').innerText) = String(newBalance);

        const message = `Withdrawal Successful!\nAgent Number: ${agentNumber}\nWithdraw Amount: ${amount}\nCurrent Balance: ${newBalance}\nThank You!`;
        alert(message);
    }

});