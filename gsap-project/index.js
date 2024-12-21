function cursor() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  body.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.x + "px",
      y: e.y + "px",
    });
  });
}

cursor();

function section1() {
  let t1 = gsap.timeline();
  t1.from(".header", {
    y: -50,
    opacity: 0,
    duration: 1,
  });

  t1.from(".text-content .head h1, .text-content .head p", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
  });
}

section1();

function section2() {
  let sectionTwo = document.querySelector(".section2");
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  // Update cursor position
  document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
    });
  });

  // Mouse enter event
  sectionTwo.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      height: "100px",
      width: "100px",
      fontSize: "25px",
      color: "black",
      margin: "20px",
      backgroundColor: "white",
    });
    cursor.innerHTML = "<i class='fa-solid fa-volume-high'></i>";

    gsap.to(body, {
      backgroundColor: "#0f0f0f",
      color: "white",
    });
  });

  // Mouse leave event
  sectionTwo.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      height: "18px",
      width: "18px",
      margin: "0",
    });
    cursor.innerHTML = "";

    gsap.to(body, {
      backgroundColor: "white",
      color: "#0f0f0f",
    });
  });
}

section2();

function section3() {
  let cursor = document.querySelector(".cursor");
  let sectionThree = document.querySelector(".section3");

  // NOW WE WANT TO CHANGE OUR CURSOR TO BLACK WHEN ENTER TO SECTION3

  sectionThree.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "#0f0f0f",
    });
  });
}

section3();

function sectionFour() {
  let sectionFor = document.querySelector(".section4");
  let cursor = document.querySelector(".cursor");

  sectionFor.addEventListener("mouseenter", () => {
    cursor.style.background = "#0f0f0f";
  });

  gsap.to(sectionFor, {
    backgroundColor: "#0f0f0f",
    color: "white",
    scrollTrigger: {
      trigger: ".section4 .four .moving-text",
      start: "bottom center",
      end: "bottom center",
      scrub: 2,
    },
  });

  gsap.to(".services", {
    color: "white",
    scrollTrigger: {
      trigger: ".section4 .four .moving-text",
      start: "bottom center",
      end: "bottom center",
      scrub: 2,
    },
  });

  sectionFor.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      backgroundColor: "white",
      scrollTrigger: {
        trigger: ".section4 .four .moving-text",
        start: "bottom center",
        end: "bottom center",
        scrub: 2,
      },
    });
  });

  sectionFor.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      backgroundColor: "#0f0f0f",
      color: "white",
      scrollTrigger: {
        trigger: ".section4 .four .moving-text",
        start: "bottom center",
        end: "bottom center",
        scrub: 2,
      },
    });
  });

  // Projects
  let parentEL = document.querySelector(".bg");
  let childEls = document.querySelectorAll(".first-project .first");

  // Hide all videos initially
  parentEL.querySelectorAll("video").forEach((video) => {
    video.style.display = "none";
  });

  childEls.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      let ids = item.getAttribute("data-id"); // Corrected attribute name

      let bgEl = document.querySelector(`.id-${ids}`);

      gsap.to(cursor, {
        height: "100px",
        width: "100px",
        duration: 0.1,
        innerHTML: "<p>See Project</p>",
        fontSize: "15px",
        margin: "20px",
      });

      // Hide all videos
      parentEL.querySelectorAll("video").forEach((video) => {
        video.style.display = "none";
      });

      // Show the selected video
      bgEl.style.display = "block";
    });

    item.addEventListener("mouseleave", () => {
      // Hide all videos when leaving the item
      parentEL.querySelectorAll("video").forEach((video) => {
        video.style.display = "none";
      });
      gsap.to(cursor, {
        height: "18px",
        width: "18px",
        duration: 0.1,
        innerHTML: "",
        margin: 0,
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", sectionFour);

function section5() {
  let sectionFive = document.querySelector(".section5");
  let cursor = document.querySelector("cursor");

  sectionFive.addEventListener(".mouseenter", () => {
    gsap.to(cursor, {
      background: "#0f0f0f",
      duration: 0.1,
    });
  });

  gsap.from(".section5 .five .left h1, .section5 .five .left h5", {
    y: 100,
    opacity: 0,
    stagger: 1,
    duration: 3,

    scrollTrigger: {
      trigger: ".section5 .five",
      start: "top 60%",
      end: "top 30%",
      scrub: 1,
    },
  });
}

section5();

function section7() {
  let cursor = document.querySelector(".cursor");
  let body = document.querySelector("body");

  let sectionSeven = document.querySelector(".section7");

  gsap.to(body, {
    background: "#0f0f0f",
    color: "white",
    scrollTrigger: {
      trigger: ".section6 .right",
      start: "bottom 60%",
      end: "bottom 40%",
      scrub: 1,
    },
  });

  sectionSeven.addEventListener("mouseenter", () => {
    gsap.to(cursor, {
      background: "white",
      duration: 1,
      scrollTrigger: {
        trigger: ".section6 .right",
        start: "bottom 60%",
        end: "bottom 40%",
        scrub: 1,
      },
    });
  });
}

section7();
function footer() {
  let footerElement = document.querySelector("footer");
  let footerLinks = footerElement.querySelectorAll("a"); // Select all links inside footer
  let body = document.querySelector("body");

  // Background color change for the body based on scroll
  gsap.to(body, {
    background: "#0f0f0f",
    color: "white",
    scrollTrigger: {
      trigger: ".section6 .right",
      start: "bottom 60%",
      end: "bottom 40%",
      scrub: 1,
    },
  });

  // Mouse enter - Change footer background, text, and link colors
  footerElement.addEventListener("mouseenter", () => {
    gsap.to(footerElement, {
      backgroundColor: "black",
      color: "white",
      duration: 0.5,
    });

    gsap.to(footerLinks, {
      color: "#f39c12", // Set links to a specific color on hover, e.g., orange
      duration: 0.5,
      stagger: 0.1, // Adds a slight delay for each link for a nice effect
    });
  });

  // Mouse leave - Revert footer background, text, and link colors
  footerElement.addEventListener("mouseleave", () => {
    gsap.to(footerElement, {
      backgroundColor: "white",
      color: "black",
      duration: 0.5,
    });

    gsap.to(footerLinks, {
      color: "black", // Revert links to default color
      duration: 0.5,
    });
  });
}

// Call the function to activate animations
footer();
