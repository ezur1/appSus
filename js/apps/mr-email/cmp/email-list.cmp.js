'use strict';
import mailService from '../services/mail-service.js';
import emailPreview from '../cmp/email-preview.cmp.js';
import {eventBus} from '../../../main-service/bus-service.js';

export default {
    template: `
        <section class="email-app-container flex flex-center">

                <ul class="emails-list flex col">
                    <li class="email-organize clean-list flex both-align-c space-between">
                        <span>From</span>
                        <span>Subject</span>
                        <span>Recived At</span>
                    </li>
                    <email-preview class="clean-list" v-if="(emails)" v-for="(email,idx) in filterEmails" :email="email" :key="email.id" :emails="emails" :idx="idx"></email-preview>
                </ul>
        </section>
    `,
    data(){
        return{
            emails:null,
            currentEmailsState:1
        }
    },
    created(){
        console.log('Loading eMails');
        this.emails=mailService.query();
        console.log(this.emails);
        eventBus.$on('changeState', state => {
            this.currentEmailsState = state;
        });
    },
    components:{
        emailPreview
    },
    computed:{
        filterEmails(){
            if (this.currentEmailsState === 1) {
                return this.emails.filter(email => !email.isDeleted);   
            } else if (this.currentEmailsState === 2) {
                return this.emails.filter(email => email.isSent);
            } else if (this.currentEmailsState === 3) {
                return this.emails.filter(email => email.isDeleted);
            }
        }
    }

}