'use strict';

import emailList from './cmp/email-list.cmp.js';

export default {
    template: `
        <section class="email-app-container">
            <!-- <mail-header></mail-header> -->
            <div class="mail-container">
                <!-- <side-nav></side-nav> -->
                <email-list></email-list>
            </div>
        </section>
    `,
    components:{
        emailList
    }

}