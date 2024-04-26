document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll to section when clicking on navigation links
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();

          const targetId = link.getAttribute("href").substring(1);
          const targetSection = document.getElementById(targetId);

          if (targetSection) {
              const offsetTop = targetSection.offsetTop;
              window.scroll({
                  top: offsetTop,
                  behavior: "smooth"
              });
          }
      });
  });
});

const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scroll({
        _top: offsetTop,
        get top() {
            return this._top;
        },
        set top(value) {
            this._top = value;
        },
        behavior: 'smooth'
    });
});

