import { API_URL } from './config';

export async function getBeers(page) {
  try {
    return await (await fetch(`${API_URL}?page=${page}`)).json();
  } catch (error) {
    console.log(error);
  }
}
