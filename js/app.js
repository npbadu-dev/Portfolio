// Main Application State Configuration
document.addEventListener("DOMContentLoaded", () => {
  const htmlElement = document.documentElement;

  // Check and apply local persistent storage theme options on load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    htmlElement.classList.remove("dark");
  } else {
    htmlElement.classList.add("dark"); // Safe structural fallback matching the video reference
  }
});
