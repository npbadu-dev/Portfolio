// Code Window Interactive Pointer Tracking Simulation Module
(() => {
  const targetCard = document.getElementById("interactive-code-card");

  if (targetCard) {
    targetCard.addEventListener("mousemove", (event) => {
      const boundingBox = targetCard.getBoundingClientRect();
      const pointerX = event.clientX - boundingBox.left - boundingBox.width / 2;
      const pointerY = event.clientY - boundingBox.top - boundingBox.height / 2;

      // Subtle 3D scale/shift formula calculations
      targetCard.style.transform = `perspective(1000px) rotateX(${-pointerY * 0.05}deg) rotateY(${pointerX * 0.05}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    targetCard.addEventListener("mouseleave", () => {
      targetCard.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    });
  }
})();
