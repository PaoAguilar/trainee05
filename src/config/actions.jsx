import { BASE_URL, GET_GAMES } from './constants';

export const getGames = async (page) => {
  try {
    const res = await fetch(`${BASE_URL}${GET_GAMES}?_start=${page}&_limit=7`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
