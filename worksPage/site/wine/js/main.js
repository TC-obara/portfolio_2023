'use strict';

{
    let options = {
        root: document.querySelector('#scrollArea'),
        rootMargin: '0px',
        threshold: 0
    }
    
    let observer = new IntersectionObserver(showElement, options);

    let targets = document.querySelectorAll('.target');
    targets.forEach(target => {
        observer.observe(target);        
    });
    
    function showElement(entries) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
    }
      
}

{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.headerNavSm');
    const links = document.querySelectorAll('.smNav li');
    
    burger.addEventListener('click',() => {
        burger.classList.toggle('show');
        nav.classList.toggle('show');
    });
    links.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('show');
            nav.classList.remove('show');
        });
    });

}