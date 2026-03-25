const events = document.querySelectorAll(".timeline-event");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let current = 0;

function showEvent(index) {
    events.forEach(event => event.classList.remove("active"));
    events[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    if (current < events.length - 1) {
        current++;
        showEvent(current);
    }
});

prevBtn.addEventListener("click", () => {
    if (current > 0) {
        current--;
        showEvent(current);
    }
});