// PART 2
//------------------------------------------------------------------
// register Input validation code
const signupBTN = document.getElementsByClassName("sign-up-button");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");


// HIDING SUCCESS ICON AND ERROR ICON & MESSAGE
username.parentElement.children[3].style.display = "none";
username.parentElement.children[2].style.display = "none"
email.parentElement.children[3].style.display = "none";
email.parentElement.children[2].style.display = "none";
password.parentElement.children[3].style.display = "none";
password.parentElement.children[2].style.display = "none";

// CHECKS REGISTRATION INPUTS FOR VALIDATION
function checkInputs(){       // CALLED IN HTML LINE 77
    // get values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    // username validation----------------------------------------------
    if (usernameValue === ""){
        setErrorFor(username, "Username Can't Be Blank");
    }else if(usernameValue.length < 5 ||  usernameValue.length > 12 ){
        setErrorFor(username, "Username should have 5 to 12 characters");
    } else if(!validateAlphanumeric(usernameValue)){
        setErrorFor(username, "Username Should Be alphanumeric");
    }
    else{
        setSuccessFor(username)
    }


    // email validation------------------------------------------------
    if (emailValue === ""){
        setErrorFor(email, " Email Can't Be Blank");
    }else if(!validateEmail(emailValue)){
        setErrorFor(email, " Invalid Email")
    }
    else{
        setSuccessFor(email);
    }


     // Password validation------------------------------------------------
     if (passwordValue === ""){
        setErrorFor(password, " Password Can't Be Blank");
     }else if(!validateAlphanumeric(passwordValue)){
        setErrorFor(password, "Password Should Be alphanumeric")
     }else if (passwordValue.length < 8 || passwordValue.length > 16){
        setErrorFor(password, "Password should be 8 to 16 characters long ")
     }
    else{
        setSuccessFor(password);
    }
};
// DISPLAYS ERROR ICON AND MESSAGE
function setErrorFor(input, message){
        input.parentElement.children[4].innerText = message;
        input.parentElement.children[4].style.display = "block";
        input.parentElement.children[3].style.display = "block";
        input.parentElement.children[2].style.display = "none";
}

// DISPLAYS SUCCESS ICON
function setSuccessFor(input) {   
    input.parentElement.children[4].style.display = "none";
    input.parentElement.children[2].style.display = "block";
    input.parentElement.children[3].style.display = "none";
}

// CHECKS IF USERNAME HAS SPECIAL CHARACTERS
function validateAlphanumeric(input){
    if (/[^a-zA-Z0-9\-\/]/.test(input)) {
        return false;
      }
      return true;
}

// CHECKS IF EMAIL IS IN CORRECT FORMAT
function validateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    return (false)
}
// register input validation ends