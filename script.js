const add_button = document.querySelector('.add');
const rem_button = document.querySelector('.rem');
const reset_button = document.querySelector('.reset');
const display = document.querySelector('h2');
let counter = 0;

add_button.addEventListener('click', function() {
    counter++;
    display.innerText = counter;});

rem_button.addEventListener('click', function() {
    counter--;
    display.innerText = counter;});

reset_button.addEventListener('click', function() {
    counter = 0;
    display.innerText = counter;})

function Alternar_tema() {
    const body = document.body
    body.classList.toggle('light-mode')
    const btn = document.querySelector('#btn')
    btn.classList.toggle('light-mode-btn')
}