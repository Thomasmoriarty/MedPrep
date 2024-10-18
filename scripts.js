document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for fixed nav
                behavior: 'smooth'
            });
        });
    });
});

// Flashcard data bank (questions and answers)
const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is Newton's First Law?", answer: "An object in motion stays in motion unless acted upon by an external force." },
    { question: "Who wrote '1984'?", answer: "George Orwell" },
    // Add more flashcards as needed
];

// Function to render flashcards
function renderFlashcard(cardIndex) {
    const card = flashcards[cardIndex];

    document.getElementById('flashcard-question').innerText = card.question;
    document.getElementById('flashcard-answer').innerText = card.answer;
    document.getElementById('flashcard-answer').style.display = "none"; // Hide answer initially
}

// Function to show the answer
function flipCard() {
    const answerElement = document.getElementById('flashcard-answer');
    answerElement.style.display = (answerElement.style.display === "none") ? "block" : "none";
}

// Initialize first flashcard on page load
document.addEventListener('DOMContentLoaded', function() {
    let currentCardIndex = 0;
    renderFlashcard(currentCardIndex);

    // Add event listener for the "Next" button
    document.getElementById('next-card').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length; // Cycle through flashcards
        renderFlashcard(currentCardIndex);
    });
});

