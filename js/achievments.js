// Achievements Track Horizontal Carousel Shift Driver Engine
(() => {
  const currentTrack = document.getElementById("achievements-track");
  const leftArrow = document.getElementById("slider-prev-btn");
  const rightArrow = document.getElementById("slider-next-btn");

  if (currentTrack && leftArrow && rightArrow) {
    const computeStepWidth = () => {
      const leadingItem = currentTrack.firstElementChild;
      return leadingItem ? leadingItem.offsetWidth + 24 : 340;
    };

    rightArrow.addEventListener("click", () => {
      currentTrack.scrollBy({ left: computeStepWidth(), behavior: "smooth" });
    });

    leftArrow.addEventListener("click", () => {
      currentTrack.scrollBy({ left: -computeStepWidth(), behavior: "smooth" });
    });
  }
})();
