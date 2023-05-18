const counterValueElement = document.getElementById('value');
    const decrementButton = document.querySelector('button[data-action="decrement"]');
    const incrementButton = document.querySelector('button[data-action="increment"]');

    let counterValue = 0;

    decrementButton.addEventListener('click', () => {
      counterValue--;
      updateCounterValue();
    });

    incrementButton.addEventListener('click', () => {
      counterValue++;
      updateCounterValue();
    });

    function updateCounterValue() {
      counterValueElement.textContent = counterValue;
    }