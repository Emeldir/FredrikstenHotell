/* FILE NAME: footerresp.js
//WRITTEN BY: Susanne Rom
//WHEN: November 2016
//PURPOSE: To make contact info and links avaiable to users at all times.   */


var footer = document.getElementById("footer");

var content;

content =

+     '<footer>'
+     '<ul>'
+      '<div id="boks1">'
+        '<li>'
+            '<div class="text">'
+                '<h4>KONTAKT OSS</h4>'
+                '<div>Fredriksten Hotell <br> Generalveien 25-27 <br>1769 Halden  Norway <br> + 47 690 210 10 <br>post@fredrikstenhotell.no </div>'
+           '</div>' /*end of class text */
+        '</li>'

+        '<li>'
+            '<div class="text">'
+                '<h4>NYTTIGE LINKER</h4>'
+                '<div> <a href="http://www.booking.com/hotel/no/fredriksten-hotell.no.html" target="_blank">Booking.com</a> <br>'
+                        '<a href="http://www.visitoslofjord.no/halden/" target="_blank">Visithalden.com</a> <br>'
+                '<a class="footertext" href="https://no.tripadvisor.com/Hotel_Review-g315897-d3246588-Reviews-Fredriksten_Hotell-Halden_Halden_Municipality_Ostfold_Eastern_Norway.html" target="_blank">Tripadvisor</a> </div>'
+           ' </div>' /*end of class text */
+        '</li>'
+'</div>'  /*end of boks1 */
+'<div id="boks2">'
+        '<li>'
+           '<div class="text">'
+                '<h4>SOSIALE MEDIER</h4>'
+               '<div>'
+                 '<a href="https://www.facebook.com/fredrikstenhotell/?fref=ts" target="_blank"> <img id="faceikon" src="img/ikoner/facebook.png" alt="Facebook ikon" heigth="57" width="57"></a>'
+                  '<a href="https://www.instagram.com/fredrikstenhotell/" target="_blank">  <img id="instaikon" src="img/ikoner/insta.png" alt="Instagram ikon" heigth="60" width="60"> </a>'
+                '</div>'
+            '</div>'
+        '</li>'
+        '<li>'
+            '<div class="text">'
+               '<div> <a href="https://no.tripadvisor.com/Hotel_Review-g315897-d3246588-Reviews-Fredriksten_Hotell-Halden_Halden_Municipality_Ostfold_Eastern_Norway.html" target="_blank"> <img src="img/ikoner/testtripadvisor.png" alt="Tripadvisor ikon" heigth="140" width="140"></a> </div>'
+            '</div>'
+        '</li>'
+'</div>' /*end of boks2 */
+    '</ul>'
+'</footer>'

footer.innerHTML += content;
