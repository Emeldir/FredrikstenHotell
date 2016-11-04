var footer = document.getElementById("footer");


var content;

content = '<div class="ourfooter" id="footer">'
+         '<p id="footerheader"> KONTAKT OSS </p>'
+         '<p id="footertext"> Fredriksten Hotell <br> Generalveien 25-27 <br> 1769 Halden, Norway <br> + 47 690 210 10 <br>post@fredrikstenhotell.no </p>'

/* +         '<li><a href="index.html"><img src="img/logo/LogoHvit.png" height="30" width="156"></a></li>' */
+          '<a href="https://no.tripadvisor.com/Hotel_Review-g315897-d3246588-Reviews-Fredriksten_Hotell-Halden_Halden_Municipality_Ostfold_Eastern_Norway.html">Tripadvisor</a>'
+          '<a href="http://www.booking.com/hotel/no/fredriksten-hotell.no.html">Booking.com</a>'
+          '<a href="http://www.visitoslofjord.no/halden/">Visithalden.com</a>'
+         '<img class="footerikon" src="img/ikoner/facebook.png" heigth="60" width="60">'
+         '<img class="footerikon" src="img/ikoner/insta.png" heigth="60" width="60">'
+          '</div>'

footer.innerHTML += content;
