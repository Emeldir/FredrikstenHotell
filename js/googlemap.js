 //FILE NAME: googlemap.js
//WRITTEN BY: Sunniva Johansen
//WHEN: November 2016
//PURPOSE: Implement google map at kontakt.html

//Googlemap with mark at Fredriksten Hotel:

function initMap() {
        var fredriksten = {lat: 59.1161757, lng: 11.3923223};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: fredriksten
        });
        var marker = new google.maps.Marker({
          position: fredriksten,
          map: map
        });
      }
   