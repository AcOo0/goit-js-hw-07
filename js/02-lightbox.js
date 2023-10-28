import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector('.gallery');

list.addEventListener('click', handleClick);
list.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

let lightbox = new SimpleLightbox(".gallery__link", {
    captionsData: "alt",
    captionDelay: 250,    
});

function handleClick(event) { 
    event.preventDefault();
    if (event.target === event.currentTarget)
        return;
};

function createMarkup(arr) { 
    return arr.map(({ preview, original, description }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>
</li>
    `)
        .join('');
};