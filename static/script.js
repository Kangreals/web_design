function toggle() {
// mendapatkan elemen dari tombol sidebar (ham)
    const hamToggle = document.getElementById('hamToggle');
    const sidebar = document.getElementById('sidebar');

    sidebar.classList.toggle('active');
    hamToggle.classList.toggle('active');
}

document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const hamToggle = document.getElementById('hamToggle');
    const IsCloseInside = sidebar.contains(event.target) || hamToggle.contains(event.target)

    if (!IsCloseInside) {
        sidebar.classList.remove('active');
        hamToggle.classList.remove('active');
    }
})

document.addEventListener('click', (event) => {
    const sidebar = document.getElementById('sidebar');
    const hamToggle = document.getElementById('hamToggle');
    const closeBtn = document.getElementById('close');

    closeBtn.onclick = function() {
        sidebar.classList.remove('active');
        hamToggle.classList.remove('active');
    }
})

// Animation Function

// animation img-page
function anim1() {
    const ele = document.querySelectorAll('.img-page1');

    for (let el of ele) {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.classList.add('active')
        }
    }
}

window.addEventListener('scroll', anim1)
anim1();

// animation page1
function anim2() {
    const ele = document.querySelectorAll('.page1');

    for (let el of ele) {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.classList.add('active')
        }
    }
}

window.addEventListener('scroll', anim2)
anim2();

// animation page2
function anim3() {
    const ele = document.querySelectorAll('.page2');

    for (let el of ele) {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.classList.add('active')
        }
    }
}

window.addEventListener('scroll', anim3)
anim3();

// animasi image ptoject
function animpro() {
    const ele = document.querySelectorAll('.card1');

    for (let el of ele) {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.classList.add('active')
        }
    }
}

window.addEventListener('scroll', animpro)
animpro()

function animpro2() {
    const ele = document.querySelectorAll('.card2');

    for (let el of ele) {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.classList.add('active')
        }
    }
}

window.addEventListener('scroll', animpro2)
animpro2()

// animation page 3
function pageText() {
    const ele = document.querySelectorAll('.page3-text');

    for (let el of ele) {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.classList.add('active')
        }
    }
}

window.addEventListener('scroll', pageText)
pageText()

function pageForm() {
    const ele = document.querySelectorAll('form');

    for (let el of ele) {
        let position = el.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 50) {
            el.classList.add('active')
        }
    }
}

window.addEventListener('scroll', pageForm)
pageForm()