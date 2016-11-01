//FILE NAME: importNavBar.js
//WRITTEN BY: Cecilie Kristoffersen
//WHEN: Oktober 2016
//PURPOSE: A reusubale navbar.

//IMPORTS NAVBAR:

var navbar = document.getElementById("navbar");

var content;

content = '<div class="topnav" id="topNavbar">'
+         '<ul><li><a href=index.html>HOTELLET</a></li>'
+         '<li><a href=romogsuiter.html>ROM OG SUITER </a></li>'
+         '<li><a href=konferanse.html>KONFERANSE </a></li>'
+         '<li><a href="index.html"><img src="img/logo/LogoHvit.png" height="30" width="156"></a></li>'
+         '<li><a id="opplevelser">OPPLEVELSER </a></li>'
+         '<li><a href="galleri.html">GALLERI</a></li>'
+         '<li><a href="kontakt.html">KONTAKT</a></li>'
+         '<li id="BookRom"><a href="">BOOK ROOM</a></li></ul></div>';

navbar.innerHTML += content;

// Code for extra navbar under Opplevelser. Written by Torstein.

var opplevelser_bar = document.getElementById("opplevelser_bar");
opplevelser_bar.className = "opplevelser"

content2 = '<div class="opplevelser" >'
+         '<ul>'
+         '<li><a class="opplevelser_links" href=opplevelser_matogdrikke.html id="matogdrikke"> Mat og Drikke </a></li>'
+         '<li><a class="opplevelser_links" href=opplevelser_selskap.html id="selskap"> Selskap </a></li>'
+         '<li><a class="opplevelser_links" href="opplevelser_aktiviteter.html"> Aktiviteter </a></li></ul></div>';

opplevelser_bar.innerHTML += content2;
/*


var matogdrikke = document.createElement("a");
matogdrikke.className = "opplevelser_links";
matogdrikke.id = "matogdrikke";
matogdrikke.href = "opplevelser_matogdrikke.html"
matogdrikke.style.left = "60%"
matogdrikke.appendChild(document.createTextNode("Mat og Drikke"));
opplevelser_bar.appendChild(matogdrikke);

var selskap = document.createElement("a");
selskap.className = "opplevelser_links";
selskap.id = "selskap";
selskap.href = "opplevelser_selskap.html"
selskap.style.left = "70%"
selskap.appendChild(document.createTextNode("Selskap"));
opplevelser_bar.appendChild(selskap);

var aktiviteter = document.createElement("a");
aktiviteter.className = "opplevelser_links";
aktiviteter.id = "aktiviteter";
aktiviteter.href = "opplevelser_aktiviteter.html"
aktiviteter.style.left = "80%"
aktiviteter.appendChild(document.createTextNode("Aktiviteter"));
opplevelser_bar.appendChild(aktiviteter);
*/

opplevelser.addEventListener("mouseenter", function( event ) {
    opplevelser_bar.style.display = "block";

})
opplevelser_bar.addEventListener("mouseleave", function( event ) {
    opplevelser_bar.style.display = "none";
})
