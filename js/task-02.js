// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
//после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const list = document.querySelector('#ingredients');

ingredients.forEach(elem => {
    const ingredient = document.createElement('li');
    ingredient.textContent = elem;
    list.append(ingredient);
    // console.log(ingredient);  
})

// console.log(list);







