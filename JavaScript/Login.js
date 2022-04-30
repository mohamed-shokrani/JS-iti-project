import { emailValidate, passwordValidate } from './Validate.js';
import { setCookie, getCookie } from './Cookie.js';
document.getElementById("useremail").onkeyup = function() {
    try {
        emailValidate(this.value);
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = "";

    } catch (e) {
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}

document.getElementById("password").onkeyup = function() {
    try {
        passwordValidate(this.value);
        this.classList.remove("is-invalid");
        this.nextElementSibling.innerText = "";

    } catch (e) {
        this.classList.add("is-invalid");
        this.nextElementSibling.innerText = e.message;
    }
}


// validate each input before submit
document.forms[0].onsubmit = function(eve) {

    var email = document.getElementById("useremail").value;
    var password = document.getElementById("password").value;


    try {

        passwordValidate(password);
        emailValidate(email);

        //create cookie with user data
        var date = new Date();
        date.setDate(date.getDate() + 10);
        console.log(document.cookie)
        var em = getCookie("email")
        var pass = getCookie("password");
        if (em != email || pass != password) {
            var error = new Error("Data not Correct");
            throw error;
        }
        date.setDate(date.getDate() + 10);

        setCookie("isLogin", 'true', date);

    } catch (e) {
        eve.preventDefault();
        window.alert(e.message);

    }
}