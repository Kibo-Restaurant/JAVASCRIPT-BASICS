document.addEventListener('DOMContentLoaded', () => {
    const wrapperObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initializeCarousel(entry.target);
          wrapperObserver.unobserve(entry.target); // Stop observing once initialized
        }
      });
    });
  
    const wrappers = document.querySelectorAll('.swiper-wrapper');
    wrappers.forEach((wrapper) => {
      wrapperObserver.observe(wrapper);
    });
  
    function initializeCarousel(wrapper) {
      // Restrict cards to the current wrapper
      const cards = wrapper.querySelectorAll('.swiper-slide');
      const totalCards = cards.length;
      let activeCard = 0; // Current slide index
  
      console.log(`Initializing carousel with ${totalCards} slides.`);
  
      function showCard(index) {
        if (index >= totalCards) {
          activeCard = 0; // Wrap around to the first slide
        } else if (index < 0) {
          activeCard = totalCards - 1; // Wrap around to the last slide
        } else {
          activeCard = index; // Show the requested slide
        }
  
        console.log('activeCard: ', activeCard);
  
        // Use the current wrapper instead of selecting globally
        wrapper.style.transform = `translateX(-${activeCard * 100}%)`;
        wrapper.offsetWidth; // Force reflow
      }
  
      function moveCard(n) {
        showCard(activeCard + n); // Move to the next or previous slide
      }
  
      function autoShow() {
        moveCard(1);
        setTimeout(autoShow, 3000); // Change slide every 3 seconds
      }
  
      // Ensure all images are loaded before starting
      const images = Array.from(cards).map((card) => card.querySelector('img'));
      Promise.all(
        images.map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => (img.onload = resolve));
        })
      ).then(() => {
        console.log('Images loaded. Starting slideshow.');
        autoShow();
      });

      
  
      // Initialize the carousel
      showCard(activeCard); // Show the first slide
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