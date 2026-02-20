import axios from 'axios';

axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api/';

async function request(endpoint = '', options = {}, method = 'get') {
  try {
    const response = await axios({
      url: endpoint,
      method,
      ...options,
    });

    return response.data;
  } catch (error) {
    handleError(error);
    throw error;
  }
}

function handleError(error) {
  const status = error?.response?.status;

  if (!error.response) {
    console.error('Network error');

    return;
  }

  if (status >= 500) {
    console.error('Server error');
  } else if (status === 404) {
    console.error('Resource not found');
  } else if (status === 400) {
    console.error('Bad request');
  } else {
    console.error('Request failed');
  }
}

export const http = {
  get: (endpoint, options = {}) => request(endpoint, options, 'get'),
};
