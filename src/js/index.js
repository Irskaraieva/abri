import mobileNav from './modules/mobile-nav.js';
import player from './modules/player.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener("DOMContentLoaded", function () {
    function handleLinkClick(link, list) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            list.classList.toggle("hide");
            const arrow = link.querySelector(".arrow-header");
            arrow.classList.toggle("rotate");
        });
    }

    const featuresLink = document.getElementById("features");
    const featuresList = document.querySelector(".features-wrapper");
    handleLinkClick(featuresLink, featuresList);

    const packegesLink = document.getElementById("packeges");
    const packegesList = document.querySelector(".packeges-wrapper");
    handleLinkClick(packegesLink, packegesList);

    const resourcesLink = document.getElementById("resources");
    const resourcesList = document.querySelector(".resources-wrapper");
    handleLinkClick(resourcesLink, resourcesList);
});

const swiper = new Swiper('.swiper', {

    spaceBetween: 18,

    breakpoints: {
        1260: {
            slidesPerView: 3.05,
            slidesPerGroup: 2,
        },
        900: {
            slidesPerView: 2.4,
            slidesPerGroup: 1,
        },
        600: {
            slidesPerView: 1.8,
            slidesPerGroup: 1,
        },
        400: {
            slidesPerView: 1.4,
        },
        300: {
            slidesPerView: 1.2,
        },
    },
});

const nav = document.getElementById('nav');
const navMobBtn = document.getElementById('nav-mob-btn');
const navLinks = document.querySelectorAll('.nav-list li');

mobileNav();
player();

navLinks.forEach(li => {
    li.addEventListener('click', () => {
        if (window.innerWidth < 1000) {
            navMobBtn.classList.toggle('active');
            document.body.classList.remove('no-scroll');
        }
    });
});

window.addEventListener('resize', function () {
    if (window.innerWidth > 1000) {
        document.body.classList.remove('no-scroll');
        navMobBtn.classList.remove('active');
        nav.style.display = 'flex'
    } else if ((!navMobBtn.classList.contains('active')) && (window.innerWidth < 1000)) {
        nav.style.display = 'none';
    }
});

