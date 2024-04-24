import mobileNav from './modules/mobile-nav.js';
import footerLists from './modules/footer.js';
import player from './modules/player.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {

    spaceBetween: 18,

    breakpoints: {
        1260: {
            slidesPerView: 3,
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
footerLists();
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


