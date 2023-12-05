const speedInput = document.getElementById('speed');
const arm = document.getElementById('arm');

function setSpeed() {
  let speed = parseFloat(speedInput.value);

  if (speed >= 0 && speed <= 100) {
    let degree = speed * (9 / 5);
    arm.style.rotate = degree + 'deg';
  } else {
    speedInput.value = '';
    arm.style.rotate = '0deg'
    speedInput.placeholder = 'Invalid Speed !';
  }
}