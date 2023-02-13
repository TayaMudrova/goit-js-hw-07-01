import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//Посилання на контейнер <div class="gallery"></div>
const galleryBox = document.querySelector(".gallery");

// Додає розмітку галереї в контейнер
galleryBox.insertAdjacentHTML(
  "beforeend",
  createImgGalleryMarkup(galleryItems)
);

// Створює розмітку галереї за шаблоном з масиву даних galleryItems
function createImgGalleryMarkup(images) {
  return images
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" />
	  </a>`;
    })
    .join("");
}
// Іnitializing of SimpleLightbox instance
const lightbox = new SimpleLightbox(".gallery a", {
  // Get the caption from given attribute
  captionsData: "alt",
  // Adds a delay before the caption shows
  captionDelay: 250,
});
