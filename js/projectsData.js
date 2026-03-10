// Project data for the portfolio
const projectsData = [
  {
    id: "slomandaz",
    label: "DEMO E-COMMERCE SITE",
    title: "SLO-MANDAZ",
    description:
      "A premium e-commerce platform for luxury furniture, featuring smooth animations, intuitive navigation, and a seamless shopping experience designed to showcase high-end pieces.",
    tech: ["NEXT.JS", "GSAP", "TAILWIND"],
    architecture: [
      "Next.js 14 App Router for optimal performance",
      "GSAP ScrollTrigger for cinematic animations",
      "Tailwind CSS for responsive styling",
      "Framer Motion for micro-interactions",
      "Optimized image loading with next/image",
    ],
    image: "assets/images/slomandaz-mockup.png",
    link: "https://slomandazfurniture.vercel.app/",
  },
  {
    id: "concave",
    label: "RESTAURANT WEBSITE",
    title: "CONCAVE",
    description:
      "An elegant restaurant portfolio website with immersive visual storytelling, showcasing the culinary experience through beautiful imagery and smooth transitions.",
    tech: ["NEXT.JS", "GSAP", "GLSL"],
    architecture: [
      "Next.js 14 with static site generation",
      "Custom GLSL shaders for visual effects",
      "GSAP for timeline-based animations",
      "Responsive grid layout system",
      "Accessibility-first design approach",
    ],
    image: "assets/images/concave-mockup.png",
    link: "https://concaveats.vercel.app/",
  },
  {
    id: "unform",
    label: "BRUTALISM ARCHITECTURE FIRM",
    title: "UNFORM",
    description:
      "A bold creative portfolio pushing the boundaries of web design with experimental layouts, 3D elements, and interactive experiences.",
    tech: ["REACT", "THREE.JS", "GSAP"],
    architecture: [
      "React with Three.js for 3D rendering",
      "Custom WebGL shaders",
      "GSAP ScrollTrigger for scroll-driven animations",
      "Performance-optimized asset loading",
      "Interactive canvas-based backgrounds",
    ],
    image:
      "assets/images/Screenshot 2026-03-08 at 13-43-02 PROJECTS UNFORM.png",
    link: "",
  },
  {
    id: "portfolio",
    label: "PERSONAL",
    title: "PORTFOLIO",
    description:
      "This portfolio website itself - a testament to front-end mastery with horizontal scrolling, parallax effects, and buttery smooth interactions.",
    tech: ["NEXT.JS", "GSAP", "LENIS"],
    architecture: [
      "Next.js 14 with App Router",
      "GSAP ScrollTrigger for horizontal scroll",
      "Lenis for smooth scroll experience",
      "Custom cursor with lens reveal effect",
      "Modular component architecture",
    ],
    image: "assets/images/Radiant Smile in Black and White.png",
    link: "#",
  },
];

// Export for use in other files
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projectsData };
}
