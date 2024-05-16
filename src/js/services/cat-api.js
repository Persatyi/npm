// Use it as the 'x-api-key' header when making any request to the API, or by adding as a query string parameter e.g.
// 'api_key=live_K51E2GmO1q5wElup0vSMoBD9LWcpx6vfcCwH8by23k5xGRMdKmpcIkEyqTJYnzLz'

import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';
axios.defaults.headers.common['x-api-key'] =
  'live_K51E2GmO1q5wElup0vSMoBD9LWcpx6vfcCwH8by23k5xGRMdKmpcIkEyqTJYnzLz';

export default class FetchCats {
  fetchBreeds() {
    return axios.get('/breeds').then(response => {
      return response.data;
    });
  }
}
