document.getElementById("caption").innerHTML = "Venture Garden Registration Form";

function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    let dropDown = document.getElementById("dropdown").value;
    let radio = document.querySelector('input[name="feedback"]:checked').value;
    let text = document.getElementById("comment").value;

    if (name == "" || email == "" || age == ""  || dropDown == ""  ||  radio == "" || text == "") {
        alert ("input fields"); 
        return false;
    }
    
    else if (password.length < 8 || password.length > 16) {
        alert("Error: Password must be up to 8 characters and less than 16 characters");
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
        console.log(`${radio}`);
        console.log(`${text}`);
        alert("You have successfully submitted");
    }

}



  