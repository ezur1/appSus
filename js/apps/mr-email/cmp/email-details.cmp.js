'use strict';
import mailService from '../services/mail-service.js';

export default {
    name:'email-details',
    template: `
        <section v-if="email" class="full-size-email flex col">
            <div class="flex space-between">
                <h1>Subject: {{email.subject}}</h1>
                <!-- <router-link @click="deleteEmail(email.id)" to="/email">delete</router-link> -->
                <button @click="deleteEmail(email.id)">delete</button>

            </div>
            <p>{{email.sender}}</p>
            <p>{{email.body}}</p>
        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    created() {
        console.log('Loading eMail');
        this.loadEmail();
    },
    methods: {
        loadEmail() {
            const emailId = this.$route.params.id;
            console.log(emailId);

            mailService.getEmailById(emailId)
                .then(email => {
                    this.email = email;
                })
        },
        deleteEmail(emailId){
            mailService.deleteEmail(emailId);  
            this.$router.push('/email/');
        }
    },
    watch: {
        '$route.params.id'() {
            console.log('Route param: "id" changed');
            this.loadEmail;
        }
    }
}