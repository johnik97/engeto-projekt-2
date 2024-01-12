const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');

menuIcon.addEventListener('click', () => {
    if (hamburgerIcon.classList[1] === 'fa-bars') {
        hamburgerIcon.classList.add('fa-xmark');
        hamburgerIcon.classList.remove('fa-bars');
        menuList.style.opacity = '0';
        menuList.style.display = 'block';
        setTimeout(() => {
            menuList.style.transition = 'opacity .25s ease-in-out';
            menuList.style.opacity = '1';
        }, 250);
        //document.querySelector('header').classList.add('nav-open');
    } else {
        hamburgerIcon.classList.add('fa-bars');
        hamburgerIcon.classList.remove('fa-xmark');
        menuList.style.opacity = '0';
        setTimeout(() => {
            menuList.style.transition = 'opacity .25s ease-in-out';
            menuList.style.display = 'none';
            menuList.style.opacity = '1';
        }, 250);
        //document.querySelector('header').classList.remove('nav-open');
    }
});