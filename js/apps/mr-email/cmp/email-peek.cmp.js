'use strict';

import mailService from '../services/mail-service.js';


export default {
    props:["email"],
    template: `
        <li class="peek flex col">
            <div class=" flex space-between peek-subject">
                <h1>{{email.subject}}</h1>
                <div class="flex space-around">
                    <div @click="deleteEmail(email.id)" class="hover-to-show-link">
                        <span class="hover-to-show">delete</span>
                        <i class="fas fa-trash nav"></i>
                    </div>
                </div>
            </div>
            <div class="flex  space-between peek-sender">
                <p>{{email.sender}}</p>
                <div @click="linkClicked(email.id)" class="hover-to-show-link">
                    <span class="hover-to-show">Expand</span>
                    <i class="fas fa-expand-arrows-alt nav"></i>
                </div>
            </div>
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