const registrationForm = document.getElementById('registrationForm');
const userDataContainer = document.getElementById('userDataContainer');
const userDataTable = userDataContainer.querySelector('table tbody');

const savedUserData = JSON.parse(localStorage.getItem('userData') || '[]');
populateUserDataTable(savedUserData);

registrationForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(registrationForm);
  const userData = {
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
    dob: formData.get('dob'),
    terms: formData.get('terms') === 'on',
  };

  // Validate date of birth
  const dobDate = new Date(userData.dob);
  const today = new Date();
  const age = today.getFullYear() - dobDate.getFullYear();
  if (age < 18 || age > 55) {
    alert('Date of birth must be between 18 and 55 years old.');
    return;
  }

  savedUserData.push(userData);
  localStorage.setItem('userData', JSON.stringify(savedUserData));
