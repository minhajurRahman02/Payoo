document.getElementById('login-btn').addEventListener('click', function () {
    // console.log("login");
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;

    const inputPin = document.getElementById('input-pin');
    const pinNumber = inputPin.value;

    if (contactNumber === '123456789' && pinNumber === '1234') {
        alert("Login Successful!");
        inputNumber.value = '';
        inputPin.value = '';

        window.location.assign("/dashboard.html");
    }
    else {
        alert('Invalid credentials! Login failed');
        inputNumber.value = '';
        inputPin.value = '';
    }
});