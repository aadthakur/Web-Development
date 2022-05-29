const bars = document.getElementById("bars");
const links = document.querySelector(".nav-links");
const icons = document.querySelector('.nav-icons')

bars.addEventListener('click',function(){
    links.classList.toggle('nav-active');
    icons.classList.toggle('nav-active');
    
})