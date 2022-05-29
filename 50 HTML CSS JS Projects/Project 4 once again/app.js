const search = document.getElementById("search");
const btn = document.querySelector(".btn");
const container = document.querySelector('search-container');

btn.addEventListener('click',() => {
    search.classList.toggle("active");
    input.focus();
});