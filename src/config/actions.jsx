import { GET_GAMES } from './constants';

export const getGames = async (page) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BASE_URL}${GET_GAMES}?_start=${page}&_limit=7`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
