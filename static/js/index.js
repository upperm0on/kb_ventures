services_list = document.querySelector('.services-list');
services_items = document.querySelectorAll('.service-item');
tog_btn = document.querySelector('.mobile-nav-toggle');
mobile_nav = document.querySelector('.mobile-nav');

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    trigger_location = window.innerHeight * 0.5;
    if (services_list.getBoundingClientRect().top < trigger_location) {
        services_items.forEach(service => {
            service.classList.add('anime');
        });    
    }
  })

  
  let bool = false;
  tog_btn.addEventListener('click', () => {
      if (!bool) {
          mobile_nav.style.transform = 'translate(-50%, 0)';
          console.log(mobile_nav)
          bool = true;
        } else {
            mobile_nav.style.transform = 'translate(-50%, -100%)';
            console.log(mobile_nav)
            bool = false;
        }
    });
});

console.log(services_items);