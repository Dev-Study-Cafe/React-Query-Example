export class BookStoreService {
  constructor() {
    console.log('BookStoreService !');
  }

  setBookStoreListsToLocalStorage(items: any) {
    localStorage.setItem('BOOK_STORE', items);
  }

  getBookStoreListsFromLocalStorage() {
    return localStorage.getItem('BOOK_STORE');
  }
}