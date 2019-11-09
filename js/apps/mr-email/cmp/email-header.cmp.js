'use strict';
import emailFilter from '../cmp/email-filter.cmp.js';

export default {
    template: `
        <header class="email-header-container flex align-c space-between">     
            <img src="img/mail-logo.png">       
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