'use strict';

// API
const triggers = document.querySelectorAll('section');
const options = {
  threshold: 0.1,
};

{
  const header = document.getElementById('header');

  let prevScrollPos = window.pageYOffset;

  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
      if (currentScrollPos >= 100) {
        header.style.top = '-100px';
        header.style.transition = '.5s';
        header.style.opacity = '0';
        header.classList.remove('show');
      }
    } else {
      if (header.style.position === 'fixed') {
        header.style.top = '0';
      } else {
        header.style.top = '20px';
      }
      header.style.opacity = '1';
    }

    prevScrollPos = currentScrollPos;
  };
}

// ページ遷移
const links = document.querySelectorAll('.link');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const overlay = document.querySelector('.transition-overlay');
    overlay.style.opacity = '1';
    setTimeout(() => {
      window.location.href = link.href;
    }, 500);
  });
});
window.addEventListener('load', () => {
  const overlay = document.querySelector('.fadein-overlay');
  overlay.style.opacity = '1';
  setTimeout(() => {
    overlay.style.opacity = '0';
  }, 500);
});

// burger
{
  const burgers = document.querySelectorAll('.burger');
  const header = document.getElementById('header');
  const navList = document.querySelectorAll('#smNav li a');
  burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
      header.classList.toggle('show');
    });
    navList.forEach((element) => {
      element.addEventListener('click', () => {
        header.classList.remove('show');
      });
    });
  });
}
