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

document.addEventListener('DOMContentLoaded', function () {
  // Get the elements
  const showMoreButton = document.getElementById('showMoreButton');
  const pointAContainer = document.getElementById('pointAContainer');

  // Function to toggle the visibility of Point A
  function togglePointA() {
    if (pointAContainer.style.display === 'none') {
      pointAContainer.style.display = 'block';
      showMoreButton.textContent = 'Show Less';
    } else {
      pointAContainer.style.display = 'none';
      showMoreButton.textContent = 'Show More';
    }
  }

  // Add event listener to the button
  showMoreButton.addEventListener('click', togglePointA);
});