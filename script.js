let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec =>{ 
            let top = window.scrollY;
            let offset = sec.offsetTop- 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                navLinks.forEach(links =>  {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*='+ id +']').classList.add('active')
                
                })
            }
            })
     }

    menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
const swiper = new Swiper(".testimonial-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      }
    }
  });