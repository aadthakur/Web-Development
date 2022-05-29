const searchBtn = document.getElementById("search-btn")
const input = document.getElementById("input");
const container = document.querySelector(".container")

searchBtn.addEventListener("click", () => {
    container.classList.toggle("active");
})