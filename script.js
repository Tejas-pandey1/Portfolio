const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

let currentSlide = 0;
let autoPlay;


/* =========================
   SHOW SLIDE
========================= */

function showSlide(index) {

    if (index >= slides.length) {
        currentSlide = 0;
    }

    else if (index < 0) {
        currentSlide = slides.length - 1;
    }

    else {
        currentSlide = index;
    }


    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });


    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}


/* =========================
   NEXT / PREVIOUS
========================= */

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}


nextButton.addEventListener("click", () => {

    nextSlide();

    restartAutoPlay();

});


previousButton.addEventListener("click", () => {

    previousSlide();

    restartAutoPlay();

});


/* =========================
   DOT NAVIGATION
========================= */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        restartAutoPlay();

    });

});


/* =========================
   AUTO PLAY
========================= */

function startAutoPlay() {

    autoPlay = setInterval(() => {

        nextSlide();

    }, 7000);

}


function restartAutoPlay() {

    clearInterval(autoPlay);

    startAutoPlay();

}


startAutoPlay();