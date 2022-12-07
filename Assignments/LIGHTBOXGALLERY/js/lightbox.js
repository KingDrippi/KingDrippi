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

//Set single variable to get all images in gallery
let galleryImages = document.getElementsByClassName("galleryImage");

//Create loop to cycle through images and run onclick event per image

for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightBox;
    
  }
  
  
//Function to close lightbox
function closeLightbox(){

    lightboxContainer.classList.remove('display');

    lightbox.src = "";

}




lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;

    //Turn off display class 
