document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const body = document.body;
  const mLinks = document.querySelectorAll(".m-link");

  function toggleMenu() {
    const isOpen = mobileOverlay.classList.toggle("open");
    menuToggle.classList.toggle("active");

    // Scroll Lock: Prevents user from scrolling page content while menu is open
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }

  menuToggle.addEventListener("click", toggleMenu);

  // Close menu when a navigation link is clicked
  mLinks.forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });
});
