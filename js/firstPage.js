'use strict';

const observer = new IntersectionObserver(background, options);
const color = [];
let count = 1;

triggers.forEach((trigger, index) => {
  if (index % 2 === 0) {
    //     奇数のみの実装
    observer.observe(trigger);
  }
});

function background(entries) {
  entries.forEach((entry) => {
    const html = document.querySelector('html');
    if (entry.isIntersecting) {
      html.classList.add('activeBg');
    } else {
      html.classList.remove('activeBg');
    }
  });
}
