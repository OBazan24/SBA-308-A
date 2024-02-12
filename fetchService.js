export const API_KEY =
  "live_W0zhLhG0byrE7RLNALDvIkld7bik7jD6Vjqdz24NNbiOlIIdtNegx8aznmDyESZD";
export const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";

export async function searchDogs(query) {
  const response = await fetch(
    `${API_URL}/breeds/search?q=${query}&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}

export async function getRandomDogs(limit = 10) {
  const response = await fetch(
    `${API_URL}/images/search?limit=${limit}&api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
}
