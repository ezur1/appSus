'use strict';

export default {
    props: ['book'],
    template: `
        <li class="book" >
            <img :src="imgSrc" />
            <h2>{{book.title}}</h2>
            <h4>Price:{{book.listPrice.amount}}{{showCurrency}} </h4>
        </li>
    `,
    data() {
        return {
            isShowing: false,
            imgSrc: this.book.thumbnail
        }
    },
    methods: {
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
    }
}