const menuNav = document.querySelector('.menu-navigation');
const menuBar = document.querySelector('.menu-bar');
menuBar.addEventListener('click', function(){
    menuNav.classList.toggle('menu-active');
});
