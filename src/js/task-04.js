const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
let counter = 0;

decrementBtn.addEventListener("click", function () { 
    counter -= 1;
    console.log(counter);
});

incrementBtn.addEventListener("click", function () { 
    counter +=1;
    console.log(counter);
});