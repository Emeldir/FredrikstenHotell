//FILE NAME: seasons.js
//WRITTEN BY: Sunniva Johansen
//WHEN: November 2016
//PURPOSE: Change content in  "aktiviteter" depending on the seasons.

function show(id){
console.log(id);
element=document.getElementById(id);
element.style.display='block';
}

function hide(id){
console.log(id);
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

function setSeasonMenu(season){
	switch(season){
		
		case "autumnmenu":
			 show("autumnmenu"); 
   			 hide("wintermenu"); 
   			 hide("springmenu");
   			 hide("summermenu");
   			 
   			 break;
   			 
   		case "wintermenu":
			 show("wintermenu"); 
    		 hide("autumnmenu"); 
    		 hide("springmenu");
    		 hide("summermenu");
   			 
   			 break;
   			 
   		case "springmenu":
			 show("springmenu"); 
    		 hide("autumnmenu"); 
    		 hide("wintermenu");
    		 hide("summermenu");
   			 
   			 break;
   			 
   		case "summermenu":
			 show("summermenu"); 
    		 hide("autumnmenu"); 
    		 hide("wintermenu");
    		 hide("springmenu");
   			 
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

if (month >= 3 && month <= 5) {
    setSeasonMenu("springmenu");
} else if (month >= 6 && month <= 8) {
    setSeasonMenu("summermenu");
} else if (month >= 9 && month <= 11) {
    setSeasonMenu("autumnmenu");
} else if (month == 12 || month <= 2) {
   setSeasonMenu("wintermenu");
}