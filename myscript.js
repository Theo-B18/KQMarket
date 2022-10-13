function contNum() {
    let num = document.getElementById("badge");
    num.innerText++;
    num.style.display = 'block';
    num.style.color = 'red';

};

function searchBtn() {
    let fullname = document.getElementById("fullname").value;
    let password = document.getElementById("password").value;
    let success = document.getElementById("success");
    let notify = document.getElementById("notify");
    success.style.display = "block";
    notify.style.display = "block";


    if (fullname == "" && password == "") {

        success.style.display = "none";
        notify.style.display = "none";
        alert('Please insert your email and password to get subscription');
    } else {
        notify.innerText = 1;
    }

};


// FOR USER ACCPUNT


let userAcct = new Object();
// FIRST USER
userAcct.username = 'john';
userAcct.password = 1234;
// SECOND USER
userAcct.username2 = 'peter';
userAcct.password2 = 9090;
// THIRD USER
userAcct.username3 = 'aaron';
userAcct.password3 = 1121;
// FOURTH USER
userAcct.username4 = 'mary';
userAcct.password4 = 8769;
// FITH USER
userAcct.username5 = 'pooja';
userAcct.password5 = 0000;
// SIX USER
userAcct.username6 = 'ganesh';
userAcct.password6 = 9944;

function userName() {
    let wlc = document.querySelector(".myclass-welcome");
    let welcome = document.querySelector("#myclass-welcome");
    let allUser = document.getElementById("users").value;
    let allpwd = document.getElementById("pwds").value;
    let mainuser = document.getElementById("ownername");
    if (allUser == userAcct.username && allpwd == userAcct.password) {
        let givename = userAcct.username.toUpperCase();
        mainuser.textContent = givename;
        wlc.style.display = 'block';
    } else if (allUser == userAcct.username2 && allpwd == userAcct.password2) {
        let givename = userAcct.username2.toUpperCase();
        mainuser.textContent = givename;
        wlc.style.display = 'block';
    } else if (allUser == userAcct.username3 && allpwd == userAcct.password3) {
        let givename = userAcct.username3.toUpperCase();
        mainuser.textContent = givename;
        wlc.style.display = 'block';
    } else if (allUser == userAcct.username4 && allpwd == userAcct.password4) {
        let givename = userAcct.username4.toUpperCase();
        mainuser.textContent = givename;
        wlc.style.display = 'block';
    } else if (allUser == userAcct.username5 && allpwd == userAcct.password5) {
        let givename = userAcct.username5.toUpperCase();
        mainuser.textContent = givename;
        wlc.style.display = 'block';
    } else if (allUser == userAcct.username6 && allpwd == userAcct.password6) {
        let givename = userAcct.username6.toUpperCase();
        mainuser.textContent = givename;
        wlc.style.display = 'block';
    } else {
        mainuser.textContent = "The email and password does not match!!!";
        wlc.style.display = 'block';
        mainuser.style.color = 'red';
        welcome.style.display = 'none';
    };
};


// ARRAY FOR SEARCH BOX

var search = ['trousers', 'sneaker', 'toys', 'tshirt', 'men jeans', 'lady jeans', 'dress', 'blouse', 'coat', 'game', 'hoodie', 'jackets', 'men coat', 'lady coat', 'kids t-shirt', 'kids suit'];

function searchItems() {

    let checkItems = document.getElementById("search").value;
    checkItems = checkItems.toLowerCase();

    for (i = 0; i < search.length; i++) {
        if (search[i] == checkItems && checkItems == 'toys' || checkItems == 'game') {
            location.href = "toys.html";

        } else if (search[i] == checkItems && checkItems == 'dress' || checkItems == 'dresses') {
            location.href = "dress.html";

        } else if (search[i] == checkItems && checkItems == 'tshirt' || checkItems == 't-shirt') {
            location.href = "tshirt.html";

        } else if (search[i] == checkItems && checkItems == 'sneaker' || checkItems == 'sneakers') {
            location.href = "sneaker.html";

        } else if (search[i] == checkItems && checkItems == 'hoodie' || checkItems == 'hoodies') {
            location.href = "hoody.html";

        } else if (search[i] == checkItems && checkItems == 'jackets' || checkItems == 'jacket') {
            location.href = "jacket.html";

        } else if (search[i] == checkItems && checkItems == 'blouse' || checkItems == 'blouse') {
            location.href = "blouse.html";

        } else if (search[i] == checkItems && checkItems == 'men jeans' || checkItems == 'men jeans') {
            location.href = "mjeans.html";

        } else if (search[i] == checkItems && checkItems == 'lady jeans' || checkItems == 'jeans') {
            location.href = "ljeans.html";

        } else if (search[i] == checkItems && checkItems == 'men coat' || checkItems == 'blazer' || checkItems == 'coat') {
            location.href = "mcoat.html";

        } else if (search[i] == checkItems && checkItems == 'lady coat' || checkItems == 'ladies coat') {
            location.href = "fcoat.html";

        } else if (search[i] == checkItems && checkItems == 'kids t-shirt' || checkItems == 'kids tshirt' || checkItems == 'kids blouse' || checkItems == 'girls blouse') {
            location.href = "c-tshirt.html";

        } else if (search[i] == checkItems && checkItems == 'kids suit' || checkItems == 'girls suit' || checkItems == 'boys suit' || checkItems == 'children suit' || checkItems == 'kids outfit' || checkItems == 'children outfit') {
            location.href = "k-outfit.html";

        }


    };

};


// DECLARING VARIABLES FOR ALL INPUT & TEXT AREA

let clientname = document.getElementById("fullname");
let getId = document.getElementById("reg-id");
let instruct = document.getElementById("instruct");

// INPUT VALUES

// let firstname = document.getElementById("first-name").value;

let getmobilenum1 = document.getElementById("mobile-number").value;
let getmobilenum2 = document.getElementById("alt-number").value;
let getpwd1 = document.getElementById("pwd1").value;
let getpwd2 = document.getElementById("pwd2").value;



let fnmsg = document.getElementById("f-name-alert");
let mnmsg = document.getElementById("m-name-alert");
let lnmsg = document.getElementById("l-name-alert");
let pwdalert = document.getElementById("password-alert");


// FOR THE FORM BUTTON (VALIDATION AND GETING AND DISPLAYING VALUES)


function regbtn() {
    let clientname = document.getElementById("fullname");
    let getId = document.getElementById("reg-id");
    let container = document.querySelector(".container-id")



    let firstname = document.getElementById("first-name").value;
    let lastname = document.getElementById("last-name").value;
    let middlename = document.getElementById("middle-name").value;

    // VALIDATION AND ALERT
    let mnmsg = document.getElementById("m-name-alert");
    let lnmsg = document.getElementById("l-name-alert");
    let fnmsg = document.getElementById("f-name-alert");
    if (firstname == '') {
        fnmsg.style.display = 'block';

    }
    if (lastname == '') {
        lnmsg.style.display = 'block';

    }
    if (middlename == '') {
        mnmsg.style.display = 'block';


    } else {
        clientname.innerText = firstname.toUpperCase() + " " + lastname.toUpperCase();
        getId.innerText = Math.floor(Math.random() * 13045);
        container.style.display = 'block';



    };

    // CHECK FOR PASSWORD MATCHING
    let getpwd1 = document.getElementById("pwd1").value;
    let getpwd2 = document.getElementById("pwd2").value;
    let pwdalert = document.getElementById("password-alert");
    if (getpwd1 !== getpwd2) {
        pwdalert.style.display = 'block';

    }
    if (getpwd1 == '' || getpwd2 == '') {
        pwdalert.innerText = 'One of the Password field is empty!';
        pwdalert.style.display = 'block';


    }




}