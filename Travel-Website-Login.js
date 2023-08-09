

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

function BackToLand(){
    window.location.href = 'index.html';
}


function Switch(){
    var email = document.getElementById("email_").value;
    var pass = document.getElementById("password_").value;
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    if(email == ""){
        email_bar.style.borderColor = "red";
        emailError.innerHTML = "Please enter your email";
        emailError.style.display = "block";
    }
    else if(!email.endsWith('@gmail.com'))
    {
        email_bar.style.borderColor = "red";
        emailError.innerHTML = "Invalid email address";
        emailError.style.display = "block";

    }
    else if(pass.length < 8){
        password_bar.style.borderColor = "red";
        passwordError.innerHTML = "Password minimum required length is eight";
        passwordError.style.display = "block";
        emailError.style.display = "none";
    }
    else
    {
        window.location.href = 'Travel-Website-Home.html';
    }
};
