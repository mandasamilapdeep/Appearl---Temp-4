const menu = document.querySelector('.section-header-2 .mega-menu');

document.querySelectorAll('.section-header-2 .mega-menu').forEach(menu => {
    menu.addEventListener('mouseenter', function() {
        this.open = true;
    });

    menu.addEventListener('mouseleave', function() {
        this.open = false;
    });

    menu.addEventListener('click', function(e) {
        e.preventDefault();
    });
});

const menuHeight = document.querySelector('.section-header-2 .header__heading-link').offsetHeight;

document.querySelectorAll('.header__inline-menu .list-menu__item').forEach(menu => {
    menu.style.minHeight = `${menuHeight}px`;
});