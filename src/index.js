import './sass/index.scss';
import FetchCatsAPI from './js/services/cat-api';
import { catList } from './layouts/catList';
import { catTemplate } from './layouts/catTamplate';
// import Handlebars from 'handlebars';
// import catsListTpl from './layouts/catList.hbs';

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  catInfo: document.querySelector('.cat-info'),
  error: document.querySelector('error'),
};

const fetchCats = new FetchCatsAPI();

fetchCats
  .fetchBreeds()
  .then(response => {
    fetchCats.isVisible = false;
    const markup = response.map(catList);
    renderElements(refs.select, markup);
  })
  .catch(error => {
    console.log(error);
    fetchCats.isVisible = false;
  })
  .finally(() => {
    changeVisibility(fetchCats.isVisible);
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

function renderElements(ref, markup, position = 'beforeend') {
  ref.insertAdjacentHTML(position, markup);
}
