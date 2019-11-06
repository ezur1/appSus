'use strict';
import storageService from '../../../main-service/storage.js';

export default {
    props:['email','emails','idx'],
    template: `
        <li :class="{unread:!email.isRead }"  @click="toggleIsRead(email.isRead)">
            <span class="sender-name">
                {{email.sender}}
            </span>
            <span class="subject-content">
                {{email.subject}}
            </span>
            <span class="read-at">
                {{email.recivedAt}}
            </span>

        </li>
    `,
    methods:{
        toggleIsRead(isRead){
            if(!isRead){
                this.email.isRead = true;
                storageService.store('gEmails', this.emails);
            }
        }
    }
}