// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Get the menu icon and navigation links
  const menuIcon = document.querySelector('.menu-icon i');
  const navLinks = document.querySelector('.ul');

  if (menuIcon && navLinks) {
    // Add event listener to the menu icon
    menuIcon.addEventListener('click', () => {
      // Toggle the 'active' class on the navigation links
      navLinks.classList.toggle('active');
    });
  } else {
    console.error('Menu icon or navigation links not found.');
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector('.menu-icon');
  const headerImage = document.querySelector('.home');
  const menuDropdown = document.getElementById('menuDropdown');
  const directLinks = document.querySelector('.dropdown-content');

  menuIcon.addEventListener('click', function() {
      menuDropdown.classList.toggle('show');
      adjustHeaderImage();
  });

  directLinks.addEventListener('click', function() {
      if (menuDropdown.classList.contains('show')) {
          headerImage.style.marginTop = '150px'; // Adjust the value as needed
      }
  });

  function adjustHeaderImage() {
      if (menuDropdown.classList.contains('show')) {
          headerImage.style.marginTop = '150px'; // Adjust the value as needed
      } else {
          headerImage.style.marginTop = '0';
      }
  }
});































