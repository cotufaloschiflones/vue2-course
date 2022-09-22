import { Service } from '@/services/Service'

class BookService extends Service {
  get baseUrl() {
    return '/books'
  }

  /*
  markAsRead(bookId) {
    return this.axios.put(`${this.baseUrl}/${bookId}/mark-as-read`)
  }
  */
}

export const bookService = new BookService()