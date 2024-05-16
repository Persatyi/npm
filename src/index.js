import FetchCats from './js/services/cat-api';
// import catsListTpl from './layouts/catList.hbs';

const fetchCats = new FetchCats();

fetchCats.fetchBreeds().then(response => {
  // const list = catsListTpl(response);
  console.log(response);
});

const refs = {
  select: document.querySelector('.breed-select'),
  loader: document.querySelector('.loader'),
  catInfo: document.querySelector('.cat-info'),
};
