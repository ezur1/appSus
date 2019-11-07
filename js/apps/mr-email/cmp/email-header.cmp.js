'use strict';
import emailFilter from '../cmp/email-filter.cmp.js';

export default {
    template: `
        <header class="email-header-container flex both-align-c space-between">
            <h1>E-mail</h1>
            <div class="filter-emails">
                <email-filter></email-filter>
            </div>
            <button>Apps</button>
        </header>
    `,
    components:{
        emailFilter
    }
}