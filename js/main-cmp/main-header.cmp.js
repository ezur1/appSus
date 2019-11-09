'use strict';


export default {
    template: `
        <header class="flex space-between align-c">
            <h1 class="logo">appSus</h1>
            <nav>
                <router-link to="/" class="nav-link">Home page</router-link> 
                <router-link to="/keep" exact class="nav-link">Keep app </router-link> 
                <router-link to="/email" exact class="nav-link">Email app</router-link> 
            </nav>
            <div class="menu-icon" onclick="onToggleMenu()">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
        
        `
}