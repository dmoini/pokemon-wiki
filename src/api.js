const api = "https://pokeapi.co/api/v2/";

const urlFor = resource => `${api}${resource}/`;

const HTTP_OK = 200;

const throwResponseError = response => {
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const emitNativeError = error => {
  throw error;
};

const statusCheck = successStatuses => response => {
  if (successStatuses.includes(response.status)) {
    return response;
  } else {
    throwResponseError(response);
  }
};

const okCheck = statusCheck([HTTP_OK]);

const fetchUrl = url =>
  fetch(url)
    .then(okCheck, emitNativeError)
    .then(response => response.json());

const query = (resource, param) =>
  fetch(`${urlFor(resource)}${param}`)
    .then(okCheck, emitNativeError)
    .then(response => response.json());

const searchPokemon = param => query("pokemon", param);
const searchMove = param => query("move", param);
const searchItem = param => query("item", param);

export { searchPokemon, searchMove, searchItem, fetchUrl };
