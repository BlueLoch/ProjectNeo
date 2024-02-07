window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        sessionStorage.setItem('viewMode', 'light');
    } else {
        sessionStorage.setItem('viewMode', 'dark');
    }
    changeTheme();
});

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
    checkCookies();
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

function checkCookies() {
    let sess = sessionStorage.getItem('seenCookies');

    if (sess == "yes") {
        document.getElementById('cookie-pop').remove();
    } else {
        sessionStorage.setItem('seenCookies', 'yes');
    }
}