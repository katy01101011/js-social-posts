const postsContainer = document.getElementById('container');
let newId = 0;
let clicked = false;
let aLikeButton;

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
        id: `${newId++}`,
        content: 'Hanno rubato un tir pieno di lampadine. La polizia brancola nel buio.',
        media: 'https://unsplash.it/600/300?image=171',
        author: {
            name: 'Commisario Rex',
            image: 'https://unsplash.it/300/300?image=15'
        },
        likes: 67,
        created: '2021-05-13'
    },
    {
        id: 2,
        content: 'Due cose sono infinite: l’universo e la stupidità umana, ma non sono sicuro dell’universo.',
        media: 'https://unsplash.it/600/300?image=151',
        author: {
            name: 'Albert Einstein',
            image: 'https://unsplash.it/300/300?image=14'
        },
        likes: 2,
        created: '2022-01-03'
    },
    {
        id: 3,
        content: 'La banana alla papaya: “Conosci un buon avocado?”',
        media: '',
        author: {
            name: 'Kevin Minion',
            image: 'https://unsplash.it/300/300?image=111'
        },
        likes: 12,
        created: '2021-04-08'
    },
    {
        id: 4,
        content: 'Soltanto l’inutilità del primo diluvio trattiene Dio dal mandarne un secondo.',
        media: 'https://unsplash.it/600/300?image=371',
        author: {
            name: 'Sébastien-Roch Nicolas de Chamfort',
            image: 'https://unsplash.it/300/300?image=55'
        },
        likes: 56,
        created: '2022-01-20'
    },
];
// console.log(posts);

// const args = [...args];
// console.log(args);


// for (let key in posts) {
//     const {id, content, media, author, likes, created} = key;
//     console.log(id);
// }

posts.forEach(function() {



// Creo il post
const divPost = newDomElement('div', 'post', postsContainer);
// console.log(postsContainer);
const divPostHeader = newDomElement('div', 'post__header', divPost);
const divPostMeta = newDomElement('div', 'post-meta', divPostHeader);
const divPostMetaIcon = newDomElement('div', 'post-meta__icon', divPostMeta);
divPostMetaIcon.innerHTML = `<img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">`;
const divPostMetaData = newDomElement('div', 'post-meta__data', divPostMeta);
const divPostMetaAuthor = newDomElement('div', 'post-meta__author', divPostMetaData);
divPostMetaAuthor.innerHTML = 'Phil Mangione'
const divPostMetaTime = newDomElement('div', 'post-meta__time', divPostMetaData);
divPostMetaTime.innerHTML = '4 mesi fa'
const divPostText = newDomElement('div', 'post__text', divPost);
divPostText.innerHTML = 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.'
const divPostImage = newDomElement('div', 'post__image', divPost);
divPostImage.innerHTML = `<img src="https://unsplash.it/600/300?image=171" alt="">`
const divPostFooter = newDomElement('div', 'post__footer', divPost);
const divLikes = newDomElement('div', 'likes', divPostFooter);
divLikes.classList.add('js-likes');
const divLikesCta = newDomElement('div', 'likes__cta', divLikes);
aLikeButton = newDomElement('a', 'like-button', divLikesCta);
aLikeButton.classList.add('js-like-button');
aLikeButton.href = '#';
aLikeButton.setAttribute('data-postid', `${newId++}`);
const iLikeButton = newDomElement('i', 'like-button__icon', aLikeButton);
iLikeButton.classList.add('fas', 'fa-thumbs-up');
iLikeButton.setAttribute('aria-hidden', 'true');
const spanLikeButton = newDomElement('span', 'like-button__label', aLikeButton);
spanLikeButton.innerHTML = ' Mi Piace';
const divLikesCounter = newDomElement('div', 'likes__counter', divLikes);
divLikesCounter.innerHTML = 'Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone'

// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore d
// l testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

aLikeButton.addEventListener('click', function(){
    clicked = true;
    return clicked;
})

});

if (clicked = true) {
    aLikeButton.style.color = 'blue';
}

/*

* <div class="post">
    * <div class="post__header">
        * <div class="post-meta">                    
            * <div class="post-meta__icon">
                * <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
            * </div>
            * <div class="post-meta__data">
                * <div class="post-meta__author">Phil Mangione</div>
                * <div class="post-meta__time">4 mesi fa</div>
            * </div>                    
        * </div>
    * </div>
    * <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    * <div class="post__image">
        * <img src="https://unsplash.it/600/300?image=171" alt="">
    * </div>
    * <div class="post__footer">
        * <div class="likes js-likes">
            * <div class="likes__cta">
                * <a class="like-button  js-like-button" href="#" data-postid="1">
                    * <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    * <span class="like-button__label">Mi Piace</span>
                * </a>
            * </div>
            *<div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
            * </div>
        * </div> 
    * </div>            
* </div>

*/

// Creo un elemento nel dom con la sua classe
function newDomElement(tagName, className, whereAppend) {
    const newElement = document.createElement(tagName);
    newElement.classList.add(className);
    whereAppend.append(newElement)
    return newElement
}

/**
 * Description // Genera un numero random
 * @returns {any}
 */
function randomNumber() {
    const newRandomNumber = Math.floor(Math.random() * 100);
    return newRandomNumber
}