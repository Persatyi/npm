export function catTemplate({ url, breeds }) {
  const { description, name, temperament } = breeds[0];
  return `<img src="${url}" alt="${name}" width="300">
  <h3>${name}</h3>
  <p>${description}</p>
  <b>Temperament: </b>
  <p>${temperament}</p>
  `;
}
