//FILE NAME: slideshow.js
//WRITTEN BY: Torstein Bakke
//WHEN: November 2016
//PURPOSE: Provides a slidehsow for the gallery and frontpage.

//Slideshow for frontpage:

var index = 0;
frontpageSlideshow();

function frontpageSlideshow() {
  if (document.querySelector('.bigPicture') !== null){
    var j;
    var x = document.getElementsByClassName("bigPicture");
    for (j = 0; j < x.length; j++) {
      x[j].style.display = "none";
    }
    index++;
    if (index >= x.length) {index = 1}
    x[index-1].style.display = "block";
    setTimeout(frontpageSlideshow, 3000); // Change image every 2 seconds
  }
}

//Slideshow for gallery:

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            prevOrNext(-1);
            break;

        case 39:
            prevOrNext(+1);
            break;
    }
};

var slideIndex
showSlide(slideIndex);

function prevOrNext(n) {
    showSlide(slideIndex += n);
}

function setSlideIndex(n){
  slideIndex = n;
  showSlide(slideIndex)
}

function showSlide(n) {
    var i;
    var pics = document.getElementsByClassName("big");

    if (n > pics.length) {slideIndex = 1}
    if (n < 1) {slideIndex = pics.length} ;
    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }
    pics[slideIndex-1].style.display = "block";
    document.getElementById("slideshowbuttons").style.display = "block";
};
