let burgerCheckbox = document.querySelector('.burger-checkbox');
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')
let menuLinks = document.querySelectorAll('.menu a');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-active')
})


menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-active');
        burgerCheckbox.checked = false;
    });
});


