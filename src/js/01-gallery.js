// Add imports above this line
import { galleryItems } from "./gallery-items";
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector(".gallery");
function createCatalog(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}
const galleryReturn = createCatalog(galleryItems);
gallery.innerHTML = galleryReturn;
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
