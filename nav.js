document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('header');
    if (!header) return;

    var isLegal = document.body.classList.contains('legal-page');

    var navLinks = [
        { fr: 'Accueil',     en: 'Home',          href: 'index.html' },
        { fr: 'Enseignants',  en: 'Teachers',      href: 'index.html#enseignants' },
        { fr: 'Parcours',     en: 'Paths',         href: 'index.html#parcours' },
        { fr: 'Contenu',      en: 'Content',       href: 'index.html#fonctionnalites' },
        { fr: 'Programmes',   en: 'Programs',      href: 'index.html#programme' },
        { fr: 'Garanties',    en: 'Guarantees',    href: 'index.html#garanties' },
        { fr: 'Contact',      en: 'Contact',       href: 'index.html#contact' },
        { fr: 'Confidentialité', en: 'Privacy',     href: 'privacy.html' },
        { fr: 'CGU',          en: 'Terms',          href: 'cgu.html' },
        { fr: 'Accessibilité', en: 'Accessibility', href: 'accessibility.html' },
        { fr: "Classification d'âge", en: 'Age rating', href: 'age-rating.html' }
    ];

    var logo = document.createElement('a');
    logo.href = 'index.html';
    logo.className = 'logo';
    logo.textContent = 'Article 15';

    var menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Menu');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '&#x2630;';

    var nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Navigation principale');

    navLinks.forEach(function(link) {
        var aFr = document.createElement('a');
        aFr.href = link.href;
        aFr.textContent = link.fr;
        aFr.dataset.lang = 'fr';
        nav.appendChild(aFr);

        var aEn = document.createElement('a');
        aEn.href = link.href;
        aEn.textContent = link.en;
        aEn.dataset.lang = 'en';
        nav.appendChild(aEn);
    });

    header.innerHTML = '';
    header.appendChild(logo);
    header.appendChild(menuToggle);
    header.appendChild(nav);

    function closeMenu() {
        nav.classList.remove('open');
        menuToggle.innerHTML = '&#x2630;';
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    menuToggle.addEventListener('click', function() {
        var isOpen = nav.classList.toggle('open');
        menuToggle.innerHTML = isOpen ? '&#x2715;' : '&#x2630;';
        menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') closeMenu();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
            closeMenu();
            menuToggle.focus();
        }
    });

    var langBar = document.createElement('div');
    langBar.className = 'lang-bar';
    langBar.setAttribute('role', 'group');
    langBar.setAttribute('aria-label', 'Choix de la langue');

    var switchDiv = document.createElement('div');
    switchDiv.className = 'lang-switch';

    var btnFr = document.createElement('button');
    btnFr.id = 'lang-fr';
    btnFr.className = 'active';
    btnFr.textContent = 'FR';
    btnFr.setAttribute('aria-pressed', 'true');
    btnFr.setAttribute('aria-label', 'Français');
    btnFr.addEventListener('click', function() { setLang('fr'); });

    var btnEn = document.createElement('button');
    btnEn.id = 'lang-en';
    btnEn.textContent = 'EN';
    btnEn.setAttribute('aria-pressed', 'false');
    btnEn.setAttribute('aria-label', 'English');
    btnEn.addEventListener('click', function() { setLang('en'); });

    switchDiv.appendChild(btnFr);
    switchDiv.appendChild(btnEn);
    langBar.appendChild(switchDiv);
    header.insertAdjacentElement('afterend', langBar);

    if (isLegal) {
        var triBar = document.createElement('div');
        triBar.className = 'tricolore-bar';
        triBar.setAttribute('aria-hidden', 'true');
        triBar.innerHTML = '<span class="bleu"></span><span class="blanc"></span><span class="rouge"></span>';
        langBar.insertAdjacentElement('afterend', triBar);
    }

    var saved = localStorage.getItem('legal-lang');
    if (saved) setLang(saved);
});

function setLang(lang) {
    document.documentElement.lang = lang;
    var fr = document.getElementById('lang-fr');
    var en = document.getElementById('lang-en');
    if (fr) {
        fr.classList.toggle('active', lang === 'fr');
        fr.setAttribute('aria-pressed', String(lang === 'fr'));
    }
    if (en) {
        en.classList.toggle('active', lang === 'en');
        en.setAttribute('aria-pressed', String(lang === 'en'));
    }
    localStorage.setItem('legal-lang', lang);
}
