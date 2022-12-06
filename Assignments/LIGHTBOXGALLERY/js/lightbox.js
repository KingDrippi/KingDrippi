let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser')

//Function to open lightbox
function openLightBox(){
   //Turn on display class (from display:none to display: flex)
   lightboxContainer.classList.add('display');
   //Display image src inside lightbox
lightbox.src = this.src;



}


let coffeeImage1 = document.getElementById('coffeeImage1')

coffeeImage1.onclick = openLightBox;
function closeLightbox(){

    lightboxContainer.classList.remove('display');

    lightbox.src = "";

}

let coffeeImage2 = document.getElementById('coffeeImage2');
coffeeImage2.onclick = openLightBox;
function closeLightbox(){

    lightboxContainer.classList.remove('display');

    lightbox.src = "";

}

let coffeeImage3 = document.getElementById('coffeeImage3');
coffeeImage3.onclick = openLightBox;
function closeLightbox(){

    lightboxContainer.classList.remove('display');

    lightbox.src = "";

}

let coffeeImage4 = document.getElementById('coffeeImage4');
coffeeImage4.onclick = openLightBox;
function closeLightbox(){

    lightboxContainer.classList.remove('display');

    lightbox.src = "";

}




lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

    //Turn off display class 
