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

const listItems = ingredients.map(option => {
  const item = document.createElement('li');
  item.textContent = option;

  // console.log(item);
  return item;
})

// console.log(listItems);

list.append(...listItems);










