const guessed = [...document.querySelectorAll('.guessed')];
const container = document.querySelector('.container');
const guessedAnswers = document.getElementById('guessed-answers');
const scores = [...document.querySelectorAll('.scores')];
const names = [...document.querySelectorAll('.names')];
const myName = localStorage.getItem('name');

guessed.forEach(guess => guess.addEventListener('click', (e) => {
  const icon = e.target;
  const thisGuess = icon.parentElement;
  thisGuess.style.setProperty('text-decoration', 'line-through');
  thisGuess.outerHTML = '';
  icon.outerHTML = '';
  guessedAnswers.insertAdjacentElement('afterend', thisGuess);
}));

scores.forEach(score => {
  if (score.dataset.pname != myName) {
    score.setAttribute('disabled', true);
    score.nextElementSibling.setAttribute('disabled', true);
  } else {
    
  }
})