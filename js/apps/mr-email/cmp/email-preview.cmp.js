'use strict';
import storageService from '../../../main-service/storage.js';
import emailPeek from './email-peek.cmp.js';

export default {
    props: ['email', 'emails', 'idx'],
    template: `
        <li v-if="email" class="email-node flex both-align-c space-between col" :class="{unread:!email.isRead}"  @click="toggleIsRead(email.isRead),toggleIsPreview()">
            <div class="email-info flex space-between" :class="{preview:email.isPreview}">
            <div class="sender-name ">
                {{email.sender}}
            </div>
            <div class="subject-content ">
                {{email.subject}}
            </div>
            <div class="read-at">
                {{email.time}}
            </div>
            </div>

            <div v-if="email.isPreview">
                <email-peek :email="email" ></email-peek>
            </div>
        </li>
    `,
    methods: {
        toggleIsRead(isRead) {
            if (!isRead) {
                this.email.isRead = true;
                storageService.store('gEmails', this.emails);
            }
        },
        toggleIsPreview() {
            this.email.isPreview = !this.email.isPreview;
            storageService.store('gEmails', this.emails);
        },
    },
    components: {
        emailPeek
    }
}