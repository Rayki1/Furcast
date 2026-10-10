// Small progressive enhancements for the landing-page draft.
document.addEventListener("DOMContentLoaded", () => {
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
});
