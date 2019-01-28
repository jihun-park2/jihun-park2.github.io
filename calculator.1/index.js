var numberbtnelements = document.querySelectorAll('.btn-color-white');
var expressionelement = document.querySelector('.expression');
var cancelelement = document.querySelector('.btn-cancel');
var addelement = document.querySelector('.btn-add');
var subelement = document.querySelector('.btn-sub');
var multielement = document.querySelector('.btn-multi');
var divelement = document.querySelector('.btn-div');
var deleteelement = document.querySelector('.btn-del');
var dotelement = document.querySelector('.btn-dot');
var openelement = document.querySelector('.btn-open');
var closeelement = document.querySelector('.btn-close');
var euqalelement = document.querySelector('.btn-equal');
var resultelement = document.querySelector('.result');

var evaluated = false;


// refresh
function refreshall() {
    if (evaluated == true) {
        expressionelement.innerHTML = "";
        resultelement.innerHTML = "";
        evaluated = false;
    }
}

// number
for(var i=0; i < numberbtnelements.length; i++) {
    numberbtnelements[i].addEventListener("click", handlenumberbtnclick);
}

function handlenumberbtnclick() {
    refreshall();
    var number = event.target.innerHTML;
    console.log(number);
    expressionelement.innerHTML = expressionelement.innerHTML + number;
}
//cancel
cancelelement.addEventListener("click", handlecancelbtnclick);

function handlecancelbtnclick() {
    expressionelement.innerHTML = "";
    resultelement.innerHTML = "";
    evaluated = false;
}

//add
addelement.addEventListener("click", handleaddkey);

function handleaddkey() {
    refreshall();
    var addelement = event.target.innerHTML;
    expressionelement.innerHTML = expressionelement.innerHTML + "+";
}

// sub
subelement.addEventListener("click", handlesubkey);

function handlesubkey() {
    refreshall();
    var subelement = event.target.innerHTML;
    expressionelement.innerHTML = expressionelement.innerHTML + "-";
}

//multi
multielement.addEventListener("click", handlemultikey);

function handlemultikey() {
    refreshall();
    var multielement = event.target.innerHTML;
    expressionelement.innerHTML = expressionelement.innerHTML + "×";
}

//div
divelement.addEventListener("click", handledivkey);

function handledivkey() {
    refreshall();
    var divelement = event.target.innerHTML;
    expressionelement.innerHTML = expressionelement.innerHTML + "÷";
}

//dot
dotelement.addEventListener("click", handledotkey);

function handledotkey() {
    refreshall();
    var dotelement = event.target.innerHTML;
    expressionelement.innerHTML = expressionelement.innerHTML + ".";
}

//delete
deleteelement.addEventListener("click", handledelkey);

function handledelkey() {
    refreshall();
    expressionelement.innerHTML = expressionelement.innerHTML.slice(0, -1);
}

//bracket
openelement.addEventListener("click", handleopenkey);
closeelement.addEventListener("click", handleclosekey);

function handleopenkey() {
    refreshall();
    var openelement = event.target.innerHTML;
    expressionelement.innerHTML = expressionelement.innerHTML + "(";
}

function handleclosekey() {
    refreshall();
    var closeelement = event.target.innerHTML;
    expressionelement.innerHTML = expressionelement.innerHTML + ")";
}

//equal
euqalelement.addEventListener("click", handleequalkey);

function handleequalkey() {
    var expression = expressionelement.innerHTML;
    expression = expression.replace(/×/g, "*");
    expression = expression.replace(/÷/g, "/");

    try {
        var result = eval(expression);
        resultelement.innerHTML = result;
        evaluated = true;
    } catch(error) {
        resultelement.innerHTML = "SYntax Error";
        evaluated = true;
    }
}

