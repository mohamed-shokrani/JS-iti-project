 //import module
 import { fullNameValidate, emailValidate, passwordValidate, phoneValidate } from './Validate.js';
 import { setCookie } from './Cookie.js';

 document.getElementById("fname").onkeyup = function() {
     try {
         fullNameValidate(this.value);
         this.classList.remove("is-invalid");
         this.nextElementSibling.innerText = "";

     } catch (e) {
         this.classList.add("is-invalid");
         this.nextElementSibling.innerText = e.message;
     }
 }

 document.getElementById("lname").onkeyup = function() {
     try {
         fullNameValidate(this.value);
         this.classList.remove("is-invalid");
         this.nextElementSibling.innerText = "";

     } catch (e) {
         this.classList.add("is-invalid");
         this.nextElementSibling.innerText = e.message;
     }
 }

 document.getElementById("userphone").onkeyup = function() {
     try {
         phoneValidate(this.value);
         this.classList.remove("is-invalid");
         this.nextElementSibling.innerText = "";

     } catch (e) {
         this.classList.add("is-invalid");
         this.nextElementSibling.innerText = e.message;
     }
 }

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

 document.getElementById("repassword").onkeyup = function() {
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
     var fname = document.getElementById("fname").value;
     var lname = document.getElementById("lname").value;
     var email = document.getElementById("useremail").value;
     var phone = document.getElementById("userphone").value;
     var password = document.getElementById("password").value;
     var repassword = document.getElementById("repassword").value;


     try {
         if (password != repassword) {
             var error = new Error("Password should be the same repate password");
             throw error;
         }
         fullNameValidate(fname);
         fullNameValidate(lname);
         passwordValidate(password);
         passwordValidate(repassword);
         phoneValidate(phone);
         emailValidate(email);

         //create cookie with user data
         var date = new Date();
         date.setDate(date.getDate() + 10);
         setCookie("email", email, date);
         setCookie("password", password, date);
         setCookie("fname", fname, date);
         setCookie("isLogin", 'true', date);
         localStorage.clear()
     } catch (e) {
         eve.preventDefault();
         window.alert(e.message);

     }
 }