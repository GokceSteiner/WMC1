document.addEventListener("DOMContentLoaded", function(){

let slide=document.querySelectorAll(".slide_paar");
let weieter =document.querySelector(".slide_weiter");
let zuruck =document.querySelector(".slide_zuruck");


 

let zaehler=0;
slide[zaehler].classList.add("slide_sichtbar");

weieter.addEventListener("click", zaehlerhoch);
    
    function zaehlerhoch()
    {
        zaehler = zaehler+1;
        if(zaehler >= slide.length)
            {zaehler=0}
            
            
      slideanzeigen();  

    
    }

zuruck.addEventListener("click", zaehlerrunter);
    
    function zaehlerrunter()
    {
        zaehler = zaehler-1;
        if(zaehler < 0)
        {
            zaehler=slide.length -1;  
        }
        slideanzeigen();
    
      }

   function slideanzeigen(){
        let slideNichtSichtbar=document.querySelector(".slide_sichtbar");
        slideNichtSichtbar.classList.remove("slide_sichtbar");
       slide[zaehler].classList.add("slide_sichtbar");
    }




})

