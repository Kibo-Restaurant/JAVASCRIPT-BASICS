// Select all the boxes
const boxes = document.querySelectorAll('.box');

// Create the Intersection Observer
const observer = new IntersectionObserver((entries) => {
  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    // console.log(`Observed:${[i]}, values for each observation${entries[i]}`)
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Add 'visible' class
    } else {
      entry.target.classList.remove('visible'); // Remove 'visible' class
    }
  }
});

// Observe each box using a for loop
for (let i = 0; i < boxes.length; i++) {
  observer.observe(boxes[i]);
  console.log(`box index ${[i]}, boxes${boxes[i]}`)
}


//Call back functions
function sayHello(name) {
    console.log(`Hello, ${name}!`);
}
function greet (callback) {
    const myName = "John";
    callback(myName); //Call the passed-in function
}
greet(sayHello); //