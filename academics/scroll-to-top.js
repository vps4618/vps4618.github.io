// Scroll to Top Button Functionality
let myButton = document.getElementById('myBtn');

// Show/hide button on scroll
window.addEventListener('scroll', function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    myButton.style.display = 'flex';
  } else {
    myButton.style.display = 'none';
  }
});

// Smooth scroll to top
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Keyboard shortcut: Press 'Home' key to go to top
document.addEventListener('keydown', function(e) {
  if (e.key === 'Home') {
    e.preventDefault();
    topFunction();
  }
});