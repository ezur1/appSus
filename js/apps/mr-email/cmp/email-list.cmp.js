'use strict';
import mailService from '../services/mail-service.js';
import emailPreview from '../cmp/email-preview.cmp.js';

export default {
    template: `
        <section class="email-app-container flex flex-center">
                <ul class="flex col">
                    <li class="email-organize clean-list">
                        <span>From</span>
                        <span>Subject</span>
                        <span>Recived At</span>
                    </li>
                    <email-preview class="clean-list" v-if="emails" v-for="(email,idx) in emails" :email="email" :key="email.id" :emails="emails" :idx="idx"></email-preview>
                </ul>
        </section>
    `,
    data(){
        return{
            emails:null,
        }
    },
    created(){
        console.log('Loading eMails');
        this.emails=mailService.query();
        console.log(this.emails);
    },
    components:{
        emailPreview
    }

}