const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const card = document.getElementById('card');
const thankYou = document.getElementById('thank-you');
const selectedRating = document.getElementById('selected-rating');
let selected = null;

ratingButtons.forEach(button => {
  button.addEventListener('click', () => {
    ratingButtons.forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
    selected = button.getAttribute('data-rating');
  });
});

submitButton.addEventListener('click', () => {
  if (selected) {
    selectedRating.textContent = `You selected ${selected} out of 5`;
    card.classList.add('hidden');
    thankYou.classList.remove('hidden');
  } else {
    alert('Please select a rating before submitting.');
  }
});
