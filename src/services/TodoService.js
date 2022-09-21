import { Service } from '@/services/Service'

class TodoService extends Service {
  get baseUrl() {
    return '/todos'
  }
}

export const todoService = new TodoService()