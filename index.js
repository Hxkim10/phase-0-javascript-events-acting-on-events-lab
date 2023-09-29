// Your code here
const DODGER = document.getElementById('dodger');

function moveDodgerLeft() {
  let leftNumbers = DODGER.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    DODGER.style.left = `${left - 4}px`;
  }
}

function moveDodgerRight() {
  let leftNumbers = DODGER.style.left.replace('px', '');
  let left = parseInt(leftNumbers, 10);

  if (left < 360) {
    DODGER.style.left = `${left + 4}px`;
  }
}