const faqToggle = document.querySelectorAll(".faq-toggle");
const faqAns = document.querySelectorAll(".faq-ans");


faqToggle.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.parentNode.classList.toggle("active");
    })
})