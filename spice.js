const reservationForm = document.getElementById("reservation-form");

const filterButtons = document.querySelectorAll("[data-filter]");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const filter = button.dataset.filter;

        filterButtons.forEach(function(item) {
            item.classList.toggle("active", item === button);
        });

        foodCards.forEach(function(card) {
            card.hidden = filter !== "all" && card.dataset.category !== filter;
        });
    });
});

document.querySelectorAll(".add-button").forEach(function(button) {
    button.addEventListener("click", function() {
        button.textContent = "Added";
        button.disabled = true;
        setTimeout(function() {
            button.textContent = "Add to table";
            button.disabled = false;
        }, 1400);
    });
});

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.querySelector(".form-message");
    message.textContent = "Thank you, " + name + "! Your table is on its way to being reserved.";

    reservationForm.reset();

});