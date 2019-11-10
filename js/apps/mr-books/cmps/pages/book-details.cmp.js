'use strict';

import {booksService} from '../../services/books-service.js';
import userReview from '../user-review.cmp.js';
// @reviewed = "addReview"
export default {
    template: `
        <section class="book-details flex space-around" v-if="book">
            <div class = "book-title-img" >
                <h1>{{book.title}}</h1>
                <h5 v-for="author in book.authors">Written by: {{author}} </h5>
                <img :src="this.book.thumbnail" />
            </div>
            <div class="book-info flex col">
                <h4 :class = "coloredPrice">Price: {{book.listPrice.amount}} {{showCurrency}}</h4>
                <h3>{{book.subtitle}}</h3>
                <h4>Published At: {{book.publishedDate}} </h4>
                <h5>{{pageAmount}}</h5>
                <h5>{{bookAge}}</h5>
            </div>  
            <user-review ></user-review>
            <!-- <router-link :to="'/booksApp/book/' + nextBookId">NEXT BOOK &gt; </router-link> -->
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
        userReview
    }
}