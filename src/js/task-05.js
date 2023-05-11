const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
   if (nameInput.value.trim() !== '') {
    nameOutput.texContent = nameInput.value; 
   } else {
    nameOutput.textContent = 'Anonimo';
   }
});

