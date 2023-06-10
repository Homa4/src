import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

// Створити елементи списку gallery items 
fillGalleryList();

console.log(galleryItems);

gallery.addEventListener('click', handleClick)


function fillGalleryList() {
    for (const item of galleryItems) {
        gallery.innerHTML += `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </li>`
    }
}


function handleClick(event) {
    event.preventDefault();
    if (event.target === gallery) {
        return;
    }
    const link = event.target.href || event.target.dataset.source;
    basicLightbox.create(`<img src="${link}" width="800" height="600">`).show();

}
