const ageInput = document.getElementById('ageInput');
const ageAlert = document.getElementById('ageAlert');
const form = document.getElementById('regForm');

ageInput.addEventListener('input', () => {
  if (ageInput.value && ageInput.value < 16) {
    ageAlert.style.display = 'block';
  } else {
    ageAlert.style.display = 'none';
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Registration Successful!');
});