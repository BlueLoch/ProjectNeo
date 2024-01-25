const hobserver = new IntersectionObserver((hiddens) => {
    hiddens.forEach((hidden) => {
        if (hidden.isIntersecting) {
            hidden.target.classList.add('show-scroll');
            hiddens.pop(hidden);
        }
    });
});

const horizontalHidden = document.querySelectorAll('.hid-scroll');
horizontalHidden.forEach((el) => hobserver.observe(el));