//Scroll functionality
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector('header').classList.add('scrolled');
        document.querySelector('#to-top').classList.add('show-top');
    } else {
        document.querySelector('header').classList.remove('scrolled');
        document.querySelector('#to-top').classList.remove('show-top');
    }
});

const headerHeight = document.querySelector('header').offsetHeight;


window.addEventListener('scroll', () => {
    document.querySelectorAll('main>section').forEach(sec => {
        const scroll = window.scrollY;
        const offsetTop = sec.offsetTop;
        const height = sec.offsetHeight;

        if (scroll + headerHeight >= offsetTop && scroll <= height + (offsetTop)) {
            const id = sec.getAttribute('id');
            document.querySelectorAll('header nav ul li').forEach(li => {
                li.classList.remove('active');
            });
            document.querySelector(`header nav ul li a[href*="${id}"]`).parentElement.classList.add('active');
            return;
        }
    });
});
// Back to top
document.querySelector('.fa-arrow-circle-up').addEventListener('click', () => {
    window.scrollTo(0, 0);
});

//testimonials

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

setInterval(rotateTestimonials, 5000);

//feedback input effect

const feedInput = document.querySelector('#feed-text');
const legend = document.querySelector('legend');
feedInput.addEventListener('focus', () => {
    legend.textContent = 'Enter Feedback Here';
    legend.className = 'anime';
});
feedInput.addEventListener('blur', () => {
    if (!feedInput.value.length) {
        legend.textContent = '';
        legend.className = '';
    }
});

//form handler

document.querySelectorAll('form').forEach(form => form.addEventListener('submit', (e) => {
    e.preventDefault();
}));

//Hamburger
const menu = document.querySelector('.menu-alt');
const hamburger = document.querySelector('.hamburger');

const closeMenu = () => {
    hamburger.classList.remove('menu-closed');
    menu.classList.remove('show');
}

hamburger.addEventListener('click', (e) => {
    if (e.target.classList.contains('menu-closed')) {
        closeMenu();
    } else {
        hamburger.classList.add('menu-closed');
        menu.classList.add('show');
    }
});

menu.querySelectorAll('a').forEach(li => {
    li.addEventListener('click', closeMenu);
});

document.querySelector('.to-booking').addEventListener('click', () => {
    const bookingPagePosition = document.querySelector('#booking').offsetTop;
    window.scrollTo(0, bookingPagePosition);
});