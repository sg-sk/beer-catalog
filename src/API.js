import { API_URL } from './config';

export async function getBeers(page) {
  try {
    return await (await fetch(`${API_URL}?page=${page}&per_page=80`)).json();
  } catch (error) {
    console.log(error);
  }
}
