'use strict';
import storageService from '../../../main-service/storage.js';
import emailPeek from './email-peek.cmp.js';

export default {
    props:['email','emails','idx'],
    template: `
        <li :class="{unread:!email.isRead, preview:email.isPreview}"  @click="toggleIsRead(email.isRead),toggleIsPreview()">
            <span class="sender-name">
                {{email.sender}}
            </span>
            <span class="subject-content">
                {{email.subject}}
            </span>
            <span class="read-at">
                {{email.recivedAt}}
            </span>
            <div v-if="email.isPreview">
                <email-peek :email="email" ></email-peek>
            </div>
        </li>
    `,
    methods:{
        toggleIsRead(isRead){
            if(!isRead){
                this.email.isRead = true;
                storageService.store('gEmails', this.emails);
            }
        },
        toggleIsPreview(){
                this.email.isPreview = !this.email.isPreview ;
                storageService.store('gEmails', this.emails);
            }
        },
        components:{
            emailPeek
        }
    }