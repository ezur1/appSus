'use strict';

import emailList from './cmp/email-list.cmp.js';
import emailHeader from './cmp/email-header.cmp.js';
import sideNav from './cmp/side-nav.cmp.js';

export default {
    template: `
        <section class="email-app-container">
            <email-header></email-header>
            <div class="mail-container flex">
                <side-nav></side-nav>
                <email-list></email-list>
            </div>
        </section>
    `,
    components:{
        emailList,
        emailHeader,
        sideNav
    }

}