function startSurvey() {
  window.location.href = './public/survey.html';
}

function contactMe() {
  window.location.href = './public/contact.html';
}

function contactMe2() {
  window.location.href = './contact.html';
}

const questions = [
  "Do you have a valid Green Card or US Citizenship?",
  "Do you have a High School Degree or GED?",
  "Have you ever been to a doctor? Did you receive any major surgery? Are you currently taking any medicine?",
  "Have you ever been arrested or got involved in any law violation?",
  "Have you ever used drugs?",
  "Are you prior service and what branch?"
];

let currentQuestionIndex = 0;

function handleAnswer(isEligible) {
  if (!isEligible) {
      window.location.href = 'not-eligible.html';
      return;
  }
  
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
      document.getElementById('question-text').innerText = questions[currentQuestionIndex];
  } else {
      window.location.href = 'eligible.html';
  }
}