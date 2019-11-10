'use strict';


export default {
    template: `
        <header class="flex space-between align-c">
            <h1 class="logo">appSus</h1>
            <div class="menu-icon" @click="onToggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav> 
                <router-link to="/" class="nav-link"> Home page</router-link> 
                <router-link to="/keep" class="nav-link" >Keep app </router-link> 
                <router-link to="/email" class="nav-link" >Email app</router-link> 
                <router-link to="/books" class="nav-link" >Books app</router-link> 
            </nav>
            
        </header>
        
        `,
    data() {
        return {
            showNav: true
        }
    },
    methods: {
        onToggleMenu() {
            this.showNav = !this.showNav;
            console.log('this.showNav', this.showNav);
        }
    },
}