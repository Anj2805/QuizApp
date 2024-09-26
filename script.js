// Questions array
const questions = [
    {
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "HyperText Makeup Language", "HyperText Main Language", "HighText Markup Language"],
        correct: "HyperText Markup Language"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "background-color", "bgcolor", "background"],
        correct: "background-color"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>", "<list>"],
        correct: "<ul>"
    },
    {
        question: "How do you write 'Hello World' in an alert box in JavaScript?",
        options: ["alert('Hello World');", "msg('Hello World');", "prompt('Hello World');", "print('Hello World');"],
        correct: "alert('Hello World');"
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        correct: "font-size"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');

// Load question and options dynamically
function loadQuestion() {
    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];
    
    // Set the question text
    questionEl.textContent = currentQuestion.question;
    
    // Clear the previous options
    optionsEl.innerHTML = '';

    // Add new options
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(button, currentQuestion.correct));
        optionsEl.appendChild(button);
    });

    // Hide the Next button until an option is selected
    nextBtn.style.display = 'none';
}

// Option selection
function selectOption(selectedButton, correctAnswer) {
    const selectedAnswer = selectedButton.textContent;

    // Disable all buttons after selection
    const optionButtons = document.querySelectorAll('.btn');
    optionButtons.forEach(button => button.disabled = true);

    // Check if the selected answer is correct
    if (selectedAnswer === correctAnswer) {
        selectedButton.style.backgroundColor = 'green';
        score++;
    } else {
        selectedButton.style.backgroundColor = 'red';
        // Highlight the correct answer
        optionButtons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = 'green';
            }
        });
    }

    // Show the Next button
    nextBtn.style.display = 'block';
}

// Next button handler
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
});

// Show the results after the quiz ends
function showResults() {
    questionEl.textContent = `You scored ${score} out of ${questions.length}!`;
    optionsEl.innerHTML = '';
    nextBtn.style.display = 'none';
}

// Start the quiz by loading the first question
loadQuestion();
