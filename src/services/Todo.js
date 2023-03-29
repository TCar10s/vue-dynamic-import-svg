import axios from 'axios'

/**
 * @date 2019-01-01
 * @param {any} todo
 * @returns {any}
 * @description Get all todos
 */
export function getTodos(){
  console.log(import.meta.env.BASE_URL)
  return axios.get(`${import.meta.env.BASE_URL}/todos`)
}