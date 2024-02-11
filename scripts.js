function initPage() {
    setTheme();
}

function setTheme() {
    let mode = sessionStorage.getItem('viewMode');

    if (mode == 'light') {
        document.getElementById('docBody').classList.remove('darkmode');
    }
    else if (mode == 'dark') {
        document.getElementById('docBody').classList.add('darkmode');
    }
    else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            sessionStorage.setItem('viewMode', 'dark');
            document.getElementById('docBody').classList.add('darkmode');
        } else {
            sessionStorage.setItem('viewMode', 'light');
            document.getElementById('docBody').classList.remove('darkmode');
        }
    }

    toggleThemeables();
}

// toggles all images that can be changed between light and dark mode
function toggleThemeables() {
    let mode = sessionStorage.getItem('viewMode');
    let themeables = document.getElementsByClassName('themeable');

    console.log("called");

    for (let i = 0; i < themeables.length; i++) {
        let source = themeables[i].getAttribute('src');
        if (mode == "light") {
            themeables[i].src = source.replace('black', 'white');
        } else {
            themeables[i].src = source.replace('white', 'black');
        }
    }
}