// Quick View Modal Functionality
// Uses project data from projectsData.js

function initializeQuickView() {
  const quickView = document.getElementById("quick-view");
  const quickViewClose = document.getElementById("quick-view-close");
  const triggers = document.querySelectorAll("[data-quick-view-trigger]");

  if (!quickView) return;

  // Open quick view
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const projectId = trigger.dataset.quickViewTrigger;
      const data = projectsData.find((p) => p.id === projectId);

      if (data) {
        openQuickView(data, projectId);
      }
    });
  });

  // Close quick view
  if (quickViewClose) {
    quickViewClose.addEventListener("click", closeQuickView);
  }

  // Close on backdrop click
  quickView.addEventListener("click", (e) => {
    if (e.target === quickView) {
      closeQuickView();
    }
  });

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && quickView.classList.contains("active")) {
      closeQuickView();
    }
  });

  function openQuickView(data, projectId) {
    const image = document.getElementById("quick-view-image");
    const number = document.getElementById("quick-view-number");
    const title = document.getElementById("quick-view-title");
    const description = document.getElementById("quick-view-description");
    const architecture = document.getElementById("quick-view-architecture");
    const tech = document.getElementById("quick-view-tech");

    if (image) image.src = data.image;
    if (number) {
      const index = projectsData.findIndex((p) => p.id === projectId) + 1;
      number.textContent = String(index).padStart(2, "0") + ".";
    }
    if (title) title.textContent = data.title;
    if (description) description.textContent = data.description;

    // Populate architecture
    if (architecture) {
      architecture.innerHTML = data.architecture
        .map(
          (item) => `<span class="quick-view__architecture-item">${item}</span>`
        )
        .join("");
    }

    // Populate tech
    if (tech) {
      tech.innerHTML = data.tech
        .map((t) => `<span class="quick-view__tech-item">${t}</span>`)
        .join("");
    }

    quickView.classList.add("active");
    document.body.style.overflow = "hidden";

    // Disable lenis when modal is open
    if (typeof lenis !== "undefined" && lenis) {
      lenis.stop();
    }
  }

  function closeQuickView() {
    quickView.classList.remove("active");
    document.body.style.overflow = "";

    // Re-enable lenis
    if (typeof lenis !== "undefined" && lenis) {
      lenis.start();
    }
  }
}

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { initializeQuickView };
}
