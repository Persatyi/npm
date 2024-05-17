import FetchCatsAPI from './js/services/cat-api';
import { catList } from './layouts/catList';
import { catTemplate } from './layouts/catTamplate';
// import catsListTpl from './layouts/catList.hbs';
// import Handlebars from 'handlebars';
// console.log('🚀 ~ catsListTpl:', catsListTpl());

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  catInfo: document.querySelector('.cat-info'),
};

const fetchCats = new FetchCatsAPI();

fetchCats
  .fetchBreeds()
  .then(response => {
    const markup = response.map(catList);
    refs.select.insertAdjacentHTML('beforeend', markup);
  })
  .catch(console.log)
  .finally(() => {
    refs.loader.classList.add('is-hidden');
  });

refs.select.addEventListener('change', e => {
  if (e.target.value === '') {
    return;
  }

  fetchCats
    .fetchCatsById(e.target.value)
    .then(response => {
      refs.catInfo.innerHTML = '';
      const markup = catTemplate(response.data[0]);
      refs.catInfo.insertAdjacentHTML('beforeend', markup);
    })
    .catch(console.log);
});
