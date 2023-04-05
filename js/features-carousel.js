(function () {
    const slides = [
      `<div class="features__slide slide">
          <img class="slide__image" src="img/dancing-in-the-dusk.png" alt="People Dancing In The Dusk">
          <h3 class="slide__heading">Luxury Camping</h3>
          <p class="slide__description">Our accommodations provide the perfect chill out zone for you to
            recharge.</p>
        </div>`,
      ` <div class="features__slide slide">
        <img class="slide__image" src="img/dancing-trio.png" alt="Three People Dancing">
        <h3 class="slide__heading">Great Community</h3>
        <p class="slide__description">Meet other fans of all music genres from different corners of the
          world and make friends!</p>
      </div>`,
      `<div class="features__slide slide">
      <img class="slide__image" src="img/singer.png" alt="Singer Singing">
      <h3 class="slide__heading">The Best Names is EDM</h3>
      <p class="slide__description">From Armin van Buuren to Lost Frequencies, enjoy live sets of 50+
        popular DJs.</p>
    </div>`,
      `<div class="features__slide slide">
    <img class="slide__image" src="img/dancing-crowd.png" alt="Crowd Dancing">
    <h3 class="slide__heading">Unique Stages</h3>
    <p class="slide__description">We're building 5 stages right in the middle of the Nevada desert.
      You should see it!</p>
  </div>`,
      `<div class="features__slide slide">
  <img class="slide__image" src="img/singer-guitarist.png" alt="Singer Guitarist">
  <h3 class="slide__heading">Live Sound Only</h3>
  <p class="slide__description">Enjoy 5 days of live shows of the best European and American
    artists.</p>
  </div>`,
    ];
    const carousel = document.querySelectorAll(".features__slider");
    const slideContainer = document.querySelector(".features__slides");
    let currentSlide = 0;
    function renderSlides(slides) {
      slideContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth > 760) {
        const secondSlide =
          currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
        if (window.innerWidth > 977) {
          const thirdSlide =
            secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
          slideContainer.innerHTML += slides[thirdSlide];
        }
      }
    }
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      renderSlides(slides);
    }
    function prewSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      renderSlides(slides);
    }
    renderSlides(slides);
    const buttonNext = document.querySelector(".btnNext");
    const buttonPrevious = document.querySelector(".btnPrew");
    buttonNext.addEventListener("click", nextSlide);
    buttonPrevious.addEventListener("click", prewSlide);
    window.addEventListener("resize", () => {
      renderSlides(slides);
    });
  })();