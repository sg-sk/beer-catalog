import { API_URL } from './config';

export async function getBeersList(page) {
  try {
    return await (await fetch(`${API_URL}?page=${page}`)).json();
  } catch (error) {
    console.log(error);
  }
}
