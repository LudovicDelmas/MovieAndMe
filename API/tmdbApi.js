const API_TOKEN = "8816a66dc22e47096f7547ebb1cd0dc7";

export function getFilmsFromApiWithSearchedText (text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
  .then((response) => response.json())
  .catch((error) => console.error(error))
}