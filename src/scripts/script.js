import "./index"


import "../styles/style.scss"

let buttonMobileMenuOpen = document.querySelector('.header__mobileMenu-button');
let wrapper = document.querySelector('.wrapper')
let buttonMobileMenuClose = document.querySelector('.mobileMenu__button');
let mobileMenu = document.querySelector('.mobileMenu')
buttonMobileMenuOpen.addEventListener('click', (e) => {
    e.preventDefault();

    mobileMenu.style.display = 'flex'
    wrapper.style.height = '100%'
})

buttonMobileMenuClose.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMenu.style.display = 'none'
    wrapper.style.height = 'auto';
})


