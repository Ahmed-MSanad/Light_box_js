var cards = document.querySelectorAll('.container .row .item');
var overlay = document.querySelector('.overlay');
var closeBtn = document.querySelector('#closeBtn');
var rightArrow = document.querySelector('#rightImage');
var leftArrow = document.querySelector('#leftImage');

var currentCard;

for(var i = 0 ; i < cards.length ; i++){
    cards[i].addEventListener('click',function(e){
        currentCard = this;
        overlay.children[0].children[0].setAttribute('src',
            this.children[0].children[0].getAttribute('src'));

        overlay.children[0].children[0].setAttribute('alt',
            this.children[0].children[0].getAttribute('alt'));

        overlay.classList.remove('d-none');
    });
}



closeBtn.addEventListener('click',function(e){
    overlay.classList.add('d-none');
    e.stopPropagation();
});
overlay.addEventListener('click',function(e){
    e.stopPropagation();
    overlay.classList.add('d-none');
});
overlay.children[0].addEventListener('click',function(e){
    e.stopPropagation();
    overlay.classList.remove('d-none');
});



leftArrow.addEventListener('click',function(e){
    e.stopPropagation();
    if(currentCard == cards[0]){
        currentCard = cards[cards.length-1];
    }
    else {currentCard = currentCard.previousElementSibling;}

    overlay.children[0].children[0].setAttribute('src',
        currentCard.children[0].children[0].getAttribute('src'));

    overlay.children[0].children[0].setAttribute('alt',
        currentCard.children[0].children[0].getAttribute('alt'));
});



rightArrow.addEventListener('click',function(e){
    e.stopPropagation();
    if(currentCard == cards[cards.length-1]){
        currentCard = cards[0];
    }
    else {currentCard = currentCard.nextElementSibling;}

    overlay.children[0].children[0].setAttribute('src',
        currentCard.children[0].children[0].getAttribute('src'));

    overlay.children[0].children[0].setAttribute('alt',
        currentCard.children[0].children[0].getAttribute('alt'));
});

