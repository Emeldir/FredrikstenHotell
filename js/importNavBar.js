//FILE NAME: importNavBar.js
//WRITTEN BY: Cecilie Kristoffersen 
//WHEN: Oktober 2016
//PURPOSE: A reusubale navbar. 


var navbar = document.getElementById("navbar");

var content;

content = '<div class="topnav" id="topNavbar">'
+         '<ul><li><a href=index.html>HOTELLET</a></li>'
+         '<li><a href=romogsuiter.html>ROM OG SUITER </a></li>'
+         '<li><a href=konferanse.html>KONFERANSE </a></li>'
+         '<li><a href="index.html"><img src="img/logo/LogoHvit.png" height="30" width="156"></a></li>'
+         '<li><a href="opplevelser_aktiviteter.html">OPPLEVELSER </a></li>'
+         '<li><a href="galleri.html">GALLERI</a></li>'
+         '<li><a href="kontakt.html">KONTAKT</a></li>'
+         '<li id="BookRom"><a href="">BOOK ROM</a></li></ul></div>';



navbar.innerHTML += content;