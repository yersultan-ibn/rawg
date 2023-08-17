import axios from 'axios';
const baseUrl = 'https://api.rawg.io/api';
const apiKey = '5ebe18a7043049c5b232b4561bdd2dee';
export const getGamesList = async (filterParam: any) => {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(filterParam)) {
    if (value) {
      params.append(key, String(value));
    }
  }
  try {
    const response = await axios.get(`${baseUrl}/games?key=${apiKey}&${params.toString()}`);
    return response.data.results;
  } catch (err: any) {
    throw new Error(err);
  }
};
