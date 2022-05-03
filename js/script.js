const idArray = [1];
let newId;

const posts = [
    {
        id: 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        likes: 80,
        "created": "2021-06-25"
    },
];
console.log(posts);


/** // Controllo se nell'array c'è già il numero, se c'è, genero un numero incrementato di 1 e lo pusho nell'array degli id
 * Description
 * @param {Number} currentNumber // Numero da controllare
 * @param {Array} numberArray // Array da controllare
 * @returns {Number}   // Numero incrementato di uno a push del nuovo numero nell'array
 */
function nextNumberPush(currentNumber, numberArray) {
    if (numberArray.includes(currentNumber)) {
        currentNumber++;
        numberArray.push(currentNumber)
    }
    return currentNumber
}

/**
 * Description // Genera un numero random
 * @returns {any}
 */
function randomNumber() {
    const newRandomNumber = Math.floor(Math.random() * 100);
    return newRandomNumber
}

'ciao'


/*

<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">Phil Mangione</div>
                <div class="post-meta__time">4 mesi fa</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src="https://unsplash.it/600/300?image=171" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
            </div>
        </div> 
    </div>            
</div>

*/