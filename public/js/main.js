// Small progressive enhancements for the landing-page draft.
document.addEventListener("DOMContentLoaded", () => {
  // Start at Home when the root URL is opened directly on mobile browsers.
  // Keep normal in-page navigation (for example #features) working when a visitor taps a link.
  if (!window.location.hash || window.location.hash === "#") {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    requestAnimationFrame(() => window.scrollTo(0, 0));
  }

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const navLinks = document.querySelectorAll(".floating-nav .nav-link");
  const sections = [...document.querySelectorAll("main section[id]")];

  // Highlight the section currently in view.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach((section) => observer.observe(section));
  }

  // Close the mobile navigation after selecting a destination.
  document.querySelectorAll("#mainNav .nav-link, #mainNav .nav-cta").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
  // Contact form: validate fields and show an honest demo confirmation.
  const conversationForm = document.getElementById("conversationForm");
  const formSuccess = document.getElementById("formSuccess");
  if (conversationForm && formSuccess) {
    conversationForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!conversationForm.reportValidity()) return;
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    conversationForm.addEventListener("input", () => {
      formSuccess.hidden = true;
    });
  }


  // Registration form validation and show/hide password control.
  const registerForm = document.getElementById("registerForm");
  const passwordField = document.getElementById("regPassword");
  const confirmPasswordField = document.getElementById("regConfirmPassword");
  const showPasswords = document.getElementById("toggleRegPassword");
  const registerSuccess = document.getElementById("registerSuccess");

  if (showPasswords && passwordField && confirmPasswordField) {
    showPasswords.addEventListener("change", () => {
      const type = showPasswords.checked ? "text" : "password";
      passwordField.type = type;
      confirmPasswordField.type = type;
    });
  }

  if (registerForm) {
    const validatePasswordMatch = () => {
      const matches = confirmPasswordField.value === passwordField.value;
      confirmPasswordField.setCustomValidity(matches ? "" : "Passwords do not match");
      confirmPasswordField.classList.toggle("is-invalid", !matches && confirmPasswordField.value.length > 0);
      return matches;
    };
    passwordField.addEventListener("input", () => {
      if (confirmPasswordField.value) validatePasswordMatch();
    });
    confirmPasswordField.addEventListener("input", validatePasswordMatch);
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      validatePasswordMatch();
      if (!registerForm.checkValidity()) {
        registerForm.classList.add("was-validated");
        registerForm.reportValidity();
        if (registerSuccess) registerSuccess.hidden = true;
        return;
      }
      registerForm.classList.add("was-validated");
      if (registerSuccess) registerSuccess.hidden = false;
    });
    document.getElementById("registerModal")?.addEventListener("hidden.bs.modal", () => {
      registerForm.classList.remove("was-validated");
      registerForm.querySelectorAll(".is-invalid").forEach((field) => field.classList.remove("is-invalid"));
      if (registerSuccess) registerSuccess.hidden = true;
    });
  }


  // Open the existing Register modal from the appointment/location popup.
  const appointmentRegisterButton = document.getElementById("bookAppointmentRegister");
  const appointmentModalElement = document.getElementById("appointmentModal");
  const registerModalElement = document.getElementById("registerModal");

  if (appointmentRegisterButton && appointmentModalElement && registerModalElement && window.bootstrap) {
    appointmentRegisterButton.addEventListener("click", () => {
      const appointmentModal = window.bootstrap.Modal.getOrCreateInstance(appointmentModalElement);
      const registerModal = window.bootstrap.Modal.getOrCreateInstance(registerModalElement);

      appointmentModalElement.addEventListener("hidden.bs.modal", function showRegisterAfterClose() {
        appointmentModalElement.removeEventListener("hidden.bs.modal", showRegisterAfterClose);
        registerModal.show();
      });

      appointmentModal.hide();
    });
  }

});
