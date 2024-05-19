import './sass/index.scss';
import FetchCatsAPI from './js/services/cat-api';
import VisibilityLoaders from './js/services/loaders/loaders';
import { catList } from './layouts/catList';
import { catTemplate } from './layouts/catTamplate';
// import Handlebars from 'handlebars';
// import catsListTpl from './layouts/catList.hbs';

const refs = {
  select: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

const fetchCats = new FetchCatsAPI();

const loader = new VisibilityLoaders({ selector: '.loader' });
const errorMessage = new VisibilityLoaders({
  selector: '.error',
  hidden: true,
});

fetchBreedsList();

function fetchBreedsList() {
  fetchCats
    .fetchBreeds()
    .then(response => {
      errorMessage.hide();
      const markup = response.map(catList);
      renderElements(refs.select, markup);
    })
    .catch(error => {
      console.log(error);
      errorMessage.show();
    })
    .finally(() => {
      loader.hide();
    });
}

refs.select.addEventListener('change', e => {
  if (e.target.value === '') {
    return;
  }

  fetchCat(e.target.value);
});

function fetchCat(id) {
  errorMessage.hide();
  loader.show();

  fetchCats
    .fetchCatsById(id)
    .then(response => {
      refs.catInfo.innerHTML = '';
      const markup = catTemplate(response.data[0]);
      renderElements(refs.catInfo, markup);
    })
    .catch(error => {
      errorMessage.show();
    })
    .finally(() => {
      loader.hide();
    });
}

function renderElements(ref, markup, position = 'beforeend') {
  ref.insertAdjacentHTML(position, markup);
}
