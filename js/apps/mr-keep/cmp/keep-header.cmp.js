'use strict';

import keepService from '../../mr-keep/keep-services.js';

export default {
    template: `
        <header class="keep-header-container flex both-align-c space-around">
            <div><i class="icon far fa-bell flex"><h1 class="logo-txt">Mr keep</h1></i></div>
            <div class="filter-container">
                <input type="text" placeholder="Search a keep" />
                <select>
                    <option>All</option>
                    <option>Read</option>
                    <option>Unread</option>
                </select>
                <button><i class="fas fa-search"></i></button>
            </div>
        </header>
    `,
    data() {
        return {
            keeps: null,
            filterBy: null
        }
    },
    methods: {},
    computed: {
        keepsToShow() {
            if (!this.filterBy) return this.books;
            var regex = new RegExp(`${this.filterBy.title}`, 'i');
            return this.books.filter(book => {
                return regex.test(book.title) && book.listPrice.amount >= this.filterBy.fromPrice && book.listPrice.amount <= this.filterBy.toPrice
            })
        }
    },
    created() {
        this.keeps = keepService.query()

    },
}