import axios from 'axios';
import iziToast from 'izitoast';

export async function getImage(name, page, ipPages) {
  if (ipPages >= 15) {
    const parent = {
      key: '55607491-fd459ee64175eeb9e585f94df',
      q: `${name}`,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: ipPages,
      page,
    };
    const { data } = await axios.get(`https://pixabay.com/api`, { params: parent });
    return data;
  } else {
    iziToast.error({ message: 'count images page <15', position: 'topRight' });
  }
}
