'use strict';
import mailService from '../services/mail-service.js';

export default {
    name:'email-details',
    template: `
        <section v-if="email" class="expand-email flex col space-around">
            <div class="flex space-between expand-subject">
                <h1>Subject: {{email.subject}}</h1>
                <div class="flex space-around">
                    <div @click="deleteEmail(email.id)" class="hover-to-show-link">
                        <span class="hover-to-show">delete</span>
                        <i class="fas fa-trash nav"></i>
                    </div>
                </div>
            </div>
            <div class="flex space-between expand-sender">
                <h3>{{email.sender}}</h3>
            </div>
            <div class="flex space-between expand-content">
                <p>{{email.body}}</p>
            </div>

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