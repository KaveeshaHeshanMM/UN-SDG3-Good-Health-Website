document.addEventListener("DOMContentLoaded", function () {
  let dateInput = document.getElementById("visit-date");
  let timeSlots = document.getElementById("time-slots");

  dateInput.addEventListener("change", function () {
    if (dateInput.value) {
      timeSlots.style.display = "block"; // Show time slots when a date is picked
    }
  });

  document.querySelectorAll(".time-slot").forEach((slot) => {
    slot.addEventListener("click", function () {
      alert("You selected: " + this.innerText);
      timeSlots.style.display = "none"; // Hide time slots after selection
    });
  });
});

// Show or hide the scroll-to-top button
window.onscroll = function () {
  const goTopBtn = document.getElementById("go-to-top");

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    goTopBtn.style.display = "block"; // Show button
  } else {
    goTopBtn.style.display = "none"; // Hide button
  }
};

// Scroll smoothly to top when clicked
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
