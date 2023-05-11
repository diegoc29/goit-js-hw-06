const inputElement = document.querySelector('#validation-input');

inputElement.addEventListener('blur', (e) => {
  const value = e.currentTarget.value;
  const maxLength = parseInt(inputElement.getAttribute('data-length'));
  console.log(maxLength);
  
  if (value.length === maxLength) {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  } else {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
  
});