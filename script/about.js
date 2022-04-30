var keys = Object.keys(localStorage);

var i = keys.length;
let countEl = document.getElementById("lblCartCount")

countEl.innerHTML = i;

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
//display the date in div
import { deleteCookie, setCookie, getCookie } from './Cookie.js';

var c = document.cookie;

var allcook = c.split('; ')

var all = {};
for (let item of allcook) {
    var fn = item.split('=')
    all[fn[0]] = fn[1];
    console.log(fn)
}

if (all['isLogin'] == "true") {
    document.getElementById('log').style.display = 'none'
    document.getElementById('signupp').style.display = 'none'
    document.getElementById('us_name').style.display = 'block'
    document.getElementById('logout').style.display = 'block'
    document.getElementById('i_cart').style.display = 'block'
    document.getElementById('a_name').innerHTML = all['fname']
} else {
    document.getElementById('log').style.display = 'block'
    document.getElementById('signupp').style.display = 'block'
    document.getElementById('us_name').style.display = 'none'
    document.getElementById('logout').style.display = 'none'
    document.getElementById('i_cart').style.display = 'none'
}
document.getElementById('log1').onclick = function() {

    var date = new Date();
    date.setDate(date.getDate() + 10);


    setCookie("isLogin", 'false', date);
    location.replace('login.html')

}
document.getElementById('ab').classList.add('active')