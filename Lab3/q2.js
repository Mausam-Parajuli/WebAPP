

function checkForm() {

    let role = document.getElementById("role").value;
    let email = document.getElementById("email");
    let pass = document.getElementById("password");
    let cpass = document.getElementById("confirmpass");

    email.style.border = "";
    cpass.style.border = "";

    
    if(role == "Student"){
        if(!email.value.endsWith("@student.edu.np")){
            alert("Student email must end with @student.edu.np");
            email.style.border = "2px solid red";
            return false;
        }
    }

    if(role == "Teacher"){
        if(!email.value.endsWith("@tutor.edu.np")){
            alert("Teacher email must end with @tutor.edu.np");
            email.style.border = "2px solid red";
            return false;
        }
    }

    if(pass.value != cpass.value){
        alert("Passwords do not match");
        cpass.style.border = "2px solid red";
        return false;
    }

    return true;
}

