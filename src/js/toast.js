function getBackendErrorMessage(error) {
  const status = error?.response?.status;

  if (!error?.response) {
    return 'Network error. Please check your internet connection and try again.';
  }

  if (status >= 500) {
    return 'Server error. Please try again a little later.';
  }

  if (status === 404) {
    return 'Requested data was not found.';
  }

  if (status === 400) {
    return 'Invalid request. Please refresh the page and try again.';
  }

  return 'Request failed. Please try again.';
}

export function showErrorToast(error) {
  const message = getBackendErrorMessage(error);

  if (window.iziToast?.error) {
    window.iziToast.error({
      title: 'Error',
      message,
      position: 'topRight',
      timeout: 4000,
    });
  }
}
