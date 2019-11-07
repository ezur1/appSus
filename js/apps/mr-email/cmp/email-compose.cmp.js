'use strict';

import mailService from '../services/mail-service.js';


export default {
    template: `
        <section class="compose-modal">
            <div class="compose-top flex space-between ">
                <span>  New Messege </span>
                <span @click="closeCompose" ><i class="fas fa-times"></i></span> 
            </div>
            <div class="flex col space-around">
                <div class="flex col eMail-inputs">
                    <div>
                        Subject:
                        <input v-model="newEmail.subject" type="text" placeholder="Enter Email Subject"/> 
                    </div>
                    <div>
                        Email Address:
                        <input v-model="newEmail.sendto" type="text" placeholder="Enter Email Adress"/> 
                    </div>
                </div>
                <textarea v-model="newEmail.body" placeholder="Enter your email here:"></textarea>
            </div>
            <button class="replayBtn" @click="sendEmail"><i class="fas fa-share"></i>Send</button>
        </section>
    `,
    data(){
        return{
            newEmail:{
                subject:'',
                body:'' ,
                sendto: '',
                sender: 'Elior & Natan',
                isRead: true,
                isDeleted: false,
                isSent: true,
                isFavorite: false,
                isPreview:false
            }
        }
    },
    methods:{
        closeCompose(){
            this.$emit('closeModal')
        },
        sendEmail(){
            mailService.sendEmail(this.newEmail);
            this.closeCompose();
        }
    },
    computed:{
    },

}