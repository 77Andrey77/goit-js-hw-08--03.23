import SimpleLightbox from "simpleLightbox"; 
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

const galleryEl = document.querySelector(".gallery");


const galleryMarkup = galleryItems.map(({ preview, original, description }) =>
  `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`).join('');

const createGallery = galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

lightbox = new SimpleLightbox('.gallery a', { overlayOpacity: 0.8, disableScroll:false, scrollZoom:false, captionsData:'alt', captionPosition: "outside",captionDelay:1500 });