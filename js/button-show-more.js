const button = document.querySelector('.welcome__button');
const informationText = document.querySelector('.welcome__information-text');

button.addEventListener('click', function() {
  informationText.classList.toggle('show-more');
  if (button.value === 'Show more') {
    button.value = 'Show less';
  } else {
    button.value = 'Show more';
  }
});