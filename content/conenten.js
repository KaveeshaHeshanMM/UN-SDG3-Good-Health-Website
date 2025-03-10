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
