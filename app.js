//Header

const heroText = document.querySelector(".highlight");
const header = document.querySelector("header");

const observeHeader = new IntersectionObserver((entry) => {
    return (header.className = entry[0].isIntersecting ? null : "scrolled");
});

observeHeader.observe(heroText);

//Scroll

const scrollFunction = () => {
    if (window.innerWidth > 720) {
        window.addEventListener("scroll", () => {
            document.querySelectorAll("main>section").forEach((sec) => {
                const scroll = window.scrollY;
                const offsetTop = sec.offsetTop;
                const height = sec.offsetHeight;
                const headerHeight = header.offsetHeight;

                if (
                    scroll + headerHeight >= offsetTop &&
                    scroll <= height + offsetTop
                ) {
                    const id = sec.getAttribute("id");
                    document.querySelectorAll("header nav ul li").forEach((li) => {
                        li.classList.remove("active");
                    });
                    document
                        .querySelector(`header nav ul li a[href*="${id}"]`)
                        .parentElement.classList.add("active");
                    return;
                }
            });
        });
    }
};

scrollFunction();
window.addEventListener("resize", scrollFunction);

//Hamburger

const menu = document.querySelector(".menu-alt");
const hamburger = document.querySelector(".hamburger");

const closeMenu = () => {
    hamburger.classList.remove("menu-closed");
    menu.classList.remove("show");
};

hamburger.addEventListener("click", (e) => {
    if (e.target.classList.contains("menu-closed")) {
        closeMenu();
    } else {
        hamburger.classList.add("menu-closed");
        menu.classList.add("show");
    }
});

menu.querySelectorAll("a").forEach((li) => {
    li.addEventListener("click", closeMenu);
});

// Back to top

document.querySelector(".fa-arrow-circle-up").addEventListener("click", () => {
    window.scrollTo(0, 0);
});

//about cards

const aboutCards = document.querySelectorAll(".about-card");

const aboutCardsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                aboutCardsObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4,
    }
);

aboutCards.forEach((card) => aboutCardsObserver.observe(card));

//testimonials

const testimonials = document.querySelectorAll(".testimonial");

const testimonialObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show-test");
                testimonialObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,
    }
);

testimonials.forEach((testimonial) => testimonialObserver.observe(testimonial));

//feedback input effect

const feedInput = document.querySelector("#feed-text");
const legend = document.querySelector("legend");
feedInput.addEventListener("focus", () => {
    legend.textContent = "Enter Feedback Here";
    legend.className = "anime";
});
feedInput.addEventListener("blur", () => {
    if (!feedInput.value.length) {
        legend.textContent = "";
        legend.className = "";
    }
});

//form handler

document.querySelectorAll("form").forEach((form) =>
    form.addEventListener("submit", (e) => {
        e.preventDefault();
    })
);

document.querySelector(".to-booking").addEventListener("click", () => {
    const bookingPagePosition = document.querySelector("#booking").offsetTop;
    window.scrollTo(0, bookingPagePosition);
});

//Loader

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".loader").classList.add("loaded");
});