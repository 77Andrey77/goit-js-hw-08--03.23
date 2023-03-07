import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);

const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
`
<a class="gallery__item" href="${original}" title="${description}" >
  <img class="gallery__image" src="${preview}" alt="${description}" captionPosition />
</a>
`
).join('');

const galleryEl = document.querySelector('.gallery');
//рендер разметки
galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

 new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay: 1000,captionPosition: "bottom",});