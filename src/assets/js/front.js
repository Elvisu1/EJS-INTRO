console.log('front.js');

// select elements
const submitBtnEl = document.getElementById('add-book');
const categorySelectEl = document.getElementById('category');

submitBtnEl.setAttribute('disabled', true);

categorySelectEl.addEventListener('change', (e) => {
  submitBtnEl.removeAttribute('disabled');
});
