document.addEventListener('DOMContentLoaded', () => {
  // Initialize Intersection Observer
  const wrapperObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initializeCarousel(entry.target); // Initialize carousel for the observed element
          wrapperObserver.unobserve(entry.target); // Stop observing after initialization
        }
      });
    },
    { threshold: 0.2 } // Trigger when 20% of the element is visible
  );

  // Observe all carousel wrappers
  const wrappers = document.querySelectorAll('.swiper-wrapper');
  wrappers.forEach((wrapper) => {
    wrapperObserver.observe(wrapper);
  });

  // Function to initialize the carousel
  function initializeCarousel(wrapper) {
    const cards = wrapper.querySelectorAll('.swiper-slide');
    const buttons = wrapper.querySelectorAll('.link'); // Buttons for navigation
    const totalCards = cards.length;
    let activeCard = 0; // Index of the currently active slide

    console.log(`Initializing carousel with ${totalCards} slides.`);

    // Show a specific slide based on the index
    function showCard(index) {
      if (index >= totalCards) {
        activeCard = 0; // Wrap to the first slide
      } else if (index < 0) {
        activeCard = totalCards - 1; // Wrap to the last slide
      } else {
        activeCard = index; // Update to the new slide
      }

      console.log('Active card:', activeCard);

      // Slide transition
      wrapper.style.transform = `translateX(-${activeCard * 100}%)`;
      wrapper.style.transition = 'transform 0.5s ease-in-out';

      // Update button styles
      updateButtonStyles();
    }

    // Move to the next or previous slide
    function moveCard(n) {
      showCard(activeCard + n);
    }

    // Automatically move to the next slide every 5 seconds
    function autoShow() {
      moveCard(1);
      setTimeout(autoShow, 5000);
    }

    // Activate navigation buttons
    function activateButtons() {
      const prevButton = wrapper.querySelector('.back');
      const nextButton = wrapper.querySelector('.front');

      if (prevButton) {
        prevButton.addEventListener('click', () => moveCard(-1));
      }

      if (nextButton) {
        nextButton.addEventListener('click', () => moveCard(1));
      }
    }

    // Update button styles based on the active card
    function updateButtonStyles() {
      buttons.forEach((button, index) => {
        if (index === activeCard) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
    }

    // Ensure all images are loaded before starting the carousel
    const images = Array.from(cards).map((card) => card.querySelector('img'));
    Promise.all(
      images.map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((resolve) => (img.onload = resolve));
      })
    ).then(() => {
      console.log('Images loaded. Starting slideshow.');
      showCard(activeCard); // Show the first slide
      activateButtons(); // Attach event listeners to buttons
      autoShow(); // Start auto-sliding
    });
  }
});

  
  


// document.addEventListener('DOMContentLoaded', ()=> {
//     const wrapperObserver = new IntersectionObserver((entries,wrapper) => {
//       for (let i= 0; i < entries.length; i++) {
//         const entry = entries[i];
//         if(entry.isIntersecting){
//             initializeCarousel()
//             wrapper = entry.target;
//         } else{
//            wrapperObserver.unobserve(wrapper);
//         }
//       }
//     });
//     const wrappers = document.querySelectorAll('.swiper-wrapper')
//     for(let i = 0; i < wrappers.length ;i++){
//         const wrapper = wrappers[i]; 
//         wrapperObserver.observe(wrapper);
//     }
//     function initializeCarousel() {
//         // DYNAMICALLY SETTING THE CAROUSEL SLIDE SHOW
//         let activeCard = 0; // Keeps track of the current or active slide index
//         const cards = document.querySelectorAll('.swiper-slide'); // Selection of all slides or cards
//         const totalCards = cards.length; // Number of slides
    
//         console.log(`Counting Cards to confirm: ${totalCards - 1}`);
    
        
    
    
//         function showCard(index) {
//             if (index >= totalCards) {
//                activeCard = 0; // Wrap around to the first slide
//             } else if (index < 0) {
//                 activeCard = totalCards - 1; // Wrap around to the last slide
//             } else {
//                 activeCard = index; // Show the requested slide
//             }
            
//             console.log('activeCard: ', activeCard);
            
//             const swiperWrapper = document.querySelector('.swiper-wrapper');
//             if (swiperWrapper) {
//                 swiperWrapper.style.transform = `translateX(-${activeCard * 100}%)`;
//                 swiperWrapper.offsetWidth; // Force reflow
//             }
//         }
    
//         function moveCard(n) {
//             showCard(activeCard + n); // Move to the next or previous slide
//         }
    
//         function autoShow() {
           
//                 moveCard(1);
//                 setTimeout(autoShow, 3000); // Change slide every 5 seconds
        
//         }
    
    
//         function checkImgLoaded() {
//             let imagesLoaded = 0;
            
//             cards.forEach(card => {
//                 const img = card.querySelector('img');
//                 if (img.complete) {
//                     imagesLoaded++;
//                 } else {
                 
//                     return
//                 }
//             });
    
           
//         }
    
    
        
//         // Initialize the carousel
//         showCard(activeCard); // Show the first slide
//         checkImgLoaded(); // Check if images are loaded
//         autoShow(); // Start auto sliding
//     }



    
// });