var cardDivs = document.querySelectorAll('.card');

for(var i = 0; i < cardDivs.length; i++) {
    cardDivs[i].addEventListener('click', handlecardclick);
}

var clickedcardDivs = [];

function handlecardclick() {
    var clickedcard = event.target;
    clickedcard.classList.remove('unselected');
    clickedcardDivs.push(clickedcard);
    console.log(clickedcardDivs)
    if(clickedcardDivs.length == 2) {
        var firstimage = clickedcardDivs[0].firstElementChild;
        var secondimage = clickedcardDivs[1].firstElementChild;
        console.log(firstimage.id);
        console.log(secondimage.id);
    
        if(firstimage.id == secondimage.id) {
            console.log("good");
        } else {
            clickedcardDivs[0].classList.add('unselected');
            clickedcardDivs[1].classList.add('unselected');
        }
        clickedcardDivs = [];
    }
    
}
