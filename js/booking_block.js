/* 
FILE NAME: booking_block.js
//WRITTEN BY: Ida Christine Opsahl
//WHEN: November 2016
//PURPOSE: To make it impossible to pick a date older than today
*/

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
 if(dd<10){
        dd='0'+dd
    } 
    if(mm<10){
        mm='0'+mm
    } 

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("datefield").setAttribute("min", today);

/* Code from link: 
http://stackoverflow.com/questions/32378590/set-max-date-to-today-for-date-input*/

/*legge til validation....

function validateForm() {
    var ankomst = document.forms["myForm"]["ankomst"].value;
    var avreise = document.forms["myForm"]["avreise"].value;
    if (ankomst == null || x == "") {
        alert("ankomst dato må fylles ut");
        return false;
    }else if (avreise == null || x == "") {
        alert("ankomst dato må fylles ut");
        return false;
    }
}
*/