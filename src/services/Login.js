import axios from 'axios';

export function login(form) {
  const url = "https://dummyjson.com/auth/login";
  console.log(url);
  return axios.post(url, form);
}
