const menuBtn = document.querySelector('.menu-btn');

const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    navItems.forEach(item => item.classList.remove('show'));


    showMenu = false;
  }
}

