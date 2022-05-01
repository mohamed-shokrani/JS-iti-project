//library

//user name function
function fullNameValidate(name) {

    var regx = new RegExp(/^[A-Za-z0-9_-]{3,16}$/);
    if (regx.test(name)) {

        return true;
    } else {
        var error = new Error("name isnt in the correct format");
        throw error;
    }
}

//email function
function emailValidate(email) {

    var regx = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regx.test(email)) {

        return true;
    } else {
        var error = new Error("email isnt in the correct format");
        throw error;
    }
}
// phone function
function phoneValidate(phone) {

    var regx = new RegExp(/^(010|011|012|015)[0-9]{8}$/);
    if (regx.test(phone)) {

        return true;
    } else {
        var error = new Error("phone isnt in the correct format");
        throw error;
    }
}

// password function
function passwordValidate(password) {

    var regx = new RegExp(/^[A-Z]*[_\-$&\.@]*[a-z]*[0-9]*.{4,10}$/);
    if (regx.test(password)) {

        return true;
    } else {
        var error = new Error("password isnt in the correct format");
        throw error;
    }
}

export { fullNameValidate, emailValidate, phoneValidate, passwordValidate };