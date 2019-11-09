'use strict';


export default {
    template: `
        <header class="keep-header-container flex both-align-c space-between">
            <div clas="logo">
                <i class="logo icon far fa-bell flex">
                    <h1 class="logo logo-txt">Mr keep</h1>
                </i>
            </div>
            <div class="filter-container">
                <input type="text" placeholder="filter by text" v-model="filterBy.txt" @input="onFilterInput()" />
                <!-- <button><i class="fas fa-search"></i></button> -->
            </div>
            <div class="flex site-nav">
                <i @click="openNav()" class="site-app-icon fas fa-th"></i>
                <div :class="{'display-icons':iconShow}" class="nav-icons" >
                    <router-link to="/"><i class="fas fa-home"></i></router-link> 
                    <router-link to="/email"><i class="fas fa-envelope-square"></i></router-link>  
                    <router-link to="/keep"><i class="far fa-sticky-note"></i></router-link>  
                </div>  
            </div>
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