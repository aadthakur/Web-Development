const colors = ["dodgerblue","crimson","coral","pink","tomato","lime"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click',function() {
    const randomNumber = getRandomNumber();
    color.textContent = colors[randomNumber].toUpperCase();
    document.body.style.backgroundColor = colors[randomNumber];

});

function getRandomNumber() {
    return  Math.floor(Math.random()*colors.length);
}

