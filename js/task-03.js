// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список ul#gallery.

// <ul id="gallery"></ul>
// Используй массив объектов images для создания тегов img вложенных в li.
// Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('#gallery');

const createGalleryMarkupItems = ({url, alt}) => {
    return `
      <li class = 'item'>
        <img class = 'item-image' src = '${url}' alt = '${alt}'>
      </li>
    `;
};

const newMarkup = images.map(createGalleryMarkupItems).join('');
console.log(newMarkup);

gallery.insertAdjacentHTML('afterbegin', newMarkup);

// gallery.insertAdjacentHTML('afterbegin', newMarkup);

// const galleryItems = images.map(option => {
//   const galleryEl = document.createElement('li');
//   galleryEl.classList.add('item');
  
//   const galleryImage = document.createElement('img');
//   galleryEl.appendChild(galleryImage);
//   galleryImage.classList.add('item-image');
//   galleryImage.src = option.url;
//   galleryImage.alt = option.alt;
  
//   console.log(galleryEl);
//   return galleryEl;

// })


// gallery.append(...galleryItems);





