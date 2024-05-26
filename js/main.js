`use strict`

// definisco variabili per selezzionare i tag HTML
const itemsContainer = document.querySelector('.items');
const thumbsContainer = document.querySelector('.thumbs');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

//definisco un avribaile per un array (images)
const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100-player face-off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// definisco una variabile (currentIndex)
let currentIndex = 0;

// Aggiungo elementi al html 
images.forEach((image, index) => {
        const item = document.createElement('div');
        item.classList.add('item', `active`);
        item.innerHTML = `
            <img src="${image.image}">
            <div class="square"> 
                <h3>${image.title}</h3>
                <p>${image.text}</p>
            </div>
        `;
        itemsContainer.appendChild(item);


        const thumb = document.createElement('div');
        thumb.classList.add('thumb');
        const immaginiThumb = document.createElement(`img`);
        const imma = images[index];

        thumb.append(immaginiThumb)
        immaginiThumb.src = imma.image
        thumbsContainer.insertBefore(thumb,prevButton );

        
    });

const items = document.querySelectorAll('.item');

// Funzione per vedere il selettore (active) con item e thumb
function showCurrentItem() {
    // active immagini grande scelta
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // active immagini piccole scelta
    const activeThumb = document.querySelector('.thumb.active');
    console.log(activeThumb);
    if (activeThumb) {
        activeThumb.classList.remove('active');
    }
    thumbsContainer.children[currentIndex].classList.add('active');
}

// Gestire il buttone precedente
prevButton.addEventListener('click', immaginiPrecedente)


function immaginiPrecedente () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showCurrentItem();

};

// Gestire il buttone sucessivo
nextButton.addEventListener('click', immaginiSucessiva)


function immaginiSucessiva () {
    currentIndex = (currentIndex + 1) % images.length;
    showCurrentItem();
};

// Mostrare l'elemento al'inizio
showCurrentItem();






