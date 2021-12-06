window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector('header').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
    }
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

setInterval(rotateTestimonials, 4000);

window.addEventListener('scroll', () => {
    document.querySelectorAll('main>section').forEach(sec => {
        const scroll = window.scrollY;
        const offsetTop = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scroll >= offsetTop && scroll < height + offsetTop) {
            const id = sec.getAttribute('id');
            document.querySelectorAll('header nav ul li').forEach(li => {
                li.classList.remove('active');
                document.querySelector(`header nav ul li a[href*="${id}"]`).parentElement.classList.add('active');
            });
        }
    });
});