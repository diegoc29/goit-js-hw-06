const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');

    nameInput.addEventListener('input', updateNameOutput);

    function updateNameOutput() {
      const name = nameInput.value;

      if (name === '') {
        nameOutput.textContent = 'Anonymous';
      } else {
        nameOutput.textContent = name;
      }
    }

