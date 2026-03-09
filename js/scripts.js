// Project data for Quick View
const projectData = {
  slomandaz: {
    title: "Slo-Mandaz Furniture",
    description:
      "A premium e-commerce platform for luxury furniture, featuring smooth animations, intuitive navigation, and a seamless shopping experience designed to showcase high-end pieces.",
    architecture: [
      "Next.js 14 App Router for optimal performance",
      "GSAP ScrollTrigger for cinematic animations",
      "Tailwind CSS for responsive styling",
      "Framer Motion for micro-interactions",
      "Optimized image loading with next/image",
    ],
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    image: "assets/images/slomandaz-mockup.png",
    link: "https://slomandazfurniture.vercel.app/",
  },
  concave: {
    title: "Concave Restaurant",
    description:
      "An elegant restaurant portfolio website with immersive visual storytelling, showcasing the culinary experience through beautiful imagery and smooth transitions.",
    architecture: [
      "Next.js 14 with static site generation",
      "Custom GLSL shaders for visual effects",
      "GSAP for timeline-based animations",
      "Responsive grid layout system",
      "Accessibility-first design approach",
    ],
    tech: ["HTML", "GSAP", "JAVASCRIPT", "CSS3"],
    image: "assets/images/concave-mockup.png",
    link: "https://concaveats.vercel.app/",
  },
  unform: {
    title: "Brutalist Architecture Firm",
    description:
      "A bold creative portfolio pushing the boundaries of web design with experimental layouts, 3D elements, and interactive experiences.",
    architecture: [
      "React with Three.js for 3D rendering",
      "Custom WebGL shaders",
      "GSAP ScrollTrigger for scroll-driven animations",
      "Performance-optimized asset loading",
      "Interactive canvas-based backgrounds",
    ],
    tech: ["HTML", "THREE.JS", "GSAP", "CSS", "VANILLA JS"],
    image:
      "assets/images/Screenshot 2026-03-08 at 13-43-02 PROJECTS UNFORM.png",
    link: "",
  },
  portfolio: {
    title: "Personal Portfolio",
    description:
      "This portfolio website itself - a testament to front-end mastery with horizontal scrolling, parallax effects, and buttery smooth interactions.",
    architecture: [
      "Next.js 14 with App Router",
      "GSAP ScrollTrigger for horizontal scroll",
      "Lenis for smooth scroll experience",
      "Custom cursor with lens reveal effect",
      "Modular component architecture",
    ],
    tech: ["NEXT.JS", "GSAP", "LENIS", "JAVASCRIPT"],
    image: "assets/images/Radiant Smile in Black and White.png",
    link: "#",
  },
};

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Initialize Lenis smooth scroll
// Check if device supports touch for mobile optimizations
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

const lenis = new Lenis({
  duration: isTouchDevice ? 0.8 : 1.2, // Faster on mobile for better responsiveness
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: isTouchDevice ? 3 : 2, // More sensitive on touch devices
  lerp: isTouchDevice ? 0.08 : 0.1, // Lower lerp on mobile for smoother feel
  smoothTouch: isTouchDevice, // Enable smooth touch on mobile
  maxDuration: isTouchDevice ? 1.5 : 2,
});

// Integrate Lenis with GSAP ScrollTrigger
lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeAnimations();
  initializeNavigation();
  initializeMobileMenu();
  initializeScrollTrack();
  initializeMaskedTextReveals();
  initializeProjectsSection();
  initializeCursorLens();
  initializeQuickView();
});

function initializeAnimations() {
  // Hero section animations
  animateHeroSection();

  // Capabilities section animations (new Staggered Monolith)
  animateCapabilitiesSection();

  // Services section animations (legacy - keeping for compatibility)
  animateServicesSection();

  // Projects section - Vertical Staggered List (The Asymmetrical Column)
  initializeProjectsSection();

  // Invite section animations
  animateInviteSection();

  // Preloader
  hidePreloader();
}

function animateHeroSection() {
  const tl = gsap.timeline();

  // Animate hero content elements with stagger
  tl.to(".arch-line", {
    height: 220,
    opacity: 1,
    duration: 0.8,
    ease: "power3.out",
  })
    .to(
      ".hero__title .mask-reveal__text",
      {
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.6"
    )
    .to(
      ".hero__subtitle",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5"
    )
    .to(
      ".pill-button",
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.4"
    )
    .to(
      ".arch-line--horizontal",
      {
        width: 60,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      [".hero__bottom-text", ".circular-arrow"],
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.3"
    )
    .to(
      ".hero__portrait",
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      },
      "-=0.8"
    );

  // Initial state for hero elements
  gsap.set(".arch-line", { height: 0, opacity: 0 });
  gsap.set(".hero__title .mask-reveal__text", { y: "100%" });
  gsap.set(".hero__subtitle", { y: 20, opacity: 0 });
  gsap.set(".pill-button", { y: 20, opacity: 0 });
  gsap.set(".arch-line--horizontal", { width: 0, opacity: 0 });
  gsap.set(".hero__bottom-text", { x: -20, opacity: 0 });
  gsap.set(".circular-arrow", { x: -20, opacity: 0 });
  gsap.set(".hero__portrait", { opacity: 0 });
}

// ============================================
// CAPABILITIES SECTION - THE VERTICAL SPINE
// ============================================

function animateCapabilitiesSection() {
  const capabilitiesSection = document.querySelector(".capabilities");
  const capabilitiesGuide = document.querySelector(".capabilities__guide");
  const capabilitiesTrace = document.getElementById("capabilities-trace");
  const capabilitiesNumbers = document.querySelectorAll(
    ".capabilities__number"
  );
  const capabilities = document.querySelectorAll(".capability");

  if (!capabilitiesSection || !capabilities.length) return;

  // Position numbers dynamically based on each capability's title position
  function positionNumbers() {
    const sectionRect = capabilitiesSection.getBoundingClientRect();

    capabilities.forEach((capability, index) => {
      const num = capabilitiesNumbers[index];
      if (!num) return;

      const title = capability.querySelector(".capability__title");
      if (!title) return;

      const titleRect = title.getBoundingClientRect();
      const relativeTop = titleRect.top - sectionRect.top;

      num.style.top = `${relativeTop}px`;
    });
  }

  // Position on load and resize
  positionNumbers();
  window.addEventListener("resize", positionNumbers);

  // Animate guide line visibility
  ScrollTrigger.create({
    trigger: capabilitiesSection,
    start: "top 70%",
    onEnter: () => {
      if (capabilitiesGuide) capabilitiesGuide.classList.add("visible");
      if (capabilitiesTrace) capabilitiesTrace.classList.add("visible");
      positionNumbers();
    },
    onLeaveBack: () => {
      if (capabilitiesGuide) capabilitiesGuide.classList.remove("visible");
      if (capabilitiesTrace) capabilitiesTrace.classList.remove("visible");
    },
  });

  // Copper trace dot follows scroll along the spine (8vw position)
  if (capabilitiesTrace) {
    ScrollTrigger.create({
      trigger: capabilitiesSection,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const sectionTop = capabilitiesSection.offsetTop;
        const sectionHeight = capabilitiesSection.offsetHeight;
        const scrollProgress = self.progress;
        
        // Calculate position along the spine (8vw from left)
        const traceTop = sectionTop + (scrollProgress * sectionHeight);
        
        gsap.set(capabilitiesTrace, {
          top: traceTop,
          left: "8vw",
          x: "-50%",
          y: 0
        });
      },
    });
  }

  // Layered Parallax - Numbers move at 0.8x speed for cinematic depth
  capabilitiesNumbers.forEach((num, index) => {
    gsap.to(num, {
      y: (i, target) => {
        const rect = target.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
        return progress * 30; // Subtle parallax at 0.8x equivalent
      },
      ease: "none",
      scrollTrigger: {
        trigger: capabilitiesSection,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  // Animate capabilities into view with horizontal slide from spine
  capabilities.forEach((capability, index) => {
    // Text-slide entrance animation - slides horizontally from spine
    ScrollTrigger.create({
      trigger: capability,
      start: "top 80%",
      onEnter: () => {
        capability.classList.add("in-view");
        positionNumbers();
      },
      onLeaveBack: () => {
        capability.classList.remove("in-view");
      },
    });
  });

  // Pinned numbers - activate based on which capability is in view
  capabilities.forEach((capability, index) => {
    ScrollTrigger.create({
      trigger: capability,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        capabilitiesNumbers.forEach((num, i) => {
          if (i === index) {
            num.classList.add("active");
          } else {
            num.classList.remove("active");
          }
        });
      },
      onLeave: () => {
        capabilitiesNumbers[index].classList.remove("active");
      },
      onEnterBack: () => {
        capabilitiesNumbers.forEach((num, i) => {
          if (i === index) {
            num.classList.add("active");
          } else {
            num.classList.remove("active");
          }
        });
      },
      onLeaveBack: () => {
        capabilitiesNumbers[index].classList.remove("active");
      },
    });
  });

  // Plus icon rotation on hover + horizontal line extension with weighted spring
  document.querySelectorAll(".capability__plus").forEach((plus) => {
    plus.addEventListener("mouseenter", () => {
      // Rotate the plus to X with weighted spring feel
      gsap.to(plus.querySelector("svg"), {
        rotation: 45,
        duration: 0.6,
        ease: "power3.out",
      });

      // Extend the horizontal line with weighted feel
      const plusLine = plus.querySelector(".capability__plus-line");
      if (plusLine) {
        gsap.to(plusLine, {
          width: 200,
          duration: 0.6,
          ease: "power3.out",
        });
      }

      // Show methodology text with blur-to-clear transition
      const capability = plus.closest(".capability");
      if (capability) {
        gsap.to(capability.querySelector(".capability__methodology"), {
          maxHeight: "100px",
          marginTop: "var(--spacing-2xl)",
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    });

    plus.addEventListener("mouseleave", () => {
      // Rotate back to plus with weighted spring feel
      gsap.to(plus.querySelector("svg"), {
        rotation: 0,
        duration: 0.5,
        ease: "power3.out",
      });

      // Retract the horizontal line with weighted feel
      const plusLine = plus.querySelector(".capability__plus-line");
      if (plusLine) {
        gsap.to(plusLine, {
          width: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      // Hide methodology text with blur transition
      const capability = plus.closest(".capability");
      if (capability && !capability.classList.contains("active")) {
        gsap.to(capability.querySelector(".capability__methodology"), {
          maxHeight: 0,
          marginTop: 0,
          opacity: 0,
          filter: "blur(10px)",
          y: 10,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    });
  });

  // Click to toggle methodology reveal
  document.querySelectorAll(".capability").forEach((capability) => {
    capability.addEventListener("click", (e) => {
      // Don't toggle if clicking on plus icon (it has its own hover effect)
      if (e.target.closest(".capability__plus")) return;

      // Close other open capabilities
      document.querySelectorAll(".capability.active").forEach((activeCap) => {
        if (activeCap !== capability) {
          activeCap.classList.remove("active");
        }
      });

      // Toggle current capability
      capability.classList.toggle("active");
    });
  });

  // Background color shift between capabilities
  capabilities.forEach((capability, index) => {
    const bgColors = ["#111111", "#0f0f0f", "#0d0d0d"];

    ScrollTrigger.create({
      trigger: capability,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(capabilitiesSection, {
          backgroundColor: bgColors[index] || "#111111",
          duration: 0.8,
          ease: "power3.out",
        });
      },
    });
  });
}

function animateServicesSection() {
  // Animate services header
  gsap.to(".services__label", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services",
      start: "top 80%",
    },
  });

  gsap.to(".services__title", {
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".services",
      start: "top 70%",
      onEnter: () => {
        gsap.to(".services__title", {
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      },
    },
  });

  // Animate service monoliths
  gsap.utils.toArray(".service-monolith").forEach((item, index) => {
    gsap.to(item, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          item.classList.add("visible");
        },
      },
    });

    gsap.set(item, { opacity: 0, y: 30 });
  });

  // Spine drawing animation
  gsap.to(".services__spine", {
    height: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".services",
      start: "top 60%",
      end: "bottom 40%",
      scrub: 1,
    },
  });

  gsap.set(".services__label", { y: 20, opacity: 0 });
  gsap.set(".services__title", { y: 30 });
  gsap.set(".services__spine", { height: 0 });
}

function animateProjectsSection() {
  // Animate projects header
  gsap.to(".projects__label", {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
    },
  });

  gsap.to(".projects__title", {
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".projects",
      start: "top 70%",
      onEnter: () => {
        gsap.to(".projects__title", {
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      },
    },
  });

  gsap.set(".projects__label", { y: 20, opacity: 0 });
  gsap.set(".projects__title", { y: 30 });

  // Animate project cards as they come into view
  gsap.utils.toArray(".project-card").forEach((card, index) => {
    gsap.to(card, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "left 90%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.set(card, { opacity: 0, x: 50 });
  });

  // Horizontal scroll progress for scroll track
  const projectsScroll = document.getElementById("projects-scroll");
  if (projectsScroll) {
    projectsScroll.addEventListener("scroll", updateScrollTrack);
  }
}

function animateInviteSection() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".invite",
      start: "top 70%",
      end: "bottom 30%",
      toggleActions: "play none none reverse",
    },
  });

  tl.to(".invite__title", {
    y: 0,
    duration: 1,
    ease: "power3.out",
  }).to(
    ".invite__buttons",
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5"
  );

  gsap.set(".invite__title", { y: 50 });
  gsap.set(".invite__buttons", { y: 30, opacity: 0 });
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

  // Update active nav link on scroll
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav__link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });

    // Handle capabilities section specifically (replaces services)
    if (current === "capabilities") {
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === "#capabilities") {
          link.classList.add("active");
        }
      });
    }
  });
}

function initializeMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-menu__link");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking a link
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }
}

function initializeScrollTrack() {
  const scrollProgress = document.getElementById("scroll-progress");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    if (scrollProgress) {
      // Map scroll percentage to the track height (200px - 40px = 160px range)
      const trackHeight = 160;
      const offset = (scrollPercent / 100) * trackHeight;
      scrollProgress.style.transform = `translateY(${offset}px)`;
    }
  });
}

function hidePreloader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.classList.add("hide");
        setTimeout(() => {
          preloader.remove();
        }, 700);
      }
    }, 2000); // Show preloader for 2 seconds
  });
}

// Add parallax effect to hero portrait
ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: "bottom top",
  onUpdate: (self) => {
    const portrait = document.querySelector(".hero__portrait");
    if (portrait) {
      gsap.to(portrait, {
        y: self.progress * -100,
        ease: "none",
      });
    }
  },
});

// Add hover animations for project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card.querySelector(".project-card__image img"), {
      scale: 1.02,
      duration: 0.6,
      ease: "power3.out",
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card.querySelector(".project-card__image img"), {
      scale: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  });
});

// Add hover animations for service monoliths
document.querySelectorAll(".service-monolith").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    gsap.to(item, {
      backgroundColor: "rgba(255, 255, 255, 0.02)",
      duration: 0.3,
    });
  });

  item.addEventListener("mouseleave", () => {
    gsap.to(item, {
      backgroundColor: "transparent",
      duration: 0.3,
    });
  });

  // Click to reveal text
  item.addEventListener("click", (e) => {
    // Don't trigger if clicking on plus icon
    if (e.target.closest(".service-monolith__plus")) return;

    // Close other open monoliths
    document
      .querySelectorAll(".service-monolith.active")
      .forEach((activeItem) => {
        if (activeItem !== item) {
          activeItem.classList.remove("active");
        }
      });

    // Toggle current monolith
    item.classList.toggle("active");
  });
});

// Add click handler for plus icons
document.querySelectorAll(".service-monolith__plus").forEach((plus) => {
  plus.addEventListener("click", (e) => {
    const monolith = e.target.closest(".service-monolith");
    // Close other open monoliths
    document
      .querySelectorAll(".service-monolith.active")
      .forEach((activeItem) => {
        if (activeItem !== monolith) {
          activeItem.classList.remove("active");
        }
      });

    // Toggle current monolith
    monolith.classList.toggle("active");
  });
});

// Add hover animations for pill buttons
document.querySelectorAll(".pill-button, .invite__button").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      y: -3,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});

// Add hover animation for circular arrow
const circularArrow = document.querySelector(".circular-arrow");
if (circularArrow) {
  circularArrow.addEventListener("mouseenter", () => {
    gsap.to(circularArrow, {
      scale: 1.1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  });

  circularArrow.addEventListener("mouseleave", () => {
    gsap.to(circularArrow, {
      scale: 1,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  });
}

// Add scroll-triggered animations for footer
gsap.from(".footer", {
  opacity: 0,
  y: 30,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 90%",
  },
});

// ============================================
// MASKED TEXT REVEAL ANIMATIONS
// ============================================

function initializeMaskedTextReveals() {
  // For elements that already have mask-reveal wrapper in HTML
  // Set initial state and create scroll-triggered animations

  // Services title
  const servicesTitle = document.querySelector(".services__title");
  if (servicesTitle) {
    ScrollTrigger.create({
      trigger: ".services",
      start: "top 70%",
      onEnter: () => {
        gsap.to(".services__title", {
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(".services__title", {
          y: 50,
          duration: 0.5,
          ease: "power2.in",
        });
      },
    });
  }

  // Projects title
  const projectsTitle = document.querySelector(".projects__title");
  if (projectsTitle) {
    ScrollTrigger.create({
      trigger: ".projects",
      start: "top 70%",
      onEnter: () => {
        gsap.to(".projects__title", {
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(".projects__title", {
          y: 50,
          duration: 0.5,
          ease: "power2.in",
        });
      },
    });
  }

  // Invite title
  const inviteTitle = document.querySelector(".invite__title");
  if (inviteTitle) {
    ScrollTrigger.create({
      trigger: ".invite",
      start: "top 70%",
      onEnter: () => {
        gsap.to(".invite__title", {
          y: 0,
          duration: 1,
          ease: "power3.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(".invite__title", {
          y: 80,
          duration: 0.5,
          ease: "power2.in",
        });
      },
    });
  }

  // Service monolith titles - NEW Vertical Blueprint style
  document.querySelectorAll(".service-monolith__title").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        const monolith = el.closest(".service-monolith");
        if (monolith) {
          monolith.classList.add("visible");
        }
      },
      onLeaveBack: () => {
        const monolith = el.closest(".service-monolith");
        if (monolith) {
          monolith.classList.remove("visible");
        }
      },
    });
  });

  // Project card titles
  document.querySelectorAll(".project-card__title").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => {
        gsap.fromTo(
          el,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
        );
      },
      onLeaveBack: () => {
        gsap.to(el, { y: 20, opacity: 0, duration: 0.3 });
      },
    });
  });

  // Services tagline text
  const taglineText = document.querySelector(".services__tagline-text");
  if (taglineText) {
    ScrollTrigger.create({
      trigger: ".services__tagline",
      start: "top 80%",
      onEnter: () => {
        gsap.fromTo(
          ".services__tagline-text",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
      },
      onLeaveBack: () => {
        gsap.to(".services__tagline-text", {
          y: 50,
          opacity: 0,
          duration: 0.5,
        });
      },
    });
  }
}

// ============================================
// PROJECTS SECTION - THE MONOLITH SPREAD
// Full-Bleed Editorial with Subtle Parallax
// ============================================

function initializeProjectsSection() {
  // Initialize simple parallax (title and image with different speeds)
  initializeSimpleParallax();

  // Initialize fade-in animations
  initializeProjectAnimations();

  // Initialize scroll progress indicator
  initializeScrollProgress();

  // Spine line visibility
  initializeSpineLine();
}

// Simple Parallax - Only Image has different scroll speed
function initializeSimpleParallax() {
  const projectMonoliths = document.querySelectorAll(".project-monolith");

  projectMonoliths.forEach((monolith) => {
    const preview = monolith.querySelector(".project-monolith__preview");

    if (preview) {
      // Image moves slightly - subtle parallax
      gsap.to(preview, {
        y: (i, target) => {
          const rect = target.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
          const progress =
            (viewportHeight - rect.top) / (viewportHeight + rect.height);
          return progress * 20; // Subtle movement
        },
        ease: "none",
        scrollTrigger: {
          trigger: monolith,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  });
}

// Project fade-in animations
function initializeProjectAnimations() {
  const projectMonoliths = document.querySelectorAll(".project-monolith");

  if (!projectMonoliths.length) return;

  projectMonoliths.forEach((monolith, index) => {
    const text = monolith.querySelector(".project-monolith__text");
    const preview = monolith.querySelector(".project-monolith__preview");

    // Set initial states
    gsap.set(text, { opacity: 0, y: 30 });
    gsap.set(preview, { opacity: 0, y: 20 });

    // Animate in when entering viewport
    ScrollTrigger.create({
      trigger: monolith,
      start: "top 70%",
      onEnter: () => {
        gsap.to(text, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
        gsap.to(preview, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1,
        });
      },
      once: true,
    });
  });
}

// Scroll Progress Indicator - Copper dot moves along line
function initializeScrollProgress() {
  const projectsSection = document.querySelector(".projects");
  const scrollProgress = document.getElementById("projects-scroll-progress");
  const scrollDot = document.getElementById("projects-scroll-dot");

  if (!scrollProgress || !scrollDot) return;

  // Show/hide based on projects section visibility
  ScrollTrigger.create({
    trigger: projectsSection,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: () => scrollProgress.classList.add("visible"),
    onLeave: () => scrollProgress.classList.remove("visible"),
    onEnterBack: () => scrollProgress.classList.add("visible"),
    onLeaveBack: () => scrollProgress.classList.remove("visible"),
  });

  // Move copper dot based on scroll progress within projects
  ScrollTrigger.create({
    trigger: projectsSection,
    start: "top top",
    end: "bottom bottom",
    onUpdate: (self) => {
      const progress = self.progress;
      const maxTravel = 53;
      const dotPosition = progress * maxTravel;
      scrollDot.style.top = `${dotPosition}px`;
    },
  });
}

// Spine line visibility for projects section
function initializeSpineLine() {
  const projectsSection = document.querySelector(".projects");
  const projectsSpine = document.getElementById("projects-spine");

  if (!projectsSection || !projectsSpine) return;

  ScrollTrigger.create({
    trigger: projectsSection,
    start: "top 80%",
    end: "bottom 20%",
    onEnter: () => projectsSpine.classList.add("visible"),
    onLeave: () => projectsSpine.classList.remove("visible"),
    onEnterBack: () => projectsSpine.classList.add("visible"),
    onLeaveBack: () => projectsSpine.classList.remove("visible"),
  });
}

// ============================================
// CURSOR LENS EFFECT (Optional - for desktop only)
// ============================================

function initializeCursorLens() {
  const cursorLens = document.getElementById("cursor-lens");
  const cursorLensImage = document.getElementById("cursor-lens-image");
  const projectMonoliths = document.querySelectorAll(".project-monolith");

  if (!cursorLens || !cursorLensImage) return;

  // Only enable on non-mobile devices
  if (window.innerWidth <= 768) return;

  let isOverProject = false;

  projectMonoliths.forEach((monolith) => {
    const image = monolith.querySelector(".project-monolith__image");

    if (image) {
      monolith.addEventListener("mouseenter", () => {
        isOverProject = true;
        cursorLensImage.src = image.src;
        cursorLensImage.alt = image.alt;
        cursorLens.classList.add("active");
      });

      monolith.addEventListener("mousemove", (e) => {
        if (isOverProject) {
          gsap.to(cursorLens, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out",
          });
        }
      });

      monolith.addEventListener("mouseleave", () => {
        isOverProject = false;
        cursorLens.classList.remove("active");
      });
    }
  });
}

// ============================================
// QUICK VIEW MODAL
// ============================================

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
      const data = projectData[projectId];

      if (data) {
        openQuickView(data);
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

  function openQuickView(data) {
    const image = document.getElementById("quick-view-image");
    const number = document.getElementById("quick-view-number");
    const title = document.getElementById("quick-view-title");
    const description = document.getElementById("quick-view-description");
    const architecture = document.getElementById("quick-view-architecture");
    const tech = document.getElementById("quick-view-tech");

    if (image) image.src = data.image;
    if (number) {
      const index =
        Object.keys(projectData).indexOf(
          Object.keys(projectData).find((key) => projectData[key] === data)
        ) + 1;
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
    if (lenis) lenis.stop();
  }

  function closeQuickView() {
    quickView.classList.remove("active");
    document.body.style.overflow = "";

    // Re-enable lenis
    if (lenis) lenis.start();
  }
}
