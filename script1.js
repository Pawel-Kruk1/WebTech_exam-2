// Question Data 
const questions = [
    { 
        questionText: "Which of these is a phishing attempt?",
        choices: ["Email from your bank asking to verify info", "Website with a slightly misspelled popular URL", "Winning lottery ticket notification", "All of the above"],
        correctAnswer: "All of the above"  
    },

    {
        questionText: "A strong password should include:",
        choices: ["Your name or birthdate", "Simple words and phrases", "Only lowercase letters", "A mix of letters, numbers, and symbols"],
        correctAnswer: "A mix of letters, numbers, and symbols" 
    },

    {
        questionText: "Which of these is NOT an example of two-factor authentication?",
        choices: ["Password + code sent to your phone", "Fingerprint scan + security question", "Facial recognition + PIN", "Password + your favorite color"],
        correctAnswer: "Password + your favorite color" 
    },

    {
        questionText: "Suspicious links in emails can sometimes be identified by:", 
        choices: ["Misspellings in the URL", "Urgent requests for information", "Offers that seem too good to be true", "All of the above"],
        correctAnswer: "All of the above"
    } 


];



// Global Variables
let currentQuestionIndex = 0;
let score = 0;

// Functions
function loadQuestion() {
    if (currentQuestionIndex >= questions.length) { 
        document.getElementById('feedback').textContent = "Quiz Complete!";
        console.log("Quiz Complete!");
        
        return; 
    }

    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').textContent = currentQuestion.questionText;

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = ''; 

    currentQuestion.choices.forEach(choice => {
        const choiceButton = document.createElement('button');
        choiceButton.textContent = choice;
        choiceButton.addEventListener('click', () => checkAnswer(choice)); 
        choicesContainer.appendChild(choiceButton);
    });

    showNextButton(); // Show the "Next" button (if not already visible)
}

function checkAnswer(selectedChoice) {
    const feedbackArea = document.getElementById('feedback');
    let isCorrect = (selectedChoice === questions[currentQuestionIndex].correctAnswer);

    if (isCorrect) {
        feedbackArea.textContent = "Correct!";
        feedbackArea.style.color = "green";
        score++; 
    } else {
        feedbackArea.textContent = "Incorrect."; 
        feedbackArea.style.color = "red";
    }

    updateScoreDisplay();
}

function updateScoreDisplay() {
    document.getElementById('scoreDisplay').textContent = "Score: " + score;
}

function showNextButton() {
    document.getElementById('nextButton').style.display = 'block'; 
}


document.addEventListener('DOMContentLoaded', () => {
    loadQuestion(); 
    document.getElementById('nextButton').style.display = 'block'; 
    document.getElementById('nextButton').addEventListener('click', () => {
        currentQuestionIndex++; 
        loadQuestion(); 
    });
});
//***SCRIPT EXPLANATION***
//Key Components

//questions Array:  This is your core data structure. It contains an array of objects, each object representing a single question with:

//questionText: The text of the question.
//choices: An array of possible answers.
//correctAnswer: The correct answer for the question.

//Global Variables:

//currentQuestionIndex: Tracks the index of the question currently being displayed.
//score: Keeps track of the user's score.

//Functions

//loadQuestion()

//End of Quiz Check: If currentQuestionIndex is equal to or greater than the number of questions, it displays "Quiz Complete!" and ends the quiz.
//Question Display: Fetches the questionText from the current question object and updates the #question element on the webpage.

//Answer Choices:

//Clears any previous choices from the #choices element.
//Uses .forEach() to loop through the choices array of the current question.
//Dynamically creates a button for each choice.
//Adds an event listener to each button to call checkAnswer() when clicked.
//checkAnswer(selectedChoice)

//Comparison: Determines if the selectedChoice matches the correctAnswer for the current question.
//Feedback: Updates the #feedback element with "Correct!" or "Incorrect!", and styles the text color accordingly.
//Score Update: If the answer is correct, increments the score.

//updateScoreDisplay()

//Updates the #scoreDisplay element to reflect the current score.

//showNextButton()

//Simply makes the "Next" button visible by changing its CSS display property.

//Initialization (DOMContentLoaded Event)

//document.addEventListener('DOMContentLoaded', () => { ... }); This ensures the code within the block runs only after the HTML structure of the page is fully loaded. Inside this block you have:

//loadQuestion();: Begins the quiz by displaying the first question.
//document.getElementById('nextButton').style.display = 'block'; Ensures the "Next" button is visible from the start.
//Event Listener for "Next" Button: Handles the click event on the "Next" button, incrementing the currentQuestionIndexand calling loadQuestion() to display the next question.
