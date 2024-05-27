`use strict`
// aggiungo un data
const { createApp} = Vue
createApp({
    data() {
        return {
            close: null,
            currentIndex: 0,
            images: [
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
            ],
        }
    },
    methods: {
        // aggiungo una function (previousImage) per avere l'anteriore immagine
        previousImage() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        },
        // aggiungo una function (nextImage) per avere la prossima immagine
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        },
        // aggiungo una function (changeImage) per fare il click su una thumb
        changeImage(index) {
            this.currentIndex = index;
        },
        // aggiungo una function (starImage) per fare l'autoplay
        starImage(){
            this.close = setInterval(this.nextImage, 3000);
        },
        // aggiungo una function (stopImage) per fermare l'autoplay

        stopImage(){
            clearInterval(this.close);
        },
        // aggiungo una function (resumeImage) per continuare l'autoplay
        resumeImage() {
            this.starImage();
        }
    },
    // aggiungo (created) per avere l'autoplay

    created() {
        this.starImage()
    }
}).mount('#app');




