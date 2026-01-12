'use strict';

// element toggle function
// const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// // sidebar variables
// const sidebar = document.querySelector("[data-sidebar]");
// const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// if (sidebarBtn && sidebar) {
//   sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });
// }

// theme toggle functionality
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  function initThemeToggle() {
    const themeToggleBtn = document.querySelector("[data-theme-toggle]");
    const html = document.documentElement;

    // Initialize theme from localStorage or default to dark
    const savedTheme = localStorage.getItem("theme") || "dark";
    html.setAttribute("data-theme", savedTheme);

    // Theme toggle functionality
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        const currentTheme = html.getAttribute("data-theme") || "dark";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        
        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
      });
    }
  }

  // Run immediately if DOM is ready, otherwise wait
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeToggle);
  } else {
    initThemeToggle();
  }
})();
