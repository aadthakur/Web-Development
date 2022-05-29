const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress");
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

nextBtn.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length;
    }
    update()
});
prevBtn.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1;
    }
    update()
    
});

function update(){
    circles.forEach((circle,index) => {
        if(index < currentActive){
            circle.classList.add("active");
        }
        else if(index >= currentActive){
            circle.classList.remove("active");
        }
    })
    const active = document.querySelectorAll(".active");
    progressBar.style.width = (((active.length -1) / (circles.length -1))*100)+"%";
    if(currentActive === 1){
        prevBtn.disabled = true;
    }
    else if(currentActive === circles.length){
        nextBtn.disabled = true;    
    }
    else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;

    }
}