function initializeFadeCarousel(){
    const slides = document.querySelectorAll('.carousel-slide');
    const placeholder = document.getElementById('carousel-placeholder');
    let currentIndex = 0;
    
    function showSlide(index) {
        for(let i = 0; i<slides.length; i++){
            if(i === index){
                slides[i].classList.add('active');
            }else{
                slides[i].classList.remove('active');
            }
        }
    }
    function nextSlide(){
        currentIndex++; //same as currentIndex = currentIndex + 1 (increment by 1 to next)
        if (currentIndex >= slides.length){
            currentIndex = 0;
        }
        showSlide(currentIndex);
        
    }
    // function addManualControls(){
    //     const prevButton = document.querySelector('.prev');
    //     const nextButton =document.querySelector('.next');
        
    //     if(prevButton){
    //         prevButton.addEventListener('click', ()=>{
    //             currentIndex--; //same as currentIndex = currentIndex -1 (decrement by 1 to previous)
    //             if(currentIndex < 0){
    //               currentIndex = slides.length -1;
    //             }
    //             showSlide(currentIndex);
    //         });
    //     }
    //     if(nextButton) {
    //         nextButton.addEventListener('click', () => {
    //         nextSlide();
    //         });
    //     }

    // }

    setTimeout(() => {
      if (placeholder) placeholder.style.display = 'none';
    }, 2000);
  
             
    // showSlide(currentIndex);
    setInterval(nextSlide, 3000);
    // addManualControls();
    

} initializeFadeCarousel();

//Looping through an array
const values = [10,20,30,40,50,60,70,80,90];

  for(let i = 0; i < values.length; i++){
    console.log(`Index: ${i}, value: ${values[i]}`)
  }
  //removing only even numbers

 const numbers = [10,20,30, 40,50];
 const filteredValues = [];
 for (let i = 0; i< numbers.length; i++){
  if(values[i]*2 === 60) {
    filteredValues.push(values[i]);
  }
 }
 console.log(filteredValues);


// function initializeFadeCarousel() {
//     const slides = document.querySelectorAll('.carousel-slide');
//     const placeholder = document.getElementById('carousel-placeholder');
//     let currentIndex = 0;
  
//     function showSlide(index) {
//       for (let i = 0; i < slides.length; i++) {
//         if (i === index) {
//           slides[i].classList.add('active');
//         } else {
//           slides[i].classList.remove('active');
//         }
//       }
//     }
  
//     function nextSlide() {
//       currentIndex++;
//       if (currentIndex >= slides.length) {
//         currentIndex = 0;
//       }
//       showSlide(currentIndex);
//     }
  
//     function addManualControls() {
//       const prevButton = document.querySelector('.prev');
//       const nextButton = document.querySelector('.next');
  
//       if (prevButton) {
//         prevButton.addEventListener('click', () => {
//           currentIndex--;
//           if (currentIndex < 0) {
//             currentIndex = slides.length - 1;
//           }
//           showSlide(currentIndex);
//         });
//       }
  
//       if (nextButton) {
//         nextButton.addEventListener('click', nextSlide);
//       }
//     }
  
//     // Hide the placeholder after 2 seconds
//     setTimeout(() => {
//       if (placeholder) placeholder.style.display = 'none';
//     }, 2000);
  
//     // Initialize the carousel
//     showSlide(currentIndex); // Show the first slide
//     setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
//     addManualControls(); // Enable manual navigation
//   }
  
//   initializeFadeCarousel();
  