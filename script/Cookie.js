function setCookie(key, value, exp) {
    console.log(key)
    console.log(value)
    console.log(exp.getDate())
    console.log((new Date()).getDate())
    if (key != "" && value != "") {
        document.cookie = key + "=" + value + ";expires=" + exp.toUTCString();
        return true;
    } else {
        var error = new Error("cookie data was not in the correct format");
        throw error;
    }
}

function deleteCookie(key) {
    var cookieList = allCookies();
    if (cookieList[key]) {
        var exDate = new Date();
        exDate.setDate(exDate.getDate() - 1);
        document.cookie = key + "=;expires=" + exDate.toUTCString();
    } else {
        var error = new Error("Key not exists")
        throw error;
    }
}

function allCookies() {
    if (document.cookie != '') {
        var result = {};
        var arr = document.cookie.split("; ");
        for (var item of arr) {
            var kv = item.split("="); //username=iti
            //kv = ["username","iti"]
            result[kv[0]] = kv[1];
        }
        return result;
    } else {
        var error = new Error("cookie is empty");
        throw error;
    }
}

function getCookie(key) {
    var cookieList = allCookies();
    if (cookieList[key]) {
        return cookieList[key];
    } else {
        var error = new Error("Key not exists")
        throw error;
    }
}

export { setCookie, deleteCookie, getCookie }