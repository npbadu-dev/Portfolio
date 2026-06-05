// Navigation Links Anchor Management & Multi-Theme Switch Engine
(() => {
  const themeBtn = document.getElementById("theme-toggle-btn");
  const mobileThemeBtn = document.getElementById("mobile-theme-toggle-btn");
  const burgerBtn = document.getElementById("mobile-menu-toggle");
  const mobileDropdown = document.getElementById("mobile-dropdown");

  // Theme Management
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const targetTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", targetTheme);
  }

  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);
  if (mobileThemeBtn)
    mobileThemeBtn.addEventListener("click", () => {
      toggleTheme();
      if (mobileDropdown) mobileDropdown.style.display = "none";
    });

  // Hamburger Dropdown Toggle
  if (burgerBtn && mobileDropdown) {
    burgerBtn.addEventListener("click", () => {
      const isVisible =
        window.getComputedStyle(mobileDropdown).display !== "none";
      mobileDropdown.style.display = isVisible ? "none" : "block";
    });

    // Auto-close on click
    mobileDropdown.addEventListener("click", (e) => {
      if (e.target.classList.contains("mobile-link")) {
        mobileDropdown.style.display = "none";
      }
    });
  }
})();
