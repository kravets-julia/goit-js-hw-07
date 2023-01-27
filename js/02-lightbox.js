import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');
const cardsGalery = (createGaleryItems(galleryItems));
gallaryContainer.insertAdjacentHTML('beforeend', cardsGalery);
console.log(gallaryContainer)

gallaryContainer.addEventListener('click', onClickContainer)

function createGaleryItems(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li>
        <a class="gallery__link" href="${original}">
          <img 
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            self
          />
        </a>
        </li>
      `;
    }).join('');
 }


function onClickContainer(evt) {
    evt.preventDefault();

    if(evt.target.nodeName !== 'IMG') {
        return
      }

 var lightbox = new SimpleLightbox('.gallery a', {
    captions: "true",
    captionSelector: "img",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
    scrollZoom: false,

 });

 if(evt.currentTarget.nodeName === 'IMG') {
  close.SimpleLightbox;}

 console.log(lightbox)

}
