var slideIndex =1;



function showSlides(n){
    var slides= document.getElementsByClassName("mySlides")
    var  dots =document.getElementsByClassName("dot")
    if ( n > slides.length){slideIndex =1};
    if (n < 1){slideIndex = slides.length};

    for(i = 0; i < slides.length; i++){
        slides[i].style.display ="none"
    }

    for(i= 0 ; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active" ," ")
    }

    slides[slideIndex-1].style.display ="block";
    dots[slideIndex -1].className += " active"
}

showSlides(slideIndex)

function currentSlide(n){
    showSlides(slideIndex = n)
}

// on Scroll fixed the Header bar
window.onscroll = function() {fixedbar()};


var navbar = document.getElementById("header")

function fixedbar(){
    if(window.pageYOffset >= 20){
        navbar.classList.add("sticky__header")
        opnBtn.classList.remove("active")
        header.classList.remove("active")
        overlap.classList.remove("active")
    }else{
        navbar.classList.remove("sticky__header")
    }
}
// opening mobile navabr

var opnBtn = document.getElementById("open__btn")
var header= document.getElementById("sidenav__bar")
var clsBtn = document.getElementById("close__btn")
var navlink = document.querySelectorAll(".sidenav__link")
var overlap =document.getElementById("overlap")




navlink.forEach(n => n.addEventListener('click', closemenu))
opnBtn.addEventListener('click' , openmenu)
clsBtn.addEventListener('click' , closemenu)
overlap.addEventListener('click' , closemenu)

function openmenu() {
    opnBtn.classList.toggle("active")
    header.classList.toggle("active")
    overlap.classList.toggle("active")
     
    
}


function closemenu() {
    opnBtn.classList.remove("active")
    header.classList.remove("active")
    overlap.classList.remove("active")
   
}
   
 



























