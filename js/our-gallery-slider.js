(function () {
    const slides = [  
        '<div class="slide"><img src="img/neon-woman.png" alt="Neon Woman"></div>',    
        ' <div class="slide"><img src="img/club-party.png" alt="Club Party"></div>',
        ' <div class="slide"><img src="img/dj-controller.png" alt="DJ Controller"></div>',
        ' <div class="slide"><img src="img/club-concert.png" alt="Club Concert"></div>',  
    ];
  
    const carousel = document.querySelector('.our-gallery__slider');
    const slideContainer = carousel.querySelector('.our-gallery__slider .our-gallery__slides');
  
    let currentSlide = 0;
  
    function renderSlides(slides) {
      slideContainer.innerHTML = '';
  
      if (window.innerWidth > 768) {
        slideContainer.innerHTML = slides[currentSlide] + slides[(currentSlide + 1) % slides.length];
      } else {
        slideContainer.innerHTML = slides[currentSlide];
      }
  
      carousel.querySelectorAll('.our-gallery__dots span').forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    renderSlides(slides);
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      renderSlides(slides);
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      renderSlides(slides);
    }
  
    function updateSlide(index) {
      currentSlide = index;
      renderSlides(slides);
    }
  
    carousel.querySelectorAll('.our-gallery__dots span').forEach((dot, index) => {
      dot.addEventListener('click', () => {
        updateSlide(index);
      });
    });
  
    window.addEventListener('resize', () => {
      renderSlides(slides);
    });
  })();