export const fetchAllCats = async (apiKey: string) => {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=20&api_key=${apiKey}`
  );
  const result = response.json();
  return result;
};
