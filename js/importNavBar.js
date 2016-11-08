//FILE NAME: importNavBar.js
//WRITTEN BY: Cecilie Kristoffersen
//WHEN: November 2016
//PURPOSE: A reusubale navbar.

//IMPORTS NAVBAR:

var navbar = document.getElementById("navbar");

var content;

content = '<div id="navbarFixed" class="navbar">'
+         '<ul class="topnav" id="topNavbar"><li><a href=index.html>HOTELLET</a></li>'
+         '<li><a href=romogsuiter.html>ROM OG SUITER </a></li>'
+         '<li><a href=konferanse.html>KONFERANSE </a></li>'
+         '<li><a href="index.html"><img src="img/logo/FredrikstenLogo.svg"></a></li>'
+         '<li><a id="opplevelser">OPPLEVELSER </a></li>'
+         '<li><a href="galleri.html">GALLERI</a></li>'
+         '<li><a href="kontakt.html">KONTAKT</a></li>'
+         '<li id="BookRom"><a href="http://online.techotel.dk/domino.aspx?hotelid=76955&lang=no">BOOK ROOM</a></li>'
/*+         '<li class="icon"> <a href="javascript:void(0);" onclick="dropDown()">☰</a></ul></div>';*/

navbar.innerHTML += content;


// Code for extra navbar under Opplevelser. Written by Torstein.

var opplevelser_bar = document.getElementById("opplevelser_bar");
opplevelser_bar.className = "opplevelser"

content2 = '<div  id="opplevelserFixed" class="opplevelser" >'
+         '<ul>'
+         '<li><a class="opplevelser_links" href=opplevelser_matogdrikke.html id="matogdrikke"> Mat og Drikke </a></li>'
+         '<li><a class="opplevelser_links" href=opplevelser_selskap.html id="selskap"> Selskap </a></li>'
+         '<li><a class="opplevelser_links" href="opplevelser_aktiviteter.html"> Aktiviteter </a></li></ul></div>';

opplevelser_bar.innerHTML += content2;

opplevelser.addEventListener("mouseenter", function( event ) {
    opplevelser_bar.style.display = "block";

})
opplevelser_bar.addEventListener("mouseleave", function( event ) {
    opplevelser_bar.style.display = "none";
})
