const hobserver = new IntersectionObserver((hiddens) => {
    hiddens.forEach((hidden) => {
        if (hidden.isIntersecting) {
            hidden.target.classList.add('show-scroll');
        } else {
            hidden.target.classList.remove('show-scroll');
        }
    });
});

const horizontalHidden = document.querySelectorAll('.hid-scroll');
horizontalHidden.forEach((el) => hobserver.observe(el));