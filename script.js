document.addEventListener('DOMContentLoaded', function () {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = document.body.getAttribute('data-page');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const pageName = href ? href.replace('.html', '') : '';
    if (currentPage && pageName === currentPage) {
      link.classList.add('active');
    }
  });

  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      const button = this.querySelector('button[type="submit"]');
      if (button) {
        button.textContent = 'Message Sent';
        button.disabled = true;
      }
    });
  }
});
