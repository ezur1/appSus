'use strict';
 

export default {
    template: `
        <header class="flex align-c space-between grow">     
            <img src="img/books-logo.png">       
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
            iconShow: true,
        }
    },
    methods: {
        openNav() {
            this.iconShow = !this.iconShow
        }
    },
}