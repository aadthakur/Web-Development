const textArea = document.getElementById("textarea")
const domLabels = document.querySelector('.labels')
textArea.addEventListener("keyup",(e) => {
    createLabels(e.target.value);


    if(e.key === "Enter"){
        randomSelect();
    }
})


function createLabels(inputs){
    const labels = (inputs.split(',').filter(input => input.trim()))
    
    domLabels.innerHTML = ""

    labels.forEach((label) => {
        const tagEl = document.createElement("span")
        tagEl.classList.add('label')
        tagEl.innerText = label
        domLabels.appendChild(tagEl) 
    })
}


    function randomSelect(){
    const times = 30
    const randomTag = pickRandomTag()
    const interval = setInterval(() => {
        highlight(randomTag)
        setTimeout(() => {
            unhighlight(randomTag)
        }, 100)
    }, 100);
    
    setTimeout(() => {
        unhighlight(randomTag)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
    }, times*100);

}

function pickRandomTag(){
    const labels = document.querySelectorAll(".label"); 
    return labels[Math.floor(Math.random()* labels.length)];
}



function highlight(tag){
    tag.classList.add("highlight")
}

function unhighlight(tag){
    tag.classList.remove("highlight")
}
