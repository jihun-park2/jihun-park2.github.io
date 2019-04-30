var cardDivs = document.querySelectorAll('.card');
var levelOneContainer = document.querySelector('.level-1');
var levelTwoContainer = document.querySelector('.level-2');
var levelThreecontainer = document.querySelector('.level-3');


var level = 1;
var levelOneScore = 0;
var levelTwoScore = 0;


for(var i = 0; i < cardDivs.length; i++) {
    cardDivs[i].addEventListener('click', handlecardclick);
}

var clickedcardDivs = [];

function handlecardclick() {
    var clickedcard = event.target;
 
    if (clickedcard.tagName == "DIV" && clickedcardDivs.length != 2) {
       clickedcard.classList.remove('unselected');
       clickedcardDivs.push(clickedcard);
       console.log(clickedcardDivs);
    } else if (clickedcard.tagName == "IMG") {
        alert("Do not click a card twice");
    }


    if(clickedcardDivs.length == 2) {
        var firstimage = clickedcardDivs[0].firstElementChild;
        var secondimage = clickedcardDivs[1].firstElementChild;
        console.log(firstimage.id);
        console.log(secondimage.id);
    
        if(firstimage.id == secondimage.id) {
            console.log("Great");
            clickedcardDivs = [];

            if (level == 1) {
                levelOneScore++;
                levelTwoScore++;

            if (levelOneScore == 8) {
                alert('level up')
                levelOneContainer.style.display = "none";
                levelTwoContainer.style.display = "grid";
            }
            if (levelTwoScore == 18) {
                alert('Gineus, level up')
                levelTwoContainer.style.display = "none";
                levelThreecontainer.style.display = "grid";
            }
        }
        } else {
            setTimeout(flipover, 1500);
        }
    }
    
}

function flipover() {
    if (clickedcardDivs.length == 2) {
        clickedcardDivs[0].classList.add('unselected');
        clickedcardDivs[1].classList.add('unselected');

        clickedcardDivs = [];
    }   
}