const hidObserver = new IntersectionObserver((hiddens) => {
    hiddens.forEach((hidden) => {
        if (hidden.isIntersecting) {
            hidden.target.classList.add('scroll-fadein');
        } else {
            hidden.target.classList.remove('scroll-fadein');
        }
    });
});

const hidToShow = document.querySelectorAll('.scroll-hidden');
hidToShow.forEach((el) => hidObserver.observe(el));