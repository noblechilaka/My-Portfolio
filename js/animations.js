// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeAnimations();
});

function initializeAnimations() {
  // Hero section animations
  animateHeroSection();

  // Section animations
  animateSections();

  // About section animations
  animateAboutSection();

  // Projects animations
  animateProjects();

  // Contact section animations
  animateContactSection();

  // Navigation interactions
  initializeNavigation();
}

function animateHeroSection() {
  const tl = gsap.timeline();

  // Animate hero title
  tl.to(".hero__title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  })
    // Animate divider
    .to(
      ".hero__divider",
      {
        opacity: 1,
        scaleX: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    )
    // Animate description
    .to(
      ".hero__description",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.3"
    )
    // Animate profile image
    .to(
      ".hero__photo",
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );
}

function animateSections() {
  // Animate section titles
  gsap.utils.toArray(".section__title").forEach((title) => {
    gsap.to(title, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });

  // Animate section dividers
  gsap.utils.toArray(".section__divider").forEach((divider) => {
    gsap.to(divider, {
      opacity: 1,
      scaleX: 1,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: divider,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  });
}

function animateAboutSection() {
  const aboutTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
  });

  aboutTl
    .to(".about__description", {
      opacity: 1,
      x: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(
      ".about__list",
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    )
    .to(
      ".about__skills-title",
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .to(
      ".about__tools",
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );

  // Animate individual tools with stagger
  gsap.to(".tool", {
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(1.7)",
    scrollTrigger: {
      trigger: ".about__tools",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });
}

function animateProjects() {
  gsap.utils.toArray(".project").forEach((project, index) => {
    gsap.to(project, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: project,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Add hover animations for project links
    const projectLink = project.querySelector(".project__link");
    if (projectLink) {
      projectLink.addEventListener("mouseenter", () => {
        gsap.to(projectLink.querySelector("svg"), {
          x: 3,
          y: -3,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      projectLink.addEventListener("mouseleave", () => {
        gsap.to(projectLink.querySelector("svg"), {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  });
}

function animateContactSection() {
  const contactTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
  });

  contactTl
    .to(".contact__text", {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .to(
      ".contact__button",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    )
    .to(
      ".contact__links",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    );
}

function initializeNavigation() {
  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80,
          },
          ease: "power3.inOut",
        });
      }
    });
  });

  // Navigation menu animation
  const menuLines = document.querySelectorAll(".nav__menu-line");
  const menu = document.querySelector(".nav__menu");

  if (menu) {
    menu.addEventListener("mouseenter", () => {
      gsap.to(menuLines[0], { rotation: 45, y: 6, duration: 0.3 });
      gsap.to(menuLines[1], { opacity: 0, duration: 0.3 });
      gsap.to(menuLines[2], { rotation: -45, y: -6, duration: 0.3 });
    });

    menu.addEventListener("mouseleave", () => {
      gsap.to(menuLines[0], { rotation: 0, y: 0, duration: 0.3 });
      gsap.to(menuLines[1], { opacity: 1, duration: 0.3 });
      gsap.to(menuLines[2], { rotation: 0, y: 0, duration: 0.3 });
    });
  }

  // Add parallax effect to hero image
  gsap.to(".hero__photo", {
    yPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });

  // Add scale animation to tools on hover
  document.querySelectorAll(".tool").forEach((tool) => {
    tool.addEventListener("mouseenter", () => {
      gsap.to(tool, {
        scale: 1.05,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    });

    tool.addEventListener("mouseleave", () => {
      gsap.to(tool, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    });
  });

  // Add hover animations for social links
  document.querySelectorAll(".nav__link, .footer__link").forEach((link) => {
    link.addEventListener("mouseenter", () => {
      gsap.to(link, {
        scale: 1.1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, {
        scale: 1,
        duration: 0.3,
        ease: "back.out(1.7)",
      });
    });
  });

  // Add contact button hover animation
  const contactButton = document.querySelector(".contact__button");
  if (contactButton) {
    contactButton.addEventListener("mouseenter", () => {
      gsap.to(contactButton, {
        y: -3,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    contactButton.addEventListener("mouseleave", () => {
      gsap.to(contactButton, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }
}

// Add scroll progress indicator
function addScrollProgress() {
  const progressBar = document.createElement("div");
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 2px;
        background: linear-gradient(90deg, #ffffff, #cccccc);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
  document.body.appendChild(progressBar);

  window.addEventListener("scroll", () => {
    const scrolled =
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
    progressBar.style.width = scrolled + "%";
  });
}

// Initialize scroll progress
addScrollProgress();

// Add loading animation
window.addEventListener("load", () => {
  gsap.to("body", {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out",
  });
});

// Set initial body opacity
gsap.set("body", { opacity: 0 });
