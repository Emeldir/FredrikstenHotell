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


var d = new Date(Date.now());
var month = d.getMonth() + 1;

if (month >= 3 && month <= 5) {
    setSeasonMenu("springmenu");
} else if (month >= 6 && month <= 8) {
    setSeasonMenu("summermenu");
} else if (month >= 9 && month <= 11) {
    setSeasonMenu("autumnmenu");
} else if (month == 12 || month <= 2) {
   setSeasonMenu("wintermenu");
}


