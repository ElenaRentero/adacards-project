function fetchApi(data) {
  return fetch('/card', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}

export default fetchApi;
