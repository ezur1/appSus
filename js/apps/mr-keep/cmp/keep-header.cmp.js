'use strict';


export default {
    template: `
        <header class="keep-header-container flex both-align-c space-around">
            <div><i class="icon far fa-bell flex"><h1 class="logo-txt">Mr keep</h1></i></div>
            <div class="filter-container">
                <input type="text" placeholder="search by text" v-model="filterBy.txt" @input="onFilterInput()" />
                <!-- <button><i class="fas fa-search"></i></button> -->
            </div>
        </header>
    `,
    data() {
        return {
            keeps: null,
            filterBy: {
                txt: ''
            }
        }
    },
    methods: {
        onFilterInput() {
            this.$emit('filtered', this.filterBy)
        }
    },
    computed: {

    },
    created() {

    },
}