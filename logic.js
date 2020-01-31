document.getElementById("caption").innerHTML = "Venture Garden Registration Form";

function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let dropDown = document.getElementById("dropdown").value;
    let beginner = document.getElementById("beginner").value;
    let intermediate = document.getElementById("intermediate").value;
    let advanced = document.getElementById("advanced").value;
    let expert = document.getElementById("expert").value;
    let text = document.getElementById("text").value;

    if (name == null || name == "" && email == null || email == "" && age == null || age == "" 
    && dropDown == null || dropDown == "" && beginner == null || beginner == "" && intermediate
    == null || intermediate == "" && advanced == null || advanced == "" && expert == null || expert
    == "" && text == null || text == "") {
        alert ("input fields"); 
        return false;
    }
    
    else if (password.length < 8 || password.length > 16) {
        alert("password length invalid");
        return false;
    }

    else if (password != confirm_password) {
        alert("Password mismatch");
        return false;
    }
    else {
        console.log(`${name}`);
        console.log(`${email}`);
        console.log(`${age}`);
        console.log(`${password}`);
        console.log(`${confirm_password}`);
        console.log(`${dropDown}`);
        console.log(`${beginner}`);
        console.log(`${intermediate}`);
        console.log(`${advanced}`);
        console.log(`${expert}`);
        console.log(`${text}`);
        alert("You have successfully submitted");
    }
    return true;
}



  