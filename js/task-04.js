// window.addEventListener('keypress', onKeypress);


const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

decrementButton.addEventListener('click', () => {
    // counter.decrement();
    // counterValue.textContent = counter.value;
    counterValue.textContent = Number(counterValue.textContent)-1;

})

incrementButton.addEventListener('click', () => {
    // counter.increment();
    // counterValue.textContent = counter.value;
    counterValue.textContent = Number(counterValue.textContent) + 1;

})


// const counter = {
//     value: 0,
//     increment() {
//         this.value += 1;
//     },

//     decrement() {
//         this.value -= 1;
//     }
// };