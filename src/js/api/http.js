import axios from 'axios';
import { showErrorToast } from '../toast';
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
    showErrorToast(error);
  }
}

export const http = {
  get: (endpoint, options = {}) => request(endpoint, options, 'get'),
};
