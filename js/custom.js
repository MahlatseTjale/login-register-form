// LOGIN/REGISTER SLIDER CODE
var register = document.getElementById("register-btn")
var loginForm = document.getElementById("login-form")
var signupForm = document.getElementById("signup-form")
var btn_toggle = document.getElementById("btn-toggle") 
var headerText = document.getElementById("header")

//DISPLAYS REGISTRATION TAB
function registerTab(){      // called in html line 85
    loginForm.style.left = "-350px";
    signupForm.style.left = "25px";
    btn_toggle.style.left = "110px";
    headerText.innerHTML = "Register";
}

// DISPLAYS LOGIN TAB
function loginTab(){         // called in html line 84
    loginForm.style.left = "0";
    signupForm.style.left = "350px";
    btn_toggle.style.left = "0";
    headerText.innerHTML = "Login";
}
// SLIDER CODE ENDS
//-----------------------------------------------------------------------


