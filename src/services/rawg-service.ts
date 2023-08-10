import axios from 'axios';
const baseUrl = 'https://api.rawg.io/api';
const apiKey = '5ebe18a7043049c5b232b4561bdd2dee';

export const getGamesList = async () => {
  try {
    const response = await axios.get(`${baseUrl}/games?key=${apiKey}`);
    return response.data.results; // Return the array of games
  } catch (err: any) {
    throw new Error(err);
  }
};