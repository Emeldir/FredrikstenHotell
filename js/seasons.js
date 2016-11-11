//FILE NAME: seasons.js
//WRITTEN BY: Sunniva Johansen
//WHEN: November 2016
//PURPOSE: Change content in "matogdrikke" and "aktiviteter" depending on the seasons.

function show(id){
element=document.getElementById(id);
element.style.display='block';
}

function hide(id){
element=document.getElementById(id);
element.style.display='none';
}

function setSeason(season){
	switch(season){
		
		case "autumn":
			 show("autumn"); 
   			 hide("winter"); 
   			 hide("spring");
   			 hide("summer");
   			 
   			 break;
   			 
   		case "winter":
			 show("winter"); 
    		 hide("autumn"); 
    		 hide("spring");
    		 hide("summer");
   			 
   			 break;
   			 
   		case "spring":
			 show("spring"); 
    		 hide("autumn"); 
    		 hide("winter");
    		 hide("summer");
   			 
   			 break;
   			 
   		case "summer":
			 show("summer"); 
    		 hide("autumn"); 
    		 hide("winter");
    		 hide("spring");
   			 
   			 break;
		
	}
}
//Seasons:

var d = new Date(Date.now());
var month = d.getMonth() + 1;

if (month >= 3 && month <= 5) {
    show("spring"); 
    hide("winter"); 
    hide("autumn");
    hide("summer");
} else if (month >= 6 && month <= 8) {
    show("summer"); 
    hide("winter"); 
    hide("spring");
    hide("autumn");
} else if (month >= 9 && month <= 11) {
    show("autumn"); 
    hide("winter"); 
    hide("spring");
    hide("summer");
} else if (month == 12 || month <= 2) {
   show("winter"); 
    hide("autumn"); 
    hide("spring");
    hide("summer");
}