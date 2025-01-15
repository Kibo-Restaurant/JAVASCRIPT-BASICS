function initializeCarousel() {
    // DYNAMICALLY SETTING THE CAROUSEL SLIDE SHOW
    let presentSlide = 0; // Keeps track of the current slide index
    const slides = document.querySelectorAll('.swiper-slide'); // Selection of all slides
    const allSlides = slides.length; // Number of slides

    // console.log(`Counting slides to confirm: ${allSlides - 1}`);

    // Show the placeholder initially
    const placeholder = document.getElementById('carousel-placeholder');
    placeholder.style.display = 'block';

     
    const popup = document.getElementById('popup');
    const closeButton = document.getElementById('close-popup');
     // Hide pop-up
     closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
      });

      function showPopUp() {
        popup.style.display = 'flex';
      }


    function showSlide(index) {
        if (index >= allSlides) {
            presentSlide = 0; // Wrap around to the first slide
        } else if (index < 0) {
            presentSlide = allSlides - 1; // Wrap around to the last slide
        } else {
            presentSlide = index; // Show the requested slide
        }
        
        // console.log('presentSlide: ', presentSlide);
        
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.style.transform = `translateX(-${presentSlide * 100}%)`;
            carouselContainer.offsetWidth; // Force reflow
        }
    }

    function moveSlide(n) {
        showSlide(presentSlide + n); // Move to the next or previous slide
    }

    function autoSlideOnce() {
        if (presentSlide < allSlides - 1) {
            moveSlide(1);
            setTimeout(autoSlideOnce, 3000); // Change slide every 5 seconds
        } else {
            showSlide(0); // Reset to the first slide after loop completion
            activateButtons(); // Enable buttons for manual navigation
            hidePlaceholder(); // Hide placeholder after auto sliding
            
        }
    }

    function hidePlaceholder() {
        placeholder.style.display = 'none'; // Hide the placeholder once slides are loaded
        // showPopUp();
    }

    function checkImagesLoaded() {
        let imagesLoaded = 0;
        
        slides.forEach(slide => {
            const img = slide.querySelector('img');
            if (img.complete) {
                imagesLoaded++;
            } else {
                img.onload = () => {
                    imagesLoaded++;
                    if (imagesLoaded === allSlides) {
                        hidePlaceholder(); // Hide placeholder after all images are loaded
                    }
                };
                img.onerror = () => {
                    console.error(`Image failed to load: ${img.src}`);
                    imagesLoaded++;
                    if (imagesLoaded === allSlides) {
                        hidePlaceholder(); // Hide placeholder even if some images fail
                    }
                };
            }
        });

        // If all images are already loaded (e.g., cached), hide placeholder immediately
        if (imagesLoaded === allSlides) {
            hidePlaceholder();
        }
    }

    function activateButtons() {
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        
        if (prevButton) {
            prevButton.addEventListener('click', () => moveSlide(-1));
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => moveSlide(1));
        }
    }
    
    // Initialize the carousel
    showSlide(presentSlide); // Show the first slide
    checkImagesLoaded(); // Check if images are loaded
    autoSlideOnce(); // Start auto sliding
}