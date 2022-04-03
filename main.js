const body = document.querySelector('body');
const displayListItems = document.querySelector('.feedback');
const displayThanksMessage = document.querySelector('.thanks-passive');
const selection = document.getElementById('selection');
let score = '';

body.addEventListener('click', (e) => {
  let listNumbers = e.target.parentElement.children;
  if (e.target.classList == 'numbers') {
    score = e.target.innerHTML;
    for (j = 0; j < listNumbers.length; j++) {
      listNumbers[j].classList.remove('liClicked');
    }
    e.target.classList.toggle('liClicked');
  }
  if (e.target.classList == 'liClicked') {
    console.log(e.target.parentElement.children);
    for (let i = 0; i < listNumbers.length; i++) {
      listNumbers[i].classList.remove('liClicked');
    }
  }
  if (e.target.innerHTML == 'SUBMIT') {
    displayListItems.classList.add('hidden');
    displayThanksMessage.classList.remove('hidden');
    selection.innerHTML = `You selected ${score} out of 5`;
  }
});
