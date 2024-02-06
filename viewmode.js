window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        localStorage.setItem('viewMode', 'light');
    } else {
        localStorage.setItem('viewMode', 'dark');
    }
    changeTheme();
});

function setTheme() {
    let mode = localStorage.getItem('viewMode');

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
            localStorage.setItem('viewMode', 'dark');
            document.getElementById('docBody').classList.add('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
        } else {
            localStorage.setItem('viewMode', 'light');
            document.getElementById('docBody').classList.remove('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
        }
    }

    toggleThemeables();
}

function changeTheme() {
    let mode = localStorage.getItem('viewMode');

    if (mode == 'light') {
        localStorage.setItem('viewMode', 'dark');
        document.getElementById('docBody').classList.add('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
    }
    else if (mode == 'dark') {
        localStorage.setItem('viewMode', 'light');
        document.getElementById('docBody').classList.remove('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
    }
    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('viewMode', 'dark');
            document.getElementById('docBody').classList.add('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
        } else {
            localStorage.setItem('viewMode', 'light');
            document.getElementById('docBody').classList.remove('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
        }
    }

    toggleThemeables();
}

function toggleTheme() {
    let mode = localStorage.getItem('viewMode');

    if (mode == 'light') {
        localStorage.setItem('viewMode', 'dark');
        document.getElementById('docBody').classList.add('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
    }
    else if (mode == 'dark') {
        localStorage.setItem('viewMode', 'light');
        document.getElementById('docBody').classList.remove('darkmode');
        document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
        document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
    }
    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('viewMode', 'dark');
            document.getElementById('docBody').classList.add('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-white.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-white-filled.png";
        } else {
            localStorage.setItem('viewMode', 'light');
            document.getElementById('docBody').classList.remove('darkmode');
            document.getElementById('sidelogo').src = "/resources/img/logos/Text-black.png";
            document.getElementById('sidelogo-icon-img').src = "/resources/img/logos/Nessy-black-filled.png";
        }
    }

    toggleThemeables();
}

function toggleThemeables() {
    let mode = localStorage.getItem('viewMode');
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