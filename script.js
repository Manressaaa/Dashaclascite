const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});


const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        
        filterBtns.forEach(b => b.classList.remove('active'));
     
        btn.classList.add('active');

        alert(`Filtering by: ${btn.textContent}`);
    });
});


document.querySelectorAll('nav a, .hero-buttons a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId.startsWith('#')) {
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                

                navMenu.classList.remove('show');
            }
        }
    });
});


const contactForm = document.querySelector('.contact-form form');
const newsletterForm = document.querySelector('.newsletter-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за ваше сообщение! Наш менеджер скоро свяжется с вами.');
        this.reset();
    });
}

if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо за подписку на нашу новостную рассылку!');
        this.reset();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = targetId === '#top' 
            ? document.body 
            : document.querySelector(targetId);
        
        if (targetElement) {
            
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            if (window.innerWidth <= 768) {
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                const nav = document.querySelector('nav');
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});

$(document).ready(function() {
  let currentIndex = 0;
  const items = $(".testimonial-item");
  const dots = $(".dot");

  function showSlide(index) {
    items.removeClass("active").eq(index).addClass("active");
    dots.removeClass("active").eq(index).addClass("active");
  }

  dots.on("click", function() {
    currentIndex = $(this).index();
    showSlide(currentIndex);
  });

  $(".arrow.prev").on("click", function() {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
  });

  $(".arrow.next").on("click", function() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  });

  setInterval(function() {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  }, 5000);

  showSlide(currentIndex);
});



