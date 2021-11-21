import { API_URL } from './config';

export async function getBeersList(page, searchTerm) {
  try {
    const endpoint = searchTerm
      ? `${API_URL}?beer_name=${searchTerm}&page=${page}`
      : `${API_URL}?page=${page}`;
    return await (await fetch(endpoint)).json();
  } catch (error) {
    console.log(error);
  }
}

export async function getBeer(id) {
  try {
    return await (await fetch(`${API_URL}/${id}`)).json();
  } catch (error) {
    console.log(error);
  }
}
