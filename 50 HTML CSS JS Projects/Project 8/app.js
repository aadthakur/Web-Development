const sounds = ["applause","boo","gasp","tada","victory","wrong"]


sounds.forEach(function(sound){
    const btn = document.createElement("button")
    btn.classList.add("btn")
    btn.innerText = sound   
    document.getElementById("btns").appendChild(btn)
    btn.addEventListener("click",() => {
        stop();
        document.getElementById(sound).play()
    })
});

function stop(){
    sounds.forEach(sound => {
        document.getElementById(sound).pause()
        document.getElementById(sound).currentTime = 0;
        
    })
}


const themeBtn = document.getElementById("theme-btn")
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("theme-active");

})