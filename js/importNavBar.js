//FILE NAME: importNavBar.js
//WRITTEN BY: Cecilie Kristoffersen and Torstein Bakke
//WHEN: November 2016
//PURPOSE: A reusubale navbar.

//IMPORTS NAVBAR written by Cecilie

var navbar = document.getElementById("navbar");


var content;

content = '<nav class="mainNav">'
               +'<a class="icon" href="javascript:void(0);" style="font-size:20px;" onclick="IconClick()">☰</a>'
               +'<a class="logo" href="index.html"><img src="img/logo/FredrikstenLogo.svg"></a></nav>'
           +'<ul class="topnav" id="topNavbar">'
               +'<li class ="logo_center"><a href="index.html"><img src="img/logo/FredrikstenLogo.svg" alt="FredrikstenLogo"></a></li>'
               +'<li><a href="romogsuiter.html">ROM OG SUITER </a></li>'
               +'<li><a href="konferanse.html">KONFERANSE </a></li>'
               +'<li id="opplevelser"><a >OPPLEVELSER </a></li>'
               +'<li class="opplevelser_links"><a  href="opplevelser_matogdrikke.html"> MAT OG DRIKKE </a></li>'
               +'<li class="opplevelser_links"><a  href="opplevelser_selskap.html"> SELSKAP </a></li>'
               +'<li class="opplevelser_links"><a  href="opplevelser_aktiviteter.html"> AKTIVITETER </a></li>'
               +'<li><a href="galleri.html">GALLERI</a></li>'
               +'<li><a href="kontakt.html">KONTAKT</a></li>'
               +'<li class="BookRom"><a href="http://online.techotel.dk/domino.aspx?hotelid=76955&lang=no" target="_blank">BOOK ROM</a></li></ul>'
// Code for extra navbar under Opplevelser. Written by Torstein.
           +'<div  id="opplevelser_bar" class="opplevelser" >'
+         '<ul>'
+         '<li><a href="opplevelser_matogdrikke.html"> Mat og drikke </a></li>'
+         '<li><a href="opplevelser_selskap.html" > Selskap </a></li>'
+         '<li><a href="opplevelser_aktiviteter.html"> Aktiviteter </a></li></ul></div>';

//Written by Cecilie
navbar.innerHTML += content;



function IconClick(){
		var x = document.getElementById("topNavbar");
		if(x.className === "topnav"){
			x.className += " responsive";
			
		}else {
			x.className = "topnav";
	
		}
	};


// Code for extra navbar under Opplevelser. Written by Torstein.

var opplevelser_bar = document.getElementById("opplevelser_bar");


opplevelser.addEventListener("mouseenter", function( event ) {
    opplevelser_bar.style.display = "block";

});
opplevelser_bar.addEventListener("mouseleave", function( event ) {
    opplevelser_bar.style.display = "none";
})

