import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${original}>
      <img class="gallery__image" src=${preview} data-source=${original} alt=${description}/>
      </a>
      </li>`
  )
  .join("");

list.insertAdjacentHTML("beforeend", markup);

list.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const imageSrc = evt.target.dataset.source;
  const instance = basicLightbox.create(`<img src=${imageSrc} width="800" height="600"/>`, {
    onShow: (instance) => {
      window.addEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
          instance.close();
        }
      });
    },
    onClose: (instance) => {
      window.removeEventListener("keydown", (evt) => {
        if (evt.code === "Escape") {
          instance.close();
        }
      });
    },
  });
  instance.show();
}

console.log(galleryItems);
