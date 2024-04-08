// JavaScript for typing effect

// Set up the typing effect content
const headings = ["Discover Amazing Services", "Find Reliable Professionals", "Book Your Service Now"];
const paragraphs = [
  "Explore a wide range of services tailored to your needs.",
  "Connect with experienced professionals ready to assist you.",
  "Book your service hassle-free and get it done with ease."
];

// DOM elements
const typingHeading = document.getElementById('typingHeading');
const typingParagraph = document.getElementById('typingParagraph');
const container = document.querySelector('.container2');

// Typing effect function
function typeEffect(text, element, delay) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
    }
  }, delay);
}

// Start typing effect
function startTyping() {
  let index = 0;

  // Function to display heading and paragraph
  function displayContent() {
    // Reset content
    typingHeading.textContent = '';
    typingParagraph.textContent = '';

    // Typing effect for heading
    typeEffect(headings[index], typingHeading, 100);

    setTimeout(() => {
      // Typing effect for paragraph
      typeEffect(paragraphs[index], typingParagraph, 50);
      container.classList.add('show'); // Show the container after typing starts

      // Move to the next item in the array
      index++;
      if (index >= headings.length) {
        index = 0; // Loop back to the first item
      }

      // Repeat the typing effect with a delay
      setTimeout(displayContent, 5000); // Adjust the delay as needed
    }, 2000); // Adjust the delay as needed
  }

  // Initial call to display content
  displayContent();
}

// Start typing effect after page load
window.onload = startTyping();
