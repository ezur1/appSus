'use strict';


export default {
    template: `
        <header class="keep-header-container flex both-align-c space-between">
            <div><i class="icon far fa-bell flex"><h1 class="logo-txt">Mr keep</h1></i></div>
            <div class="filter-container">
                <input type="text" placeholder="filter by text" v-model="filterBy.txt" @input="onFilterInput()" />
                <!-- <button><i class="fas fa-search"></i></button> -->
            </div>
            <div class="nav-icons">
                <router-link v-if="iconShow" to="/"><i class="fas fa-home"></i></router-link> 
                <router-link v-if="iconShow" to="/email"><i class="fas fa-envelope-square"></i></router-link>  
                <router-link v-if="iconShow" to="/keep"><i class="far fa-sticky-note"></i></router-link>  
            </div>  
            <i @click="openNav()" class="icon fas fa-th" :class="{displayNone:isDisplay}"></i>
            
        </header>
    `,
    data() {
        return {
            keeps: null,
            filterBy: {
                txt: ''
            },
            isDisplayMenu: false,
            iconShow: false,
            isDisplay: false
        }
    },
    methods: {
        onFilterInput() {
            this.$emit('filtered', this.filterBy)
        },
        openNav() {
            this.iconShow = !this.iconShow
            this.isDisplay = !this.isDisplay
        }
    },
    computed: {},
    created() {

    },
}