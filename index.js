const testimonialsData = [
  {
    image: "./assets/t-image1.jpeg",
    review:
      "I made the right choice by choosing Morsy as a coach as he helped me reach my goal",
    name: "Marwan Ahmed",
    status: "Lawyer",
  },
  {
    image: "./assets/t-image2.jpeg",
    review:
      "Coach Morsy always listens and provides the best plan that suits me better",
    name: "Eslam Abo El-enien",
    status: "Pharmacist",
  },
  {
    image: "./assets/t-image3.jpeg",
    review:
      "I was surprised by the results month after month, and I love the fact that he follows me all day whenever I have a question",
    name: "Hussein Talal",
    status: "Accountant",
  },
  {
    image: "./assets/t-image4.jpeg",
    review:
      "He always convinces me with his logical answers, and he communicates in a very professional and friendly way",
    name: "Ahmed Ramzy",
    status: "Engineer",
  },
];

testimonialsData.forEach((testimonial) => {
  const image = new Image();
  image.src = testimonial.image;
});

const testimonialReview = document.getElementById("testimonialReview");
const testimonialInfo = document.getElementById("testimonialInfo");
const testimonialImage = document.getElementById("testimonialImage");
const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");

let currentTestimonialIndex = 0;

//  update testimonial content based on index
function updateTestimonialContent() {
  const testimonial = testimonialsData[currentTestimonialIndex];
  testimonialReview.textContent = testimonial.review;
  testimonialInfo.textContent = `${testimonial.name} - ${testimonial.status}`;
  testimonialImage.src = testimonial.image;
}

leftArrow.addEventListener("click", () => {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonialsData.length) %
    testimonialsData.length;
  updateTestimonialContent();
});

rightArrow.addEventListener("click", () => {
  currentTestimonialIndex =
    (currentTestimonialIndex + 1) % testimonialsData.length;
  updateTestimonialContent();
});

updateTestimonialContent();

const headerMenu = document.querySelector(".header-menu");

const menuItems = headerMenu.querySelectorAll("li");

const bars = document.querySelector(".bars");
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    headerMenu.classList.toggle("closed");
  });
});
bars.addEventListener("click", () => {
  headerMenu.classList.toggle("header-menu-active");
  headerMenu.classList.add("open");
});

// const bars = document.querySelector(".bars");
// const headerMenu = document.querySelector(".header-menu");

// bars.addEventListener("click", (event) => {
//   headerMenu.classList.toggle("open");
//   event.stopPropagation();
// });

// document.addEventListener("click", () => {
//   headerMenu.classList.remove("open");
// });

// const menuItems = headerMenu.querySelectorAll("li");
// menuItems.forEach((menuItem) => {
//   menuItem.addEventListener("click", (event) => {
//     headerMenu.classList.remove("open");
//     event.stopPropagation();
//   });
// });
