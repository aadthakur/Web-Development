const joke = document.getElementById("joke")
const jokeBtn = document.getElementById("joke-btn")


function jokeGenerator(){
    const config = {
        headers: {
            'Accept':'application/json'
        }
    }
    fetch("https://icanhazdadjoke.com/",config)
    .then((res) => res.json())
    .then((data) => {
        joke.innerHTML = data.joke
    })
}
jokeGenerator();
jokeBtn.addEventListener("click" ,() => {
    jokeGenerator();
})