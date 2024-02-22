document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
  });


  document.getElementById('dynamic-cursor-element').addEventListener('mouseenter', function() {
    document.body.style.cursor = "url('image/mouse.png'), auto";
  });

  document.getElementById('dynamic-cursor-element').addEventListener('mouseleave', function() {
    document.body.style.cursor = "default";
  });
  