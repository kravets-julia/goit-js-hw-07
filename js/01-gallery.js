import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryContainer = document.querySelector('.gallery');
const cardsGalery = (createGaleryItems(galleryItems));
gallaryContainer.insertAdjacentHTML('beforeend', cardsGalery);
console.log(gallaryContainer)

gallaryContainer.addEventListener('click', onClickContainer);


function createGaleryItems(galleryItems){
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    }).join('');
 }

function onClickContainer (evt) {
    evt.preventDefault();

if(evt.target.nodeName !== 'IMG') {
  return
}

const bigImg = basicLightbox.create(`
    <img src = "${evt.target.dataset.source}" widht="800" height="600"/>
`)

function onEscClose (evt) {
		let isEscape = false;
		if ( "key" in evt ) {
			isEscape = ( evt.code === "Escape");
     	   bigImg.close();
		}
  }
	
bigImg.show()
gallaryContainer.addEventListener('keydown', onEscClose)
bigImg.close();
gallaryContainer.removeEventListener('keydown', onEscClose)
}

