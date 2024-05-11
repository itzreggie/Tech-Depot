document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.getElementById('showMoreButton');
    const pointAContainer = document.getElementById('pointAContainer');
  
    function togglePointA() {
      if (pointAContainer.style.display === 'none') {
        pointAContainer.style.display = 'block';
        showMoreButton.textContent = 'Show Less';
      } else {
        pointAContainer.style.display = 'none';
        showMoreButton.textContent = 'Show More';
      }
    }
  
    showMoreButton.addEventListener('click', togglePointA);
  });