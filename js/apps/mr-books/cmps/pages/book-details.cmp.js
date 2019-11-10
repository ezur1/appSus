'use strict';

import {booksService} from '../../services/books-service.js';
import userReview from '../user-review.cmp.js';
import headerBooks from '../header-books.cmp.js';

export default {
    template: `

        <section class="flex col wrep space-around" v-if="book">
            <header-books></header-books>
            <section class="book-details-page flex space-around">
                <div class="book-details flex align-c">
                    <div class="img-info">
                        <img :src="this.book.thumbnail" />
                    </div>
                    <div class = "book-info flex col" >
                        <span class="title-det">{{book.title}}</span>
                        <span class="author-det" v-for="author in book.authors">Written by: {{author}} </span>
                        <span class="price-det" :class = "coloredPrice">Price: {{book.listPrice.amount}} {{showCurrency}}</span>

                    </div>
                    <div class="book-info flex col">
                        <span class="subtitle-det">"{{book.subtitle}}"</span>
                        <span>Published At: {{book.publishedDate}} </span>
                        <span>{{pageAmount}}</span>
                        <span>{{bookAge}}</span>
                    </div>  
                </div>
            </section>
            <user-review ></user-review>
        </section>
     `,
    data() {
        return {
            book: null,
            bookId:null,
            nextBookId:''
        }
    },
    methods:{
    },
    computed: {
        showCurrency() {
            let currency;
            switch (this.book.listPrice.currencyCode) {
                case 'EUR':
                    return '€';
                case 'USD':
                    return '$';
                case 'ILS':
                    return '₪';
            }
            return currency;
        },
        pageAmount() {
            const pages = this.book.pageCount;
            if (pages > 500) return 'Long Reading';
            else if (pages > 200) return 'Decent Reading';
            else return 'Light Reading';
        },
        bookAge() {
            const age = this.book.publishedDate;
            if (age > 10) return 'Veteran Book!'
            else if (age < 2) return 'NEW BOOK!'
        },
        coloredPrice() {
            const price = this.book.listPrice.amount;
            return {
                'red': price > 150,
                'green': price < 20
            }
        }

    },
    created() {

        const bookId = this.$route.params.id;
        this.bookId=bookId;
        booksService.getBookById(bookId)
            .then(book =>{
                this.book = book;
                this.nextBookId = booksService.getNextBookId(book.id);
                console.log(this.nextBookId);
                
            })
    },
    components:{
        userReview,
        headerBooks
    }
}