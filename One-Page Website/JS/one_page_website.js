/****** JAVASCRIPT FOR ONE-PAGE WEBSITE ************/

//******LIGHTBOX*******//

//Opens Lightbox when thumbnail is clicked.
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

//Creates "X" button to close Lightbox.
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

//Creates index for navigating between slides.
var slideIndex = 1;
showSlides(slideIndex);

//Takes value from html and applies it to slideIndex.
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Used to determine which is the current slide.
function currentSlide(n) {
    showSlides(slideIndex = n);
}

//Takes slide index and changes it depending on which slide is being viewed.
function showSlides(n) {
    var i;
    //Creates variable for thumbnails on webpage.
    var slides = document.getElementsByClassName("mySlides");
    //Creates variable for thumbnails in Lightbox.
    var dots = document.getElementsByClassName("demo");
    //Creates variable for Image Captions
    var captionText = document.getElementById("caption");
    //If you try to go past slide 6/6, you restart at 1/6.
    if (n > slides.length) {slideIndex = 1}
    //If you try to go before slide 1/6, you move to 6/6.
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //Sets display style for active slide.
    slides[slideIndex-1].style.display = "block";
    //Highlights Lightbox thumbnails on hover.
    dots[slideIndex-1].className += " active";
    //Dispalys img alt as caption under slide.
    captionText.innerHTML = dots[slideIndex-1].alt;
}