'use strict';

import mailService from '../services/mail-service.js';


export default {
    props:["email"],
    template: `
        <li class="peek flex col">
            <div class="flex space-between">
                <h1 class="peek-subject">{{email.subject}}</h1>
                <div>
                <div @click="deleteEmail(email.id)">
                    <i class="fas fa-backspace"></i>delete</div>
                <!-- <router-link @click="linkClicked" :to="emailUrl">full-size</router-link> -->
                <div @click="linkClicked(email.id)">fullSize</div>

            </div>
            </div>
            <p class="peek-sender">{{email.sender}}</p>
            <p class="peek-content">{{email.body}}</p>
        </li>
    `,
    methods:{
        linkClicked(){
            this.email.isPreview = false;
            this.$router.push(`/email/${this.email.id}`);
        },
        deleteEmail(emailId){
            mailService.deleteEmail(emailId);
            
        }
    },
    computed:{
        emailUrl(){
            return `/email/${this.email.id}`;
        }
    }
}