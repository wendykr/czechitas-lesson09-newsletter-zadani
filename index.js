const formElm = document.querySelector('form');
const inputElm = document.querySelector('input');

formElm.addEventListener('submit', (event) => {
    event.preventDefault();

    formElm.innerHTML = `Děkujeme za váš zájem.
    Těšte se na novinky ze světa frontendu a UX na vaší adrese ${inputElm.value}.
    `
    console.log(inputElm.value);
})