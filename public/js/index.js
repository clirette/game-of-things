localStorage.clear();
const playerName = document.querySelector('.player-name');
const submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', (e) => {
  console.log(playerName.value);
  localStorage.setItem('name', playerName.value);
});