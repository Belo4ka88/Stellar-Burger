import {api_url} from './constants'

const getResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json()
    .then((data) => {
      throw new Error(data.message);
    });
};

export const getIngridients = () => {
  return fetch(`${api_url}/api/ingredients`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(getResponse)
}
