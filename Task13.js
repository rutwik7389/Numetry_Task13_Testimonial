const testimonials = [
    {
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        name: "Sam Morgan",
        feedback: "This service is amazing! Highly recommended.",
        rating: 5
    },
    {
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        name: "Jane layz",
        feedback: "Had a great experience, will use again!",
        rating: 4
    },
    {
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        name: "Robert hook",
        feedback: "Fast and efficient, very satisfied.",
        rating: 5
    }
];

const slider = document.getElementById("testimonial-slider");

// Function to generate stars
const getStars = (rating) => "★".repeat(rating) + "☆".repeat(5 - rating);

// Function to load testimonials dynamically
const loadTestimonials = () => {
    slider.innerHTML = testimonials.map(testimonial => `
        <div class="testimonial">
            <img src="${testimonial.image}" alt="Client">
            <p class="name">${testimonial.name}</p>
            <p class="feedback">"${testimonial.feedback}"</p>
            <p class="stars">${getStars(testimonial.rating)}</p>
        </div>
    `).join('');
};

let index = 0;

// Function to move to the next slide
const nextSlide = () => {
    index = (index + 1) % testimonials.length;
    updateSlider();
};

// Function to move to the previous slide
const prevSlide = () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    updateSlider();
};

// Function to update slider position
const updateSlider = () => {
    slider.style.transform = `translateX(-${index * 100}%)`;
};

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

// Load testimonials on page load
loadTestimonials();
