//FILE NAME: seasons.js
//WRITTEN BY: Sunniva Johansen
//WHEN: November 2016
//PURPOSE: Change content in "matogdrikke" and "aktiviteter" depending on the seasons.

//Seasons:

var d = new Date();
var month = d.getMonth() + 1;

if (month >= 3 && month <= 5) {
   document.getElementById("meny").innerHTML = "Paragraph changed!";
} else if (month >= 6 && month <= 8) {
    document.getElementById("meny").innerHTML = "Paragraph changed!";
} else if (month >= 9 && month <= 11) {
    document.getElementById("meny").innerHTML = "Paragraph changed!";
} else(month == 12 || month <= 2) {
   document.getElementById("meny").innerHTML = "Paragraph changed!";
}