import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
})

export class Service {
  get axios() {
    return axiosInstance
  }
  get baseUrl() { // override this in child class
    return ''
  }
  // [GET] baseUri/todos => coleccion de todos
  async index(params) {
    return this.axios.get(this.baseUrl, { params })
      .then(response => {
        if (response.status === 204) return []
        return response.data
      })
  }
  // [POST] baseUri/todos => crear un todo
  async create(model) {
    return this.axios.post(this.baseUrl, model)
  }
  // [GET] baseURi/todos/:id => un todo
  async get(id) {
    return this.axios.get(`${this.baseUrl}/${id}`).then(response => response.data)
  }
  // [PUT] baseUri/todos/:id => actualizar un todo
  async update(model) {
    return this.axios.put(`${this.baseUrl}/${model.id}`, model)
  }
  // [DELETE] baseUri/todos/:id => eliminar un todo
  async delete(id) {
    return this.axios.delete(`${this.baseUrl}/${id}`)
  }
}