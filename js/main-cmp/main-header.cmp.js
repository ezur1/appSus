'use strict';


export default {
    template: `
        <header>
            <h1>appSus</h1>
            <nav>
                <router-link to="/">Home page</router-link> |
                <router-link to="/keep" exact>Keep app </router-link> |
                <router-link to="/email" exact>Email app</router-link> |
            </nav>
        </header>
        
        `
}