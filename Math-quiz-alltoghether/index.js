var addQelement = document.querySelector('.question-addtion');
var subQelement = document.querySelector('.question-subtract');
var multiQelement = document.querySelector('.question-multiplication');
var divQelement = document.querySelector('.question-division');

// question generator functions: addtion, subtract, multiplication and division

var questions = [];
var answers = {};

function createquestion(type) {
    var random1 = Math.ceil(Math.random() * 9);
    var random2 = Math.ceil(Math.random() * 9);

    if(type === "addition") {
        createaddquestion(random1, random2);
    } else if (type === "subtraction") {
        createsubquestion(random1, random2);
    } else if (type === "multiplication") {
        createmultiquestion(random1, random2);
    } else if (type === "division") {
        createdivquestion(random1, random2);
    }
}

function createaddquestion(num1, num2) {
      questions[0] = `${num1} + ${num2} =`;
      answers["addition"] = num1 + num2;
      addQelement.innerHTML = questions[0];
}

function createsubquestion(num1, num2) {
    var bignumber, smallnumber;
    if (num1 >= num2) {
      bignumber = num1;
      smallnumber = num2;
    } else {
        bignumber = num2
        smallnumber = num1
    }
    questions[1] = `${bignumber} - ${smallnumber} = `;
    answers["subtraction"] = bignumber - smallnumber;
    subQelement.innerHTML = questions[1];
}

function createmultiquestion(num1, num2) {
    questions[2] = `${num1} × ${num2} = `;
    answers["multiplication"] = num1 * num2;
    multiQelement.innerHTML = questions[2];
}

function createdivquestion(num1, num2) {
    var dividend, quotient, divisor;
    dividend = num1 * num2;
    divisor = num2;
    quotient = num1;
    questions[3] =  `${dividend} ÷ ${divisor} = `;
    answers["division"] = dividend / divisor;
    divQelement.innerHTML = questions[3];
}

var addinputelement = document.querySelector('.addinput');
var subinputelemnet = document.querySelector('.subinput');
var multiinputelemnet = document.querySelector('.multiinput');
var divinputelement = document.querySelector('.divinput');

addinputelement.addEventListener("keyup", handleenterkey);
subinputelemnet.addEventListener("keyup", handleenterkey);
multiinputelemnet.addEventListener("keyup", handleenterkey);
divinputelement.addEventListener("keyup", handleenterkey);

function handleenterkey() {
    if(event.code === "Enter") {
        var targetinputelement = event.target;
        var useranswer = targetinputelement.value;
        var questionType = targetinputelement.dataset.questionType;
        if(useranswer == answers[questionType]) {
            alert("That's right, well done!!");
            createquestion(questionType);
            targetinputelement.value = "";
        } else {
            alert("Wrong Idiot");
        }
    }
}
createquestion("addition");
createquestion("subtraction");
createquestion("multiplication");
createquestion("division");
