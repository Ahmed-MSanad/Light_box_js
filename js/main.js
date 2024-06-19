var cards = document.querySelectorAll('.container .row .item');
var lightBox = document.querySelector('.lightBox');
var closeBtn = document.querySelector('#closeBtn');
var rightArrow = document.querySelector('#rightImage');
var leftArrow = document.querySelector('#leftImage');

var currentCard;

for(var i = 0 ; i < cards.length ; i++){
    cards[i].addEventListener('click',function(e){
        currentCard = this; // => return the whole div because of the event bubbling
        // currentCard = e.target; // => return the image itself which is the element clicked // BUT to work with it then we need to search image index which is poor for the performance compared to the current solution
        lightBox.children[0].setAttribute('src',
            this.children[0].children[0].getAttribute('src'));

        lightBox.children[0].setAttribute('alt',
            this.children[0].children[0].getAttribute('alt'));

        lightBox.parentElement.classList.replace('d-none','d-flex');
    });
}



closeBtn.addEventListener('click',function(e){
    lightBox.parentElement.classList.replace('d-flex','d-none');
});
lightBox.parentElement.addEventListener('click',function(e){
    lightBox.parentElement.classList.replace('d-flex','d-none');
});
lightBox.addEventListener('click',function(e){
    e.stopPropagation();
});
var scale = 1.5;
lightBox.children[0].addEventListener('dblclick',function(e){
    lightBox.style.transform = `scale(${scale})`;
    scale = (scale === 1 ? 1.5 : 1);
});


leftArrow.addEventListener('click',function(e){
    slide(-1);
});


rightArrow.addEventListener('click',function(e){
    slide(1);
});

function slide(step){
    if(step == -1){ // to left
        if(currentCard == cards[0]){
            currentCard = cards[cards.length-1];
        }
        else {currentCard = currentCard.previousElementSibling;}
    }
    else{ // to right
        if(currentCard == cards[cards.length-1]){
            currentCard = cards[0];
        }
        else {currentCard = currentCard.nextElementSibling;}
    }
    lightBox.children[0].setAttribute('src',
        currentCard.children[0].children[0].getAttribute('src'));

    lightBox.children[0].setAttribute('alt',
        currentCard.children[0].children[0].getAttribute('alt'));
}