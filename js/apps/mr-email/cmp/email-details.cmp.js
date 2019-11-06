'use strict';
import mailService from '../services/mail-service.js';

export default {
    template: `
        <section v-if="email" class="email-app-container">
            <div>
                <h1>{{email.subject}}</h1>
                <button>delete</button>
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
        }
    },
    watch: {
        '$route.params.id'() {
            console.log('Route param: "id" changed');
            this.loadEmail;
        }
    },

}