import { Service } from '@/services/Service'

class BookService extends Service {
  get baseUrl() {
    return '/books'
  }

  /*
  markAsRead(book) {
    return this.axios.put(`${this.baseUrl}/${book.id}/mark-as-read`, book)
  }
  */
}

export const bookService = new BookService()