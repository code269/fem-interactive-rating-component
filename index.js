const ratingState = document.getElementById('rating-state');
const resultsState = document.getElementById('results-state');
const selectionBtns = document.querySelectorAll('.selection-btn');
const submitBtn = document.getElementById('submit-btn');
const selectionResult = document.getElementById('selection-result');
const returnBtn = document.getElementById('return-btn');

selectionBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    clearActiveBtns();
    btn.classList.add('selected');
  });
});

submitBtn.addEventListener('click', () => {
  const selection = findSelected(selectionBtns);
  if (selection) {
    setResult(selection.textContent.trim());
    toggleView();
  }
});

returnBtn.addEventListener('click', () => {
  clearActiveBtns();
  toggleView();
});

function findSelected(btns) {
  return Array.from(btns).find((btn) => btn.classList.contains('selected'));
}

function setResult(selection) {
  selectionResult.textContent = `You selected ${selection} out of 5`;
}

function toggleView() {
  ratingState.classList.toggle('hidden');
  resultsState.classList.toggle('hidden');
}

function clearActiveBtns() {
  selectionBtns.forEach((b) => b.classList.remove('selected'));
}
