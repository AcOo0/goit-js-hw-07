import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery');

list.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
list.addEventListener('click', handleClick);


function handleClick(event) { 
    event.preventDefault();
    if (event.target === event.currentTarget) { 
        return;
    };

    const imageSource = event.target.dataset.source;
    const instance = basicLightbox.create(`
<img src="${imageSource}">
`)
    instance.show();
        
    function handleKeyPress(event) {
    if (event.key === 'Escape') {
      instance.close();
      document.removeEventListener('keyup', handleKeyPress);
    }
    }
    
    document.addEventListener('keyup', handleKeyPress);
};

function createMarkup(arr) { 
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `)
        .join('');
};
