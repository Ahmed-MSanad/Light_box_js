const cards = document.querySelectorAll('.container .row .item');
const lightBox = document.querySelector('.lightBox');
const closeBtn = document.querySelector('#closeBtn');
const rightArrow = document.querySelector('#rightImage');
const leftArrow = document.querySelector('#leftImage');

let currentCard;

for(let i = 0 ; i < cards.length ; i++){
    cards[i].addEventListener('click',function(e){
        currentCard = i;
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
let scale = 1.5;
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
        if(currentCard == 0){
            currentCard = cards.length-1;
        }
        else {currentCard--;}
    }
    else{ // to right
        if(currentCard == cards.length-1){
            currentCard = 0;
        }
        else {currentCard++;}
    }
    lightBox.children[0].setAttribute('src',
        cards[currentCard].children[0].children[0].getAttribute('src'));

    lightBox.children[0].setAttribute('alt',
        cards[currentCard].children[0].children[0].getAttribute('alt'));
}