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
        { fr: 'À propos',     en: 'About',         href: 'index.html#a-propos' },
    ];

    var logo = document.createElement('a');
    logo.href = 'index.html';
    logo.className = 'logo';
    var logoImg = document.createElement('img');
    logoImg.src = 'images/icon.png';
    logoImg.alt = '';
    logoImg.width = 34;
    logoImg.height = 34;
    logo.appendChild(logoImg);
    logo.appendChild(document.createTextNode('Article 15'));

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

    var footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = '';

        var h2Fr = document.createElement('h2');
        h2Fr.dataset.lang = 'fr';
        h2Fr.textContent = 'À propos';
        var h2En = document.createElement('h2');
        h2En.dataset.lang = 'en';
        h2En.textContent = 'About';

        var footerLinks = [
            { fr: 'Politique de confidentialité', en: 'Privacy Policy', href: 'privacy.html' },
            { fr: "Conditions générales d'utilisation", en: 'Terms of Use', href: 'cgu.html' },
            { fr: 'Accessibilité', en: 'Accessibility', href: 'accessibility.html' },
            { fr: "Classification d'âge", en: 'Age Rating', href: 'age-rating.html' }
        ];

        var pFr = document.createElement('p');
        pFr.dataset.lang = 'fr';
        var pEn = document.createElement('p');
        pEn.dataset.lang = 'en';

        footerLinks.forEach(function(link, i) {
            var aFr = document.createElement('a');
            aFr.href = link.href;
            aFr.textContent = link.fr;
            pFr.appendChild(aFr);

            var aEn = document.createElement('a');
            aEn.href = link.href;
            aEn.textContent = link.en;
            pEn.appendChild(aEn);

            if (i < footerLinks.length - 1) {
                pFr.appendChild(document.createTextNode(' · '));
                pEn.appendChild(document.createTextNode(' · '));
            }
        });

        footer.appendChild(h2Fr);
        footer.appendChild(h2En);
        footer.appendChild(pFr);
        footer.appendChild(pEn);
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
