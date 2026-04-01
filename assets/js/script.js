'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
// testimonials (optional section)
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

if (testimonialsItem.length && modalContainer && modalCloseBtn && overlay) {

  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  }

  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  overlay.addEventListener("click", testimonialsModalFunc);
}



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

function renderMedia(mediaArray) {
  const mediaContainer = document.getElementById("modal-media");
  mediaContainer.innerHTML = "";

  mediaArray.forEach(item => {
    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = item.src;
      img.alt = item.alt || "";
      mediaContainer.appendChild(img);
    }

    if (item.type === "video") {
      const iframe = document.createElement("iframe");
      iframe.src = item.src;
      iframe.width = "100%";
      iframe.height = "315";
      iframe.allowFullscreen = true;
      mediaContainer.appendChild(iframe);
    }
  });
}

// MODAL ELEMENTS

const modal = document.getElementById("projectModal");
const modalClose = document.querySelector(".modal-close");

const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const modalGithub = document.getElementById("modal-github");
const modalDemo = document.getElementById("modal-demo");


// PROJECT DATA (PLACEHOLDERS FOR NOW)

const projects = {

  pear: {
    title: "PeAR Depth Estimation",
    image: "./assets/images/robotics-pear.jpg",
    description: "Depth estimation robotics project placeholder description.",
    github: "#",
    demo: "#"
  },

  "serial-arm": {
    title: "Industrial Serial-Arm Robot Manipulation",
    image: "./assets/images/industrial-arm.jpg",
    description: "Robotic manipulation system placeholder description.",
    github: "#",
    demo: "#"
  },

  "maze-runner": {
    title: "Escape Room Maze Runner Robot",
    image: "./assets/images/escape-room-robot.jpg",
    description: "Autonomous maze navigation robot placeholder description.",
    github: "#",
    demo: "#"
  },

  "solar-robot": {
    title: "Autonomous Solar Panel Replacement Robot",
    image: "./assets/images/solar-panel-robot.jpg",
    description: "Autonomous solar panel maintenance robot placeholder.",
    github: "#",
    demo: "#"
  },

  "mudra-ai": {
    title: "Mudra AI – ASL Gesture Translator",

    image: "./assets/projects/mudra-ai/thumbnail.png",

    media: [
      { type: "image", src: "./assets/projects/mudra-ai/2.png" },
      { type: "image", src: "./assets/projects/mudra-ai/3.png" },
      { type: "image", src: "./assets/projects/mudra-ai/5.png" },
      { type: "video", src: "https://www.youtube.com/embed/7l3xeGlZw1U" }
    ],


    description: `
    Mudra AI is a real-time American Sign Language (ASL) translation system that converts hand gestures into fluent English text and natural speech.
    
    Built as a full-stack AI pipeline, the system integrates computer vision, sequence modeling, large language models, and speech synthesis to enable seamless communication between Deaf/Hard-of-Hearing and hearing individuals.
    
    • Developed a real-time gesture recognition pipeline using MediaPipe Holistic, extracting 144 landmark-based features per frame (hands + pose)
    • Trained an LSTM-based TensorFlow model for temporal gesture classification, enabling accurate recognition of ASL letters and short phrases
    • Integrated Google Gemini API to transform raw gesture outputs into grammatically correct natural language
    • Implemented ElevenLabs text-to-speech for expressive, human-like voice output
    • Designed an interactive Streamlit interface for live camera input, text display, and audio playback
    
    Key Challenges & Solutions:
    • Built a custom ASL dataset due to lack of high-quality 3D motion data
    • Improved robustness with temporal smoothing, confidence filtering, and landmark normalization
    • Reduced inference latency using TensorFlow Lite and optimized pipeline execution
    
    Impact:
    Delivered a fully functional CV → ML → LLM → Speech pipeline within 24 hours at HackUMass XIII, demonstrating real-time translation of ASL into natural speech.
    
    Future Work:
    • Expand dataset to full conversational ASL
    • Add speech-to-sign reverse translation
    • Deploy on mobile / AR wearable platforms
    `,

    github: "https://github.com/Jahnavi-Prudhivi/MudraAI-ASL-To-Speech-Generator-",
    demo: "https://devpost.com/software/asl-gesture-application"
  },

  "traffic-sign": {
    title: "Traffic Sign Classification",
    image: "./assets/images/traffic-sign.jpg",
    description: "Machine learning model for traffic sign recognition.",
    github: "#",
    demo: "#"
  },

  tables4u: {
    title: "Tables4U Restaurant Booking System",
    image: "./assets/projects/tables4u/thumbnail.png",
    description: "Restaurant reservation system built with web technologies.",
    github: "https://github.com/vivekisreddy/Tables4U.git",
    demo: "#"
  },

  "http-server": {
    title: "HTTP Client & Server with Priority Scheduling",
    image: "./assets/images/http-client-server.jpg",
    description: "Custom HTTP server implementation with request prioritization.",
    github: "#",
    demo: "#"
  },

  "brooks-test": {
    title: "Brooks Automation Test Automation Engineer",
    image: "./assets/images/brooks-test-automation.jpg",
    description: "Industrial automation test infrastructure and tooling.",
    github: "#",
    demo: "#"
  },

  "brooks-intern": {
    title: "Brooks Automation Lab Test Engineering Intern",
    image: "./assets/images/brooks-intern.jpg",
    description: "Automation and validation for semiconductor robotics systems.",
    github: "#",
    demo: "#"
  },

  choremates: {
    title: "ChoreMates – Roommate Coordination App",
    description: "Full-stack roommate services platform with authentication, shared expense tracking, and collaborative grocery management built using React.js and AWS.",
    github: "#",
    demo: "#"
  },

  "ai-path-planning": {
    title: "AI Path Planning & Heuristic Optimization",
    description: "Implemented A* heuristic search for robot navigation in 2D grid environments and designed hill-climbing variants to analyze convergence behavior under obstacle constraints.",
    github: "#",
    demo: "#"
  }

};



// CLICK PROJECT CARD

document.querySelectorAll(".project-card").forEach(card => {

  card.addEventListener("click", () => {

    const projectID = card.dataset.project;

    const project = projects[projectID];

    modalTitle.textContent = project.title;
    renderMedia(project.media || [{ type: "image", src: project.image }]);
    modalDescription.textContent = project.description;
    modalGithub.href = project.github;
    modalDemo.href = project.demo;

    modal.classList.add("active");

  });

});



// CLOSE MODAL BUTTON

modalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});



// CLOSE IF CLICK OUTSIDE MODAL

modal.addEventListener("click", (e) => {

  if (e.target === modal) {
    modal.classList.remove("active");
  }

});