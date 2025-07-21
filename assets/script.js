const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});

window.addEventListener('load', function () {
    const gtScript = document.createElement('script');
    gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(gtScript);
});
function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'pt',
        autoDisplay: 'true',
        includedLanguages: 'en,es,fr,ru,zh-CN,ko,tr,ar,hi,id',
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL
    }, 'google_translate_element');
}
function resetToOriginalLanguage() {
    document.cookie = 'googtrans=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
    history.replaceState('', document.title, window.location.pathname + window.location.search);
    location.reload();
}

function injectOriginalOption() {
    const select = document.querySelector('.goog-te-combo');
    if (select && !select.querySelector('option[data-original]')) {
        const opt = document.createElement('option');
        opt.textContent = 'Português (original)';
        opt.value = 'pt-original';
        opt.setAttribute('data-original', 'true');
        select.insertBefore(opt, select.firstChild);

        select.addEventListener('change', function () {
            if (this.value === 'pt-original') {
                resetToOriginalLanguage();
            }
        });
    }
}

const observer = new MutationObserver(() => {
    injectOriginalOption();
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
});

window.addEventListener('load', () => {
    injectOriginalOption();
});
