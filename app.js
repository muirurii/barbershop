window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');

    }
});

document.querySelectorAll('nav ul li').forEach(li => {
    li.addEventListener('click', (e) => {
        document.querySelector('.active').classList.remove('active');
        e.target.parentElement.classList.add('active');
    });
});

const testimonialsArray = document.querySelectorAll('#testimonials-section #testimonials article');
const rotateTestimonials = () => {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    } else {
        testimonialsArray[0].classList.add('current');
    }
}

setInterval(rotateTestimonials, 4000)