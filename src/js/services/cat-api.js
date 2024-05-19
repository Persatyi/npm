import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_K51E2GmO1q5wElup0vSMoBD9LWcpx6vfcCwH8by23k5xGRMdKmpcIkEyqTJYnzLz';

export default class FetchCatsAPI {
  fetchBreeds() {
    return axios.get('/breeds').then(response => {
      return response.data;
    });
  }

  fetchCatsById(id) {
    return axios.get(`/images/search?breed_ids=${id}`).then(response => {
      return response;
    });
  }
}
