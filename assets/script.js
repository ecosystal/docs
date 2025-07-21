let isThrottled = false;
let body;
let link;
let links = document.querySelectorAll('.nav-link');

document.addEventListener("DOMContentLoaded", () => {
    body = document.querySelector('#main-doc');
    link = document.querySelector('#intro__Getting_started_with_JavaScript');
    // links = document.getElementsByClassName('nav-link');
    // console.log(el.getBoundingClientRect());
    body.addEventListener("scroll", scrollHander, false);
    document.addEventListener('click', (e) => clickHander(e));
});

function clickHander(e) {
}

function scrollHander() {
    if (!isThrottled) {
        isThrottled = true;
        checkScrollPosition();
        setTimeout(() => {
            isThrottled = false;
        }, 33)
    }
}

function checkScrollPosition() {
    // console.log('body-top:', body.scrollTop);
    let bodyTop = body.scrollTop;
    links.forEach((link) => {
        let el = document.querySelector(link.hash)
        // console.log(link.hash, el.getBoundingClientRect().top);
        if (el.getBoundingClientRect().top <= 150) {
            links.forEach((l) => {
                if (l.hash === link.hash) {
                    l.classList.add('focus');
                } else {
                    l.classList.remove('focus');
                }
            });
        } else {
            link.classList.remove('focus');
        }
    });
}


