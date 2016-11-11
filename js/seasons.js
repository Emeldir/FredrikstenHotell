//FILE NAME: seasons.js
//WRITTEN BY: Sunniva Johansen
//WHEN: November 2016
//PURPOSE: Change content in "matogdrikke" and "aktiviteter" depending on the seasons.

//Seasons:

var d = new Date(Date.now());
var month = d.getMonth() + 1;

if (month >= 3 && month <= 5) {
   document.getElementById("menu").innerHTML = document.getElementById("spring").innerHTML;
   document.getElementById("aktiviteter").innerHTML = document.getElementById("spring").innerHTML;
} else if (month >= 6 && month <= 8) {
    document.getElementById("menu").innerHTML = document.getElementById("summer").innerHTML;
    document.getElementById("aktiviteter").innerHTML = document.getElementById("climbing"+"golf").innerHTML;
} else if (month >= 9 && month <= 11) {
    document.getElementById("menu").innerHTML = document.getElementById("autumn").innerHTML;
    document.getElementById("aktiviteter").innerHTML = document.getElementById("climbing"+"golf").innerHTML;
} else if (month == 12 || month <= 2) {
   document.getElementById("menu").innerHTML = document.getElementById("winter").innerHTML;
   document.getElementById("aktiviteter").innerHTML = document.getElementById("winter").innerHTML;
}