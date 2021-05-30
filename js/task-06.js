// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputHolder = document.querySelector('input');

inputHolder.addEventListener('blur', () => {

    if (inputHolder.value.length === Number(inputHolder.dataset.length)) {
        inputHolder.classList.add('valid');

        if (inputHolder.classList.contains('invalid')) {
            inputHolder.classList.remove('invalid');
        }       
    }
    else if (inputHolder.value.length !== Number(inputHolder.dataset.length) && inputHolder.value.length !== 0) {
        inputHolder.classList.add('invalid');

        if (inputHolder.classList.contains('valid')) {
            inputHolder.classList.remove('valid');
        }
    }
    else if (inputHolder.value.length === 0){
        inputHolder.classList.remove('valid', 'invalid');
    }
}
);



