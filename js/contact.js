// Contact Form Event Sanitizer Interface Controller Configuration
(() => {
  const targetForm = document.getElementById("portfolio-contact-form");

  if (targetForm) {
    targetForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const visitorName = document.getElementById("form-name").value;
      const visitorEmail = document.getElementById("form-email").value;
      const visitorMessage = document.getElementById("form-message").value;

      console.log("Secure mock communication bundle processed successfully:", {
        Name: visitorName,
        Email: visitorEmail,
        Message: visitorMessage,
      });

      alert(
        `Thank you, ${visitorName}! Your mock communication request has been processed successfully.`,
      );
      targetForm.reset();
    });
  }
})();
