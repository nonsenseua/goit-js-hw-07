const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', handleInput);

function handleInput(event) {
  const currentTargetValue = event.currentTarget.value.trim();

  if (currentTargetValue === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = currentTargetValue;
  }
}
