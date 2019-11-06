'use strict';
import storageService from '../../../main-service/storage.js';

export default {
    props:['email','emails','idx'],
    template: `
       
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