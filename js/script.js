const idArray = [1];
let newId;

const posts = [
    // {
    //     id: 1,
    //     "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
    //     "media": "https://unsplash.it/600/300?image=171",
    //     "author": {
    //         "name": "Phil Mangione",
    //         "image": "https://unsplash.it/300/300?image=15"
    //     },
    //     likes: 80,
    //     "created": "2021-06-25"
    // },
    {
        id: 1,
        content: 'Hanno rubato un tir pieno di lampadine. La polizia brancola nel buio.',
        media: "https://unsplash.it/600/300?image=171",
        author: {
            name: 'Commisario Rex',
            image: "https://unsplash.it/300/300?image=15"
        },
        likes: 67,
        created: '2021-05-13'
    },
    {
        id: 2,
        content: 'Due cose sono infinite: l’universo e la stupidità umana, ma non sono sicuro dell’universo.',
        media: "https://unsplash.it/600/300?image=151",
        author: {
            name: 'Albert Einstein',
            image: "https://unsplash.it/300/300?image=14"
        },
        likes: 2,
        created: '2022-01-03'
    },
    {
        id: 3,
        content: 'La banana alla papaya: “Conosci un buon avocado?”',
        media: "https://unsplash.it/600/300?image=153",
        author: {
            name: 'Kevin Minion',
            image: "https://unsplash.it/300/300?image=111"
        },
        likes: 12,
        created: '2021-04-08'
    },
    {
        id: 4,
        content: 'Soltanto l’inutilità del primo diluvio trattiene Dio dal mandarne un secondo.',
        media: "https://unsplash.it/600/300?image=371",
        author: {
            name: 'Sébastien-Roch Nicolas de Chamfort',
            image: "https://unsplash.it/300/300?image=55"
        },
        likes: 56,
        created: '2022-01-20'
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