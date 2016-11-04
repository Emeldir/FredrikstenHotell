var footer = document.getElementById("footer");


var content;

content = '<div class="ourfooter" id="footer">'
+         '<div id="column1"> <p class="footerheader"> KONTAKT OSS </p>'
+         '<p class="footertext"> Fredriksten Hotell <br> Generalveien 25-27 <br> 1769 Halden, Norway <br> + 47 690 210 10 <br>post@fredrikstenhotell.no </p>'
+          '</div>'
+         '<div id="column2"> <p class="footerheader">NYTTIGE LENKER </p>'
+          '<a class="footertext" href="https://no.tripadvisor.com/Hotel_Review-g315897-d3246588-Reviews-Fredriksten_Hotell-Halden_Halden_Municipality_Ostfold_Eastern_Norway.html">Tripadvisor</a> <br>'
+          '<a class="footertext" href="http://www.booking.com/hotel/no/fredriksten-hotell.no.html">Booking.com</a> <br>'
+          '<a class="footertext" href="http://www.visitoslofjord.no/halden/">Visithalden.com</a>'
+         '</div>'
+         '<div id="column3"> <p class="footerheader"> SOSIALE MEDIER </p> <br>'
+         '<img class="footertext" src="img/ikoner/facebook.png" heigth="60" width="60">'
+         '<img class="footertext" src="img/ikoner/insta.png" heigth="60" width="60">'
+         '</div>'
+         '<div id="column4"> <p class="footerheader"> TRIPADVISOR </p>'
+         '<img class="footertext" src="img/ikoner/testtripadvisor.png" heigth="60" width="60">'
+         '</div>'

+          '</div>'

footer.innerHTML += content;
