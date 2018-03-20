import 'whatwg-fetch';

/* ** 說明：https://github.github.io/fetch/ ** */

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {function} func    對資料做處理的func
 * @param  {object} [options] The options we want to pass to "fetch"
 */
export default function request(url, func, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => func(data))
    .catch(err => ({ err }));
}
