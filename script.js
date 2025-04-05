// script.js

const submitBtn = document.getElementById('submitBtn');
const userInput = document.getElementById('userInput');
const conversation = document.getElementById('conversation');

const questions = [
  "Tell me about yourself.",
  "Why do you want to work with us?",
  "What are your strengths?",
  "Where do you see yourself in 5 years?",
  "Why should we hire you?"
];

let currentQuestion = 0;

function addMessage(content, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender);
  messageDiv.textContent = content;
  conversation.appendChild(messageDiv);
  conversation.scrollTop = conversation.scrollHeight;
}

function handleUserInput() {
  const userResponse = userInput.value.trim();
  
  if (userResponse === "") return;

  addMessage(userResponse, 'user-message');
  userInput.value = "";

  setTimeout(() => {
    if (currentQuestion < questions.length) {
      addMessage(questions[currentQuestion], 'ai-message');
      currentQuestion++;
    } else {
      addMessage("Thank you for your responses. The interview is complete.", 'ai-message');
    }
  }, 1000);
}

submitBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleUserInput();
  }
});

// Start the interview
addMessage(questions[currentQuestion], 'ai-message');
currentQuestion++;
