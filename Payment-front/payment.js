const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let isValid = true;

  const cardNumber = form.elements.cardNumber.value;
  if (cardNumber.length !== 16) {
    document.getElementById('cardNumberError').innerHTML = 'Card number must be 16 digits';
    isValid = false;
  } else {
    document.getElementById('cardNumberError').innerHTML = '';
  }

  const password = form.elements.password.value;
  if (password.length !== 8) {
    document.getElementById('passwordError').innerHTML = 'Password must be  8 digits';
    isValid = false;
  } else {
    document.getElementById('passwordError').innerHTML = '';
  }

  if (isValid) {
    // Send the form data to the backend
    axios.post('http://localhost:3000/Payment', { cardNumber, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
});
