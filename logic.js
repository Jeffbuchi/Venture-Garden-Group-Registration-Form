document.getElementById("caption").innerHTML = "Venture Garden Registration Form";

function InternsName (firstName, lastName) {
    return `My fullname is ${lastName} ${firstName}`;
}

console.log(InternsName("Mormah", "Jefferson"))


function validate() {
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;

    if (password.length < 8 || password.length > 16) {
        alert("password length invalid");
        return false;
    }

    if (password != confirm_password) {
        alert("Password mismatch");
        return false;
    }
    return true;
}

  