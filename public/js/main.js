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

});
