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

export const authLogin = async (username, pass) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/auth/local`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        identifier: username,
        password: pass,
      }),
    });
    if (res.status === 200) {
      const data = res.json();
      return data;
    }
    return Promise.reject();
  } catch (error) {
    throw new Error(error.message);
  }
};
