import booksApp from '../js/cmps/pages/books-app.cmp.js';
import homePage from './cmps/pages/home-page.cmp.js';
import bookDetails from '../js/cmps/pages/book-details.cmp.js';
import addBook from '../js/cmps/pages/add-book.cmp.js';


const myRoutes = [
    {
        path: '/',
        component:homePage
    },
    {
        path: '/booksApp',
        component: booksApp
    },
    {
        path: '/booksApp/book/:id',
        component: bookDetails
    },
    {
        path: '/addBook',
        component: addBook
    }
]

const myRouter = new VueRouter({
    routes: myRoutes
})
export default myRouter;