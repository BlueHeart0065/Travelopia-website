

const email_bar = document.getElementsByClassName("email-bar")[0];
const email_input = document.getElementsByClassName("email-input")[0];

email_input.onclick = function(){
    email_bar.style.transform = "translateY(-2px)";
    email_bar.style.boxShadow = "0px 4px 8px rgb(184, 236, 252)";
}

email_input.onblur = function(){
    email_bar.style.transform = "translateY(0px)";
    email_bar.style.boxShadow = "0px 0px 0px white";
    email_bar.style.borderColor = "#878787";
}

const password_bar = document.getElementsByClassName("password-bar")[0];
const password_input = document.getElementsByClassName("password-input")[0];

password_input.onclick = function(){
    password_bar.style.transform = "translateY(-2px)";
    password_bar.style.boxShadow = "0px 4px 8px rgb(184, 236, 252)";
}

password_input.onblur = function(){
    password_bar.style.transform = "translateY(0px)";
    password_bar.style.boxShadow = "0px 0px 0px white";
    password_bar.style.borderColor = "#878787";

}

const name_bar = document.getElementsByClassName("name-bar")[0];
const name_input = document.getElementsByClassName("name-input")[0];

name_input.onclick = function(){
    name_bar.style.transform = "translateY(-2px)";
    name_bar.style.boxShadow = "0px 4px 8px rgb(184, 236, 252)";
}

name_input.onblur = function(){
    name_bar.style.transform = "translateY(0px)";
    name_bar.style.boxShadow = "0px 0px 0px white";
    name_bar.style.borderColor = "#878787";
}

const dob_bar = document.getElementsByClassName("dob-bar")[0];
const dob_input = document.getElementsByClassName("dob-input")[0];

dob_input.onclick = function(){
    dob_bar.style.transform = "translateY(-2px)";
    dob_bar.style.boxShadow = "0px 4px 8px rgb(184, 236, 252)";
}

dob_input.onblur = function(){
    dob_bar.style.transform = "translateY(0px)";
    dob_bar.style.boxShadow = "0px 0px 0px white";
    dob_bar.style.borderColor = "#878787";
}

function BackToLand(){
    window.location.href = 'index.html';
}


function Switch(event){
    var email = document.getElementById("email_").value;
    var pass = document.getElementById("password_").value;
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const nameError = document.getElementById("name-error");
    const dobError = document.getElementById("dob-error");

    if(name == "")
    {
        name_bar.style.borderColor = "red";
        nameError.innerHTML = "Please enter your username";
        nameError.style.display = "block";
    }
    else if(email == ""){
        email_bar.style.borderColor = "red";
        emailError.innerHTML = "Please enter your email";
        emailError.style.display = "block";
        nameError.style.display = "none";
    }
    else if(!email.endsWith('@gmail.com'))
    {
        email_bar.style.borderColor = "red";
        emailError.innerHTML = "Invalid email address";
        emailError.style.display = "block";
    }
    else if(!dob){
        dob_bar.style.borderColor = "red";
        dobError.innerHTML = "Please enter date of birth";
        dobError.style.display = "block";
        emailError.style.display = "none";
    }
    else if(pass.length < 8){
        password_bar.style.borderColor = "red";
        passwordError.innerHTML = "Password minimum required length is eight";
        passwordError.style.display = "block";
        dobError.style.display = "none";
    }
    else
    {
        localStorage.setItem('username',name);
        localStorage.setItem('email',email);
        window.location.href = 'Travel-Website-Home.html';
    }
};
