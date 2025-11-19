document.addEventListener("DOMContentLoaded", function(){
    let slide=document.querySelectorAll(".slide_paar");
    let weieter =document.querySelector(".slide_weiter");
    let zuruck =document.querySelector(".slide_zuruck");
    const first_slides = document.querySelectorAll(".slide_wrapper .slide_paar");
    const second_slides = document.querySelectorAll(".slide_wrapper1 .slide_paar");
    const first_weieter =document.querySelector(".slide_wrapper .slide_weiter");
    const second_weieter =document.querySelector(".slidewrapper1 .slide_weiter");
    const first_zuruck =document.querySelector(".slidewrapper .slide_zuruck");
    const second_zuruck =document.querySelector(".slidewrapper1 .slide_zuruck");


    console.log(first_slides);
    console.log(second_slides);
    
    let first_zaehler=0;
    let second_zaehler=0;


    first_slides[0].classList.add("slide_sichtbar");
    second_slides[0].classList.add("slide_sichtbar1");

    first_weieter.addEventListener("click", first_zaehlerhoch);
    second_weieter.addEventListener("click", second_zaehlerhoch);
    first_zuruck.addEventListener("click", first_zaehlerrunter);
    second_zuruck.addEventListener("click", second_zaehlerrunter);
    
    
    
        
        function first_zaehlerhoch()
        {
            first_zaehler = first_zaehler+1;
            if(first_zaehler >= first_slides.length)
                {first_zaehler=0}
            slideanzeigen1();  
        }

        function second_zaehlerhoch()
        {
            second_zaehler = second_zaehler+1;
            if(second_zaehler >= second_slides.length)
                {second_zaehler=0}
            slideanzeigen2();  
        }
        
        function first_zaehlerrunter()
        {
            first_zaehler = first_zaehler-1;
            if(first_zaehler < 0)
            { first_zaehler=first_slides.length -1;}
            slideanzeigen1();
        }

         function second_zaehlerrunter()
        {
            second_zaehler = second_zaehler-1;
            if(second_zaehler < 0)
            { second_zaehler=second_slides.length -1;}
            slideanzeigen2();
        }

       function slideanzeigen1(){
            let slideNichtSichtbar=document.querySelector(".slide_sichtbar");
            slideNichtSichtbar.classList.remove("slide_sichtbar");
            first_slides[first_zaehler].classList.add("slide_sichtbar");
        }

        function slideanzeigen2(){
            let slideNichtSichtbar1=document.querySelector(".slide_sichtbar1");
            slideNichtSichtbar1.classList.remove("slide_sichtbar1");
            second_slides[second_zaehler].classList.add("slide_sichtbar1");
        }
      


})

