let nextBtn = document.querySelector(".next-btn")
let prevBtn = document.querySelector(".prev-btn")
let slides = document.querySelectorAll(".slide")
let numberofSlides = slides.length
let slideNumber = 0

// Slider Next Button 

nextBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
    slideNumber++

    if (slideNumber > (numberofSlides - 1)) {
        slideNumber = 0
    }

    slides[slideNumber].classList.add("active")
}

// Slider Previous Button 

prevBtn.onclick = () => {
    slides.forEach((slide) => {
        slide.classList.remove("active")
    })
    slideNumber--

    if (slideNumber < 0) {
        slideNumber = (numberofSlides - 1)
    }

    slides[slideNumber].classList.add("active")
}