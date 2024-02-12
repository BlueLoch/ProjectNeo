function initPage() {
    setTheme();
    checkCookies();
    fixFooter();
    checkAnims();
}

function setTheme() {
    let mode = sessionStorage.getItem('viewMode');

    if (mode == 'light') {
        document.getElementById('docBody').classList.remove('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
    }
    else if (mode == 'dark') {
        document.getElementById('docBody').classList.add('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
    }
    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            sessionStorage.setItem('viewMode', 'dark');
            document.getElementById('docBody').classList.add('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
        } else {
            sessionStorage.setItem('viewMode', 'light');
            document.getElementById('docBody').classList.remove('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
        }
    }

    toggleThemeables();
}

function changeTheme() {
    let mode = sessionStorage.getItem('viewMode');

    if (mode == 'light') {
        sessionStorage.setItem('viewMode', 'dark');
        document.getElementById('docBody').classList.add('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
    }
    else if (mode == 'dark') {
        sessionStorage.setItem('viewMode', 'light');
        document.getElementById('docBody').classList.remove('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
    }
    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            sessionStorage.setItem('viewMode', 'dark');
            document.getElementById('docBody').classList.add('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
        } else {
            sessionStorage.setItem('viewMode', 'light');
            document.getElementById('docBody').classList.remove('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
        }
    }

    toggleThemeables();
}

// changes light to dark mode and vice versa, changing all relevant elements as necessary
function toggleTheme() {
    let mode = sessionStorage.getItem('viewMode');

    if (mode == 'light') {
        sessionStorage.setItem('viewMode', 'dark');
        document.getElementById('docBody').classList.add('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
    }
    else if (mode == 'dark') {
        sessionStorage.setItem('viewMode', 'light');
        document.getElementById('docBody').classList.remove('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
    }
    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            sessionStorage.setItem('viewMode', 'dark');
            document.getElementById('docBody').classList.add('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
        } else {
            sessionStorage.setItem('viewMode', 'light');
            document.getElementById('docBody').classList.remove('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
        }
    }

    toggleThemeables();
}

// toggles all images that can be changed between light and dark mode
function toggleThemeables() {
    let mode = sessionStorage.getItem('viewMode');
    let themeables = document.getElementsByClassName('themeable');

    for (let i = 0; i < themeables.length; i++) {
        let source = themeables[i].getAttribute('src');
        if (mode == "light") {
            themeables[i].src = source.replace('black', 'white');
        } else {
            themeables[i].src = source.replace('white', 'black');
        }
    }
}


// checks if user has seen the cookie popup yet, and if so deletes it from the page
function checkCookies() {
    let sess = sessionStorage.getItem('seenCookies');

    if (sess == "yes") {
        document.getElementById('cookie-pop').remove();
    } else {
        sessionStorage.setItem('seenCookies', 'yes');
    }
}

// checks if the footer needs attached to the bottom of the page or not, and updates as necessary
function fixFooter() {
    let height = window.innerHeight;
    let footer = document.getElementById('footer');
    let footerPos = footer.getBoundingClientRect().bottom;

    if (footerPos < height) {
        footer.classList.add('sticky-footer');
    }
    else {
        footer.classList.remove('sticky-footer');
    }
}

function checkAnims() {
    let showAnims = window.matchMedia(`(prefers-reduced-motion: no-preference)`) === true;

    if (!showAnims) {
        let animatedEls = document.getElementsByClassName('mover');
        for (let i = 0; i < animatedEls.length; i++) {
            animatedEls[i].classList.remove('slideleft');
        }
    }
}




// Fun stuff for Nessie. I will protect this creature with my life
const pause = ms => new Promise(res => setTimeout(res, ms));

async function doAFlip() {
    let x = document.getElementById('nessie');
    x.animate([
        { transform: "rotate(0deg)" },
        { transform: "rotate(100deg)" },
        { transform: "rotate(300deg)" },
        { transform: "rotate(360deg)" },
    ],
        {
            duration: 1000,
            iterations: 1,
        });
}