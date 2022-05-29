const insert = document.querySelector(".insert")
const info = document.querySelector('.info')


window.addEventListener("keydown", (event) => {
    const eventKey = event.key === " " ? "space" : event.key
    insert.innerHTML = `
   <div class="key">${eventKey}<small>event.key</small></div>
    <div class="key">${event.keyCode}<small>event.keyCode</small></div>
    <div class="key">${event.code}<small>event.code</small></div>
   `
    info.style.display = "none"
})