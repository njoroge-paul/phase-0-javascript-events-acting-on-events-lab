// Your code here
// helpers.js
let dodgerLeft = 0;

function moveDodgerLeft() {
  if (dodgerLeft > 0) {
    dodgerLeft -= 10;
  }
  document.getElementById('dodger').style.left = `${dodgerLeft}px`;
}

function moveDodgerRight() {
  if (dodgerLeft < 360) {
    dodgerLeft += 10;
  }
  document.getElementById('dodger').style.left = `${dodgerLeft}px`;
}
