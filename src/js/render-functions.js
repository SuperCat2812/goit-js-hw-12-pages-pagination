import SimpleLightbox from 'simplelightbox';
import { refs } from '../main';

const large = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
export function ImagesRender(images) {
  let i = images
    .map(
      image => `  <li class="gallery-item">
  <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}"alt="${image.tags}"></a>
        <div class="info">
          <div class=content>
            <p class="name">Likes</p>
            <p>${image.likes}</p>
          </div class=content>
          <div class=content>
            <p class="name">Views</p>
            <p>${image.views}</p>
          </div>
          <div class=content>
            <p class="name">Comments</p>
            <p>${image.comments}</p>
          </div>
          <div class=content>
            <p class="name">Downloads</p>
            <p>${image.downloads}</p>
          </div>
        </div>
      </li>`
    )
    .join('');
  refs.gallery.insertAdjacentHTML('beforeend', i);
}
export function onImagesRenderLarge() {
  large.refresh();
}

export function onLouder() {
  return refs.loader.classList.add('is-active');
}

export function offLouder() {
  return refs.loader.classList.remove('is-active');
}

export function onImagesRenderClear() {
  return (refs.gallery.innerHTML = '');
}
