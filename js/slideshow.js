
//Slideshow for gallery:
var slideIndex
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function setSlideIndex(n){
  slideIndex = n;
  showDivs(slideIndex)
}

function showDivs(n) {
    var i;
    var pics = document.getElementsByClassName("big");

    if (n > pics.length) {slideIndex = 1}
    if (n < 1) {slideIndex = pics.length} ;
    for (i = 0; i < pics.length; i++) {
        pics[i].style.display = "none";
    }
    pics[slideIndex-1].style.display = "block";

}

//Slideshow for front page:
