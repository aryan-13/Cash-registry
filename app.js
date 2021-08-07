const billAmount = document.querySelector('#bill-amnt');
const cashAmount = document.querySelector('#cash-amnt');
// BUTTONS
const nextBtn = document.querySelector('#next-btn');
const checkBtn = document.querySelector('#check-btn');
// ERROR MSGS
const errorMsg = document.querySelector('#error');
const errorMsg2 = document.querySelector('#error-2');
errorMsg.style.display = 'none';
//DIVS
const invisible = document.querySelector('#invisible');
const table = document.querySelector('.box-3');
// Number of notes
const notes = [2000, 500, 100, 20, 10, 5, 1];

var numNotes = document.querySelectorAll('.num-notes');
//
invisible.style.display = 'none';
table.style.display = 'none';
// Event Listeners
nextBtn.addEventListener('click', nextBtnClick);
checkBtn.addEventListener('click', checkBtnClick);

// VARIABLES
var bill = 0;
var cash = 0;

// button click handlers
function nextBtnClick() {
  if (billAmount.value > 0) {
    invisible.style.display = 'block';
    errorMsg.style.display = 'none';
    nextBtn.style.display = 'none';
    return;
  } else {
    return (errorMsg.style.display = 'block');
  }
}
function checkBtnClick() {
  if (billAmount.value > 0 && cashAmount.value >= billAmount.value) {
    bill = billAmount.value;
    cash = cashAmount.value;
    errorMsg2.style.display = 'none';
    calculateNotes(bill, cash);
  } else if (cashAmount.value < billAmount.value) {
    errorMsg2.innerHTML = 'Cash amount is less than bill amount';
  } else {
    errorMsg2.innerHTML = 'Cash is less than bill, please enter right amount';
    errorMsg2.style.display = 'block';
    table.style.display = 'none';
  }
}

function calculateNotes(bill, cash) {
  var diff = cash - bill;
  console.log(diff);
  if (diff === 0) {
    errorMsg2.innerHTML = 'No amount should be returned';
    errorMsg2.style.display = 'block';
    return;
  } else if (diff > 0) {
    table.style.display = 'block';

    for (var i = 0; i < 7; i++) {
      var curr = Math.trunc(diff / notes[i]);
      console.log(i + 'curr: ' + curr);
      numNotes[i].innerText = curr;
      diff = diff % notes[i];
    }
  } else {
    errorMsg2.innerHTML = 'Cash is less than bill, please enter right amount';
    errorMsg2.style.display = 'block';
    table.style.display = 'none';
  }
  console.log(bill, cash);
}
