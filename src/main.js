import iziToast from 'izitoast';
import { getImage } from './js/pixabay-api';
import {
  ImagesRender,
  offLouder,
  hideLoadMoreBtn,
  onImagesRenderClear,
  onLouder,
  showLoadMoreBtn,
} from './js/render-functions';

export const refs = {
  form: document.querySelector('.form'),
  input: document.querySelector('input[name="search-text"]'),
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

let page = 1;
let ipPages = 15;
let name = '';

refs.form.addEventListener('submit', onSearchFormImages);
refs.loadMoreBtn.addEventListener('click', onLoaderMore);

async function onSearchFormImages(e) {
  e.preventDefault();
  name = refs.input.value.trim();
  if (!name) {
    iziToast.error({ message: 'input empty', position: 'topRight' });
    return;
  }
  page = 1;
  hideLoadMoreBtn();
  onLouder();
  onImagesRenderClear();
  try {
    const { total, totalHits, hits } = await getImage(name, page, ipPages);
    if (total === 0) {
      hideLoadMoreBtn();
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }
    const totalPages = Math.ceil(totalHits / ipPages);

    if (page < totalPages) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }

    const imagesCart = hits;

    ImagesRender(imagesCart);

    refs.form.reset();
  } catch (error) {
    iziToast.error({
      message: 'Error loud render',
      position: 'topRight',
    });
  } finally {
    await offLouder();
  }
}
async function onLoaderMore() {
  page++;
  onLouder();
  try {
    hideLoadMoreBtn();
    const { totalHits, hits } = await getImage(name, page, ipPages);

    const totalPages = Math.ceil(totalHits / ipPages);

    if (page < totalPages) {
      showLoadMoreBtn();
    } else {
      hideLoadMoreBtn();

      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
      });
    }

    ImagesRender(hits);

    const elementHeight = refs.gallery.children[0].getBoundingClientRect().height;
    scrollBy({
      top: elementHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      message: 'Error loud render',
      position: 'topRight',
    });
  } finally {
    offLouder();
  }
}
